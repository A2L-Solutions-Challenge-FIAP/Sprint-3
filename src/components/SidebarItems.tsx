import { NavLink } from "react-router-dom";
import home from "../assets/home.svg";
import developers from "../assets/developers.svg";
import dashboard from "../assets/dashboard.svg";
import settings from "../assets/settings.svg";
import analytics from "../assets/analytics.svg";
import arrow from "../assets/arrow.svg";
import sac from "../assets/sac.svg";
import faq from "../assets/faq.svg";


interface SidebarItemsProps {
  open: boolean;
  onItemClick?: () => void;
}

const menuItems = [
  { icon: home, label: "Home", path: "/" },
  { icon: developers, label: "Developers", path: "/developers" },
  { icon: dashboard, label: "Dashboard", path: "/dashboard" },
  { icon: settings, label: "Settings", path: "/settings" },
  { icon: analytics, label: "Reports", path: "/reports" },
  { icon: sac, label: "Sac", path: "/sac" },
  { icon: faq, label: "Faq", path: "/faq" },
];



export default function SidebarItems({ open, onItemClick }: SidebarItemsProps) {
  return (
    <ul className="flex-1" >
            {menuItems.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.path}
            onClick={onItemClick}
            className={({ isActive }) =>
              `group flex items-center gap-3 px-3 py-2 rounded-md duration-200 cursor-pointer my-2 
              ${isActive ? "bg-blue-500! text-white " : "hover:bg-blue-400 duration-300 cursor-pointer text-inherit"}`
            }
          >
            <img src={item.icon} alt={item.label} className="w-6 h-6 min-w-[1.5rem]" />
            
            <span
              className={`text-sm  ${
                open ? "opacity-100 ml-1" : "opacity-0  w-0 overflow-hidden translate-x-24"
              } duration-200`}
              >
              {item.label}
            </span>
            
              <img
                src={arrow}
                alt="seta"
                className="ml-auto w-4 h-4 opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
              />
      
          </NavLink>
        </li>
      ))}
    </ul>
  );
}