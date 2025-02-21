import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Calendar, Users, Book, Clock, CheckCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const courseDetails = [
  {
    name: "入門コース",
    duration: "1日間",
    price: "100,000円",
    features: [
      "生成AIの基礎知識",
      "主要ツールの概要",
      "ハンズオン体験"
    ]
  },
  {
    name: "現場実践コース",
    duration: "1日間",
    price: "300,000円",
    features: [
      "業務内容のヒアリング",
      "業務プロセス分析",
      "業務への活用・カスタマイズ",
      "実践的なワークショップ"
    ]
  },
  {
    name: "経営者向けコース（生成AI導入推進）",
    duration: "1日間",
    price: "200,000円",
    features: [
      "経営戦略との統合",
      "現状の課題のヒアリング",
      "導入計画の策定"
    ]
  },
  {
    name: "継続フォロー",
    duration: "1ヶ月～",
    price: "100,000円〜",
    features: [
      "定期的な進捗確認",
      "課題解決サポート",
      "活用方法の提案",
      "運用サポート"
    ]
  }
];

const curriculumSchedule = [
  {
    time: "10:00 - 11:30",
    title: "生成AIの基礎と最新動向",
    description: "AI技術の基本概念と最新のトレンドを解説"
  },
  {
    time: "11:45 - 13:00",
    title: "製造業での活用事例",
    description: "実際の導入企業の成功事例を詳しく紹介"
  },
  {
    time: "14:00 - 15:30",
    title: "ハンズオンワークショップ",
    description: "実際のツールを使用した実践的な演習"
  },
  {
    time: "15:45 - 17:00",
    title: "導入計画の策定",
    description: "自社での具体的な活用プランの作成"
  }
];

export default function SeminarPage() {
  return (
    <div className="container py-12">
      <Link href="/services" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        サービス一覧に戻る
      </Link>

      <h1 className="text-4xl font-bold mb-4">生成AI導入・運用セミナー</h1>
      <p className="text-xl text-muted-foreground mb-12">
        実践的な知識とスキルを身につける、少人数制の集中セミナー
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
        {courseDetails.map((course) => (
          <Card key={course.name} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">{course.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="mb-6 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
                <div className="text-xl font-bold text-primary mt-4">
                  {course.price}
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link href="/contact">
                  <Button className="w-full">申し込む</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">カリキュラム例（入門コース）</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">時間</TableHead>
              <TableHead>内容</TableHead>
              <TableHead className="w-[300px]">詳細</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {curriculumSchedule.map((schedule) => (
              <TableRow key={schedule.time}>
                <TableCell className="font-medium">{schedule.time}</TableCell>
                <TableCell>{schedule.title}</TableCell>
                <TableCell>{schedule.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">セミナーのお申し込み・ご相談</h2>
        <p className="text-muted-foreground mb-8">
          カスタマイズしたセミナーのご相談も承っております。<br />
          まずはお気軽にお問い合わせください。
        </p>
        <Link href="/contact">
          <Button size="lg">お問い合わせ</Button>
        </Link>
      </div>
    </div>
  );
}