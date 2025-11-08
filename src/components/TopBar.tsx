import {  useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 justify-between z-40 ">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
  
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
