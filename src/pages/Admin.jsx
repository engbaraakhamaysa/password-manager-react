import { useState } from "react";

import Header from "../components/Header";
import { useUsers } from "../hooks/useUsers";

export default function Admin() {
  const [search, setSearch] = useState("");

  const { users, loading, error } = useUsers();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <Header />

      <div
        style={{
          maxWidth: "600px",
          margin: "40px auto",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          fontFamily: "sans-serif",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Admin Dashboard</h2>

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {loading && <p>Loading users...</p>}

        {error && <p>{error}</p>}

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>

                  <td>{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
