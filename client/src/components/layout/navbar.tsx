import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/news", label: "お知らせ" },
  { href: "/services", label: "サービス" },
  { href: "https://note.com/hiroki_morishima", label: "ブログ", external: true },
  { href: "/contact", label: "お問い合わせ" }
];

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center space-x-2"
          >
            <img 
              src="/images/logo.png" 
              alt="知的探求HUB" 
              className="h-6 w-6"
            />
            <span className="text-xl font-bold">知的探求HUB</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground/60 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ) : (
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
              )
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div className={cn(
          "md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}>
          <div className="space-y-4 px-2 pb-3 pt-2">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-medium text-foreground/60 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block text-sm font-medium transition-colors hover:text-primary",
                    location === item.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}