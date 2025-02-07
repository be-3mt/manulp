import {
  BrainCircuit,
  TrendingUp,
  Settings,
  LineChart,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "AI Process Optimization",
    description:
      "Optimize your manufacturing processes with advanced AI algorithms that identify inefficiencies and suggest improvements.",
    icon: BrainCircuit,
  },
  {
    title: "Predictive Maintenance",
    description:
      "Prevent equipment failures before they happen with AI-powered predictive maintenance solutions.",
    icon: Settings,
  },
  {
    title: "Quality Control",
    description:
      "Implement computer vision and machine learning for automated quality inspection and defect detection.",
    icon: LineChart,
  },
  {
    title: "Performance Analytics",
    description:
      "Gain deep insights into your manufacturing operations with real-time analytics and reporting.",
    icon: TrendingUp,
  },
];

export default function Features() {
  return (
    <section className="container py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Services
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
