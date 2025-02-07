import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold mb-4">ManufacturingAI</h3>
          <p className="text-sm text-muted-foreground">
            Transforming manufacturing with AI-powered solutions
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-4">Quick Links</h4>
          <div className="grid gap-2">
            <Link href="/services">
              <a className="text-sm text-muted-foreground hover:text-primary">
                Services
              </a>
            </Link>
            <Link href="/case-studies">
              <a className="text-sm text-muted-foreground hover:text-primary">
                Case Studies
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-sm text-muted-foreground hover:text-primary">
                Blog
              </a>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-4">Contact</h4>
          <address className="text-sm text-muted-foreground not-italic">
            <p>Email: contact@manufacturingai.com</p>
            <p>Phone: (555) 123-4567</p>
          </address>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t">
        <p className="text-sm text-center text-muted-foreground">
          © {new Date().getFullYear()} ManufacturingAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
