import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import DashboardLayout from "./components/layout/DashboardLayout.tsx";
import Home from "./Page/Home.tsx";
import BudgetRoom from "./Page/BudgetRoom.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/budget-room" element={<BudgetRoom />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  </StrictMode>
);
