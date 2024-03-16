import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routesGenerator";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: '/admin',
  //   element: <App />,
  //   children: routeGenerator(adminPaths),
  // },
  // {
  //   path: '/faculty',
  //   element: <App />,
  //   children: routeGenerator(facultyPaths),
  // },
  // {
  //   path: '/student',
  //   element: <App />,
  //   children: routeGenerator(studentPaths),
  // },
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
