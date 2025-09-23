import SidebarItem from "./SidebarItem";
import home from "../assets/home.svg";
import developers from "../assets/developers.svg";
import dashboard from "../assets/dashboard.svg";
import settings from "../assets/settings.svg";
import log_user from "../assets/log_user.svg";
import analytics from "../assets/analytics.svg";
import sac from "../assets/sac.svg";
import faq from "../assets/faq.svg";

const menuItems = [
  { icon: < img src = {home} alt ="home" />, label: "Home", path: "/" },
  { icon: <img src = {developers} alt ="desenvolvedores" />, label: "Developers", path: "/developers" },
  { icon: <img src = {dashboard} alt ="dashboard"  />, label: "Dashboard", path: "/dashboard" },
  { icon: <img src = {settings} alt ="configurações" />, label: "Settings", path: "/settings" },
  { icon: <img src = {log_user} alt ="log"  />, label: "Logs", path: "/logs" },
  { icon: <img src = {analytics} alt ="relatorios"  />, label: "Reports", path: "/reports" },
  { icon: <img src = {sac} alt ="sac"  />, label: "Sac", path: "/sac" },
  { icon: <img src = {faq} alt ="faq"  />, label: "Faq", path: "/faq" },
];

interface SidebarItemsProps {
  open: boolean;
}

export default function SidebarItems({ open }: SidebarItemsProps) {
  return (
    <ul className="flex-1 px-2 py-4 overflow-y-auto border-r border-gray-700 ">
      {menuItems.map((item, index) => (
        <SidebarItem 
          key={index}
          icon={item.icon}
          label={item.label}
          path={item.path}
          open={open}
        />
      ))}
    </ul>
  );
}
