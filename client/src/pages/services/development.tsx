import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Code, Zap, Link as LinkIcon, Bot, CheckCircle, Cpu, Network } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const developmentPlans = [
  {
    name: "基本開発プラン",
    price: "200,000円〜",
    duration: "2-3ヶ月",
    features: [
      "要件定義・設計",
      "基本機能の開発",
      "テスト・デプロイ",
      "基本的な保守サポート"
    ]
  },
  {
    name: "カスタム開発プラン",
    price: "500,000円〜",
    duration: "3-6ヶ月",
    features: [
      "詳細な要件分析",
      "カスタム機能開発",
      "既存システム連携",
      "運用サポート"
    ]
  }
];

const developmentProcess = [
  {
    phase: "要件定義",
    duration: "2-4週間",
    details: "業務分析、要件収集、システム設計の策定"
  },
  {
    phase: "設計フェーズ",
    duration: "2-4週間",
    details: "システムアーキテクチャ設計、UI/UX設計"
  },
  {
    phase: "開発フェーズ",
    duration: "8-12週間",
    details: "アプリケーション開発、AI機能実装、テスト"
  },
  {
    phase: "展開・運用",
    duration: "2-4週間",
    details: "システム展開、ユーザートレーニング、運用開始"
  }
];

const technologies = [
  {
    title: "生成AI技術",
    description: "GPT-4, DALL-E, Stable Diffusion等の最新モデルを活用",
    icon: Cpu
  },
  {
    title: "クラウド基盤",
    description: "AWS, Google Cloud等での安定したシステム運用",
    icon: Network
  },
  {
    title: "システム連携",
    description: "既存システムとのスムーズな統合・連携を実現",
    icon: LinkIcon
  }
];

export default function DevelopmentPage() {
  return (
    <div className="container py-12">
      <Link href="/services" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        サービス一覧に戻る
      </Link>

      <h1 className="text-4xl font-bold mb-4">アプリ・ツール開発</h1>
      <p className="text-xl text-muted-foreground mb-8">
        業務に特化した生成AIアプリケーションやツールの開発、既存システムとの連携を実現
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
        <div className="flex items-start gap-4">
          <Code className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold mb-2">カスタム開発</h3>
            <p className="text-muted-foreground">業務要件に合わせた専用アプリケーション開発</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <LinkIcon className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold mb-2">システム連携</h3>
            <p className="text-muted-foreground">既存システムとのスムーズな統合を実現</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Zap className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold mb-2">高性能</h3>
            <p className="text-muted-foreground">最新技術を活用した高性能なソリューション</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Bot className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold mb-2">AI特化</h3>
            <p className="text-muted-foreground">生成AI技術を最大限に活用した開発</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">開発プラン</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {developmentPlans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="text-2xl font-bold text-primary mt-2">
                  {plan.price}
                </div>
                <div className="text-sm text-muted-foreground">
                  開発期間: {plan.duration}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">開発プロセス</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">フェーズ</TableHead>
              <TableHead className="w-[150px]">期間</TableHead>
              <TableHead>詳細</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {developmentProcess.map((step) => (
              <TableRow key={step.phase}>
                <TableCell className="font-medium">{step.phase}</TableCell>
                <TableCell>{step.duration}</TableCell>
                <TableCell>{step.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">活用技術</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {technologies.map((tech) => (
            <div key={tech.title} className="flex items-start gap-4">
              <tech.icon className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">{tech.title}</h3>
                <p className="text-muted-foreground">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">開発のご相談</h2>
        <p className="text-muted-foreground mb-8">
          お客様の業務課題に合わせた最適なソリューションをご提案いたします。<br />
          まずはお気軽にご相談ください。
        </p>
        <Link href="/contact">
          <Button size="lg">開発相談する</Button>
        </Link>
      </div>
    </div>
  );
}