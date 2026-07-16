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
    <header className="main-header">
      <div className="header-right">
        <Link to={ROUTES.HOME}>Home</Link>

        {!user && (
          <>
            <Link to={ROUTES.LOGIN}> Login</Link>
            <Link to={ROUTES.REGISTER}>REGISTER</Link>
          </>
        )}

        {user && user.role === ROLES.USER && <Link to={ROUTES.USER}>User</Link>}

        {user && user.role === ROLES.ADMIN && (
          <Link to={ROUTES.ADMIN}>Admin</Link>
        )}

        {user && <button onClick={handleLogout}>Logout</button>}
      </div>
    </header>
  );
}
