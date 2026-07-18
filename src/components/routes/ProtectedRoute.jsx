// import { Navigate } from "react-router-dom";
// import { useAuth } from "../../hooks/useAuth";
// import { ROUTES } from "../../constants/routes";
// import Loading from "../common/Loading";

// export default function ProtectedRoute({ children, role }) {
//   const { user, isAuthReady } = useAuth();

//   if (!isAuthReady) {
//     return <Loading />;
//   }

//   // User not logged in
//   if (!user) {
//     return <Navigate to={ROUTES.LOGIN} replace />;
//   }

//   // Check role if provided
//   if (role && user.role !== role) {
//     return <Navigate to={ROUTES.HOME} replace />;
//   }

//   return children;
// }

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ROUTES } from "../../constants/routes";
import Loading from "../common/Loading";

export default function ProtectedRoute({ role }) {
  const { user, isAuthReady } = useAuth();

  if (!isAuthReady) {
    return <Loading />;
  }

  // User not logged in
  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  // Check role if provided
  if (role && user.role !== role) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return <Outlet />;
}
