import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, LineChart, Target, BarChart, TrendingUp, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const consultingPlans = [
  {
    name: "基本プラン",
    price: "150,000円〜",
    duration: "3ヶ月",
    features: [
      "経営状況の分析",
      "AI活用戦略の策定",
      "月1回の進捗会議",
      "基本的な運用サポート"
    ]
  },
  {
    name: "アドバンスプラン",
    price: "300,000円〜",
    duration: "6ヶ月",
    features: [
      "詳細な経営分析",
      "包括的なDX戦略策定",
      "月2回の進捗会議",
      "優先サポート対応"
    ]
  }
];

const consultingProcess = [
  {
    phase: "現状分析",
    duration: "2週間",
    details: "経営状況の詳細分析、課題の洗い出し"
  },
  {
    phase: "戦略立案",
    duration: "2週間",
    details: "AI活用戦略の策定、ロードマップの作成"
  },
  {
    phase: "実行支援",
    duration: "3-6ヶ月",
    details: "戦略の実行支援、進捗管理、課題解決"
  },
  {
    phase: "効果測定",
    duration: "継続的",
    details: "成果の測定、戦略の見直しと改善"
  }
];

export default function ConsultingPage() {
  return (
    <div className="container py-12">
      <Link href="/services" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        サービス一覧に戻る
      </Link>

      <h1 className="text-4xl font-bold mb-4">経営支援・診断</h1>
      <p className="text-xl text-muted-foreground mb-8">
        経営戦略の立案から実行まで、専門家による包括的な支援を提供
      </p>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <div className="flex items-start gap-4">
          <LineChart className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold mb-2">経営分析</h3>
            <p className="text-muted-foreground">AIを活用した詳細な経営状況の分析</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Target className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold mb-2">戦略立案</h3>
            <p className="text-muted-foreground">データに基づく効果的な戦略の策定</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">コンサルティングプラン</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {consultingPlans.map((plan) => (
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
        <h2 className="text-2xl font-bold mb-6">支援プロセス</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">フェーズ</TableHead>
              <TableHead className="w-[150px]">期間</TableHead>
              <TableHead>詳細</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {consultingProcess.map((step) => (
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
          まずは無料で初期診断・お見積りをさせていただきます。<br />
          お客様に最適な支援プランをご提案いたします。
        </p>
        <Link href="/contact">
          <Button size="lg">経営相談する</Button>
        </Link>
      </div>
    </div>
  );
}