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
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Industries() {
  const industries = [
    {
      number: "01",
      icon: Building2,
      title: "Professional Services",
      description:
        "Build a stronger digital presence for consulting firms, agencies, financial services, legal businesses and other professional organisations.",
      services: "Websites · Branding · Lead Generation",
    },
    {
      number: "02",
      icon: ShoppingBag,
      title: "Retail & E-commerce",
      description:
        "Create digital experiences that help products get discovered, build trust and turn visitors into customers.",
      services: "E-commerce · Performance · Social Media",
    },
    {
      number: "03",
      icon: BriefcaseBusiness,
      title: "B2B Businesses",
      description:
        "Make complex businesses easier to understand through clear positioning, professional websites and digital growth systems.",
      services: "Web Development · Strategy · Marketing",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Startups",
      description:
        "Move quickly from idea to market with digital foundations designed to evolve as your startup grows.",
      services: "MVP Websites · Branding · Growth",
    },
    {
      number: "05",
      icon: Store,
      title: "Local Businesses",
      description:
        "Help local businesses look professional online, reach nearby customers and create a digital presence they can grow from.",
      services: "Business Websites · Social · Advertising",
    },
    {
      number: "06",
      icon: Layers3,
      title: "Growing Brands",
      description:
        "Bring design, technology and marketing together to create a consistent digital experience across every customer touchpoint.",
      services: "Creative · Digital · Growth",
    },
  ];

  return (
    <div className="industries-page">
      <Navbar />

      <main>
        {/* HERO */}

        <section className="industries-hero">
          <div className="industries-grid-bg"></div>

          <div className="industries-container">
            <div className="industries-hero-top">
              <div className="industries-label">
                <span></span>
                INDUSTRIES
              </div>

              <div className="industries-index">06 SECTORS</div>
            </div>

            <div className="industries-hero-main">
              <h1>
                Built for
                <br />
                <span>business.</span>
              </h1>

              <div className="industries-hero-side">
                <p>
                  Different industries have different challenges. We create
                  digital solutions around the way your business actually
                  works.
                </p>

                <Link to="/enquire" className="industries-link">
                  Discuss your business
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>

            <div className="industries-hero-bottom">
              <span>01</span>
              <div></div>
              <span>06</span>
            </div>
          </div>
        </section>

        {/* INTRO */}

        <section className="industries-intro">
          <div className="industries-container">
            <div className="industries-intro-grid">
              <div className="industries-label dark-label">
                <span></span>
                WHO WE WORK WITH
              </div>

              <div>
                <h2>
                  One partner.
                  <br />
                  <span>Different possibilities.</span>
                </h2>

                <p>
                  Whether you're starting from scratch or looking to improve
                  what already exists, UpLyftBusiness works with businesses at
                  different stages of their digital journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}

        <section className="industries-list-section">
          <div className="industries-container">
            <div className="industries-heading">
              <div>
                <div className="industries-label">
                  <span></span>
                  OUR FOCUS
                </div>

                <h2>
                  Where we
                  <br />
                  <span>create value.</span>
                </h2>
              </div>

              <p>
                Our approach adapts to your industry, audience and business
                goals while keeping the digital experience clear and
                consistent.
              </p>
            </div>

            <div className="industries-list">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <article className="industry-row" key={industry.number}>
                    <div className="industry-number">
                      {industry.number}
                    </div>

                    <div className="industry-icon">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>

                    <div className="industry-content">
                      <h3>{industry.title}</h3>

                      <p>{industry.description}</p>

                      <div className="industry-services">
                        {industry.services}
                      </div>
                    </div>

                    <div className="industry-arrow">
                      <ArrowRight size={18} />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}

        <section className="industries-capabilities">
          <div className="industries-container">
            <div className="capabilities-layout">
              <div>
                <div className="industries-label dark-label">
                  <span></span>
                  WHAT WE BRING
                </div>

                <h2>
                  Industry knowledge
                  <br />
                  <span>meets digital expertise.</span>
                </h2>
              </div>

              <div className="capabilities-list">
                <div>
                  <span>01</span>
                  <strong>Technology</strong>
                  <p>Websites, platforms and digital infrastructure.</p>
                </div>

                <div>
                  <span>02</span>
                  <strong>Creative</strong>
                  <p>Brand identity, design and content experiences.</p>
                </div>

                <div>
                  <span>03</span>
                  <strong>Growth</strong>
                  <p>Marketing, advertising and performance optimisation.</p>
                </div>

                <div>
                  <span>04</span>
                  <strong>Strategy</strong>
                  <p>Clear digital direction aligned with business goals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DARK SECTION */}

        <section className="industries-statement">
          <div className="industries-container">
            <div className="statement-grid">
              <div className="industries-label light-label">
                <span></span>
                OUR BELIEF
              </div>

              <div>
                <h2>
                  Your industry is
                  <br />
                  <span>unique.</span>
                  <br />
                  Your digital presence
                  <br />
                  should be too.
                </h2>

                <p>
                  We don't believe in forcing every business into the same
                  template. We start with your business and build from there.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="industries-cta">
          <div className="industries-container">
            <div className="industries-cta-grid">
              <div>
                <div className="industries-label">
                  <span></span>
                  LET'S WORK TOGETHER
                </div>

                <h2>
                  Don't see your
                  <br />
                  <span>industry?</span>
                </h2>
              </div>

              <div className="industries-cta-side">
                <p>
                  That's okay. Tell us about your business and what you're
                  trying to achieve. We'll figure out the right approach
                  together.
                </p>

                <Link to="/enquire" className="industries-cta-button">
                  Tell us about your business
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .industries-page {
          background: #ffffff;
          color: #111418;
          min-height: 100vh;
          overflow: hidden;
        }

        .industries-container {
          width: min(1240px, calc(100% - 64px));
          margin: 0 auto;
        }

        .industries-label {
          display: flex;
          align-items: center;
          gap: 11px;
          color: #2f79a8;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .industries-label span {
          width: 26px;
          height: 1px;
          background: #69b2e6;
        }

        .dark-label {
          color: #5d6872;
        }

        .light-label {
          color: rgba(255, 255, 255, 0.55);
        }

        /* HERO */

        .industries-hero {
          position: relative;
          padding: 125px 0 55px;
          background: #f7fbfe;
          overflow: hidden;
        }

        .industries-grid-bg {
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
            transparent 85%
          );
        }

        .industries-hero::after {
          content: "";
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          right: -200px;
          top: -300px;
          background: rgba(105, 178, 230, 0.09);
          filter: blur(45px);
        }

        .industries-hero .industries-container {
          position: relative;
          z-index: 2;
        }

        .industries-hero-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(17, 20, 24, 0.09);
        }

        .industries-index {
          color: #8a949d;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        .industries-hero-main {
          display: grid;
          grid-template-columns: 1.2fr 0.55fr;
          gap: 100px;
          align-items: end;
          padding: 95px 0 115px;
        }

        .industries-hero-main h1 {
          margin: 0;
          font-size: clamp(70px, 9vw, 120px);
          line-height: 0.88;
          letter-spacing: -0.07em;
        }

        .industries-hero-main h1 span {
          color: #69b2e6;
        }

        .industries-hero-side {
          padding-bottom: 8px;
        }

        .industries-hero-side p {
          margin: 0;
          color: #5d6872;
          font-size: 16px;
          line-height: 1.8;
        }

        .industries-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-top: 28px;
          padding-bottom: 7px;
          border-bottom: 1px solid #111418;
          color: #111418;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition: 0.25s ease;
        }

        .industries-link:hover {
          color: #2f79a8;
          border-color: #2f79a8;
          gap: 13px;
        }

        .industries-hero-bottom {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 22px;
          align-items: center;
          color: #8a949d;
          font-size: 10px;
          font-weight: 700;
        }

        .industries-hero-bottom span {
          color: #2f79a8;
        }

        .industries-hero-bottom div {
          height: 1px;
          background: rgba(17, 20, 24, 0.12);
        }

        /* INTRO */

        .industries-intro {
          padding: 145px 0;
        }

        .industries-intro-grid {
          display: grid;
          grid-template-columns: 0.45fr 1fr;
          gap: 100px;
        }

        .industries-intro h2 {
          margin: -10px 0 30px;
          font-size: clamp(44px, 5vw, 70px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .industries-intro h2 span,
        .industries-heading h2 span,
        .capabilities-layout h2 span,
        .industries-cta h2 span {
          color: #69b2e6;
        }

        .industries-intro p {
          max-width: 650px;
          margin: 0;
          color: #5d6872;
          font-size: 17px;
          line-height: 1.85;
        }

        /* LIST */

        .industries-list-section {
          padding: 140px 0;
          background: #f7fbfe;
        }

        .industries-heading {
          display: grid;
          grid-template-columns: 1fr 0.5fr;
          gap: 100px;
          align-items: end;
          margin-bottom: 85px;
        }

        .industries-heading h2 {
          margin: 25px 0 0;
          font-size: clamp(48px, 5vw, 72px);
          line-height: 0.95;
          letter-spacing: -0.055em;
        }

        .industries-heading > p {
          margin: 0;
          color: #5d6872;
          font-size: 15px;
          line-height: 1.8;
        }

        .industries-list {
          border-top: 1px solid rgba(17, 20, 24, 0.12);
        }

        .industry-row {
          display: grid;
          grid-template-columns: 70px 55px 1fr 45px;
          gap: 25px;
          align-items: start;
          padding: 42px 0;
          border-bottom: 1px solid rgba(17, 20, 24, 0.12);
          transition: 0.3s ease;
        }

        .industry-row:hover {
          padding-left: 12px;
          padding-right: 12px;
          background: rgba(255, 255, 255, 0.6);
        }

        .industry-number {
          color: #69b2e6;
          font-size: 12px;
          font-weight: 700;
          padding-top: 5px;
        }

        .industry-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid rgba(105, 178, 230, 0.28);
          color: #2f79a8;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .industry-content h3 {
          margin: 0;
          font-size: 28px;
          letter-spacing: -0.04em;
        }

        .industry-content p {
          max-width: 680px;
          margin: 13px 0 18px;
          color: #5d6872;
          font-size: 14px;
          line-height: 1.75;
        }

        .industry-services {
          color: #2f79a8;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .industry-arrow {
          width: 34px;
          height: 34px;
          border: 1px solid rgba(105, 178, 230, 0.25);
          border-radius: 50%;
          color: #2f79a8;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.25s ease;
        }

        .industry-row:hover .industry-arrow {
          background: #69b2e6;
          color: #ffffff;
          transform: rotate(-45deg);
        }

        /* CAPABILITIES */

        .industries-capabilities {
          padding: 145px 0;
        }

        .capabilities-layout {
          display: grid;
          grid-template-columns: 0.8fr 1fr;
          gap: 130px;
        }

        .capabilities-layout h2 {
          margin: 25px 0 0;
          font-size: clamp(44px, 5vw, 68px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .capabilities-list {
          border-top: 1px solid rgba(17, 20, 24, 0.1);
        }

        .capabilities-list > div {
          display: grid;
          grid-template-columns: 45px 160px 1fr;
          gap: 20px;
          align-items: center;
          padding: 25px 0;
          border-bottom: 1px solid rgba(17, 20, 24, 0.1);
        }

        .capabilities-list span {
          color: #69b2e6;
          font-size: 10px;
          font-weight: 700;
        }

        .capabilities-list strong {
          font-size: 16px;
        }

        .capabilities-list p {
          margin: 0;
          color: #5d6872;
          font-size: 13px;
        }

        /* STATEMENT */

        .industries-statement {
          padding: 150px 0;
          background: #0c1217;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .industries-statement::after {
          content: "";
          position: absolute;
          width: 650px;
          height: 650px;
          right: -280px;
          top: -350px;
          border-radius: 50%;
          background: rgba(105, 178, 230, 0.08);
          filter: blur(30px);
        }

        .statement-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 0.45fr 1fr;
          gap: 100px;
        }

        .industries-statement h2 {
          margin: -10px 0 35px;
          font-size: clamp(55px, 7vw, 100px);
          line-height: 0.9;
          letter-spacing: -0.065em;
        }

        .industries-statement h2 span {
          color: #69b2e6;
        }

        .industries-statement p {
          max-width: 550px;
          margin: 0;
          color: rgba(255, 255, 255, 0.58);
          font-size: 16px;
          line-height: 1.8;
        }

        /* CTA */

        .industries-cta {
          padding: 135px 0;
          background: #e4f3fb;
        }

        .industries-cta-grid {
          display: grid;
          grid-template-columns: 1fr 0.55fr;
          gap: 100px;
          align-items: end;
        }

        .industries-cta h2 {
          margin: 25px 0 0;
          font-size: clamp(52px, 6vw, 82px);
          line-height: 0.92;
          letter-spacing: -0.06em;
        }

        .industries-cta-side p {
          margin: 0;
          color: #5d6872;
          font-size: 15px;
          line-height: 1.8;
        }

        .industries-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 28px;
          padding: 14px 20px;
          border-radius: 999px;
          background: #111418;
          color: #ffffff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition: 0.25s ease;
        }

        .industries-cta-button:hover {
          background: #2f79a8;
          transform: translateY(-2px);
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {
          .industries-container {
            width: min(100% - 40px, 1240px);
          }

          .industries-hero-main,
          .industries-intro-grid,
          .industries-heading,
          .capabilities-layout,
          .statement-grid,
          .industries-cta-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .industries-hero-main {
            padding: 75px 0 85px;
          }

          .industry-row {
            grid-template-columns: 55px 50px 1fr 40px;
          }

          .capabilities-layout {
            gap: 70px;
          }
        }

        @media (max-width: 650px) {
          .industries-container {
            width: calc(100% - 32px);
          }

          .industries-hero {
            padding-top: 90px;
          }

          .industries-hero-main {
            padding: 60px 0 70px;
          }

          .industries-hero-main h1 {
            font-size: 55px;
          }

          .industries-intro,
          .industries-list-section,
          .industries-capabilities,
          .industries-statement,
          .industries-cta {
            padding: 90px 0;
          }

          .industries-intro h2,
          .industries-heading h2,
          .capabilities-layout h2 {
            font-size: 45px;
          }

          .industry-row {
            grid-template-columns: 38px 42px 1fr;
            gap: 12px;
          }

          .industry-arrow {
            display: none;
          }

          .industry-icon {
            width: 40px;
            height: 40px;
          }

          .industry-content h3 {
            font-size: 23px;
          }

          .capabilities-list > div {
            grid-template-columns: 35px 1fr;
          }

          .capabilities-list p {
            grid-column: 2;
            margin-top: -12px;
          }

          .industries-statement h2,
          .industries-cta h2 {
            font-size: 52px;
          }
        }
      `}</style>
    </div>
  );
}

export default Industries;