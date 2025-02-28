import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// お知らせデータ
const newsItems = [
  {
    id: "4",
    date: "2025.03.01",
    title: "ブログを更新しました",
    link: "/news/blog-update-4"
  },
  {
    id: "3",
    date: "2025.02.15",
    title: "ブログを更新しました",
    link: "/news/blog-update-3"
  },
  {
    id: "2",
    date: "2025.01.10",
    title: "ブログを更新しました",
    link: "/news/blog-update-2"
  },
  {
    id: "1",
    date: "2024.12.07",
    title: "ブログを更新しました",
    link: "/news/blog-update-1"
  }
];

export default function NewsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">お知らせ</h1>
      <div className="grid gap-4">
        {newsItems.map((news) => (
          <Link key={news.id} href={news.link}>
            <Card className="cursor-pointer transition-colors hover:bg-accent">
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">
                  {news.date}
                </div>
                <CardTitle className="text-xl">{news.title}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}