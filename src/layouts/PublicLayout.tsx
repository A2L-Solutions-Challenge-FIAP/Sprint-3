import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PublicLayout() {
  return (
    <div className=" flex flex-col min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className=" flex-1 pt-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
