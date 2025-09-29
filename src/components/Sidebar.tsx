import SidebarHeader from "./SidebarHeader";
import SidebarItems from "./SidebarItems";
import SidebarFooter from "./SidebarFooter";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);

  return (
    <>
      
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 right-4 z-50 bg-blue-500 text-white p-2 rounded-lg shadow-md"
      >
        {open ? "✖" : "☰"}
      </button>

      
      <nav
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-blue-200 to-blue-500 text-white flex flex-col duration-500 z-40
        ${open ? "w-full p-6" : "w-0 p-0 overflow-hidden"} 
        md:w-56 md:relative md:block md:p-4 shadow-md`}
      >
        <div className="hidden md:block">
        <SidebarHeader open={desktopOpen} setOpen={setDesktopOpen} />
          
        <SidebarItems open={true} />

        <div className="flex items-center gap-3 mt-auto">
          <SidebarFooter open={true} />
        </div>
      </div>
      </nav>
    </>
  );
};

export default Sidebar;
