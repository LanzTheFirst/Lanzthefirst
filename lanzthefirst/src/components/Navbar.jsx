import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="nav-logo">LanzTheFirst</div>

        <ul className="nav-links">
          <li><a href="#header">Home</a></li>
          <li><a href="#portfolio">Work</a></li>
          <li><a href="#rates">Rates</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
