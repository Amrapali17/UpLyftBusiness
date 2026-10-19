
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
  CheckCircle2,
  Globe2,
  Lightbulb,
  Rocket,
  MousePointer2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    no: "01",
    title: "Web Development",
    desc: "Modern, responsive websites designed to communicate your value and turn visitors into customers.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    alt: "Creative professionals collaborating around a laptop",
    icon: Code2,
    tags: ["Business websites", "Landing pages", "E-commerce"],
  },
  {
    no: "02",
    title: "Digital Marketing",
    desc: "Build online visibility with thoughtful marketing strategies, search optimisation, and digital campaigns.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    alt: "Digital analytics and campaign performance on a laptop",
    icon: TrendingUp,
    tags: ["SEO", "Digital strategy", "Visibility"],
  },
  {
    no: "03",
    title: "Social Media & Creative",
    desc: "Create a consistent brand identity through social media management, content, and memorable visuals.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85",
    alt: "Creative team discussing a marketing project",
    icon: Sparkles,
    tags: ["Social media", "Content", "Branding"],
  },
  {
    no: "04",
    title: "Growth & Strategy",
    desc: "Connect business goals with practical digital solutions and discover opportunities for meaningful progress.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    alt: "Business professionals working together on strategy",
    icon: Target,
    tags: ["Business strategy", "Planning", "Growth"],
  },
];

const values = [
  {
    no: "01",
    title: "Purpose before pixels",
    desc: "We begin with the business problem, the audience, and the result we want to achieve.",
    icon: Target,
  },
  {
    no: "02",
    title: "Built around people",
    desc: "We create useful experiences that make technology easier to understand and use.",
    icon: Layers3,
  },
  {
    no: "03",
    title: "Progress over noise",
    desc: "We focus on thoughtful execution and meaningful improvements, not unnecessary complexity.",
    icon: TrendingUp,
  },
  {
    no: "04",
    title: "Always moving forward",
    desc: "We stay curious, keep learning, and explore better ways to solve digital challenges.",
    icon: Zap,
  },
];

const future = [
  {
    title: "Digital Services",
    desc: "Building stronger online presences for businesses.",
    icon: Globe2,
  },
  {
    title: "Technology Solutions",
    desc: "Creating useful digital experiences and business tools.",
    icon: Code2,
  },
  {
    title: "AI & Automation",
    desc: "Exploring smarter ways to simplify everyday workflows.",
    icon: Lightbulb,
  },
  {
    title: "Software Products",
    desc: "Developing practical solutions for evolving business needs.",
    icon: Rocket,
  },
];

function About() {
  useEffect(() => {
    const page = document.querySelector(".about-page");
    if (!page) return undefined;

    const items = page.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      <Navbar />

      <main className="about-main">
        {/* HERO */}
        <section className="ab-hero">
          <div className="ab-container ab-hero-grid">
            <div className="ab-hero-copy" data-reveal>
              <div className="ab-eyebrow">
                <span className="ab-dot" />
                DIGITAL & TECHNOLOGY
              </div>

              <h1>
                Building digital
                <br />
                momentum for
                <br />
                <span>businesses.</span>
              </h1>

              <p className="ab-lead">
                We bring technology, creativity, and strategy together to help
                businesses build a stronger digital presence and move forward
                with confidence.
              </p>

              <div className="ab-actions">
                <Link to="/enquire" className="ab-btn ab-btn-primary">
                  Let's build something <ArrowUpRight size={18} />
                </Link>

                <Link to="/services" className="ab-link">
                  Explore what we do <ArrowRight size={17} />
                </Link>
              </div>

              <div className="ab-trust">
                <span><CheckCircle2 size={15} /> Strategy-led</span>
                <span><CheckCircle2 size={15} /> Design-focused</span>
                <span><CheckCircle2 size={15} /> Growth-minded</span>
              </div>
            </div>

            <div className="ab-hero-visual" data-reveal>
              <div className="ab-hero-photo">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=90"
                  alt="A team collaborating in a modern workspace"
                  fetchPriority="high"
                />

                <div className="ab-photo-shade" />

                <div className="ab-photo-caption">
                  <span>IDEAS INTO IMPACT</span>
                  <h2>Think clearly. Build boldly.</h2>
                  <p>Digital experiences designed around your business.</p>
                </div>
              </div>

              <div className="ab-float-card ab-float-top">
                <span className="ab-float-icon"><Sparkles size={19} /></span>
                <div>
                  <strong>Creative thinking</strong>
                  <small>Ideas with purpose</small>
                </div>
              </div>

              <div className="ab-float-card ab-float-bottom">
                <span className="ab-float-icon ab-icon-dark">
                  <TrendingUp size={19} />
                </span>
                <div>
                  <strong>Business growth</strong>
                  <small>Progress with direction</small>
                </div>
                <ArrowUpRight size={17} />
              </div>

              <span className="ab-orbit ab-orbit-one" />
              <span className="ab-orbit ab-orbit-two" />
            </div>
          </div>

          <div className="ab-hero-strip">
            <div className="ab-container ab-strip-inner">
              <span className="ab-strip-label">THE WAY WE THINK</span>
              <div className="ab-build-words">
                <span>Build</span><i />
                <span>Grow</span><i />
                <span>Move forward</span>
              </div>
              <span className="ab-hindi">
                बनाओ <b>•</b> बढ़ाओ <b>•</b> बढ़ते जाओ
              </span>
            </div>
          </div>
        </section>

        {/* ABOUT US */}
        <section className="ab-section ab-intro">
          <div className="ab-container ab-intro-grid">
            <div className="ab-section-label" data-reveal>
              <span>01 / ABOUT US</span>
              <i />
              Who we are
            </div>

            <div data-reveal>
              <h2 className="ab-heading">
                Digital should do more than
                <span> look good.</span>
              </h2>

              <div className="ab-intro-columns">
                <p>
                  A strong digital presence is about more than a beautiful
                  website or an active social media page. It is about creating
                  the right experience, communicating value, and making it
                  easier for people to connect with your business.
                </p>
                <p>
                  At UpLyftBusiness, we bring digital services, creative
                  thinking, and technology together to help businesses
                  strengthen their presence and discover new opportunities.
                </p>
              </div>

              <Link to="/services" className="ab-link ab-inline-link">
                Discover our services <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="ab-section ab-services">
          <div className="ab-container">
            <div className="ab-section-heading" data-reveal>
              <div>
                <div className="ab-section-label">
                  <span>02 / WHAT WE DO</span><i /> Our capabilities
                </div>
                <h2 className="ab-heading">
                  The right people.
                  <br />
                  <span>The right digital solutions.</span>
                </h2>
              </div>

              <p>
                From the first idea to the final experience, we combine
                creativity and technology to solve real business challenges.
              </p>
            </div>

            <div className="ab-service-grid">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article
                    className="ab-service-card"
                    key={service.no}
                    data-reveal
                    style={{ "--delay": `${index * 100}ms` }}
                  >
                    <div className="ab-service-photo">
                      <img
                        src={service.image}
                        alt={service.alt}
                        loading="lazy"
                      />
                      <div className="ab-service-photo-shade" />
                      <span className="ab-service-no">{service.no}</span>
                      <span className="ab-service-icon"><Icon size={22} /></span>
                      <span className="ab-photo-label">UPLYFTBUSINESS</span>
                    </div>

                    <div className="ab-service-content">
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>

                      <div className="ab-tags">
                        {service.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>

                      <Link to="/services" className="ab-service-link">
                        Explore service <ArrowUpRight size={17} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="ab-service-footer" data-reveal>
              <span>Have a specific business challenge in mind?</span>
              <Link to="/enquire" className="ab-link">
                Let's talk about it <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="ab-section ab-approach">
          <div className="ab-container ab-approach-grid">
            <div data-reveal>
              <div className="ab-section-label">
                <span>03 / OUR APPROACH</span><i /> How we work
              </div>

              <h2 className="ab-heading">
                Good work starts
                <br />
                with <span>good thinking.</span>
              </h2>

              <p className="ab-body-copy">
                We believe the best digital solutions begin with listening,
                understanding the bigger picture, and choosing the right way
                forward. Every business is different, so our approach starts
                with your goals rather than a one-size-fits-all solution.
              </p>

              <div className="ab-approach-points">
                <div>
                  <span><MousePointer2 size={19} /></span>
                  <div>
                    <strong>Understand the challenge</strong>
                    <p>Get clear on the business and its audience.</p>
                  </div>
                </div>
                <div>
                  <span><Lightbulb size={19} /></span>
                  <div>
                    <strong>Find the right direction</strong>
                    <p>Choose solutions that serve a real purpose.</p>
                  </div>
                </div>
                <div>
                  <span><Rocket size={19} /></span>
                  <div>
                    <strong>Build for what comes next</strong>
                    <p>Create a foundation ready for future growth.</p>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="ab-link">
                Get to know us <ArrowRight size={17} />
              </Link>
            </div>

            <div className="ab-approach-visual" data-reveal>
              <div className="ab-approach-photo">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                  alt="Business team collaborating around a table"
                  loading="lazy"
                />
              </div>

              <div className="ab-approach-note">
                <span><Sparkles size={20} /></span>
                <div>
                  <strong>People first. Purpose always.</strong>
                  <p>Thoughtful work starts with understanding.</p>
                </div>
              </div>
              <div className="ab-dots-decoration" />
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="ab-section ab-values">
          <div className="ab-container">
            <div className="ab-section-heading" data-reveal>
              <div>
                <div className="ab-section-label">
                  <span>04 / OUR PRINCIPLES</span><i /> What guides us
                </div>
                <h2 className="ab-heading">
                  What we believe
                  <br />
                  <span>shapes what we build.</span>
                </h2>
              </div>
              <p>
                These principles guide how we think, how we work, and how we
                approach every business challenge.
              </p>
            </div>

            <div className="ab-values-grid">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <article
                    className="ab-value-card"
                    key={value.no}
                    data-reveal
                    style={{ "--delay": `${index * 90}ms` }}
                  >
                    <div className="ab-value-top">
                      <span>{value.no}</span>
                      <div><Icon size={22} /></div>
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.desc}</p>
                    <div className="ab-value-bottom">
                      <i /><ArrowUpRight size={17} />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONNECTED THINKING */}
        <section className="ab-section ab-system">
          <div className="ab-container ab-system-grid">
            <div data-reveal>
              <div className="ab-section-label">
                <span>05 / THE BIGGER PICTURE</span><i /> Connected thinking
              </div>

              <h2 className="ab-system-heading">
                Technology.
                <br />
                Creative.
                <br />
                <span>Growth.</span>
              </h2>

              <p className="ab-body-copy">
                Strong digital experiences happen when different capabilities
                work together. We look at the bigger picture to help businesses
                build connected, consistent, and useful digital experiences.
              </p>

              <Link to="/services" className="ab-btn ab-btn-outline">
                See how we can help <ArrowRight size={17} />
              </Link>
            </div>

            <div className="ab-system-visual" data-reveal>
              <div className="ab-ring ab-ring-outer" />
              <div className="ab-ring ab-ring-middle" />
              <div className="ab-ring ab-ring-inner" />

              <div className="ab-system-center">
                <div className="ab-monogram"><span>U</span><span>B</span></div>
                <strong>UpLyftBusiness</strong>
                <small>BUILT AROUND YOUR GOALS</small>
              </div>

              <div className="ab-system-node ab-node-top">
                <span><Code2 size={20} /></span>
                <div><strong>Technology</strong><small>Useful solutions</small></div>
              </div>

              <div className="ab-system-node ab-node-right">
                <span><Sparkles size={20} /></span>
                <div><strong>Creative</strong><small>Meaningful design</small></div>
              </div>

              <div className="ab-system-node ab-node-left">
                <span><TrendingUp size={20} /></span>
                <div><strong>Growth</strong><small>Business progress</small></div>
              </div>

              <span className="ab-system-dot ab-s-dot-one" />
              <span className="ab-system-dot ab-s-dot-two" />
              <span className="ab-system-dot ab-s-dot-three" />
            </div>
          </div>
        </section>

        {/* FUTURE */}
        <section className="ab-section ab-future">
          <div className="ab-container ab-future-grid">
            <div data-reveal>
              <div className="ab-section-label">
                <span>06 / LOOKING AHEAD</span><i /> Our direction
              </div>

              <h2 className="ab-heading">
                Built for today.
                <br />
                <span>Ready for tomorrow.</span>
              </h2>

              <p className="ab-body-copy">
                Our vision goes beyond individual services. We want to keep
                exploring practical technology, smarter workflows, and digital
                products that help businesses work better as their needs evolve.
              </p>

              <div className="ab-future-photo">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85"
                  alt="Bright, modern collaborative workspace"
                  loading="lazy"
                />
                <div className="ab-future-photo-caption">
                  <span>THE NEXT CHAPTER</span>
                  <strong>Keep learning. Keep building.</strong>
                </div>
              </div>
            </div>

            <div className="ab-future-list" data-reveal>
              {future.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div className="ab-future-item" key={item.title}>
                    <span className="ab-future-icon"><Icon size={21} /></span>
                    <div className="ab-future-copy">
                      <small>0{index + 1}</small>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                    <ArrowUpRight size={18} className="ab-future-arrow" />
                  </div>
                );
              })}

              <div className="ab-future-note">
                <Sparkles size={18} />
                <p>A long-term vision, built one meaningful step at a time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="ab-final">
          <div className="ab-container">
            <div className="ab-final-panel" data-reveal>
              <div className="ab-final-circles" />
              <div className="ab-final-content">
                <div className="ab-eyebrow ab-eyebrow-light">
                  <span className="ab-dot" />
                  LET'S MOVE FORWARD
                </div>

                <h2>
                  Your next chapter
                  <br />
                  starts with <span>an idea.</span>
                </h2>

                <p>
                  Tell us what you're building, what you want to improve, or
                  where you want your business to go. Let's explore what's
                  possible together.
                </p>

                <div className="ab-final-actions">
                  <Link to="/enquire" className="ab-btn ab-btn-white">
                    Start a project <ArrowUpRight size={18} />
                  </Link>
                  <Link to="/contact" className="ab-final-link">
                    Talk to our team <ArrowRight size={17} />
                  </Link>
                </div>
              </div>

              <div className="ab-final-mark">
                <span>U</span><span>B</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        /* GLOBAL WIDTH FIX — prevents the Vite starter layout from
           squeezing the entire website into a narrow column. */
        html,
        body,
        #root {
          width: 100%;
          min-height: 100%;
          margin: 0;
        }

        body {
          min-width: 320px;
          overflow-x: hidden;
        }

        #root {
          max-width: none;
          padding: 0;
        }

        .about-page {
          --ab-navy: #102744;
          --ab-navy-deep: #0a1a30;
          --ab-blue: #547ba5;
          --ab-blue-soft: #eaf0f7;
          --ab-text: #18283c;
          --ab-muted: #657489;
          --ab-border: #e0e7ef;
          --ab-surface: #f7f9fc;
          width: 100%;
          max-width: none;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          color: var(--ab-text);
          background: #fff;
          overflow: clip;
          font-family: inherit;
        }

        .about-page *,
        .about-page *::before,
        .about-page *::after {
          box-sizing: border-box;
        }

        .about-page img {
          display: block;
          width: 100%;
          max-width: 100%;
        }

        .about-page a {
          text-decoration: none;
        }

        .about-main {
          display: block;
          width: 100%;
          max-width: none;
          margin: 0;
          padding: 0;
        }

        .ab-container {
          width: min(1180px, calc(100% - 64px));
          max-width: 1180px;
          margin-left: auto;
          margin-right: auto;
        }

        .ab-section {
          position: relative;
          width: 100%;
          padding: 105px 0;
        }

        .ab-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          color: var(--ab-navy);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .ab-dot {
          width: 8px;
          height: 8px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #7899bd;
          box-shadow: 0 0 0 5px rgba(120,153,189,.14);
          animation: abPulse 2.8s ease-in-out infinite;
        }

        /* Hero */

        .ab-hero {
          position: relative;
          width: 100%;
          padding-top: 78px;
          background:
            radial-gradient(ellipse at 78% 18%, rgba(206,221,238,.38), transparent 35%),
            linear-gradient(180deg, #fff 0%, #f8fafc 100%);
        }

        .ab-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, .94fr);
          align-items: center;
          gap: 70px;
          padding-bottom: 85px;
        }

        .ab-hero-copy {
          position: relative;
          z-index: 2;
          min-width: 0;
        }

        .ab-hero h1 {
          margin: 28px 0 24px;
          color: var(--ab-navy);
          font-size: clamp(46px, 5.4vw, 72px);
          line-height: 1.04;
          letter-spacing: -3.5px;
          font-weight: 760;
        }

        .ab-hero h1 span,
        .ab-heading span,
        .ab-system-heading span {
          color: var(--ab-blue);
        }

        .ab-lead {
          max-width: 530px;
          color: var(--ab-muted);
          font-size: 15px;
          line-height: 1.95;
          margin: 0;
        }

        .ab-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 26px;
          margin-top: 32px;
        }

        .ab-btn {
          min-height: 51px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 11px;
          padding: 0 21px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          transition: transform .22s ease, box-shadow .22s ease, background .22s ease;
        }

        .ab-btn:hover {
          transform: translateY(-3px);
        }

        .ab-btn-primary {
          color: white;
          background: var(--ab-navy);
          box-shadow: 0 9px 24px rgba(16,39,68,.13);
        }

        .ab-btn-primary:hover {
          background: #1b3d63;
          box-shadow: 0 13px 28px rgba(16,39,68,.2);
        }

        .ab-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--ab-navy);
          font-size: 13px;
          font-weight: 700;
          transition: gap .22s ease, color .22s ease;
        }

        .ab-link:hover {
          gap: 14px;
          color: var(--ab-blue);
        }

        .ab-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 18px;
          padding-top: 22px;
          margin-top: 38px;
          border-top: 1px solid var(--ab-border);
        }

        .ab-trust span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--ab-muted);
          font-size: 11px;
          font-weight: 600;
        }

        .ab-trust svg {
          color: var(--ab-blue);
        }

        .ab-hero-visual {
          position: relative;
          min-width: 0;
          padding: 8px 10px 25px 8px;
        }

        .ab-hero-photo {
          position: relative;
          height: 475px;
          overflow: hidden;
          border-radius: 17px;
          background: #dce6f0;
          box-shadow: 0 25px 65px rgba(16,39,68,.16);
          isolation: isolate;
          animation: abEnter .9s ease both;
        }

        .ab-hero-photo img {
          height: 100%;
          object-fit: cover;
          transition: transform .8s ease;
        }

        .ab-hero-photo:hover img {
          transform: scale(1.045);
        }

        .ab-photo-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 25%, rgba(7,23,43,.82) 100%);
        }

        .ab-photo-caption {
          position: absolute;
          left: 28px;
          right: 24px;
          bottom: 30px;
          color: white;
        }

        .ab-photo-caption > span {
          color: #d6e4f4;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .ab-photo-caption h2 {
          margin: 12px 0 8px;
          color: white;
          font-size: clamp(24px, 2.6vw, 33px);
          line-height: 1.2;
          letter-spacing: -1px;
        }

        .ab-photo-caption p {
          margin: 0;
          color: rgba(255,255,255,.84);
          font-size: 13px;
          line-height: 1.7;
        }

        .ab-float-card {
          position: absolute;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 13px 15px;
          border: 1px solid rgba(255,255,255,.8);
          border-radius: 11px;
          background: rgba(255,255,255,.97);
          box-shadow: 0 15px 42px rgba(10,26,48,.17);
          animation: abFloat 5s ease-in-out infinite;
        }

        .ab-float-top {
          top: 40px;
          left: -30px;
        }

        .ab-float-bottom {
          right: -27px;
          bottom: 55px;
          animation-delay: -2.5s;
        }

        .ab-float-icon {
          width: 40px;
          height: 40px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          color: var(--ab-navy);
          background: var(--ab-blue-soft);
          border-radius: 9px;
        }

        .ab-icon-dark {
          color: white;
          background: var(--ab-navy);
        }

        .ab-float-card strong,
        .ab-float-card small {
          display: block;
          white-space: nowrap;
        }

        .ab-float-card strong {
          margin-bottom: 4px;
          color: var(--ab-navy);
          font-size: 12px;
        }

        .ab-float-card small {
          color: var(--ab-muted);
          font-size: 10px;
        }

        .ab-float-bottom > svg {
          color: var(--ab-blue);
        }

        .ab-orbit {
          position: absolute;
          z-index: -1;
          border: 1px solid rgba(84,123,165,.18);
          border-radius: 50%;
          pointer-events: none;
        }

        .ab-orbit-one {
          width: 150px;
          height: 150px;
          top: -48px;
          right: -50px;
        }

        .ab-orbit-two {
          width: 85px;
          height: 85px;
          top: -15px;
          right: -17px;
        }

        .ab-hero-strip {
          border-top: 1px solid var(--ab-border);
          background: rgba(255,255,255,.8);
        }

        .ab-strip-inner {
          min-height: 75px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .ab-strip-label {
          color: var(--ab-muted);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.8px;
        }

        .ab-build-words {
          display: flex;
          align-items: center;
          gap: 15px;
          color: var(--ab-navy);
          font-size: 13px;
          font-weight: 700;
        }

        .ab-build-words i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--ab-blue);
        }

        .ab-hindi {
          color: var(--ab-muted);
          font-size: 11px;
        }

        .ab-hindi b {
          color: var(--ab-blue);
        }

        /* Section headings */

        .ab-section-label {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 11px;
          color: var(--ab-muted);
          font-size: 11px;
          font-weight: 600;
        }

        .ab-section-label > span {
          color: var(--ab-navy);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.1px;
        }

        .ab-section-label > i {
          width: 23px;
          height: 1px;
          background: #a9bdd3;
        }

        .ab-heading {
          margin: 23px 0 25px;
          color: var(--ab-navy);
          font-size: clamp(34px, 4vw, 48px);
          line-height: 1.16;
          letter-spacing: -2px;
          font-weight: 750;
        }

        .ab-body-copy {
          color: var(--ab-muted);
          font-size: 14px;
          line-height: 1.95;
          margin: 0;
        }

        /* Intro */

        .ab-intro {
          background: white;
        }

        .ab-intro-grid {
          display: grid;
          grid-template-columns: .65fr 1.65fr;
          gap: 70px;
        }

        .ab-intro-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .ab-intro-columns p {
          margin: 0;
          color: var(--ab-muted);
          font-size: 14px;
          line-height: 1.95;
        }

        .ab-inline-link {
          margin-top: 25px;
        }

        /* What we do */

        .ab-services,
        .ab-values,
        .ab-future {
          background: var(--ab-surface);
          border-top: 1px solid #eef2f6;
          border-bottom: 1px solid #eef2f6;
        }

        .ab-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 45px;
          margin-bottom: 43px;
        }

        .ab-section-heading > p {
          max-width: 360px;
          margin: 0 0 5px;
          color: var(--ab-muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .ab-service-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .ab-service-card {
          min-width: 0;
          overflow: hidden;
          background: white;
          border: 1px solid var(--ab-border);
          border-radius: 14px;
          box-shadow: 0 6px 24px rgba(16,39,68,.025);
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
          transition-delay: var(--delay, 0ms);
        }

        .ab-service-card:hover {
          transform: translateY(-7px);
          border-color: #c8d6e6;
          box-shadow: 0 20px 45px rgba(16,39,68,.09);
        }

        .ab-service-photo {
          position: relative;
          height: 255px;
          overflow: hidden;
          background: #dce6f0;
          isolation: isolate;
        }

        .ab-service-photo img {
          height: 100%;
          object-fit: cover;
          transition: transform .7s cubic-bezier(.2,.7,.2,1);
        }

        .ab-service-card:hover .ab-service-photo img {
          transform: scale(1.07);
        }

        .ab-service-photo-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10,26,48,.2), transparent 42%, rgba(10,26,48,.18));
          pointer-events: none;
        }

        .ab-service-no {
          position: absolute;
          top: 17px;
          left: 17px;
          padding: 8px 11px;
          color: white;
          background: rgba(10,26,48,.75);
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 6px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .ab-service-icon {
          position: absolute;
          top: 17px;
          right: 17px;
          width: 43px;
          height: 43px;
          display: grid;
          place-items: center;
          color: var(--ab-navy);
          background: rgba(255,255,255,.96);
          border-radius: 10px;
          box-shadow: 0 6px 20px rgba(10,26,48,.12);
          transition: transform .25s ease;
        }

        .ab-service-card:hover .ab-service-icon {
          transform: rotate(-7deg) scale(1.06);
        }

        .ab-photo-label {
          position: absolute;
          bottom: 15px;
          left: 18px;
          color: white;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .ab-service-content {
          padding: 25px 26px 23px;
        }

        .ab-service-content h3 {
          margin: 0 0 10px;
          color: var(--ab-navy);
          font-size: 22px;
          line-height: 1.3;
          letter-spacing: -.5px;
        }

        .ab-service-content > p {
          margin: 0;
          color: var(--ab-muted);
          font-size: 13px;
          line-height: 1.85;
        }

        .ab-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 18px;
        }

        .ab-tags span {
          padding: 7px 10px;
          color: #536981;
          background: #f1f5f9;
          border: 1px solid #e7edf4;
          border-radius: 5px;
          font-size: 10px;
          font-weight: 600;
        }

        .ab-service-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-top: 17px;
          margin-top: 20px;
          border-top: 1px solid #edf1f5;
          color: var(--ab-navy);
          font-size: 12px;
          font-weight: 750;
        }

        .ab-service-link svg {
          transition: transform .22s ease;
        }

        .ab-service-link:hover svg {
          transform: translate(3px, -3px);
        }

        .ab-service-footer {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px 28px;
          margin-top: 34px;
          padding: 23px;
          border: 1px solid var(--ab-border);
          border-radius: 10px;
          background: white;
        }

        .ab-service-footer > span {
          color: var(--ab-muted);
          font-size: 13px;
        }

        /* Approach */

        .ab-approach-grid {
          display: grid;
          grid-template-columns: 1fr .94fr;
          align-items: center;
          gap: 85px;
        }

        .ab-approach-points {
          display: grid;
          gap: 22px;
          margin: 30px 0;
        }

        .ab-approach-points > div {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .ab-approach-points > div > span {
          width: 39px;
          height: 39px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          color: var(--ab-navy);
          background: var(--ab-blue-soft);
          border-radius: 10px;
        }

        .ab-approach-points strong {
          display: block;
          margin: 1px 0 5px;
          color: var(--ab-navy);
          font-size: 13px;
        }

        .ab-approach-points p {
          margin: 0;
          color: var(--ab-muted);
          font-size: 12px;
          line-height: 1.7;
        }

        .ab-approach-visual {
          position: relative;
          padding: 0 0 25px 25px;
        }

        .ab-approach-photo {
          height: 490px;
          overflow: hidden;
          border-radius: 14px;
          background: #dce5ef;
          box-shadow: 0 20px 50px rgba(16,39,68,.12);
        }

        .ab-approach-photo img {
          height: 100%;
          object-fit: cover;
          transition: transform .8s ease;
        }

        .ab-approach-photo:hover img {
          transform: scale(1.045);
        }

        .ab-approach-note {
          position: absolute;
          z-index: 2;
          left: -10px;
          bottom: 53px;
          max-width: 300px;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 17px 19px;
          background: white;
          border: 1px solid #e5ebf2;
          border-radius: 10px;
          box-shadow: 0 15px 38px rgba(16,39,68,.12);
          animation: abFloat 5.5s ease-in-out infinite;
        }

        .ab-approach-note > span {
          width: 40px;
          height: 40px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          color: var(--ab-navy);
          background: var(--ab-blue-soft);
          border-radius: 10px;
        }

        .ab-approach-note strong {
          display: block;
          margin-bottom: 5px;
          color: var(--ab-navy);
          font-size: 12px;
        }

        .ab-approach-note p {
          margin: 0;
          color: var(--ab-muted);
          font-size: 10px;
          line-height: 1.6;
        }

        .ab-dots-decoration {
          position: absolute;
          z-index: -1;
          right: -20px;
          bottom: 0;
          width: 120px;
          height: 120px;
          background-image: radial-gradient(#b7c9dc 1.5px, transparent 1.5px);
          background-size: 12px 12px;
        }

        /* Values */

        .ab-values-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .ab-value-card {
          min-height: 275px;
          display: flex;
          flex-direction: column;
          padding: 23px 21px 19px;
          background: white;
          border: 1px solid var(--ab-border);
          border-radius: 11px;
          transition: transform .27s ease, box-shadow .27s ease, border-color .27s ease;
          transition-delay: var(--delay, 0ms);
        }

        .ab-value-card:hover {
          transform: translateY(-6px);
          border-color: #bdcfe1;
          box-shadow: 0 15px 36px rgba(16,39,68,.07);
        }

        .ab-value-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 27px;
        }

        .ab-value-top > span {
          color: #8998aa;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .ab-value-top > div {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          color: var(--ab-navy);
          background: var(--ab-blue-soft);
          border-radius: 11px;
          transition: transform .25s ease;
        }

        .ab-value-card:hover .ab-value-top > div {
          transform: rotate(-6deg);
        }

        .ab-value-card h3 {
          margin: 0 0 11px;
          color: var(--ab-navy);
          font-size: 17px;
          line-height: 1.4;
        }

        .ab-value-card > p {
          margin: 0 0 20px;
          color: var(--ab-muted);
          font-size: 12px;
          line-height: 1.85;
        }

        .ab-value-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid #edf1f5;
          color: var(--ab-blue);
        }

        .ab-value-bottom i {
          width: 28px;
          height: 2px;
          background: #b3c7dc;
          transition: width .24s ease;
        }

        .ab-value-card:hover .ab-value-bottom i {
          width: 48px;
        }

        /* Connected system */

        .ab-system-grid {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          align-items: center;
          gap: 55px;
        }

        .ab-system-heading {
          margin: 27px 0;
          color: var(--ab-navy);
          font-size: clamp(43px, 5vw, 60px);
          line-height: 1.1;
          letter-spacing: -2.5px;
        }

        .ab-system-grid .ab-body-copy {
          max-width: 450px;
          margin-bottom: 28px;
        }

        .ab-btn-outline {
          color: var(--ab-navy);
          background: white;
          border: 1px solid #cad7e5;
        }

        .ab-btn-outline:hover {
          border-color: var(--ab-navy);
          box-shadow: 0 8px 22px rgba(16,39,68,.08);
        }

        .ab-system-visual {
          position: relative;
          min-height: 500px;
          display: grid;
          place-items: center;
          isolation: isolate;
        }

        .ab-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1px solid #dce6f0;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .ab-ring-outer {
          width: 420px;
          height: 420px;
          border-style: dashed;
          animation: abRotate 65s linear infinite;
        }

        .ab-ring-middle {
          width: 330px;
          height: 330px;
          animation: abRotateReverse 50s linear infinite;
        }

        .ab-ring-inner {
          width: 230px;
          height: 230px;
        }

        .ab-system-center {
          position: relative;
          z-index: 2;
          width: 180px;
          height: 180px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 1px solid #d9e4ef;
          border-radius: 50%;
          background: white;
          box-shadow: 0 0 0 10px rgba(234,240,247,.6), 0 15px 40px rgba(16,39,68,.1);
        }

        .ab-monogram {
          display: flex;
          color: var(--ab-navy);
          font-size: 29px;
          font-weight: 900;
          letter-spacing: -4px;
        }

        .ab-monogram span:last-child {
          color: var(--ab-blue);
        }

        .ab-system-center > strong {
          color: var(--ab-navy);
          font-size: 12px;
        }

        .ab-system-center > small {
          color: var(--ab-muted);
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .ab-system-node {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 175px;
          padding: 12px;
          border: 1px solid #e1e8f0;
          border-radius: 11px;
          background: white;
          box-shadow: 0 10px 30px rgba(16,39,68,.07);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .ab-system-node:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 35px rgba(16,39,68,.12);
        }

        .ab-system-node > span {
          width: 38px;
          height: 38px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          color: var(--ab-navy);
          background: var(--ab-blue-soft);
          border-radius: 9px;
        }

        .ab-system-node strong,
        .ab-system-node small {
          display: block;
        }

        .ab-system-node strong {
          margin-bottom: 4px;
          color: var(--ab-navy);
          font-size: 12px;
        }

        .ab-system-node small {
          color: var(--ab-muted);
          font-size: 10px;
        }

        .ab-node-top {
          top: 12px;
          left: 50%;
          transform: translateX(-50%);
        }

        .ab-node-top:hover {
          transform: translate(-50%, -5px);
        }

        .ab-node-right {
          top: 59%;
          right: -5px;
        }

        .ab-node-left {
          top: 59%;
          left: -5px;
        }

        .ab-system-dot {
          position: absolute;
          width: 9px;
          height: 9px;
          border: 2px solid white;
          border-radius: 50%;
          background: #7296bd;
          box-shadow: 0 0 0 4px rgba(114,150,189,.16);
          animation: abPulse 3s ease-in-out infinite;
        }

        .ab-s-dot-one { top: 23%; left: 22%; }
        .ab-s-dot-two { top: 31%; right: 18%; animation-delay: -.8s; }
        .ab-s-dot-three { bottom: 20%; left: 43%; animation-delay: -1.6s; }

        /* Future */

        .ab-future-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: start;
          gap: 80px;
        }

        .ab-future-photo {
          position: relative;
          height: 240px;
          overflow: hidden;
          margin-top: 28px;
          border-radius: 12px;
          background: #dce5ef;
        }

        .ab-future-photo img {
          height: 100%;
          object-fit: cover;
          transition: transform .75s ease;
        }

        .ab-future-photo:hover img {
          transform: scale(1.05);
        }

        .ab-future-photo::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(10,26,48,.8), transparent 85%);
        }

        .ab-future-photo-caption {
          position: absolute;
          z-index: 1;
          left: 20px;
          bottom: 19px;
          display: grid;
          gap: 6px;
        }

        .ab-future-photo-caption span {
          color: #d9e5f3;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.7px;
        }

        .ab-future-photo-caption strong {
          color: white;
          font-size: 16px;
        }

        .ab-future-list {
          border-top: 1px solid #dfe6ef;
        }

        .ab-future-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 23px 0;
          border-bottom: 1px solid #dfe6ef;
          transition: padding .24s ease;
        }

        .ab-future-item:hover {
          padding-left: 7px;
        }

        .ab-future-icon {
          width: 47px;
          height: 47px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          color: var(--ab-navy);
          background: #e9eff6;
          border-radius: 11px;
          transition: transform .24s ease;
        }

        .ab-future-item:hover .ab-future-icon {
          transform: rotate(-5deg);
        }

        .ab-future-copy {
          flex: 1;
          min-width: 0;
        }

        .ab-future-copy small {
          display: block;
          margin-bottom: 5px;
          color: #7b8da3;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .ab-future-copy h3 {
          margin: 0 0 5px;
          color: var(--ab-navy);
          font-size: 15px;
        }

        .ab-future-copy p {
          margin: 0;
          color: var(--ab-muted);
          font-size: 11px;
          line-height: 1.65;
        }

        .ab-future-arrow {
          flex: 0 0 auto;
          color: #8da3bb;
          transition: transform .24s ease;
        }

        .ab-future-item:hover .ab-future-arrow {
          transform: translate(3px, -3px);
        }

        .ab-future-note {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 17px;
          margin-top: 22px;
          background: white;
          border: 1px solid var(--ab-border);
          border-radius: 9px;
          color: var(--ab-blue);
        }

        .ab-future-note p {
          margin: 0;
          color: var(--ab-muted);
          font-size: 12px;
          line-height: 1.7;
        }

        /* Final call to action */

        .ab-final {
          width: 100%;
          padding: 90px 0 105px;
          background: white;
        }

        .ab-final-panel {
          position: relative;
          min-height: 380px;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 65px 70px;
          color: white;
          background:
            radial-gradient(ellipse at 90% 10%, rgba(102,143,187,.22), transparent 36%),
            linear-gradient(115deg, #0a1a30 0%, #142e4f 100%);
          border-radius: 17px;
          isolation: isolate;
        }

        .ab-final-content {
          position: relative;
          z-index: 2;
          max-width: 650px;
        }

        .ab-eyebrow-light {
          color: #d8e4f1;
        }

        .ab-eyebrow-light .ab-dot {
          background: #a5c3e3;
        }

        .ab-final-content h2 {
          margin: 25px 0 18px;
          color: white;
          font-size: clamp(37px, 4.5vw, 57px);
          line-height: 1.1;
          letter-spacing: -2.4px;
        }

        .ab-final-content h2 span {
          color: #a9c5e3;
        }

        .ab-final-content > p {
          max-width: 510px;
          margin: 0;
          color: rgba(255,255,255,.74);
          font-size: 13px;
          line-height: 1.9;
        }

        .ab-final-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
          margin-top: 28px;
        }

        .ab-btn-white {
          color: var(--ab-navy);
          background: white;
        }

        .ab-btn-white:hover {
          background: #edf3fa;
          box-shadow: 0 8px 25px rgba(0,0,0,.15);
        }

        .ab-final-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: white;
          font-size: 12px;
          font-weight: 700;
          transition: gap .22s ease;
        }

        .ab-final-link:hover {
          gap: 14px;
        }

        .ab-final-mark {
          position: absolute;
          top: 50%;
          right: 75px;
          display: flex;
          color: rgba(255,255,255,.08);
          font-size: 120px;
          font-weight: 900;
          letter-spacing: -20px;
          transform: translateY(-50%);
          pointer-events: none;
        }

        .ab-final-mark span:last-child {
          color: rgba(180,205,231,.15);
        }

        .ab-final-circles {
          position: absolute;
          top: -200px;
          right: -100px;
          width: 430px;
          height: 430px;
          border: 1px solid rgba(204,222,241,.12);
          border-radius: 50%;
          pointer-events: none;
        }

        .ab-final-circles::after {
          content: "";
          position: absolute;
          width: 290px;
          height: 290px;
          right: 40px;
          bottom: -150px;
          border: 1px solid rgba(204,222,241,.12);
          border-radius: 50%;
        }

        /* Scroll reveal */

        .about-page [data-reveal] {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .7s cubic-bezier(.2,.7,.2,1),
                      transform .7s cubic-bezier(.2,.7,.2,1);
          transition-delay: var(--delay, 0ms);
        }

        .about-page [data-reveal].is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-page .ab-service-card[data-reveal],
        .about-page .ab-value-card[data-reveal] {
          transition: opacity .7s ease,
                      transform .3s ease,
                      box-shadow .3s ease,
                      border-color .3s ease;
          transition-delay: var(--delay, 0ms);
        }

        .about-page .ab-service-card[data-reveal].is-visible:hover,
        .about-page .ab-value-card[data-reveal].is-visible:hover {
          transform: translateY(-6px);
        }

        @keyframes abFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes abPulse {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 0 5px rgba(111,148,189,.13);
          }
          50% {
            opacity: .72;
            box-shadow: 0 0 0 8px rgba(111,148,189,.05);
          }
        }

        @keyframes abRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes abRotateReverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }

        @keyframes abEnter {
          from { opacity: 0; transform: translateY(16px) scale(.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Dark mode */

        body.dark-mode .about-page {
          --ab-navy: #e2ebf5;
          --ab-navy-deep: #f1f5fa;
          --ab-blue: #a4c2e3;
          --ab-blue-soft: #1d3046;
          --ab-text: #e0e8f1;
          --ab-muted: #a1b0c2;
          --ab-border: #293c52;
          --ab-surface: #142234;
          color: var(--ab-text);
          background: #101c2b;
        }

        body.dark-mode .about-page .ab-hero {
          background:
            radial-gradient(ellipse at 78% 18%, rgba(78,113,151,.16), transparent 35%),
            linear-gradient(180deg, #101c2b, #142234);
        }

        body.dark-mode .about-page .ab-hero-strip,
        body.dark-mode .about-page .ab-services,
        body.dark-mode .about-page .ab-values,
        body.dark-mode .about-page .ab-future {
          background: var(--ab-surface);
          border-color: var(--ab-border);
        }

        body.dark-mode .about-page .ab-intro,
        body.dark-mode .about-page .ab-approach,
        body.dark-mode .about-page .ab-system,
        body.dark-mode .about-page .ab-final {
          background: #101c2b;
        }

        body.dark-mode .about-page .ab-service-card,
        body.dark-mode .about-page .ab-value-card,
        body.dark-mode .about-page .ab-service-footer,
        body.dark-mode .about-page .ab-approach-note,
        body.dark-mode .about-page .ab-system-center,
        body.dark-mode .about-page .ab-system-node,
        body.dark-mode .about-page .ab-future-note {
          background: #192a3e;
          border-color: var(--ab-border);
        }

        body.dark-mode .about-page .ab-tags span {
          color: #c2d0df;
          background: #22354a;
          border-color: #2b4057;
        }

        body.dark-mode .about-page .ab-service-link,
        body.dark-mode .about-page .ab-value-bottom {
          border-color: var(--ab-border);
        }

        body.dark-mode .about-page .ab-approach-points > div > span,
        body.dark-mode .about-page .ab-value-top > div,
        body.dark-mode .about-page .ab-system-node > span,
        body.dark-mode .about-page .ab-future-icon,
        body.dark-mode .about-page .ab-approach-note > span {
          color: #dce8f5;
          background: #22364d;
        }

        body.dark-mode .about-page .ab-future-item,
        body.dark-mode .about-page .ab-future-list {
          border-color: var(--ab-border);
        }

        body.dark-mode .about-page .ab-float-card {
          background: rgba(25,42,62,.97);
          border-color: #40536a;
        }

        body.dark-mode .about-page .ab-float-card strong,
        body.dark-mode .about-page .ab-approach-note strong {
          color: #e2ebf5;
        }

        body.dark-mode .about-page .ab-btn-outline {
          color: #e2ebf5;
          background: #192a3e;
          border-color: #40536a;
        }

        body.dark-mode .about-page .ab-ring {
          border-color: #33485f;
        }

        body.dark-mode .about-page .ab-system-center {
          box-shadow: 0 0 0 10px rgba(29,48,70,.65), 0 15px 40px rgba(0,0,0,.2);
        }

        body.dark-mode .about-page .ab-service-card:hover,
        body.dark-mode .about-page .ab-value-card:hover {
          border-color: #526b86;
        }

        /* Responsive */

        @media (max-width: 1050px) {
          .ab-container {
            width: calc(100% - 48px);
          }

          .ab-section {
            padding: 85px 0;
          }

          .ab-hero-grid {
            gap: 40px;
          }

          .ab-hero h1 {
            font-size: clamp(43px, 5.5vw, 60px);
            letter-spacing: -2.7px;
          }

          .ab-hero-photo {
            height: 420px;
          }

          .ab-trust {
            gap: 12px;
          }

          .ab-approach-grid {
            gap: 55px;
          }

          .ab-approach-photo {
            height: 440px;
          }

          .ab-system-grid {
            gap: 25px;
          }

          .ab-ring-outer {
            width: 360px;
            height: 360px;
          }

          .ab-ring-middle {
            width: 290px;
            height: 290px;
          }

          .ab-ring-inner {
            width: 210px;
            height: 210px;
          }

          .ab-system-node {
            min-width: 155px;
            padding: 10px;
          }

          .ab-future-grid {
            gap: 45px;
          }

          .ab-values-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .ab-container {
            width: calc(100% - 38px);
          }

          .ab-section {
            padding: 70px 0;
          }

          .ab-hero {
            padding-top: 52px;
          }

          .ab-hero-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 45px;
            padding-bottom: 55px;
          }

          .ab-hero h1 {
            font-size: clamp(43px, 10vw, 61px);
            letter-spacing: -2.8px;
          }

          .ab-lead {
            font-size: 14px;
          }

          .ab-hero-photo {
            height: clamp(330px, 90vw, 470px);
          }

          .ab-float-top {
            left: -7px;
            top: 22px;
          }

          .ab-float-bottom {
            right: -7px;
            bottom: 30px;
          }

          .ab-strip-inner {
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px 20px;
            padding: 17px 0;
          }

          .ab-hindi {
            width: 100%;
            text-align: center;
          }

          .ab-intro-grid,
          .ab-approach-grid,
          .ab-system-grid,
          .ab-future-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 32px;
          }

          .ab-heading {
            font-size: clamp(33px, 8vw, 43px);
            letter-spacing: -1.6px;
          }

          .ab-intro-columns {
            grid-template-columns: minmax(0, 1fr);
            gap: 16px;
          }

          .ab-section-heading {
            display: block;
            margin-bottom: 30px;
          }

          .ab-section-heading > p {
            max-width: 530px;
            margin-top: 20px;
          }

          .ab-service-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 20px;
          }

          .ab-service-photo {
            height: clamp(220px, 58vw, 310px);
          }

          .ab-service-content {
            padding: 22px;
          }

          .ab-approach-visual {
            margin-top: 10px;
            padding-left: 10px;
          }

          .ab-approach-photo {
            height: 390px;
          }

          .ab-approach-note {
            left: -5px;
            bottom: 40px;
          }

          .ab-values-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 14px;
          }

          .ab-value-card {
            min-height: auto;
            padding: 22px;
          }

          .ab-value-top {
            margin-bottom: 18px;
          }

          .ab-system-visual {
            min-height: 430px;
            margin-top: 5px;
          }

          .ab-ring-outer {
            width: min(80vw, 350px);
            height: min(80vw, 350px);
          }

          .ab-ring-middle {
            width: min(64vw, 280px);
            height: min(64vw, 280px);
          }

          .ab-ring-inner {
            width: min(48vw, 210px);
            height: min(48vw, 210px);
          }

          .ab-system-center {
            width: 150px;
            height: 150px;
          }

          .ab-system-node {
            min-width: 0;
            max-width: 170px;
            gap: 8px;
            padding: 9px;
          }

          .ab-system-node > span {
            width: 32px;
            height: 32px;
          }

          .ab-node-top {
            top: 0;
          }

          .ab-node-right {
            right: 0;
            top: 63%;
          }

          .ab-node-left {
            left: 0;
            top: 63%;
          }

          .ab-system-node strong {
            font-size: 10px;
          }

          .ab-system-node small {
            font-size: 9px;
          }

          .ab-future-photo {
            height: 220px;
          }

          .ab-final {
            padding: 65px 0 75px;
          }

          .ab-final-panel {
            min-height: 370px;
            padding: 42px 26px;
            border-radius: 13px;
          }

          .ab-final-content h2 {
            font-size: clamp(35px, 8vw, 48px);
            letter-spacing: -1.8px;
          }

          .ab-final-content > p {
            max-width: 100%;
          }

          .ab-final-mark {
            right: -40px;
            top: auto;
            bottom: -65px;
            transform: none;
            opacity: .6;
          }

          .ab-final-actions {
            gap: 18px;
          }
        }

        @media (max-width: 420px) {
          .ab-container {
            width: calc(100% - 30px);
          }

          .ab-hero h1 {
            font-size: 42px;
          }

          .ab-actions {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
          }

          .ab-trust {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .ab-float-card {
            gap: 8px;
            padding: 10px;
          }

          .ab-float-icon {
            width: 34px;
            height: 34px;
          }

          .ab-float-card strong {
            font-size: 10px;
          }

          .ab-float-card small {
            font-size: 9px;
          }

          .ab-build-words {
            gap: 9px;
            font-size: 11px;
          }

          .ab-system-node {
            max-width: 143px;
          }

          .ab-system-node > span {
            display: none;
          }

          .ab-node-top {
            top: 12px;
          }

          .ab-system-visual {
            min-height: 390px;
          }

          .ab-final-panel {
            padding: 35px 21px;
          }

          .ab-final-actions {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-page *,
          .about-page *::before,
          .about-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }

          .about-page [data-reveal] {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
