import { Card, CardHeader, CardTitle } from "@/components/ui/card";

// お知らせデータ
const newsItems = [
  {
    id: "4",
    date: "2025.03.01",
    title: "ブログを更新しました",
    link: "https://note.com/hiroki_morishima"
  },
  {
    id: "3",
    date: "2025.02.15",
    title: "ブログを更新しました",
    link: "https://note.com/hiroki_morishima"
  },
  {
    id: "2",
    date: "2025.01.10",
    title: "ブログを更新しました",
    link: "https://note.com/hiroki_morishima"
  },
  {
    id: "1",
    date: "2024.12.07",
    title: "ブログを更新しました",
    link: "https://note.com/hiroki_morishima"
  }
];

export default function NewsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">お知らせ</h1>
      <div className="grid gap-4">
        {newsItems.map((news) => (
          <a key={news.id} href={news.link} target="_blank" rel="noopener noreferrer">
            <Card className="cursor-pointer transition-colors hover:bg-accent">
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">
                  {news.date}
                </div>
                <CardTitle className="text-xl">{news.title}</CardTitle>
              </CardHeader>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}