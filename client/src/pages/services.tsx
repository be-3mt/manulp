import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  BrainCircuit,
  TrendingUp,
  Settings,
  LineChart,
  ArrowRight,
  Shield,
  Factory,
  Bot
} from "lucide-react";

const services = [
  {
    title: "AI Process Optimization",
    description: "Leverage machine learning algorithms to optimize manufacturing processes, reduce waste, and increase efficiency. Our AI solutions analyze production data in real-time to identify bottlenecks and suggest improvements.",
    icon: BrainCircuit,
    benefits: ["20-30% efficiency increase", "Reduced waste", "Optimized resource allocation"]
  },
  {
    title: "Predictive Maintenance",
    description: "Stop equipment failures before they happen with our advanced predictive maintenance system. Using IoT sensors and machine learning, we help you predict when maintenance is needed.",
    icon: Settings,
    benefits: ["Reduce downtime by 50%", "Extend equipment life", "Lower maintenance costs"]
  },
  {
    title: "Quality Control AI",
    description: "Implement automated quality inspection using computer vision and deep learning. Our systems can detect defects with higher accuracy than traditional methods.",
    icon: Shield,
    benefits: ["99.9% defect detection", "Real-time monitoring", "Reduced manual inspection"]
  },
  {
    title: "Smart Factory Solutions",
    description: "Transform your facility into a smart factory with IoT integration and AI-powered automation. Monitor and control your entire operation from a single dashboard.",
    icon: Factory,
    benefits: ["Full facility automation", "Real-time monitoring", "Energy optimization"]
  },
  {
    title: "Performance Analytics",
    description: "Gain deep insights into your operations with our advanced analytics platform. Track KPIs, identify trends, and make data-driven decisions.",
    icon: LineChart,
    benefits: ["Custom KPI tracking", "Automated reporting", "Trend analysis"]
  },
  {
    title: "AI Consultation",
    description: "Get expert guidance on implementing AI in your manufacturing processes. Our consultants work with you to develop a customized AI strategy.",
    icon: Bot,
    benefits: ["Tailored AI strategy", "Implementation roadmap", "ROI analysis"]
  }
];

export default function Services() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive AI solutions tailored for manufacturing excellence
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col">
            <CardHeader>
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <div className="mt-auto">
                <h4 className="font-medium mb-2">Key Benefits:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {service.benefits.map((benefit) => (
                    <li key={benefit}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Manufacturing?</h2>
        <Link href="/contact">
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
