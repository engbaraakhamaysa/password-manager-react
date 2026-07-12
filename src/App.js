import { Routes, Route } from "react-router-dom";
import SignUp from "./auth/Register";
import Login from "./auth/Login";

import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import ProtectedRoute from "./Components/ProtectedRoute";
import User from "./Pages/User";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/user" element={<User />}></Route>

        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
