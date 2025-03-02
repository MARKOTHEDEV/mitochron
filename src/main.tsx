import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import DashboardLayout from "./components/layout/DashboardLayout.tsx";
import Home from "./Page/Home.tsx";
import BudgetRoom from "./Page/BudgetRoom.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/budget-room" element={<BudgetRoom />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
