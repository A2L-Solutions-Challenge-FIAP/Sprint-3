import {  useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-gray-200 shadow-sm 
            flex items-center justify-between px-6 py-3">
      <div className="max-w-6xl  flex items-center justify-between px-6 py-4">
  
        <Button
          variant="primary"
          className="text-sm hidden sm:block mr-2 ml-auto"
          onClick={() => navigate("/")}
        >
          Home
        </Button>
      </div>
    </header>
  );
}
