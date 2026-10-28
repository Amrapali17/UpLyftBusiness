import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });

  async function handleContactSubmit(e) {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const values = new FormData(form);
    const payload = {
      name: String(values.get("name") || "").trim(),
      phone: String(values.get("phone") || "").trim(),
      email: String(values.get("email") || "").trim(),
      company: String(values.get("company") || "").trim(),
      service: "",
      message: String(values.get("message") || "").trim(),
    };

    setSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      const apiBase = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        throw new Error(result.message || "We couldn't send your message. Please try again.");
      }

      form.reset();
      setFormStatus({
        type: "success",
        message: "Thank you for connecting with UpLyftBusiness! We've received your message and will get back to you soon.",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: error.message || "Unable to send your message. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="contact-page">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="contact-hero">
          <div className="contact-grid-bg"></div>

          <div className="contact-container">
            <div className="contact-top">
              <Link to="/" className="contact-brand">
                <img
                  src={logo}
                  alt="UpLyftBusiness"
                  className="contact-brand-logo"
                />
              </Link>

              <div className="contact-label">
                <span></span>
                CONTACT
              </div>

              <div className="contact-index">LET'S CONNECT</div>
            </div>

            <div className="contact-hero-main">
              <div>
                <h1>
                  Let's start
                  <br />
                  <span>something.</span>
                </h1>
              </div>

              <div className="contact-hero-side">
                <p>
                  Have a project, an idea or simply a business challenge you
                  want to discuss? We'd love to hear about it.
                </p>

                <a
                  href="tel:+918408820707"
                  className="contact-email-link"
                >
                  +91 84088 20707
                  <Phone size={17} />
                </a>
                <a
                  href="mailto:connect@uplyftbusiness.com"
                  className="contact-email-link"
                >
                  connect@uplyftbusiness.com
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT AREA */}
        <section className="contact-main">
          <div className="contact-container">
            <div className="contact-layout">
              {/* LEFT */}
              <div className="contact-info">
                <div className="contact-label dark-label">
                  <span></span>
                  GET IN TOUCH
                </div>

                <h2>
                  Tell us what
                  <br />
                  you're <span>building.</span>
                </h2>

                <p>
                  The more we understand about your business and goals, the
                  better we can help. Start with the basics and we'll take it
                  from there.
                </p>

                <div className="contact-details">
                  <a
                    href="tel:+918408820707"
                    className="contact-detail"
                  >
                    <div className="contact-detail-icon">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span>Call us</span>
                      <strong>+91 84088 20707</strong>
                    </div>
                    <ArrowUpRight size={17} />
                  </a>
                  <a
                    href="mailto:connect@uplyftbusiness.com"
                    className="contact-detail"
                  >
                    <div className="contact-detail-icon">
                      <Mail size={18} />
                    </div>

                    <div>
                      <span>Email</span>
                      <strong>connect@uplyftbusiness.com</strong>
                    </div>
                  </a>

                  <div className="contact-detail">
                    <div className="contact-detail-icon">
                      <MapPin size={18} />
                    </div>

                    <div>
                      <span>Based in</span>
                      <strong>India · Working Worldwide</strong>
                    </div>
                  </div>
                </div>

                {/* SOCIAL LINKS */}
                <div className="contact-socials">
                  <span>FOLLOW</span>

                  {/* LINKEDIN */}
                  <a
                    href="https://www.linkedin.com/company/uplyftbusiness"
                    aria-label="LinkedIn"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.01 2.01 0 0 0 3.24 5c0 1.1.9 2 2.01 2a2 2 0 1 0 0-4ZM20.76 13.41c0-3.47-1.85-5.09-4.32-5.09-1.98 0-2.87 1.09-3.36 1.86V8.5H9.7V20h3.38v-5.69c0-1.5.29-2.95 2.14-2.95 1.82 0 1.85 1.71 1.85 3.04V20h3.38l.31-6.59Z" />
                    </svg>
                  </a>

                  {/* INSTAGRAM */}
                  <a
                    href="https://www.instagram.com/uplyftbusiness/"
                    className="social-icon"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="5"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="17.5"
                        cy="6.5"
                        r="1"
                        fill="currentColor"
                      />
                    </svg>
                  </a>

                  {/* WHATSAPP */}
                  <a
                    href="https://wa.me/918408820707"
                    className="social-icon whatsapp-icon"
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.53 0 .18 5.35.18 11.92c0 2.1.55 4.15 1.6 5.96L.08 24l6.27-1.64a11.9 11.9 0 0 0 5.75 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.51-8.43ZM12.1 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.97.99-3.63-.24-.37a9.85 9.85 0 0 1-1.52-5.26c0-5.46 4.45-9.91 9.92-9.91 2.64 0 5.13 1.03 7 2.9a9.85 9.85 0 0 1 2.91 7.01c0 5.46-4.45 9.91-9.93 9.91Zm5.44-7.42c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.23-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.23 5.14 4.53.72.31 1.28.5 1.71.64.72.23 1.37.2 1.88.12.58-.09 1.77-.73 2.02-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* PROJECT ENQUIRY FORM */}
              <div className="contact-form-wrapper">
                <div className="form-heading">
                  <span>01</span>
                  <p>PROJECT ENQUIRY</p>
                </div>

                <form className="contact-form" onSubmit={handleContactSubmit}>
                  {formStatus.message && (
                    <p
                      role="status"
                      aria-live="polite"
                      style={{
                        margin: "0 0 20px",
                        color: formStatus.type === "success" ? "#16803c" : "#c62828",
                        fontSize: "13px",
                        lineHeight: 1.6,
                      }}
                    >
                      {formStatus.message}
                    </p>
                  )}
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="name">Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="phone">Phone number *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter 10-digit mobile number"
                        autoComplete="tel-national"
                        inputMode="numeric"
                        pattern="[6-9][0-9]{9}"
                        maxLength={10}
                        minLength={10}
                        title="Enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9."
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value
                            .replace(/\D/g, "")
                            .slice(0, 10);
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      autoComplete="organization"
                    />
                  </div>

                  {/* ESTIMATED BUDGET FIELD REMOVED */}

                  <div className="form-field">
                    <label htmlFor="message">
                      Tell us about the project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="What are you looking to build, improve or achieve?"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="contact-submit" disabled={submitting}>
                    {submitting ? "Sending..." : "Send Enquiry"}
                    <ArrowUpRight size={18} />
                  </button>

                  <p className="form-note">
                    We'll review your enquiry and get back to you
                    with the next steps.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="contact-bottom">
          <div className="contact-container">
            <div className="contact-bottom-inner">
              <div>
                <div className="contact-label">
                  <span></span>
                  NOT READY YET?
                </div>

                <h2>
                  Explore what
                  <br />
                  <span>we do.</span>
                </h2>
              </div>

              <Link to="/services" className="contact-services-link">
                View our services
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .contact-page {
          background: #ffffff;
          color: #111418;
          min-height: 100vh;
          overflow: hidden;
        }

        .contact-container {
          width: min(1240px, calc(100% - 64px));
          margin: 0 auto;
        }

        .contact-label {
          display: flex;
          align-items: center;
          gap: 11px;
          color: #2f79a8;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .contact-label span {
          width: 26px;
          height: 1px;
          background: #69b2e6;
        }

        .dark-label {
          color: #5d6872;
        }

        /* HERO */

        .contact-hero {
          position: relative;
          padding: 125px 0 100px;
          background: #f7fbfe;
          overflow: hidden;
        }

        .contact-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              rgba(105, 178, 230, 0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(105, 178, 230, 0.045) 1px,
              transparent 1px
            );
          background-size: 80px 80px;
          mask-image: linear-gradient(
            to bottom,
            black,
            transparent 90%
          );
        }

        .contact-hero::after {
          content: "";
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          right: -220px;
          top: -320px;
          background: rgba(105, 178, 230, 0.09);
          filter: blur(45px);
        }

        .contact-hero .contact-container {
          position: relative;
          z-index: 2;
        }

        .contact-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(17, 20, 24, 0.09);
        }

        .contact-brand {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .contact-brand-logo {
          display: block;
          width: 150px;
          max-height: 55px;
          object-fit: contain;
          object-position: left center;
        }

        .contact-index {
          color: #8a949d;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        .contact-hero-main {
          display: grid;
          grid-template-columns: 1.2fr 0.55fr;
          gap: 100px;
          align-items: end;
          padding-top: 95px;
        }

        .contact-hero h1 {
          margin: 0;
          font-size: clamp(70px, 9vw, 120px);
          line-height: 0.88;
          letter-spacing: -0.07em;
        }

        .contact-hero h1 span {
          color: #69b2e6;
        }

        .contact-hero-side {
          padding-bottom: 8px;
        }

        .contact-hero-side p {
          margin: 0;
          color: #5d6872;
          font-size: 16px;
          line-height: 1.8;
        }

        .contact-email-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-top: 27px;
          padding-bottom: 7px;
          border-bottom: 1px solid #111418;
          color: #111418;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition: 0.25s ease;
        }

        .contact-email-link:hover {
          color: #2f79a8;
          border-color: #2f79a8;
          gap: 13px;
        }

        /* MAIN */

        .contact-main {
          padding: 145px 0;
          background: #ffffff;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 0.7fr 1fr;
          gap: 130px;
          align-items: start;
        }

        .contact-info h2 {
          margin: 25px 0 28px;
          font-size: clamp(45px, 5vw, 68px);
          line-height: 0.97;
          letter-spacing: -0.055em;
        }

        .contact-info h2 span {
          color: #69b2e6;
        }

        .contact-info > p {
          max-width: 450px;
          margin: 0;
          color: #5d6872;
          font-size: 15px;
          line-height: 1.85;
        }

        .contact-details {
          margin-top: 55px;
          border-top: 1px solid rgba(17, 20, 24, 0.1);
        }

        .contact-detail {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 22px 0;
          border-bottom: 1px solid rgba(17, 20, 24, 0.1);
          text-decoration: none;
          color: inherit;
        }

        .contact-detail-icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #edf7fc;
          color: #2f79a8;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-detail div:last-child {
          display: flex;
          flex-direction: column;
          gap: 5px;
          min-width: 0;
        }

        .contact-detail span {
          color: #8a949d;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .contact-detail strong {
          font-size: 13px;
          font-weight: 600;
          overflow-wrap: anywhere;
        }

        /* SOCIALS */

        .contact-socials {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 30px;
        }

        .contact-socials > span {
          margin-right: 8px;
          color: #8a949d;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.14em;
        }

        .contact-socials a {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          border: 1px solid rgba(17, 20, 24, 0.1);
          border-radius: 50%;
          color: #5d6872;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .contact-socials a:hover {
          background: #111418;
          color: #ffffff;
          border-color: #111418;
          transform: translateY(-2px);
        }

        .contact-socials .whatsapp-icon:hover {
          background: #25d366;
          color: #ffffff;
          border-color: #25d366;
        }

        .social-icon svg {
          display: block;
        }

        /* FORM */

        .contact-form-wrapper {
          border-top: 1px solid rgba(17, 20, 24, 0.12);
          min-width: 0;
        }

        .form-heading {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 22px 0;
          border-bottom: 1px solid rgba(17, 20, 24, 0.1);
        }

        .form-heading span {
          color: #69b2e6;
          font-size: 11px;
          font-weight: 700;
        }

        .form-heading p {
          margin: 0;
          color: #5d6872;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        .contact-form {
          padding-top: 35px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          margin-bottom: 25px;
          min-width: 0;
        }

        .form-field label {
          margin-bottom: 9px;
          color: #111418;
          font-size: 11px;
          font-weight: 700;
        }

        .form-field input,
        .form-field select,
        .form-field textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(17, 20, 24, 0.12);
          border-radius: 8px;
          background: #ffffff;
          color: #111418;
          padding: 14px 15px;
          outline: none;
          font-family: inherit;
          font-size: 13px;
          transition: 0.2s ease;
        }

        .form-field input::placeholder,
        .form-field textarea::placeholder {
          color: #a0a8ae;
        }

        .form-field textarea {
          resize: vertical;
          min-height: 145px;
        }

        .form-field input:focus,
        .form-field select:focus,
        .form-field textarea:focus {
          border-color: #69b2e6;
          box-shadow: 0 0 0 3px rgba(105, 178, 230, 0.1);
        }

        .contact-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 22px;
          border: none;
          border-radius: 999px;
          background: #111418;
          color: #ffffff;
          cursor: pointer;
          font-family: inherit;
          font-size: 13px;
          font-weight: 700;
          transition: 0.25s ease;
        }

        .contact-submit:hover:not(:disabled) {
          background: #2f79a8;
          transform: translateY(-2px);
        }

        .contact-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .form-note {
          margin: 15px 0 0;
          color: #8a949d;
          font-size: 10px;
          line-height: 1.6;
        }

        /* BOTTOM CTA */

        .contact-bottom {
          padding: 115px 0;
          background: #e4f3fb;
        }

        .contact-bottom-inner {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 60px;
        }

        .contact-bottom h2 {
          margin: 25px 0 0;
          font-size: clamp(48px, 6vw, 78px);
          line-height: 0.92;
          letter-spacing: -0.06em;
        }

        .contact-bottom h2 span {
          color: #69b2e6;
        }

        .contact-services-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #111418;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          padding-bottom: 8px;
          border-bottom: 1px solid #111418;
          transition: 0.25s ease;
        }

        .contact-services-link:hover {
          color: #2f79a8;
          border-color: #2f79a8;
          gap: 14px;
        }

        /* DARK MODE */

        body.dark-mode .contact-page {
          background: #080d12 !important;
          color: #f4f7fa !important;
        }

        body.dark-mode .contact-page .contact-hero,
        body.dark-mode .contact-page .contact-main,
        body.dark-mode .contact-page .contact-bottom {
          background: #080d12 !important;
          color: #f4f7fa !important;
        }

        body.dark-mode .contact-page h1,
        body.dark-mode .contact-page h2,
        body.dark-mode .contact-page h3,
        body.dark-mode .contact-page label {
          color: #f4f7fa !important;
        }

        body.dark-mode .contact-page p {
          color: #aeb9c5 !important;
        }

        body.dark-mode .contact-page input,
        body.dark-mode .contact-page textarea,
        body.dark-mode .contact-page select {
          background: #101820 !important;
          color: #f4f7fa !important;
          border-color: rgba(255, 255, 255, 0.16) !important;
        }

        body.dark-mode .contact-page input::placeholder,
        body.dark-mode .contact-page textarea::placeholder {
          color: #8a99a6 !important;
        }

        body.dark-mode .contact-page .contact-detail,
        body.dark-mode .contact-page .contact-form-wrapper,
        body.dark-mode .contact-page .contact-top,
        body.dark-mode .contact-page .form-heading {
          border-color: rgba(255, 255, 255, 0.12);
        }

        body.dark-mode .contact-page .contact-email-link,
        body.dark-mode .contact-page .contact-services-link {
          color: #f4f7fa;
          border-color: #f4f7fa;
        }

        body.dark-mode .contact-page .contact-detail-icon {
          background: #142b3a;
          color: #8ecfff;
        }

        body.dark-mode .contact-page .contact-socials a {
          border-color: rgba(255, 255, 255, 0.18);
          color: #d4dde5;
        }

        body.dark-mode .contact-page .contact-socials a:hover {
          background: #f4f7fa;
          color: #080d12;
        }

        body.dark-mode .contact-page .contact-socials .whatsapp-icon:hover {
          background: #25d366;
          color: #ffffff;
          border-color: #25d366;
        }

        body.dark-mode .contact-page .contact-submit {
          background: #f4f7fa;
          color: #080d12;
        }

        body.dark-mode .contact-page .contact-submit:hover {
          background: #69b2e6;
          color: #080d12;
        }

        /* RESPONSIVE */

        @media (max-width: 950px) {
          .contact-container {
            width: min(calc(100% - 40px), 1240px);
          }

          .contact-hero-main,
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .contact-main {
            padding: 110px 0;
          }

          .contact-layout {
            gap: 80px;
          }

          .contact-bottom-inner {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 650px) {
          .contact-container {
            width: calc(100% - 32px);
          }

          .contact-hero {
            padding-top: 90px;
          }

          .contact-top {
            flex-wrap: wrap;
            gap: 16px;
          }

          .contact-brand-logo {
            width: 110px;
            max-height: 42px;
          }

          .contact-hero-main {
            padding-top: 60px;
            gap: 40px;
          }

          .contact-hero h1 {
            font-size: clamp(46px, 12vw, 65px);
          }

          .contact-main,
          .contact-bottom {
            padding: 90px 0;
          }

          .contact-info h2,
          .contact-bottom h2 {
            font-size: 45px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .contact-socials {
            flex-wrap: wrap;
          }

          .contact-email-link {
            overflow-wrap: anywhere;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;