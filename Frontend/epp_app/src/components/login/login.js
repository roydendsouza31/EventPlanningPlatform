import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email && password) {
      axios
        .post("http://localhost:3000/login", user)
        .then((res) => {
          if (res.status === 200) {
            onLogin(); // Update authentication state
            navigate("/");
          } else {
            alert("User not found. Please signup.");
          }
        })
        .catch((error) => {
          console.error("Error signing up:", error);
        });
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <div className="button" onClick={login}>
        Login
      </div>
      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;
