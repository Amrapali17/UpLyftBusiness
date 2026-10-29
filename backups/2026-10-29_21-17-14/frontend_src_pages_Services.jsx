
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Megaphone,
  Share2,
  Target,
  MessageCircle,
  TrendingUp,
  Check,
  Sparkles,
  MoveUpRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    short: "Digital experiences built to perform.",
    description:
      "Modern websites and digital platforms designed around your business goals.",
    icon: Code2,
    points: ["Business Websites", "Web Applications", "Landing Pages"],
    tag: "BUILD",
    accent: "#9dc8ee",
  },
  {
    id: "digital-marketing",
    number: "02",
    title: "Digital Marketing",
    short: "Make your business impossible to ignore.",
    description:
      "Build your online visibility and connect with the right audience.",
    icon: Megaphone,
    points: ["SEO", "Marketing Strategy", "Online Visibility"],
    tag: "REACH",
    accent: "#b6c8ff",
  },
  {
    id: "social-media-management",
    number: "03",
    title: "Social Media Management",
    short: "Turn attention into brand value.",
    description:
      "Build a consistent and recognisable presence across social platforms.",
    icon: Share2,
    points: ["Content Strategy", "Content Creation", "Community"],
    tag: "CONNECT",
    accent: "#a9ded5",
  },
  {
    id: "advertising-performance",
    number: "04",
    title: "Performance Advertising",
    short: "Spend smarter. Scale faster.",
    description:
      "Create and manage advertising campaigns focused on measurable outcomes.",
    icon: Target,
    points: ["Meta Ads", "Google Ads", "Campaign Tracking"],
    tag: "PERFORM",
    accent: "#e2c4a3",
  },
  {
    id: "whatsapp-automation",
    number: "05",
    title: "WhatsApp Automation",
    short: "Give your business a distinctive identity.",
    description:
      "Automate WhatsApp replies, follow-ups, and customer chats. Save time and boost customer engagement effortlessly.",
    icon: MessageCircle,
    points: ["Auto Replies", "Chatbots", "Lead Follow-ups"],
    tag: "AUTOMATE",
    accent: "#a9d7f4",
  },
  {
    id: "growth-strategy",
    number: "06",
    title: "Growth & Strategy",
    short: "Turn ambition into a clear direction.",
    description:
      "Identify opportunities and build a practical direction for business growth.",
    icon: TrendingUp,
    points: ["Growth Strategy", "Business Consulting", "Market Research"],
    tag: "GROW",
    accent: "#a9d7f4",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = services.length;
  const current = services[active];

  const nextSlide = () => {
    setActive((index) => (index + 1) % total);
  };

  const previousSlide = () => {
    setActive((index) => (index - 1 + total) % total);
  };

  useEffect(() => {
    if (paused) return undefined;

    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % total);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [paused, total]);

  return (
    <>
      <Navbar />

      <main className="up-services">
        {/* HERO */}
        <section className="up-services-hero">
          <div className="up-hero-grid" />
          <div className="up-hero-orb up-orb-one" />
          <div className="up-hero-orb up-orb-two" />

          <div className="up-hero-inner">
            <div className="up-eyebrow up-reveal">
              <span className="up-eyebrow-dot" />
              UPLYFTBUSINESS
              <span className="up-eyebrow-divider">/</span>
              OUR SERVICES
            </div>

            <h1 className="up-reveal up-reveal-delay">
              Digital solutions
              <br />
              that move business
              <br />
              <span>forward.</span>
            </h1>

            <div className="up-hero-bottom up-reveal up-reveal-delay-two">
              <p>
                Technology, creativity and strategy — working together to
                turn your ideas into meaningful digital progress.
              </p>

              <Link to="/enquire" className="up-primary-button">
                Let's build something
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="up-hero-bottom-line">
              <span>STRATEGY</span>
              <span className="up-line-dot" />
              <span>TECHNOLOGY</span>
              <span className="up-line-dot" />
              <span>CREATIVITY</span>
            </div>
          </div>

          <div className="up-hero-index">01 — OUR EXPERTISE</div>
          <div className="up-hero-scroll">EXPLORE WHAT WE DO ↓</div>
        </section>

        {/* INTRODUCTION */}
        <section className="up-intro-section">
          <div className="up-intro-label">
            <Sparkles size={15} />
            MORE THAN JUST SERVICES
          </div>

          <div className="up-intro-grid">
            <h2>
              The right tools.
              <br />
              <span>The right direction.</span>
            </h2>

            <div className="up-intro-copy">
              <p>
                Every business has a different story. We bring together the
                digital capabilities to help you tell yours, reach the right
                people and build for what comes next.
              </p>
              <span className="up-intro-signature">
                BUILT AROUND YOUR BUSINESS.
              </span>
            </div>
          </div>
        </section>

        {/* INTERACTIVE SERVICES CAROUSEL */}
        <section className="up-service-section">
          <div className="up-section-heading">
            <div>
              <span className="up-section-label">01 / WHAT WE DO</span>
              <h2>
                One partner.
                <br />
                <span>Multiple capabilities.</span>
              </h2>
            </div>

            <p className="up-section-intro">
              Explore our capabilities. Select any service to discover how
              it can support your business.
            </p>
          </div>

          <div
            className="up-carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setPaused(false);
              }
            }}
          >
            <div className="up-carousel-topline">
              <span>EXPLORE OUR CAPABILITIES</span>
              <span className="up-carousel-auto">
                <span className={`up-live-dot ${paused ? "is-paused" : ""}`} />
                {paused ? "PAUSED" : "AUTO EXPLORING"}
              </span>
            </div>

            <div className="up-carousel-window">
              <div className="up-carousel-track">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  const position = (index - active + total) % total;

                  let positionClass = "up-card-hidden";

                  if (position === 0) {
                    positionClass = "up-card-active";
                  } else if (position === 1) {
                    positionClass = "up-card-next";
                  } else if (position === total - 1) {
                    positionClass = "up-card-previous";
                  }

                  return (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className={`up-service-card ${positionClass}`}
                      style={{ "--service-accent": service.accent }}
                      aria-label={`Explore ${service.title}`}
                      aria-current={position === 0 ? "true" : undefined}
                      onClick={() => setActive(index)}
                      onKeyDown={(event) => {
                        if (event.key === " ") {
                          event.preventDefault();
                          window.location.href = `/services/${service.id}`;
                        }
                      }}
                    >
                      <div className="up-card-glow" />

                      <div className="up-card-top">
                        <span className="up-card-number">
                          {service.number}
                          <span className="up-card-slash">/</span> 06
                        </span>

                        <span className="up-card-icon">
                          <Icon size={28} strokeWidth={1.5} />
                        </span>
                      </div>

                      <div className="up-card-main">
                        <span className="up-card-kicker">
                          <span className="up-kicker-line" />
                          {service.tag} YOUR DIGITAL PRESENCE
                        </span>

                        <h3>{service.title}</h3>
                        <p>{service.short}</p>

                        <div className="up-card-points">
                          {service.points.map((point) => (
                            <span key={point}>
                              <Check size={13} />
                              {point}
                            </span>
                          ))}
                        </div>

                        <span className="up-card-link">
                          Explore service
                          <span className="up-card-link-icon">
                            <ArrowUpRight size={18} />
                          </span>
                        </span>
                      </div>

                      <span className="up-card-watermark">
                        {service.number}
                      </span>

                      <span className="up-card-bottom-line" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="up-carousel-controls">
              <div className="up-carousel-status">
                <span className="up-status-number">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="up-status-divider">/</span>
                <span>06 SERVICES</span>
              </div>

              <div className="up-carousel-indicators" aria-label="Choose service">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    type="button"
                    className={`up-indicator ${index === active ? "is-active" : ""}`}
                    onClick={() => setActive(index)}
                    aria-label={`Show ${service.title}`}
                    aria-pressed={index === active}
                  >
                    <span />
                  </button>
                ))}
              </div>

              <div className="up-carousel-arrows">
                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Previous service"
                  className="up-arrow-button"
                >
                  <ArrowLeft size={19} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next service"
                  className="up-arrow-button up-arrow-button-primary"
                >
                  <ArrowRight size={19} />
                </button>
              </div>
            </div>

            <div className="up-carousel-progress">
              <span
                key={active}
                className={`up-carousel-progress-fill ${paused ? "is-paused" : ""}`}
                style={{ animationDuration: "4.5s" }}
              />
            </div>
          </div>

          <div className="up-carousel-caption">
            <span className="up-caption-number">{current.number}</span>
            <p>{current.description}</p>
            <Link to={`/services/${current.id}`} className="up-caption-link">
              Discover this service <MoveUpRight size={16} />
            </Link>
          </div>
        </section>

        {/* ALL SERVICES */}
        <section className="up-all-services">
          <div className="up-all-services-heading">
            <div>
              <span className="up-section-label">02 / OUR CAPABILITIES</span>
              <h2>
                Everything we do.
                <br />
                <span>One clear purpose.</span>
              </h2>
            </div>

            <span className="up-total-services">06 CAPABILITIES</span>
          </div>

          <div className="up-services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="up-capability-card"
                  style={{ "--service-accent": service.accent }}
                >
                  <div className="up-capability-top">
                    <span>{service.number} / 06</span>
                    <span className="up-capability-icon">
                      <Icon size={23} strokeWidth={1.6} />
                    </span>
                  </div>

                  <div className="up-capability-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>

                  <div className="up-capability-bottom">
                    <span>Explore capability</span>
                    <span className="up-capability-arrow">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="up-services-cta">
          <div className="up-cta-grid" />
          <div className="up-cta-orb" />

          <div className="up-cta-content">
            <span className="up-section-label">
              <span className="up-cta-dot" />
              03 / YOUR NEXT MOVE
            </span>

            <h2>
              Ready to move
              <br />
              your business
              <br />
              <span>forward?</span>
            </h2>

            <p>
              Have an idea, a challenge or a goal? Let's figure out the
              right digital solution together.
            </p>

            <Link to="/enquire" className="up-primary-button up-cta-button">
              Tell us about your project
              <ArrowUpRight size={19} />
            </Link>

            <span className="up-cta-footnote">
              YOUR VISION. OUR CAPABILITIES. ONE NEXT STEP.
            </span>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .up-services {
          --up-bg: #f5f7fa;
          --up-surface: #ffffff;
          --up-text: #111d2a;
          --up-muted: #6e7d8c;
          --up-line: #dce4eb;
          --up-navy: #091725;
          --up-steel: #91b9d9;
          position: relative;
          overflow: hidden;
          background: var(--up-bg);
          color: var(--up-text);
          font-family: inherit;
          transition: background .3s ease, color .3s ease;
        }

        .up-services *,
        .up-services *::before,
        .up-services *::after {
          box-sizing: border-box;
        }

        .up-services a,
        .up-services button {
          -webkit-tap-highlight-color: transparent;
        }

        .up-services a:focus-visible,
        .up-services button:focus-visible {
          outline: 2px solid #80b5df;
          outline-offset: 5px;
        }

        /* HERO */
        .up-services-hero {
          position: relative;
          min-height: 690px;
          display: flex;
          align-items: center;
          isolation: isolate;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 82% 28%, rgba(75, 119, 155, .2), transparent 36%),
            linear-gradient(120deg, #081521 0%, #0b1d2d 55%, #10283a 100%);
          color: #f8fbff;
        }

        .up-hero-grid,
        .up-cta-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(219, 235, 249, .055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(219, 235, 249, .055) 1px, transparent 1px);
          background-size: 58px 58px;
          mask-image: linear-gradient(to bottom, black, transparent 95%);
        }

        .up-hero-orb {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          opacity: .14;
          animation: upOrbFloat 9s ease-in-out infinite alternate;
        }

        .up-orb-one {
          top: 10%;
          right: -100px;
          background: #7cb8e6;
        }

        .up-orb-two {
          bottom: -250px;
          left: 35%;
          background: #6c92d1;
          animation-delay: -4s;
        }

        .up-hero-inner {
          position: relative;
          z-index: 1;
          width: min(1220px, 90%);
          margin: auto;
          padding: 135px 0 100px;
        }

        .up-eyebrow {
          display: flex;
          align-items: center;
          gap: 11px;
          color: #b5c5d2;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 2.2px;
          margin-bottom: 37px;
        }

        .up-eyebrow-dot,
        .up-cta-dot {
          width: 7px;
          height: 7px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #a4c9e7;
          box-shadow: 0 0 15px rgba(145, 195, 231, .6);
        }

        .up-eyebrow-divider {
          color: #5b7183;
        }

        .up-hero-inner h1 {
          max-width: 1050px;
          font-size: clamp(52px, 7.5vw, 98px);
          line-height: .99;
          letter-spacing: -5px;
          font-weight: 740;
          margin: 0;
          animation: upTextReveal .8s both;
        }

        .up-hero-inner h1 span {
          color: #9bc5e5;
          background: linear-gradient(100deg, #b7d9f3, #7da9ce);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .up-hero-bottom {
          max-width: 960px;
          margin-top: 39px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .up-hero-bottom p {
          max-width: 430px;
          color: #b4c2ce;
          font-size: 16px;
          line-height: 1.9;
          margin: 0;
        }

        .up-primary-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-shrink: 0;
          padding: 17px 22px;
          background: #f4f8fb;
          color: #0b1a27;
          text-decoration: none;
          font-size: 13px;
          font-weight: 750;
          border: 1px solid rgba(255,255,255,.25);
          transition: transform .25s ease, background .25s ease, box-shadow .25s ease;
        }

        .up-primary-button svg {
          transition: transform .25s ease;
        }

        .up-primary-button:hover {
          background: #dcecf8;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0,0,0,.18);
        }

        .up-primary-button:hover svg {
          transform: translate(3px, -3px);
        }

        .up-hero-bottom-line {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-top: 72px;
          color: #8ea2b3;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .up-line-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #7695ad;
        }

        .up-hero-index,
        .up-hero-scroll {
          position: absolute;
          bottom: 27px;
          color: #8094a5;
          font-size: 9px;
          letter-spacing: 1.7px;
        }

        .up-hero-index {
          right: 5%;
        }

        .up-hero-scroll {
          left: 5%;
        }

        .up-reveal {
          animation: upTextReveal .7s both;
        }

        .up-reveal-delay {
          animation-delay: .12s;
        }

        .up-reveal-delay-two {
          animation-delay: .23s;
        }

        /* INTRO */
        .up-intro-section {
          width: min(1220px, 90%);
          margin: auto;
          padding: 92px 0 95px;
          border-bottom: 1px solid var(--up-line);
        }

        .up-intro-label {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #71869a;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1.8px;
        }

        .up-intro-label svg {
          color: #739fc1;
        }

        .up-intro-grid {
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          align-items: end;
          gap: 70px;
          margin-top: 27px;
        }

        .up-intro-grid h2 {
          font-size: clamp(42px, 5.6vw, 68px);
          line-height: 1.02;
          letter-spacing: -3.5px;
          margin: 0;
          font-weight: 730;
        }

        .up-intro-grid h2 span {
          color: #8195a6;
        }

        .up-intro-copy p {
          color: var(--up-muted);
          font-size: 15px;
          line-height: 1.95;
          margin: 0 0 23px;
        }

        .up-intro-signature {
          color: #71869a;
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 1.5px;
        }

        /* SHARED SECTION HEADINGS */
        .up-service-section,
        .up-all-services {
          width: min(1220px, 90%);
          margin: auto;
        }

        .up-service-section {
          padding: 105px 0 65px;
        }

        .up-section-label {
          color: #758797;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1.8px;
        }

        .up-section-heading,
        .up-all-services-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
        }

        .up-section-heading {
          margin-bottom: 45px;
        }

        .up-section-heading h2,
        .up-all-services-heading h2 {
          font-size: clamp(42px, 5.4vw, 68px);
          line-height: 1;
          letter-spacing: -3.3px;
          margin: 18px 0 0;
          font-weight: 730;
        }

        .up-section-heading h2 span,
        .up-all-services-heading h2 span {
          color: #8396a7;
        }

        .up-section-intro {
          max-width: 360px;
          color: var(--up-muted);
          font-size: 14px;
          line-height: 1.9;
          margin: 0 0 3px;
        }

        /* CAROUSEL */
        .up-carousel {
          position: relative;
          padding: 0 0 5px;
        }

        .up-carousel-topline {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding-bottom: 15px;
          color: #82919d;
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 1.4px;
        }

        .up-carousel-auto {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .up-live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6fa6cd;
          box-shadow: 0 0 0 4px rgba(111,166,205,.13);
          animation: upPulse 1.8s ease-in-out infinite;
        }

        .up-live-dot.is-paused {
          animation: none;
          background: #8995a0;
          box-shadow: none;
        }

        .up-carousel-window {
          position: relative;
          overflow: hidden;
          padding: 8px 0 14px;
        }

        .up-carousel-track {
          position: relative;
          height: 430px;
          isolation: isolate;
        }

        .up-service-card {
          position: absolute;
          top: 0;
          left: 50%;
          width: 73%;
          height: 410px;
          padding: clamp(24px, 3.5vw, 43px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          isolation: isolate;
          background:
            radial-gradient(ellipse at 90% 10%, color-mix(in srgb, var(--service-accent) 13%, transparent), transparent 40%),
            linear-gradient(135deg, #0a1927, #0e2435 70%, #10283a);
          border: 1px solid rgba(159,192,219,.23);
          color: #f7faff;
          text-decoration: none;
          box-shadow: 0 24px 65px rgba(9, 25, 39, .12);
          transition:
            transform .7s cubic-bezier(.2,.8,.2,1),
            opacity .7s ease,
            filter .7s ease,
            box-shadow .35s ease,
            border-color .35s ease;
          will-change: transform, opacity;
        }

        .up-service-card:hover {
          border-color: color-mix(in srgb, var(--service-accent) 70%, transparent);
          box-shadow: 0 28px 80px rgba(9,25,39,.24);
        }

        .up-card-active {
          z-index: 3;
          opacity: 1;
          transform: translateX(-50%) scale(1);
          filter: none;
          pointer-events: auto;
        }

        .up-card-next {
          z-index: 2;
          opacity: .75;
          transform: translateX(36%) scale(.92);
          filter: brightness(.76);
          pointer-events: auto;
        }

        .up-card-previous {
          z-index: 1;
          opacity: .6;
          transform: translateX(-136%) scale(.92);
          filter: brightness(.72);
          pointer-events: auto;
        }

        .up-card-hidden {
          z-index: 0;
          opacity: 0;
          transform: translateX(150%) scale(.84);
          pointer-events: none;
        }

        .up-card-glow {
          position: absolute;
          z-index: -1;
          top: -130px;
          right: -100px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: var(--service-accent);
          filter: blur(105px);
          opacity: .08;
          transition: opacity .35s ease, transform .7s ease;
        }

        .up-service-card:hover .up-card-glow {
          opacity: .2;
          transform: scale(1.25);
        }

        .up-card-top {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          color: #9baebb;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.7px;
        }

        .up-card-number {
          display: inline-flex;
          gap: 7px;
          align-items: center;
        }

        .up-card-slash {
          color: #5d7486;
        }

        .up-card-icon {
          display: grid;
          place-items: center;
          width: 53px;
          height: 53px;
          border: 1px solid color-mix(in srgb, var(--service-accent) 38%, transparent);
          color: var(--service-accent);
          background: color-mix(in srgb, var(--service-accent) 8%, transparent);
          transition: transform .35s ease, background .35s ease;
        }

        .up-service-card:hover .up-card-icon {
          transform: rotate(-7deg) scale(1.07);
          background: color-mix(in srgb, var(--service-accent) 15%, transparent);
        }

        .up-card-main {
          position: relative;
          z-index: 1;
          max-width: 590px;
          padding-bottom: 3px;
        }

        .up-card-kicker {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--service-accent);
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 1.7px;
        }

        .up-kicker-line {
          width: 20px;
          height: 1px;
          background: var(--service-accent);
        }

        .up-card-main h3 {
          max-width: 560px;
          font-size: clamp(36px, 4.8vw, 64px);
          line-height: 1;
          letter-spacing: -2.7px;
          margin: 19px 0 14px;
          font-weight: 730;
          overflow-wrap: anywhere;
        }

        .up-card-main p {
          max-width: 440px;
          color: #b3c2ce;
          font-size: 15px;
          line-height: 1.8;
          margin: 0;
        }

        .up-card-points {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 18px;
          margin-top: 22px;
        }

        .up-card-points span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #d1dce5;
          font-size: 11px;
        }

        .up-card-points svg {
          color: var(--service-accent);
          flex-shrink: 0;
        }

        .up-card-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 22px;
          color: #f7fbff;
          font-size: 12px;
          font-weight: 750;
        }

        .up-card-link-icon {
          display: grid;
          place-items: center;
          width: 31px;
          height: 31px;
          border: 1px solid rgba(255,255,255,.3);
          border-radius: 50%;
          transition: transform .25s ease, color .25s ease, background .25s ease;
        }

        .up-service-card:hover .up-card-link-icon {
          transform: translate(3px, -3px);
          background: #f2f7fb;
          color: #0b1a27;
        }

        .up-card-watermark {
          position: absolute;
          z-index: -1;
          right: -7px;
          bottom: -60px;
          color: rgba(255,255,255,.035);
          font-size: clamp(190px, 23vw, 300px);
          font-weight: 800;
          letter-spacing: -20px;
          line-height: 1;
          pointer-events: none;
          transition: color .35s ease, transform .6s ease;
        }

        .up-service-card:hover .up-card-watermark {
          color: color-mix(in srgb, var(--service-accent) 9%, transparent);
          transform: translateY(-6px);
        }

        .up-card-bottom-line {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--service-accent), transparent);
          transform: scaleX(.25);
          opacity: .6;
          transition: transform .45s ease, opacity .45s ease;
        }

        .up-service-card:hover .up-card-bottom-line,
        .up-card-active .up-card-bottom-line {
          transform: scaleX(1);
          opacity: 1;
        }

        .up-carousel-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          padding: 22px 0 18px;
          border-bottom: 1px solid var(--up-line);
        }

        .up-carousel-status {
          display: flex;
          align-items: baseline;
          gap: 8px;
          color: #82909c;
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 1.4px;
          white-space: nowrap;
        }

        .up-status-number {
          color: var(--up-text);
          font-size: 20px;
          letter-spacing: -.5px;
        }

        .up-status-divider {
          color: #9aa7b1;
        }

        .up-carousel-indicators {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .up-indicator {
          width: 23px;
          height: 24px;
          display: grid;
          place-items: center;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
        }

        .up-indicator span {
          width: 5px;
          height: 5px;
          border-radius: 5px;
          background: #aebbc5;
          transition: width .3s ease, background .3s ease;
        }

        .up-indicator.is-active span {
          width: 22px;
          background: #537fa3;
        }

        .up-carousel-arrows {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .up-arrow-button {
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          border: 1px solid var(--up-line);
          background: transparent;
          color: var(--up-text);
          cursor: pointer;
          transition: color .25s ease, background .25s ease, border-color .25s ease, transform .25s ease;
        }

        .up-arrow-button:hover {
          transform: translateY(-2px);
          border-color: #8ba9c0;
          background: rgba(110,154,190,.1);
        }

        .up-arrow-button-primary {
          background: #0b1a27;
          border-color: #0b1a27;
          color: white;
        }

        .up-arrow-button-primary:hover {
          background: #294b63;
          border-color: #294b63;
          color: white;
        }

        .up-carousel-progress {
          height: 2px;
          background: var(--up-line);
          overflow: hidden;
        }

        .up-carousel-progress-fill {
          display: block;
          width: 100%;
          height: 100%;
          background: #739fc2;
          transform-origin: left;
          animation: upProgress linear forwards;
        }

        .up-carousel-progress-fill.is-paused {
          animation-play-state: paused;
        }

        .up-carousel-caption {
          display: grid;
          grid-template-columns: 45px 1fr auto;
          align-items: center;
          gap: 18px;
          padding: 24px 0 0;
        }

        .up-caption-number {
          color: #799bb7;
          font-size: 12px;
          font-weight: 750;
        }

        .up-carousel-caption p {
          color: var(--up-muted);
          font-size: 13px;
          line-height: 1.8;
          margin: 0;
        }

        .up-caption-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--up-text);
          font-size: 11px;
          font-weight: 750;
          text-decoration: none;
          transition: color .2s ease, gap .2s ease;
        }

        .up-caption-link:hover {
          color: #5e8db2;
          gap: 12px;
        }

        /* ALL SERVICES GRID */
        .up-all-services {
          padding: 105px 0 120px;
        }

        .up-all-services-heading {
          margin-bottom: 42px;
        }

        .up-all-services-heading h2 {
          font-size: clamp(40px, 5vw, 62px);
        }

        .up-total-services {
          padding-bottom: 7px;
          color: #82919e;
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 1.5px;
          white-space: nowrap;
        }

        .up-services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--up-line);
          border-left: 1px solid var(--up-line);
        }

        .up-capability-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 280px;
          padding: 25px;
          overflow: hidden;
          color: var(--up-text);
          text-decoration: none;
          background: var(--up-surface);
          border-right: 1px solid var(--up-line);
          border-bottom: 1px solid var(--up-line);
          transition: transform .3s ease, background .3s ease, box-shadow .3s ease;
        }

        .up-capability-card::before {
          position: absolute;
          content: "";
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--service-accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .35s ease;
        }

        .up-capability-card:hover {
          z-index: 1;
          transform: translateY(-4px);
          background: color-mix(in srgb, var(--service-accent) 5%, var(--up-surface));
          box-shadow: 0 18px 35px rgba(13,34,52,.07);
        }

        .up-capability-card:hover::before {
          transform: scaleX(1);
        }

        .up-capability-top,
        .up-capability-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .up-capability-top {
          color: #82919e;
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 1.3px;
        }

        .up-capability-icon {
          display: grid;
          place-items: center;
          width: 45px;
          height: 45px;
          border: 1px solid color-mix(in srgb, var(--service-accent) 45%, var(--up-line));
          color: #5d85a4;
          background: color-mix(in srgb, var(--service-accent) 15%, var(--up-surface));
          transition: transform .3s ease;
        }

        .up-capability-card:hover .up-capability-icon {
          transform: rotate(-7deg);
        }

        .up-capability-content {
          flex: 1;
          padding: 28px 0 23px;
        }

        .up-capability-content h3 {
          font-size: clamp(19px, 2vw, 24px);
          line-height: 1.2;
          letter-spacing: -.7px;
          margin: 0 0 13px;
          font-weight: 700;
        }

        .up-capability-content p {
          color: var(--up-muted);
          font-size: 12px;
          line-height: 1.85;
          margin: 0;
        }

        .up-capability-bottom {
          padding-top: 17px;
          border-top: 1px solid var(--up-line);
          color: #71879a;
          font-size: 10px;
          font-weight: 750;
        }

        .up-capability-arrow {
          display: grid;
          place-items: center;
          width: 30px;
          height: 30px;
          border: 1px solid var(--up-line);
          border-radius: 50%;
          color: var(--up-text);
          transition: transform .25s ease, background .25s ease, color .25s ease;
        }

        .up-capability-card:hover .up-capability-arrow {
          transform: translate(2px, -2px);
          background: #0b1a27;
          border-color: #0b1a27;
          color: white;
        }

        /* FINAL CTA */
        .up-services-cta {
          position: relative;
          display: flex;
          justify-content: center;
          isolation: isolate;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 80% 45%, rgba(105,151,187,.17), transparent 36%),
            linear-gradient(125deg, #e9eff4, #f4f7fa 60%, #e5edf4);
          color: #0b1a27;
          text-align: center;
        }

        .up-cta-grid {
          opacity: .24;
          background-image:
            linear-gradient(#8da5b6 1px, transparent 1px),
            linear-gradient(90deg, #8da5b6 1px, transparent 1px);
          background-size: 62px 62px;
          mask-image: radial-gradient(ellipse at center, black, transparent 76%);
        }

        .up-cta-orb {
          position: absolute;
          z-index: -1;
          width: 330px;
          height: 330px;
          top: 25%;
          right: -150px;
          border-radius: 50%;
          background: #8cb5d6;
          filter: blur(120px);
          opacity: .25;
        }

        .up-cta-content {
          position: relative;
          z-index: 1;
          max-width: 900px;
          padding: 115px 20px 105px;
        }

        .up-cta-content .up-section-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .up-cta-content h2 {
          font-size: clamp(53px, 7.3vw, 88px);
          line-height: .98;
          letter-spacing: -4.5px;
          margin: 27px 0 24px;
          font-weight: 760;
        }

        .up-cta-content h2 span {
          color: #5b83a2;
        }

        .up-cta-content p {
          max-width: 470px;
          margin: 0 auto 30px;
          color: #647789;
          font-size: 14px;
          line-height: 1.95;
        }

        .up-cta-button {
          background: #0b1a27;
          color: #fff;
          border-color: #0b1a27;
        }

        .up-cta-button:hover {
          background: #294b63;
          color: white;
        }

        .up-cta-footnote {
          display: block;
          margin-top: 43px;
          color: #8395a4;
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 1.6px;
        }

        /* DARK MODE */
        body.dark-mode .up-services {
          --up-bg: #080e15;
          --up-surface: #0d1721;
          --up-text: #f0f5fa;
          --up-muted: #a2b0bd;
          --up-line: rgba(218,233,245,.13);
        }

        body.dark-mode .up-intro-grid h2 span,
        body.dark-mode .up-section-heading h2 span,
        body.dark-mode .up-all-services-heading h2 span {
          color: #91a8bb;
        }

        body.dark-mode .up-services-cta {
          background:
            radial-gradient(ellipse at 80% 45%, rgba(105,151,187,.13), transparent 36%),
            linear-gradient(125deg, #101d29, #0c1722 60%, #142637);
          color: #f3f7fb;
        }

        body.dark-mode .up-cta-content h2 span {
          color: #a3c7e4;
        }

        body.dark-mode .up-cta-content p {
          color: #b2c0cc;
        }

        body.dark-mode .up-cta-content .up-cta-button {
          background: #edf4f9;
          border-color: #edf4f9;
          color: #0b1a27;
        }

        body.dark-mode .up-cta-content .up-cta-button:hover {
          background: #cddfec;
        }

        body.dark-mode .up-capability-card:hover {
          box-shadow: 0 18px 35px rgba(0,0,0,.2);
        }

        body.dark-mode .up-capability-card:hover .up-capability-arrow {
          background: #edf4f9;
          border-color: #edf4f9;
          color: #0b1a27;
        }

        body.dark-mode .up-arrow-button-primary {
          background: #edf4f9;
          border-color: #edf4f9;
          color: #0b1a27;
        }

        body.dark-mode .up-arrow-button-primary:hover {
          background: #cddfec;
          border-color: #cddfec;
        }

        /* ANIMATIONS */
        @keyframes upProgress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes upPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .4; }
        }

        @keyframes upOrbFloat {
          from { transform: translate3d(0, -12px, 0); }
          to { transform: translate3d(-20px, 20px, 0); }
        }

        @keyframes upTextReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* TABLET */
        @media (max-width: 900px) {
          .up-services-hero {
            min-height: 640px;
          }

          .up-intro-grid {
            gap: 35px;
          }

          .up-section-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 20px;
          }

          .up-section-intro {
            max-width: 500px;
          }

          .up-service-card {
            width: 79%;
          }

          .up-card-next {
            transform: translateX(42%) scale(.9);
          }

          .up-card-previous {
            transform: translateX(-142%) scale(.9);
          }

          .up-services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .up-capability-card {
            min-height: 250px;
          }
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .up-services-hero {
            min-height: 650px;
          }

          .up-hero-inner {
            padding: 115px 0 100px;
          }

          .up-eyebrow {
            flex-wrap: wrap;
            gap: 8px;
            font-size: 9px;
            letter-spacing: 1.6px;
            margin-bottom: 29px;
          }

          .up-hero-inner h1 {
            font-size: clamp(43px, 11.5vw, 65px);
            letter-spacing: -2.8px;
            line-height: 1.02;
          }

          .up-hero-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 22px;
            margin-top: 28px;
          }

          .up-hero-bottom p {
            max-width: 360px;
            font-size: 14px;
            line-height: 1.85;
          }

          .up-primary-button {
            padding: 15px 17px;
            font-size: 12px;
          }

          .up-hero-bottom-line {
            gap: 9px;
            margin-top: 48px;
            font-size: 8px;
            letter-spacing: 1.1px;
          }

          .up-hero-index {
            right: 5%;
            bottom: 22px;
            font-size: 8px;
          }

          .up-hero-scroll {
            left: 5%;
            bottom: 22px;
            font-size: 8px;
            letter-spacing: 1px;
          }

          .up-hero-orb {
            opacity: .1;
          }

          .up-intro-section {
            padding: 65px 0;
          }

          .up-intro-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-top: 22px;
          }

          .up-intro-grid h2 {
            font-size: 43px;
            letter-spacing: -2px;
          }

          .up-intro-copy p {
            font-size: 14px;
          }

          .up-service-section {
            padding: 72px 0 45px;
          }

          .up-section-heading {
            margin-bottom: 29px;
          }

          .up-section-heading h2,
          .up-all-services-heading h2 {
            font-size: 42px;
            letter-spacing: -2px;
          }

          .up-section-intro {
            font-size: 13px;
            line-height: 1.85;
          }

          .up-carousel-topline {
            font-size: 8px;
            letter-spacing: .8px;
          }

          .up-carousel-track {
            height: 395px;
          }

          .up-service-card {
            width: 91%;
            height: 375px;
            padding: 22px;
          }

          .up-card-next {
            transform: translateX(47%) scale(.87);
          }

          .up-card-previous {
            transform: translateX(-147%) scale(.87);
          }

          .up-card-icon {
            width: 43px;
            height: 43px;
          }

          .up-card-main h3 {
            font-size: clamp(30px, 8vw, 43px);
            letter-spacing: -1.7px;
            margin: 16px 0 12px;
          }

          .up-card-kicker {
            font-size: 8px;
            letter-spacing: 1px;
          }

          .up-card-main p {
            font-size: 13px;
            line-height: 1.75;
          }

          .up-card-points {
            gap: 8px 11px;
            margin-top: 16px;
          }

          .up-card-points span {
            font-size: 9px;
          }

          .up-card-link {
            margin-top: 17px;
            font-size: 11px;
          }

          .up-card-watermark {
            font-size: 180px;
            bottom: -35px;
          }

          .up-carousel-controls {
            gap: 10px;
            padding-top: 15px;
          }

          .up-carousel-status {
            gap: 5px;
            font-size: 8px;
            letter-spacing: .7px;
          }

          .up-status-number {
            font-size: 17px;
          }

          .up-carousel-indicators {
            gap: 2px;
          }

          .up-indicator {
            width: 15px;
            height: 24px;
          }

          .up-indicator.is-active span {
            width: 15px;
          }

          .up-arrow-button {
            width: 35px;
            height: 35px;
          }

          .up-carousel-arrows {
            gap: 5px;
          }

          .up-carousel-caption {
            grid-template-columns: 26px 1fr;
            gap: 10px;
            padding-top: 18px;
          }

          .up-carousel-caption p {
            font-size: 12px;
          }

          .up-caption-link {
            grid-column: 2;
            justify-self: start;
            margin-top: 3px;
          }

          .up-all-services {
            padding: 75px 0 80px;
          }

          .up-all-services-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
            margin-bottom: 27px;
          }

          .up-all-services-heading h2 {
            font-size: 38px;
          }

          .up-services-grid {
            grid-template-columns: 1fr;
          }

          .up-capability-card {
            min-height: 220px;
            padding: 23px;
          }

          .up-capability-content {
            padding: 24px 0 20px;
          }

          .up-capability-content h3 {
            font-size: 22px;
          }

          .up-cta-content {
            padding: 82px 19px;
          }

          .up-cta-content h2 {
            font-size: clamp(45px, 12vw, 60px);
            letter-spacing: -2.8px;
          }

          .up-cta-content p {
            font-size: 13px;
            line-height: 1.85;
          }

          .up-cta-footnote {
            font-size: 8px;
            letter-spacing: .9px;
            line-height: 1.8;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .up-services *,
          .up-services *::before,
          .up-services *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }

          .up-service-card {
            will-change: auto;
          }
        }
      `}</style>
    </>
  );
}
