import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative">
      <div className="container flex flex-col items-center text-center py-20 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          Transform Your Manufacturing with{" "}
          <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            AI-Powered Solutions
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px] mb-8">
          We help manufacturing companies leverage artificial intelligence to optimize operations,
          reduce costs, and drive innovation.
        </p>
        <div className="flex gap-4">
          <Link href="/services">
            <Button size="lg">Explore Services</Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">Get in Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
