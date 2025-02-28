import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// お知らせデータ
const newsItems = [
  {
    id: "4",
    date: "2025.2.17",
    title: "メディア掲載のお知らせ",
    link: "/news/media-coverage"
  },
  {
    id: "3",
    date: "2024.12.9",
    title: "AGENTS DOING ALLサービス「Project m」提供開始のお知らせ",
    link: "/news/project-m-launch"
  },
  {
    id: "2",
    date: "2024.12.2",
    title: "1000以上の商品情報を正確にリアルタイム回答「MARIA AI」サービス開始",
    link: "/news/maria-ai-launch"
  },
  {
    id: "1",
    date: "2024.11.25",
    title: "ポンギンカンの事業戦略について",
    link: "/news/business-strategy"
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
