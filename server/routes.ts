import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

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
      if (error instanceof Error) {
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

  // チャットボット用の新しいエンドポイント
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