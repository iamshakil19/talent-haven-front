import { createBrowserRouter } from "react-router-dom";
import { routePaths } from "./all.routes";
import AuthLayout from "../components/layout/AuthLayout";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import Jobs from "@/views/public/Jobs";
import About from "@/views/public/About";
import MainLayout from "@/components/layout/MainLayout";
import Home from "@/views/public/Home/Home";
import { routeGenerator } from "@/utils/routesGenerator";
import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";
import JobDetails from "@/views/public/JobDetails";

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
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/:slug",
        element: <JobDetails />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
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
