import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="contact-page">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="contact-hero">
          <div className="contact-grid-bg"></div>

          <div className="contact-container">
            <div className="contact-top">
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

                  <a
                    href="https://www.linkedin.com/company/uplyftbusiness"
                    aria-label="LinkedIn"
                    className="social-icon"
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
                  <a
                    href="https://www.instagram.com/uplyftbusiness/"
                    className="social-icon"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ position: "relative", zIndex: 9999, cursor: "pointer" }}
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
                </div>
              </div>

              {/* FORM */}
              <div className="contact-form-wrapper">
                <div className="form-heading">
                  <span>01</span>
                  <p>PROJECT ENQUIRY</p>
                </div>

                <form
                  className="contact-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(
                      "Thank you! Your enquiry has been received."
                    );
                  }}
                >
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="name">Name *</label>

                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="email">Email *</label>

                      <input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="company">Company</label>

                      <input
                        id="company"
                        type="text"
                        placeholder="Company name"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="service">
                        What do you need?
                      </label>

                      <select id="service" defaultValue="">
                        <option value="" disabled>
                          Select a service
                        </option>

                        <option value="website">
                          Website Development
                        </option>

                        <option value="marketing">
                          Digital Marketing
                        </option>

                        <option value="social">
                          Social Media Management
                        </option>

                        <option value="advertising">
                          Performance Advertising
                        </option>

                        <option value="branding">
                          Creative & Branding
                        </option>

                        <option value="strategy">
                          Growth & Strategy
                        </option>

                        <option value="other">
                          Something else
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="budget">
                      Estimated budget
                    </label>

                    <select id="budget" defaultValue="">
                      <option value="" disabled>
                        Select a range
                      </option>

                      <option value="under-50k">
                        Under ₹50,000
                      </option>

                      <option value="50k-1l">
                        ₹50,000 – ₹1,00,000
                      </option>

                      <option value="1l-3l">
                        ₹1,00,000 – ₹3,00,000
                      </option>

                      <option value="3l-plus">
                        ₹3,00,000+
                      </option>

                      <option value="not-sure">
                        Not sure yet
                      </option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="message">
                      Tell us about the project *
                    </label>

                    <textarea
                      id="message"
                      rows="6"
                      placeholder="What are you looking to build, improve or achieve?"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="contact-submit"
                  >
                    Send Enquiry
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

              <Link
                to="/services"
                className="contact-services-link"
              >
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
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(17, 20, 24, 0.09);
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
          width: 32px;
          height: 32px;
          border: 1px solid rgba(17, 20, 24, 0.1);
          border-radius: 50%;
          color: #5d6872;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.25s ease;
        }

        .contact-socials a:hover {
          background: #111418;
          color: #ffffff;
          border-color: #111418;
        }

        .social-icon svg {
          display: block;
        }

        /* FORM */

        .contact-form-wrapper {
          border-top: 1px solid rgba(17, 20, 24, 0.12);
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

        .contact-submit:hover {
          background: #2f79a8;
          transform: translateY(-2px);
        }

        .form-note {
          margin: 15px 0 0;
          color: #8a949d;
          font-size: 10px;
          line-height: 1.6;
        }

        /* BOTTOM */

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

        /* RESPONSIVE */

        @media (max-width: 950px) {
          .contact-container {
            width: min(100% - 40px, 1240px);
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

          .contact-hero-main {
            padding-top: 60px;
          }

          .contact-hero h1 {
            font-size: 55px;
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
        }
      `}</style>
    </div>
  );
}

export default Contact;