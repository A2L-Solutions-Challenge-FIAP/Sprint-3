import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  open: boolean;
  path: string;
}

export default function SidebarItem({ icon, label, open, path }: SidebarItemProps) {
  return (
    
    <NavLink
      to={path}
      
      className={({ isActive }) =>
        `shadow-md h-screen w-60 flex items-center gap-3 px-3 py-2 my-2 rounded-md duration-300 cursor-pointer
        ${isActive ? "bg-blue-700 text-white" : "hover:bg-blue-800 text-gray-200"}`
      }
    >
      <div className="text-xl flex-shrink-0">{icon}</div>
      {open && <span className="whitespace-nowrap">{label}</span>}
    </NavLink>
    
  );
}
