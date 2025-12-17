import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <h3>LanzTheFirst</h3>

        <p>
          React Developer building modern, responsive websites
          with clarity and performance in mind.
        </p>

        <div className="footer-links">
          <a href="#header">Home</a>
          <a href="#portfolio">Work</a>
          <a href="#rates">Rates</a>
          <a href="#contact">Contact</a>
        </div>

        <span className="copyright">
          © {new Date().getFullYear()} LanzTheFirst. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
