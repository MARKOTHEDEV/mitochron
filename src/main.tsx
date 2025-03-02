import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { Toaster } from "sonner";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Page/Home.tsx";
import BudgetRoom from "./Page/BudgetRoom.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashboardLayout from "./components/layout/DashboardLayout.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-right" />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/budget-room" element={<BudgetRoom />} />
          </Routes>
        </DashboardLayout>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
