import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo_imrea_min.png"; 
import Button from "./Button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="  shadow-sm  top-0 z-40 sticky  backdrop-blur-md bg-white/30 border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between px-6 py-4 ">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          {logo && <img src={logo} alt="Logo" className="h-8 w-8" />}
          <span className="text-lg sm:text-xl font-bold text-blue-900">
            Sistema de Lembretes
          </span>
        </div>
        <button
          className="sm:hidden p-2 text-xl rounded-md text-blue-900 hover:text-blue-700  transition "
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <nav
          className={`fixed inset-0 flex flex-col items-center justify-center gap-6
          backdrop-blur-md bg-white/80 transition-all duration-300 ease-out
          ${menuOpen ? "opacity-100 pointer-events-auto animate-fadeSlide" : "opacity-0 pointer-events-none"}
          md:static md:flex md:flex-row md:items-center md:justify-end md:gap-6 md:backdrop-blur-0 md:bg-transparent 
          md:opacity-100 md:pointer-events-auto`}
        >
          <NavLink
            to="/"
            onClick={()=> setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-800 font-semibold"
                : "hover:text-blue-700 transition"
            }
          >
            Início
          </NavLink>

          <NavLink
            to="/about"
            onClick={()=> setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-800 font-semibold"
                : "hover:text-blue-700 transition"
            }
          >
            Sobre
          </NavLink>


          <NavLink
            to="/faq"
              onClick={()=> setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-800 font-semibold"
                : "hover:text-blue-700 transition"
            }
          >
            FAQ
          </NavLink>

          <NavLink
            to="/sac"
              onClick={()=> setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-800 font-semibold"
                : "hover:text-blue-700 transition"
            }
          >
            SAC
          </NavLink>

          <NavLink
            to="/developers"
              onClick={()=> setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-800 font-semibold"
                : "hover:text-blue-700 transition"
            }
          >
            Desenvolvedores
          </NavLink>
          {menuOpen && (
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-2xl text-blue-900 hover:text-blue-700 transition md:hidden"
              aria-label="Fechar menu"
            >
              ✕
            </button>)}
        </nav>
        
        <Button
          variant="primary"
          className="text-sm mt-3 md:mt-0 "
          onClick={() => { navigate("/dashboard");
            setMenuOpen(false);
          }}
        >
          Acessar Painel
        </Button>
      </div>
    </header>
  );
}
