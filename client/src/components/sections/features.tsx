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
    date: "2025.03.01",
    title: "ブログを更新しました",
    link: "https://note.com/hiroki_morishima"
  },
  {
    date: "2025.02.15",
    title: "ブログを更新しました",
    link: "https://note.com/hiroki_morishima"
  },
  {
    date: "2025.01.10",
    title: "ブログを更新しました",
    link: "https://note.com/hiroki_morishima"
  }
];

export default function Features() {
  return (
    <section className="container py-20">
      {/* お知らせセクション */}
      <div className="mb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">お知らせ</h2>
          <Link href="/news" className="text-primary hover:underline">
            すべて見る
          </Link>
        </div>
        <div className="grid gap-4">
          {latestNews.map((news) => (
            <a key={news.date} href={news.link} target="_blank" rel="noopener noreferrer">
              <Card className="cursor-pointer transition-colors hover:bg-accent">
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">
                    {news.date}
                  </div>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </div>

      {/* 主要サービスセクション */}
      <div className="relative py-20 rounded-lg overflow-hidden">
        {/* 背景画像 */}
        <div 
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: 'url(/images/human-robot.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.15'
          }}
        />

        <h2 className="text-3xl font-bold text-center mb-4">
          人とAIの協力で、<br />
          製造業のDXを加速
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.path}>
              <Card className="cursor-pointer transition-colors hover:bg-accent bg-background/80 backdrop-blur-sm">
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
      </div>
    </section>
  );
}