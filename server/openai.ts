import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateAIResponse(messages: { role: string; content: string }[], sessionId: string): Promise<string> {
  try {
    const systemPrompt = {
      role: "system" as const,
      content: `あなたは製造業向けの生成AI導入支援を行う猫型AIアシスタント「にゃんこ」です。
以下の点に注意して応答してください：
- かわいらしく、親しみやすい口調で話してください
- 製造業のDX支援、特に生成AI導入に関する専門知識を活かして回答してください
- 説明は簡潔で分かりやすく行ってください
- セッションID: ${sessionId}`
    };

    const apiMessages = messages.map(msg => ({
      role: msg.role as "user" | "assistant" | "system",
      content: msg.content
    }));

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        systemPrompt,
        ...apiMessages
      ] as OpenAI.Chat.ChatCompletionMessageParam[],
      temperature: 0.7,
      max_tokens: 500,
    });

    return response.choices[0].message.content || "申し訳ありません。応答を生成できませんでした。";
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw new Error("AI応答の生成中にエラーが発生しました。");
  }
}