import { Outlet } from "react-router-dom";
import Header from "../components/Header"; // criaremos o Header simples com menu superior

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="pt-8">
        <Outlet />
      </main>
    </div>
  );
}