import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LocationFootfallPage from "./pages/LocationFootfallPage";
import ConstructionTimelinePage from "./pages/ConstructionTimelinePage";
import TestPage from "./pages/TestPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div
        className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(https://i.ibb.co/fd7M4W4Y/bg-image-2.png)`,
          imageRendering: 'high-quality'
        }}
      >
        <div className="absolute inset-0 bg-background/40" />
        <div className="relative z-10">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/test" element={<TestPage />} />
              <Route path="/location-footfall" element={<LocationFootfallPage />} />
              <Route path="/construction-timeline" element={<ConstructionTimelinePage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
