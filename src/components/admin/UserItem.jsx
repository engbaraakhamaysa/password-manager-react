import { useNavigate } from "react-router-dom";

export default function UserItem({ user }) {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/admin/users/${user._id}`);
  };

  return (
    <tr>
      <td>{user.email}</td>

      <td>{user.role}</td>

      <td>
        <button onClick={handleView}>View</button>

        <button>Delete</button>
      </td>
    </tr>
  );
}
