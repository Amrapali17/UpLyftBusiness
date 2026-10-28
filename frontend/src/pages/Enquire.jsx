
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Enquire() {
  const [searchParams] = useSearchParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: searchParams.get("service") || "",
    package: searchParams.get("package") || "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const services = [
    { value: "web-development", label: "Web Development" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "social-media", label: "Social Media Management" },
    { value: "performance-advertising", label: "Performance Advertising" },
    { value: "creative-branding", label: "Creative & Branding" },
    { value: "growth-strategy", label: "Growth & Strategy" },
    { value: "other", label: "Other / Not Sure Yet" },
  ];

  const packages = [
    "Starter",
    "Growth",
    "Professional",
    "Custom Solution",
    "Not Sure Yet",
  ];

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const normalizedPhone = form.phone.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
      setError("Enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9.");
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/i.test(form.email.trim())) {
      setError("Please use a valid Gmail address ending in @gmail.com.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit your enquiry.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err.message ||
          "Unable to submit your enquiry. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="enquire-page">
      <Navbar />

      <main>
        <section className="enquire-hero">
          <div className="enquire-grid-bg" />
          <div className="enquire-glow enquire-glow-one" />
          <div className="enquire-glow enquire-glow-two" />

          <div className="enquire-container">
            <Link to="/" className="enquire-back">
              <ArrowLeft size={15} />
              Back to Home
            </Link>

            <div className="enquire-heading">
              <div className="enquire-eyebrow">
                <Sparkles size={15} />
                LET'S WORK TOGETHER
              </div>

              <h1>
                Let's build something
                <br />
                worth <span>remembering.</span>
              </h1>

              <p>
                Tell us about your business, your goals and what you want to
                build. We'll use the details to understand your requirements
                and explore the right solution for you.
              </p>
            </div>

            <div className="enquire-layout">
              <aside className="enquire-sidebar">
                <div className="sidebar-intro">
                  <span className="sidebar-label">YOUR NEXT STEP</span>
                  <h2>
                    Good ideas
                    <br />
                    start with a
                    <br />
                    <span>conversation.</span>
                  </h2>
                  <p>
                    Whether you need a website, a stronger digital presence or
                    a complete growth strategy, let's start with your vision.
                  </p>
                </div>

                <div className="sidebar-points">
                  <div className="sidebar-point">
                    <div className="sidebar-icon">
                      <MessageSquare size={19} />
                    </div>
                    <div>
                      <h3>Tell us your goals</h3>
                      <p>Share your idea, requirements and priorities.</p>
                    </div>
                  </div>

                  <div className="sidebar-point">
                    <div className="sidebar-icon">
                      <ShieldCheck size={19} />
                    </div>
                    <div>
                      <h3>A solution that fits</h3>
                      <p>Discuss the services and scope that suit your needs.</p>
                    </div>
                  </div>

                  <div className="sidebar-point">
                    <div className="sidebar-icon">
                      <Clock3 size={19} />
                    </div>
                    <div>
                      <h3>Clear next steps</h3>
                      <p>Outline your timeline and what happens next.</p>
                    </div>
                  </div>
                </div>

                <div className="sidebar-contact">
                  <span>HAVE A QUICK QUESTION?</span>
                  <a href="mailto:connect@uplyftbusiness.com">
                    <Mail size={16} />
                    connect@uplyftbusiness.com
                    <ArrowUpRight size={15} />
                  </a>
                </div>

                <div className="sidebar-decoration" aria-hidden="true">
                  <span>Build.</span>
                  <span>Grow.</span>
                  <span>Scale.</span>
                </div>
              </aside>

              <div className="enquire-form-card">
                {!submitted ? (
                  <>
                    <div className="form-heading">
                      <div>
                        <span className="form-step">PROJECT ENQUIRY</span>
                        <h2>Tell us about your project.</h2>
                        <p>
                          Fields marked with <span>*</span> are required.
                        </p>
                      </div>

                      <div className="form-heading-icon">
                        <ArrowUpRight size={23} />
                      </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="form-section-label">
                        <span>01</span>
                        YOUR DETAILS
                      </div>

                      <div className="form-grid">
                        <label className="form-field">
                          <span>Full name <b>*</b></span>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={updateField}
                            placeholder="Your full name"
                            autoComplete="name"
                            required
                          />
                        </label>

                        <label className="form-field">
                          <span>Work email <b>*</b></span>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={updateField}
                            placeholder="you@gmail.com"
                            autoComplete="email"
                            pattern="[a-zA-Z0-9._%+-]+@gmail\.com"
                            title="Please enter a valid Gmail address ending in @gmail.com"
                            required
                          />
                        </label>

                        <label className="form-field">
                          <span>Company / brand</span>
                          <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={updateField}
                            placeholder="Your business name"
                            autoComplete="organization"
                          />
                        </label>

                        <label className="form-field">
                          <span>Phone number <b>*</b></span>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={(event) => {
                              const digits = event.target.value.replace(/\D/g, "").slice(0, 10);
                              setForm((previous) => ({ ...previous, phone: digits }));
                              if (error) setError("");
                            }}
                            placeholder="10-digit mobile number"
                            autoComplete="tel-national"
                            inputMode="numeric"
                            pattern="[6-9][0-9]{9}"
                            title="Enter a 10-digit Indian mobile number starting with 6, 7, 8 or 9"
                            minLength={10}
                            maxLength={10}
                            required
                          />
                        </label>
                      </div>

                      <div className="form-divider" />

                      <div className="form-section-label">
                        <span>02</span>
                        PROJECT DETAILS
                      </div>

                      <div className="form-grid">
                        <label className="form-field">
                          <span>Service you're interested in <b>*</b></span>
                          <select
                            name="service"
                            value={form.service}
                            onChange={updateField}
                            required
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option
                                key={service.value}
                                value={service.value}
                              >
                                {service.label}
                              </option>
                            ))}
                          </select>
                        </label>

                        <label className="form-field">
                          <span>Package preference</span>
                          <select
                            name="package"
                            value={form.package}
                            onChange={updateField}
                          >
                            <option value="">Select a preference</option>
                            {packages.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </label>

                        <label className="form-field">
                          <span>Estimated budget</span>
                          <select
                            name="budget"
                            value={form.budget}
                            onChange={updateField}
                          >
                            <option value="">Choose your budget</option>
                            <option value="Under ₹10,000">
                              Under ₹10,000
                            </option>
                            <option value="₹10,000–₹25,000">
                              ₹10,000–₹25,000
                            </option>
                            <option value="₹25,000–₹50,000">
                              ₹25,000–₹50,000
                            </option>
                            <option value="₹50,000–₹1,00,000">
                              ₹50,000–₹1,00,000
                            </option>
                            <option value="Above ₹1,00,000">
                              Above ₹1,00,000
                            </option>
                            <option value="Need guidance">
                              Need guidance
                            </option>
                          </select>
                        </label>

                        <label className="form-field">
                          <span>Preferred timeline</span>
                          <select
                            name="timeline"
                            value={form.timeline}
                            onChange={updateField}
                          >
                            <option value="">Choose a timeline</option>
                            <option value="As soon as possible">
                              As soon as possible
                            </option>
                            <option value="Within 2 weeks">
                              Within 2 weeks
                            </option>
                            <option value="Within a month">
                              Within a month
                            </option>
                            <option value="1–3 months">1–3 months</option>
                            <option value="Flexible">Flexible</option>
                          </select>
                        </label>
                      </div>

                      <label className="form-field form-message-field">
                        <span>Tell us about your project <b>*</b></span>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={updateField}
                          placeholder="What are you looking to build? What challenges are you trying to solve? Share any details that will help us understand your goals."
                          rows={5}
                          required
                        />
                      </label>

                      {error && (
                        <p
                          role="alert"
                          style={{
                            margin: "20px 0 0",
                            color: "#b42318",
                            fontSize: "13px",
                            lineHeight: 1.6,
                          }}
                        >
                          {error}
                        </p>
                      )}

                      <div className="form-submit-row">
                        <p>
                          <ShieldCheck size={15} />
                          Your details are used to understand your enquiry.
                        </p>

                        <button
                          type="submit"
                          className="enquire-submit"
                          disabled={submitting}
                          style={{
                            opacity: submitting ? 0.7 : 1,
                            cursor: submitting ? "wait" : "pointer",
                          }}
                        >
                          {submitting ? "Submitting..." : "Submit Enquiry"}
                          {!submitting && <ArrowUpRight size={17} />}
                        </button>
                      </div>

                      <p className="form-disclaimer">
                        Your enquiry will be sent to our team when you submit
                        this form. Please do not include passwords or other
                        sensitive information.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="enquire-success">
                    <div className="success-icon">
                      <CheckCircle2 size={35} />
                    </div>

                    <span className="form-step">ENQUIRY SUBMITTED</span>

                    <h2>
                      Thank you,
                      <br />
                      <span>{form.name}.</span>
                    </h2>

                    <p>
                      Thank you for contacting UpLyftBusiness. Your enquiry has
                      been submitted successfully, and our team can now review
                      your project details.
                    </p>

                    <a
                      className="enquire-submit"
                      href={`mailto:connect@uplyftbusiness.com?subject=${encodeURIComponent(
                        `Project Enquiry — ${form.name}`
                      )}&body=${encodeURIComponent(
                        `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nPhone: ${form.phone}\nService: ${form.service}\nPackage: ${form.package}\nBudget: ${form.budget}\nTimeline: ${form.timeline}\n\nProject details:\n${form.message}`
                      )}`}
                    >
                      Send via Email
                      <Mail size={17} />
                    </a>

                    <button
                      className="enquire-reset"
                      type="button"
                      onClick={() => setSubmitted(false)}
                    >
                      Back to the form
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .enquire-page {
          --enquire-blue: #2f79a8;
          --enquire-deep: #123b52;
          --enquire-light: #69b2e6;
          --enquire-pale: #edf7fc;
          --enquire-pale-two: #eaf6fc;
          --enquire-text: #111418;
          --enquire-muted: #5d6872;
          --enquire-border: rgba(47, 121, 168, 0.16);
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background: #ffffff;
          color: var(--enquire-text);
        }

        .enquire-page *,
        .enquire-page *::before,
        .enquire-page *::after {
          box-sizing: border-box;
        }

        .enquire-hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 48px 0 120px;
          background: #ffffff;
        }

        .enquire-grid-bg {
          position: absolute;
          z-index: -2;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(47, 121, 168, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(47, 121, 168, 0.035) 1px, transparent 1px);
          background-size: 58px 58px;
          mask-image: linear-gradient(to bottom, black, transparent 78%);
        }

        .enquire-glow {
          position: absolute;
          z-index: -1;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(100px);
        }

        .enquire-glow-one {
          top: 160px;
          right: -180px;
          width: 430px;
          height: 430px;
          background: rgba(105, 178, 230, 0.12);
        }

        .enquire-glow-two {
          top: 650px;
          left: -200px;
          width: 380px;
          height: 380px;
          background: rgba(47, 121, 168, 0.07);
        }

        .enquire-container {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
        }

        .enquire-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--enquire-muted);
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .enquire-back:hover {
          color: var(--enquire-blue);
        }

        .enquire-heading {
          max-width: 850px;
          margin: 58px auto 72px;
          text-align: center;
        }

        .enquire-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-bottom: 23px;
          color: var(--enquire-blue);
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 0.16em;
        }

        .enquire-heading h1 {
          margin: 0;
          color: var(--enquire-text);
          font-size: clamp(43px, 6.1vw, 76px);
          line-height: 0.99;
          letter-spacing: -0.06em;
          font-weight: 750;
        }

        .enquire-heading h1 span,
        .sidebar-intro h2 span,
        .enquire-success h2 span {
          color: var(--enquire-blue);
        }

        .enquire-heading > p {
          max-width: 670px;
          margin: 24px auto 0;
          color: var(--enquire-muted);
          font-size: 15px;
          line-height: 1.85;
        }

        .enquire-layout {
          display: grid;
          grid-template-columns: 0.78fr 1.22fr;
          align-items: stretch;
          gap: 24px;
        }

        .enquire-sidebar {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          min-height: 100%;
          padding: 38px;
          overflow: hidden;
          color: #ffffff;
          background: var(--enquire-deep);
          border: 1px solid rgba(18, 59, 82, 0.1);
          border-radius: 24px;
        }

        .sidebar-intro,
        .sidebar-points,
        .sidebar-contact {
          position: relative;
          z-index: 2;
        }

        .sidebar-label {
          color: var(--enquire-light);
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.15em;
        }

        .sidebar-intro h2 {
          margin: 23px 0 17px;
          color: #ffffff;
          font-size: clamp(35px, 3.4vw, 48px);
          line-height: 1.03;
          letter-spacing: -0.055em;
        }

        .sidebar-intro h2 span {
          color: var(--enquire-light);
        }

        .sidebar-intro > p {
          max-width: 340px;
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 13px;
          line-height: 1.9;
        }

        .sidebar-points {
          display: grid;
          gap: 25px;
          margin-top: 48px;
        }

        .sidebar-point {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          align-items: start;
          gap: 14px;
        }

        .sidebar-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--enquire-light);
          background: rgba(105, 178, 230, 0.12);
          border: 1px solid rgba(105, 178, 230, 0.23);
          border-radius: 12px;
        }

        .sidebar-point h3 {
          margin: 2px 0 6px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 650;
        }

        .sidebar-point p {
          margin: 0;
          color: rgba(255, 255, 255, 0.65);
          font-size: 12px;
          line-height: 1.75;
        }

        .sidebar-contact {
          margin-top: auto;
          padding-top: 44px;
        }

        .sidebar-contact > span {
          display: block;
          margin-bottom: 13px;
          color: rgba(255, 255, 255, 0.57);
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 0.13em;
        }

        .sidebar-contact a {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #ffffff;
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
          overflow-wrap: anywhere;
        }

        .sidebar-contact a svg:first-child {
          flex-shrink: 0;
          color: var(--enquire-light);
        }

        .sidebar-contact a svg:last-child {
          flex-shrink: 0;
          margin-left: auto;
          color: var(--enquire-light);
        }

        .sidebar-contact a:hover {
          color: var(--enquire-light);
        }

        .sidebar-decoration {
          position: absolute;
          right: -12px;
          bottom: 25px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          color: rgba(105, 178, 230, 0.055);
          font-size: 64px;
          line-height: 0.83;
          letter-spacing: -0.07em;
          font-weight: 850;
          pointer-events: none;
          user-select: none;
        }

        .enquire-form-card {
          min-width: 0;
          padding: 38px;
          background: #ffffff;
          border: 1px solid var(--enquire-border);
          border-radius: 24px;
          box-shadow: 0 22px 70px rgba(18, 59, 82, 0.07);
        }

        .form-heading {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 35px;
        }

        .form-step {
          color: var(--enquire-blue);
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.14em;
        }

        .form-heading h2 {
          margin: 12px 0 9px;
          color: var(--enquire-text);
          font-size: clamp(24px, 2.4vw, 31px);
          line-height: 1.15;
          letter-spacing: -0.045em;
        }

        .form-heading p {
          margin: 0;
          color: var(--enquire-muted);
          font-size: 12px;
        }

        .form-heading p span,
        .form-field > span b {
          color: var(--enquire-blue);
        }

        .form-heading-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--enquire-blue);
          background: var(--enquire-pale);
          border: 1px solid rgba(105, 178, 230, 0.3);
          border-radius: 13px;
        }

        .form-section-label {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 20px;
          color: var(--enquire-deep);
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.13em;
        }

        .form-section-label > span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 27px;
          height: 27px;
          color: var(--enquire-blue);
          background: var(--enquire-pale);
          border-radius: 8px;
          font-size: 10px;
          letter-spacing: 0;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 19px 16px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 9px;
          min-width: 0;
        }

        .form-field > span {
          color: var(--enquire-text);
          font-size: 12px;
          font-weight: 650;
        }

        .form-field input,
        .form-field select,
        .form-field textarea {
          width: 100%;
          min-width: 0;
          padding: 13px 14px;
          color: var(--enquire-text);
          background: #fbfdff;
          border: 1px solid rgba(47, 121, 168, 0.18);
          border-radius: 10px;
          outline: none;
          font: inherit;
          font-size: 12px;
          line-height: 1.5;
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        .form-field input,
        .form-field select {
          min-height: 47px;
        }

        .form-field input::placeholder,
        .form-field textarea::placeholder {
          color: #929faa;
          opacity: 1;
        }

        .form-field input:focus,
        .form-field select:focus,
        .form-field textarea:focus {
          background: #ffffff;
          border-color: var(--enquire-blue);
          box-shadow: 0 0 0 3px rgba(105, 178, 230, 0.16);
        }

        .form-field select {
          cursor: pointer;
        }

        .form-field textarea {
          min-height: 130px;
          resize: vertical;
        }

        .form-divider {
          height: 1px;
          margin: 30px 0;
          background: rgba(47, 121, 168, 0.13);
        }

        .form-message-field {
          margin-top: 22px;
        }

        .form-submit-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin-top: 28px;
        }

        .form-submit-row > p {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          max-width: 220px;
          margin: 0;
          color: var(--enquire-muted);
          font-size: 10px;
          line-height: 1.7;
        }

        .form-submit-row > p svg {
          flex-shrink: 0;
          margin-top: 1px;
          color: var(--enquire-blue);
        }

        .enquire-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 49px;
          padding: 0 20px;
          color: #ffffff;
          background: var(--enquire-blue);
          border: 1px solid var(--enquire-blue);
          border-radius: 999px;
          font: inherit;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        .enquire-submit:hover {
          transform: translateY(-2px);
          background: var(--enquire-deep);
          border-color: var(--enquire-deep);
          box-shadow: 0 10px 24px rgba(18, 59, 82, 0.18);
        }

        .enquire-submit:focus-visible,
        .enquire-back:focus-visible,
        .enquire-reset:focus-visible {
          outline: 3px solid var(--enquire-light);
          outline-offset: 4px;
        }

        .form-disclaimer {
          margin: 22px 0 0;
          padding-top: 15px;
          color: #7d8993;
          border-top: 1px solid rgba(47, 121, 168, 0.1);
          font-size: 10px;
          line-height: 1.75;
        }

        .enquire-success {
          min-height: 600px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }

        .success-icon {
          width: 68px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          color: var(--enquire-blue);
          background: var(--enquire-pale);
          border: 1px solid rgba(105, 178, 230, 0.3);
          border-radius: 20px;
        }

        .enquire-success h2 {
          margin: 18px 0;
          color: var(--enquire-text);
          font-size: clamp(36px, 4vw, 52px);
          line-height: 1.02;
          letter-spacing: -0.055em;
        }

        .enquire-success > p {
          max-width: 420px;
          margin: 0 0 25px;
          color: var(--enquire-muted);
          font-size: 14px;
          line-height: 1.85;
        }

        .enquire-reset {
          margin-top: 17px;
          padding: 8px 0;
          color: var(--enquire-blue);
          background: transparent;
          border: 0;
          font: inherit;
          font-size: 12px;
          font-weight: 650;
          cursor: pointer;
        }

        .enquire-reset:hover {
          color: var(--enquire-deep);
          text-decoration: underline;
        }

        @media (max-width: 1000px) {
          .enquire-layout {
            grid-template-columns: 0.75fr 1.25fr;
            gap: 16px;
          }

          .enquire-sidebar,
          .enquire-form-card {
            padding: 28px;
          }

          .sidebar-contact a {
            font-size: 11px;
          }

          .form-submit-row {
            align-items: stretch;
            flex-direction: column;
          }

          .form-submit-row > p {
            max-width: none;
          }

          .form-submit-row .enquire-submit {
            width: 100%;
          }
        }

        @media (max-width: 760px) {
          .enquire-hero {
            padding: 32px 0 80px;
          }

          .enquire-container {
            width: min(100% - 32px, 620px);
          }

          .enquire-heading {
            margin: 45px auto 42px;
          }

          .enquire-heading h1 {
            font-size: clamp(39px, 8vw, 58px);
          }

          .enquire-heading > p {
            font-size: 14px;
          }

          .enquire-layout {
            grid-template-columns: 1fr;
          }

          .enquire-sidebar {
            min-height: auto;
            padding: 30px;
          }

          .sidebar-intro h2 {
            font-size: 43px;
          }

          .sidebar-points {
            gap: 20px;
            margin-top: 32px;
          }

          .sidebar-contact {
            margin-top: 28px;
            padding-top: 24px;
            border-top: 1px solid rgba(105, 178, 230, 0.2);
          }

          .sidebar-decoration {
            font-size: 52px;
          }

          .enquire-form-card {
            padding: 26px;
          }

          .enquire-success {
            min-height: 420px;
          }
        }

        @media (max-width: 480px) {
          .enquire-container {
            width: calc(100% - 28px);
          }

          .enquire-heading {
            margin: 38px auto 32px;
          }

          .enquire-heading h1 {
            font-size: 39px;
          }

          .enquire-eyebrow {
            font-size: 9px;
          }

          .enquire-heading > p {
            font-size: 13px;
          }

          .enquire-sidebar,
          .enquire-form-card {
            padding: 22px;
            border-radius: 18px;
          }

          .sidebar-intro h2 {
            font-size: 38px;
          }

          .form-heading h2 {
            font-size: 24px;
          }

          .form-heading-icon {
            width: 38px;
            height: 38px;
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: 17px;
          }

          .form-divider {
            margin: 25px 0;
          }

          .form-message-field {
            margin-top: 20px;
          }

          .form-submit-row .enquire-submit {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .enquire-page *,
          .enquire-page *::before,
          .enquire-page *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Enquire;
