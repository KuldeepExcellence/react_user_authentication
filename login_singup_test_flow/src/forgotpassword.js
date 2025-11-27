import React, { useState } from "react";
import "./login.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password email:", email);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Forgot Password</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
}
