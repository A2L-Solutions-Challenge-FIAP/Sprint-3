import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Root = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <Sidebar />
      <main className = "flex-1 p-2" >
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
