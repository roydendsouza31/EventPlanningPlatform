import React, { useState } from "react";
import "./sellerLogin.css";
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

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const login = (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter both email and password");
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address");
    } else {
      axios
        .post("http://localhost:3000/sellerlogin", user)
        .then((res) => {
          if (res.status === 200) {
            onLogin(); // Update authentication state
            navigate("/");
          } else {
            alert("seller not found. Please signup.");
          }
        })
        .catch((error) => {
          console.error("Error logging in:", error);
        });
    }
  };

  return (
    <div className="sellerLogin">
      <h1>Seller Login</h1>
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
        Don't have an account? <Link to="/sellersignup">Join as seller</Link>
      </p>
    </div>
  );
};

export default Login;
