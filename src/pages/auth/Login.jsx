import { useRef, useEffect } from "react";
import Header from "../../components/layout/Header";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  // ==========================================================
  // Refs
  // ==========================================================
  const emailRef = useRef(null);

  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    accept,
    handleSubmit,
  } = useLogin();

  // ==========================================================
  // Effects
  // Focus email input on mount
  // ==========================================================
  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  // ==========================================================
  // UI
  // ==========================================================
  return (
    <div>
      <Header />

      <div className="auth-container">
        <form onSubmit={handleSubmit} className="auth-form">
          <h2 className="auth-header">Login</h2>

          {/* Email */}
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
          />

          {accept && email.trim() === "" && (
            <p className="auth-error">Email is required</p>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />

          {accept && password.length < 8 && (
            <p className="auth-error">Password must be at least 8 characters</p>
          )}

          {/* Submit */}
          <div className="auth-submit">
            <button type="submit" className="auth-button">
              Login
            </button>
          </div>

          {/* Server Error */}
          {error && <div className="auth-error-box">{error}</div>}
        </form>
      </div>
    </div>
  );
}
