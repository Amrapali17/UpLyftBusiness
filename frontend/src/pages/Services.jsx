
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  Megaphone,
  Share2,
  Target,
  Palette,
  TrendingUp,
  Check,
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
  },
  {
    id: "creative-branding",
    number: "05",
    title: "Creative & Branding",
    short: "Give your business a distinctive identity.",
    description:
      "Create a consistent visual identity that makes your business stand out.",
    icon: Palette,
    points: ["Brand Identity", "Creative Design", "Visual Systems"],
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
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const total = services.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, 2500);

    return () => window.clearInterval(timer);
  }, [total]);

  return (
    <>
      <Navbar />

      <main className="up-services">
        {/* HERO */}
        <section className="up-services-hero">
          <div className="up-hero-grid" />

          <div className="up-hero-inner">
            <div className="up-eyebrow">
              <span className="up-eyebrow-dot" />
              UPLYFTBUSINESS / SERVICES
            </div>

            <h1>
              Digital solutions
              <br />
              that move business <span>forward.</span>
            </h1>

            <div className="up-hero-bottom">
              <p>
                Technology, creativity and strategy — working together to
                help your business move forward.
              </p>

              <Link to="/enquire" className="up-primary-button">
                Start a Project
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <div className="up-hero-index">01 — OUR EXPERTISE</div>
        </section>

        {/* SERVICE CAROUSEL */}
        <section className="up-service-section">
          <div className="up-section-heading">
            <div>
              <span className="up-section-label">WHAT WE DO</span>
              <h2>
                One partner.
                <br />
                <span>Multiple capabilities.</span>
              </h2>
            </div>

            <p className="up-section-intro">
              Explore the services that help businesses build, grow and
              scale their digital presence.
            </p>
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
                  <article
                    key={service.id}
                    className={`up-service-card ${positionClass}`}
                    aria-hidden={position !== 0}
                    aria-label={service.title}
                  >
                    <div className="up-card-top">
                      <span>
                        {service.number}{" "}
                        <span className="up-card-slash">/</span> 06
                      </span>

                      <Icon size={29} strokeWidth={1.5} />
                    </div>

                    <div className="up-card-main">
                      <span className="up-card-kicker">
                        DIGITAL & TECHNOLOGY
                      </span>

                      <h3>{service.title}</h3>
                      <p>{service.short}</p>

                      <div className="up-card-points">
                        {service.points.map((point) => (
                          <span key={point}>
                            <Check size={14} />
                            {point}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/services/${service.id}`}
                        className="up-card-link"
                        tabIndex={position === 0 ? 0 : -1}
                      >
                        Explore service
                        <ArrowUpRight size={18} />
                      </Link>
                    </div>

                    <span className="up-card-watermark">
                      {service.number}
                    </span>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="up-carousel-footer">
            <span>CONTINUOUSLY EXPLORING OUR SERVICES</span>

            <div className="up-carousel-progress" aria-hidden="true">
              <span
                key={active}
                className="up-carousel-progress-fill"
              />
            </div>

            <span className="up-carousel-count">
              {String(active + 1).padStart(2, "0")} / 06
            </span>
          </div>
        </section>

        {/* ALL SERVICES */}
        <section className="up-all-services">
          <div className="up-all-services-heading">
            <div>
              <span className="up-section-label">OUR CAPABILITIES</span>
              <h2>Everything we do.</h2>
            </div>

            <span className="up-total-services">06 SERVICES</span>
          </div>

          <div className="up-services-list">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="up-service-row"
              >
                <span className="up-row-number">{service.number}</span>
                <span className="up-row-name">{service.title}</span>
                <span className="up-row-description">{service.short}</span>

                <ArrowUpRight
                  size={20}
                  className="up-row-arrow"
                />
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="up-services-cta">
          <div className="up-cta-grid" />

          <div className="up-cta-content">
            <span className="up-section-label">HAVE A PROJECT IN MIND?</span>

            <h2>
              Let's move your
              <br />
              business <span>forward.</span>
            </h2>

            <p>
              Tell us what you're building. Let's explore what's possible.
            </p>

            <Link to="/enquire" className="up-primary-button">
              Start a Project
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .up-services {
          --up-bg: #f6f8fa;
          --up-text: #111c25;
          --up-muted: #73808b;
          --up-line: #dce3e9;
          background: var(--up-bg);
          color: var(--up-text);
          overflow: hidden;
          transition: background .3s ease, color .3s ease;
        }

        .up-services *,
        .up-services *::before,
        .up-services *::after {
          box-sizing: border-box;
        }

        /* HERO */
        .up-services-hero {
          position: relative;
          min-height: 650px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #091722;
          color: #f8fafc;
        }

        .up-hero-grid,
        .up-cta-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: linear-gradient(to bottom, black, transparent 90%);
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
          gap: 10px;
          color: #a7b7c4;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 36px;
        }

        .up-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #86b8dc;
        }

        .up-hero-inner h1 {
          max-width: 1100px;
          font-size: clamp(49px, 7.7vw, 100px);
          line-height: .99;
          letter-spacing: -4.5px;
          font-weight: 740;
          margin: 0;
        }

        .up-hero-inner h1 span {
          color: #8ab9dd;
        }

        .up-hero-bottom {
          max-width: 930px;
          margin-top: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        /* INCREASED HERO SUBTEXT */
        .up-hero-bottom p {
          max-width: 430px;
          color: #afbdc8;
          font-size: 17px;
          line-height: 1.9;
          margin: 0;
        }

        .up-primary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          flex-shrink: 0;
          padding: 16px 21px;
          background: #f5f8fa;
          color: #0b1a25;
          text-decoration: none;
          font-size: 15px;
          font-weight: 750;
          transition: background .2s ease, transform .2s ease;
        }

        .up-primary-button:hover {
          background: #dceaf4;
          transform: translateY(-2px);
        }

        .up-hero-index {
          position: absolute;
          right: 5%;
          bottom: 30px;
          color: #8597a5;
          font-size: 9px;
          letter-spacing: 1.7px;
        }

        /* SECTION HEADINGS */
        .up-service-section,
        .up-all-services {
          width: min(1220px, 90%);
          margin: auto;
        }

        .up-service-section {
          padding: 105px 0 55px;
        }

        .up-section-label {
          color: #7d8c98;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 1.8px;
        }

        .up-section-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 43px;
        }

        .up-section-heading h2,
        .up-all-services-heading h2 {
          font-size: clamp(39px, 5vw, 65px);
          line-height: .99;
          letter-spacing: -3px;
          margin: 19px 0 0;
        }

        .up-section-heading h2 span {
          color: #84939f;
        }

        /* INCREASED SECTION INTRO */
        .up-section-intro {
          max-width: 360px;
          color: var(--up-muted);
          font-size: 16px;
          line-height: 1.9;
          margin: 0 0 3px;
        }

        /* CAROUSEL */
        .up-carousel-window {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 12px 0 18px;
        }

        .up-carousel-track {
          position: relative;
          height: 435px;
          isolation: isolate;
        }

        .up-service-card {
          position: absolute;
          top: 0;
          left: 50%;
          width: 72%;
          height: 405px;
          padding: clamp(23px, 3.5vw, 40px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          background: #0b1a25;
          border: 1px solid #253a48;
          color: #f7fafc;
          transition:
            transform .8s cubic-bezier(.22,.8,.25,1),
            opacity .8s ease,
            filter .8s ease;
          will-change: transform, opacity;
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
          opacity: .8;
          transform: translateX(37%) scale(.92);
          filter: brightness(.78);
          pointer-events: none;
        }

        .up-card-previous {
          z-index: 1;
          opacity: .6;
          transform: translateX(-137%) scale(.92);
          filter: brightness(.7);
          pointer-events: none;
        }

        .up-card-hidden {
          z-index: 0;
          opacity: 0;
          transform: translateX(150%) scale(.86);
          pointer-events: none;
        }

        .up-card-top {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          color: #9cabb7;
          font-size: 11px;
          letter-spacing: 1.6px;
        }

        .up-card-top svg {
          color: #a3c9e6;
          flex-shrink: 0;
        }

        .up-card-slash {
          color: #536978;
          padding: 0 5px;
        }

        .up-card-main {
          position: relative;
          z-index: 1;
          max-width: 580px;
          padding-bottom: 3px;
        }

        .up-card-kicker {
          color: #8db7d6;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 2px;
        }

        .up-card-main h3 {
          font-size: clamp(37px, 5.1vw, 67px);
          line-height: .99;
          letter-spacing: -2.7px;
          margin: 17px 0;
          overflow-wrap: anywhere;
        }

        /* INCREASED FEATURED SERVICE SUBTEXT */
        .up-card-main p {
          max-width: 440px;
          color: #b2c0ca;
          font-size: 16px;
          line-height: 1.8;
          margin: 0;
        }

        .up-card-points {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 18px;
          margin-top: 23px;
        }

        .up-card-points span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #d0dae1;
          font-size: 12px;
        }

        .up-card-points svg {
          color: #9cc5e2;
          flex-shrink: 0;
        }

        .up-card-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 23px;
          padding-bottom: 8px;
          border-bottom: 1px solid #647b8b;
          color: #fff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition: gap .2s ease;
        }

        .up-card-link:hover {
          gap: 16px;
        }

        .up-card-watermark {
          position: absolute;
          z-index: 0;
          right: -8px;
          bottom: -66px;
          color: rgba(255,255,255,.035);
          font-size: clamp(180px, 24vw, 300px);
          font-weight: 800;
          letter-spacing: -20px;
          line-height: 1;
          pointer-events: none;
        }

        .up-carousel-footer {
          display: flex;
          align-items: center;
          gap: 20px;
          color: #85939e;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.2px;
        }

        .up-carousel-progress {
          position: relative;
          flex: 1;
          max-width: 200px;
          height: 2px;
          background: var(--up-line);
          overflow: hidden;
        }

        .up-carousel-progress-fill {
          position: absolute;
          inset: 0;
          background: #6b9fc5;
          transform-origin: left;
          animation: upProgress 2.5s linear forwards;
        }

        .up-carousel-count {
          margin-left: auto;
          font-variant-numeric: tabular-nums;
          white-space: nowrap;
        }

        @keyframes upProgress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        /* ALL SERVICES LIST */
        .up-all-services {
          padding: 70px 0 115px;
        }

        .up-all-services-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          padding-bottom: 30px;
        }

        .up-all-services-heading h2 {
          font-size: clamp(35px, 4.5vw, 53px);
          letter-spacing: -2.5px;
        }

        .up-total-services {
          color: #87939d;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1.5px;
          white-space: nowrap;
          padding-bottom: 6px;
        }

        .up-services-list {
          border-top: 1px solid var(--up-line);
        }

        .up-service-row {
          min-height: 82px;
          display: grid;
          grid-template-columns: 55px minmax(200px, .95fr) minmax(200px, 1fr) 24px;
          align-items: center;
          gap: 18px;
          border-bottom: 1px solid var(--up-line);
          color: var(--up-text);
          text-decoration: none;
          transition: padding .25s ease, background .25s ease;
        }

        .up-service-row:hover {
          padding-left: 12px;
          background: rgba(105, 150, 185, .06);
        }

        .up-row-number {
          color: #8996a1;
          font-size: 12px;
        }

        /* INCREASED SERVICE LIST TITLE */
        .up-row-name {
          font-size: 18px;
          font-weight: 650;
        }

        /* INCREASED SERVICE LIST DESCRIPTION */
        .up-row-description {
          color: var(--up-muted);
          font-size: 14px;
          line-height: 1.7;
        }

        .up-row-arrow {
          justify-self: end;
          color: #6e8799;
          transition: transform .2s ease;
        }

        .up-service-row:hover .up-row-arrow {
          transform: translate(3px, -3px);
        }

        /* CTA */
        .up-services-cta {
          position: relative;
          display: flex;
          justify-content: center;
          overflow: hidden;
          background: #eaf0f5;
          color: #0b1a25;
          text-align: center;
        }

        .up-cta-grid {
          opacity: .18;
          background-image:
            linear-gradient(#8da5b6 1px, transparent 1px),
            linear-gradient(90deg, #8da5b6 1px, transparent 1px);
          background-size: 65px 65px;
          mask-image: radial-gradient(circle at center, black, transparent 75%);
        }

        .up-cta-content {
          position: relative;
          z-index: 1;
          padding: 105px 20px;
        }

        .up-cta-content h2 {
          font-size: clamp(49px, 7vw, 86px);
          line-height: .96;
          letter-spacing: -4px;
          margin: 25px 0;
        }

        .up-cta-content h2 span {
          color: #5b829f;
        }

        /* INCREASED CTA SUBTEXT */
        .up-cta-content p {
          color: #647685;
          font-size: 16px;
          line-height: 1.8;
          margin: 0 0 28px;
        }

        .up-cta-content .up-primary-button {
          background: #0b1a25;
          color: #fff;
        }

        .up-cta-content .up-primary-button:hover {
          background: #28485d;
        }

        /* DARK MODE */
        body.dark-mode .up-services {
          --up-bg: #080d12;
          --up-text: #f4f7fa;
          --up-muted: #a4b1bc;
          --up-line: rgba(255,255,255,.13);
        }

        body.dark-mode .up-section-heading h2 span {
          color: #8798a6;
        }

        body.dark-mode .up-services-cta {
          background: #111d27;
          color: #f4f7fa;
        }

        body.dark-mode .up-cta-content h2 span {
          color: #91b9d8;
        }

        body.dark-mode .up-cta-content p {
          color: #aab8c4;
        }

        body.dark-mode .up-cta-content .up-primary-button {
          background: #edf3f7;
          color: #0b1a25;
        }

        /* TABLET */
        @media (max-width: 900px) {
          .up-section-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 20px;
          }

          .up-section-intro {
            max-width: 500px;
          }

          .up-service-card {
            width: 78%;
          }

          .up-card-next {
            transform: translateX(42%) scale(.9);
          }

          .up-card-previous {
            transform: translateX(-142%) scale(.9);
          }

          .up-service-row {
            grid-template-columns: 38px minmax(180px, 1fr) 22px;
          }

          .up-row-description {
            display: none;
          }
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .up-services-hero {
            min-height: 600px;
          }

          .up-hero-inner {
            padding: 120px 0 85px;
          }

          .up-hero-inner h1 {
            font-size: clamp(45px, 11vw, 68px);
            letter-spacing: -2.8px;
          }

          .up-hero-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 24px;
          }

          .up-hero-bottom p {
            font-size: 15px;
            line-height: 1.8;
          }

          .up-hero-index {
            font-size: 8px;
          }

          .up-service-section {
            padding-top: 78px;
          }

          .up-section-heading h2 {
            font-size: 43px;
            letter-spacing: -2px;
          }

          .up-section-intro {
            font-size: 15px;
            line-height: 1.8;
          }

          .up-carousel-track {
            height: 385px;
          }

          .up-service-card {
            width: 86%;
            height: 360px;
            padding: 21px;
          }

          .up-card-next {
            transform: translateX(48%) scale(.88);
          }

          .up-card-previous {
            transform: translateX(-148%) scale(.88);
          }

          .up-card-main h3 {
            font-size: clamp(29px, 7vw, 43px);
            letter-spacing: -1.5px;
          }

          .up-card-main p {
            font-size: 14px;
            line-height: 1.7;
          }

          .up-card-points {
            gap: 8px 12px;
            margin-top: 17px;
          }

          .up-card-points span {
            font-size: 10px;
          }

          .up-card-link {
            margin-top: 18px;
            font-size: 12px;
          }

          .up-carousel-footer {
            gap: 10px;
            font-size: 8px;
            letter-spacing: .6px;
          }

          .up-carousel-progress {
            max-width: 90px;
          }

          .up-all-services {
            padding: 55px 0 80px;
          }

          .up-all-services-heading h2 {
            font-size: 36px;
            letter-spacing: -1.5px;
          }

          .up-service-row {
            min-height: 72px;
            grid-template-columns: 27px minmax(0, 1fr) 20px;
            gap: 10px;
          }

          .up-row-name {
            font-size: 14px;
          }

          .up-cta-content {
            padding: 80px 18px;
          }

          .up-cta-content h2 {
            font-size: 48px;
            letter-spacing: -2.5px;
          }

          .up-cta-content p {
            font-size: 15px;
            line-height: 1.8;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .up-service-card {
            transition: none;
          }

          .up-carousel-progress-fill {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
