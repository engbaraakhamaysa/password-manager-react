import PasswordList from "../../components/password/PasswordList";
import { useEffect, useState } from "react";
import { passwordService } from "../../services/password.service";

export default function Passwords() {
  const [passwords, setPasswords] = useState([]);

  const fetchPasswords = async () => {
    try {
      const data = await passwordService.getAll();

      console.log("PASSWORD DATA:", data);

      setPasswords(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPasswords();
  }, []);

  return (
    <>
      <h1>My Passwords</h1>

      <PasswordList passwords={passwords} onDelete={fetchPasswords} />
    </>
  );
}
