import logo_imrea_min from "../assets/logo_imrea_min.png";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";

interface SidebarHeaderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SidebarHeader = ({ open, setOpen }: SidebarHeaderProps) => {
  return (
    <div className="  px-3 py-2 h-16 flex justify-between items-center">
      <div>
        <img
          src={logo_imrea_min}
          alt="Logo"
          className={`${
            open ? "w-10 opacity-100" : "w-0 opacity-0"
          }  rounded-b-full transition-all duration-300`}
        />
      </div>
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-600 focus:outline-none w-8 h-8 flex items-center justify-center"
        >
          {open ? (
            <img
              src={menu_close}
              alt="Fechar menu"
              className="w-8 h-8 cursor-pointer"
            />
          ) : (
            <img
              src={menu_open}
              alt="Abrir menu"
              className="w-8 h-8 cursor-pointer"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default SidebarHeader;
