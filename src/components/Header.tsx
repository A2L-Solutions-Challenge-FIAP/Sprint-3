import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo_imrea_min.png"; 
import Button from "./Button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
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
          className="sm:hidden p-2 rounded-md text-gray-700  hover:bg-gray-100 transition "
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <nav className={`${
          menuOpen ? "flex flex-col items-center absolute top-16  left-0 w-full bg-white border-t border-gray-200 py-4 shadow-md"
          : "hidden"
        } md:flex md:static md:flex-row md:items-center md:gap-6 text-sm text-gray-600`}>
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
