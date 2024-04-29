import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SellerProfilePage from "./seller/SellerProfilePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/SellerProfilePage" />} />
        <Route path="/SellerProfilePage" element={<SellerProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
