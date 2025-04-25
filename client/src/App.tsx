
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { queryClient } from "./lib/queryClient";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AWSCourse from "@/pages/AWSCourse";
import AzureCourse from "@/pages/AzureCourse";
import AICourse from "@/pages/AICourse";
import PowerBICourse from "@/pages/PowerBICourse";
import About from "@/pages/About";
import FAQ from "@/pages/FAQ";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/courses/aws" component={AWSCourse} />
      <Route path="/courses/azure" component={AzureCourse} />
      <Route path="/courses/ai" component={AICourse} />
      <Route path="/courses/powerbi" component={PowerBICourse} />
      <Route path="/about" component={About} />
      <Route path="/faq" component={FAQ} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
