import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Enquire() {
  const services = [
    "Website Development",
    "Digital Marketing",
    "Social Media Management",
    "Performance Advertising",
    "Creative & Branding",
    "Growth & Strategy",
    "Not Sure Yet",
  ];

  const budgets = [
    "Under ₹25,000",
    "₹25,000 – ₹50,000",
    "₹50,000 – ₹1,00,000",
    "₹1,00,000+",
    "Not Sure Yet",
  ];

  return (
    <div className="enquire-page">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="enquire-hero">
          <div className="hero-glow hero-glow-one"></div>
          <div className="hero-glow hero-glow-two"></div>

          <div className="enquire-container">
            <Link to="/" className="back-link">
              <ArrowLeft size={16} />
              Back to home
            </Link>

            <div className="hero-content">
              <div className="hero-label">
                <span></span>
                START A CONVERSATION
              </div>

              <h1>
                Let's build something
                <span> worth moving forward.</span>
              </h1>

              <p>
                Tell us about your business, idea or next digital move.
                We'll understand your goals and figure out the right way
                forward together.
              </p>
            </div>
          </div>
        </section>

        {/* FORM SECTION */}
        <section className="enquire-section">
          <div className="enquire-container enquire-layout">

            {/* LEFT */}
            <div className="enquire-info">
              <div className="section-label">YOUR NEXT MOVE</div>

              <h2>
                Tell us what
                <br />
                you're building.
              </h2>

              <p className="info-description">
                Whether you're starting from scratch, improving an existing
                business or looking for a long-term digital partner, we'd
                love to hear what you're working on.
              </p>

              <div className="info-points">
                <div className="info-point">
                  <div className="point-icon">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <strong>Understand your goals</strong>
                    <p>We start by understanding what your business actually needs.</p>
                  </div>
                </div>

                <div className="info-point">
                  <div className="point-icon">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <strong>Recommend the right solution</strong>
                    <p>No unnecessary services. Just what makes sense for your growth.</p>
                  </div>
                </div>

                <div className="info-point">
                  <div className="point-icon">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <strong>Plan the next step</strong>
                    <p>Turn your idea into a clear and actionable digital plan.</p>
                  </div>
                </div>
              </div>

              <div className="mini-card">
                <div className="mini-icon">
                  <Sparkles size={18} />
                </div>

                <div>
                  <span>NOT SURE WHAT YOU NEED?</span>
                  <p>
                    That's completely fine. Tell us about your business and
                    we'll help you figure it out.
                  </p>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="form-card">
              <div className="form-header">
                <span>01 — PROJECT DETAILS</span>
                <p>Let's get to know your project.</p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your enquiry has been received.");
                }}
              >
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Work Email *</label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Company / Business</label>
                    <input
                      type="text"
                      placeholder="Your business name"
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>What can we help you with? *</label>

                  <select required defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Estimated Budget</label>

                  <select defaultValue="">
                    <option value="" disabled>
                      Select your budget
                    </option>

                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Tell us about your project *</label>

                  <textarea
                    rows="6"
                    placeholder="What are you looking to build, improve or achieve?"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Send Enquiry
                  <ArrowUpRight size={18} />
                </button>

                <p className="form-note">
                  By submitting this form, you agree to be contacted regarding
                  your enquiry.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* DIRECT CONTACT */}
        <section className="direct-section">
          <div className="enquire-container">
            <div className="direct-inner">
              <div>
                <span className="direct-label">PREFER A DIRECT CONVERSATION?</span>
                <h3>Let's talk about your next move.</h3>
              </div>

              <Link to="/contact" className="direct-button">
                Contact VELQOR
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="enquire-cta">
          <div className="cta-glow"></div>

          <div className="enquire-container">
            <span className="section-label">VELQOR</span>

            <h2>
              Digital.
              <br />
              Creative.
              <br />
              Forward.
            </h2>

            <p>
              Building digital experiences and solutions designed to move
              businesses forward.
            </p>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .enquire-page {
          min-height: 100vh;
          background: #ffffff;
          color: #111418;
        }

        .enquire-container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* HERO */

        .enquire-hero {
          position: relative;
          overflow: hidden;
          padding: 55px 0 105px;
          background:
            linear-gradient(
              180deg,
              #ffffff 0%,
              #f7fbfe 100%
            );
          border-bottom: 1px solid rgba(17, 20, 24, 0.07);
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(5px);
          pointer-events: none;
        }

        .hero-glow-one {
          width: 500px;
          height: 500px;
          background: rgba(105, 178, 230, 0.12);
          top: -220px;
          right: -100px;
        }

        .hero-glow-two {
          width: 350px;
          height: 350px;
          background: rgba(158, 213, 242, 0.12);
          bottom: -200px;
          left: -150px;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #5d6872;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .back-link:hover {
          color: #2f79a8;
        }

        .hero-content {
          max-width: 850px;
          margin-top: 75px;
        }

        .hero-label,
        .section-label,
        .direct-label {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2f79a8;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .hero-label span {
          width: 28px;
          height: 1px;
          background: #69b2e6;
        }

        .hero-content h1 {
          margin: 22px 0 25px;
          max-width: 850px;
          font-size: clamp(48px, 7vw, 88px);
          line-height: 0.98;
          letter-spacing: -0.055em;
          font-weight: 700;
        }

        .hero-content h1 span {
          color: #2f79a8;
        }

        .hero-content > p {
          max-width: 650px;
          margin: 0;
          color: #5d6872;
          font-size: 18px;
          line-height: 1.75;
        }

        /* MAIN */

        .enquire-section {
          padding: 110px 0;
          background: #ffffff;
        }

        .enquire-layout {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 90px;
          align-items: start;
        }

        .enquire-info {
          position: sticky;
          top: 120px;
        }

        .enquire-info h2 {
          margin: 18px 0 22px;
          font-size: clamp(38px, 4vw, 58px);
          line-height: 1.02;
          letter-spacing: -0.045em;
        }

        .info-description {
          max-width: 470px;
          color: #5d6872;
          line-height: 1.75;
          font-size: 16px;
        }

        .info-points {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .info-point {
          display: flex;
          gap: 14px;
        }

        .point-icon {
          flex: 0 0 34px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #edf7fc;
          color: #2f79a8;
        }

        .info-point strong {
          display: block;
          margin-bottom: 5px;
          font-size: 15px;
        }

        .info-point p {
          margin: 0;
          color: #7b858d;
          font-size: 13px;
          line-height: 1.6;
        }

        .mini-card {
          display: flex;
          gap: 14px;
          margin-top: 45px;
          padding: 20px;
          border: 1px solid rgba(105, 178, 230, 0.2);
          background: #f7fbfe;
          border-radius: 14px;
        }

        .mini-icon {
          flex: 0 0 38px;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: #2f79a8;
          box-shadow: 0 8px 25px rgba(30, 70, 95, 0.06);
        }

        .mini-card span {
          display: block;
          margin-bottom: 5px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #2f79a8;
        }

        .mini-card p {
          margin: 0;
          color: #66717a;
          font-size: 13px;
          line-height: 1.6;
        }

        /* FORM */

        .form-card {
          padding: 42px;
          border: 1px solid rgba(17, 20, 24, 0.08);
          border-radius: 22px;
          background: #ffffff;
          box-shadow: 0 25px 70px rgba(30, 70, 95, 0.08);
        }

        .form-header {
          padding-bottom: 28px;
          margin-bottom: 30px;
          border-bottom: 1px solid rgba(17, 20, 24, 0.08);
        }

        .form-header span {
          display: block;
          margin-bottom: 8px;
          color: #2f79a8;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .form-header p {
          margin: 0;
          color: #5d6872;
          font-size: 14px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          margin-bottom: 23px;
        }

        .form-group label {
          display: block;
          margin-bottom: 9px;
          color: #22282d;
          font-size: 13px;
          font-weight: 700;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(17, 20, 24, 0.12);
          border-radius: 10px;
          padding: 14px 15px;
          background: #ffffff;
          color: #111418;
          font-family: inherit;
          font-size: 14px;
          outline: none;
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 145px;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #a0a8ae;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #69b2e6;
          box-shadow: 0 0 0 4px rgba(105, 178, 230, 0.12);
          background: #fbfdff;
        }

        .submit-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 22px;
          border: none;
          border-radius: 10px;
          background: #0c1217;
          color: #ffffff;
          font-family: inherit;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          background: #2f79a8;
        }

        .form-note {
          margin: 15px 0 0;
          text-align: center;
          color: #8a949d;
          font-size: 11px;
          line-height: 1.5;
        }

        /* DIRECT CONTACT */

        .direct-section {
          padding: 80px 0;
          background: #f7fbfe;
          border-top: 1px solid rgba(17, 20, 24, 0.06);
          border-bottom: 1px solid rgba(17, 20, 24, 0.06);
        }

        .direct-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .direct-label {
          margin-bottom: 14px;
        }

        .direct-inner h3 {
          margin: 0;
          font-size: clamp(28px, 4vw, 42px);
          letter-spacing: -0.04em;
        }

        .direct-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 20px;
          border-radius: 999px;
          background: #ffffff;
          color: #111418;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          border: 1px solid rgba(17, 20, 24, 0.1);
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .direct-button:hover {
          color: #2f79a8;
          border-color: #69b2e6;
          transform: translateY(-2px);
        }

        /* CTA */

        .enquire-cta {
          position: relative;
          overflow: hidden;
          padding: 110px 0;
          background: #0c1217;
          color: #ffffff;
        }

        .cta-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(105, 178, 230, 0.12);
          filter: blur(20px);
          right: -150px;
          top: -250px;
        }

        .enquire-cta .section-label {
          color: #69b2e6;
        }

        .enquire-cta h2 {
          margin: 20px 0;
          font-size: clamp(55px, 8vw, 105px);
          line-height: 0.9;
          letter-spacing: -0.06em;
        }

        .enquire-cta p {
          max-width: 470px;
          margin: 30px 0 0;
          color: #a9b3ba;
          font-size: 16px;
          line-height: 1.7;
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {
          .enquire-layout {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .enquire-info {
            position: static;
          }

          .direct-inner {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 650px) {
          .enquire-container {
            width: min(100% - 32px, 1180px);
          }

          .enquire-hero {
            padding: 35px 0 75px;
          }

          .hero-content {
            margin-top: 55px;
          }

          .hero-content h1 {
            font-size: 48px;
          }

          .enquire-section {
            padding: 75px 0;
          }

          .form-card {
            padding: 25px 20px;
            border-radius: 16px;
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .enquire-cta {
            padding: 80px 0;
          }

          .enquire-cta h2 {
            font-size: 62px;
          }
        }
      `}</style>
    </div>
  );
}

export default Enquire;