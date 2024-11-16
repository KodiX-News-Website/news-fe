import { ROUTES } from "@/enums";
import { AuthGuardProps } from "@/types";

import { checkTokenIsValid } from "@/utils";
import { Navigate } from "react-router-dom";

export const AuthGuard: React.FC<AuthGuardProps> = ({
  children,
  invert = false,
}) => {
  const token = localStorage.getItem("token");
  const hasAccess = invert
    ? !checkTokenIsValid(token)
    : checkTokenIsValid(token);

  if (invert && !hasAccess) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  if (hasAccess) {
    return <>{children}</>;
  }

  return <Navigate to={ROUTES.SIGN_IN} replace />;
};
