import { Routes, Route } from "react-router-dom";

import SignUp from "./auth/Register";
import Login from "./auth/Login";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import User from "./pages/User";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<SignUp />} />

        <Route path="/login" element={<Login />} />

        {/* Protected User Route */}
        <Route
          path="/user"
          element={
            <ProtectedRoute role="user">
              <User />
            </ProtectedRoute>
          }
        />

        {/* Protected Admin Route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
