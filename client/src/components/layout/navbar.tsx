import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/services", label: "サービス" },
  { href: "/case-studies", label: "導入事例" },
  { href: "/blog", label: "ブログ" },
  { href: "/dashboard", label: "ダッシュボード" },
  { href: "/contact", label: "お問い合わせ" }
];

export default function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link 
          href="/" 
          className="mr-8 flex items-center space-x-2"
        >
          <span className="text-xl font-bold">知的探求HUB</span>
        </Link>
        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}