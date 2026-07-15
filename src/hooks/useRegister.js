import { useState } from "react";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/auth.service";

export function useRegister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [accept, setAccept] = useState(false);

  const { setUser } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setAccept(true);
    setErrorMsg("");

    // ==========================================================
    // Client-side Validation
    // ==========================================================
    const isValid =
      form.name.trim() !== "" &&
      form.email.trim() !== "" &&
      form.password.length >= 8 &&
      form.password === form.confirmPassword;

    if (!isValid) return;

    try {
      const user = await authService.register({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      // Save user in Context
      setUser(user);

      // Redirect based on user role
      navigate(user.role === "admin" ? "/admin" : "/user");
    } catch (err) {
      const status = err?.response?.status;
      const message = err?.response?.data?.message;

      if (status === 409) {
        setErrorMsg(message);
      } else if (status === 400) {
        setErrorMsg(message);
      } else if (!status) {
        setErrorMsg("Network error. Please try again.");
      } else {
        setErrorMsg(message || "Something went wrong.");
      }
    }
  };
  return {
    form,
    setForm,
    handleSubmit,
    accept,
    errorMsg,
  };
}
