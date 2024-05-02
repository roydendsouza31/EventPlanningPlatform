import React, { useState } from "react";
import "./App.css";
import Signup from "./components/signup/signup";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import SellerSignup from "./components/sellerRegistration/sellerSignup";
import SellerLogin from "./components/sellerLogin/sellerLogin";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landingpage from "./components/landingpage/landingpage";
import ServiceProvidersPage from "./components/homepage/ServiceProvidersPage";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route
            exact
            path="/Homepage"
            element={authenticated ? <Homepage /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sellersignup" element={<SellerSignup />} />
          <Route
            path="/serviceproviders/:serviceType"
            element={<ServiceProvidersPage />}
          />
          <Route
            path="/sellerlogin"
            element={<SellerLogin onLogin={handleLogin} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
