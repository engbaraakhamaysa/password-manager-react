import { useEffect, useState } from "react";
import { passwordService } from "../services/password.service";
import DashboardLayout from "../components/layout/DashboardLayout";
import PasswordList from "../components/password/PasswordList";

export default function Passwords() {
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

  const handleDelete = async (id) => {
    try {
      await passwordService.delete(id);

      await fetchPasswords();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DashboardLayout>
      <h1>My Passwords</h1>

      <PasswordList passwords={passwords} onDelete={handleDelete} />
    </DashboardLayout>
  );
}
