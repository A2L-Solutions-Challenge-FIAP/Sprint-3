import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo_imrea_min.png";
import Button from "./Button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/30 border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="Logo IMREA" className="h-8 w-8" />
            <span className="text-lg sm:text-xl font-bold text-blue-900">
              Sistema de Lembretes
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-800 font-semibold" : "hover:text-blue-700"
              }
            >
              Início
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-800 font-semibold" : "hover:text-blue-700"
              }
            >
              Sobre
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? "text-blue-800 font-semibold" : "hover:text-blue-700"
              }
            >
              FAQ
            </NavLink>
            <NavLink
              to="/sac"
              className={({ isActive }) =>
                isActive ? "text-blue-800 font-semibold" : "hover:text-blue-700"
              }
            >
              SAC
            </NavLink>
            <NavLink
              to="/developers"
              className={({ isActive }) =>
                isActive ? "text-blue-800 font-semibold" : "hover:text-blue-700"
              }
            >
              Desenvolvedores
            </NavLink>
          </nav>

          <div className="hidden md:block">
            <Button
              variant="primary"
              className="text-sm"
              onClick={() => navigate("/dashboard")}
            >
              Acessar Painel
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-xl rounded-md text-blue-900 hover:text-blue-700 transition"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      <nav
        className={`fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6
        backdrop-blur-md bg-white/80 transition-all duration-300 ease-out
        md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-medium text-blue-900 hover:text-blue-700"
        >
          Início
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-medium hover:text-blue-700"
        >
          Sobre
        </NavLink>
        <NavLink
          to="/faq"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-medium hover:text-blue-700"
        >
          FAQ
        </NavLink>
        <NavLink
          to="/sac"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-medium hover:text-blue-700"
        >
          SAC
        </NavLink>
        <NavLink
          to="/developers"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-medium hover:text-blue-700"
        >
          Desenvolvedores
        </NavLink>

        <Button
          variant="primary"
          className="mt-2"
          onClick={() => {
            setMenuOpen(false);
            navigate("/dashboard");
          }}
        >
          Acessar Painel
        </Button>

        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-2xl text-blue-900 hover:text-blue-700 transition"
          aria-label="Fechar menu"
        >
          ✕
        </button>
      </nav>
    </>
  );
}
