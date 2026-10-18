import {
    ArrowUpRight,
    BarChart3,
    Code2,
    Globe,
    Layers3,
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
  
  function Work() {
    const projects = [
      {
        number: "01",
        category: "Business Website",
        title: "Modern digital presence for a growing business.",
        description:
          "A professional, responsive website designed to communicate the brand clearly, build trust and convert visitors into enquiries.",
        tags: ["Web Design", "Development", "Responsive"],
        icon: Globe,
        type: "website",
        featured: true,
      },
      {
        number: "02",
        category: "Brand & Creative",
        title: "A stronger visual identity for a modern brand.",
        description:
          "A cohesive visual system covering brand direction, digital creatives and marketing assets designed for consistent communication.",
        tags: ["Branding", "Creative", "Social Media"],
        icon: Palette,
        type: "branding",
      },
      {
        number: "03",
        category: "Digital Marketing",
        title: "A digital growth system built around visibility.",
        description:
          "A connected approach combining content, search, social media and performance marketing to create a stronger digital presence.",
        tags: ["Marketing", "SEO", "Performance"],
        icon: TrendingUp,
        type: "marketing",
      },
      {
        number: "04",
        category: "Landing Page",
        title: "A focused digital experience built for conversion.",
        description:
          "A purpose-built landing page designed around a clear offer, strong messaging and a simple path toward enquiry or action.",
        tags: ["Landing Page", "UI/UX", "Conversion"],
        icon: Target,
        type: "landing",
      },
      {
        number: "05",
        category: "Social Media",
        title: "Consistent content that keeps brands moving.",
        description:
          "A structured social media presence combining creative direction, content planning and consistent brand communication.",
        tags: ["Content", "Creative", "Social"],
        icon: Megaphone,
        type: "social",
      },
      {
        number: "06",
        category: "Digital Strategy",
        title: "Turning scattered digital activity into a system.",
        description:
          "A practical digital roadmap connecting website, marketing, creative and growth priorities into one clear direction.",
        tags: ["Strategy", "Growth", "Planning"],
        icon: BarChart3,
        type: "strategy",
      },
    ];
  
    const capabilities = [
      {
        icon: Code2,
        title: "Web & Technology",
        text: "Fast, responsive and scalable digital experiences built around real business requirements.",
      },
      {
        icon: Palette,
        title: "Creative & Branding",
        text: "Visual systems and creative assets that help businesses communicate with consistency.",
      },
      {
        icon: Megaphone,
        title: "Marketing & Growth",
        text: "Digital campaigns and strategies designed to improve visibility, engagement and acquisition.",
      },
    ];
  
    return (
      <div className="work-page">
        <style>{`
          .work-page {
            --bg: #ffffff;
            --bg-soft: #f7fbfe;
            --bg-blue: #edf7fc;
            --bg-blue-2: #e4f3fb;
            --text: #111418;
            --text-soft: #5d6872;
            --text-muted: #8a949d;
            --accent: #69b2e6;
            --accent-light: #9ed5f2;
            --accent-dark: #2f79a8;
            --navy: #0c1217;
            --line: rgba(17, 20, 24, 0.08);
            --line-blue: rgba(105, 178, 230, 0.24);
            --max-width: 1240px;
  
            background: var(--bg);
            color: var(--text);
            overflow: hidden;
          }
  
          .work-page *,
          .work-page *::before,
          .work-page *::after {
            box-sizing: border-box;
          }
  
          .work-container {
            width: min(var(--max-width), calc(100% - 48px));
            margin: 0 auto;
          }
  
          /* =========================
             HERO
          ========================= */
  
          .work-hero {
            position: relative;
            min-height: 570px;
            display: flex;
            align-items: center;
            padding: 105px 0 95px;
            background:
              radial-gradient(
                circle at 80% 20%,
                rgba(105, 178, 230, 0.18),
                transparent 30%
              ),
              linear-gradient(
                135deg,
                #ffffff 0%,
                #f8fcff 55%,
                #edf7fc 100%
              );
            border-bottom: 1px solid var(--line);
          }
  
          .work-hero::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0.4;
            pointer-events: none;
            background-image:
              linear-gradient(
                rgba(105, 178, 230, 0.07) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(105, 178, 230, 0.07) 1px,
                transparent 1px
              );
            background-size: 70px 70px;
            mask-image: linear-gradient(
              to right,
              transparent,
              black 30%,
              black 78%,
              transparent
            );
          }
  
          .work-glow {
            position: absolute;
            width: 380px;
            height: 380px;
            border-radius: 50%;
            background: rgba(105, 178, 230, 0.12);
            filter: blur(80px);
            pointer-events: none;
          }
  
          .work-glow-one {
            right: 8%;
            top: -190px;
          }
  
          .work-glow-two {
            left: 10%;
            bottom: -230px;
            opacity: 0.6;
          }
  
          .work-hero-content {
            position: relative;
            z-index: 2;
            max-width: 850px;
          }
  
          .work-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            padding: 8px 14px;
            border: 1px solid var(--line-blue);
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.75);
            color: var(--accent-dark);
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.14em;
            text-transform: uppercase;
          }
  
          .work-eyebrow-dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: var(--accent);
            box-shadow: 0 0 0 5px rgba(105, 178, 230, 0.12);
          }
  
          .work-hero h1 {
            max-width: 850px;
            margin: 24px 0 0;
            font-size: clamp(48px, 7vw, 88px);
            line-height: 0.98;
            letter-spacing: -0.055em;
          }
  
          .work-hero h1 span {
            color: var(--accent-dark);
          }
  
          .work-hero-description {
            max-width: 700px;
            margin: 28px 0 0;
            color: var(--text-soft);
            font-size: 18px;
            line-height: 1.75;
          }
  
          .work-hero-actions {
            display: flex;
            gap: 14px;
            margin-top: 36px;
          }
  
          .work-primary-button,
          .work-secondary-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            min-height: 52px;
            padding: 0 23px;
            border-radius: 999px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 700;
            transition:
              transform 0.25s ease,
              box-shadow 0.25s ease,
              background 0.25s ease;
          }
  
          .work-primary-button {
            background: var(--navy);
            color: white;
            box-shadow: 0 12px 30px rgba(12, 18, 23, 0.14);
          }
  
          .work-primary-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 16px 35px rgba(12, 18, 23, 0.2);
          }
  
          .work-secondary-button {
            background: white;
            color: var(--text);
            border: 1px solid var(--line);
          }
  
          .work-secondary-button:hover {
            transform: translateY(-2px);
            background: var(--bg-blue);
            border-color: var(--line-blue);
          }
  
          /* =========================
             INTRO
          ========================= */
  
          .work-intro {
            padding: 105px 0 70px;
          }
  
          .work-intro-grid {
            display: grid;
            grid-template-columns: 0.8fr 1.2fr;
            gap: 90px;
            align-items: start;
          }
  
          .work-section-label {
            color: var(--accent-dark);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.14em;
            text-transform: uppercase;
          }
  
          .work-intro h2 {
            margin: 13px 0 0;
            font-size: clamp(37px, 5vw, 62px);
            line-height: 1.03;
            letter-spacing: -0.045em;
          }
  
          .work-intro p {
            margin: 0;
            color: var(--text-soft);
            font-size: 17px;
            line-height: 1.8;
          }
  
          /* =========================
             PROJECTS
          ========================= */
  
          .work-projects {
            padding: 40px 0 120px;
          }
  
          .work-projects-heading {
            display: flex;
            align-items: end;
            justify-content: space-between;
            gap: 30px;
            margin-bottom: 40px;
          }
  
          .work-projects-heading h2 {
            margin: 12px 0 0;
            font-size: clamp(36px, 4vw, 54px);
            line-height: 1.05;
            letter-spacing: -0.04em;
          }
  
          .work-projects-heading p {
            max-width: 400px;
            margin: 0;
            color: var(--text-soft);
            line-height: 1.7;
            font-size: 15px;
          }
  
          .work-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
          }
  
          .work-card {
            position: relative;
            min-height: 550px;
            padding: 0;
            overflow: hidden;
            border: 1px solid var(--line);
            border-radius: 25px;
            background: white;
            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease,
              border-color 0.3s ease;
          }
  
          .work-card:hover {
            transform: translateY(-6px);
            border-color: var(--line-blue);
            box-shadow: 0 28px 65px rgba(30, 70, 95, 0.1);
          }
  
          .work-card.featured {
            grid-column: span 2;
            min-height: 500px;
          }
  
          /* Project visual */
  
          .work-visual {
            position: relative;
            height: 245px;
            overflow: hidden;
            background:
              radial-gradient(
                circle at 75% 25%,
                rgba(105, 178, 230, 0.38),
                transparent 28%
              ),
              linear-gradient(
                135deg,
                #eaf6fc,
                #dceff9
              );
          }
  
          .work-card:not(.featured) .work-visual {
            height: 220px;
          }
  
          .work-visual::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0.6;
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
            background-size: 42px 42px;
          }
  
          .work-visual-window {
            position: absolute;
            left: 9%;
            right: 9%;
            top: 13%;
            bottom: -35%;
            padding: 15px;
            border-radius: 14px 14px 0 0;
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(255, 255, 255, 0.9);
            box-shadow: 0 25px 50px rgba(30, 70, 95, 0.15);
            transform: perspective(900px) rotateX(5deg);
          }
  
          .work-window-top {
            display: flex;
            align-items: center;
            gap: 5px;
            height: 14px;
            margin-bottom: 15px;
          }
  
          .work-window-dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #b7c6d0;
          }
  
          .work-window-content {
            display: grid;
            grid-template-columns: 1fr 0.6fr;
            gap: 10px;
            height: 100%;
          }
  
          .work-window-main {
            border-radius: 8px;
            background: linear-gradient(
              135deg,
              #f2f8fb,
              #dceff9
            );
          }
  
          .work-window-side {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
  
          .work-window-line {
            height: 9px;
            border-radius: 99px;
            background: #e5edf2;
          }
  
          .work-window-line.short {
            width: 65%;
          }
  
          /* Different visuals */
  
          .work-card[data-type="branding"] .work-visual {
            background:
              radial-gradient(
                circle at 70% 35%,
                rgba(105, 178, 230, 0.28),
                transparent 25%
              ),
              #eef8fc;
          }
  
          .work-card[data-type="branding"] .work-visual-window {
            background: #0c1217;
            border-color: #0c1217;
          }
  
          .work-card[data-type="branding"] .work-window-main {
            background:
              linear-gradient(
                135deg,
                #69b2e6,
                #e4f3fb
              );
          }
  
          .work-card[data-type="marketing"] .work-visual {
            background:
              radial-gradient(
                circle at 25% 25%,
                rgba(105, 178, 230, 0.25),
                transparent 28%
              ),
              #f4fbfe;
          }
  
          .work-card[data-type="marketing"] .work-window-main {
            background:
              linear-gradient(
                to top right,
                #d9edf8,
                #69b2e6
              );
          }
  
          .work-card[data-type="landing"] .work-visual {
            background: #edf7fc;
          }
  
          .work-card[data-type="landing"] .work-window-main {
            background:
              linear-gradient(
                135deg,
                #ffffff,
                #bfe2f5
              );
          }
  
          .work-card[data-type="social"] .work-visual {
            background:
              radial-gradient(
                circle at 70% 25%,
                rgba(105, 178, 230, 0.3),
                transparent 28%
              ),
              #eef8fc;
          }
  
          .work-card[data-type="social"] .work-window-main {
            background:
              linear-gradient(
                145deg,
                #ffffff,
                #d6edf8
              );
          }
  
          .work-card[data-type="strategy"] .work-visual {
            background:
              linear-gradient(
                135deg,
                #edf7fc,
                #d9eef9
              );
          }
  
          .work-card[data-type="strategy"] .work-window-main {
            background:
              linear-gradient(
                135deg,
                #d7edf8,
                #69b2e6
              );
          }
  
          /* Project content */
  
          .work-content {
            position: relative;
            padding: 30px 32px 32px;
          }
  
          .work-number {
            display: block;
            margin-bottom: 10px;
            color: #9aa6ae;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.12em;
          }
  
          .work-category {
            display: inline-block;
            margin-bottom: 11px;
            color: var(--accent-dark);
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 0.13em;
            text-transform: uppercase;
          }
  
          .work-content h3 {
            max-width: 650px;
            margin: 0;
            font-size: 27px;
            line-height: 1.12;
            letter-spacing: -0.035em;
          }
  
          .work-description {
            max-width: 620px;
            margin: 13px 0 20px;
            color: var(--text-soft);
            font-size: 14px;
            line-height: 1.7;
          }
  
          .work-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 7px;
          }
  
          .work-tag {
            padding: 7px 10px;
            border-radius: 999px;
            background: var(--bg-blue);
            border: 1px solid var(--line-blue);
            color: var(--accent-dark);
            font-size: 10px;
            font-weight: 700;
          }
  
          .work-card-arrow {
            position: absolute;
            right: 30px;
            bottom: 30px;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: var(--bg-soft);
            color: var(--text);
            transition:
              transform 0.25s ease,
              background 0.25s ease;
          }
  
          .work-card:hover .work-card-arrow {
            background: var(--accent);
            transform: translate(2px, -2px);
          }
  
          /* =========================
             CAPABILITIES
          ========================= */
  
          .work-capabilities {
            padding: 115px 0;
            background: var(--bg-soft);
          }
  
          .work-capabilities-heading {
            max-width: 750px;
            margin-bottom: 45px;
          }
  
          .work-capabilities-heading h2 {
            margin: 12px 0 0;
            font-size: clamp(38px, 5vw, 60px);
            line-height: 1.03;
            letter-spacing: -0.045em;
          }
  
          .capabilities-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 17px;
          }
  
          .capability-card {
            min-height: 250px;
            padding: 30px;
            background: white;
            border: 1px solid var(--line);
            border-radius: 20px;
          }
  
          .capability-icon {
            width: 47px;
            height: 47px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 28px;
            border-radius: 13px;
            background: var(--bg-blue);
            color: var(--accent-dark);
          }
  
          .capability-card h3 {
            margin: 0 0 11px;
            font-size: 19px;
          }
  
          .capability-card p {
            margin: 0;
            color: var(--text-soft);
            font-size: 14px;
            line-height: 1.7;
          }
  
          /* =========================
             CTA
          ========================= */
  
          .work-cta {
            position: relative;
            padding: 115px 0 125px;
            text-align: center;
            overflow: hidden;
          }
  
          .work-cta-glow {
            position: absolute;
            width: 520px;
            height: 300px;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 50%;
            background: rgba(105, 178, 230, 0.13);
            filter: blur(75px);
          }
  
          .work-cta-inner {
            position: relative;
            z-index: 1;
            max-width: 850px;
            margin: 0 auto;
          }
  
          .work-cta h2 {
            margin: 13px 0 20px;
            font-size: clamp(42px, 6vw, 72px);
            line-height: 1;
            letter-spacing: -0.05em;
          }
  
          .work-cta p {
            max-width: 600px;
            margin: 0 auto 32px;
            color: var(--text-soft);
            line-height: 1.75;
          }
  
          /* =========================
             RESPONSIVE
          ========================= */
  
          @media (max-width: 1000px) {
            .work-intro-grid {
              grid-template-columns: 1fr;
              gap: 30px;
            }
  
            .work-card.featured {
              grid-column: span 2;
            }
  
            .capabilities-grid {
              grid-template-columns: 1fr;
            }
          }
  
          @media (max-width: 760px) {
            .work-container {
              width: min(100% - 32px, var(--max-width));
            }
  
            .work-hero {
              min-height: auto;
              padding: 80px 0 75px;
            }
  
            .work-hero h1 {
              font-size: clamp(43px, 13vw, 65px);
            }
  
            .work-hero-description {
              font-size: 16px;
            }
  
            .work-hero-actions {
              flex-direction: column;
              align-items: stretch;
            }
  
            .work-primary-button,
            .work-secondary-button {
              width: 100%;
            }
  
            .work-intro {
              padding: 75px 0 50px;
            }
  
            .work-projects {
              padding: 35px 0 85px;
            }
  
            .work-projects-heading {
              display: block;
            }
  
            .work-projects-heading p {
              margin-top: 20px;
            }
  
            .work-grid {
              grid-template-columns: 1fr;
            }
  
            .work-card,
            .work-card.featured {
              grid-column: span 1;
              min-height: 510px;
            }
  
            .work-visual,
            .work-card:not(.featured) .work-visual {
              height: 215px;
            }
  
            .work-content {
              padding: 27px;
            }
  
            .work-content h3 {
              font-size: 24px;
            }
  
            .work-capabilities {
              padding: 80px 0;
            }
  
            .work-cta {
              padding: 80px 0 90px;
            }
          }
  
          @media (max-width: 480px) {
            .work-eyebrow {
              font-size: 10px;
            }
  
            .work-hero h1 {
              font-size: 43px;
            }
  
            .work-card,
            .work-card.featured {
              min-height: 530px;
            }
  
            .work-visual,
            .work-card:not(.featured) .work-visual {
              height: 195px;
            }
  
            .work-card-arrow {
              right: 22px;
              bottom: 22px;
            }
          }
            /* WORK PAGE — DARK MODE */
body.dark-mode .work-page {
  background: #080d12 !important;
  color: #f4f7fa !important;
}

body.dark-mode .work-page section {
  background: #080d12 !important;
  color: #f4f7fa !important;
}

body.dark-mode .work-page h1,
body.dark-mode .work-page h2,
body.dark-mode .work-page h3 {
  color: #f4f7fa !important;
}

body.dark-mode .work-page p {
  color: #aeb9c5 !important;
}

body.dark-mode .work-page article,
body.dark-mode .work-page .work-card {
  background: #101820 !important;
  color: #f4f7fa !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
}
        `}</style>
  
        <Navbar />
  
        <main>
          {/* =========================
              HERO
          ========================= */}
  
          <section className="work-hero">
            <div className="work-glow work-glow-one" />
            <div className="work-glow work-glow-two" />
  
            <div className="work-container">
              <div className="work-hero-content">
                <div className="work-eyebrow">
                  <span className="work-eyebrow-dot" />
                  Selected Work
                </div>
  
                <h1>
                  Digital work designed to{" "}
                  <span>create impact.</span>
                </h1>
  
                <p className="work-hero-description">
                  We create websites, digital experiences, brands and growth
                  systems that help businesses look better, communicate
                  clearly and move forward.
                </p>
  
                <div className="work-hero-actions">
                  <Link
                    to="/enquire"
                    className="work-primary-button"
                  >
                    Start a Project
                    <ArrowUpRight size={17} />
                  </Link>
  
                  <a
                    href="#projects"
                    className="work-secondary-button"
                  >
                    Explore Work
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </div>
          </section>
  
          {/* =========================
              INTRO
          ========================= */}
  
          <section className="work-intro">
            <div className="work-container">
              <div className="work-intro-grid">
                <div>
                  <div className="work-section-label">
                    Our Approach
                  </div>
  
                  <h2>
                    Good design looks good.
                    <br />
                    Great digital work works.
                  </h2>
                </div>
  
                <p>
                  We believe digital work should do more than look impressive.
                  It should make your business easier to understand, easier to
                  discover and easier to choose.
                  <br />
                  <br />
                  Every project starts with the business objective and works
                  backwards to the right combination of technology, creative and
                  strategy.
                </p>
              </div>
            </div>
          </section>
  
          {/* =========================
              PROJECTS
          ========================= */}
  
          <section className="work-projects" id="projects">
            <div className="work-container">
              <div className="work-projects-heading">
                <div>
                  <div className="work-section-label">
                    Project Types
                  </div>
  
                  <h2>Built for real business needs.</h2>
                </div>
  
                <p>
                  A look at the types of digital experiences and growth systems
                  UpLyftBusiness can create for businesses.
                </p>
              </div>
  
              <div className="work-grid">
                {projects.map((project) => {
                  const Icon = project.icon;
  
                  return (
                    <article
                      className={`work-card ${
                        project.featured ? "featured" : ""
                      }`}
                      data-type={project.type}
                      key={project.number}
                    >
                      <div className="work-visual">
                        <div className="work-visual-window">
                          <div className="work-window-top">
                            <span className="work-window-dot" />
                            <span className="work-window-dot" />
                            <span className="work-window-dot" />
                          </div>
  
                          <div className="work-window-content">
                            <div className="work-window-main" />
  
                            <div className="work-window-side">
                              <div className="work-window-line" />
                              <div className="work-window-line short" />
                              <div className="work-window-line" />
                              <div className="work-window-line short" />
                            </div>
                          </div>
                        </div>
                      </div>
  
                      <div className="work-content">
                        <span className="work-number">
                          {project.number}
                        </span>
  
                        <span className="work-category">
                          {project.category}
                        </span>
  
                        <h3>{project.title}</h3>
  
                        <p className="work-description">
                          {project.description}
                        </p>
  
                        <div className="work-tags">
                          {project.tags.map((tag) => (
                            <span
                              className="work-tag"
                              key={tag}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
  
                        <div className="work-card-arrow">
                          <Icon size={18} />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
  
          {/* =========================
              CAPABILITIES
          ========================= */}
  
          <section className="work-capabilities">
            <div className="work-container">
              <div className="work-capabilities-heading">
                <div className="work-section-label">
                  What We Build
                </div>
  
                <h2>
                  Technology, creativity and growth — connected.
                </h2>
              </div>
  
              <div className="capabilities-grid">
                {capabilities.map((capability) => {
                  const Icon = capability.icon;
  
                  return (
                    <article
                      className="capability-card"
                      key={capability.title}
                    >
                      <div className="capability-icon">
                        <Icon
                          size={21}
                          strokeWidth={1.8}
                        />
                      </div>
  
                      <h3>{capability.title}</h3>
  
                      <p>{capability.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
  
          {/* =========================
              CTA
          ========================= */}
  
          <section className="work-cta">
            <div className="work-cta-glow" />
  
            <div className="work-container work-cta-inner">
              <div className="work-section-label">
                Your Project Could Be Next
              </div>
  
              <h2>
                Let's create something worth remembering.
              </h2>
  
              <p>
                Tell us what you're building, where you're stuck or where you
                want to go. We'll help you find the right digital solution.
              </p>
  
              <Link
                to="/enquire"
                className="work-primary-button"
              >
                Start a Project
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </section>
        </main>
  
        <Footer />
      </div>
    );
  }
  
  export default Work;