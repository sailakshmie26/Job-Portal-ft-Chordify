import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      navigate("/login");
    } catch (err) {
      alert("Registration failed!");
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      style={{
        maxWidth: "400px",
        margin: "100px auto",
        padding: "2rem",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        fontFamily: "sans-serif",
        backgroundColor: "#fff",
      }}
    >
      <h2 style={{ fontSize: "32px", textAlign: "center", marginBottom: "20px" }}>
        Register
      </h2>

      <input
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "12px",
          borderRadius: "5px",
          border: "1px solid #ddd",
          fontSize: "14px",
        }}
      />

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "12px",
          borderRadius: "5px",
          border: "1px solid #ddd",
          fontSize: "14px",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "12px",
          borderRadius: "5px",
          border: "1px solid #ddd",
          fontSize: "14px",
        }}
      />

      <select
        onChange={(e) => setForm({ ...form, role: e.target.value })}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "12px",
          borderRadius: "5px",
          border: "1px solid #ddd",
          fontSize: "14px",
        }}
      >
        <option value="">Select Role</option>
        <option value="job_seeker">Job Seeker</option>
        <option value="employer">Employer</option>
      </select>

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "15px",
        }}
      >
        Register
      </button>
    </form>
  );
};

export default Register;
