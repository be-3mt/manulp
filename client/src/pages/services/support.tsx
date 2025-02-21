import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Settings, Shield, Clock, MessageSquare } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="container py-12">
      <Link href="/services" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        サービス一覧に戻る
      </Link>
      
      <h1 className="text-4xl font-bold mb-4">個別導入・運用支援</h1>
      <p className="text-xl text-muted-foreground mb-8">
        お客様の業務に最適な生成AIツールの選定から導入、運用までを一貫してサポート
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
        <div className="flex items-start gap-4">
          <Settings className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold mb-2">カスタマイズ対応</h3>
            <p className="text-muted-foreground">業務プロセスに合わせた最適なAIツールの選定と設定</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Shield className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold mb-2">セキュリティ重視</h3>
            <p className="text-muted-foreground">データセキュリティを考慮した安全な導入支援</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Clock className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold mb-2">迅速な導入</h3>
            <p className="text-muted-foreground">最短2週間での導入実現を目指します</p>
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

      <div className="flex justify-center">
        <Link href="/contact">
          <Button size="lg">導入相談する</Button>
        </Link>
      </div>
    </div>
  );
}
