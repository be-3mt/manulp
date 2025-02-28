import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Presentation,
  BrainCircuit,
  Wrench,
  Building2,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "生成AI導入・運用セミナー",
    description: "最新の生成AI技術と活用事例を学ぶセミナーを開催。実践的なワークショップで確実な導入をサポートします。",
    icon: Presentation,
    path: "/services/seminar",
    benefits: ["基礎から実践まで体系的に学習", "少人数制で質の高い研修", "実践的なワークショップ"]
  },
  {
    title: "個別導入・運用支援",
    description: "お客様の業務に最適な生成AIツールの選定から導入、運用までを一貫してサポート。スムーズな実装を実現します。",
    icon: BrainCircuit,
    path: "/services/support",
    benefits: ["業務分析と最適化提案", "段階的な導入支援", "継続的なサポート体制"]
  },
  {
    title: "アプリ・ツール開発",
    description: "業務に特化した生成AIアプリケーションやツールの開発。既存システムとの連携も含めて、カスタマイズされたソリューションを提供します。",
    icon: Wrench,
    path: "/services/development",
    benefits: ["要件に合わせた開発", "システム連携対応", "継続的な保守管理"]
  },
  {
    title: "経営支援・診断",
    description: "経営戦略の立案から実行まで、専門家による包括的な支援を提供。生成AIを活用した業務改善で、経営効率の向上を実現します。",
    icon: Building2,
    path: "/services/consulting",
    benefits: ["経営状況の詳細分析", "AI活用戦略の策定", "定期的な進捗確認"]
  }
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 max-w-7xl py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">サービス一覧</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          製造業のデジタルトランスフォーメーションを実現する4つの主要サービス
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <Link key={service.title} href={service.path}>
            <Card className="h-full hover:bg-accent transition-colors cursor-pointer">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div>
                  <h4 className="font-medium mb-2">主な特徴:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.benefits.map((benefit) => (
                      <li key={benefit}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">お気軽にご相談ください</h2>
        <Link href="/contact">
          <Button size="lg" className="gap-2">
            お問い合わせ <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}