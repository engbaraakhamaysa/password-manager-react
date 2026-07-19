import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { passwordService } from "../../services/password.service";

export default function PasswordForm() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    website: "",
    username: "",
    password: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  // ============================
  // Load old data when editing
  // ============================
  useEffect(() => {
    if (!id) return;

    const fetchPassword = async () => {
      try {
        const data = await passwordService.getById(id);

        setForm(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPassword();
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (id) {
        await passwordService.update(id, form);
      } else {
        await passwordService.create(form);
      }

      navigate("/user/passwords");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="password-form-page">
      <form onSubmit={handleSubmit} className="form password-form">
        <h2 className="password-form-title">
          {id ? "Edit Password" : "Add Password"}
        </h2>

        <div className="form-group">
          <label className="form-label">Website</label>

          <input
            className="input"
            name="website"
            placeholder="Website"
            value={form.website}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Username</label>

          <input
            className="input"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>

          <input
            className="input"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Notes</label>

          <textarea
            className="input textarea"
            name="notes"
            placeholder="Notes"
            value={form.notes}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {loading ? "Saving..." : id ? "Update" : "Save"}
        </button>
      </form>
    </main>
  );
}
