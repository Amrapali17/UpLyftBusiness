import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Megaphone,
  Share2,
  Target,
  Palette,
  TrendingUp,
  Sparkles,
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
    tag: "BUILD",
    accent: "blue",
    points: ["Business Websites", "Web Applications", "Landing Pages"],
  },
  {
    id: "digital-marketing",
    number: "02",
    title: "Digital Marketing",
    short: "Make your business impossible to ignore.",
    description:
      "Data-led marketing systems that attract the right audience and create demand.",
    icon: Megaphone,
    tag: "GROW",
    accent: "violet",
    points: ["SEO", "Lead Generation", "Marketing Strategy"],
  },
  {
    id: "social-media-management",
    number: "03",
    title: "Social Media",
    short: "Turn attention into brand value.",
    description:
      "Consistent content and strategy that make your brand recognizable.",
    icon: Share2,
    tag: "CONNECT",
    accent: "cyan",
    points: ["Content Strategy", "Content Creation", "Community"],
  },
  {
    id: "advertising-performance",
    number: "04",
    title: "Advertising",
    short: "Spend smarter. Scale faster.",
    description:
      "Performance campaigns focused on measurable growth and stronger returns.",
    icon: Target,
    tag: "PERFORM",
    accent: "orange",
    points: ["Meta Ads", "Google Ads", "Performance Tracking"],
  },
  {
    id: "creative-branding",
    number: "05",
    title: "Creative & Branding",
    short: "Give your business a visual identity.",
    description:
      "Distinctive creative systems that make your business look established.",
    icon: Palette,
    tag: "CREATE",
    accent: "pink",
    points: ["Brand Identity", "Creative Design", "Visual Systems"],
  },
  {
    id: "growth-strategy",
    number: "06",
    title: "Growth & Strategy",
    short: "Turn ambition into a clear direction.",
    description:
      "Practical strategies designed to identify opportunities and accelerate growth.",
    icon: TrendingUp,
    tag: "SCALE",
    accent: "green",
    points: ["Growth Strategy", "Business Consulting", "Market Research"],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const featured = services[active];
  const FeaturedIcon = featured.icon;

  return (
    <>
      <Navbar />

      <main className="services-page">
        {/* HERO */}
        <section className="services-hero">
          <div className="hero-grid"></div>
          <div className="hero-glow hero-glow-one"></div>
          <div className="hero-glow hero-glow-two"></div>

          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="live-dot"></span>
              VELQOR / SERVICES
            </div>

            <h1>
              We build.
              <br />
              We grow.
              <br />
              <span>We scale.</span>
            </h1>

            <div className="hero-bottom">
              <p>
                Digital solutions designed to move ambitious businesses
                forward.
              </p>

              <Link to="/enquire" className="hero-button">
                Start a project
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <div className="hero-scroll">
            <span>SCROLL TO EXPLORE</span>
            <div></div>
          </div>
        </section>

        {/* SERVICES INTRO */}
        <section className="services-intro">
          <div className="intro-left">
            <span className="section-number">01 — WHAT WE DO</span>
            <h2>
              One partner.
              <br />
              <span>Multiple capabilities.</span>
            </h2>
          </div>

          <div className="intro-right">
            <p>
              From building your digital presence to creating demand and
              accelerating growth — VELQOR brings everything together.
            </p>

            <div className="mini-stats">
              <div>
                <strong>06</strong>
                <span>CORE SERVICES</span>
              </div>

              <div>
                <strong>01</strong>
                <span>GROWTH PARTNER</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>POSSIBILITIES</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED SERVICE */}
        <section className="service-explorer">
          <div className="explorer-heading">
            <div>
              <span className="section-number">02 — EXPLORE</span>
              <h2>What can we build together?</h2>
            </div>

            <Sparkles size={26} />
          </div>

          <div className="explorer-layout">
            {/* FEATURED */}
            <Link
              to={`/services/${featured.id}`}
              className={`featured-service ${featured.accent}`}
            >
              <div className="featured-pattern"></div>

              <div className="featured-top">
                <span>{featured.number}</span>
                <span>{featured.tag}</span>
              </div>

              <div className="featured-icon">
                <FeaturedIcon size={32} strokeWidth={1.5} />
              </div>

              <div className="featured-content">
                <span className="featured-label">FEATURED SERVICE</span>

                <h3>{featured.title}</h3>

                <p>{featured.short}</p>

                <div className="featured-link">
                  Explore service
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="featured-orb"></div>
            </Link>

            {/* SERVICE LIST */}
            <div className="service-list">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = index === active;

                return (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className={`service-row ${
                      isActive ? "active" : ""
                    }`}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                  >
                    <div className="service-row-number">
                      {service.number}
                    </div>

                    <div className="service-row-icon">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <div className="service-row-info">
                      <h3>{service.title}</h3>
                      <p>{service.short}</p>
                    </div>

                    <ArrowUpRight className="row-arrow" size={20} />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="capabilities">
          <div className="capabilities-bg"></div>

          <div className="capabilities-header">
            <span className="section-number light">
              03 — WHY VELQOR
            </span>

            <h2>
              More than
              <br />
              <span>just a service.</span>
            </h2>
          </div>

          <div className="capability-grid">
            <div className="capability-card">
              <span>01</span>
              <div className="capability-line"></div>
              <h3>Strategy First</h3>
              <p>Every project starts with a clear direction.</p>
            </div>

            <div className="capability-card">
              <span>02</span>
              <div className="capability-line"></div>
              <h3>Built to Perform</h3>
              <p>Design and technology with business outcomes in mind.</p>
            </div>

            <div className="capability-card">
              <span>03</span>
              <div className="capability-line"></div>
              <h3>One Ecosystem</h3>
              <p>Everything works together instead of working separately.</p>
            </div>

            <div className="capability-card">
              <span>04</span>
              <div className="capability-line"></div>
              <h3>Built to Scale</h3>
              <p>Solutions designed for where your business is going.</p>
            </div>
          </div>

          <div className="capability-footer">
            <span>VELQOR</span>
            <span>BUILD / GROW / SCALE</span>
          </div>
        </section>

        {/* SERVICE STRIP */}
        <section className="service-strip">
          <div className="strip-title">
            <span>OUR EXPERTISE</span>
            <h2>Everything your business needs.</h2>
          </div>

          <div className="strip-items">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="strip-item"
              >
                <Check size={17} />
                {service.title}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="services-cta">
          <div className="cta-grid"></div>

          <div className="cta-inner">
            <span>04 — LET'S BUILD</span>

            <h2>
              Have an idea?
              <br />
              <em>Let's make it real.</em>
            </h2>

            <p>
              Tell us what you're building. We'll figure out the rest.
            </p>

            <Link to="/enquire" className="cta-button">
              Start a conversation
              <ArrowRight size={19} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        * {
          box-sizing: border-box;
        }

        .services-page {
          background: #f6f8fb;
          color: #071018;
          overflow: hidden;
        }

        /* ================= HERO ================= */

        .services-hero {
          min-height: 88vh;
          background: #061017;
          color: white;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          opacity: .18;
          background-image:
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);
          background-size: 70px 70px;
          mask-image: linear-gradient(to bottom, black, transparent);
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .hero-glow-one {
          width: 500px;
          height: 500px;
          right: -100px;
          top: -100px;
          background: rgba(36, 141, 255, .25);
        }

        .hero-glow-two {
          width: 400px;
          height: 400px;
          left: -180px;
          bottom: -150px;
          background: rgba(102, 56, 255, .18);
        }

        .hero-content {
          width: min(1220px, 90%);
          margin: auto;
          position: relative;
          z-index: 2;
          padding: 110px 0 90px;
        }

        .hero-eyebrow,
        .section-number {
          font-size: 11px;
          letter-spacing: 2.2px;
          font-weight: 700;
          color: #668096;
        }

        .hero-eyebrow {
          color: #9db2c5;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 40px;
        }

        .live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #3da5ff;
          box-shadow: 0 0 16px #3da5ff;
        }

        .hero-content h1 {
          font-size: clamp(64px, 9vw, 138px);
          line-height: .86;
          letter-spacing: -7px;
          margin: 0;
          font-weight: 700;
          max-width: 1050px;
        }

        .hero-content h1 span {
          color: #4aa7ff;
        }

        .hero-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: 75px;
          max-width: 950px;
        }

        .hero-bottom p {
          color: #9aacbc;
          font-size: 18px;
          line-height: 1.6;
          max-width: 430px;
          margin: 0;
        }

        .hero-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 21px;
          background: white;
          color: #071018;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition: .3s ease;
        }

        .hero-button:hover {
          background: #4aa7ff;
          color: white;
          transform: translateY(-3px);
        }

        .hero-scroll {
          position: absolute;
          right: 5%;
          bottom: 38px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #627889;
          font-size: 9px;
          letter-spacing: 2px;
          z-index: 2;
        }

        .hero-scroll div {
          width: 55px;
          height: 1px;
          background: #526776;
        }

        /* ================= INTRO ================= */

        .services-intro {
          width: min(1220px, 90%);
          margin: auto;
          padding: 125px 0 105px;
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          gap: 100px;
        }

        .services-intro h2,
        .explorer-heading h2 {
          font-size: clamp(48px, 5vw, 76px);
          line-height: .98;
          letter-spacing: -3.5px;
          margin: 25px 0 0;
        }

        .services-intro h2 span {
          color: #8b99a7;
        }

        .intro-right {
          padding-top: 40px;
        }

        .intro-right > p {
          font-size: 19px;
          line-height: 1.65;
          color: #667582;
          max-width: 500px;
          margin: 0;
        }

        .mini-stats {
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid #d8dfe5;
          border-bottom: 1px solid #d8dfe5;
        }

        .mini-stats div {
          padding: 25px 15px 25px 0;
          border-right: 1px solid #d8dfe5;
        }

        .mini-stats div:last-child {
          border: 0;
          padding-left: 20px;
        }

        .mini-stats strong {
          display: block;
          font-size: 34px;
          letter-spacing: -2px;
        }

        .mini-stats span {
          display: block;
          margin-top: 8px;
          font-size: 9px;
          letter-spacing: 1.5px;
          color: #87939d;
        }

        /* ================= EXPLORER ================= */

        .service-explorer {
          width: min(1220px, 90%);
          margin: auto;
          padding-bottom: 130px;
        }

        .explorer-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 45px;
        }

        .explorer-heading h2 {
          font-size: clamp(38px, 4vw, 58px);
          margin-top: 15px;
        }

        .explorer-heading > svg {
          color: #4a9df0;
          margin-bottom: 8px;
        }

        .explorer-layout {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 18px;
          min-height: 600px;
        }

        .featured-service {
          min-height: 600px;
          position: relative;
          overflow: hidden;
          color: white;
          text-decoration: none;
          padding: 34px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: .35s ease;
          isolation: isolate;
        }

        .featured-service.blue {
          background: linear-gradient(135deg, #0a3151, #0b6fb5);
        }

        .featured-service.violet {
          background: linear-gradient(135deg, #22124e, #6641d5);
        }

        .featured-service.cyan {
          background: linear-gradient(135deg, #063d4b, #0796b7);
        }

        .featured-service.orange {
          background: linear-gradient(135deg, #502a0a, #d87316);
        }

        .featured-service.pink {
          background: linear-gradient(135deg, #4a1537, #c74388);
        }

        .featured-service.green {
          background: linear-gradient(135deg, #0d3c2c, #26946c);
        }

        .featured-service:hover {
          transform: translateY(-5px);
        }

        .featured-pattern {
          position: absolute;
          inset: 0;
          opacity: .14;
          background-image:
            linear-gradient(135deg, transparent 45%, rgba(255,255,255,.5) 46%, transparent 47%),
            linear-gradient(45deg, transparent 45%, rgba(255,255,255,.35) 46%, transparent 47%);
          background-size: 80px 80px;
          z-index: -1;
        }

        .featured-top {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          letter-spacing: 2px;
          font-weight: 700;
        }

        .featured-icon {
          position: absolute;
          right: 35px;
          top: 95px;
          width: 72px;
          height: 72px;
          border: 1px solid rgba(255,255,255,.25);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
        }

        .featured-content {
          position: relative;
          z-index: 2;
        }

        .featured-label {
          font-size: 9px;
          letter-spacing: 2px;
          opacity: .65;
        }

        .featured-content h3 {
          font-size: clamp(42px, 5vw, 70px);
          line-height: .95;
          letter-spacing: -3px;
          max-width: 550px;
          margin: 14px 0;
        }

        .featured-content p {
          font-size: 17px;
          color: rgba(255,255,255,.75);
          max-width: 420px;
          line-height: 1.5;
        }

        .featured-link {
          margin-top: 30px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 700;
          border-bottom: 1px solid rgba(255,255,255,.4);
          padding-bottom: 10px;
        }

        .featured-orb {
          position: absolute;
          width: 320px;
          height: 320px;
          right: -130px;
          bottom: -140px;
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 50%;
          box-shadow:
            0 0 0 50px rgba(255,255,255,.025),
            0 0 0 100px rgba(255,255,255,.02);
        }

        /* ================= SERVICE LIST ================= */

        .service-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .service-row {
          min-height: 94px;
          display: grid;
          grid-template-columns: 40px 48px 1fr 30px;
          align-items: center;
          gap: 15px;
          padding: 15px 20px;
          color: #071018;
          text-decoration: none;
          background: white;
          border: 1px solid #e5e9ed;
          transition: .3s ease;
        }

        .service-row:hover,
        .service-row.active {
          background: #071018;
          color: white;
          border-color: #071018;
          transform: translateX(-5px);
        }

        .service-row-number {
          font-size: 10px;
          color: #9ba7b0;
          font-weight: 700;
        }

        .service-row-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0f3f6;
          color: #4a9df0;
          transition: .3s;
        }

        .service-row:hover .service-row-icon,
        .service-row.active .service-row-icon {
          background: rgba(74,157,240,.15);
        }

        .service-row-info h3 {
          margin: 0 0 5px;
          font-size: 16px;
        }

        .service-row-info p {
          margin: 0;
          color: #8a969f;
          font-size: 12px;
        }

        .service-row:hover .service-row-info p,
        .service-row.active .service-row-info p {
          color: #8fa1af;
        }

        .row-arrow {
          transition: .3s;
        }

        .service-row:hover .row-arrow,
        .service-row.active .row-arrow {
          color: #4aa7ff;
          transform: translate(3px, -3px);
        }

        /* ================= CAPABILITIES ================= */

        .capabilities {
          background: #061017;
          color: white;
          position: relative;
          padding: 125px max(5%, calc((100vw - 1220px) / 2)) 45px;
          overflow: hidden;
        }

        .capabilities-bg {
          position: absolute;
          width: 700px;
          height: 700px;
          right: -350px;
          top: -250px;
          border-radius: 50%;
          background: rgba(37, 139, 255, .12);
          filter: blur(80px);
        }

        .capabilities-header {
          position: relative;
          z-index: 2;
        }

        .section-number.light {
          color: #718697;
        }

        .capabilities h2 {
          font-size: clamp(60px, 7vw, 100px);
          line-height: .88;
          letter-spacing: -5px;
          margin: 28px 0 85px;
        }

        .capabilities h2 span {
          color: #657988;
        }

        .capability-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid #26353f;
          border-bottom: 1px solid #26353f;
        }

        .capability-card {
          min-height: 250px;
          padding: 28px 25px;
          border-right: 1px solid #26353f;
        }

        .capability-card:first-child {
          border-left: 1px solid #26353f;
        }

        .capability-card > span {
          color: #5d7382;
          font-size: 10px;
        }

        .capability-line {
          height: 1px;
          background: #26353f;
          margin: 25px 0 35px;
        }

        .capability-card h3 {
          font-size: 21px;
          margin: 0 0 14px;
        }

        .capability-card p {
          color: #81919c;
          font-size: 13px;
          line-height: 1.6;
          max-width: 190px;
          margin: 0;
        }

        .capability-footer {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          padding-top: 35px;
          font-size: 9px;
          letter-spacing: 2px;
          color: #536875;
        }

        /* ================= STRIP ================= */

        .service-strip {
          width: min(1220px, 90%);
          margin: auto;
          padding: 115px 0;
          display: grid;
          grid-template-columns: .7fr 1.3fr;
          gap: 80px;
        }

        .strip-title span {
          font-size: 9px;
          letter-spacing: 2px;
          font-weight: 700;
          color: #788894;
        }

        .strip-title h2 {
          font-size: 38px;
          line-height: 1;
          letter-spacing: -2px;
          margin: 18px 0 0;
        }

        .strip-items {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid #dce2e7;
        }

        .strip-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 22px 15px;
          border-bottom: 1px solid #dce2e7;
          color: #17222a;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          transition: .25s;
        }

        .strip-item:nth-child(odd) {
          border-right: 1px solid #dce2e7;
        }

        .strip-item svg {
          color: #4a9df0;
        }

        .strip-item:hover {
          padding-left: 22px;
          background: white;
        }

        /* ================= CTA ================= */

        .services-cta {
          background: #dcecff;
          min-height: 550px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .cta-grid {
          position: absolute;
          inset: 0;
          opacity: .35;
          background-image:
            linear-gradient(#9ec4e8 1px, transparent 1px),
            linear-gradient(90deg, #9ec4e8 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(circle at center, black, transparent 75%);
        }

        .cta-inner {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 100px 20px;
        }

        .cta-inner > span {
          font-size: 9px;
          letter-spacing: 2px;
          font-weight: 700;
          color: #5d7382;
        }

        .cta-inner h2 {
          font-size: clamp(58px, 8vw, 115px);
          line-height: .88;
          letter-spacing: -6px;
          margin: 25px 0;
        }

        .cta-inner h2 em {
          color: #318be0;
          font-style: normal;
        }

        .cta-inner p {
          color: #607483;
          font-size: 16px;
          margin: 0 0 35px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 13px;
          padding: 17px 24px;
          background: #071018;
          color: white;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          transition: .3s;
        }

        .cta-button:hover {
          background: #318be0;
          transform: translateY(-3px);
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 900px) {
          .hero-content h1 {
            letter-spacing: -4px;
          }

          .services-intro,
          .explorer-layout,
          .service-strip {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .intro-right {
            padding-top: 0;
          }

          .featured-service {
            min-height: 500px;
          }

          .capability-grid {
            grid-template-columns: 1fr 1fr;
          }

          .capability-card:nth-child(3) {
            border-left: 1px solid #26353f;
          }

          .capability-card:nth-child(odd) {
            border-right: 1px solid #26353f;
          }

          .service-strip {
            gap: 40px;
          }
        }

        @media (max-width: 600px) {
          .services-hero {
            min-height: 760px;
          }

          .hero-content {
            padding-top: 100px;
          }

          .hero-content h1 {
            font-size: 62px;
            letter-spacing: -4px;
          }

          .hero-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
          }

          .hero-scroll {
            display: none;
          }

          .services-intro {
            padding: 85px 0;
          }

          .services-intro h2 {
            font-size: 48px;
          }

          .mini-stats {
            grid-template-columns: 1fr;
          }

          .mini-stats div,
          .mini-stats div:last-child {
            border-right: 0;
            border-bottom: 1px solid #d8dfe5;
            padding: 18px 0;
          }

          .mini-stats div:last-child {
            border-bottom: 0;
          }

          .explorer-heading {
            align-items: flex-start;
          }

          .explorer-heading h2 {
            font-size: 40px;
          }

          .featured-service {
            min-height: 490px;
            padding: 25px;
          }

          .featured-content h3 {
            font-size: 48px;
            letter-spacing: -2px;
          }

          .service-row {
            grid-template-columns: 30px 42px 1fr 20px;
            gap: 10px;
            padding: 13px;
          }

          .service-row-info h3 {
            font-size: 14px;
          }

          .service-row-info p {
            display: none;
          }

          .capabilities {
            padding-top: 85px;
          }

          .capabilities h2 {
            font-size: 61px;
            letter-spacing: -4px;
            margin-bottom: 60px;
          }

          .capability-grid {
            grid-template-columns: 1fr;
          }

          .capability-card,
          .capability-card:nth-child(3) {
            border-left: 0;
            border-right: 0;
            border-bottom: 1px solid #26353f;
            min-height: 190px;
          }

          .capability-footer {
            flex-direction: column;
            gap: 12px;
          }

          .strip-items {
            grid-template-columns: 1fr;
          }

          .strip-item:nth-child(odd) {
            border-right: 0;
          }

          .services-cta {
            min-height: 500px;
          }

          .cta-inner h2 {
            font-size: 60px;
            letter-spacing: -4px;
          }
        }
      `}</style>
    </>
  );
}