import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";

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
        .post("http://localhost:3001/sellerlogin", user)
        .then((res) => {
          if (res.status === 200) {
            onLogin();
            navigate("/sellerHomepage");
          } else {
            alert("Seller not found. Please signup.");
          }
        })
        .catch((error) => {
          console.error("Error logging in:", error);
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="sellerLogin card">
              <div className="card-body">
                <h1 className="card-title text-center mb-4">Seller Login</h1>
                <form onSubmit={login}>
                  <div className="mb-3 mx-5">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 mx-5">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{ width: "100%" }}
                    className="btn btn-primary btn-block"
                  >
                    Login
                  </button>
                </form>
                <p className="text-center mt-3">
                  Don't have an account?{" "}
                  <Link to="/sellersignup" style={{ textDecoration: "none" }}>
                    Join as seller
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
