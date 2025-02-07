import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative">
      <div className="container flex flex-col items-center text-center py-20 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          製造業の未来を{" "}
          <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            AIで革新する
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px] mb-8">
          AIを活用して製造プロセスを最適化し、コスト削減とイノベーションを実現。中小企業のDX推進をサポートします。
        </p>
        <div className="flex gap-4">
          <Link href="/services">
            <Button size="lg">サービスを見る</Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">お問い合わせ</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}