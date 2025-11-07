import { NavLink } from "react-router-dom";
import home from "../assets/home.svg";
import dashboard from "../assets/dashboard.svg";
import calendar from "../assets/calendar.svg";
import notifications from "../assets/notifications.svg";
import analytics from "../assets/analytics.svg";
import timeline from "../assets/timeline.svg";
import arrow from "../assets/arrow.svg";



interface SidebarItemsProps {
  open: boolean;
  onItemClick?: () => void;
}

const menuItems = [
  { icon: home, label: "Inicio", path: "/" },
  { icon: dashboard, label: "Dashboard", path: "/dashboard" },
  { icon: calendar, label: "Consultas", path: "/medicalschedule" },
  { icon: notifications, label: "Notificações", path: "/notification" },
  { icon: analytics, label: "Relatórios", path: "/reports" },
  { icon: timeline, label: "Histórico", path: "/history" },

];



export default function SidebarItems({ open, onItemClick }: SidebarItemsProps) {
  return (
    <ul className="flex-1" >
            {menuItems.map((item, index) => (
        <li key={index}
            className={item.label === "Inicio" ? "block md:hidden" : "block"}
            >
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