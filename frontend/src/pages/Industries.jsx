
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Building2,
  ShoppingBag,
  BriefcaseBusiness,
  Layers3,
  Rocket,
  Store,
  CheckCircle2,
  Globe2,
  Target,
  Palette,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const industries = [
  {
    number: "01",
    icon: Building2,
    title: "Professional Services",
    description:
      "Build credibility and generate opportunities with a professional digital presence designed around your expertise.",
    services: ["Website Development", "Brand Identity", "Lead Generation"],
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description:
      "Create seamless online shopping experiences that showcase your products, strengthen trust and support sales.",
    services: ["E-commerce", "Performance Marketing", "Social Media"],
  },
  {
    number: "03",
    icon: BriefcaseBusiness,
    title: "B2B Businesses",
    description:
      "Communicate your value clearly, reach decision-makers and build a stronger pipeline with focused digital solutions.",
    services: ["Business Websites", "Growth Strategy", "Lead Generation"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Startups",
    description:
      "Launch with confidence using flexible digital foundations that can evolve with your product and business.",
    services: ["Launch Websites", "Branding", "Digital Strategy"],
  },
  {
    number: "05",
    icon: Store,
    title: "Local Businesses",
    description:
      "Help customers discover your business, understand your services and take the next step with confidence.",
    services: ["Business Websites", "Local Marketing", "Advertising"],
  },
  {
    number: "06",
    icon: Layers3,
    title: "Growing Brands",
    description:
      "Bring your brand, website and marketing together to deliver a consistent experience across customer touchpoints.",
    services: ["Creative & Branding", "Digital Marketing", "Growth Strategy"],
  },
];

const capabilities = [
  {
    icon: Globe2,
    title: "Digital foundations",
    description:
      "Professional websites and digital experiences built around your business needs.",
  },
  {
    icon: Palette,
    title: "Brand & creative",
    description:
      "Consistent visual identity, creative assets and messaging that communicate your value.",
  },
  {
    icon: Target,
    title: "Marketing & growth",
    description:
      "Focused campaigns and digital marketing designed to support measurable business goals.",
  },
];

function Industries() {
  return (
    <div className="industries-page">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="ind-hero">
          <div className="ind-hero-glow" />

          <div className="ind-container ind-hero-inner">
            <div className="ind-eyebrow">
              <span className="ind-eyebrow-line" />
              INDUSTRIES WE SERVE
            </div>

            <div className="ind-hero-grid">
              <div className="ind-hero-copy">
                <h1>
                  Digital solutions.
                  <br />
                  <span>Built for business.</span>
                </h1>

                <p>

                  Whether you're starting from scratch or looking to improve
                  what already exists, UpLyftBusiness works with businesses at
                  different stages of their digital journey.
=======
                  Every business has a different goal. We bring technology,
                  creative thinking and digital marketing together to help
                  businesses build a stronger online presence.
b147965 (Update industries and work pages)
                </p>

                <div className="ind-hero-actions">
                  <Link to="/enquire" className="ind-button ind-button-primary">
                    Discuss your project
                    <ArrowUpRight size={18} />
                  </Link>

                  <Link to="/services" className="ind-text-link">
                    Explore our services
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>

              <div className="ind-hero-visual">
                <div className="ind-visual-orbit ind-orbit-one" />
                <div className="ind-visual-orbit ind-orbit-two" />

                <div className="ind-visual-center">
                  <span>U</span>
                  <small>BUILD. GROW. SCALE.</small>
                </div>

                <div className="ind-float-card ind-float-top">
                  <Globe2 size={19} />
                  <div>
                    <strong>Digital presence</strong>
                    <span>Make your brand discoverable</span>
                  </div>
                </div>

                <div className="ind-float-card ind-float-bottom">
                  <Target size={19} />
                  <div>
                    <strong>Business growth</strong>
                    <span>Turn goals into action</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ind-hero-bottom">
              <span>STRATEGY</span>
              <span className="ind-bottom-dot" />
              <span>CREATIVE</span>
              <span className="ind-bottom-dot" />
              <span>TECHNOLOGY</span>
              <span className="ind-bottom-dot" />
              <span>GROWTH</span>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="ind-intro">
          <div className="ind-container ind-intro-grid">
            <div className="ind-section-kicker">
              <span>01</span>
              <div>
                <small>OUR APPROACH</small>
                <strong>Business first</strong>
              </div>
            </div>

            <div className="ind-intro-content">
              <h2>
                Different businesses.
                <br />
                <span>One thoughtful approach.</span>
              </h2>

              <p>
                The right digital solution starts with understanding your
                audience, your challenges and what success looks like for
                your business. We adapt our approach to your needs instead of
                forcing you into a one-size-fits-all package.
              </p>
            </div>
          </div>
        </section>

        {/* INDUSTRY CARDS */}
        <section className="ind-sectors">
          <div className="ind-container">
            <div className="ind-section-heading">
              <div>
                <div className="ind-eyebrow">
                  <span className="ind-eyebrow-line" />
                  WHO WE WORK WITH
                </div>

                <h2>
                  Solutions for your
                  <br />
                  <span>stage of growth.</span>
                </h2>
              </div>

              <p>
                From early-stage ventures to established businesses, we help
                turn digital opportunities into practical next steps.
              </p>
            </div>

            <div className="ind-sector-grid">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <article className="ind-sector-card" key={industry.number}>
                    <div className="ind-card-top">
                      <span className="ind-card-number">
                        {industry.number}
                      </span>

                      <div className="ind-card-icon">
                        <Icon size={23} strokeWidth={1.7} />
                      </div>

                      <ArrowUpRight
                        className="ind-card-arrow"
                        size={20}
                      />
                    </div>

                    <h3>{industry.title}</h3>

                    <p className="ind-card-description">
                      {industry.description}
                    </p>

                    <div className="ind-card-divider" />

                    <div className="ind-card-services-label">
                      RELEVANT CAPABILITIES
                    </div>

                    <div className="ind-service-tags">
                      {industry.services.map((service) => (
                        <span key={service}>{service}</span>
                      ))}
                    </div>

                    <Link
                      to="/enquire"
                      className="ind-card-link"
                      aria-label={`Discuss a project for ${industry.title}`}
                    >
                      Let's discuss your goals
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="ind-capabilities">
          <div className="ind-container ind-capabilities-grid">
            <div className="ind-capabilities-heading">
              <div className="ind-eyebrow">
                <span className="ind-eyebrow-line" />
                OUR CAPABILITIES
              </div>

              <h2>
                The right expertise
                <br />
                <span>for what comes next.</span>
              </h2>

              <p>
                Connected services, aligned with your business objectives.
                Start with what you need and build from there.
              </p>

              <Link to="/services" className="ind-button ind-button-outline">
                View all services
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="ind-capability-list">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;

                return (
                  <div className="ind-capability-row" key={capability.title}>
                    <span className="ind-capability-number">
                      0{index + 1}
                    </span>

                    <div className="ind-capability-icon">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <div className="ind-capability-copy">
                      <h3>{capability.title}</h3>
                      <p>{capability.description}</p>
                    </div>

                    <CheckCircle2
                      size={19}
                      className="ind-capability-check"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BRAND STATEMENT */}
        <section className="ind-statement">
          <div className="ind-container ind-statement-inner">
            <div className="ind-eyebrow ind-eyebrow-light">
              <span className="ind-eyebrow-line" />
              BUILT AROUND YOUR BUSINESS
            </div>

            <h2>
              Your goals are unique.
              <br />
              <span>Your digital strategy should be too.</span>
            </h2>

            <div className="ind-statement-bottom">
              <p>
                We combine strategy, design, technology and marketing to
                create digital experiences with a clear purpose.
              </p>

              <Link to="/about" className="ind-statement-link">
                Get to know us
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ind-cta">
          <div className="ind-container ind-cta-inner">
            <div>
              <div className="ind-eyebrow">
                <span className="ind-eyebrow-line" />
                HAVE A PROJECT IN MIND?
              </div>

              <h2>
                Let's build
                <br />
                <span>what's next.</span>
              </h2>
            </div>

            <div className="ind-cta-content">
              <p>
                Tell us about your business, your challenges and where you
                want to go. We'll help you explore the right digital
                approach.
              </p>

              <Link to="/enquire" className="ind-button ind-button-primary">
                Start a conversation
                <ArrowUpRight size={18} />
              </Link>

              <span className="ind-cta-note">
                A clear conversation. A considered approach.
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .industries-page {
          --ind-navy: #123b52;
          --ind-blue: #2f79a8;
          --ind-sky: #69b2e6;
          --ind-pale: #edf7fc;
          --ind-ink: #17232d;
          --ind-muted: #62717d;
          --ind-line: #e0e8ed;
          background: #ffffff;
          color: var(--ind-ink);
          min-height: 100vh;
          overflow: hidden;
        }

        .industries-page *,
        .industries-page *::before,
        .industries-page *::after {
          box-sizing: border-box;
        }

        .ind-container {
          width: min(1180px, calc(100% - 64px));
          margin: 0 auto;
        }

        .ind-eyebrow {
          display: flex;
          align-items: center;
          gap: 11px;
          color: var(--ind-blue);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.16em;
          line-height: 1.5;
        }

        .ind-eyebrow-line {
          display: inline-block;
          width: 25px;
          height: 2px;
          background: var(--ind-sky);
          flex: 0 0 auto;
        }

        /* HERO */

        .ind-hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 95px 0 0;
          background:
            radial-gradient(ellipse at 85% 20%, rgba(105, 178, 230, 0.13), transparent 34%),
            linear-gradient(135deg, #f7fbfe 0%, #ffffff 58%, #edf7fc 100%);
        }

        .ind-hero-glow {
          position: absolute;
          z-index: -1;
          right: -180px;
          top: 80px;
          width: 560px;
          height: 560px;
          border-radius: 50%;
          border: 1px solid rgba(47, 121, 168, 0.08);
          box-shadow:
            0 0 0 60px rgba(47, 121, 168, 0.025),
            0 0 0 120px rgba(47, 121, 168, 0.02);
        }

        .ind-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 55px;
          align-items: center;
          padding: 70px 0 75px;
        }

        .ind-hero-copy {
          position: relative;
          z-index: 2;
        }

        .ind-hero-copy h1 {
          margin: 25px 0 24px;
          color: var(--ind-navy);
          font-size: clamp(48px, 5.6vw, 76px);
          font-weight: 750;
          line-height: 1.04;
          letter-spacing: -0.06em;
        }

        .ind-hero-copy h1 span {
          color: var(--ind-blue);
        }

        .ind-hero-copy > p {
          max-width: 590px;
          margin: 0;
          color: var(--ind-muted);
          font-size: 16px;
          line-height: 1.9;
        }

        .ind-hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 24px;
          margin-top: 32px;
        }

        .ind-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 11px;
          min-height: 49px;
          padding: 0 20px;
          border: 1px solid transparent;
          border-radius: 7px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition:
            transform 0.2s ease,
            background 0.2s ease,
            border-color 0.2s ease,
            color 0.2s ease;
        }

        .ind-button:hover {
          transform: translateY(-2px);
        }

        .ind-button-primary {
          background: var(--ind-navy);
          color: #ffffff;
        }

        .ind-button-primary:hover {
          background: var(--ind-blue);
        }

        .ind-button-outline {
          border-color: #cadce7;
          color: var(--ind-navy);
          background: #ffffff;
        }

        .ind-button-outline:hover {
          border-color: var(--ind-blue);
          color: var(--ind-blue);
        }

        .ind-text-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--ind-navy);
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: gap 0.2s ease, color 0.2s ease;
        }

        .ind-text-link:hover {
          gap: 12px;
          color: var(--ind-blue);
        }

        /* HERO VISUAL */

        .ind-hero-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 390px;
        }

        .ind-visual-orbit {
          position: absolute;
          aspect-ratio: 1;
          border-radius: 50%;
          border: 1px solid rgba(47, 121, 168, 0.18);
        }

        .ind-orbit-one {
          width: 300px;
        }

        .ind-orbit-two {
          width: 215px;
          border-style: dashed;
          border-color: rgba(47, 121, 168, 0.25);
        }

        .ind-visual-center {
          position: relative;
          z-index: 1;
          display: flex;
          width: 150px;
          height: 150px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 28px;
          background: linear-gradient(145deg, #ffffff, #e5f3fb);
          box-shadow: 0 25px 70px rgba(18, 59, 82, 0.13);
          transform: rotate(-5deg);
        }

        .ind-visual-center > span {
          color: var(--ind-navy);
          font-size: 65px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.09em;
        }

        .ind-visual-center small {
          color: var(--ind-blue);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .ind-float-card {
          position: absolute;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 250px;
          padding: 15px 17px;
          border: 1px solid rgba(216, 230, 239, 0.95);
          border-radius: 11px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 14px 40px rgba(18, 59, 82, 0.09);
          color: var(--ind-blue);
        }

        .ind-float-card div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ind-float-card strong {
          color: var(--ind-navy);
          font-size: 12px;
        }

        .ind-float-card span {
          color: var(--ind-muted);
          font-size: 10px;
          line-height: 1.5;
        }

        .ind-float-top {
          top: 48px;
          right: -4px;
        }

        .ind-float-bottom {
          bottom: 48px;
          left: -8px;
        }

        .ind-hero-bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          padding: 21px 0;
          border-top: 1px solid rgba(18, 59, 82, 0.1);
          color: #71818c;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .ind-bottom-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--ind-sky);
        }

        /* INTRO */

        .ind-intro {
          padding: 115px 0;
        }

        .ind-intro-grid {
          display: grid;
          grid-template-columns: 0.65fr 1.35fr;
          gap: 70px;
        }

        .ind-section-kicker {
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }

        .ind-section-kicker > span {
          display: flex;
          width: 34px;
          height: 34px;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background: var(--ind-pale);
          color: var(--ind-blue);
          font-size: 11px;
          font-weight: 800;
        }

        .ind-section-kicker div {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding-top: 3px;
        }

        .ind-section-kicker small {
          color: #82909a;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        .ind-section-kicker strong {
          color: var(--ind-navy);
          font-size: 13px;
        }

        .ind-intro-content h2,
        .ind-section-heading h2,
        .ind-capabilities-heading h2 {
          margin: 0;
          color: var(--ind-navy);
          font-size: clamp(35px, 4vw, 51px);
          line-height: 1.15;
          letter-spacing: -0.045em;
        }

        .ind-intro-content h2 span,
        .ind-section-heading h2 span,
        .ind-capabilities-heading h2 span {
          color: var(--ind-blue);
        }

        .ind-intro-content > p {
          max-width: 710px;
          margin: 22px 0 0;
          color: var(--ind-muted);
          font-size: 15px;
          line-height: 1.95;
        }

        /* INDUSTRY CARDS */

        .ind-sectors {
          padding: 105px 0 115px;
          background: #f7fafc;
        }

        .ind-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 50px;
          margin-bottom: 43px;
        }

        .ind-section-heading h2 {
          margin-top: 19px;
        }

        .ind-section-heading > p {
          max-width: 410px;
          margin: 0 0 5px;
          color: var(--ind-muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .ind-sector-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 19px;
        }

        .ind-sector-card {
          display: flex;
          min-width: 0;
          flex-direction: column;
          padding: 25px 24px 22px;
          border: 1px solid #e4ebf0;
          border-radius: 11px;
          background: #ffffff;
          box-shadow: 0 4px 16px rgba(18, 59, 82, 0.025);
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .ind-sector-card:hover {
          transform: translateY(-5px);
          border-color: #c5dfef;
          box-shadow: 0 18px 38px rgba(18, 59, 82, 0.08);
        }

        .ind-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 23px;
        }

        .ind-card-number {
          margin-right: auto;
          color: #92a2ae;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .ind-card-icon {
          display: flex;
          width: 45px;
          height: 45px;
          align-items: center;
          justify-content: center;
          border: 1px solid #d9eaf5;
          border-radius: 10px;
          background: #f0f8fd;
          color: var(--ind-blue);
          transition: background 0.2s ease, color 0.2s ease;
        }

        .ind-sector-card:hover .ind-card-icon {
          background: var(--ind-navy);
          color: #ffffff;
        }

        .ind-card-arrow {
          color: #98a7b1;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .ind-sector-card:hover .ind-card-arrow {
          transform: translate(2px, -2px);
          color: var(--ind-blue);
        }

        .ind-sector-card h3 {
          margin: 0;
          color: var(--ind-navy);
          font-size: 20px;
          line-height: 1.35;
          letter-spacing: -0.025em;
        }

        .ind-card-description {
          flex: 1;
          margin: 13px 0 22px;
          color: var(--ind-muted);
          font-size: 13px;
          line-height: 1.85;
        }

        .ind-card-divider {
          height: 1px;
          margin-bottom: 17px;
          background: #e9eef2;
        }

        .ind-card-services-label {
          margin-bottom: 12px;
          color: #8998a3;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .ind-service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 23px;
        }

        .ind-service-tags span {
          padding: 6px 8px;
          border: 1px solid #e2edf4;
          border-radius: 5px;
          background: #f7fbfe;
          color: #526c7b;
          font-size: 10px;
          line-height: 1.4;
        }

        .ind-card-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          padding-top: 15px;
          border-top: 1px solid #edf1f4;
          color: var(--ind-navy);
          font-size: 11px;
          font-weight: 800;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .ind-card-link:hover {
          color: var(--ind-blue);
        }

        /* CAPABILITIES */

        .ind-capabilities {
          padding: 115px 0;
        }

        .ind-capabilities-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 85px;
          align-items: start;
        }

        .ind-capabilities-heading h2 {
          margin-top: 20px;
        }

        .ind-capabilities-heading > p {
          max-width: 410px;
          margin: 21px 0 26px;
          color: var(--ind-muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .ind-capability-list {
          border-top: 1px solid var(--ind-line);
        }

        .ind-capability-row {
          display: grid;
          grid-template-columns: 32px 45px minmax(0, 1fr) 20px;
          align-items: center;
          gap: 17px;
          padding: 24px 0;
          border-bottom: 1px solid var(--ind-line);
        }

        .ind-capability-number {
          color: #91a1ac;
          font-size: 10px;
          font-weight: 800;
        }

        .ind-capability-icon {
          display: flex;
          width: 43px;
          height: 43px;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: var(--ind-pale);
          color: var(--ind-blue);
        }

        .ind-capability-copy h3 {
          margin: 0;
          color: var(--ind-navy);
          font-size: 15px;
        }

        .ind-capability-copy p {
          margin: 7px 0 0;
          color: var(--ind-muted);
          font-size: 12px;
          line-height: 1.7;
        }

        .ind-capability-check {
          color: #67a9d0;
        }

        /* STATEMENT */

        .ind-statement {
          position: relative;
          overflow: hidden;
          padding: 100px 0;
          background:
            radial-gradient(ellipse at 90% 0%, rgba(105, 178, 230, 0.16), transparent 35%),
            linear-gradient(120deg, #102f43, #123b52 70%, #174968);
          color: #ffffff;
        }

        .ind-statement::after {
          content: "";
          position: absolute;
          right: -160px;
          bottom: -310px;
          width: 480px;
          height: 480px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          box-shadow: 0 0 0 50px rgba(255, 255, 255, 0.025);
        }

        .ind-statement-inner {
          position: relative;
          z-index: 1;
        }

        .ind-eyebrow-light {
          color: #d4e8f5;
        }

        .ind-statement h2 {
          margin: 25px 0 37px;
          font-size: clamp(35px, 4.6vw, 59px);
          font-weight: 700;
          line-height: 1.17;
          letter-spacing: -0.045em;
        }

        .ind-statement h2 span {
          color: #8cccf1;
        }

        .ind-statement-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 35px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .ind-statement-bottom p {
          max-width: 500px;
          margin: 0;
          color: #c6d8e3;
          font-size: 14px;
          line-height: 1.9;
        }

        .ind-statement-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          flex: 0 0 auto;
          color: #ffffff;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
        }

        .ind-statement-link:hover {
          color: #8cccf1;
        }

        /* CTA */

        .ind-cta {
          padding: 100px 0;
          background: var(--ind-pale);
        }

        .ind-cta-inner {
          display: grid;
          grid-template-columns: 1fr 0.65fr;
          gap: 80px;
          align-items: center;
        }

        .ind-cta h2 {
          margin: 20px 0 0;
          color: var(--ind-navy);
          font-size: clamp(43px, 5vw, 64px);
          line-height: 1.05;
          letter-spacing: -0.055em;
        }

        .ind-cta h2 span {
          color: var(--ind-blue);
        }

        .ind-cta-content > p {
          margin: 0 0 24px;
          color: var(--ind-muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .ind-cta-note {
          display: block;
          margin-top: 15px;
          color: #7d8c97;
          font-size: 10px;
          line-height: 1.7;
        }

        /* DARK MODE */

        body.dark-mode .industries-page {
          background: #080d12 !important;
          color: #f4f7fa !important;
        }

        body.dark-mode .ind-hero {
          background:
            radial-gradient(ellipse at 85% 20%, rgba(47, 121, 168, 0.18), transparent 35%),
            #0b141c !important;
        }

        body.dark-mode .ind-hero-copy h1,
        body.dark-mode .ind-intro-content h2,
        body.dark-mode .ind-section-heading h2,
        body.dark-mode .ind-capabilities-heading h2,
        body.dark-mode .ind-cta h2 {
          color: #f2f7fb !important;
        }

        body.dark-mode .ind-hero-copy h1 span,
        body.dark-mode .ind-intro-content h2 span,
        body.dark-mode .ind-section-heading h2 span,
        body.dark-mode .ind-capabilities-heading h2 span,
        body.dark-mode .ind-cta h2 span {
          color: #79bfe7 !important;
        }

        body.dark-mode .ind-hero-copy > p,
        body.dark-mode .ind-intro-content > p,
        body.dark-mode .ind-section-heading > p,
        body.dark-mode .ind-capabilities-heading > p,
        body.dark-mode .ind-cta-content > p {
          color: #b0bec9 !important;
        }

        body.dark-mode .ind-text-link {
          color: #d8eaf5 !important;
        }

        body.dark-mode .ind-hero-bottom,
        body.dark-mode .ind-intro,
        body.dark-mode .ind-capabilities {
          background: #080d12 !important;
          color: #e7eef4 !important;
        }

        body.dark-mode .ind-sectors {
          background: #0c151d !important;
        }

        body.dark-mode .ind-sector-card {
          background: #101b24 !important;
          border-color: rgba(255, 255, 255, 0.09) !important;
          box-shadow: none;
        }

        body.dark-mode .ind-sector-card:hover {
          border-color: rgba(105, 178, 230, 0.4) !important;
          box-shadow: 0 18px 38px rgba(0, 0, 0, 0.2);
        }

        body.dark-mode .ind-sector-card h3,
        body.dark-mode .ind-capability-copy h3,
        body.dark-mode .ind-section-kicker strong {
          color: #f0f5f9 !important;
        }

        body.dark-mode .ind-card-description,
        body.dark-mode .ind-capability-copy p {
          color: #aebbc6 !important;
        }

        body.dark-mode .ind-card-divider,
        body.dark-mode .ind-card-link,
        body.dark-mode .ind-capability-list,
        body.dark-mode .ind-capability-row {
          border-color: rgba(255, 255, 255, 0.1) !important;
        }

        body.dark-mode .ind-service-tags span {
          background: #152530 !important;
          border-color: #243a49 !important;
          color: #c3d6e3 !important;
        }

        body.dark-mode .ind-card-link {
          color: #dcebf5 !important;
        }

        body.dark-mode .ind-capability-icon,
        body.dark-mode .ind-card-icon,
        body.dark-mode .ind-section-kicker > span {
          background: #172a37 !important;
          border-color: #294455 !important;
          color: #80c1e8 !important;
        }

        body.dark-mode .ind-button-outline {
          background: #101b24 !important;
          border-color: #334c5d !important;
          color: #f2f7fb !important;
        }

        body.dark-mode .ind-button-outline:hover {
          border-color: #79bfe7 !important;
        }

        body.dark-mode .ind-cta {
          background: #101d27 !important;
        }

        body.dark-mode .ind-cta-note {
          color: #9eafbc !important;
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {
          .ind-hero-grid {
            grid-template-columns: 1fr 0.8fr;
            gap: 25px;
          }

          .ind-sector-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ind-capabilities-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
        }

        @media (max-width: 760px) {
          .ind-container {
            width: calc(100% - 40px);
          }

          .ind-hero {
            padding-top: 65px;
          }

          .ind-hero-grid {
            grid-template-columns: 1fr;
            padding: 55px 0 35px;
          }

          .ind-hero-copy h1 {
            font-size: clamp(42px, 9vw, 64px);
          }

          .ind-hero-visual {
            min-height: 340px;
          }

          .ind-orbit-one {
            width: 270px;
          }

          .ind-orbit-two {
            width: 190px;
          }

          .ind-float-top {
            right: 0;
          }

          .ind-float-bottom {
            left: 0;
          }

          .ind-intro,
          .ind-capabilities {
            padding: 80px 0;
          }

          .ind-intro-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .ind-section-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 20px;
          }

          .ind-sector-grid {
            gap: 13px;
          }

          .ind-sector-card {
            padding: 20px 17px;
          }

          .ind-statement,
          .ind-cta {
            padding: 75px 0;
          }

          .ind-statement-bottom {
            align-items: flex-start;
            flex-direction: column;
          }

          .ind-cta-inner {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 520px) {
          .ind-container {
            width: calc(100% - 32px);
          }

          .ind-sector-grid {
            grid-template-columns: 1fr;
          }

          .ind-sector-card {
            padding: 23px;
          }

          .ind-hero-actions {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
          }

          .ind-hero-bottom {
            justify-content: flex-start;
            gap: 10px;
            font-size: 8px;
          }

          .ind-hero-bottom .ind-bottom-dot {
            width: 3px;
            height: 3px;
          }

          .ind-intro-content h2,
          .ind-section-heading h2,
          .ind-capabilities-heading h2 {
            font-size: 35px;
          }

          .ind-statement h2 {
            font-size: 35px;
          }

          .ind-capability-row {
            grid-template-columns: 23px 38px minmax(0, 1fr);
            gap: 12px;
          }

          .ind-capability-icon {
            width: 38px;
            height: 38px;
          }

          .ind-capability-check {
            display: none;
          }

          .ind-cta h2 {
            font-size: 45px;
          }

          .ind-float-card {
            max-width: 225px;
            padding: 12px;
          }

          .ind-float-card span {
            font-size: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .industries-page *,
          .industries-page *::before,
          .industries-page *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
        /* INDUSTRIES PAGE — DARK MODE */
body.dark-mode .industries-page {
  background: #080d12 !important;
  color: #f4f7fa !important;
}

body.dark-mode .industries-page section {
  background: #080d12 !important;
  color: #f4f7fa !important;
}

body.dark-mode .industries-page h1,
body.dark-mode .industries-page h2,
body.dark-mode .industries-page h3 {
  color: #f4f7fa !important;
}

body.dark-mode .industries-page p {
  color: #aeb9c5 !important;
}

body.dark-mode .industries-page article,
body.dark-mode .industries-page .industry-card {
  background: #101820 !important;
  color: #f4f7fa !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
}
      `}</style>
    </div>
  );
}

export default Industries;
