import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertChatMessageSchema, insertChatUserSchema, insertChatSessionSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { generateAIResponse } from "./openai";
import { ZodError } from "zod";

export function registerRoutes(app: Express): Server {
  // 既存のルート
  app.get("/api/blog", async (_req, res) => {
    const posts = await storage.getAllBlogPosts();
    res.json(posts);
  });

  app.get("/api/blog/:slug", async (req, res) => {
    const post = await storage.getBlogPostBySlug(req.params.slug);
    if (!post) {
      res.status(404).json({ message: "Blog post not found" });
      return;
    }
    res.json(post);
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const contact = insertContactSchema.parse(req.body);
      const result = await storage.createContact(contact);
      res.json(result);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: fromZodError(error).message });
        return;
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/dashboard/projects", async (_req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // チャットボット関連の新しいエンドポイント
  app.post("/api/chat/session", async (req, res) => {
    try {
      const { name, email } = req.body;
      let user = await storage.getChatUserByEmail(email);

      if (!user) {
        const userData = insertChatUserSchema.parse({ name, email });
        user = await storage.createChatUser(userData);
      }

      const sessionData = insertChatSessionSchema.parse({ userId: user.id });
      const session = await storage.createChatSession(sessionData);

      res.json({ sessionId: session.id });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: fromZodError(error).message });
        return;
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/chat/message", async (req, res) => {
    try {
      const { sessionId, message } = req.body;
      if (!sessionId || !message) {
        res.status(400).json({ message: "セッションIDとメッセージは必須です" });
        return;
      }

      const session = await storage.getChatSessionById(parseInt(sessionId));
      if (!session) {
        res.status(404).json({ message: "セッションが見つかりません" });
        return;
      }

      // ユーザーメッセージを保存
      const userMessage = insertChatMessageSchema.parse({
        sessionId: session.id,
        content: message,
        role: "user",
      });
      await storage.createChatMessage(userMessage);

      // これまでのメッセージ履歴を取得
      const messageHistory = await storage.getChatMessagesBySessionId(session.id);
      const formattedHistory = messageHistory.map(msg => ({
        role: msg.role,
        content: msg.content,
      }));

      // AI応答を生成
      const aiResponse = await generateAIResponse(formattedHistory, session.id.toString());

      // AI応答を保存
      const assistantMessage = insertChatMessageSchema.parse({
        sessionId: session.id,
        content: aiResponse,
        role: "assistant",
      });
      await storage.createChatMessage(assistantMessage);

      res.json({ message: aiResponse });
    } catch (error) {
      console.error("Chat Error:", error);
      if (error instanceof ZodError) {
        res.status(400).json({ message: fromZodError(error).message });
        return;
      }
      res.status(500).json({
        message: "チャットの処理中にエラーが発生しました",
      });
    }
  });

  app.get("/api/chat/history/:sessionId", async (req, res) => {
    try {
      const sessionId = parseInt(req.params.sessionId);
      const messages = await storage.getChatMessagesBySessionId(sessionId);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "履歴の取得中にエラーが発生しました" });
    }
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        res.status(400).json({ message: "メッセージが必要です" });
        return;
      }

      // OpenAI APIを使用してレスポンスを生成
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "あなたは製造業向けの生成AI導入支援を行う猫型AIアシスタント「にゃんこ」です。かわいらしく、親しみやすい口調で応答してください。",
            },
            {
              role: "user",
              content: message,
            },
          ],
        }),
      });

      const data = await response.json();
      res.json({ message: data.choices[0].message.content });
    } catch (error) {
      console.error("Chat API Error:", error);
      res.status(500).json({
        message: "申し訳ありません。チャットの処理中にエラーが発生しました。",
      });
    }
  });

  return createServer(app);
}