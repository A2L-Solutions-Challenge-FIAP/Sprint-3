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
        className="md:hidden fixed top-4 right-4 z-50 bg-blue-400 text-white p-1 rounded-lg shadow-md"
      >
        {open ? "✖" : "☰"}
      </button>

      
      <nav
        className={`
          fixed top-0 left-0 h-full bg-gradient-to-b from-blue-200 to-blue-500 text-white flex flex-col duration-500 z-40
          ${open ? "w-full p-6" : "w-0 p-0 overflow-hidden"} 
          md:p-4 md:duration-300
          ${desktopOpen ? "md:w-56" : "md:w-19"}
        `}
      >
        <div className="hidden md:block">
        <SidebarHeader open={desktopOpen} setOpen={setDesktopOpen} />
        </div>

        <div className = {`flex-1 ${open ? "block" : "hidden"} md:block md:text `}> 
        <SidebarItems open={open || desktopOpen} />
        </div> 

        <div className={`${open ? "flex": "hidden"} md:flex items-center gap-3 mt-auto`}>
          <SidebarFooter open={open || desktopOpen} />
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
