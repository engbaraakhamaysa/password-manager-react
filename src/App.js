import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import { ROUTES } from "./constants/routes";

import { useAuthInit } from "./hooks/useAuthInit";

import PasswordForm from "./components/password/PasswordForm";
import Passwords from "./pages/user/Passwords";
import EditPassword from "./pages/user/EditPassword";

import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import Users from "./pages/admin/Users";
import UserDetails from "./pages/admin/UserDetails";

import Header from "./components/layout/Header";

import ProtectedRoute from "./components/routes/ProtectedRoute";
import UserRoutes from "./components/routes/UserRoutes";
import AdminRoutes from "./components/routes/AdminRoutes";
import Footer from "./components/layout/Footer";

export default function App() {
  useAuthInit();

  return (
    <>
      <Header />

      <Routes>
        {/* ================= Public ================= */}

        <Route path={ROUTES.HOME} element={<Home />} />

        <Route path={ROUTES.LOGIN} element={<Login />} />

        <Route path={ROUTES.REGISTER} element={<Register />} />

        {/* ================= Shared Protected ================= */}

        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />

          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* ================= User ================= */}

        <Route element={<UserRoutes />}>
          <Route path="/user/passwords" element={<Passwords />} />

          <Route path="/user/passwords/add" element={<PasswordForm />} />

          <Route path="/user/passwords/edit/:id" element={<EditPassword />} />
        </Route>

        {/* ================= Admin ================= */}

        <Route element={<AdminRoutes />}>
          <Route path="/admin/users" element={<Users />} />

          <Route path="/admin/users/:id" element={<UserDetails />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}
