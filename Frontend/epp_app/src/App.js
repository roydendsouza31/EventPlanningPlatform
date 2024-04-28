import React, { useState } from "react";
import "./App.css";
import Signup from "./components/signup/signup";
import Navbar from "./components/navbar/navbar";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import SellerSignup from "./components/sellerRegistration/sellerSignup";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  return (
    <div className="App">
      <Navbar />
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={authenticated ? <Homepage /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter> */}

      <SellerSignup/>
    </div>
  );
}

export default App;
