

// Dashboard.js
import React, { useState } from "react";
import "./login.css";


export default function Dashboard() {
const [activeTab, setActiveTab] = useState("overview");


const dataList = [
"Complete Profile",
"Start First Course",
"Verify Email",
"Join Community",
"Check Notifications",
];


return (
<div className="login-container" style={{ textAlign: "center" }}>
<div className="login-box" style={{ width: "500px" }}>
<h2 className="login-title">Dashboard</h2>


{/* Tabs */}
<div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "20px" }}>
<button
onClick={() => setActiveTab("overview")}
className="login-btn"
style={{ width: "150px", background: activeTab === "overview" ? "#fff" : "#e0e0e0", color: "#2575fc" }}
>
Overview
</button>
<button
onClick={() => setActiveTab("tasks")}
className="login-btn"
style={{ width: "150px", background: activeTab === "tasks" ? "#fff" : "#e0e0e0", color: "#2575fc" }}
>
Tasks
</button>
</div>


{/* Tab Content */}
{activeTab === "overview" && (
<div>
<p style={{ color: "#fff", marginBottom: "10px" }}>Welcome to your dashboard overview.</p>
<p style={{ color: "#eee" }}>Here you will find important updates and insights.</p>
</div>
)}


{activeTab === "tasks" && (
<div>
<p style={{ color: "#fff", marginBottom: "10px" }}>Your Task List:</p>


<ul style={{ textAlign: "left", margin: "0 auto", width: "80%", color: "#fff" }}>
{dataList.map((item, index) => (
<li key={index} style={{ margin: "8px 0", background: "rgba(255,255,255,0.2)", padding: "10px", borderRadius: "10px" }}>
{item}
</li>
))}
</ul>
</div>
)}


<p className="signup-text" style={{ marginTop: "20px" }}>
<a href="/">Logout</a>
</p>
</div>
</div>
);
}