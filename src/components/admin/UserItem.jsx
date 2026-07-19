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

      <td className="table-actions">
        <button className="btn btn-primary" onClick={handleView}>
          View
        </button>

        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
}
