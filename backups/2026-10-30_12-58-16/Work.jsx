
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Megaphone,
  Palette,
  Search,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  X,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
  {
    id: 1,
    title: "Professional Services Website",
    category: "Web Development",
    type: "Website Concept",
    description:
      "A clean, conversion-focused website concept designed to build credibility and help service businesses generate enquiries.",
    tags: ["Responsive Design", "UI/UX", "Lead-Focused"],
    icon: BriefcaseBusiness,
    theme: "blue",
    number: "01",
    outcome:
      "A professional digital presence with clear service information, trust-building sections, and prominent calls to action.",
  },
  {
    id: 2,
    title: "E-commerce Store Experience",
    category: "Web Development",
    type: "E-commerce Concept",
    description:
      "A modern shopping experience with product-focused layouts, simple navigation, and a smoother path to purchase.",
    tags: ["E-commerce", "Product UI", "Responsive"],
    icon: ShoppingBag,
    theme: "purple",
    number: "02",
    outcome:
      "A structured storefront concept designed to make product discovery and shopping easier.",
  },
  {
    id: 3,
    title: "Digital Brand Campaign",
    category: "Creative & Branding",
    type: "Brand Campaign Concept",
    description:
      "A consistent creative direction for digital campaigns, combining brand identity, promotional graphics, and clear messaging.",
    tags: ["Brand Identity", "Creatives", "Campaigns"],
    icon: Palette,
    theme: "orange",
    number: "03",
    outcome:
      "A cohesive visual direction that helps a brand communicate consistently across digital touchpoints.",
  },
  {
    id: 4,
    title: "Social Media Content System",
    category: "Social Media",
    type: "Content Strategy Concept",
    description:
      "A content system built around brand consistency, useful posts, campaign ideas, and a recognisable social presence.",
    tags: ["Content Planning", "Social Design", "Consistency"],
    icon: Sparkles,
    theme: "pink",
    number: "04",
    outcome:
      "A repeatable content framework to help businesses maintain a more organised social media presence.",
  },
  {
    id: 5,
    title: "Performance Marketing Concept",
    category: "Digital Marketing",
    type: "Advertising Concept",
    description:
      "A campaign structure focused on clear messaging, relevant audiences, and measurable advertising goals.",
    tags: ["Campaign Strategy", "Ads", "Analytics"],
    icon: Target,
    theme: "green",
    number: "05",
    outcome:
      "A campaign framework with defined objectives, creative direction, and performance measurement.",
  },
  {
    id: 6,
    title: "Business Growth Dashboard",
    category: "Growth & Strategy",
    type: "Dashboard Concept",
    description:
      "A visual dashboard concept that brings key business and marketing indicators into one organised view.",
    tags: ["Analytics", "Strategy", "Reporting"],
    icon: TrendingUp,
    theme: "cyan",
    number: "06",
    outcome:
      "A clear reporting concept to help teams review performance indicators and make informed decisions.",
  },
];

const filters = [
  "All Work",
  "Web Development",
  "Digital Marketing",
  "Social Media",
  "Creative & Branding",
  "Growth & Strategy",
];

const capabilities = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start with your business, audience, goals, and the problem we need to solve.",
  },
  {
    number: "02",
    title: "Create",
    description:
      "We shape the strategy, design, and digital solution around your requirements.",
  },
  {
    number: "03",
    title: "Improve",
    description:
      "We use feedback and performance insights to identify opportunities for improvement.",
  },
];

function ProjectPreview({ project }) {
  const Icon = project.icon;

  return (
    <div className={`project-preview preview-${project.theme}`}>
      <div className="preview-topbar">
        <span className="preview-brand">
          <span className="preview-brand-mark">U</span>
          Studio
        </span>

        <div className="preview-top-links">
          <span />
          <span />
          <span />
        </div>

        <span className="preview-menu">
          <ArrowUpRight size={15} />
        </span>
      </div>

      <div className="preview-content">
        <div className="preview-copy">
          <span className="preview-eyebrow">
            <span className="preview-dot" />
            DIGITAL EXPERIENCE
          </span>

          <div className="preview-heading">
            {project.id === 1 && <>Build trust.<br />Grow forward.</>}
            {project.id === 2 && <>Made for<br />your everyday.</>}
            {project.id === 3 && <>Make your<br />mark.</>}
            {project.id === 4 && <>Show up<br />with purpose.</>}
            {project.id === 5 && <>Turn attention<br />into action.</>}
            {project.id === 6 && <>Clarity for<br />what comes next.</>}
          </div>

          <div className="preview-description" />

          <div className="preview-button">
            Explore more <ArrowUpRight size={12} />
          </div>
        </div>

        <div className="preview-visual">
          <div className="preview-orbit preview-orbit-one" />
          <div className="preview-orbit preview-orbit-two" />

          <div className="preview-icon-card">
            <Icon size={40} strokeWidth={1.4} />
          </div>

          <div className="preview-floating-card preview-floating-one">
            <span className="preview-mini-dot" />
            <span />
            <span />
          </div>

          <div className="preview-floating-card preview-floating-two">
            <TrendingUp size={16} />
            <strong>Growth</strong>
          </div>
        </div>
      </div>

      <div className="preview-footer">
        <span>Strategy</span>
        <span>Design</span>
        <span>Digital</span>
        <span className="preview-footer-arrow">
          <ArrowUpRight size={14} />
        </span>
      </div>
    </div>
  );
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All Work");
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      activeFilter === "All Work" || project.category === activeFilter;

    const searchText = [
      project.title,
      project.category,
      project.description,
      ...project.tags,
    ]
      .join(" ")
      .toLowerCase();

    return (
      matchesFilter &&
      searchText.includes(searchTerm.trim().toLowerCase())
    );
  });

  return (
    <>
      <Navbar />

      <main className="work-page">
        {/* HERO */}
        <section className="work-hero">
          <div className="work-container">
            <div className="work-hero-grid">
              <div className="work-hero-copy">
                <div className="work-eyebrow">
                  <span className="work-eyebrow-line" />
                  OUR WORK
                </div>

                <h1>
                  Ideas into
                  <br />
                  <span className="work-gradient-text">
                    digital impact.
                  </span>
                </h1>

                <p className="work-hero-description">
                  Explore how strategy, technology, and creativity come
                  together to build better digital experiences for growing
                  businesses.
                </p>

                <div className="work-hero-actions">
                  <a href="#selected-work" className="work-primary-button">
                    Explore our work <ArrowDownRight size={17} />
                  </a>

                  <Link to="/enquire" className="work-text-button">
                    Start a project <ArrowUpRight size={16} />
                  </Link>
                </div>

                <div className="work-hero-note">
                  <span className="work-note-icon">
                    <CheckCircle2 size={15} />
                  </span>
                  Thoughtful digital solutions. Built around your goals.
                </div>
              </div>

              <div className="work-hero-visual">
                <div className="work-visual-glow" />
                <div className="work-visual-grid" />

                <div className="work-floating-label work-label-top">
                  <span className="work-label-indicator" />
                  DESIGN WITH PURPOSE
                </div>

                <div className="work-hero-art">
                  <div className="work-art-back" />

                  <div className="work-art-front">
                    <div className="work-art-header">
                      <span className="work-art-logo">U.</span>
                      <span className="work-art-menu">
                        <span />
                        <span />
                        <span />
                      </span>
                    </div>

                    <div className="work-art-body">
                      <span className="work-art-kicker">
                        THINK. BUILD. GROW.
                      </span>

                      <div className="work-art-title">
                        Your next
                        <br />
                        big idea.
                      </div>

                      <div className="work-art-lines">
                        <span />
                        <span />
                      </div>

                      <div className="work-art-action">
                        Let's get started <ArrowUpRight size={13} />
                      </div>
                    </div>

                    <div className="work-art-bottom">
                      <span>01 / DIGITAL</span>
                      <span>UPLYFTBUSINESS</span>
                    </div>
                  </div>

                  <div className="work-art-orbit work-art-orbit-a" />
                  <div className="work-art-orbit work-art-orbit-b" />

                  <div className="work-art-badge">
                    <Sparkles size={17} />
                    <span>
                      Built for
                      <br />
                      what's next
                    </span>
                  </div>
                </div>

                <div className="work-floating-label work-label-bottom">
                  <span className="work-label-spark">
                    <Sparkles size={14} />
                  </span>
                  STRATEGY MEETS CREATIVITY
                </div>
              </div>
            </div>

            <div className="work-hero-bottom">
              <span>DESIGN</span>
              <span className="work-hero-bottom-line" />
              <span>TECHNOLOGY</span>
              <span className="work-hero-bottom-line" />
              <span>GROWTH</span>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="work-intro-section">
          <div className="work-container work-intro-grid">
            <div>
              <div className="work-section-label">OUR APPROACH</div>

              <h2 className="work-section-heading">
                Good work starts
                <br />
                with <span className="work-gradient-text">good thinking.</span>
              </h2>
            </div>

            <div className="work-intro-copy">
              <p>
                Every business has a different story, audience, and ambition.
                We bring those pieces together to create digital experiences
                that feel intentional, look professional, and serve a clear
                purpose.
              </p>

              <p>
                From websites and brand creatives to marketing and growth
                strategy, our focus is on finding the right solution for the
                challenge at hand.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="work-projects-section" id="selected-work">
          <div className="work-container">
            <div className="work-projects-heading">
              <div>
                <div className="work-section-label">SELECTED PROJECTS</div>

                <h2 className="work-section-heading">
                  Concepts with
                  <br />
                  <span className="work-gradient-text">
                    a clear purpose.
                  </span>
                </h2>
              </div>

              <p className="work-projects-heading-copy">
                A look at the kind of digital experiences and solutions we
                can build for ambitious businesses.
              </p>
            </div>

            <div className="work-toolbar">
              <div
                className="work-filters"
                role="group"
                aria-label="Filter projects"
              >
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={`work-filter-button ${
                      activeFilter === filter ? "active" : ""
                    }`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <label className="work-search">
                <Search size={16} />

                <input
                  type="search"
                  placeholder="Search projects"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  aria-label="Search projects"
                />
              </label>
            </div>

            {filteredProjects.length > 0 ? (
              <div className="work-project-grid">
                {filteredProjects.map((project) => {
                  const Icon = project.icon;

                  return (
                    <article className="work-project-card" key={project.id}>
                      <button
                        type="button"
                        className="work-project-preview-button"
                        onClick={() => setSelectedProject(project)}
                        aria-label={`View ${project.title}`}
                      >
                        <ProjectPreview project={project} />

                        <span className="work-preview-open">
                          <ArrowUpRight size={18} />
                        </span>
                      </button>

                      <div className="work-project-details">
                        <div className="work-project-meta">
                          <span className={`work-project-icon ${project.theme}`}>
                            <Icon size={17} />
                          </span>

                          <span>{project.type}</span>

                          <span className="work-project-number">
                            {project.number}
                          </span>
                        </div>

                        <button
                          type="button"
                          className="work-project-title-button"
                          onClick={() => setSelectedProject(project)}
                        >
                          <h3>{project.title}</h3>
                          <ArrowUpRight size={19} />
                        </button>

                        <p>{project.description}</p>

                        <div className="work-project-tags">
                          {project.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="work-empty-state">
                <Search size={28} />
                <h3>No matching projects</h3>
                <p>Try a different search or select another category.</p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveFilter("All Work");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}

            <div className="work-projects-footnote">
              <Sparkles size={16} />
              <span>
                These are illustrative concepts showcasing our approach and
                capabilities, not claims of completed client projects.
              </span>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="work-capabilities-section">
          <div className="work-container">
            <div className="work-capabilities-heading">
              <div className="work-section-label">HOW WE THINK</div>

              <h2 className="work-section-heading">
                From first thought
                <br />
                to <span className="work-gradient-text">better outcomes.</span>
              </h2>
            </div>

            <div className="work-capabilities-grid">
              {capabilities.map((item) => (
                <article className="work-capability-card" key={item.number}>
                  <span className="work-capability-number">
                    {item.number}
                  </span>

                  <div className="work-capability-arrow">
                    <ArrowUpRight size={19} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="work-capability-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="work-services-strip">
          <div className="work-container">
            <div className="work-services-strip-inner">
              <div className="work-services-strip-copy">
                <div className="work-section-label">WHAT WE BRING</div>

                <h2>
                  The right mix of
                  <br />
                  <span className="work-gradient-text">
                    skills and perspective.
                  </span>
                </h2>
              </div>

              <div className="work-service-list">
                <div>
                  <Code2 size={18} />
                  <span>Web Development</span>
                  <ArrowUpRight size={15} />
                </div>

                <div>
                  <TrendingUp size={18} />
                  <span>Digital Marketing</span>
                  <ArrowUpRight size={15} />
                </div>

                <div>
                  <Megaphone size={18} />
                  <span>Social Media & Advertising</span>
                  <ArrowUpRight size={15} />
                </div>

                <div>
                  <Palette size={18} />
                  <span>Creative & Branding</span>
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </div>

            <div className="work-services-strip-bottom">
              <span>BUILT AROUND YOUR BUSINESS</span>
              <span>UPLYFTBUSINESS ©</span>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="work-cta-section">
          <div className="work-container">
            <div className="work-cta-card">
              <div className="work-cta-glow" />

              <div className="work-cta-content">
                <div className="work-cta-label">
                  <span className="work-cta-dot" />
                  HAVE SOMETHING IN MIND?
                </div>

                <h2>
                  Let's build something
                  <br />
                  <span className="work-gradient-text">
                    worth remembering.
                  </span>
                </h2>

                <p>
                  Tell us what you're working towards. Let's explore how the
                  right digital solution can move your business forward.
                </p>

                <div className="work-cta-actions">
                  <Link to="/enquire" className="work-primary-button">
                    Start a project <ArrowRight size={17} />
                  </Link>

                  <Link to="/contact" className="work-text-button">
                    Talk to our team <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="work-cta-graphic" aria-hidden="true">
                <div className="work-cta-ring work-cta-ring-one" />
                <div className="work-cta-ring work-cta-ring-two" />
                <div className="work-cta-ring work-cta-ring-three" />

                <div className="work-cta-center">
                  <span>U</span>
                </div>

                <div className="work-cta-star">
                  <Sparkles size={20} />
                </div>

                <div className="work-cta-arrow">
                  <ArrowUpRight size={25} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT DETAILS MODAL */}
        {selectedProject && (
          <div
            className="work-modal-backdrop"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedProject(null);
              }
            }}
          >
            <section
              className="work-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="work-modal-title"
            >
              <button
                type="button"
                className="work-modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                <X size={20} />
              </button>

              <div className="work-modal-preview">
                <ProjectPreview project={selectedProject} />
              </div>

              <div className="work-modal-body">
                <div className="work-section-label">
                  {selectedProject.type}
                </div>

                <h2 id="work-modal-title">{selectedProject.title}</h2>

                <p>{selectedProject.description}</p>

                <h3>Our approach</h3>
                <p>{selectedProject.outcome}</p>

                <div className="work-project-tags">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <Link
                  to="/enquire"
                  className="work-primary-button"
                  onClick={() => setSelectedProject(null)}
                >
                  Discuss a similar project <ArrowRight size={17} />
                </Link>
              </div>
            </section>
          </div>
        )}
      </main>

      <Footer />

      <style>{`
        /* =========================================
           UPLYFTBUSINESS — NAVY BLUE WORK PAGE
        ========================================= */

        .work-page {
          --work-bg: #f5f7fb;
          --work-surface: #edf1f8;
          --work-surface-strong: #dfe6f2;
          --work-text: #101d35;
          --work-muted: #64748b;
          --work-border: #dce3ee;
          --work-blue: #142b52;
          --work-blue-dark: #091a35;
          --work-card: #ffffff;

          color: var(--work-text);
          background: var(--work-bg);
          overflow: hidden;
          transition: background .25s ease, color .25s ease;
        }

        body.dark-mode .work-page {
          --work-bg: #071326;
          --work-surface: #0b1a31;
          --work-surface-strong: #122644;
          --work-text: #edf3ff;
          --work-muted: #a0aec5;
          --work-border: rgba(160,180,215,.15);
          --work-blue: #9bbcff;
          --work-blue-dark: #d1e0ff;
          --work-card: #0c1c34;
        }

        .work-page *,
        .work-page *::before,
        .work-page *::after {
          box-sizing: border-box;
        }

        .work-container {
          width: min(1160px, calc(100% - 48px));
          margin: 0 auto;
        }

        .work-page .work-gradient-text {
          background: linear-gradient(
            110deg,
            #0b1b36 0%,
            #1c3d70 48%,
            #5276aa 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: #142b52;
        }

        body.dark-mode .work-page .work-gradient-text {
          background-image: linear-gradient(
            110deg,
            #dce8ff 0%,
            #a8c5ff 50%,
            #789bd5 100%
          );
        }

        /* HERO */

        .work-hero {
          position: relative;
          padding: 96px 0 28px;
          background:
            radial-gradient(
              ellipse at 78% 25%,
              rgba(61,91,139,.12),
              transparent 38%
            ),
            var(--work-bg);
        }

        body.dark-mode .work-page .work-hero {
          background:
            radial-gradient(
              ellipse at 78% 25%,
              rgba(70,106,165,.18),
              transparent 38%
            ),
            var(--work-bg);
        }

        .work-hero-grid {
          display: grid;
          grid-template-columns: 1.02fr .98fr;
          align-items: center;
          gap: 56px;
          min-height: 460px;
        }

        .work-eyebrow,
        .work-section-label {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--work-blue);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .work-eyebrow-line {
          width: 28px;
          height: 2px;
          background: var(--work-blue);
        }

        .work-hero h1 {
          margin: 24px 0 22px;
          color: var(--work-text);
          font-size: clamp(44px, 5.5vw, 76px);
          font-weight: 750;
          letter-spacing: -4px;
          line-height: 1.04;
        }

        .work-hero-description {
          max-width: 500px;
          margin: 0;
          color: var(--work-muted);
          font-size: 16px;
          line-height: 1.85;
        }

        .work-hero-actions,
        .work-cta-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 22px;
          margin-top: 32px;
        }

        .work-primary-button,
        .work-text-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 48px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition:
            transform .2s ease,
            background .2s ease,
            border-color .2s ease;
        }

        .work-page .work-primary-button {
          padding: 0 20px;
          color: #fff;
          background: #142b52;
          border: 1px solid #142b52;
          border-radius: 8px;
          box-shadow: 0 8px 22px rgba(12,32,65,.18);
        }

        .work-page .work-primary-button:hover {
          background: #091a35;
          border-color: #091a35;
          transform: translateY(-2px);
        }

        .work-text-button {
          color: var(--work-text);
        }

        .work-text-button:hover {
          color: var(--work-blue);
        }

        .work-hero-note {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 35px;
          color: var(--work-muted);
          font-size: 12px;
        }

        .work-note-icon {
          display: inline-flex;
          color: #16835e;
        }

        /* HERO GRAPHIC */

        .work-hero-visual {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 430px;
          isolation: isolate;
        }

        .work-visual-glow {
          position: absolute;
          z-index: -2;
          width: 330px;
          height: 330px;
          border-radius: 50%;
          background: rgba(36,69,117,.14);
          filter: blur(65px);
        }

        .work-visual-grid {
          position: absolute;
          z-index: -1;
          inset: 8% 0;
          opacity: .4;
          background-image: radial-gradient(var(--work-muted) .7px, transparent .7px);
          background-size: 18px 18px;
          mask-image: linear-gradient(90deg, transparent, #000 25%, #000 75%, transparent);
        }

        .work-hero-art {
          position: relative;
          width: min(100%, 420px);
          height: 340px;
          display: grid;
          place-items: center;
        }

        .work-art-back {
          position: absolute;
          width: 74%;
          height: 82%;
          border: 1px solid rgba(65,99,151,.35);
          border-radius: 20px;
          background: linear-gradient(
            145deg,
            rgba(36,69,117,.16),
            rgba(112,140,185,.08)
          );
          transform: rotate(8deg) translate(18px, -2px);
        }

        .work-art-front {
          position: relative;
          z-index: 2;
          width: 78%;
          height: 87%;
          overflow: hidden;
          border: 1px solid rgba(115,146,200,.32);
          border-radius: 17px;
          background: var(--work-card);
          box-shadow: 0 28px 70px rgba(12,32,65,.18);
          transform: rotate(-4deg);
        }

        .work-art-header,
        .work-art-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 17px;
          border-bottom: 1px solid var(--work-border);
        }

        .work-art-logo {
          color: #244575;
          font-size: 24px;
          font-weight: 900;
          letter-spacing: -2px;
        }

        .work-art-menu {
          display: flex;
          gap: 4px;
        }

        .work-art-menu span {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--work-muted);
        }

        .work-art-body {
          padding: 24px 22px 16px;
        }

        .work-art-kicker {
          color: var(--work-blue);
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 1.4px;
        }

        .work-art-title {
          margin-top: 14px;
          color: var(--work-text);
          font-size: 31px;
          font-weight: 800;
          letter-spacing: -1.5px;
          line-height: 1.04;
        }

        .work-art-lines {
          display: grid;
          gap: 6px;
          margin-top: 13px;
        }

        .work-art-lines span {
          width: 83%;
          height: 4px;
          border-radius: 5px;
          background: var(--work-border);
        }

        .work-art-lines span:last-child {
          width: 60%;
        }

        .work-art-action {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 16px;
          padding: 8px 10px;
          border-radius: 5px;
          color: white;
          background: #142b52;
          font-size: 8px;
          font-weight: 700;
        }

        .work-art-bottom {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          padding: 10px 14px;
          border-top: 1px solid var(--work-border);
          border-bottom: 0;
          color: var(--work-muted);
          font-size: 6px;
          letter-spacing: .8px;
        }

        .work-art-orbit {
          position: absolute;
          z-index: 1;
          border: 1px solid rgba(36,69,117,.25);
          border-radius: 50%;
          pointer-events: none;
        }

        .work-art-orbit-a {
          width: 400px;
          height: 250px;
          transform: rotate(-28deg);
        }

        .work-art-orbit-b {
          width: 360px;
          height: 220px;
          transform: rotate(38deg);
          border-color: rgba(82,118,170,.28);
        }

        .work-art-badge {
          position: absolute;
          z-index: 3;
          right: -2px;
          bottom: 34px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 12px 14px;
          border: 1px solid var(--work-border);
          border-radius: 11px;
          color: var(--work-text);
          background: var(--work-card);
          box-shadow: 0 12px 30px rgba(12,32,65,.1);
          font-size: 10px;
          font-weight: 700;
          line-height: 1.5;
        }

        .work-art-badge svg {
          color: #244575;
        }

        .work-floating-label {
          position: absolute;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          border: 1px solid var(--work-border);
          border-radius: 7px;
          color: var(--work-muted);
          background: var(--work-card);
          box-shadow: 0 8px 25px rgba(12,32,65,.07);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .work-label-top {
          top: 18px;
          left: 0;
        }

        .work-label-bottom {
          right: 0;
          bottom: 12px;
        }

        .work-label-indicator,
        .work-cta-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22a878;
          box-shadow: 0 0 0 4px rgba(34,168,120,.12);
        }

        .work-label-spark {
          display: inline-flex;
          color: var(--work-blue);
        }

        .work-hero-bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding-top: 24px;
          color: var(--work-muted);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .work-hero-bottom-line {
          width: 34px;
          height: 1px;
          background: var(--work-border);
        }

        /* INTRODUCTION */

        .work-intro-section {
          padding: 100px 0;
          border-top: 1px solid var(--work-border);
          border-bottom: 1px solid var(--work-border);
          background: var(--work-surface);
        }

        .work-intro-grid {
          display: grid;
          grid-template-columns: 1fr .85fr;
          align-items: start;
          gap: 80px;
        }

        .work-section-heading {
          margin: 18px 0 0;
          color: var(--work-text);
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 750;
          letter-spacing: -2px;
          line-height: 1.14;
        }

        .work-intro-copy {
          padding-top: 26px;
        }

        .work-intro-copy p,
        .work-projects-heading-copy {
          margin: 0 0 17px;
          color: var(--work-muted);
          font-size: 14px;
          line-height: 1.9;
        }

        /* PROJECTS */

        .work-projects-section {
          padding: 100px 0;
          background: var(--work-bg);
          scroll-margin-top: 80px;
        }

        .work-projects-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 42px;
        }

        .work-projects-heading-copy {
          max-width: 350px;
          margin-bottom: 4px;
        }

        .work-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 18px;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--work-border);
        }

        .work-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .work-filter-button {
          padding: 9px 13px;
          border: 1px solid var(--work-border);
          border-radius: 6px;
          color: var(--work-muted);
          background: transparent;
          font: inherit;
          font-size: 11px;
          font-weight: 650;
          cursor: pointer;
          transition: all .2s ease;
        }

        .work-page .work-filter-button:hover,
        .work-page .work-filter-button.active {
          border-color: #142b52;
          color: white;
          background: #142b52;
        }

        .work-search {
          display: flex;
          align-items: center;
          gap: 9px;
          min-width: 190px;
          padding: 10px 12px;
          border: 1px solid var(--work-border);
          border-radius: 7px;
          color: var(--work-muted);
          background: var(--work-card);
        }

        .work-search:focus-within {
          border-color: #244575;
        }

        .work-search input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: 0;
          color: var(--work-text);
          background: transparent;
          font: inherit;
          font-size: 12px;
        }

        .work-search input::placeholder {
          color: var(--work-muted);
        }

        .work-project-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 34px 26px;
        }

        .work-project-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid var(--work-border);
          border-radius: 12px;
          background: var(--work-card);
          transition:
            transform .25s ease,
            border-color .25s ease,
            box-shadow .25s ease;
        }

        .work-project-card:hover {
          transform: translateY(-4px);
          border-color: rgba(36,69,117,.45);
          box-shadow: 0 18px 45px rgba(12,32,65,.1);
        }

        .work-project-preview-button {
          position: relative;
          display: block;
          width: 100%;
          padding: 18px;
          border: 0;
          background: var(--work-surface);
          text-align: left;
          cursor: pointer;
        }

        /* PROJECT PREVIEWS */

        .project-preview {
          position: relative;
          overflow: hidden;
          min-height: 260px;
          border: 1px solid rgba(100,130,180,.18);
          border-radius: 7px;
          color: #172033;
          background: #eaf0f8;
          transition: transform .3s ease;
        }

        .preview-blue {
          background: linear-gradient(135deg, #dbe5f5, #f3f6fc);
        }

        .preview-purple {
          background: linear-gradient(135deg, #dce3f2, #f4f6fc);
        }

        .preview-orange {
          background: linear-gradient(135deg, #e5e8ef, #f8f9fc);
        }

        .preview-pink {
          background: linear-gradient(135deg, #dce5f0, #f5f7fb);
        }

        .preview-green {
          background: linear-gradient(135deg, #dce9e8, #f2f8f7);
        }

        .preview-cyan {
          background: linear-gradient(135deg, #d9e8f1, #f2f7fb);
        }

        .preview-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 16px;
          border-bottom: 1px solid rgba(70,90,130,.13);
          background: rgba(255,255,255,.5);
        }

        .preview-brand {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 10px;
          font-weight: 800;
        }

        .preview-brand-mark {
          display: grid;
          place-items: center;
          width: 21px;
          height: 21px;
          border-radius: 6px;
          color: white;
          background: #142b52;
          font-size: 12px;
          font-weight: 900;
        }

        .preview-top-links {
          display: flex;
          gap: 5px;
        }

        .preview-top-links span {
          width: 23px;
          height: 3px;
          border-radius: 3px;
          background: rgba(40,55,85,.2);
        }

        .preview-menu {
          display: grid;
          place-items: center;
          width: 24px;
          height: 24px;
          border-radius: 5px;
          background: rgba(255,255,255,.7);
        }

        .preview-content {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          align-items: center;
          gap: 4px;
          min-height: 195px;
          padding: 20px 19px 14px;
        }

        .preview-copy {
          position: relative;
          z-index: 1;
        }

        .preview-eyebrow {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #50658c;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .preview-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #142b52;
        }

        .preview-heading {
          margin-top: 11px;
          color: #14233e;
          font-size: clamp(20px, 2.6vw, 30px);
          font-weight: 850;
          letter-spacing: -1.2px;
          line-height: 1.06;
        }

        .preview-description {
          width: 85%;
          height: 4px;
          margin-top: 12px;
          border-radius: 5px;
          background: rgba(35,55,90,.18);
        }

        .work-page .preview-button {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-top: 12px;
          padding: 7px 9px;
          border-radius: 4px;
          color: #fff;
          background: #142b52;
          font-size: 7px;
          font-weight: 800;
        }

        .preview-visual {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 155px;
        }

        .preview-orbit {
          position: absolute;
          width: 120px;
          height: 120px;
          border: 1px solid rgba(20,43,82,.23);
          border-radius: 50%;
        }

        .preview-orbit-two {
          width: 92px;
          height: 145px;
          transform: rotate(40deg);
          border-color: rgba(82,118,170,.3);
        }

        .preview-icon-card {
          position: relative;
          z-index: 1;
          display: grid;
          place-items: center;
          width: 82px;
          height: 88px;
          border: 1px solid rgba(255,255,255,.85);
          border-radius: 19px;
          color: #142b52;
          background: rgba(255,255,255,.77);
          box-shadow: 0 12px 28px rgba(20,43,82,.13);
          transform: rotate(5deg);
        }

        .preview-floating-card {
          position: absolute;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 7px;
          border: 1px solid rgba(255,255,255,.85);
          border-radius: 7px;
          background: rgba(255,255,255,.9);
          box-shadow: 0 5px 15px rgba(20,43,82,.1);
        }

        .preview-floating-one {
          top: 20px;
          right: -2px;
        }

        .preview-mini-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22a878;
        }

        .preview-floating-one span:not(.preview-mini-dot) {
          width: 13px;
          height: 3px;
          border-radius: 4px;
          background: #d8e1f2;
        }

        .preview-floating-two {
          bottom: 17px;
          left: -4px;
          color: #142b52;
          font-size: 8px;
        }

        .preview-footer {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px 16px;
          border-top: 1px solid rgba(70,90,130,.13);
          color: #60708d;
          background: rgba(255,255,255,.42);
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .preview-footer-arrow {
          display: inline-flex;
          margin-left: auto;
          color: #142b52;
        }

        .work-preview-open {
          position: absolute;
          top: 29px;
          right: 29px;
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          border: 1px solid var(--work-border);
          border-radius: 50%;
          color: var(--work-text);
          background: var(--work-card);
          opacity: 0;
          transform: translate(-4px, 4px);
          transition: opacity .2s ease, transform .2s ease;
        }

        .work-project-card:hover .work-preview-open,
        .work-project-preview-button:focus-visible .work-preview-open {
          opacity: 1;
          transform: translate(0, 0);
        }

        .work-project-details {
          padding: 22px 22px 24px;
        }

        .work-project-meta {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--work-muted);
          font-size: 10px;
          font-weight: 650;
        }

        .work-project-icon {
          display: grid;
          place-items: center;
          width: 31px;
          height: 31px;
          border-radius: 8px;
          color: #142b52;
          background: #e6edf8;
        }

        .work-project-icon.purple {
          color: #3f4e78;
          background: #e9eaf5;
        }

        .work-project-icon.orange {
          color: #7d5a3d;
          background: #f4e9df;
        }

        .work-project-icon.pink {
          color: #75516c;
          background: #f0e5ef;
        }

        .work-project-icon.green {
          color: #315f54;
          background: #e0eee8;
        }

        .work-project-icon.cyan {
          color: #315c76;
          background: #e0edf4;
        }

        .work-project-number {
          margin-left: auto;
          color: var(--work-muted);
          font-size: 10px;
          letter-spacing: 1px;
        }

        .work-project-title-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          width: 100%;
          margin: 15px 0 10px;
          padding: 0;
          border: 0;
          color: var(--work-text);
          background: transparent;
          text-align: left;
          cursor: pointer;
        }

        .work-project-title-button h3 {
          margin: 0;
          font-size: 19px;
          font-weight: 750;
          letter-spacing: -.5px;
        }

        .work-project-title-button svg {
          flex: 0 0 auto;
          color: var(--work-muted);
          transition: color .2s ease, transform .2s ease;
        }

        .work-project-title-button:hover svg {
          color: var(--work-blue);
          transform: translate(2px, -2px);
        }

        .work-project-details > p {
          margin: 0;
          color: var(--work-muted);
          font-size: 12px;
          line-height: 1.8;
        }

        .work-project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 17px;
        }

        .work-project-tags span {
          padding: 6px 9px;
          border: 1px solid var(--work-border);
          border-radius: 5px;
          color: var(--work-muted);
          font-size: 9px;
          font-weight: 650;
        }

        .work-projects-footnote {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 30px;
          padding: 15px 17px;
          border: 1px solid var(--work-border);
          border-radius: 8px;
          color: var(--work-muted);
          background: var(--work-surface);
          font-size: 11px;
          line-height: 1.7;
        }

        .work-projects-footnote svg {
          flex: 0 0 auto;
          margin-top: 1px;
          color: var(--work-blue);
        }

        .work-empty-state {
          display: grid;
          justify-items: center;
          padding: 70px 20px;
          border: 1px dashed var(--work-border);
          border-radius: 12px;
          color: var(--work-muted);
          text-align: center;
        }

        .work-empty-state h3 {
          margin: 18px 0 6px;
          color: var(--work-text);
        }

        .work-empty-state p {
          margin: 0;
          font-size: 13px;
        }

        .work-empty-state button {
          margin-top: 18px;
          padding: 9px 14px;
          border: 1px solid var(--work-border);
          border-radius: 6px;
          color: var(--work-text);
          background: var(--work-card);
          cursor: pointer;
        }

        /* CAPABILITIES */

        .work-capabilities-section {
          padding: 100px 0;
          border-top: 1px solid var(--work-border);
          background: var(--work-surface);
        }

        .work-capabilities-heading {
          margin-bottom: 40px;
        }

        .work-capabilities-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border: 1px solid var(--work-border);
          border-radius: 12px;
          overflow: hidden;
          background: var(--work-card);
        }

        .work-capability-card {
          position: relative;
          min-height: 240px;
          padding: 28px;
          border-right: 1px solid var(--work-border);
        }

        .work-capability-card:last-child {
          border-right: 0;
        }

        .work-capability-number {
          color: var(--work-blue);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 1px;
        }

        .work-capability-arrow {
          position: absolute;
          top: 24px;
          right: 24px;
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          border: 1px solid var(--work-border);
          border-radius: 50%;
          color: var(--work-muted);
          transition: color .2s ease, background .2s ease;
        }

        .work-capability-card:hover .work-capability-arrow {
          color: #fff;
          background: #142b52;
        }

        .work-capability-card h3 {
          margin: 45px 0 12px;
          color: var(--work-text);
          font-size: 23px;
          font-weight: 750;
          letter-spacing: -.6px;
        }

        .work-capability-card p {
          margin: 0;
          color: var(--work-muted);
          font-size: 12px;
          line-height: 1.85;
        }

        .work-capability-line {
          width: 34px;
          height: 2px;
          margin-top: 23px;
          background: #244575;
          transition: width .2s ease;
        }

        .work-capability-card:hover .work-capability-line {
          width: 70px;
        }

        /* SERVICES */

        .work-services-strip {
          padding: 90px 0 24px;
          background: var(--work-bg);
        }

        .work-services-strip-inner {
          display: grid;
          grid-template-columns: 1fr .8fr;
          align-items: center;
          gap: 70px;
          padding-bottom: 65px;
        }

        .work-services-strip-copy h2 {
          margin: 18px 0 0;
          color: var(--work-text);
          font-size: clamp(31px, 3.8vw, 44px);
          letter-spacing: -1.8px;
          line-height: 1.16;
        }

        .work-service-list {
          border-top: 1px solid var(--work-border);
        }

        .work-service-list > div {
          display: grid;
          grid-template-columns: 23px 1fr 18px;
          align-items: center;
          gap: 12px;
          padding: 16px 3px;
          border-bottom: 1px solid var(--work-border);
          color: var(--work-muted);
          font-size: 12px;
          font-weight: 650;
          transition: color .2s ease;
        }

        .work-service-list > div svg:first-child {
          color: #244575;
        }

        .work-service-list > div svg:last-child {
          opacity: .6;
        }

        .work-service-list > div:hover {
          color: var(--work-text);
        }

        .work-services-strip-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 18px 0;
          border-top: 1px solid var(--work-border);
          color: var(--work-muted);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        /* CTA */

        .work-cta-section {
          padding: 55px 0 100px;
          background: var(--work-bg);
        }

        .work-cta-card {
          position: relative;
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          align-items: center;
          gap: 35px;
          overflow: hidden;
          padding: 60px;
          border: 1px solid var(--work-border);
          border-radius: 16px;
          background:
            radial-gradient(
              ellipse at 80% 50%,
              rgba(36,69,117,.12),
              transparent 38%
            ),
            var(--work-surface);
        }

        .work-cta-glow {
          position: absolute;
          top: -160px;
          right: -70px;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          background: rgba(36,69,117,.1);
          filter: blur(60px);
          pointer-events: none;
        }

        .work-cta-content {
          position: relative;
          z-index: 1;
        }

        .work-cta-label {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--work-muted);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.6px;
        }

        .work-cta-content h2 {
          margin: 22px 0 18px;
          color: var(--work-text);
          font-size: clamp(32px, 4vw, 49px);
          font-weight: 750;
          letter-spacing: -2px;
          line-height: 1.13;
        }

        .work-cta-content > p {
          max-width: 460px;
          margin: 0;
          color: var(--work-muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .work-cta-graphic {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 270px;
        }

        .work-cta-ring {
          position: absolute;
          width: 240px;
          height: 240px;
          border: 1px solid rgba(36,69,117,.25);
          border-radius: 50%;
        }

        .work-cta-ring-two {
          width: 190px;
          height: 190px;
          border-color: rgba(82,118,170,.3);
        }

        .work-cta-ring-three {
          width: 135px;
          height: 135px;
          border-color: rgba(36,69,117,.4);
        }

        .work-cta-center {
          position: relative;
          z-index: 1;
          display: grid;
          place-items: center;
          width: 82px;
          height: 82px;
          border: 1px solid rgba(255,255,255,.4);
          border-radius: 24px;
          color: #fff;
          background: linear-gradient(145deg, #142b52, #34598e);
          box-shadow: 0 18px 45px rgba(20,43,82,.3);
          font-size: 43px;
          font-weight: 900;
          letter-spacing: -4px;
          transform: rotate(-8deg);
        }

        .work-cta-star,
        .work-cta-arrow {
          position: absolute;
          z-index: 2;
          display: grid;
          place-items: center;
          width: 43px;
          height: 43px;
          border: 1px solid var(--work-border);
          border-radius: 13px;
          color: #244575;
          background: var(--work-card);
          box-shadow: 0 8px 20px rgba(20,40,80,.09);
        }

        .work-cta-star {
          top: 25px;
          right: 30px;
        }

        .work-cta-arrow {
          bottom: 24px;
          left: 26px;
        }

        /* PROJECT MODAL */

        .work-modal-backdrop {
          position: fixed;
          z-index: 9999;
          inset: 0;
          display: grid;
          place-items: center;
          overflow-y: auto;
          padding: 25px;
          background: rgba(5,12,25,.76);
          backdrop-filter: blur(8px);
        }

        .work-modal {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          width: min(900px, 100%);
          max-height: calc(100vh - 50px);
          overflow-y: auto;
          padding: 28px;
          border: 1px solid var(--work-border);
          border-radius: 15px;
          color: var(--work-text);
          background: var(--work-card);
          box-shadow: 0 30px 100px rgba(0,0,0,.25);
        }

        .work-modal-close {
          position: absolute;
          z-index: 2;
          top: 14px;
          right: 14px;
          display: grid;
          place-items: center;
          width: 36px;
          height: 36px;
          border: 1px solid var(--work-border);
          border-radius: 50%;
          color: var(--work-text);
          background: var(--work-card);
          cursor: pointer;
        }

        .work-modal-preview {
          align-self: center;
          min-width: 0;
        }

        .work-modal-preview .project-preview {
          min-height: 300px;
        }

        .work-modal-body {
          align-self: center;
          padding: 16px 4px;
        }

        .work-modal-body h2 {
          margin: 15px 0;
          font-size: 27px;
          letter-spacing: -1px;
          line-height: 1.2;
        }

        .work-modal-body p {
          color: var(--work-muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .work-modal-body h3 {
          margin: 23px 0 8px;
          font-size: 14px;
        }

        .work-modal-body .work-primary-button {
          margin-top: 24px;
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {
          .work-hero-grid {
            gap: 20px;
          }

          .work-hero h1 {
            font-size: clamp(42px, 6vw, 60px);
            letter-spacing: -2.8px;
          }

          .work-hero-visual {
            min-height: 380px;
          }

          .work-art-orbit-a {
            width: 330px;
          }

          .work-art-orbit-b {
            width: 300px;
          }

          .work-intro-grid,
          .work-services-strip-inner {
            gap: 40px;
          }

          .work-cta-card {
            padding: 42px;
          }

          .work-project-preview-button {
            padding: 12px;
          }

          .project-preview {
            min-height: 230px;
          }

          .preview-content {
            padding: 15px 12px 10px;
          }
        }

        @media (max-width: 680px) {
          .work-container {
            width: min(100% - 32px, 520px);
          }

          .work-hero {
            padding-top: 58px;
          }

          .work-hero-grid,
          .work-intro-grid,
          .work-services-strip-inner,
          .work-cta-card {
            grid-template-columns: 1fr;
          }

          .work-hero-grid {
            gap: 15px;
          }

          .work-hero h1 {
            margin-top: 20px;
            font-size: clamp(42px, 12vw, 62px);
            letter-spacing: -2.8px;
          }

          .work-hero-description {
            font-size: 14px;
          }

          .work-hero-visual {
            min-height: 360px;
            margin-top: 5px;
          }

          .work-hero-art {
            max-width: 360px;
          }

          .work-art-badge {
            right: 0;
          }

          .work-label-top {
            left: 0;
          }

          .work-label-bottom {
            right: 0;
          }

          .work-hero-bottom {
            gap: 10px;
            font-size: 7px;
            letter-spacing: 1px;
          }

          .work-hero-bottom-line {
            width: 18px;
          }

          .work-intro-section,
          .work-projects-section,
          .work-capabilities-section {
            padding: 68px 0;
          }

          .work-intro-grid {
            gap: 20px;
          }

          .work-intro-copy {
            padding-top: 0;
          }

          .work-section-heading {
            font-size: 36px;
            letter-spacing: -1.5px;
          }

          .work-projects-heading {
            display: block;
            margin-bottom: 28px;
          }

          .work-projects-heading-copy {
            margin-top: 17px;
          }

          .work-toolbar {
            align-items: stretch;
          }

          .work-filters {
            flex-wrap: nowrap;
            overflow-x: auto;
            padding-bottom: 5px;
          }

          .work-filter-button {
            flex: 0 0 auto;
          }

          .work-search {
            width: 100%;
          }

          .work-project-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .project-preview {
            min-height: 250px;
          }

          .preview-heading {
            font-size: 27px;
          }

          .work-capabilities-grid {
            grid-template-columns: 1fr;
          }

          .work-capability-card {
            min-height: auto;
            padding: 24px;
            border-right: 0;
            border-bottom: 1px solid var(--work-border);
          }

          .work-capability-card:last-child {
            border-bottom: 0;
          }

          .work-capability-card h3 {
            margin-top: 28px;
          }

          .work-services-strip {
            padding-top: 65px;
          }

          .work-services-strip-inner {
            gap: 30px;
            padding-bottom: 42px;
          }

          .work-services-strip-copy h2 {
            font-size: 34px;
          }

          .work-services-strip-bottom {
            font-size: 7px;
            letter-spacing: .8px;
          }

          .work-cta-section {
            padding: 30px 0 70px;
          }

          .work-cta-card {
            gap: 10px;
            padding: 30px 23px;
          }

          .work-cta-content h2 {
            font-size: 36px;
            letter-spacing: -1.5px;
          }

          .work-cta-graphic {
            min-height: 230px;
          }

          .work-cta-ring {
            width: 205px;
            height: 205px;
          }

          .work-cta-ring-two {
            width: 160px;
            height: 160px;
          }

          .work-cta-ring-three {
            width: 115px;
            height: 115px;
          }

          .work-modal-backdrop {
            padding: 12px;
          }

          .work-modal {
            grid-template-columns: 1fr;
            gap: 12px;
            max-height: calc(100vh - 24px);
            padding: 18px;
          }

          .work-modal-preview .project-preview {
            min-height: 250px;
          }

          .work-modal-body {
            padding: 12px 2px;
          }

          .work-modal-body h2 {
            font-size: 23px;
          }

          .work-modal-close {
            top: 8px;
            right: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .work-page *,
          .work-page *::before,
          .work-page *::after {
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
          }
        }
      `}</style>
    </>
  );
}
