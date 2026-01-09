import lanzthefirst from "../assets/lanzthefirst.jpeg"
import "./Header.css";

export default function Header() {
  return (
    <header id="header" className="header">
      <div className="header-inner">
        <div className="intro-image">
          <div className="image-wrapper">
            <img
              src={lanzthefirst}
              alt="Olanrewaju - Website Developer"
              className="hero-image"
            />
            <div className="availability-badge">
              <span className="dot"></span> Available for projects
            </div>
          </div>
        </div>

        <div className="intro-content">
          <span className="brand-label">LanzTheFirst</span>

          <h1>
            I build websites that <span>turn your visitors</span> into customers.
          </h1>

          <p className="intro-text">
            Hi, I’m <strong>Olanrewaju</strong>. I help businesses and individuals 
            create professional online spaces that are fast, easy to use, and 
            look great on every screen.
          </p>

          <ul className="value-list">
            <li><span>🚀</span> Fast & smooth to keep people on your page</li>
            <li><span>📱</span> Works perfectly on every mobile phone</li>
            <li><span>🎨</span> Modern design that fits your brand</li>
            <li><span>✅</span> Simple, clear, and easy to navigate</li>
          </ul>

          <div className="header-actions">
            <a
              href="https://calendly.com/lanzthefirst/30min"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              Start Your Project
            </a>

            <a href="#portfolio" className="secondary-btn">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}