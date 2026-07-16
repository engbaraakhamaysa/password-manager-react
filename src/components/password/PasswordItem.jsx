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

      <td>
        <button onClick={handleEdit}>Edit</button>

        <button onClick={() => onDelete(password._id)}>Delete</button>
      </td>
    </tr>
  );
}
