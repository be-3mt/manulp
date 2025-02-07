import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold mb-4">AI製造コンサル</h3>
          <p className="text-sm text-muted-foreground">
            生成AIで中小製造業のデジタルトランスフォーメーションを実現
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-4">リンク</h4>
          <div className="grid gap-2">
            <Link href="/services">
              <a className="text-sm text-muted-foreground hover:text-primary">
                サービス
              </a>
            </Link>
            <Link href="/case-studies">
              <a className="text-sm text-muted-foreground hover:text-primary">
                導入事例
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-sm text-muted-foreground hover:text-primary">
                ブログ
              </a>
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
          © {new Date().getFullYear()} AI製造コンサル. All rights reserved.
        </p>
      </div>
    </footer>
  );
}