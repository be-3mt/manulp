import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Settings, Shield, Clock, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const supportPlans = [
  {
    name: "スタンダードプラン",
    price: "300,000円〜",
    duration: "3ヶ月",
    features: [
      "初期診断・分析",
      "ツール選定支援",
      "導入計画の策定",
      "基本的な運用サポート"
    ]
  },
  {
    name: "プレミアムプラン",
    price: "500,000円〜",
    duration: "6ヶ月",
    features: [
      "詳細な業務分析",
      "カスタマイズ導入支援",
      "スタッフトレーニング"
    ]
  }
];

const implementationSteps = [
  {
    phase: "初期診断",
    duration: "2週間",
    details: "現状分析、課題抽出、改善機会の特定"
  },
  {
    phase: "計画策定",
    duration: "2週間",
    details: "導入計画の作成、ツール選定、ROI試算"
  },
  {
    phase: "導入実施",
    duration: "4-8週間",
    details: "システム導入、カスタマイズ、テスト実施"
  },
  {
    phase: "運用支援",
    duration: "継続的",
    details: "運用サポート、効果測定、改善提案"
  }
];

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 max-w-7xl py-12">
      <Link href="/services" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        サービス一覧に戻る
      </Link>

      <h1 className="text-4xl font-bold mb-4">個別導入・運用支援</h1>
      <p className="text-xl text-muted-foreground mb-8">
        お客様の業務に最適な生成AIツールの選定から導入、運用までを一貫してサポート
      </p>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <div className="flex items-start gap-4">
          <Settings className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold mb-2">カスタマイズ対応</h3>
            <p className="text-muted-foreground">業務プロセスに合わせた最適なAIツールの選定と設定</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <MessageSquare className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold mb-2">継続的なサポート</h3>
            <p className="text-muted-foreground">導入後も安心の運用サポート体制</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">サポートプラン</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {supportPlans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="text-2xl font-bold text-primary mt-2">
                  {plan.price}
                </div>
                <div className="text-sm text-muted-foreground">
                  契約期間: {plan.duration}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
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
        <h2 className="text-2xl font-bold mb-6">導入ステップ</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">フェーズ</TableHead>
              <TableHead className="w-[150px]">期間</TableHead>
              <TableHead>詳細</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {implementationSteps.map((step) => (
              <TableRow key={step.phase}>
                <TableCell className="font-medium">{step.phase}</TableCell>
                <TableCell>{step.duration}</TableCell>
                <TableCell>{step.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">お気軽にご相談ください</h2>
        <p className="text-muted-foreground mb-8">
          お客様に最適な導入プランをご提案いたします。
        </p>
        <Link href="/contact">
          <Button size="lg">導入相談する</Button>
        </Link>
      </div>
    </div>
  );
}