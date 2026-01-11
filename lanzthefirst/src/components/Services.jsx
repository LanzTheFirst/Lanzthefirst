import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <h2>What I Can Build For You</h2>
      <p className="services-subtitle">
        Clean, modern websites built to look great, load fast, and help you get real results online.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h3>Starter Landing Page</h3>
          <span className="focus-area">Best for: Personal brands, startups & lead capture</span>
          <ul>
            <li>Single-page, fully responsive website</li>
            <li>Modern, clean design that works on all devices</li>
            <li>Clear layout focused on conversions</li>
            <li>Contact form or lead capture setup</li>
            <li>Basic search engine setup (Google-friendly)</li>
            <li>Website deployment & setup</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Standard Business Website</h3>
          <span className="focus-area">Best for: Small businesses & portfolios</span>
          <ul>
            <li>3–5 page website (Home, About, Services, Contact)</li>
            <li>Consistent branding and professional layout</li>
            <li>Easy-to-navigate structure</li>
            <li>Fast loading performance</li>
            <li>Simple content management options</li>
          </ul>
        </div>

        <div className="service-card featured">
          <span className="badge">Most Popular</span>
          <h3>Advanced Website / Web App</h3>
          <span className="focus-area">Best for: Growing startups & platforms</span>
          <ul>
            <li>Multi-page or dashboard-style website</li>
            <li>Interactive features and smooth user experience</li>
            <li>Login systems and user accounts</li>
            <li>Connection to external tools or APIs</li>
            <li>Optimized for speed, scale, and reliability</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Simple E-commerce Website</h3>
          <span className="focus-area">Best for: Online stores without complex systems</span>
          <ul>
            <li>Product listing and product pages</li>
            <li>Shopping cart functionality</li>
            <li>Secure payment integration (Stripe, Paystack, etc.)</li>
            <li>Order confirmation and email notifications</li>
            <li>Store management handled via third-party tools</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Website Improvements & Redesign</h3>
          <span className="focus-area">Best for: Existing websites that need polishing</span>
          <ul>
            <li>Refreshing outdated designs</li>
            <li>Improving website speed and usability</li>
            <li>Fixing layout or mobile issues</li>
            <li>Turning designs into functional pages</li>
            <li>Cleaning up and organizing code</li>
          </ul>
        </div>
      </div>

      <p className="contact-note">
        Not sure which option fits your needs?{" "}
        <a href="#contact">Let’s talk</a> and figure it out together.
      </p>
    </section>
  );
}
