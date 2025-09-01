
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useScrollToTop from "@/hooks/useScrollToTop";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import DiscoveryStack from "./pages/DiscoveryStack";
import WhyFlawlessCX from "./pages/WhyFlawlessCX";
import StartDiscovery from "./pages/StartDiscovery";
import NewsAndVideos from "./pages/NewsAndVideos";
import SubscriptionServices from "./pages/SubscriptionServices";
import AIAlex from "./pages/AIAlex";
import Projects from "./pages/Projects";
import ProjectContentBuilder from "./pages/ProjectContentBuilder";
import Auth from "./pages/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import LinkedInInvite from "./pages/LinkedInInvite";
import ValueProposition from "./pages/ValueProposition";

const queryClient = new QueryClient();

const AppRoutes = () => {
  useScrollToTop();
  
  return (
    <Routes>
      {/* Standalone pages without Layout */}
      <Route path="/linkedin-invite" element={<LinkedInInvite />} />
      
      {/* Main site pages with Layout */}
      <Route path="/*" element={
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/discovery-stack" element={<DiscoveryStack />} />
            <Route path="/why-flawlesscx" element={<WhyFlawlessCX />} />
            <Route path="/value-proposition" element={<ValueProposition />} />
            <Route path="/start-discovery" element={<StartDiscovery />} />
            <Route path="/news-videos" element={<NewsAndVideos />} />
            <Route path="/subscription-services" element={<SubscriptionServices />} />
            <Route path="/ai-alex" element={<AIAlex />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-builder" element={
              <ProtectedRoute>
                <ProjectContentBuilder />
              </ProtectedRoute>
            } />
            <Route path="/auth" element={<Auth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      } />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
