import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS ERROR:", error);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <h2>Let’s Start Your Project</h2>
        <p className="contact-intro">
          Ready to grow your online presence? Fill out the form below and I’ll
          get back to you within 24 hours.
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>

          <select name="service" required defaultValue="">
            <option value="" disabled>
              What do you need help with?
            </option>
            <option value="Single Page">Single-Page Website</option>
            <option value="Business Site">Multi-Page Business Site</option>
            <option value="Web Platform">Advanced Web Platform</option>
            <option value="Ecommerce">Online Store (E-commerce)</option>
            <option value="Refresh">Website Refresh & Fixes</option>
            <option value="Not specified">Something Else</option>
          </select>

          <textarea
            name="message"
            placeholder="Tell me a bit about your goals..."
            rows="5"
            required
          />

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          <div aria-live="polite" className="status-container">
            {status === "success" && (
              <p className="form-success">
                Message sent! I’ll be in touch soon 🚀
              </p>
            )}
            {status === "error" && (
              <p className="form-error">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>

        {/* BOOK A CALL */}
        <div className="call-section">
          <h3>Prefer a quicker conversation?</h3>
          <p>
            Book a free 30-minute call and let’s map out your project together.
          </p>

          <a
            href="https://calendly.com/lanzthefirst/30min"
            target="_blank"
            rel="noreferrer"
            className="call-btn"
          >
            Book a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}
