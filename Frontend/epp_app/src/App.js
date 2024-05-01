import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Testimonials from "./Components/Testimonails";
import AboutUs from "./Components/AboutUS";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;