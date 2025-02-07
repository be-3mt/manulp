import {
  BrainCircuit,
  TrendingUp,
  Settings,
  LineChart,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "生成AIプロセス最適化",
    description:
      "高度な生成AIアルゴリズムを活用して製造プロセスを分析し、効率化とコスト削減を実現します。",
    icon: BrainCircuit,
  },
  {
    title: "予知保全",
    description:
      "生成AIによる予測分析で設備の故障を事前に防止し、ダウンタイムを最小限に抑えます。",
    icon: Settings,
  },
  {
    title: "品質管理",
    description:
      "画像認識と生成AIを組み合わせた自動品質検査システムで、不良品の発見精度を向上させます。",
    icon: LineChart,
  },
  {
    title: "パフォーマンス分析",
    description:
      "リアルタイムの分析とレポーティングで、製造オペレーションの詳細な洞察を提供します。",
    icon: TrendingUp,
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
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}