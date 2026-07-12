import { useEffect, useState } from "react";
import { passwordService } from "../services/passwordServices";

export default function usePasswords() {
  const [passwords, setPasswords] = useState([]);

  const fetchPasswords = async () => {
    try {
      const data = await passwordService.get();

      setPasswords(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPasswords();
  }, []);

  return {
    passwords,
    refreshPasswords: fetchPasswords,
  };
}
