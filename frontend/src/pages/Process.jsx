import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Search,
  Compass,
  Layers3,
  Rocket,
  TrendingUp,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      icon: Search,
      description:
        "We begin by understanding your business, your audience and the opportunity in front of you.",
      details: [
        "Business goals",
        "Audience & market",
        "Current digital presence",
      ],
    },
    {
      number: "02",
      title: "Define",
      icon: Compass,
      description:
        "We turn what we learn into a clear direction, defining what needs to be built, improved or changed.",
      details: [
        "Strategy & positioning",
        "Scope & priorities",
        "Project roadmap",
      ],
    },
    {
      number: "03",
      title: "Create",
      icon: Layers3,
      description:
        "Our team brings the strategy to life through thoughtful design, technology and creative execution.",
      details: [
        "Design & development",
        "Content & creative",
        "Testing & refinement",
      ],
    },
    {
      number: "04",
      title: "Launch",
      icon: Rocket,
      description:
        "Before anything goes live, we refine the details and make sure the final experience is ready.",
      details: [
        "Quality assurance",
        "Performance checks",
        "Deployment",
      ],
    },
    {
      number: "05",
      title: "Evolve",
      icon: TrendingUp,
      description:
        "We continue to improve the solution as your business, customers and digital needs evolve.",
      details: [
        "Optimisation",
        "Marketing & growth",
        "Ongoing support",
      ],
    },
  ];

  return (
    <div className="process-page">
      <Navbar />

      <main>
        {/* HERO */}

        <section className="process-hero">
          <div className="process-hero-grid"></div>

          <div className="process-container">
            <div className="process-hero-top">
              <div className="process-label">
                <span></span>
                OUR PROCESS
              </div>

              <div className="process-hero-index">01 — 05</div>
            </div>

            <div className="process-hero-main">
              <h1>
                A better way
                <br />
                <span>to move forward.</span>
              </h1>

              <div className="process-hero-side">
                <p>
                  We combine strategy, technology and creativity through a
                  simple process built around one goal — helping your business
                  move forward.
                </p>

                <Link to="/enquire" className="process-text-link">
                  Start a conversation
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>

            <div className="process-hero-bottom">
              <div>
                <span>01</span>
                Discover
              </div>

              <div className="process-progress">
                <span></span>
              </div>

              <div>
                <span>05</span>
                Evolve
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}

        <section className="process-intro">
          <div className="process-container">
            <div className="process-intro-grid">
              <div className="process-label dark-label">
                <span></span>
                HOW WE WORK
              </div>

              <div>
                <h2>
                  Clear thinking.
                  <br />
                  <span>Strong execution.</span>
                </h2>

                <p>
                  Good digital work starts long before development. We take
                  time to understand the problem, establish the right
                  direction and then build with purpose.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}

        <section className="process-work">
          <div className="process-container">
            <div className="process-work-heading">
              <div>
                <div className="process-label">
                  <span></span>
                  THE UpLyftBusiness METHOD
                </div>

                <h2>
                  From idea
                  <br />
                  <span>to impact.</span>
                </h2>
              </div>

              <p>
                Every engagement is different, but the thinking behind our
                process remains consistent.
              </p>
            </div>

            <div className="steps-list">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article className="process-item" key={step.number}>
                    <div className="process-item-number">
                      {step.number}
                    </div>

                    <div className="process-item-icon">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>

                    <div className="process-item-main">
                      <div className="process-item-heading">
                        <h3>{step.title}</h3>

                        <span className="process-item-arrow">
                          <ArrowRight size={18} />
                        </span>
                      </div>

                      <p>{step.description}</p>

                      <div className="process-details">
                        {step.details.map((detail) => (
                          <span key={detail}>{detail}</span>
                        ))}
                      </div>
                    </div>

                    <div className="process-item-status">
                      {index === 0
                        ? "START"
                        : index === steps.length - 1
                        ? "ONGOING"
                        : `0${index + 1}`}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}

        <section className="process-principles">
          <div className="process-container">
            <div className="process-principles-top">
              <div className="process-label dark-label">
                <span></span>
                OUR PRINCIPLES
              </div>

              <p>
                The way we work matters as much as what we deliver.
              </p>
            </div>

            <div className="principles-list">
              <div className="principle">
                <span>01</span>
                <div>
                  <h3>Business first</h3>
                  <p>
                    Technology and design should solve a business problem, not
                    simply exist for the sake of looking impressive.
                  </p>
                </div>
              </div>

              <div className="principle">
                <span>02</span>
                <div>
                  <h3>Simple by design</h3>
                  <p>
                    We remove unnecessary complexity and focus on experiences
                    that are easy to understand and use.
                  </p>
                </div>
              </div>

              <div className="principle">
                <span>03</span>
                <div>
                  <h3>Built for tomorrow</h3>
                  <p>
                    We create flexible foundations that can adapt as your
                    business grows and changes.
                  </p>
                </div>
              </div>

              <div className="principle">
                <span>04</span>
                <div>
                  <h3>Always improving</h3>
                  <p>
                    Launching is not the finish line. We look for ways to
                    improve performance, experience and growth over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DARK STATEMENT */}

        <section className="process-statement">
          <div className="process-container">
            <div className="statement-layout">
              <div className="process-label light-label">
                <span></span>
                THE UpLyftBusiness APPROACH
              </div>

              <div>
                <h2>
                  Don't just
                  <br />
                  <span>keep up.</span>
                  <br />
                  Move ahead.
                </h2>

                <p>
                  We build digital foundations that help businesses look
                  better, work smarter and grow with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="process-cta">
          <div className="process-container">
            <div className="process-cta-grid">
              <div>
                <div className="process-label">
                  <span></span>
                  NEXT STEP
                </div>

                <h2>
                  Have a project
                  <br />
                  <span>in mind?</span>
                </h2>
              </div>

              <div className="process-cta-side">
                <p>
                  Tell us what you're building, what you're trying to solve or
                  simply where you want to go next.
                </p>

                <Link to="/enquire" className="process-cta-button">
                  Let's talk
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        /* =========================================
           UpLyftBusiness — PROCESS PAGE
           Premium / Editorial / Minimal
        ========================================= */

        .process-page {
          background: #ffffff;
          color: #111418;
          min-height: 100vh;
          overflow: hidden;
        }

        .process-container {
          width: min(1240px, calc(100% - 64px));
          margin: 0 auto;
        }

        /* -----------------------------------------
           COMMON LABEL
        ----------------------------------------- */

        .process-label {
          display: flex;
          align-items: center;
          gap: 11px;
          color: #2f79a8;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .process-label span {
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

        /* -----------------------------------------
           HERO
        ----------------------------------------- */

        .process-hero {
          position: relative;
          padding: 125px 0 55px;
          background: #f7fbfe;
          overflow: hidden;
        }

        .process-hero-grid {
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
            black 0%,
            transparent 85%
          );
        }

        .process-hero::after {
          content: "";
          position: absolute;
          width: 620px;
          height: 620px;
          border-radius: 50%;
          background: rgba(105, 178, 230, 0.08);
          filter: blur(50px);
          right: -180px;
          top: -300px;
        }

        .process-hero .process-container {
          position: relative;
          z-index: 2;
        }

        .process-hero-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(17, 20, 24, 0.09);
        }

        .process-hero-index {
          color: #8a949d;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        .process-hero-main {
          display: grid;
          grid-template-columns: 1.2fr 0.55fr;
          gap: 100px;
          align-items: end;
          padding: 95px 0 115px;
        }

        .process-hero-main h1 {
          margin: 0;
          font-size: clamp(64px, 8vw, 112px);
          line-height: 0.91;
          letter-spacing: -0.065em;
          font-weight: 700;
        }

        .process-hero-main h1 span {
          color: #69b2e6;
        }

        .process-hero-side {
          padding-bottom: 8px;
        }

        .process-hero-side p {
          margin: 0;
          color: #5d6872;
          font-size: 16px;
          line-height: 1.8;
        }

        .process-text-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-top: 28px;
          color: #111418;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          border-bottom: 1px solid #111418;
          padding-bottom: 7px;
          transition: 0.25s ease;
        }

        .process-text-link:hover {
          color: #2f79a8;
          border-color: #2f79a8;
          gap: 13px;
        }

        .process-hero-bottom {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 22px;
          color: #8a949d;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .process-hero-bottom div {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .process-hero-bottom span {
          color: #2f79a8;
        }

        .process-progress {
          height: 1px;
          background: rgba(17, 20, 24, 0.12);
          position: relative;
        }

        .process-progress span {
          position: absolute;
          left: 0;
          top: 0;
          width: 20%;
          height: 1px;
          background: #69b2e6;
        }

        /* -----------------------------------------
           INTRO
        ----------------------------------------- */

        .process-intro {
          padding: 145px 0;
          background: #ffffff;
        }

        .process-intro-grid {
          display: grid;
          grid-template-columns: 0.45fr 1fr;
          gap: 100px;
        }

        .process-intro h2 {
          margin: -10px 0 30px;
          font-size: clamp(44px, 5vw, 70px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .process-intro h2 span {
          color: #69b2e6;
        }

        .process-intro p {
          max-width: 650px;
          margin: 0;
          color: #5d6872;
          font-size: 17px;
          line-height: 1.85;
        }

        /* -----------------------------------------
           PROCESS WORK
        ----------------------------------------- */

        .process-work {
          padding: 140px 0;
          background: #f7fbfe;
        }

        .process-work-heading {
          display: grid;
          grid-template-columns: 1fr 0.5fr;
          gap: 100px;
          align-items: end;
          margin-bottom: 90px;
        }

        .process-work-heading h2 {
          margin: 25px 0 0;
          font-size: clamp(48px, 5vw, 72px);
          line-height: 0.95;
          letter-spacing: -0.055em;
        }

        .process-work-heading h2 span {
          color: #69b2e6;
        }

        .process-work-heading > p {
          margin: 0;
          color: #5d6872;
          font-size: 15px;
          line-height: 1.8;
        }

        .steps-list {
          border-top: 1px solid rgba(17, 20, 24, 0.12);
        }

        .process-item {
          display: grid;
          grid-template-columns: 80px 55px 1fr 80px;
          gap: 25px;
          align-items: start;
          padding: 42px 0;
          border-bottom: 1px solid rgba(17, 20, 24, 0.12);
          transition: 0.3s ease;
        }

        .process-item:hover {
          padding-left: 12px;
          padding-right: 12px;
          background: rgba(255, 255, 255, 0.55);
        }

        .process-item-number {
          color: #69b2e6;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding-top: 5px;
        }

        .process-item-icon {
          width: 46px;
          height: 46px;
          border: 1px solid rgba(105, 178, 230, 0.28);
          border-radius: 50%;
          color: #2f79a8;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
        }

        .process-item-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
        }

        .process-item-heading h3 {
          margin: 0;
          font-size: 30px;
          line-height: 1.1;
          letter-spacing: -0.04em;
        }

        .process-item-arrow {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2f79a8;
          border: 1px solid rgba(105, 178, 230, 0.25);
          transition: 0.25s ease;
        }

        .process-item:hover .process-item-arrow {
          background: #69b2e6;
          color: #ffffff;
          transform: rotate(-45deg);
        }

        .process-item-main > p {
          max-width: 650px;
          margin: 14px 0 22px;
          color: #5d6872;
          font-size: 14px;
          line-height: 1.75;
        }

        .process-details {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .process-details span {
          padding: 7px 11px;
          border: 1px solid rgba(17, 20, 24, 0.08);
          border-radius: 999px;
          color: #5d6872;
          background: rgba(255, 255, 255, 0.7);
          font-size: 10px;
          font-weight: 600;
        }

        .process-item-status {
          color: #8a949d;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-align: right;
          padding-top: 7px;
        }

        /* -----------------------------------------
           PRINCIPLES
        ----------------------------------------- */

        .process-principles {
          padding: 140px 0;
          background: #ffffff;
        }

        .process-principles-top {
          display: grid;
          grid-template-columns: 0.45fr 1fr;
          gap: 100px;
          padding-bottom: 65px;
          border-bottom: 1px solid rgba(17, 20, 24, 0.09);
        }

        .process-principles-top p {
          margin: 0;
          color: #5d6872;
          font-size: 15px;
        }

        .principles-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 100px;
        }

        .principle {
          display: grid;
          grid-template-columns: 55px 1fr;
          gap: 20px;
          padding: 42px 0;
          border-bottom: 1px solid rgba(17, 20, 24, 0.09);
        }

        .principle > span {
          color: #69b2e6;
          font-size: 11px;
          font-weight: 700;
          padding-top: 4px;
        }

        .principle h3 {
          margin: 0 0 10px;
          font-size: 22px;
          letter-spacing: -0.035em;
        }

        .principle p {
          max-width: 390px;
          margin: 0;
          color: #5d6872;
          font-size: 13px;
          line-height: 1.75;
        }

        /* -----------------------------------------
           DARK STATEMENT
        ----------------------------------------- */

        .process-statement {
          position: relative;
          padding: 150px 0;
          background: #0c1217;
          color: #ffffff;
          overflow: hidden;
        }

        .process-statement::before {
          content: "";
          position: absolute;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          right: -300px;
          top: -400px;
          background: rgba(105, 178, 230, 0.08);
          filter: blur(30px);
        }

        .statement-layout {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 0.45fr 1fr;
          gap: 100px;
        }

        .process-statement h2 {
          margin: -10px 0 35px;
          font-size: clamp(58px, 7vw, 100px);
          line-height: 0.9;
          letter-spacing: -0.065em;
        }

        .process-statement h2 span {
          color: #69b2e6;
        }

        .process-statement p {
          max-width: 530px;
          margin: 0;
          color: rgba(255, 255, 255, 0.58);
          font-size: 16px;
          line-height: 1.8;
        }

        /* -----------------------------------------
           CTA
        ----------------------------------------- */

        .process-cta {
          padding: 135px 0;
          background: #e4f3fb;
        }

        .process-cta-grid {
          display: grid;
          grid-template-columns: 1fr 0.55fr;
          gap: 100px;
          align-items: end;
        }

        .process-cta h2 {
          margin: 25px 0 0;
          font-size: clamp(52px, 6vw, 82px);
          line-height: 0.92;
          letter-spacing: -0.06em;
        }

        .process-cta h2 span {
          color: #69b2e6;
        }

        .process-cta-side p {
          margin: 0;
          color: #5d6872;
          font-size: 15px;
          line-height: 1.8;
        }

        .process-cta-button {
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

        .process-cta-button:hover {
          background: #2f79a8;
          transform: translateY(-2px);
        }

        /* -----------------------------------------
           RESPONSIVE
        ----------------------------------------- */

        @media (max-width: 900px) {
          .process-container {
            width: min(100% - 40px, 1240px);
          }

          .process-hero-main,
          .process-intro-grid,
          .process-work-heading,
          .process-principles-top,
          .statement-layout,
          .process-cta-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .process-hero-main {
            padding: 75px 0 85px;
          }

          .process-hero-main h1 {
            font-size: clamp(58px, 11vw, 90px);
          }

          .process-item {
            grid-template-columns: 55px 50px 1fr;
          }

          .process-item-status {
            display: none;
          }

          .principles-list {
            column-gap: 40px;
          }
        }

        @media (max-width: 650px) {
          .process-container {
            width: calc(100% - 32px);
          }

          .process-hero {
            padding-top: 90px;
          }

          .process-hero-main {
            padding: 60px 0 70px;
          }

          .process-hero-main h1 {
            font-size: 52px;
          }

          .process-hero-side p {
            font-size: 15px;
          }

          .process-intro,
          .process-work,
          .process-principles,
          .process-statement,
          .process-cta {
            padding: 90px 0;
          }

          .process-intro h2,
          .process-work-heading h2 {
            font-size: 46px;
          }

          .process-item {
            grid-template-columns: 42px 42px 1fr;
            gap: 13px;
            padding: 32px 0;
          }

          .process-item:hover {
            padding-left: 5px;
            padding-right: 5px;
          }

          .process-item-heading h3 {
            font-size: 25px;
          }

          .process-item-icon {
            width: 40px;
            height: 40px;
          }

          .process-details span {
            font-size: 9px;
          }

          .principles-list {
            grid-template-columns: 1fr;
          }

          .process-statement h2 {
            font-size: 55px;
          }

          .process-cta h2 {
            font-size: 55px;
          }
        }
      `}</style>
    </div>
  );
}

export default Process;