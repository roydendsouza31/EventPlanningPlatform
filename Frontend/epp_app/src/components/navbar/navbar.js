import "./navbar.css";
import logo from "./logo.png"; // Adjust the path to match the actual location
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
    <img src={logo} height={70} alt="Logo" className="logo" />
    <nav className="nav-links">
      <Link to="/" className="btn">Home</Link>
      <Link to="/about" className="btn">About Us</Link>
      <Link to="/signup" className="btn">Sign up</Link>
      <Link to="/login" className="btn">Log in</Link>
      <Link to="/sellersignup" className="btn">Join as Seller</Link>
    </nav>
  </header>

   
  );
};

export default Navbar;
