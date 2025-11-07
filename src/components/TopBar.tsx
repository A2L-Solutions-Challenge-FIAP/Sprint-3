import { NavLink, useNavigate } from "react-router-dom";
// coloque seu logo se tiver
import Button from "./Button";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 justify-between z-40 ">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600 ml-auto">


          <NavLink
            to="/about"
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
          className="text-sm hidden sm:block mr-2 ml-5"
          onClick={() => navigate("/")}
        >
          Home
        </Button>
      </div>
    </header>
  );
}
