import { NavLink } from "react-router-dom";
import home from "../assets/home.svg";
import developers from "../assets/developers.svg";
import dashboard from "../assets/dashboard.svg";
import settings from "../assets/settings.svg";
import log_user from "../assets/log_user.svg";
import analytics from "../assets/analytics.svg";
import sac from "../assets/sac.svg";
import faq from "../assets/faq.svg";


interface SidebarItemsProps {
  open: boolean;
}

const menuItems = [
  { icon: home, label: "Home", path: "/" },
  { icon: developers, label: "Developers", path: "/developers" },
  { icon: dashboard, label: "Dashboard", path: "/dashboard" },
  { icon: settings, label: "Settings", path: "/settings" },
  { icon: log_user, label: "Logs", path: "/logs" },
  { icon: analytics, label: "Reports", path: "/reports" },
  { icon: sac, label: "Sac", path: "/sac" },
  { icon: faq, label: "Faq", path: "/faq" },
];



export default function SidebarItems({ open }: SidebarItemsProps) {
  return (
    <ul >
            {menuItems.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md duration-200 cursor-pointer 
              ${isActive ? "bg-blue-700 text-white" : "hover:bg-blue-200 text-gray-800"}`
            }
          >
            <img src={item.icon} alt={item.label} className="w-6 h-6" />
            {open && <span>{item.label}</span>}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}