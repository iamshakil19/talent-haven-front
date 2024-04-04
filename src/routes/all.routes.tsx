import ChangePassword from "../views/auth/ChangePassword";
import MyResume from "../views/candidate/MyResume";
import Dashboard from "../views/common/Dashboard";
import Profile from "../views/common/Profile";

export const routePaths = [
  {
    key: "dashboard",
    name: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    name: "Profile",
    path: "profile",
    element: <Profile />,
  },
  {
    name: "Change Password",
    path: "change-password",
    element: <ChangePassword />,
  },
  {
    name: "Candidate Routes",
    children: [
      {
        name: "My Resume",
        path: "my-resume",
        element: <MyResume />,
      },
      {
        name: "Applied Jobs",
        path: "applied-jobs",
        element: <MyResume />,
      },
      {
        name: "Short Listed Jobs",
        path: "short-listed-jobs",
        element: <MyResume />,
      },
    ],
  },
  {
    name: "Employer Routes",
    children: [
      {
        name: "Add New Job",
        path: "add-new-job",
        element: <MyResume />,
      },
      {
        name: "Manage Jobs",
        path: "manage-jobs",
        element: <MyResume />,
      },
      {
        name: "All Applicants",
        path: "all-applicants",
        element: <MyResume />,
      },
      {
        name: "Short Listed Resume",
        path: "short-listed-resume",
        element: <MyResume />,
      },
    ],
  },
];
