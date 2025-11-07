import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo_imrea_min.png"; // coloque seu logo se tiver
import Button from "./Button";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          {logo && <img src={logo} alt="Logo" className="h-8 w-8" />}
          <span className="text-lg font-bold text-blue-900">
            Sistema de Lembretes
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-800 font-semibold"
                : "hover:text-blue-700 transition"
            }
          >
            Início
          </NavLink>

          <NavLink
            to="/faq"
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
          className="text-sm hidden sm:block"
          onClick={() => navigate("/dashboard")}
        >
          Acessar Painel
        </Button>
      </div>
    </header>
  );
}
