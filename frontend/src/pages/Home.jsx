import { useEffect, useState } from "react";

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
  const [activeTeam, setActiveTeam] = useState(0);


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

      id: "web-development",

      number: "01",

      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
      icon: <Code2 size={22} />,

      title: "Web Development",

      description:

        "Professional websites and digital experiences built around your business goals.",

      tags: ["Websites", "UI/UX", "Development"],

    },

    {

      id: "digital-marketing",

      number: "02",

      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
      icon: <Megaphone size={22} />,

      title: "Digital Marketing",

      description:

        "Strategies that help your business reach the right audience and generate meaningful growth.",

      tags: ["SEO", "Content", "Growth"],

    },

    {

      id: "social-media-management",

      number: "03",

      image: "https://images.unsplash.com/photo-1724862936518-ae7fcfc052c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      icon: <Smartphone size={22} />,

      title: "Social Media",

      description:

        "Consistent, creative and strategic social media management that builds your brand.",

      tags: ["Strategy", "Content", "Management"],

    },

    {

      id: "advertising-performance",

      number: "04",

      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85",
      icon: <Target size={22} />,

      title: "Performance Advertising",

      description:

        "Data-driven campaigns designed to turn attention into leads, customers and revenue.",

      tags: ["Meta Ads", "Google Ads", "Performance"],

    },

    {

      id: "whatsapp-automation",

      number: "05",

      image: "https://images.unsplash.com/photo-1610548822783-33fb5cb0e3a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      icon: <Palette size={22} />,

      title: "WhatsApp Automation",

      description:

        "Automated conversations designed to engage leads and convert chats into customers.",

      tags: ["Chatbots", "Auto-replies", "Lead Nurturing"],

    },

    {

      id: "growth-strategy",

      number: "06",

      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85",
      icon: <TrendingUp size={22} />,

      title: "Growth & Strategy",

      description:

        "Clear digital strategies that connect technology, marketing and business growth.",

      tags: ["Strategy", "Analytics", "Growth"],

    },

  ];

 const team = [
  {
    role: "Founder & CEO",
    name: "Vedant Somnath Ghuge",
    image: "/vedant.png",
    description:
      "Leading UpLyftBusiness's vision, direction and overall business growth.",
  },
  {
    role: "Co-Founder & Tech Lead",
    name: "Amrapali Pandurang Dhobe",
    image: "/amrapali.png",
    description:
      "Driving operations, execution and building strong client relationships.",
  },
  {
    role: "Growth & Marketing Director",
    name: "Maitreya Milind Ranjanikar",
    image: "/matty.png",
    description:
      "Building growth strategies, marketing systems and opportunities for expansion.",
  },
  {
    role: "Chief Technology Officer",
    name: "Om Navneet Patil",
    image: "/omp.png",
    description:
      "Leading technology, development and the technical direction of UpLyftBusiness.",
  },
  {
    role: "Chief Strategy Officer",
    name: "Avanti Kailash Zore",
    image: "/avanti.png",
    description:
      "Shaping business strategy, market opportunities and long-term growth.",
  },
];

  useEffect(() => {
    if (!team.length) return undefined;
    const timer = window.setInterval(() => {
      setActiveTeam((current) => (current + 1) % team.length);
    }, 2500);
    return () => window.clearInterval(timer);
  }, [team.length]);

  return (

    <div className="site">

      <Navbar />

      <main>

        {/* =====================================================

            HERO

        \====================================================== */}

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

                <span>बढ़ते जाओ</span>

              </p>

            </div>

          </div>

        </section>

        {/* =====================================================

            STATEMENT

        \====================================================== */}

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

        \====================================================== */}

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

        \====================================================== */}

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
            {services.map((service, index) => (
              <Link
                to={`/services/${service.id}`}
                className="service-card"
                key={service.number}
                style={{ "--card-index": index }}
              >
                <div className="service-image-wrap">
                  <img src={service.image} alt={service.title} className="service-image" loading="lazy" />
                  <span className="service-image-number">{service.number}</span>
                </div>
                <div className="service-top">
                  <span className="service-number">{service.number}</span>
                  <div className="icon-box">{service.icon}</div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <ArrowUpRight className="service-arrow" size={20} />
              </Link>
            ))}
          </div>
        </section>

        {/* =====================================================

            ABOUT

        \====================================================== */}

        <section className="about-section">

          <div className="about-visual">

            <div className="visual-grid">

              <div className="about-logo-circle">
                <img
                  src="/logo.png"
                  alt="UpLyftBusiness logo"
                  className="about-logo-image"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <span className="about-logo-fallback">UpLyft<span>Business</span></span>
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

              UpLyftBusiness is a digital and technology services company helping

              businesses create stronger digital experiences, reach their

              audience and build systems for sustainable growth.

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

        \====================================================== */}

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

          <div className="team-carousel-window" aria-label="UpLyftBusiness team carousel">
            <div className="team-carousel-track">
              {team.map((member, index) => {
                const position = (index - activeTeam + team.length) % team.length;
                const positionClass =
                  position === 0
                    ? "active"
                    : position === 1
                    ? "next"
                    : position === team.length - 1
                    ? "previous"
                    : "hidden";
                const hiddenDirection = position <= Math.floor(team.length / 2) ? 1 : -1;

                return (
                  <article
                    className={`team-card team-card-${positionClass}`}
                    key={member.name}
                    style={{ "--hidden-direction": hiddenDirection }}
                    aria-hidden={positionClass === "hidden"}
                  >
                    <div className="team-card-top">
                      {member.image ? (
                        <div className="team-avatar team-avatar-photo">
                          <img
                            src={member.image}
                            alt={`${member.name} - ${member.role}`}
                            loading="lazy"
                            onError={(event) => {
                              const img = event.currentTarget;
                              const avatar = img.parentElement;
                              img.style.display = "none";
                              avatar.classList.remove("team-avatar-photo");
                              avatar.classList.add("team-avatar-fallback");
                              avatar.textContent = member.name
                                .split(" ")
                                .map((word) => word[0])
                                .join("")
                                .slice(0, 2)
                                .toUpperCase();
                            }}
                          />
                        </div>
                      ) : (
                        <div className="team-avatar" aria-hidden="true">
                          {member.name.split(" ").map((word) => word[0]).join("").slice(0, 2)}
                        </div>
                      )}
                    </div>
                    <div className="team-info">
                      <div className="team-role">{member.role}</div>
                      <h3>{member.name}</h3>
                      <p>{member.description}</p>
                    </div>
                    <div className="team-line"></div>
                  </article>
                );
              })}
            </div>
            <div className="team-carousel-footer" aria-live="polite">
              <div className="team-carousel-dots" aria-label="Team member position">
                {team.map((member, index) => (
                  <button
                    key={member.name}
                    type="button"
                    className={`team-carousel-dot ${index === activeTeam ? "is-active" : ""}`}
                    aria-label={`Show ${member.name}`}
                    aria-pressed={index === activeTeam}
                    onClick={() => setActiveTeam(index)}
                  />
                ))}
              </div>
              <span className="team-carousel-count">
                {String(activeTeam + 1).padStart(2, "0")} <span>/</span> {String(team.length).padStart(2, "0")}
              </span>
            </div>
          </div>

        </section>

        {/* =====================================================

            FINAL CTA

        \====================================================== */}

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

        \====================================================== */

        .site {
width: 100%;
min-height: 100vh;
overflow-x: hidden;
background: #ffffff;
color: #111418;
transition: background-color 0.3s ease, color 0.3s ease;
}

/* Dark mode - homepage base */
body.dark-mode .site {
background: #0b1117;
color: #e8eef4;
}

        /* Dark mode - Hero section */
body.dark-mode .hero {
background: #0b1117 !important;
color: #e8eef4 !important;
}

body.dark-mode .hero h1,
body.dark-mode .hero h2,
body.dark-mode .hero p {
color: #e8eef4 !important;
}


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

        \====================================================== */

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

        \====================================================== */

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

            \#155477,

            \#2f79a8

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

        \====================================================== */

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

          animation: messageReveal 0.4s ease-out 0.05s both;

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

          transform: translateY(25px) scale(0.94);

          animation: wordPop 0.42s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;

        }

        .word-build {

          animation-delay: 0.12s;

        }

        .word-grow {

          animation-delay: 0.25s;

        }

        .word-scale {

          animation-delay: 0.38s;

        }

        .growth-divider {

          width: 58px;

          height: 2px;

          margin: 27px 0 17px;

          background: #2f79a8;

          border-radius: 2px;

          opacity: 0;

          animation: fadeUp 0.3s ease-out 0.52s forwards;

        }

        .growth-hindi {

          display: flex;

          align-items: center;

          gap: 10px;

          margin: 0;

          color: #123b52;

          font-size: 21px;

          font-weight: 850;

          opacity: 0;

          animation: fadeUp 0.35s ease-out 0.62s forwards;

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

        \====================================================== */

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

        \====================================================== */

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

        /* ONLY SERVICES HEADING IS BLACK */

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

        \====================================================== */

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

        \====================================================== */

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

        \====================================================== */

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

        .about-logo-circle {
          position: relative;
          width: min(250px, 68%);
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px;
          border: 1px solid rgba(105, 178, 230, 0.24);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.94);
          box-shadow: 0 24px 65px rgba(18, 59, 82, 0.12);
          animation: visualLogoReveal 850ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }

        .about-logo-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .about-logo-fallback {
          display: none;
          color: #123b52;
          font-size: clamp(22px, 3vw, 34px);
          line-height: 1.05;
          text-align: center;
          font-weight: 800;
          letter-spacing: -0.06em;
        }

        .about-logo-fallback span {
          display: block;
          color: #2f79a8;
        }

        .visual-text {

          color: rgba(47, 121, 168, 0.14);

          font-size: 90px;

          font-weight: 800;

          letter-spacing: -0.07em;

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

.team-carousel-window {
  width: min(1240px, calc(100% - 48px));
  margin: 0 auto;
  perspective: 1200px;
}

.team-carousel-track {
  position: relative;
  height: 390px;
  isolation: isolate;
}

/* Team cards */

.team-card {
  position: absolute;
  top: 12px;
  left: 50%;
  width: min(420px, 64%);
  min-height: 400px;
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background: #f7fbfe;
  border: 1px solid rgba(105, 178, 230, 0.2);
  border-radius: 20px;
  box-shadow: 0 14px 38px rgba(30, 70, 95, 0.06);
  transform-origin: center center;
  transition:
    transform 750ms cubic-bezier(0.22, 0.75, 0.2, 1),
    opacity 650ms ease,
    filter 650ms ease,
    box-shadow 300ms ease,
    border-color 300ms ease;
  will-change: transform, opacity;

  /* Center horizontally and move upward */
  margin-left: auto;
  margin-right: auto;
  transform: translateY(-30px);
}

.team-card-active {
  z-index: 3;
  opacity: 1;
  filter: none;
  transform: translateX(-50%) scale(1);
  border-color: rgba(47, 121, 168, 0.36);
  box-shadow: 0 26px 65px rgba(30, 70, 95, 0.14);
}

.team-card-next {
  z-index: 2;
  opacity: 0.62;
  filter: saturate(0.78);
  transform: translateX(35%) scale(0.88);
}

.team-card-previous {
  z-index: 2;
  opacity: 0.62;
  filter: saturate(0.78);
  transform: translateX(-135%) scale(0.88);
}

.team-card-hidden {
  z-index: 1;
  opacity: 0;
  pointer-events: none;
  filter: blur(2px);
  transform: translateX(
    calc(-50% + var(--hidden-direction, 1) * 115%)
  ) scale(0.78);
}

.team-card-active:hover {
  border-color: rgba(47, 121, 168, 0.48);
  box-shadow: 0 30px 72px rgba(30, 70, 95, 0.17);
}

/* Card header */

.team-card-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  width: 100%;
}
.team-card-top > .team-number {
  align-self: flex-start;
}

.team-number {
  color: #8a949d;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

/* =====================================================
   TEAM MEMBER PROFILE PHOTOS
====================================================== */

.team-avatar {
  width: 210px;
  height: 210px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  border: 3px solid #69b2e6;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(-20px);
}

.team-avatar-photo img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
}
/* Photo container */

.team-avatar-photo {
  padding: 0;
  background: #edf7fc;
}

/* Actual profile image */

.team-avatar-photo img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
  object-fit: cover;
  object-position: center;
  border: none;
  border-radius: 50%;
}

/* Initials fallback */

.team-avatar-fallback {
  background: #123b52;
  color: #ffffff;
}

/* =====================================================
   TEAM MEMBER INFORMATION
====================================================== */

.team-info h3 {
  margin: 0 0 12px;
  color: #111418;
  font-size: 21px;
  letter-spacing: -0.03em;
  line-height: 1.3;
  overflow-wrap: anywhere;
  text-align: center;
}

.team-role {
  margin-bottom: 12px;
  color: #2f79a8;
  font-size: 16px; /* Increased from 10px */
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1.6;
  text-align: center;
}

.team-info h3 {
  margin: 0 0 12px;
  color: #111418;
  font-size: 21px;
  letter-spacing: -0.03em;
  line-height: 1.3;
  overflow-wrap: anywhere;
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
  flex-shrink: 0;
}

/* =====================================================
   CAROUSEL NAVIGATION
====================================================== */

.team-carousel-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  margin-top: 4px;
}

.team-carousel-dots {
  display: flex;
  align-items: center;
  gap: 8px;
}

.team-carousel-dot {
  width: 7px;
  height: 7px;
  padding: 0;
  border: 0;
  border-radius: 99px;
  background: #c6dce8;
  cursor: pointer;
  transition:
    width 250ms ease,
    background 250ms ease;
}

.team-carousel-dot.is-active {
  width: 26px;
  background: #2f79a8;
}

.team-carousel-dot:focus-visible {
  outline: 2px solid #2f79a8;
  outline-offset: 4px;
}

.team-carousel-count {
  color: #123b52;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.team-carousel-count span {
  padding: 0 4px;
  color: #9ab7c7;
}

/* =====================================================
   TABLET
====================================================== */

@media (max-width: 800px) {
  .team-section {
    padding: 110px 0;
  }

  .team-carousel-window {
    width: calc(100% - 32px);
  }

  .team-carousel-track {
    height: 370px;
  }

  .team-card {
    width: min(340px, 72%);
    min-height: 325px;
    padding: 23px;
  }

  .team-card-next {
    transform: translateX(18%) scale(0.84);
    opacity: 0.42;
  }

  .team-card-previous {
    transform: translateX(-118%) scale(0.84);
    opacity: 0.42;
  }
}

/* =====================================================
   MOBILE
====================================================== */

@media (max-width: 600px) {
  .team-section {
    padding: 90px 0;
  }

  .team-carousel-window {
    width: calc(100% - 32px);
  }

  .team-carousel-track {
    height: 380px;
  }

  .team-card {
    top: 8px;
    width: min(330px, 86%);
    min-height: 335px;
    padding: 22px;
  }

  .team-card-next {
    transform: translateX(5%) scale(0.82);
    opacity: 0.22;
  }

  .team-card-previous {
    transform: translateX(-105%) scale(0.82);
    opacity: 0.22;
  }

  .team-card-hidden {
    transform: translateX(
      calc(-50% + var(--hidden-direction, 1) * 125%)
    ) scale(0.76);
  }

  .team-avatar {
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  border: 3px solid #69b2e6;
  border-radius: 50%;
  transform: translateY(-50px);
}

  .team-info h3 {
    font-size: 19px;
  }

  .team-info p {
    font-size: 12px;
  }
}

/* =====================================================
   REDUCED MOTION
====================================================== */

@media (prefers-reduced-motion: reduce) {
  .team-card,
  .team-carousel-dot {
    transition: none !important;
  }
}

        /* =====================================================

           FINAL CTA

        \====================================================== */

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

        \====================================================== */

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

        @keyframes teamQueueEnter {

          0% {
            opacity: 0;
            transform: translateY(28px) scale(0.94) rotate(-2deg);
          }

          70% {
            opacity: 1;
            transform: translateY(-3px) scale(1.01) rotate(0.5deg);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0);
          }
        }

        @keyframes teamAvatarPop {
          0% {
            opacity: 0;
            transform: scale(0.55) rotate(-18deg);
          }

          75% {
            opacity: 1;
            transform: scale(1.08) rotate(4deg);
          }

          100% {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }

        @keyframes wordPop {

          from {

            opacity: 0;

            transform: translateY(25px) scale(0.94);

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

        /* =====================================================

           TABLET

        \====================================================== */

        @media (max-width: 1100px) {

          .hero-content {

            grid-template-columns: 1fr 0.65fr;

            gap: 40px;

          }

          .hero h1 {

            font-size: clamp(50px, 7vw, 72px);

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

        \====================================================== */

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

        }

        /* =====================================================

           MOBILE

        \====================================================== */

        @media (max-width: 600px) {

          .hero-content,

          .statement,

          .section-heading,

          .industries-grid,

          .services-grid,

          .about-section,

          .team-carousel-window {

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

            font-size: 18px;

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

          .about-logo-circle {
            width: min(210px, 68%);
            padding: 22px;
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

        \====================================================== */

        /* SERVICE IMAGES AND STAGGERED CARD ANIMATIONS */
       .services-grid { align-items: stretch; }
       .service-card {
         min-width: 0;
         overflow: hidden;
         padding: 12px;
         animation: staggerCardIn 650ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
         animation-delay: calc(var(--card-index, 0) * 120ms);
       }
       .service-image-wrap {
         position: relative;
         width: 100%;
         height: 190px;
         margin-bottom: 22px;
         overflow: hidden;
         border-radius: 14px;
         background: #edf7fc;
       }
       .service-image {
         display: block;
         width: 100%;
         height: 100%;
         object-fit: cover;
         transition: transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1);
       }
       .service-card:hover .service-image { transform: scale(1.07); }
       .service-image-number {
         position: absolute;
         top: 12px;
         left: 12px;
         z-index: 2;
         padding: 7px 11px;
         border: 1px solid rgba(255, 255, 255, 0.6);
         border-radius: 999px;
         background: rgba(255, 255, 255, 0.92);
         color: #123b52;
         font-size: 11px;
         font-weight: 700;
         backdrop-filter: blur(8px);
       }
       .service-card h3 { margin-top: 22px; }
       .about-logo-circle:has(.about-logo-image[style*="display: none"]) .about-logo-fallback { display: block; }
       .team-card { animation: none; }
       .team-avatar-photo {
         flex-shrink: 0;
         overflow: hidden;
         padding: 0;
         border: 2px solid #69b2e6;
       }
       .team-avatar-photo img {
         display: block;
         width: 100%;
         height: 100%;
         object-fit: cover;
         object-position: center;
         border-radius: 50%;
       }
       @keyframes staggerCardIn {
         from { opacity: 0; translate: 0 24px; }
         to { opacity: 1; translate: 0 0; }
       }
       @media (max-width: 600px) {
         .service-image-wrap { height: 210px; }
         .service-card { padding: 12px; }
       }

       @media (max-width: 800px) {
         .team-carousel-track { height: 370px; }
         .team-card { width: min(340px, 72%); min-height: 325px; }
         .team-card-next { transform: translateX(18%) scale(0.84); opacity: 0.42; }
         .team-card-previous { transform: translateX(-118%) scale(0.84); opacity: 0.42; }
       }
       @media (max-width: 600px) {
         .team-carousel-window { width: calc(100% - 32px); }
         .team-carousel-track { height: 380px; }
         .team-card { top: 8px; width: min(330px, 86%); min-height: 335px; padding: 22px; }
         .team-card-next { transform: translateX(5%) scale(0.82); opacity: 0.22; }
         .team-card-previous { transform: translateX(-105%) scale(0.82); opacity: 0.22; }
         .team-card-hidden { transform: translateX(calc(-50% + var(--hidden-direction, 1) * 125%)) scale(0.76); }
       }

       @media (prefers-reduced-motion: reduce) {
          .service-card,
          .team-card {
            animation: none !important;
            opacity: 1;
            translate: none;
          }
        @media (prefers-reduced-motion: reduce) {
         .service-card, 
         .team-card {
          animation: none !important;
           opacity: 1;
            translate: none;
         } 
            
         .service-image,
         .team-card,
         .team-carousel-dot,
         .industry-card,
         .primary-button,
         .secondary-button {
           transition: none !important; 
         } 
         .growth-bars span, 
         .hero-growth-message, 
         .growth-word, 
         .growth-divider, 
         .growth-hindi {
          animation: none !important; opacity: 1 !important; transform: none !important;
          } 
        } 
          @media (max-width: 600px) {
           .team-avatar {
            width: 170px; height: 170px;
            flex-shrink: 
            0; 
            position: relative; 
            overflow: hidden; 
            margin-left: 
            auto; 
            margin-right: 
            auto; border: 
            3px solid #69b2e6; 
            border-radius: 50%; 
            transform: translateY(-30px); 
            } 
          }


          .growth-bars span,

          .hero-growth-message,

          .growth-word,

          .growth-divider,

          .growth-hindi {

            animation: none !important;

            opacity: 1 !important;

            transform: none !important;

          }

          .industry-card,

          .service-card,

          .team-card,

          .primary-button,

          .secondary-button {

            transition: none !important;

          }


        }

        /* =====================================
DARK MODE - ALL HOMEPAGE SECTIONS
===================================== */

body.dark-mode .site,
body.dark-mode .site .hero,
body.dark-mode .site .statement,
body.dark-mode .site .industries-section,
body.dark-mode .site .services-section,
body.dark-mode .site .about-section,
body.dark-mode .site .team-section,
body.dark-mode .site .cta-section {
background-color: #0b1117 !important;
color: #e8eef4 !important;
}

/* Headings and paragraphs */
body.dark-mode .site h1,
body.dark-mode .site h2,
body.dark-mode .site h3,
body.dark-mode .site h4,
body.dark-mode .site p,
body.dark-mode .site .statement-text,
body.dark-mode .site .about-content h2,
body.dark-mode .site .team-info h3,
body.dark-mode .site .cta-section h2 {
color: #e8eef4 !important;
}

/* Service and industry cards */
body.dark-mode .site .service-card,
body.dark-mode .site .industry-card,
body.dark-mode .site .team-card {
background-color: #131d27 !important;
border-color: #293b4a !important;
}

/* Card text */
body.dark-mode .site .service-card h3,
body.dark-mode .site .service-card p,
body.dark-mode .site .industry-card h3,
body.dark-mode .site .team-info h3,
body.dark-mode .site .team-info p,
body.dark-mode .site .team-carousel-count {
color: #e8eef4 !important;
}

/* Service tags and icon backgrounds */
body.dark-mode .site .service-tags span,
body.dark-mode .site .icon-box {
background-color: #1c2a37 !important;
color: #dceaf5 !important;
border-color: #34495a !important;
}

/* About section visual */
body.dark-mode .site .about-visual,
body.dark-mode .site .visual-grid {
background-color: #131d27 !important;
}

/* About logo and badge */
body.dark-mode .site .about-logo-circle,
body.dark-mode .site .visual-badge {
background-color: #1c2a37 !important;
color: #e8eef4 !important;
}

/* Buttons */
body.dark-mode .site .secondary-button {
background-color: #17232e !important;
color: #e8eef4 !important;
border-color: #34495a !important;
}

/* Keep blue accent text blue */
body.dark-mode .site .section-label,
body.dark-mode .site .section-heading h2 span,
body.dark-mode .site .statement-text span,
body.dark-mode .site .about-content h2 span,
body.dark-mode .site .cta-section h2 span,
body.dark-mode .site .service-arrow {
color: #69b2e6 !important;
}


      `}</style>

    </div>

  );

}

export default Home;