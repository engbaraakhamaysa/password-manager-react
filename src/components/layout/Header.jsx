import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ROUTES } from "../../constants/routes";
import { ROLES } from "../../constants/roles";

export default function Header() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

  return (
    <header className="header">
      {/* Left */}
      <nav className="header-left">
        <Link to={ROUTES.HOME}>Home</Link>

        {user?.role === ROLES.USER && (
          <>
            <Link to="/user/passwords">Passwords</Link>

            <Link to="/user/passwords/add">Add Password</Link>
          </>
        )}

        {user?.role === ROLES.ADMIN && <Link to="/admin/users">Users</Link>}

        {user && (
          <>
            <Link to="/profile">Profile</Link>

            <Link to="/settings">Settings</Link>
          </>
        )}
      </nav>

      {/* Right */}
      <nav className="header-right">
        {!user && (
          <>
            <Link to={ROUTES.LOGIN}>Login</Link>

            <Link to={ROUTES.REGISTER}>Register</Link>
          </>
        )}

        {user && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </header>
  );
}
