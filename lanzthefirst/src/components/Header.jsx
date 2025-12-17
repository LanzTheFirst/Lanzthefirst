import lanzthefirst from "../assets/lanzthefirst.jpeg"
import "./Header.css";

export default function Header() {
  return (
    <header id="header" className="header">
      <div className="header-inner">
        <div className="intro-image">
          <img
            src={lanzthefirst}
            alt="LanzTheFirst"
            className="hero-image"
          />
        </div>

        <div className="intro-content">
          <span className="brand">LanzTheFirst</span>

          <h1>
            Hi, I’m <span>Olanrewaju</span> 👋 <br />
            I build modern React websites that actually work.
          </h1>

          <p className="intro-text">
            I’m a React Developer focused on building fast, responsive,
            and visually clean websites that feel smooth and professional
            on every device.
          </p>

          <ul className="value-list">
            <li>⚡ Fast-loading & performance-focused</li>
            <li>📱 Fully responsive across devices</li>
            <li>✨ Clean UI with smooth interactions</li>
            <li>🎯 Built to convert visitors into action</li>
          </ul>

          <p className="closing-text">
            From landing pages to full web apps, every project is built
            intentionally - no templates, no shortcuts.
          </p>

          <div className="header-actions">
            <a
              href="https://calendly.com/oluwaseyiifelowo/30min"
              target="_blank"
              className="primary-btn"
            >
              Book a Call
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
