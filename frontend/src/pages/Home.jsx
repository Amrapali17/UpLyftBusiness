import {
  ArrowUpRight,
  Code2,
  Megaphone,
  Palette,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const industries = [
    {
      number: "01",
      title: "Professional Services",
    },
    {
      number: "02",
      title: "Retail & E-commerce",
    },
    {
      number: "03",
      title: "B2B Businesses",
    },
    {
      number: "04",
      title: "Startups",
    },
    {
      number: "05",
      title: "Local Businesses",
    },
    {
      number: "06",
      title: "Growing Brands",
    },
  ];

  const services = [
    {
      number: "01",
      icon: <Code2 size={22} />,
      title: "Web Development",
      description:
        "Professional websites and digital experiences built around your business goals.",
      tags: ["Websites", "UI/UX", "Development"],
    },
    {
      number: "02",
      icon: <Megaphone size={22} />,
      title: "Digital Marketing",
      description:
        "Strategies that help your business reach the right audience and generate meaningful growth.",
      tags: ["SEO", "Content", "Growth"],
    },
    {
      number: "03",
      icon: <Smartphone size={22} />,
      title: "Social Media",
      description:
        "Consistent, creative and strategic social media management that builds your brand.",
      tags: ["Strategy", "Content", "Management"],
    },
    {
      number: "04",
      icon: <Target size={22} />,
      title: "Performance Advertising",
      description:
        "Data-driven campaigns designed to turn attention into leads, customers and revenue.",
      tags: ["Meta Ads", "Google Ads", "Performance"],
    },
    {
      number: "05",
      icon: <Palette size={22} />,
      title: "Creative & Branding",
      description:
        "Visual identities and creative systems that make your business memorable.",
      tags: ["Branding", "Design", "Creative"],
    },
    {
      number: "06",
      icon: <TrendingUp size={22} />,
      title: "Growth & Strategy",
      description:
        "Clear digital strategies that connect technology, marketing and business growth.",
      tags: ["Strategy", "Analytics", "Growth"],
    },
  ];

  const team = [
    {
      number: "01",
      role: "Founder & CEO",
      name: "Vedant Somnath Ghuge",
      description:
        "Leading UpLyftBusiness's vision, direction and overall business growth.",
    },
    {
      number: "02",
      role: "Co-Founder & Tech Lead",
      name: "Amrapali Pandurang Dhobe",
      description:
        "Driving operations, execution and building strong digital solutions.",
    },
    {
      number: "03",
      role: "Growth & Marketing Director",
      name: "Maitreya Milind Ranjanikar",
      description:
        "Building growth strategies, marketing systems and opportunities for expansion.",
    },
    {
      number: "04",
      role: "Chief Technology Officer",
      name: "Om Navneet Patil",
      description:
        "Leading technology, development and the technical direction of UpLyftBusiness.",
    },
    
    {
      number: "05",
      role: "Chief Strategy Officer",
      name: "Avanti Kailash Zore",
      description:
        "Shaping business strategy, market opportunities and long-term growth.",
        image: "/avi.png",
    },
  ];

  return (
    <div className="site">
      <Navbar />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="hero">
          <div className="growth-background">
            <div className="growth-grid"></div>

            <div className="growth-bars">
              <span style={{ height: "8%" }}></span>
              <span style={{ height: "16%" }}></span>
              <span style={{ height: "25%" }}></span>
              <span style={{ height: "34%" }}></span>
              <span style={{ height: "43%" }}></span>
              <span style={{ height: "53%" }}></span>
              <span style={{ height: "64%" }}></span>
              <span style={{ height: "74%" }}></span>
              <span style={{ height: "85%" }}></span>
              <span style={{ height: "96%" }}></span>
            </div>

            <div className="growth-glow"></div>
          </div>

          <div className="hero-content">
            <div className="hero-copy">
              <div className="eyebrow">
                <Sparkles size={15} />
                DIGITAL & TECHNOLOGY
              </div>

              <h1>
                Digital solutions
                <br />
                that move <span>business</span>
                <br />
                forward.
              </h1>

              <p className="hero-description">
                We help businesses build, strengthen and scale their digital
                presence through technology, creativity and performance-driven
                solutions.
              </p>

              <div className="hero-actions">
                <Link to="/enquire" className="primary-button">
                  Start a Project
                  <ArrowUpRight size={17} />
                </Link>

                <Link to="/services" className="secondary-button">
                  Explore Services
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="hero-meta">
                <span>Digital Strategy</span>
                <span>Technology</span>
                <span>Creative</span>
              </div>
            </div>

            {/* BUILD / GROW / SCALE */}

            <div className="hero-growth-message">
              <h2>
                <span className="growth-word word-build">Build.</span>
                <span className="growth-word word-grow">Grow.</span>
                <span className="growth-word word-scale">Scale.</span>
              </h2>

              <div className="growth-divider"></div>

              <p className="growth-hindi">
                <span>बनाओ</span>
                <b>•</b>
                <span>बढ़ाओ</span>
                <b>•</b>
                <span>बढ़ाते जाओ</span>
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            STATEMENT
        ====================================================== */}

        <section className="statement">
          <div className="section-label">
            <span></span>
            WHAT WE DO
          </div>

          <p className="statement-text">
            From digital presence
            <br />
            to business <span>growth.</span>
          </p>
        </section>

        {/* =====================================================
            INDUSTRIES
        ====================================================== */}

        <section className="industries-section">
          <div className="industries-bg-grid"></div>
          <div className="industries-bg-glow"></div>

          <div className="section-heading industries-heading">
            <div>
              <div className="section-label">
                <span></span>
                INDUSTRIES
              </div>

              <h2>
                Built for businesses
                <br />
                at every <span>stage.</span>
              </h2>
            </div>

            <p>
              From early-stage startups to established businesses, our
              solutions adapt to where you are and where you want to go.
            </p>
          </div>

          <div className="industries-grid">
            {industries.map((industry) => (
              <Link
                to="/services"
                className="industry-card"
                key={industry.number}
              >
                <div className="industry-card-top">
                  <span>{industry.number}</span>
                  <ArrowUpRight size={18} />
                </div>

                <h3>{industry.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <section className="services-section">
          <div className="section-heading">
            <div>
              <div className="section-label">
                <span></span>
                OUR SERVICES
              </div>

              <h2>
                Everything you need
                <br />
                to go <span>digital.</span>
              </h2>
            </div>

            <p>
              We combine technology, creative thinking and digital growth to
              create solutions that work together.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <Link
                to="/services"
                className="service-card"
                key={service.number}
              >
                <div className="service-top">
                  <span className="service-number">{service.number}</span>

                  <div className="icon-box">{service.icon}</div>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <ArrowUpRight className="service-arrow" size={20} />
              </Link>
            ))}
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ====================================================== */}

        <section className="about-section">
          <div className="about-visual">
    <div className="visual-grid">
      <div className="about-logo-circle">
        <img
          src="/logo.png"
          alt="UpLyftBusiness Logo"
          className="about-logo-image"
        />
      </div>
      

              <div className="visual-badge">
                <span className="badge-dot"></span>
                BUILT TO MOVE
              </div>
            </div>
          </div>

          <div className="about-content">
            <div className="section-label">
              <span></span>
              ABOUT UpLyftBusiness
            </div>

            <h2>
              Built for businesses
              <br />
              ready to <span>move forward.</span>
            </h2>

            <p>
              UpLyftBusiness is a digital and technology services company
              helping businesses create stronger digital experiences, reach
              their audience and build systems for sustainable growth.
            </p>

            <p>
              We bring strategy, technology, creative and performance together
              so businesses don't have to work with multiple disconnected
              partners.
            </p>

            <Link to="/about" className="text-link">
              More about UpLyftBusiness
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>

        {/* =====================================================
            OUR TEAM
        ====================================================== */}

        <section className="team-section">
          <div className="section-heading team-heading">
            <div>
              <div className="section-label">
                <span></span>
                OUR TEAM
              </div>

              <h2>
                The people behind
                <br />
                <span>UpLyftBusiness.</span>
              </h2>
            </div>

            <p>
              A focused team bringing together business, technology, strategy,
              marketing and creative thinking.
            </p>
          </div>

          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.number}>
                <div className="team-card-top">
                  <span className="team-number">{member.number}</span>

                  <div className="team-avatar">
                    {member.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                </div>

                <div className="team-info">
                  <div className="team-role">{member.role}</div>

                  <h3>{member.name}</h3>

                  <p>{member.description}</p>
                </div>

                <div className="team-line"></div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="cta-section">
          <div className="cta-glow"></div>

          <div className="section-label">
            <span></span>
            LET'S TALK
          </div>

          <h2>
            Let's build something
            <br />
            worth <span>remembering.</span>
          </h2>

          <Link to="/enquire" className="primary-button">
            Start a Conversation
            <ArrowUpRight size={18} />
          </Link>
        </section>
      </main>

      <Footer />

      <style>{`
        /* =====================================================
           BASE
        ====================================================== */

        .site {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          background: #ffffff;
          color: #111418;
        }

        .hero,
        .statement,
        .services-section,
        .about-section,
        .team-section,
        .cta-section,
        .industries-section {
          box-sizing: border-box;
        }

        /* =====================================================
           HERO
        ====================================================== */

        .hero {
          position: relative;
          min-height: 720px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #ffffff;
          border-bottom: 1px solid rgba(17, 20, 24, 0.07);
        }

        .hero-content {
          position: relative;
          z-index: 5;
          width: min(1240px, calc(100% - 48px));
          min-height: 720px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 0.72fr;
          align-items: center;
          gap: 70px;
          padding: 100px 0 80px;
        }

        .hero-copy {
          position: relative;
          z-index: 10;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
          color: #2f79a8;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
        }

        .hero h1 {
          margin: 0;
          color: #111418;
          font-size: clamp(58px, 7vw, 92px);
          line-height: 0.94;
          letter-spacing: -0.065em;
          font-weight: 750;
        }

        .hero h1 span {
          color: #2f79a8;
        }

        .hero-description {
          max-width: 570px;
          margin: 30px 0 0;
          color: #5d6872;
          font-size: 16px;
          line-height: 1.8;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 32px;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 52px;
          padding: 0 22px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .primary-button {
          background: #0c1217;
          color: #ffffff;
          box-shadow: 0 12px 30px rgba(12, 18, 23, 0.12);
        }

        .primary-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 40px rgba(12, 18, 23, 0.18);
        }

        .secondary-button {
          background: #ffffff;
          color: #111418;
          border: 1px solid rgba(17, 20, 24, 0.08);
        }

        .secondary-button:hover {
          transform: translateY(-2px);
          border-color: rgba(105, 178, 230, 0.35);
        }

        .hero-meta {
          display: flex;
          align-items: center;
          gap: 22px;
          margin-top: 34px;
          color: #8a949d;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .hero-meta span {
          position: relative;
        }

        .hero-meta span:not(:last-child)::after {
          content: "";
          position: absolute;
          right: -12px;
          top: 50%;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #69b2e6;
        }

        /* =====================================================
           HERO BACKGROUND
        ====================================================== */

        .growth-background {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }

        .growth-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              rgba(47, 121, 168, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(47, 121, 168, 0.04) 1px,
              transparent 1px
            );
          background-size: 70px 70px;
        }

        .growth-bars {
          position: absolute;
          right: -2%;
          bottom: 0;
          width: 62%;
          height: 62%;
          display: flex;
          align-items: flex-end;
          gap: 14px;
          opacity: 0.2;
          mask-image: linear-gradient(
            to top,
            black 0%,
            black 55%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to top,
            black 0%,
            black 55%,
            transparent 100%
          );
          animation: barsReveal 1.8s ease-out forwards;
        }

        .growth-bars span {
          flex: 1;
          min-width: 18px;
          background: linear-gradient(
            to top,
            #155477,
            #2f79a8
          );
          border-radius: 5px 5px 0 0;
          transform-origin: bottom;
          animation: barGrow 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }

        .growth-bars span:nth-child(1) {
          animation-delay: 0.05s;
        }

        .growth-bars span:nth-child(2) {
          animation-delay: 0.12s;
        }

        .growth-bars span:nth-child(3) {
          animation-delay: 0.19s;
        }

        .growth-bars span:nth-child(4) {
          animation-delay: 0.26s;
        }

        .growth-bars span:nth-child(5) {
          animation-delay: 0.33s;
        }

        .growth-bars span:nth-child(6) {
          animation-delay: 0.4s;
        }

        .growth-bars span:nth-child(7) {
          animation-delay: 0.47s;
        }

        .growth-bars span:nth-child(8) {
          animation-delay: 0.54s;
        }

        .growth-bars span:nth-child(9) {
          animation-delay: 0.61s;
        }

        .growth-bars span:nth-child(10) {
          animation-delay: 0.68s;
        }

        .growth-glow {
          position: absolute;
          right: 5%;
          bottom: 5%;
          width: 420px;
          height: 260px;
          background: rgba(47, 121, 168, 0.08);
          filter: blur(90px);
          border-radius: 50%;
        }

        /* =====================================================
           BUILD / GROW / SCALE
        ====================================================== */

        .hero-growth-message {
          position: relative;
          z-index: 20;
          width: 390px;
          margin-left: auto;
          transform: translateY(-75px);
          padding: 0;
          background: transparent;
          border: none;
          box-shadow: none;

          /* FASTER */
          animation: messageReveal 0.55s ease-out 1.65s both;
        }

        .hero-growth-message h2 {
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
          color: #123b52;
          font-size: clamp(64px, 6.5vw, 94px);
          line-height: 0.86;
          letter-spacing: -0.065em;
          font-weight: 900;
        }

        .growth-word {
          display: block;
          color: #123b52;
          opacity: 0;
          transform: translateY(18px) scale(0.96);

          /* FASTER WORD ANIMATION */
          animation: wordPop 0.45s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        /* BUILD */
        .word-build {
          animation-delay: 1.75s;
        }

        /* GROW */
        .word-grow {
          animation-delay: 1.92s;
        }

        /* SCALE */
        .word-scale {
          animation-delay: 2.09s;
        }

        .growth-divider {
          width: 58px;
          height: 2px;
          margin: 27px 0 17px;
          background: #2f79a8;
          border-radius: 2px;
          opacity: 0;

          /* FASTER */
          animation: fadeUp 0.4s ease-out 2.28s forwards;
        }

        .growth-hindi {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0;
          color: #123b52;
          font-size: 27px;
          font-weight: 850;
          opacity: 0;

          /* FASTER */
          animation: fadeUp 0.45s ease-out 2.4s forwards;
        }

        .growth-hindi span {
          color: #2f79a8;
          font-weight: 850;
        }

        .growth-hindi b {
          color: #69b2e6;
          font-size: 17px;
          font-weight: 850;
        }

        /* =====================================================
           STATEMENT
        ====================================================== */

        .statement {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
          padding: 140px 0;
          background: #ffffff;
        }

        .statement-text {
          margin: 30px 0 0;
          max-width: 900px;
          color: #111418;
          font-size: clamp(48px, 6vw, 82px);
          line-height: 0.98;
          letter-spacing: -0.06em;
          font-weight: 700;
        }

        .statement-text span {
          color: #2f79a8;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2f79a8;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
        }

        .section-label span {
          width: 28px;
          height: 1px;
          background: #69b2e6;
        }

        /* =====================================================
           SECTION HEADINGS
        ====================================================== */

        .section-heading {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto 65px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 50px;
        }

        .section-heading h2 {
          margin: 18px 0 0;
          color: #111418;
          font-size: clamp(42px, 5vw, 70px);
          line-height: 0.98;
          letter-spacing: -0.055em;
          font-weight: 700;
        }

        .section-heading h2 span {
          color: #2f79a8;
        }

        .services-section .section-heading h2,
        .services-section .section-heading h2 span {
          color: #111418;
        }

        .section-heading > p {
          max-width: 400px;
          margin: 0;
          color: #5d6872;
          font-size: 15px;
          line-height: 1.8;
        }

        /* =====================================================
           INDUSTRIES
        ====================================================== */

        .industries-section {
          position: relative;
          padding: 140px 0;
          overflow: hidden;
          background: #eaf6fc;
          border-top: 1px solid rgba(105, 178, 230, 0.2);
          border-bottom: 1px solid rgba(105, 178, 230, 0.2);
        }

        .industries-bg-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.72;
          background-image:
            linear-gradient(
              rgba(47, 121, 168, 0.065) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(47, 121, 168, 0.065) 1px,
              transparent 1px
            );
          background-size: 58px 58px;
        }

        .industries-bg-glow {
          position: absolute;
          width: 560px;
          height: 560px;
          right: -190px;
          top: -210px;
          border-radius: 50%;
          background: rgba(105, 178, 230, 0.17);
          filter: blur(105px);
          pointer-events: none;
        }

        .industries-heading {
          position: relative;
          z-index: 2;
          margin-bottom: 60px;
        }

        .industries-heading h2 {
          color: #123b52;
        }

        .industries-heading h2 span {
          color: #2f79a8;
        }

        .industries-heading > p {
          color: #536873;
        }

        .industries-grid {
          position: relative;
          z-index: 2;
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .industry-card {
          position: relative;
          min-height: 190px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(105, 178, 230, 0.24);
          border-radius: 18px;
          box-shadow: 0 12px 35px rgba(30, 70, 95, 0.05);
          backdrop-filter: blur(8px);
          text-decoration: none;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .industry-card::after {
          content: "";
          position: absolute;
          right: -50px;
          bottom: -50px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(105, 178, 230, 0.1);
          transition: transform 0.3s ease;
        }

        .industry-card:hover {
          transform: translateY(-6px);
          border-color: rgba(47, 121, 168, 0.38);
          box-shadow: 0 22px 50px rgba(30, 70, 95, 0.1);
        }

        .industry-card:hover::after {
          transform: scale(1.8);
        }

        .industry-card-top {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .industry-card-top span {
          color: #7c9aa9;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .industry-card-top svg {
          color: #2f79a8;
          transition: transform 0.25s ease;
        }

        .industry-card:hover .industry-card-top svg {
          transform: translate(3px, -3px);
        }

        .industry-card h3 {
          position: relative;
          z-index: 3;
          margin: 35px 0 0;
          color: #123b52;
          font-size: 23px;
          line-height: 1.15;
          letter-spacing: -0.03em;
        }

        /* =====================================================
           SERVICES
        ====================================================== */

        .services-section {
          padding: 140px 0;
          background: #ffffff;
        }

        .services-grid {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .service-card {
          position: relative;
          min-height: 350px;
          padding: 32px;
          display: block;
          background: #ffffff;
          border: 1px solid rgba(17, 20, 24, 0.08);
          border-radius: 20px;
          box-shadow: 0 12px 35px rgba(30, 70, 95, 0.04);
          text-decoration: none;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          border-color: rgba(105, 178, 230, 0.3);
          box-shadow: 0 20px 45px rgba(30, 70, 95, 0.08);
        }

        .service-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .service-number {
          color: #8a949d;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .icon-box {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2f79a8;
          background: #edf7fc;
          border: 1px solid rgba(105, 178, 230, 0.24);
          border-radius: 12px;
        }

        .service-card h3 {
          margin: 55px 0 15px;
          color: #123b52;
          font-size: 24px;
          line-height: 1.1;
          letter-spacing: -0.035em;
        }

        .service-card p {
          max-width: 300px;
          margin: 0;
          color: #5d6872;
          font-size: 14px;
          line-height: 1.75;
        }

        .service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 28px;
        }

        .service-tags span {
          padding: 7px 10px;
          color: #68737c;
          background: #f6f9fa;
          border: 1px solid rgba(17, 20, 24, 0.07);
          border-radius: 999px;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .service-arrow {
          position: absolute;
          right: 30px;
          bottom: 30px;
          color: #2f79a8;
        }

        /* =====================================================
           ABOUT
        ====================================================== */

        .about-section {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
          padding: 150px 0;
          display: grid;
          grid-template-columns: 0.9fr 1fr;
          gap: 100px;
          align-items: center;
          background: #ffffff;
        }

        .about-visual {
          min-height: 470px;
          overflow: hidden;
          background: #edf7fc;
          border-radius: 24px;
        }

        .visual-grid {
          position: relative;
          width: 100%;
          min-height: 470px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image:
            linear-gradient(
              rgba(47, 121, 168, 0.09) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(47, 121, 168, 0.09) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }

        .visual-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          color: rgba(47, 121, 168, 0.14);
          font-size: clamp(58px, 7vw, 90px);
          font-weight: 800;
          line-height: 0.82;
          letter-spacing: -0.07em;
          filter: blur(8px);
          opacity: 0;
          transform: translateY(18px) scale(0.96);
          animation: visualLogoReveal 1.1s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            0.25s
            forwards;
        }

        .visual-text span {
          display: block;
        }

        .visual-text span:first-child {
          animation: visualLogoWordReveal 0.75s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            0.4s
            both;
        }

        .visual-text span:last-child {
          animation: visualLogoWordReveal 0.75s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            0.58s
            both;
        }

        .visual-badge {
          position: absolute;
          right: 25px;
          bottom: 25px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 15px;
          background: #ffffff;
          border-radius: 999px;
          color: #2f79a8;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #2f79a8;
        }

        .about-content h2 {
          margin: 22px 0 28px;
          color: #111418;
          font-size: clamp(42px, 5vw, 68px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .about-content h2 span {
          color: #2f79a8;
        }

        .about-content p {
          max-width: 560px;
          margin: 0 0 18px;
          color: #5d6872;
          font-size: 15px;
          line-height: 1.85;
        }

        .text-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 12px;
          color: #123b52;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
        }

        .text-link:hover {
          text-decoration: underline;
        }

        /* =====================================================
           TEAM
        ====================================================== */
         
        .team-section {
          padding: 150px 0;
          background: #ffffff;
          border-top: 1px solid rgba(17, 20, 24, 0.06);
        }

        .team-grid {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }

        .team-card {
          position: relative;
          min-height: 350px;
          padding: 25px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          background: #f7fbfe;
          border: 1px solid rgba(105, 178, 230, 0.2);
          border-radius: 18px;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .team-card:hover {
          transform: translateY(-6px);
          border-color: rgba(47, 121, 168, 0.3);
          box-shadow: 0 20px 50px rgba(30, 70, 95, 0.08);
        }

        .team-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .team-number {
          color: #8a949d;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .team-avatar {
          width: 54px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #123b52;
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .team-info {
          margin-top: auto;
        }

        .team-role {
          margin-bottom: 10px;
          color: #2f79a8;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          line-height: 1.5;
        }

        .team-info h3 {
          margin: 0 0 12px;
          color: #111418;
          font-size: 21px;
          letter-spacing: -0.03em;
        }

        .team-info p {
          margin: 0;
          color: #68737c;
          font-size: 12px;
          line-height: 1.7;
        }

        .team-line {
          width: 35px;
          height: 2px;
          margin-top: 22px;
          background: #69b2e6;
          border-radius: 2px;
        }

        /* =====================================================
           FINAL CTA
        ====================================================== */

        .cta-section {
          position: relative;
          padding: 150px 24px;
          overflow: hidden;
          text-align: center;
          background: #edf7fc;
          border-top: 1px solid rgba(105, 178, 230, 0.24);
        }

        .cta-section .section-label {
          position: relative;
          z-index: 2;
          justify-content: center;
        }

        .cta-section h2 {
          position: relative;
          z-index: 2;
          margin: 25px 0 35px;
          color: #111418;
          font-size: clamp(48px, 6vw, 78px);
          line-height: 0.98;
          letter-spacing: -0.06em;
        }

        .cta-section h2 span {
          color: #2f79a8;
        }

        .cta-section .primary-button {
          position: relative;
          z-index: 2;
        }

        .cta-glow {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 500px;
          height: 500px;
          transform: translate(-50%, -50%);
          background: rgba(105, 178, 230, 0.15);
          filter: blur(90px);
          border-radius: 50%;
        }

        /* =====================================================
           ANIMATIONS
        ====================================================== */

        @keyframes messageReveal {
          from {
            opacity: 0;
            transform: translateY(-45px);
          }

          to {
            opacity: 1;
            transform: translateY(-75px);
          }
        }

        @keyframes wordPop {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes barsReveal {
          from {
            opacity: 0;
          }

          to {
            opacity: 0.2;
          }
        }

        @keyframes barGrow {
          from {
            transform: scaleY(0);
          }

          to {
            transform: scaleY(1);
          }
        }

        @keyframes visualLogoReveal {
          from {
            opacity: 0;
            filter: blur(8px);
            transform: translateY(18px) scale(0.96);
          }

          to {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0) scale(1);
          }
        }

        @keyframes visualLogoWordReveal {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 1100px) {
          .hero-content {
            grid-template-columns: 1fr 0.65fr;
            gap: 40px;
          }

          .hero h1 {
            font-size: clamp(50px, 7vw, 72px);
          }

          .team-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .industries-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* =====================================================
           TABLET / MOBILE
        ====================================================== */

        @media (max-width: 800px) {
          .hero {
            min-height: auto;
          }

          .hero-content {
            min-height: 800px;
            grid-template-columns: 1fr;
            align-content: center;
            padding: 100px 0 70px;
          }

          .hero-growth-message {
            width: min(390px, 90%);
            margin: 0 auto;
            transform: translateY(-35px);
          }

          .growth-bars {
            width: 100%;
            height: 48%;
          }

          .section-heading {
            flex-direction: column;
            align-items: flex-start;
            gap: 25px;
          }

          .about-section {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 600px) {
          .hero-content,
          .statement,
          .section-heading,
          .industries-grid,
          .services-grid,
          .about-section,
          .team-grid {
            width: min(100% - 32px, 1240px);
          }

          .hero-content {
            min-height: 760px;
          }

          .hero h1 {
            font-size: 51px;
          }

          .hero-description {
            font-size: 14px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .hero-actions a {
            width: 100%;
          }

          .hero-meta {
            flex-wrap: wrap;
            gap: 12px;
          }

          .hero-growth-message {
            width: 100%;
            padding: 0;
            transform: translateY(-25px);
          }

          .hero-growth-message h2 {
            font-size: 61px;
          }

          .growth-hindi {
            flex-wrap: wrap;
            gap: 7px;
            font-size: 25px;
          }

          .growth-bars {
            right: -20%;
            width: 120%;
          }

          .statement {
            padding: 100px 0;
          }

          .statement-text {
            font-size: 46px;
          }

          .industries-section,
          .services-section,
          .about-section,
          .team-section {
            padding: 100px 0;
          }

          .section-heading {
            margin-bottom: 45px;
          }

          .section-heading h2 {
            font-size: 43px;
          }

          .industries-grid,
          .services-grid,
          .team-grid {
            grid-template-columns: 1fr;
          }

          .industry-card {
            min-height: 165px;
          }

          .service-card {
            min-height: 330px;
          }

          .about-visual,
          .visual-grid {
            min-height: 350px;
          }

          .visual-text {
            font-size: 65px;
          }

          .cta-section {
            padding: 100px 20px;
          }

          .cta-section h2 {
            font-size: 46px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {
          .growth-bars span,
          .hero-growth-message,
          .growth-word,
          .growth-divider,
          .growth-hindi,
          .visual-text,
          .visual-text span {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }

          .industry-card,
          .service-card,
          .team-card,
          .primary-button,
          .secondary-button {
            transition: none !important;
          }
        }
        .team-member-photo {
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #69b2e6;
  background: #edf7fc;
  box-shadow: 0 8px 24px rgba(47, 121, 168, 0.15);
}

.team-member-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .team-member-photo {
    width: 100px;
    height: 100px;
  }
}

      `}</style>
    </div>
  );
}

export default Home;