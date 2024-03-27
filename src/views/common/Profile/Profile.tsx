import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import EmployerProfile from "../../employer/EmployerProfile";
import CandidateProfile from "../../candidate/CandidateProfile";
import { EMPLOYER } from "../../../constants/roles.constant";

const Profile = () => {
  const user = useAppSelector(selectCurrentUser);
  return user && user.role === EMPLOYER ? (
    <EmployerProfile />
  ) : (
    <CandidateProfile />
  );
};

export default Profile;
