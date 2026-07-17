import UserItem from "./UserItem";

export default function UserTable({ users }) {
  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <table>
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
  );
}
