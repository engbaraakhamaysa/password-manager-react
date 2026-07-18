import { Outlet } from "react-router-dom";
import { ROLES } from "../../constants/roles";
import ProtectedRoute from "./ProtectedRoute";

export default function UserRoutes() {
  return (
    <ProtectedRoute role={ROLES.USER}>
      <Outlet />
    </ProtectedRoute>
  );
}
