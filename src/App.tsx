
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import IvanovaElena from "./pages/doctors/IvanovaElena";
import PetrovAndrey from "./pages/doctors/PetrovAndrey";
import SidorovaMaria from "./pages/doctors/SidorovaMaria";

import Narcologist from "./pages/services/Narcologist";
import Psychiatrist from "./pages/services/Psychiatrist";
import Psychotherapist from "./pages/services/Psychotherapist";
import AlcoholTreatment from "./pages/services/AlcoholTreatment";
import HomeVisit from "./pages/services/HomeVisit";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route path="/doctors/ivanova-elena" element={<IvanovaElena />} />
          <Route path="/doctors/petrov-andrey" element={<PetrovAndrey />} />
          <Route path="/doctors/sidorova-maria" element={<SidorovaMaria />} />
          
          <Route path="/services/narcologist" element={<Narcologist />} />
          <Route path="/services/psychiatrist" element={<Psychiatrist />} />
          <Route path="/services/psychotherapist" element={<Psychotherapist />} />
          <Route path="/services/alcohol-treatment" element={<AlcoholTreatment />} />
          <Route path="/services/home-visit" element={<HomeVisit />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;