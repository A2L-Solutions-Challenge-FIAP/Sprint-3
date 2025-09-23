import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Developers from "./pages/Developers";
import Settings from "./pages/Settings";
import Logs from "./pages/Logs";
import Reports from "./pages/Reports";
import Sac from "./pages/Sac";
import Faq from "./pages/Faq";

import "./index.css";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/sac" element={<Sac />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

