import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import { useNavigate } from "react-router-dom";

const SellerSignup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    surname: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyname: "",
    companyemail: "",
    officephone: "",
    typeofservice: "",
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
    const {
      name,
      surname,
      email,
      password,
      confirmPassword,
      address,
      phone,
      typeofservice,
      companyname,
      companyemail,
      officephone,
    } = user;
    if (
      !name.trim() ||
      !surname.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim() ||
      !address.trim() ||
      !phone.trim() ||
      !typeofservice.trim() ||
      !companyname.trim() ||
      !companyemail.trim() ||
      !officephone.trim()
    ) {
      alert("Please fill out all fields");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address");
    } else {
      axios
        .post("http://localhost:3001/sellersignup", user)
        .then((res) => {
          if (res.status === 201) {
            setRegistrationSuccess(true);
            setTimeout(() => {
              navigate("/sellerlogin");
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
          <div className="col-md-8">
            <div className="signup_seller card">
              <div className="card-body">
                <form onSubmit={register}>
                  <h2 className="mb-4">Seller Details</h2>
                  <div className="row mb-3">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="name"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="surname"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      name="address"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <h2 className="mb-4">Company Details</h2>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                      name="companyname"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Company Email"
                      name="companyemail"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Office Phone Number"
                      name="officephone"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-select"
                      name="typeofservice"
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Service</option>
                      <option value="venue">Venue</option>
                      <option value="decorator">Decorator</option>
                      <option value="catering">Catering</option>
                      <option value="photographer_videographer">
                        Photographer/Videographer
                      </option>
                      <option value="music">Music</option>
                      <option value="makeup_hairstylish">
                        Makeup/Hairstylist
                      </option>
                      <option value="emcee">Emcee</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    style={{ width: "100%" }}
                    className="btn btn-primary"
                  >
                    Signup
                  </button>
                </form>
                <p className="mt-3">
                  Already a seller?{" "}
                  <Link style={{ textDecoration: "none" }} to="/sellerlogin">
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

export default SellerSignup;
