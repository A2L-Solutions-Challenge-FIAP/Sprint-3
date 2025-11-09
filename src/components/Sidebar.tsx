import SidebarHeader from "./SidebarHeader";
import SidebarItems from "./SidebarItems";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={`md:hidden fixed top-4 right-4  z-50 
        p-2 text-2xl rounded-md text-blue-900 hover:text-blue-700 
        bg-white/80 backdrop-blur-md border border-gray-200 shadow-md transition`}
      >
        {open ? "x" : "☰"}
      </button>

      <nav
        className={`
          fixed top-0 left-0 h-screen bg-blue-energy text-white flex flex-col 
          duration-300
          ${open ? "  w-full h-full p-6 z-40 justify-center items-center gap-6 " : "hidden"}
          md:relative md:flex md:flex-col md:h-auto md:p-4 md:justify-start m:items-stretch 
          ${desktopOpen ? "md:w-70" : "md:w-20"}
        `}
      >
        <div className="hidden md:block">
          <SidebarHeader open={desktopOpen} setOpen={setDesktopOpen} />
        </div>

        <div
          className={`flex-1 ${open ? "block" : "hidden"} md:block md:text `}
        >
          <SidebarItems
            open={open || desktopOpen}
            onItemClick={() => {
              setOpen(false);
              setDesktopOpen(false);
            }}
          />
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
