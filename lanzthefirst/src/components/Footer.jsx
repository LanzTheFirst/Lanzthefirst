import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <h3 className="footer-logo">LanzTheFirst</h3>

        <p className="footer-bio">
          I help small businesses and creators build fast, professional websites 
          that turn visitors into customers. 
        </p>

        <nav className="footer-links" aria-label="Footer Navigation">
          <a href="#header">Home</a>
          <a href="#portfolio">My Work</a>
          <a href="#services">Services</a> {/* Updated from Rates */}
          <a href="#contact">Get In Touch</a>
        </nav>

        <div className="footer-socials">
          <a href="https://www.threads.com/@lanzthefirst" target="_blank" rel="noreferrer">Threads</a>
          <a href="https://x.com/Lanz_xyz_" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://calendly.com/lanzthefirst/30min" target="_blank" rel="noreferrer">Calendly</a>
        </div>

        <div className="footer-bottom">
          <span className="copyright">
            © {new Date().getFullYear()} LanzTheFirst. All rights reserved.
          </span>
          <p className="footer-status">Available for new projects</p>
        </div>
      </div>
    </footer>
  );
}