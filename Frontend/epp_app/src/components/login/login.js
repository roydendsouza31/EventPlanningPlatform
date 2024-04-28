import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

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
            navigate('/');
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
        type="text"
        placeholder="Enter your Email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Enter your Password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <div className="button" onClick={login}>
        Login
      </div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/signup")}>
        Register
      </div>
    </div>
  );
};

export default Login;
