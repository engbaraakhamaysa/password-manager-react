import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside>
      <h2>Admin Panel</h2>

      <nav>
        <NavLink to="/admin">Dashboard</NavLink>
        <br />

        <NavLink to="/admin/users">Users</NavLink>
        <br />

        <NavLink to="/admin/profile">Profile</NavLink>
        <br />

        <NavLink to="/admin/settings">Settings</NavLink>
      </nav>
    </aside>
  );
}
