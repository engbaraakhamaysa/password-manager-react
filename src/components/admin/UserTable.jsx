import UserItem from "./UserItem";

export default function UserTable({ users }) {
  if (users.length === 0) {
    return <p className="empty-message">No users found.</p>;
  }

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserItem key={user._id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
