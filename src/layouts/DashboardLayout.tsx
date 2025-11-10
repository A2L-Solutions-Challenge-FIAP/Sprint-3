import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col ">
        <TopBar />
        <main className="flex-1 p-6 overflow-y-auto ">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
