import { useNavigate } from "react-router-dom";

export default function PasswordItem({ password, onDelete }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/user/passwords/edit/${password._id}`);
  };

  return (
    <tr>
      <td>{password.website}</td>

      <td>{password.username}</td>

      <td>{password.notes || "-"}</td>

      <td className="table-actions">
        <button className="btn btn-secondary" onClick={handleEdit}>
          Edit
        </button>

        <button
          className="btn btn-danger"
          onClick={() => onDelete(password._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
