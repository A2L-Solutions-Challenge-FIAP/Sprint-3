import SidebarHeader from "./SidebarHeader";
import SidebarItems from "./SidebarItems";
import SidebarFooter from "./SidebarFooter"; 
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav
      className={`shadow-md bg-gradient-to-b to-blue-500 text-white min-h-screen flex flex-col duration-500 
      ${open ? "w-56" : "w-20"} p-4 justify-between `}
    >
      
      <SidebarHeader open={open} setOpen={setOpen} />

      <SidebarItems open={open} />

      <div className="flex items-center gap-3">
        <SidebarFooter open={open} />
      </div>
    </nav>
  );
};

export default Sidebar;
