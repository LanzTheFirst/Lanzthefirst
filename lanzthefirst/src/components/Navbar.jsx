import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="nav-logo">LanzTheFirst</div>

        {/* Hamburger Icon for Mobile */}
        <button className={`menu-toggle ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu} aria-label="Toggle Navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><a href="#header" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)}>My Work</a></li>
          <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          
          {/* A dedicated button in the nav helps conversion */}
          <li className="nav-cta">
            <a href="https://calendly.com/lanzthefirst/30min" target="_blank" rel="noreferrer" className="nav-btn">
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}