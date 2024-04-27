import { CANDIDATE, EMPLOYER } from "@/constants/roles.constant";
import CandidateDashboard from "../../Candidate/CandidateDashboard";
import EmployerDashboard from "../../Employer/EmployerDashboard";
import { useAppSelector } from "@/redux/hooks";
import { TUser, selectCurrentUser } from "@/redux/features/auth/authSlice";
import SystemAdminDashboard from "../../SystemAdmin/SystemAdminDashboard";

const Dashboard = () => {
  const user: TUser | null = useAppSelector(selectCurrentUser);

  let content;

  if (user && user.role === EMPLOYER) {
    content = <EmployerDashboard />;
  } else if (user && user.role === CANDIDATE) {
    content = <CandidateDashboard />;
  } else {
    content = <SystemAdminDashboard />;
  }

  return content;
};

export default Dashboard;
