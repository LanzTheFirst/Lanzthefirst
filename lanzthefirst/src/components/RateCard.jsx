import "./RateCard.css";

export default function RateCard() {
  return (
    <section id="rates" className="rate-section">
      <h2>Rate Card</h2>
      <p className="rate-subtitle">
        Clear pricing for frontend-focused React projects.
      </p>

      <div className="rate-grid">
        <div className="rate-card">
          <h3>Starter Landing Page</h3>
          <span className="best-for">Best for: single offers & personal brands</span>

          <ul>
            <li>1-page responsive landing page</li>
            <li>Modern React UI</li>
            <li>Mobile, tablet & desktop optimized</li>
            <li>Contact form integration</li>
            <li>Basic SEO setup</li>
            <li>Deployment included</li>
          </ul>

          <p className="timeline">Timeline: 3–5 days</p>
          <p className="price">Starting at $300</p>
        </div>

        <div className="rate-card">
          <h3>Standard Website</h3>
          <span className="best-for">Best for: small businesses & portfolios</span>

          <ul>
            <li>3–5 page website</li>
            <li>Consistent design across pages</li>
            <li>Smooth navigation & interactions</li>
            <li>Contact form integration</li>
            <li>Deployment included</li>
          </ul>

          <p className="timeline">Timeline: 1–2 weeks</p>
          <p className="price">Starting at $500</p>
        </div>

        <div className="rate-card popular">
          <span className="badge">Most Popular</span>
          <h3>Professional Multi-Page Website</h3>
          <span className="best-for">Best for: growing companies</span>

          <ul>
            <li>6–10 pages</li>
            <li>Reusable React components</li>
            <li>Advanced UI interactions</li>
            <li>Blog or content sections</li>
            <li>Light backend (forms, auth, APIs)</li>
            <li>Performance optimization</li>
          </ul>

          <p className="timeline">Timeline: 2–3 weeks</p>
          <p className="price">Starting at $1,000</p>
        </div>

        <div className="rate-card">
          <h3>E-commerce (Frontend-First)</h3>
          <span className="best-for">
            Best for: stores that don’t need complex backend logic
          </span>

          <ul>
            <li>Product listing & detail pages</li>
            <li>Shopping cart</li>
            <li>Payment integration (Stripe, Paystack, Flutterwave)</li>
            <li>Order confirmation & email notifications</li>
            <li>Admin handled via third-party tools</li>
            <li>No heavy custom backend</li>
          </ul>

          <p className="timeline">Timeline: 2–4 weeks</p>
          <p className="price">Starting at $2,000</p>
        </div>

        <div className="rate-card">
          <h3>Custom React Project</h3>
          <span className="best-for">
            Best for: ideas that don’t fit into the standard packages
          </span>

          <ul>
            <li>Custom React website or web app</li>
            <li>Features tailored to your specific idea</li>
            <li>Integration with third-party tools or APIs</li>
            <li>Simple backend or form handling if needed</li>
            <li>Clear scope agreed before development starts</li>
          </ul>

          <p className="timeline">Timeline: based on project scope</p>
          <p className="price">Custom Quote</p>
        </div>


      </div>

      <p className="custom-note">
        Don’t see what you need? <a href="#contact">Contact me</a> and let’s discuss your project.
      </p>
    </section>
  );
}
