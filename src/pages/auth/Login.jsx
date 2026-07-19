import { useRef, useEffect } from "react";

import { useLogin } from "../../hooks/useLogin";

export default function Login() {
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

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  return (
    <main className="auth-page">
      <form className="form auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Login</h2>

        <div className="form-group">
          <label className="form-label">Email</label>

          <input
            ref={emailRef}
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {accept && email.trim() === "" && (
            <p className="form-error">Email is required</p>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>

          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {accept && password.length < 8 && (
            <p className="form-error">Password must be at least 8 characters</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>

        {error && <div className="auth-error">{error}</div>}
      </form>
    </main>
  );
}
