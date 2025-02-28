import {
  BrainCircuit,
  Building2,
  Presentation,
  Wrench,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

const features = [
  {
    title: "生成AI導入・運用セミナー",
    description:
      "最新の生成AI技術と活用事例を学ぶセミナーを開催。実践的なワークショップで確実な導入をサポートします。",
    icon: Presentation,
    path: "/services/seminar"
  },
  {
    title: "個別導入・運用支援",
    description:
      "お客様の業務に最適な生成AIツールの選定から導入、運用までを一貫してサポート。スムーズな実装を実現します。",
    icon: BrainCircuit,
    path: "/services/support"
  },
  {
    title: "アプリ・ツール開発",
    description:
      "業務に特化した生成AIアプリケーションやツールの開発。既存システムとの連携も含めて、カスタマイズされたソリューションを提供します。",
    icon: Wrench,
    path: "/services/development"
  },
  {
    title: "経営支援・診断",
    description:
      "経営戦略の立案から実行まで、専門家による包括的な支援を提供。生成AIを活用した業務改善で、経営効率の向上を実現します。",
    icon: Building2,
    path: "/services/consulting"
  },
];

// 最新のお知らせ
const latestNews = [
  {
    date: "2025.2.17",
    title: "メディア掲載のお知らせ",
    link: "/news/media-coverage"
  },
  {
    date: "2024.12.9",
    title: "AGENTS DOING ALLサービス「Project m」提供開始のお知らせ",
    link: "/news/project-m-launch"
  },
  {
    date: "2024.12.2",
    title: "1000以上の商品情報を正確にリアルタイム回答「MARIA AI」サービス開始",
    link: "/news/maria-ai-launch"
  }
];

export default function Features() {
  return (
    <section className="container py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        主要サービス
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Link key={feature.title} href={feature.path}>
            <Card className="cursor-pointer transition-colors hover:bg-accent">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* お知らせセクション */}
      <div className="mt-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">お知らせ</h2>
          <Link href="/news" className="text-primary hover:underline">
            すべて見る
          </Link>
        </div>
        <div className="grid gap-4">
          {latestNews.map((news) => (
            <Link key={news.date} href={news.link}>
              <Card className="cursor-pointer transition-colors hover:bg-accent">
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">
                    {news.date}
                  </div>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}