import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { Toaster } from "sonner";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashboardLayout from "./components/layout/DashboardLayout.tsx";

const queryClient = new QueryClient();

const Home = React.lazy(() => import("./Page/Home.tsx"));
const BudgetRoom = React.lazy(() => import("./Page/BudgetRoom.tsx"));
const NotFoundPage = React.lazy(() => import("./Page/NotFound.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-right" />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/room" element={<BudgetRoom />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </DashboardLayout>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
