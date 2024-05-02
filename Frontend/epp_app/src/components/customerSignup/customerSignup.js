import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbar";

const CustomerSignup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = (e) => {
    e.preventDefault();
    const { name, surname, email, password, confirmPassword } = user;
    if (
      !name.trim() ||
      !surname.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("Please fill out all fields");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address");
    } else {
      axios
        .post("http://localhost:3001/customersignup", user)
        .then((res) => {
          if (res.status === 201) {
            setRegistrationSuccess(true);
            setTimeout(() => {
              navigate("/customerlogin");
            }, 2000); // Redirect after 2 seconds
          } else if (res.status === 203) {
            alert("User already exists. Please Login.");
          }
        })
        .catch((error) => {
          console.error("Error signing up:", error);
        });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title text-center mb-4">Sign Up</h1>
                <form onSubmit={register}>
                  <div className="mb-3 mx-5 px-5">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="First Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 mx-5 px-5">
                    <input
                      type="text"
                      name="surname"
                      className="form-control"
                      placeholder="Last Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 mx-5 px-5">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 mx-5 px-5">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 mx-5 px-5">
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-3 mx-5 px-5"
                  >
                    Signup
                  </button>
                </form>
                <p className="text-center mt-3">
                  Already have an account?{" "}
                  <Link style={{ textDecoration: "none" }} to="/customerlogin">
                    Login
                  </Link>
                </p>
                {registrationSuccess && (
                  <div className="alert alert-success mt-3" role="alert">
                    Registration successful!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerSignup;
