import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Developers from "../pages/Developers";
import About from "../pages/About";
import MedicalSchedule from "../pages/MedicalSchedule";
import Notification from "../pages/Notification";
import Reports from "../pages/Reports";
import Sac from "../pages/Sac";
import Faq from "../pages/Faq";

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path:"about", element: <About/>},
      { path: "developers", element: <Developers /> },
      { path: "faq", element: <Faq /> },
      { path: "sac", element: <Sac /> },
    ],
  },

  {
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "medicalschedule", element: <MedicalSchedule /> },
      { path: "notification", element: <Notification /> },
      { path: "reports", element: <Reports /> },
    ],
  },
]);

export default router;
