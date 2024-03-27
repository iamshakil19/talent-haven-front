import { CANDIDATE, EMPLOYER } from "../../../constants/roles.constant";
import {
  TUser,
  selectCurrentUser,
} from "../../../redux/features/auth/authSlice";
import { useAppSelector } from "../../../redux/hooks";
import CandidateDashboard from "../../candidate/CandidateDashboard";
import EmployerDashboard from "../../employer/EmployerDashboard";

const Dashboard = () => {
  // const user = useAppSelector(selectCurrentUser);

  const user: TUser = {
    userId: "",
    role: "employer",
    iat: 3344,
    exp: 445454,
  };

  return user.role === EMPLOYER ? (
    <EmployerDashboard />
  ) : (
    <CandidateDashboard />
  );
};

export default Dashboard;
