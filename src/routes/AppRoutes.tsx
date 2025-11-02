import { createBrowserRouter } from "react-router-dom";
import Root from "./root";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Developers from "../pages/Developers";

import Sac from "../pages/Sac";
import Faq from "../pages/Faq";
import UnderConstruction from "../pages/UnderConstrution";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "developers", element: <Developers /> },
      { path: "sac", element: <Sac /> },
      { path: "faq", element: <Faq /> },
      { path: "settings", element: <UnderConstruction page="Configurações" /> },
      { path: "logs", element: <UnderConstruction page="Login" /> },
      { path: "reports", element: <UnderConstruction page="Relatórios" /> },
    ],
  },
]);

export default router;


