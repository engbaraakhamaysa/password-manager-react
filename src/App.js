import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import Admin from "./pages/Admin";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import ProtectedRoute from "./components/routes/ProtectedRoute";

import { ROUTES } from "./constants/routes";
import { ROLES } from "./constants/roles";

import { useAuthInit } from "./hooks/useAuthInit";

export default function App() {
  useAuthInit();
  return (
    <Routes>
      {/* Public Routes */}
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />

      {/* User Routes */}
      <Route
        path={ROUTES.USER}
        element={
          <ProtectedRoute role={ROLES.USER}>
            <User />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path={ROUTES.ADMIN}
        element={
          <ProtectedRoute role={ROLES.ADMIN}>
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
