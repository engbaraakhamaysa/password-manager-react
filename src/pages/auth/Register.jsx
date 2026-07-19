import { useEffect, useRef } from "react";

import { useRegister } from "../../hooks/useRegister";

export default function Register() {
  const nameRef = useRef();

  const { form, accept, errorMsg, handleChange, handleSubmit } = useRegister();

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  return (
    <main className="auth-page">
      <form onSubmit={handleSubmit} className="form auth-form">
        <h2 className="auth-title">Register</h2>

        <div className="form-group">
          <label className="form-label">Name</label>

          <input
            ref={nameRef}
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />

          {accept && form.name.trim() === "" && (
            <p className="form-error">Name is required.</p>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>

          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>

          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          {accept && form.password.length < 8 && (
            <p className="form-error">
              Password must be at least 8 characters.
            </p>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Confirm Password</label>

          <input
            className="input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          {accept && form.password !== form.confirmPassword && (
            <p className="form-error">Passwords do not match.</p>
          )}
        </div>

        {errorMsg && <div className="auth-error">{errorMsg}</div>}

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </main>
  );
}
