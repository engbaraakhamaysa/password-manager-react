import { Outlet } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { ROLES } from "../../constants/roles";

export default function AdminRoutes() {
  return (
    <ProtectedRoute role={ROLES.ADMIN}>
      <Outlet />
    </ProtectedRoute>
  );
}
