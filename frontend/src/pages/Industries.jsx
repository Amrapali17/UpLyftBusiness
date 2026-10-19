
import { useEffect } from "react";
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
  Globe2,
  Target,
  Palette,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const industries = [
  {
    number: "01",
    icon: Building2,
    title: "Professional Services",
    description:
      "Build credibility, communicate your expertise and create a digital presence that inspires trust.",
    services: ["Websites", "Brand Identity", "Digital Marketing"],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    alt: "Modern professional office interior",
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description:
      "Showcase your products, create better shopping experiences and connect with customers online.",
    services: ["E-commerce", "Advertising", "Social Media"],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85",
    alt: "Contemporary retail store interior",
  },
  {
    number: "03",
    icon: BriefcaseBusiness,
    title: "B2B Businesses",
    description:
      "Present your value clearly and build a stronger digital foundation for business relationships.",
    services: ["Business Websites", "Strategy", "Marketing"],
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    alt: "Business professionals collaborating",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Startups",
    description:
      "Bring your idea to market with a thoughtful brand identity and digital foundations built to evolve.",
    services: ["Launch Websites", "Branding", "Digital Strategy"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85",
    alt: "Startup team working together",
  },
  {
    number: "05",
    icon: Store,
    title: "Local Businesses",
    description:
      "Help nearby customers discover your business and understand what makes your services valuable.",
    services: ["Business Websites", "Local Visibility", "Advertising"],
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    alt: "Small business team planning together",
  },
  {
    number: "06",
    icon: Layers3,
    title: "Growing Brands",
    description:
      "Create a consistent brand experience across your website, marketing and customer touchpoints.",
    services: ["Creative Design", "Digital Marketing", "Growth Strategy"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    alt: "Digital analytics displayed on a laptop",
  },
];

const capabilities = [
  {
    icon: Globe2,
    number: "01",
    title: "Digital foundations",
    description:
      "Professional websites and digital experiences tailored to your business.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Brand & creative",
    description:
      "Visual identity, creative assets and messaging that make your brand recognizable.",
  },
  {
    icon: Target,
    number: "03",
    title: "Marketing & growth",
    description:
      "Digital campaigns and marketing support aligned with your business objectives.",
  },
];

function Industries() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".industries-page .ind-reveal"
    );

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach((element) =>
        element.classList.add("ind-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ind-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="industries-page">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="ind-hero">
          <div className="ind-hero-orb ind-orb-one" />
          <div className="ind-hero-orb ind-orb-two" />

          <div className="ind-container">
            <div className="ind-eyebrow ind-hero-eyebrow">
              <span className="ind-eyebrow-line" />
              INDUSTRIES WE SERVE
            </div>

            <div className="ind-hero-grid">
              <div className="ind-hero-copy">
                <span className="ind-hero-label">
                  STRATEGY · DESIGN · TECHNOLOGY
                </span>

                <h1>
                  Digital solutions.
                  <br />
                  <span>Built for business.</span>
                </h1>

                <p>
                  Every business has a different goal. We bring technology,
                  creative thinking and digital marketing together to help
                  businesses build a stronger online presence.
                </p>

                <div className="ind-hero-actions">
                  <Link
                    to="/enquire"
                    className="ind-button ind-button-primary"
                  >
                    Discuss your project
                    <ArrowUpRight size={18} />
                  </Link>

                  <Link to="/services" className="ind-text-link">
                    Explore our services
                    <ArrowRight size={17} />
                  </Link>
                </div>

                <div className="ind-trust-line">
                  <span className="ind-trust-icon">
                    <CheckCircle2 size={16} />
                  </span>
                  <span>Solutions shaped around your business goals</span>
                </div>
              </div>

              <div className="ind-hero-visual">
                <div className="ind-hero-photo-wrap">
                  <img
                    className="ind-hero-photo"
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=90"
                    alt="Contemporary glass architecture representing business growth"
                  />
                  <div className="ind-photo-overlay" />
                  <div className="ind-photo-caption">
                    <span className="ind-caption-dot" />
                    <div>
                      <strong>Built around your vision</strong>
                      <span>Digital experiences with purpose</span>
                    </div>
                  </div>
                </div>

                <div className="ind-floating-card ind-floating-top">
                  <div className="ind-floating-icon">
                    <Globe2 size={19} />
                  </div>
                  <div>
                    <strong>Digital presence</strong>
                    <span>Make your brand discoverable</span>
                  </div>
                </div>

                <div className="ind-floating-card ind-floating-bottom">
                  <div className="ind-floating-icon">
                    <Target size={19} />
                  </div>
                  <div>
                    <strong>Business growth</strong>
                    <span>Move forward with purpose</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ind-hero-footer">
              <span>DESIGNED FOR YOUR BUSINESS</span>
              <div className="ind-footer-line" />
              <span>BUILT FOR WHAT COMES NEXT</span>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="ind-intro">
          <div className="ind-container ind-intro-grid ind-reveal">
            <div className="ind-section-label">
              <span>01 / OUR APPROACH</span>
              <div className="ind-label-line" />
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
                your business. We adapt our approach to your needs instead
                of forcing you into a one-size-fits-all package.
              </p>
            </div>
          </div>
        </section>

        {/* INDUSTRY CARDS */}
        <section className="ind-sectors">
          <div className="ind-container">
            <div className="ind-section-heading ind-reveal">
              <div>
                <div className="ind-eyebrow">
                  <span className="ind-eyebrow-line" />
                  WHO WE WORK WITH
                </div>

                <h2>
                  Your industry.
                  <br />
                  <span>Your next opportunity.</span>
                </h2>
              </div>

              <p>
                From early-stage ventures to established businesses, we
                shape digital solutions around the way you work and where
                you want to go.
              </p>
            </div>

            <div className="ind-sector-grid">
              {industries.map((industry, index) => {
                const Icon = industry.icon;

                return (
                  <article
                    className="ind-sector-card ind-reveal"
                    key={industry.number}
                    style={{ "--ind-delay": `${(index % 3) * 100}ms` }}
                  >
                    <Link
                      to="/enquire"
                      className="ind-card-image-link"
                      aria-label={`Discuss a project for ${industry.title}`}
                    >
                      <img
                        className="ind-card-image"
                        src={industry.image}
                        alt={industry.alt}
                        loading="lazy"
                      />

                      <div className="ind-card-image-overlay" />

                      <span className="ind-card-number">
                        {industry.number}
                      </span>

                      <span className="ind-card-image-icon">
                        <Icon size={21} strokeWidth={1.7} />
                      </span>

                      <span className="ind-card-image-arrow">
                        <ArrowUpRight size={19} />
                      </span>

                      <span className="ind-image-title">
                        {industry.title}
                      </span>
                    </Link>

                    <div className="ind-card-body">
                      <p className="ind-card-description">
                        {industry.description}
                      </p>

                      <span className="ind-card-services-label">
                        RELEVANT CAPABILITIES
                      </span>

                      <div className="ind-service-tags">
                        {industry.services.map((service) => (
                          <span key={service}>{service}</span>
                        ))}
                      </div>

                      <Link to="/enquire" className="ind-card-link">
                        Let's discuss your goals
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="ind-capabilities">
          <div className="ind-container ind-capabilities-grid">
            <div className="ind-capabilities-heading ind-reveal">
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
                  <div
                    className="ind-capability-row ind-reveal"
                    key={capability.title}
                    style={{ "--ind-delay": `${index * 100}ms` }}
                  >
                    <span className="ind-capability-number">
                      {capability.number}
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

        {/* STATEMENT */}
        <section className="ind-statement">
          <div className="ind-statement-decoration" />

          <div className="ind-container ind-statement-inner ind-reveal">
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
          <div className="ind-container ind-cta-inner ind-reveal">
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
          --ind-blue: #397da5;
          --ind-sky: #83c5eb;
          --ind-pale: #eef6fb;
          --ind-ink: #192630;
          --ind-muted: #657480;
          --ind-line: #e1e8ed;
          background: #fff;
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
          letter-spacing: .15em;
          line-height: 1.6;
        }

        .ind-eyebrow-line {
          width: 25px;
          height: 2px;
          background: var(--ind-sky);
          flex: 0 0 auto;
        }

        .ind-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          min-height: 49px;
          padding: 0 20px;
          border: 1px solid transparent;
          border-radius: 6px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition: transform .25s ease, background .25s ease,
            border-color .25s ease, color .25s ease;
        }

        .ind-button:hover {
          transform: translateY(-3px);
        }

        .ind-button-primary {
          background: var(--ind-navy);
          color: #fff;
        }

        .ind-button-primary:hover {
          background: var(--ind-blue);
        }

        .ind-button-outline {
          background: transparent;
          border-color: #cbdbe5;
          color: var(--ind-navy);
        }

        .ind-button-outline:hover {
          border-color: var(--ind-blue);
          color: var(--ind-blue);
        }

        .ind-text-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--ind-navy);
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: gap .25s ease, color .25s ease;
        }

        .ind-text-link:hover {
          gap: 13px;
          color: var(--ind-blue);
        }

        /* HERO */

        .ind-hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 84px 0 0;
          background:
            radial-gradient(ellipse at 90% 20%, rgba(131,197,235,.19), transparent 34%),
            linear-gradient(135deg, #f5f9fc, #fff 60%, #edf6fb);
        }

        .ind-hero-orb {
          position: absolute;
          z-index: -1;
          border: 1px solid rgba(57,125,165,.13);
          border-radius: 50%;
          pointer-events: none;
        }

        .ind-orb-one {
          width: 520px;
          height: 520px;
          top: 80px;
          right: -200px;
          box-shadow: 0 0 0 45px rgba(57,125,165,.025),
            0 0 0 90px rgba(57,125,165,.02);
          animation: ind-orbit 24s linear infinite;
        }

        .ind-orb-two {
          width: 230px;
          height: 230px;
          left: -130px;
          bottom: 90px;
          border-style: dashed;
          animation: ind-orbit 35s linear infinite reverse;
        }

        .ind-hero-grid {
          display: grid;
          grid-template-columns: 1.02fr .98fr;
          align-items: center;
          gap: 65px;
          padding: 62px 0 75px;
        }

        .ind-hero-copy {
          position: relative;
          z-index: 2;
          animation: ind-enter-left .8s both;
        }

        .ind-hero-label {
          display: inline-block;
          margin-top: 25px;
          color: #778a97;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .16em;
        }

        .ind-hero-copy h1 {
          margin: 18px 0 23px;
          color: var(--ind-navy);
          font-size: clamp(46px, 5.2vw, 72px);
          font-weight: 760;
          line-height: 1.04;
          letter-spacing: -.06em;
        }

        .ind-hero-copy h1 span {
          color: var(--ind-blue);
        }

        .ind-hero-copy > p {
          max-width: 520px;
          margin: 0;
          color: var(--ind-muted);
          font-size: 15px;
          line-height: 1.95;
        }

        .ind-hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
          margin-top: 31px;
        }

        .ind-trust-line {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 27px;
          color: #6d7c87;
          font-size: 11px;
        }

        .ind-trust-icon {
          display: flex;
          color: var(--ind-blue);
        }

        /* HERO PHOTO */

        .ind-hero-visual {
          position: relative;
          min-width: 0;
          padding: 15px 14px 18px 0;
          animation: ind-enter-right .9s .1s both;
        }

        .ind-hero-photo-wrap {
          position: relative;
          overflow: hidden;
          height: 440px;
          border-radius: 8px;
          background: #d8e6ee;
          box-shadow: 0 30px 70px rgba(18,59,82,.16);
        }

        .ind-hero-photo {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          animation: ind-photo-intro 1.2s ease both;
          transition: transform .8s ease;
        }

        .ind-hero-visual:hover .ind-hero-photo {
          transform: scale(1.045);
        }

        .ind-photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(12,38,54,.03) 25%,
            rgba(12,38,54,.58) 100%
          );
        }

        .ind-photo-caption {
          position: absolute;
          right: 23px;
          bottom: 24px;
          left: 23px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #fff;
        }

        .ind-caption-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #9bd7f5;
          box-shadow: 0 0 0 5px rgba(155,215,245,.17);
          flex: 0 0 auto;
        }

        .ind-photo-caption div {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .ind-photo-caption strong {
          font-size: 14px;
        }

        .ind-photo-caption span:not(.ind-caption-dot) {
          color: #e0ebf2;
          font-size: 11px;
        }

        .ind-floating-card {
          position: absolute;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 13px 15px;
          border: 1px solid rgba(222,235,243,.95);
          border-radius: 8px;
          background: rgba(255,255,255,.96);
          box-shadow: 0 13px 35px rgba(18,59,82,.12);
          animation: ind-float 5s ease-in-out infinite;
        }

        .ind-floating-top {
          top: 48px;
          right: -17px;
        }

        .ind-floating-bottom {
          bottom: 68px;
          left: -28px;
          animation-delay: -2.5s;
        }

        .ind-floating-icon {
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border-radius: 7px;
          background: #edf6fb;
          color: var(--ind-blue);
        }

        .ind-floating-card div:last-child {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ind-floating-card strong {
          color: var(--ind-navy);
          font-size: 11px;
        }

        .ind-floating-card span {
          color: var(--ind-muted);
          font-size: 9px;
        }

        .ind-hero-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          padding: 20px 0;
          border-top: 1px solid rgba(18,59,82,.11);
          color: #788995;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .14em;
        }

        .ind-footer-line {
          height: 1px;
          flex: 1;
          background: #dce6ec;
        }

        /* REVEAL ANIMATION */

        .ind-reveal {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity .7s ease, transform .7s ease;
          transition-delay: var(--ind-delay, 0ms);
        }

        .ind-reveal.ind-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* INTRO */

        .ind-intro {
          padding: 105px 0 115px;
          background: #fff;
        }

        .ind-intro-grid {
          display: grid;
          grid-template-columns: .65fr 1.35fr;
          gap: 70px;
        }

        .ind-section-label {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 17px;
          color: #7b8b96;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .13em;
        }

        .ind-label-line {
          width: 42px;
          height: 2px;
          background: var(--ind-sky);
        }

        .ind-intro-content h2,
        .ind-section-heading h2,
        .ind-capabilities-heading h2 {
          margin: 0;
          color: var(--ind-navy);
          font-size: clamp(34px, 4vw, 50px);
          line-height: 1.16;
          letter-spacing: -.045em;
        }

        .ind-intro-content h2 span,
        .ind-section-heading h2 span,
        .ind-capabilities-heading h2 span {
          color: var(--ind-blue);
        }

        .ind-intro-content > p {
          max-width: 720px;
          margin: 22px 0 0;
          color: var(--ind-muted);
          font-size: 14px;
          line-height: 1.95;
        }

        /* INDUSTRY GRID */

        .ind-sectors {
          padding: 100px 0 115px;
          background: #f5f8fa;
        }

        .ind-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 45px;
          margin-bottom: 42px;
        }

        .ind-section-heading h2 {
          margin-top: 20px;
        }

        .ind-section-heading > p {
          max-width: 410px;
          margin: 0 0 5px;
          color: var(--ind-muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .ind-sector-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .ind-sector-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid #e3eaf0;
          border-radius: 9px;
          background: #fff;
          box-shadow: 0 5px 18px rgba(18,59,82,.025);
          transition: transform .3s ease, box-shadow .3s ease,
            border-color .3s ease;
        }

        .ind-sector-card:hover {
          transform: translateY(-6px);
          border-color: #c4dce9;
          box-shadow: 0 20px 42px rgba(18,59,82,.09);
        }

        .ind-card-image-link {
          position: relative;
          display: block;
          height: 225px;
          overflow: hidden;
          background: #dce8ef;
          text-decoration: none;
        }

        .ind-card-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .65s cubic-bezier(.2,.7,.2,1);
        }

        .ind-sector-card:hover .ind-card-image {
          transform: scale(1.075);
        }

        .ind-card-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(10,35,50,.28) 0%,
            rgba(10,35,50,0) 35%,
            rgba(10,35,50,.8) 100%
          );
          transition: opacity .3s ease;
        }

        .ind-sector-card:hover .ind-card-image-overlay {
          background: linear-gradient(
            180deg,
            rgba(10,35,50,.32) 0%,
            rgba(10,35,50,.02) 30%,
            rgba(10,35,50,.86) 100%
          );
        }

        .ind-card-number {
          position: absolute;
          top: 16px;
          left: 17px;
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .12em;
        }

        .ind-card-image-icon {
          position: absolute;
          top: 13px;
          right: 14px;
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border: 1px solid rgba(255,255,255,.35);
          border-radius: 7px;
          background: rgba(14,42,59,.32);
          color: #fff;
          backdrop-filter: blur(8px);
          transition: background .25s ease, transform .25s ease;
        }

        .ind-sector-card:hover .ind-card-image-icon {
          background: var(--ind-blue);
          transform: translateY(-2px);
        }

        .ind-card-image-arrow {
          position: absolute;
          right: 15px;
          bottom: 16px;
          display: grid;
          width: 34px;
          height: 34px;
          place-items: center;
          border-radius: 50%;
          background: #fff;
          color: var(--ind-navy);
          opacity: 0;
          transform: translate(-5px, 5px);
          transition: opacity .25s ease, transform .25s ease;
        }

        .ind-sector-card:hover .ind-card-image-arrow,
        .ind-card-image-link:focus-visible .ind-card-image-arrow {
          opacity: 1;
          transform: translate(0, 0);
        }

        .ind-image-title {
          position: absolute;
          right: 17px;
          bottom: 17px;
          left: 17px;
          color: #fff;
          font-size: 19px;
          font-weight: 750;
          line-height: 1.3;
          letter-spacing: -.025em;
          transition: transform .25s ease;
        }

        .ind-sector-card:hover .ind-image-title {
          transform: translateY(-2px);
        }

        .ind-card-body {
          padding: 20px 20px 18px;
        }

        .ind-card-description {
          min-height: 74px;
          margin: 0 0 19px;
          color: var(--ind-muted);
          font-size: 12px;
          line-height: 1.85;
        }

        .ind-card-services-label {
          display: block;
          margin-bottom: 11px;
          color: #8997a1;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .11em;
        }

        .ind-service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }

        .ind-service-tags span {
          padding: 6px 8px;
          border: 1px solid #e1eaf0;
          border-radius: 4px;
          background: #f6fafc;
          color: #526a79;
          font-size: 9px;
          line-height: 1.4;
        }

        .ind-card-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding-top: 14px;
          border-top: 1px solid #e9eef2;
          color: var(--ind-navy);
          font-size: 11px;
          font-weight: 800;
          text-decoration: none;
          transition: color .2s ease;
        }

        .ind-card-link svg {
          transition: transform .2s ease;
        }

        .ind-card-link:hover {
          color: var(--ind-blue);
        }

        .ind-card-link:hover svg {
          transform: translateX(4px);
        }

        /* CAPABILITIES */

        .ind-capabilities {
          padding: 110px 0;
          background: #fff;
        }

        .ind-capabilities-grid {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          align-items: start;
          gap: 85px;
        }

        .ind-capabilities-heading h2 {
          margin-top: 20px;
        }

        .ind-capabilities-heading > p {
          max-width: 410px;
          margin: 21px 0 27px;
          color: var(--ind-muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .ind-capability-list {
          border-top: 1px solid var(--ind-line);
        }

        .ind-capability-row {
          display: grid;
          grid-template-columns: 30px 44px minmax(0, 1fr) 20px;
          align-items: center;
          gap: 16px;
          padding: 24px 0;
          border-bottom: 1px solid var(--ind-line);
        }

        .ind-capability-number {
          color: #91a1ac;
          font-size: 10px;
          font-weight: 800;
        }

        .ind-capability-icon {
          display: grid;
          width: 43px;
          height: 43px;
          place-items: center;
          border-radius: 8px;
          background: var(--ind-pale);
          color: var(--ind-blue);
        }

        .ind-capability-copy h3 {
          margin: 0;
          color: var(--ind-navy);
          font-size: 14px;
        }

        .ind-capability-copy p {
          margin: 7px 0 0;
          color: var(--ind-muted);
          font-size: 12px;
          line-height: 1.75;
        }

        .ind-capability-check {
          color: #6caed4;
        }

        /* BRAND STATEMENT */

        .ind-statement {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 100px 0;
          background: linear-gradient(115deg, #102f43, #123b52 72%, #194c69);
          color: #fff;
        }

        .ind-statement-decoration {
          position: absolute;
          z-index: -1;
          top: -300px;
          right: -130px;
          width: 650px;
          height: 650px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
          box-shadow: 0 0 0 55px rgba(255,255,255,.025),
            0 0 0 110px rgba(255,255,255,.02);
          animation: ind-orbit 35s linear infinite;
        }

        .ind-statement-inner {
          position: relative;
        }

        .ind-eyebrow-light {
          color: #d6e9f4;
        }

        .ind-statement h2 {
          margin: 25px 0 36px;
          color: #fff;
          font-size: clamp(34px, 4.5vw, 57px);
          font-weight: 720;
          line-height: 1.17;
          letter-spacing: -.045em;
        }

        .ind-statement h2 span {
          color: #8cccf1;
        }

        .ind-statement-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 35px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,.17);
        }

        .ind-statement-bottom p {
          max-width: 500px;
          margin: 0;
          color: #c5d9e5;
          font-size: 13px;
          line-height: 1.9;
        }

        .ind-statement-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          flex: 0 0 auto;
          color: #fff;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
          transition: color .2s ease, gap .2s ease;
        }

        .ind-statement-link:hover {
          gap: 13px;
          color: #8cccf1;
        }

        /* CTA */

        .ind-cta {
          padding: 95px 0;
          background: var(--ind-pale);
        }

        .ind-cta-inner {
          display: grid;
          grid-template-columns: 1fr .65fr;
          align-items: center;
          gap: 80px;
        }

        .ind-cta h2 {
          margin: 20px 0 0;
          color: var(--ind-navy);
          font-size: clamp(42px, 5vw, 63px);
          line-height: 1.06;
          letter-spacing: -.055em;
        }

        .ind-cta h2 span {
          color: var(--ind-blue);
        }

        .ind-cta-content > p {
          margin: 0 0 24px;
          color: var(--ind-muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .ind-cta-note {
          display: block;
          margin-top: 14px;
          color: #7c8c97;
          font-size: 10px;
        }

        /* DARK MODE */

        body.dark-mode .industries-page {
          background: #080e13;
          color: #f2f6f9;
        }

        body.dark-mode .ind-hero {
          background:
            radial-gradient(ellipse at 90% 20%, rgba(57,125,165,.18), transparent 35%),
            #0b141c;
        }

        body.dark-mode .ind-hero-copy h1,
        body.dark-mode .ind-intro-content h2,
        body.dark-mode .ind-section-heading h2,
        body.dark-mode .ind-capabilities-heading h2,
        body.dark-mode .ind-cta h2 {
          color: #f2f6f9;
        }

        body.dark-mode .ind-hero-copy h1 span,
        body.dark-mode .ind-intro-content h2 span,
        body.dark-mode .ind-section-heading h2 span,
        body.dark-mode .ind-capabilities-heading h2 span,
        body.dark-mode .ind-cta h2 span {
          color: #83c5eb;
        }

        body.dark-mode .ind-hero-copy > p,
        body.dark-mode .ind-intro-content > p,
        body.dark-mode .ind-section-heading > p,
        body.dark-mode .ind-capabilities-heading > p,
        body.dark-mode .ind-cta-content > p,
        body.dark-mode .ind-card-description,
        body.dark-mode .ind-capability-copy p {
          color: #b0bec9;
        }

        body.dark-mode .ind-hero-footer,
        body.dark-mode .ind-intro,
        body.dark-mode .ind-capabilities {
          background: #080e13;
          color: #e6edf2;
        }

        body.dark-mode .ind-sectors {
          background: #0c151d;
        }

        body.dark-mode .ind-sector-card {
          background: #101b24;
          border-color: rgba(255,255,255,.09);
          box-shadow: none;
        }

        body.dark-mode .ind-sector-card:hover {
          border-color: rgba(131,197,235,.4);
          box-shadow: 0 18px 38px rgba(0,0,0,.22);
        }

        body.dark-mode .ind-card-link,
        body.dark-mode .ind-capability-copy h3 {
          color: #edf4f8;
        }

        body.dark-mode .ind-card-link,
        body.dark-mode .ind-capability-list,
        body.dark-mode .ind-capability-row {
          border-color: rgba(255,255,255,.1);
        }

        body.dark-mode .ind-service-tags span {
          background: #152530;
          border-color: #29404f;
          color: #c3d6e3;
        }

        body.dark-mode .ind-capability-icon {
          background: #172a37;
          color: #83c5eb;
        }

        body.dark-mode .ind-button-outline {
          background: #101b24;
          border-color: #334c5d;
          color: #f2f7fb;
        }

        body.dark-mode .ind-cta {
          background: #101d27;
        }

        body.dark-mode .ind-cta-note {
          color: #9eafbc;
        }

        body.dark-mode .ind-text-link {
          color: #d8eaf5;
        }

        body.dark-mode .ind-trust-line,
        body.dark-mode .ind-section-label {
          color: #a9bac6;
        }

        body.dark-mode .ind-footer-line {
          background: #293b47;
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {
          .ind-hero-grid {
            grid-template-columns: 1fr .9fr;
            gap: 35px;
          }

          .ind-hero-photo-wrap {
            height: 390px;
          }

          .ind-floating-top {
            right: -8px;
          }

          .ind-floating-bottom {
            left: -15px;
          }

          .ind-sector-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ind-capabilities-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }
        }

        @media (max-width: 760px) {
          .ind-container {
            width: calc(100% - 40px);
          }

          .ind-hero {
            padding-top: 60px;
          }

          .ind-hero-grid {
            grid-template-columns: 1fr;
            gap: 35px;
            padding: 48px 0 40px;
          }

          .ind-hero-copy h1 {
            font-size: clamp(43px, 8vw, 62px);
          }

          .ind-hero-photo-wrap {
            height: 390px;
          }

          .ind-floating-top {
            right: -5px;
          }

          .ind-floating-bottom {
            left: -5px;
            bottom: 42px;
          }

          .ind-intro,
          .ind-capabilities {
            padding: 75px 0;
          }

          .ind-intro-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .ind-section-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 20px;
          }

          .ind-sectors {
            padding: 75px 0;
          }

          .ind-sector-grid {
            gap: 15px;
          }

          .ind-card-image-link {
            height: 210px;
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
            gap: 28px;
          }
        }

        @media (max-width: 520px) {
          .ind-container {
            width: calc(100% - 32px);
          }

          .ind-hero-copy h1 {
            font-size: 42px;
          }

          .ind-hero-actions {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
          }

          .ind-hero-photo-wrap {
            height: 330px;
          }

          .ind-floating-card {
            padding: 10px;
          }

          .ind-floating-top {
            top: 25px;
          }

          .ind-floating-bottom {
            bottom: 25px;
          }

          .ind-floating-card span {
            font-size: 9px;
          }

          .ind-hero-footer {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
          }

          .ind-footer-line {
            width: 35px;
            flex: none;
          }

          .ind-sector-grid {
            grid-template-columns: 1fr;
          }

          .ind-card-image-link {
            height: 235px;
          }

          .ind-card-body {
            padding: 19px;
          }

          .ind-card-description {
            min-height: 0;
          }

          .ind-intro-content h2,
          .ind-section-heading h2,
          .ind-capabilities-heading h2,
          .ind-statement h2 {
            font-size: 34px;
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
            font-size: 44px;
          }
        }

        /* KEYFRAMES + ACCESSIBILITY */

        @keyframes ind-enter-left {
          from { opacity: 0; transform: translateX(-22px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes ind-enter-right {
          from { opacity: 0; transform: translateX(22px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes ind-photo-intro {
          from { transform: scale(1.07); }
          to { transform: scale(1); }
        }

        @keyframes ind-float {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -8px; }
        }

        @keyframes ind-orbit {
          from { rotate: 0deg; }
          to { rotate: 360deg; }
        }

        @media (prefers-reduced-motion: reduce) {
          .industries-page *,
          .industries-page *::before,
          .industries-page *::after {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }

          .industries-page .ind-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Industries;
