import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Contact from "@/pages/contact";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ChatBot from "@/components/chat/ChatBot";
import News from "@/pages/news";

// サービス詳細ページのインポート
import Seminar from "@/pages/services/seminar";
import Support from "@/pages/services/support";
import Development from "@/pages/services/development";
import Consulting from "@/pages/services/consulting";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/services" component={Services} />
          <Route path="/services/seminar" component={Seminar} />
          <Route path="/services/support" component={Support} />
          <Route path="/services/development" component={Development} />
          <Route path="/services/consulting" component={Consulting} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <ChatBot />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;