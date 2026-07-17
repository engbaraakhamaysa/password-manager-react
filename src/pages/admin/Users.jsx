import { useEffect, useState } from "react";
import { adminService } from "../../services/admin.service";
import UserTable from "../../components/admin/UserTable";

export default function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const data = await adminService.getUsers();

      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Users</h1>

      <UserTable users={users} />
    </>
  );
}
