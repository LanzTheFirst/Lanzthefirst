import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <h2>What I Offer</h2>
      <p className="services-subtitle">
        Specialized React development to help you build fast, accessible, and high-converting web experiences.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h3>Starter Landing Page</h3>
          <span className="focus-area">Best for: Lead generation & personal brands</span>
          <ul>
            <li>1-page responsive landing page</li>
            <li>Modern React UI with smooth animations</li>
            <li>Mobile, tablet & desktop optimization</li>
            <li>Contact form & lead capture integration</li>
            <li>Basic SEO & Meta tag setup</li>
            <li>Deployment & hosting configuration</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Standard Website</h3>
          <span className="focus-area">Best for: Small businesses & portfolios</span>
          <ul>
            <li>3–5 page structured website</li>
            <li>Consistent brand-focused design</li>
            <li>Optimized navigation & user flow</li>
            <li>Integration with CMS or Markdown for content</li>
            <li>Performance-tuned React components</li>
          </ul>
        </div>

        <div className="service-card featured">
          <span className="badge">Most Requested</span>
          <h3>Professional Web Applications</h3>
          <span className="focus-area">Best for: Scaling startups & SaaS</span>
          <ul>
            <li>Full multi-page architecture</li>
            <li>Advanced UI interactions (Framer Motion)</li>
            <li>State management (Redux/Zustand)</li>
            <li>API integration & data fetching</li>
            <li>Authentication & protected routes</li>
            <li>Comprehensive performance optimization</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>E-commerce Solutions</h3>
          <span className="focus-area">Best for: Modern storefronts</span>
          <ul>
            <li>Product listing & dynamic detail pages</li>
            <li>Secure shopping cart functionality</li>
            <li>Payment gateway integration (Stripe/Paystack)</li>
            <li>Automated email order notifications</li>
            <li>Inventory management via headless CMS</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>UI/UX Refinement</h3>
          <span className="focus-area">Best for: Existing React projects</span>
          <ul>
            <li>Modernizing outdated interfaces</li>
            <li>Improving Core Web Vitals (Speed)</li>
            <li>Accessibility (A11y) audits & fixes</li>
            <li>Converting Figma designs to clean React code</li>
            <li>Component library development</li>
          </ul>
        </div>
      </div>

      <p className="contact-note">
        Have a specific project in mind? <a href="#contact">Let’s hop on a call</a> to discuss your requirements.
      </p>
    </section>
  );
}