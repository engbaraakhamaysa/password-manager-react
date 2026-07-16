import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/auth.service";
import { useAuth } from "./useAuth";

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

  // Handle Input Change
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setAccept(true);
    setErrorMsg("");

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

      setUser(user);

      navigate(user.role === "admin" ? "/admin" : "/user");
    } catch (err) {
      const status = err?.response?.status;
      const message = err?.response?.data?.message;

      if (!status) {
        setErrorMsg("Network error. Please try again.");
      } else {
        setErrorMsg(message || "Something went wrong.");
      }
    }
  };

  return {
    form,
    accept,
    errorMsg,
    handleChange,
    handleSubmit,
  };
}
