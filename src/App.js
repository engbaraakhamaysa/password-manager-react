import { Routes, Route } from "react-router-dom";

import SignUp from "./auth/Register";
import Login from "./auth/Login";

import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import User from "./Pages/User";

import ProtectedRoute from "./Components/ProtectedRoute";

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
