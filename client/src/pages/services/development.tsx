import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Code, Zap, Link as LinkIcon, Bot } from "lucide-react";

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

      <div className="flex justify-center">
        <Link href="/contact">
          <Button size="lg">開発相談する</Button>
        </Link>
      </div>
    </div>
  );
}
