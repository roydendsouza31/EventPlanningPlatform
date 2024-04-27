import "./navbar.css";
import logo from "./logo.png"; // Adjust the path to match the actual location

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} height={70} alt="Logo" />
      </div>
    </div>
  );
};

export default Navbar;
