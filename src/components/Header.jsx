import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-right">
        <Link to="/">Home</Link>

        <Link to="/user">User</Link>

        <Link to="/password">Password</Link>

        <Link to="/login">Login</Link>

        <Link to="/register">Register</Link>

        <Link to="/admin">Admin</Link>
      </div>
    </header>
  );
}
