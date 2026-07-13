import { useState } from "react";
import { usePasswords } from "../Hook/usePassword";
import Header from "../Components/Header";
import PasswordList from "../Components/PasswordList";
import AddPassword from "../Components/AddPassword";

export default function User() {
  const [showAddModal, setShowAddModal] = useState(false);

  const { passwords, loading, error, fetchPasswords } = usePasswords();

  return (
    <div>
      <Header />

      <h1>My Passwords</h1>

      <button onClick={() => setShowAddModal(true)}>Add Password</button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

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
