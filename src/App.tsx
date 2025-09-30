import "./index.css";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./Routes";

import "./index.css";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
