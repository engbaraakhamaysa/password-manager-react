import PasswordList from "../../components/password/PasswordList";
import { useEffect, useState } from "react";
import { passwordService } from "../../services/password.service";

export default function Passwords() {
  const [passwords, setPasswords] = useState([]);

  const fetchPasswords = async () => {
    try {
      const data = await passwordService.getAll();

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
      await passwordService.remove(id);

      await fetchPasswords();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>My Passwords</h1>

      <PasswordList passwords={passwords} onDelete={handleDelete} />
    </>
  );
}
