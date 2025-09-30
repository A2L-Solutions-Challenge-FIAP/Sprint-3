import { NavLink } from "react-router-dom";
import home from "../assets/home.svg";
import developers from "../assets/developers.svg";
import dashboard from "../assets/dashboard.svg";
import settings from "../assets/settings.svg";
import analytics from "../assets/analytics.svg";
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
              `flex items-center gap-3 px-3 py-2 rounded-md duration-200 cursor-pointer my-2
              ${isActive ? "bg-blue-400 text-white" : "hover:bg-blue-200 duration-300 cursor-pointer text-gray-700 "}`
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
          </NavLink>
        </li>
      ))}
    </ul>
  );
}