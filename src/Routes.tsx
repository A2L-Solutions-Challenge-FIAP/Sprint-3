import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Developers from "./pages/Developers";
import Sac from "./pages/Sac";
import Faq from "./pages/Faq";
import UnderConstruction from "./pages/UnderConstrution";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/developers" element={<Developers />} />
      <Route
        path="/settings"
        element={<UnderConstruction page="Configurações" />}
      />
      <Route path="/logs" element={<UnderConstruction page="Login" />} />
      <Route
        path="/reports"
        element={<UnderConstruction page="Relatórios" />}
      />
      <Route path="/sac" element={<Sac />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
