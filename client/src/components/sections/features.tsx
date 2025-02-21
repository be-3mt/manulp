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
    </section>
  );
}