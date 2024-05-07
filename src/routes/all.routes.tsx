import Dashboard from "@/views/Private/Common/Dashboard";
import Profile from "@/views/Private/Common/Profile";
import MyResume from "@/views/Private/Candidate/MyResume";
import ChangePassword from "@/views/auth/ChangePassword";
import { ROLE } from "@/types";
import { AiOutlineHome } from "react-icons/ai";
import { LiaUserTieSolid } from "react-icons/lia";
import { VscSend } from "react-icons/vsc";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { GoBookmark } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";
import AddNewJob from "@/views/Private/Employer/AddNewJob";
import ManageJobs from "@/views/Private/Employer/ManageJobs";
import ShortListedResume from "@/views/Private/Employer/ShortListedResume";
import AllApplicants from "@/views/Private/Employer/AllApplicants";
export const routePaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
    icon: <AiOutlineHome />,
    authority: [ROLE.EMPLOYER, ROLE.CANDIDATE, ROLE.SYSTEM_ADMIN],
  },
  {
    name: "Profile",
    path: "profile",
    element: <Profile />,
    icon: <LiaUserTieSolid />,
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
        icon: <GrDocumentText />,
        authority: [ROLE.CANDIDATE],
      },
      {
        name: "Applied Jobs",
        path: "applied-jobs",
        element: <MyResume />,
        icon: <MdOutlineWorkOutline />,
        authority: [ROLE.CANDIDATE],
      },
      {
        name: "Short Listed Jobs",
        path: "short-listed-jobs",
        element: <MyResume />,
        icon: <GoBookmark />,
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
        element: <AddNewJob />,
        icon: <VscSend />,
        authority: [ROLE.EMPLOYER],
      },
      {
        name: "Manage Jobs",
        path: "manage-jobs",
        element: <ManageJobs />,
        icon: <MdOutlineWorkOutline />,
        authority: [ROLE.EMPLOYER],
      },
      {
        name: "All Applicants",
        path: "all-applicants",
        element: <AllApplicants />,
        icon: <GrDocumentText />,
        authority: [ROLE.EMPLOYER],
      },
      {
        name: "Short Listed Resume",
        path: "short-listed-resume",
        element: <ShortListedResume />,
        icon: <GoBookmark />,
        authority: [ROLE.EMPLOYER],
      },
    ],
  },
  {
    name: "Change Password",
    path: "change-password",
    element: <ChangePassword />,
    icon: <RiLockPasswordLine />,
    authority: [ROLE.EMPLOYER, ROLE.CANDIDATE, ROLE.SYSTEM_ADMIN],
  },
];
