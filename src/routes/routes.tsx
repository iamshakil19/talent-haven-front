import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routesGenerator";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import MainLayout from "../components/layout/MainLayout";
import Home from "../views/public/Home/Home";
import { routePaths } from "./all.routes";
import AuthLayout from "../components/layout/AuthLayout";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import About from "../views/public/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      // <ProtectedRoute>
      <AuthLayout />
      //  </ProtectedRoute>
    ),
    children: routeGenerator(routePaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
