import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  open: boolean;
  path: string;
}

export default function SidebarItem({ icon, label, open, path }: SidebarItemProps) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `flex items-center gap-3 px-3 py-2 rounded-md duration-200 
          ${isActive ? "bg-blue-700 text-white" : "hover:bg-blue-200 text-gray-800"}`
        }
      >
        <div className="text-xl">{icon}</div>
        {open && <span>{label}</span>}
      </NavLink>
    </li>
  );
}

