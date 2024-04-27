import EmployerProfile from "../../Employer/EmployerProfile";
import CandidateProfile from "../../Candidate/CandidateProfile";
import { EMPLOYER } from "@/constants/roles.constant";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

const Profile = () => {
  const user = useAppSelector(selectCurrentUser);
  return user && user.role === EMPLOYER ? (
    <EmployerProfile />
  ) : (
    <CandidateProfile />
  );
};

export default Profile;
