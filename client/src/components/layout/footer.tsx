import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">知的探求HUB</h3>
            <p className="text-sm text-muted-foreground">
              生成AIで中小製造業のデジタルトランスフォーメーションを実現
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">リンク</h4>
            <div className="grid gap-2">
              <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                サービス
              </Link>
              <Link href="/case-studies" className="text-sm text-muted-foreground hover:text-primary">
                導入事例
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                ブログ
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4">お問い合わせ</h4>
            <address className="text-sm text-muted-foreground not-italic">
              <p>メール: contact@manufacturingai.com</p>
              <p>電話: 03-1234-5678</p>
            </address>
          </div>
        </div>
        <div className="container mt-8 pt-8 border-t">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} 知的探求HUB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}