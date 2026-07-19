import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { adminService } from "../../services/admin.service";

export default function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await adminService.getUserById(id);

        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <p className="empty-message">Loading...</p>;
  }

  return (
    <main className="user-details-page">
      <h1 className="page-title">User Details</h1>

      <div className="card user-details-card">
        <p className="card-text">
          <strong>Email:</strong> {user.email}
        </p>

        <p className="card-text">
          <strong>Role:</strong> {user.role}
        </p>

        <p className="card-text">
          <strong>Created At:</strong>{" "}
          {new Date(user.createdAt).toLocaleDateString()}
        </p>
      </div>
    </main>
  );
}
