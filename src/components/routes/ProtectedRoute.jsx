import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function ProtectedRoute({ children, role }) {
  const { user } = useAuth();

  // User not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Check role if provided
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}
