import { createBrowserRouter } from "react-router-dom";
import Root from "./root";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Developers from "../pages/Developers";
import MedicalSchedule from "../pages/MedicalSchedule";
import Notification from "../pages/Notification";
import History from "../pages/History";
import Reports from "../pages/Reports";


import Sac from "../pages/Sac";
import Faq from "../pages/Faq";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "medicalschedule", element: <MedicalSchedule/> },
      { path: "notification", element: <Notification/> },
      { path: "reports", element: <Reports/>},
      { path: "history", element: <History /> },
      { path: "developers", element: <Developers /> },
      { path: "sac", element: <Sac /> },
      { path: "faq", element: <Faq /> },

      
    ],
  },
]);

export default router;


