import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./login";
import Signup from "./singupscreen";
import OTPVerification from "./otpverification";
import ForgotPassword from "./forgotpassword";
import Dashboard from "./dashboard";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-otp" element={<OTPVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
      </Routes>
    </Router>
  );
}
