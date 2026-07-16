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
import PasswordForm from "./components/password/PasswordForm";
import Passwords from "./pages/user/Passwords";
import UserDashboard from "./pages/user/UserDashboard";
import DashboardLayout from "./components/layout/DashboardLayout";
import EditPassword from "./pages/user/EditPassword";
import Profile from "./pages/user/Profile";
import Settings from "./pages/user/Settings";

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
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<UserDashboard />} />

        <Route path="passwords" element={<Passwords />} />

        <Route path="passwords/add" element={<PasswordForm />} />

        <Route path="passwords/edit/:id" element={<EditPassword />} />

        <Route path="profile" element={<Profile />} />

        <Route path="settings" element={<Settings />} />
      </Route>

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
