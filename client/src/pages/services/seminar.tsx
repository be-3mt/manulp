import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Calendar, Users, Book, Certificate } from "lucide-react";

export default function SeminarPage() {
  return (
    <div className="container py-12">
      <Link href="/services" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        サービス一覧に戻る
      </Link>
      
      <h1 className="text-4xl font-bold mb-4">生成AI導入・運用セミナー</h1>
      <p className="text-xl text-muted-foreground mb-8">
        最新の生成AI技術と活用事例を学び、実践的なワークショップで確実な導入をサポート
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="flex items-start gap-4">
          <Calendar className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold mb-2">定期開催</h3>
            <p className="text-muted-foreground">月2回の定期セミナーと、要望に応じたカスタマイズセミナーを開催</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Users className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold mb-2">少人数制</h3>
            <p className="text-muted-foreground">最大10名までの少人数制で、きめ細かな指導を提供</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Book className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold mb-2">実践的なカリキュラム</h3>
            <p className="text-muted-foreground">理論と実践を組み合わせた効果的な学習プログラム</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Link href="/contact">
          <Button size="lg">セミナーに申し込む</Button>
        </Link>
      </div>
    </div>
  );
}
