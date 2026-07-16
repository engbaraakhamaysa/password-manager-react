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
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit Password" : "Add Password"}</h2>

      <input
        name="website"
        placeholder="Website"
        value={form.website}
        onChange={handleChange}
      />

      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
      />

      <input
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />

      <textarea
        name="notes"
        placeholder="Notes"
        value={form.notes}
        onChange={handleChange}
      />

      <button type="submit">
        {loading ? "Saving..." : id ? "Update" : "Save"}
      </button>
    </form>
  );
}
