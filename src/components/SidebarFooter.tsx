import log_user from "../assets/log_user.svg";

interface SidebarFooterProps {
  open: boolean;
}

const SidebarFooter = ({ open }: SidebarFooterProps) => {
  return (
    <div className={`flex items-center gap-2 w-full mb-2
    ${open ? "justify-start" : "justify-center"}`}
    >
      <img
        src={log_user}
        alt="User"
        className="w-6 h-6 rounded-full  mb-2"
      />

      {open && (
        <div className={`
          overflow-hidden
          ${open ? "opacity-100 w-auto" : "opacity-0 w-0"}`}>
          <p className="text-sm  text-black font-medium">Ana Freitas</p>
          <span className="text-xs text-black">ana_freitas@fiap.com.br</span>
        </div>
      )}
    </div>
  );
};

export default SidebarFooter;
