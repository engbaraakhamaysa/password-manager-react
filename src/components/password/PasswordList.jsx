import PasswordItem from "./PasswordItem";

export default function PasswordList({ passwords, onDelete }) {
  if (passwords.length === 0) {
    return <p className="empty-message">No passwords found.</p>;
  }

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Website</th>
            <th>Username</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {passwords.map((password) => (
            <PasswordItem
              key={password._id}
              password={password}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
