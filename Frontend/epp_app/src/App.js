import React, { useState } from "react";
import "./App.css";
import CustomerSignup from "./components/customerSignup/customerSignup";
import CustomerHomepage from "./components/customerHomepage/customerHomepage";
import SellerHomepage from "./components/sellerHomepage/sellerHomepage";
import Login from "./components/customerLogin/customerLogin";
import SellerSignup from "./components/sellerSignup/sellerSignup";
import SellerLogin from "./components/sellerLogin/sellerLogin";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landingpage from "./components/landingpage/landingpage";
import ServiceProvidersPage from "./components/customerHomepage/ServiceProvidersPage";

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
          <Route path="/customersignup" element={<CustomerSignup />} />
          <Route path="/sellersignup" element={<SellerSignup />} />
          <Route
            path="/customerlogin"
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            path="/sellerlogin"
            element={<SellerLogin onLogin={handleLogin} />}
          />
          <Route
            exact
            path="/customerhomepage"
            element={
              authenticated ? (
                <CustomerHomepage />
              ) : (
                <Navigate to="/customerlogin" />
              )
            }
          />
          <Route
            exact
            path="/sellerhomepage"
            element={
              authenticated ? (
                <SellerHomepage />
              ) : (
                <Navigate to="/sellerlogin" />
              )
            }
          />
          <Route
            path="/serviceproviders/:serviceType"
            element={<ServiceProvidersPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
