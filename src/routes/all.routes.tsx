import Dashboard from "@/views/Private/Common/Dashboard";
import Profile from "@/views/Private/Common/Profile";
import MyResume from "@/views/Private/Candidate/MyResume";
import ChangePassword from "@/views/auth/ChangePassword";
import { ROLE } from "@/types";

export const routePaths = [
  {
    name: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
    authority: [ROLE.EMPLOYER, ROLE.CANDIDATE, ROLE.SYSTEM_ADMIN],
  },
  {
    name: "Profile",
    path: "profile",
    element: <Profile />,
    authority: [ROLE.EMPLOYER, ROLE.CANDIDATE, ROLE.SYSTEM_ADMIN],
  },
  {
    name: "Change Password",
    path: "change-password",
    element: <ChangePassword />,
    authority: [ROLE.EMPLOYER, ROLE.CANDIDATE, ROLE.SYSTEM_ADMIN],
  },
  {
    title: "Candidate Routes",
    name: "",
    path: "",
    authority: [ROLE.CANDIDATE],
    children: [
      {
        name: "My Resume",
        path: "my-resume",
        element: <MyResume />,
        authority: [ROLE.CANDIDATE],
      },
      {
        name: "Applied Jobs",
        path: "applied-jobs",
        element: <MyResume />,
        authority: [ROLE.CANDIDATE],
      },
      {
        name: "Short Listed Jobs",
        path: "short-listed-jobs",
        element: <MyResume />,
        authority: [ROLE.CANDIDATE],
      },
    ],
  },
  {
    title: "Employer Routes",
    name: "",
    path: "",
    authority: [ROLE.EMPLOYER],
    children: [
      {
        name: "Add New Job",
        path: "add-new-job",
        element: <MyResume />,
        authority: [ROLE.EMPLOYER],
      },
      {
        name: "Manage Jobs",
        path: "manage-jobs",
        element: <MyResume />,
        authority: [ROLE.EMPLOYER],
      },
      {
        name: "All Applicants",
        path: "all-applicants",
        element: <MyResume />,
        authority: [ROLE.EMPLOYER],
      },
      {
        name: "Short Listed Resume",
        path: "short-listed-resume",
        element: <MyResume />,
        authority: [ROLE.EMPLOYER],
      },
    ],
  },
];
