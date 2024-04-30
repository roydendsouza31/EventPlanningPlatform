import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SellerProfilePage from "./seller/SellerProfilePage";
import CustomerView from "./customer/CustomerView";
import CustomerProfilePage from "./customer/CustomerProfilePage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/SellerProfilePage" />} />
        <Route path="/SellerProfilePage" element={<SellerProfilePage />} />
        <Route path="/CustomerView" element={<CustomerView />} />
        <Route path="/CustomerProfilePage" element={<CustomerProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
