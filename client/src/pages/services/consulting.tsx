import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, LineChart, Target, BarChart, TrendingUp } from "lucide-react";

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

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
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
        <div className="flex items-start gap-4">
          <BarChart className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold mb-2">業績改善</h3>
            <p className="text-muted-foreground">具体的な改善施策の提案と実行支援</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <TrendingUp className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold mb-2">成長支援</h3>
            <p className="text-muted-foreground">持続的な成長のための包括的なサポート</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Link href="/contact">
          <Button size="lg">相談する</Button>
        </Link>
      </div>
    </div>
  );
}
