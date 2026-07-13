import { useEffect, useState } from "react";
import { passwordService } from "../services/password.service";

export function usePasswords() {
  const [passwords, setPasswords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPasswords = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await passwordService.getAll();

      setPasswords(data);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to fetch passwords");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPasswords();
  }, []);

  return {
    passwords,
    loading,
    error,
    fetchPasswords,
  };
}
