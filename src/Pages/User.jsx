import { useEffect, useState } from "react";
import AddPassword from "../Components/AddPassword";
import Header from "../Components/Header";
import PasswordList from "../Components/PasswordList";
import { passwordService } from "../services/passwordServices";

export default function User() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [passwords, setPasswords] = useState([]);

  const fetchPasswords = async () => {
    try {
      const res = await passwordService.get();
      setPasswords(res);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchPasswords();
  }, []);

  return (
    <div>
      <Header />

      <h1>My Passwords</h1>

      <button onClick={() => setShowAddModal(true)}>Add Password</button>

      <PasswordList passwords={passwords} refreshPasswords={fetchPasswords} />

      {showAddModal && (
        <AddPassword
          onClose={() => setShowAddModal(false)}
          refreshPasswords={fetchPasswords}
        />
      )}
    </div>
  );
}
