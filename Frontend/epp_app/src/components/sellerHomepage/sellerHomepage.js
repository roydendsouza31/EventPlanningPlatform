import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import { useLocation } from "react-router-dom";

const SellerHomepage = () => {
  const location = useLocation();
  const { email } = location.state;
  const navigate = useNavigate();

  const handleDiplayProducts = async () => {
    try {
      await axios.post("http://localhost:3001/api/getproducts", { email });
      // populate the cards with the products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3001/profile/logout");
      sessionStorage.clear();
      navigate("/sellerlogin");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const addProduct = async (e) => {
    e.preventDefault();
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;

    console.log(productName, productPrice);

    const data = { name: productName, price: productPrice, selleremail: email };
    console.log(data);

    try {
      await axios
        .post("http://localhost:3001/api/addproduct", data)
        .then((res) => {
          console.log(res);
        });
      alert("Product added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div className="seller-homepage">
      <header className="header">
        <img src={logo} height={100} alt="Logo" className="logo mx-5" />
        <nav className="nav-links">
          <a href="/customerhomepage">Cart</a>
          <a href="/customerhomepage">Orders</a>
          <a href="/customerhomepage">Profile</a>
          <a href="/customerhomepage" onClick={handleLogout}>
            Logout
          </a>
        </nav>
      </header>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="text-center mb-5">Welcome Seller</h1>
            <form onSubmit={addProduct}>
              <h2>Add a new product</h2>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  name="productName"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productPrice" className="form-label">
                  Product Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productPrice"
                  name="productPrice"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Product
              </button>
            </form>
          </div>
        </div>
        <div>
          <h2>Your products</h2>
          {/* Displaying all products that this particular user has in the products table in the form of cards when clicking on the display products button */}
          <button className="btn btn-primary" onClick={handleDiplayProducts}>
            Display all producs
          </button>
          {/* div containing cards which are populated by the  handleDiplayProducts function */}
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Product Name</h5>
                  <p className="card-text">Product Price</p>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerHomepage;
