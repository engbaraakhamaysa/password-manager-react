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
      <nav className="header-nav">
        <Link className="header-link" to={ROUTES.HOME}>
          Home
        </Link>

        {user?.role === ROLES.USER && (
          <>
            <Link className="header-link" to="/user/passwords">
              Passwords
            </Link>

            <Link className="header-link" to="/user/passwords/add">
              Add Password
            </Link>
          </>
        )}

        {user?.role === ROLES.ADMIN && (
          <Link className="header-link" to="/admin/users">
            Users
          </Link>
        )}

        {user && (
          <>
            <Link className="header-link" to="/profile">
              Profile
            </Link>

            <Link className="header-link" to="/settings">
              Settings
            </Link>
          </>
        )}
      </nav>

      <nav className="header-actions">
        {!user && (
          <>
            <Link className="header-link" to={ROUTES.LOGIN}>
              Login
            </Link>

            <Link className="header-link" to={ROUTES.REGISTER}>
              Register
            </Link>
          </>
        )}

        {user && (
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}
