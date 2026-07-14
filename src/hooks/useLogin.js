import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/auth.service";
import { useAuth } from "./useAuth";
import { tokenService } from "../utils/token";
import { jwtDecode } from "jwt-decode";

export function useLogin() {
  // ==========================================================
  // State
  // ==========================================================
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [accept, setAccept] = useState(false);

  // ==========================================================
  // Context
  // ==========================================================
  const { setUser } = useAuth();

  // ==========================================================
  // Navigation
  // ==========================================================
  const navigate = useNavigate();

  // ==========================================================
  // Submit
  // ==========================================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setAccept(true);
    setError("");

    const isValid = email.trim() !== "" && password.length >= 8;

    if (!isValid) return;

    try {
      const token = await authService.login({
        email,
        password,
      });

      tokenService.set(token);

      const user = jwtDecode(token);

      setUser(user);

      navigate(user.role === "admin" ? "/admin" : "/");
    } catch (err) {
      const status = err?.response?.status;
      const message = err?.response?.data?.message;

      if (status === 404 || status === 401) {
        setError(message);
      } else if (!status) {
        setError("Network error. Please try again.");
      } else {
        setError(message || "Something went wrong.");
      }
    }
  };

  return {
    email,
    setEmail,

    password,
    setPassword,

    error,
    accept,

    handleSubmit,
  };
}
