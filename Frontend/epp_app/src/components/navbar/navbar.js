import logo from "./logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header mt-4">
      <img src={logo} height={100} alt="Logo" className="logo mx-5" />
      <nav className="nav-links">
        <Link to="/" className="btn btn-outline-primary me-2">
          Home
        </Link>
        <Link to="/aboutpage" className="btn btn-outline-primary me-2">
          About Us
        </Link>
        <Link to="/customersignup" className="btn btn-outline-primary me-2">
          Sign up
        </Link>
        <Link to="/customerlogin" className="btn btn-outline-primary me-2">
          Log in
        </Link>
        <Link
          to="/sellersignup"
          className="btn btn-outline-primary me-2 text-nowrap"
        >
          Join as Seller
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
