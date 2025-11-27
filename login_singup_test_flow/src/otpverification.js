import React, { useState } from "react";
import "./login.css";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP entered:", otp);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Verify OTP</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label>Enter OTP</label>
            <input
              type="text"
              placeholder="Enter OTP code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">Verify</button>
        </form>
      </div>
    </div>
  );
}
