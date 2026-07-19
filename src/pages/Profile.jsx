import { useAuth } from "../hooks/useAuth";

export default function Profile() {
  const { user } = useAuth();

  return (
    <main className="profile-page">
      <h1 className="page-title">Profile</h1>

      <div className="card profile-card">
        <h2 className="card-title">User Information</h2>

        <p className="card-text">Name: {user?.name || "-"}</p>

        <p className="card-text">Email: {user?.email || "-"}</p>

        <p className="card-text">Role: {user?.role || "-"}</p>
      </div>
    </main>
  );
}
