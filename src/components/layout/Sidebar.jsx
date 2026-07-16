import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside>
      <nav>
        <NavLink to="/user/passwords">Passwords</NavLink>

        <NavLink to="/user/passwords/add">Add Password</NavLink>

        <NavLink to="/user/profile">Profile</NavLink>

        <NavLink to="/user/settings">Settings</NavLink>
      </nav>
    </aside>
  );
}
