import log_user from "../assets/log_user.svg";
import { Link } from "react-router-dom";

interface SidebarFooterProps {
  open: boolean;
  onItemClick?: () => void;
}

const SidebarFooter = ({ open, onItemClick }: SidebarFooterProps) => {
  return (
    <div
      className={`flex items-center gap-2 w-full mb-2
    ${open ? "justify-start" : "justify-center"}`}
    >
      <Link to="/Logs"
      onClick={onItemClick}>
        <img
          src={log_user}
          alt="User"
          className="w-6 h-6 rounded-full mb-2 cursor-pointer hover:opacity-80 transition"
        />
      </Link>

      {open && (
        <div
          className={`
          overflow-hidden
          ${open ? "opacity-100 w-auto" : "opacity-0 w-0"}`}
        >
          <p className="text-sm text-inherit font-medium">Ana Freitas</p>
          <span className="text-xs text-inherit">ana_freitas@fiap.com.br</span>
        </div>
      )}
    </div>
  );
};

export default SidebarFooter;
