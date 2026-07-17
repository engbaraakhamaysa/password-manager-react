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
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User Details</h1>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Role:</strong> {user.role}
      </p>

      <p>
        <strong>Created At:</strong>{" "}
        {new Date(user.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}
