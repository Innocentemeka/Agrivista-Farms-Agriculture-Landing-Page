import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showMenuOpen, setShowMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="header">
        <h1>Agrivista Farms</h1>
      </div>

      <div className="menu" onClick={() => setShowMenuOpen(!showMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={showMenuOpen ? "navMenu" : ""}>
        <li>
          <Link onClick={() => setShowMenuOpen(false)}>Home</Link>
        </li>

        <li>
          <Link onClick={() => setShowMenuOpen(false)}>About Us</Link>
        </li>

        <li>
          <Link onClick={() => setShowMenuOpen(false)}>Pages</Link>
        </li>
      </ul>
      <div className="button-wrapper">
        <button className="login-btn">Login</button>
        <button className="sign-up-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
