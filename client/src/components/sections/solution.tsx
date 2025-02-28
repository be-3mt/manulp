import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Target, TrendingUp } from "lucide-react";

const solutions = [
  {
    icon: Brain,
    title: "AI導入支援",
    description: "最新の生成AI技術を活用し、業務効率化を実現"
  },
  {
    icon: Zap,
    title: "プロセス最適化",
    description: "製造プロセスの分析と改善提案"
  },
  {
    icon: Target,
    title: "コスト削減",
    description: "無駄を省き、収益性を向上"
  },
  {
    icon: TrendingUp,
    title: "生産性向上",
    description: "データ駆動型の意思決定支援"
  }
];

export default function Solution() {
  return (
    <section className="container py-20">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            人とAIの協力で、<br />
            製造業のDXを加速
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {solutions.map((solution) => (
              <Card key={solution.title}>
                <CardContent className="p-6">
                  <solution.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="relative aspect-square">
          <img
            src="/images/human-robot.jpg"
            alt="AI×人間の協力"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
