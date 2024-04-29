import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate, useLocation } from "react-router-dom";
import appConfig from "../../config/app.config";
import { REDIRECT_URL_KEY } from "../../constants/app.constant";

const { unAuthenticatedEntryPath } = appConfig;

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);
  const location = useLocation();
  if (!token) {
    return (
      <Navigate
        to={unAuthenticatedEntryPath}
        state={location.pathname}
        replace={true}
      />
    );
  }

  return children;
};

export default ProtectedRoute;
