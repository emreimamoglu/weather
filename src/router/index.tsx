import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import { lazy } from "react";
const LazyDashboard = lazy(() => import("../views/Dashboard"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "dashboard",
    element: <LazyDashboard />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

export default router;
