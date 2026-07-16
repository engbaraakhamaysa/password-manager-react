import { useEffect, useRef } from "react";
import Header from "../../components/layout/Header";
import { useRegister } from "../../hooks/useRegister";

export default function Register() {
  const nameRef = useRef();

  const { form, accept, errorMsg, handleChange, handleSubmit } = useRegister();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div>
      <Header />

      <div className="auth-container">
        <form onSubmit={handleSubmit} className="auth-form">
          <h2 className="auth-header">Register</h2>

          <input
            ref={nameRef}
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="auth-input"
          />

          {accept && form.name.trim() === "" && (
            <p className="auth-error">Name is required.</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="auth-input"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="auth-input"
          />

          {accept && form.password.length < 8 && (
            <p className="auth-error">
              Password must be at least 8 characters.
            </p>
          )}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="auth-input"
          />

          {accept && form.password !== form.confirmPassword && (
            <p className="auth-error">Passwords do not match.</p>
          )}

          {errorMsg && <div className="auth-error-box">{errorMsg}</div>}

          <div className="auth-submit">
            <button type="submit" className="auth-button">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
