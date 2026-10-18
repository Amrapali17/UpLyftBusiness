
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Layers3,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const serviceData = {
  "web-development": {
    number: "01",
    category: "Technology & Development",
    title: "Web Development",
    headline: "Digital experiences built for business.",
    description:
      "We design and develop modern, responsive websites that communicate your value, build trust, and help your business grow.",
    outcomes: [
      "A stronger digital presence",
      "Better customer experience",
      "A foundation built to scale",
    ],
    services: [
      "Business Websites",
      "Landing Pages",
      "E-commerce Websites",
      "Website Redesign",
      "Responsive Development",
      "Website Maintenance",
    ],
    packages: [
      {
        name: "Essential",
        label: "For getting started",
        description:
          "A professional starting point for businesses establishing their online presence.",
        features: [
          "Business-focused website",
          "Responsive page layouts",
          "Essential contact sections",
          "Core on-page SEO setup",
          "Contact form integration",
        ],
      },
      {
        name: "Growth",
        label: "For growing businesses",
        description:
          "A more comprehensive website designed to support stronger engagement and growth.",
        features: [
          "Everything in Essential",
          "Custom page layouts",
          "Enhanced user experience",
          "Additional integrations",
          "Performance optimisation",
        ],
        popular: true,
      },
      {
        name: "Custom",
        label: "For specific requirements",
        description:
          "A tailored development solution built around your business goals and requirements.",
        features: [
          "Custom functionality",
          "Advanced integrations",
          "E-commerce or complex workflows",
          "Scalable architecture",
          "Project-specific planning",
        ],
      },
    ],
  },

  "digital-marketing": {
    number: "02",
    category: "Digital Growth",
    title: "Digital Marketing",
    headline: "Get discovered by the right audience.",
    description:
      "We help businesses strengthen their online visibility through thoughtful digital strategies, search optimisation, and measurable marketing activities.",
    outcomes: [
      "Improved online visibility",
      "More relevant audience reach",
      "A consistent growth strategy",
    ],
    services: [
      "Digital Strategy",
      "Search Engine Optimisation",
      "Google Business Profile",
      "Online Visibility",
      "Content Planning",
      "Performance Reporting",
    ],
    packages: [
      {
        name: "Essential",
        label: "For building visibility",
        description:
          "Establish a stronger digital foundation with essential visibility and optimisation activities.",
        features: [
          "Digital presence review",
          "Marketing direction",
          "Basic SEO recommendations",
          "Google Business Profile guidance",
          "Action plan for improvement",
        ],
      },
      {
        name: "Growth",
        label: "For consistent progress",
        description:
          "A coordinated approach to improve discoverability and build a stronger online presence.",
        features: [
          "Everything in Essential",
          "Ongoing SEO activities",
          "Content recommendations",
          "Visibility improvements",
          "Progress reporting",
        ],
        popular: true,
      },
      {
        name: "Custom",
        label: "For ambitious goals",
        description:
          "A strategy shaped around your industry, competition, audience, and business objectives.",
        features: [
          "Tailored marketing strategy",
          "Expanded SEO planning",
          "Multi-channel coordination",
          "Competitor analysis",
          "Goal-based reporting",
        ],
      },
    ],
  },

  "social-media-management": {
    number: "03",
    category: "Social & Content",
    title: "Social Media Management",
    headline: "Build a brand people remember.",
    description:
      "We help your business maintain a consistent and engaging social presence with purposeful content, creative direction, and structured planning.",
    outcomes: [
      "A consistent brand presence",
      "More engaging communication",
      "Content aligned with your goals",
    ],
    services: [
      "Social Media Strategy",
      "Content Calendars",
      "Post & Carousel Design",
      "Reels Planning",
      "Profile Optimisation",
      "Performance Reviews",
    ],
    packages: [
      {
        name: "Essential",
        label: "For a consistent presence",
        description:
          "Create a more organised social presence with structured content planning and creative support.",
        features: [
          "Content calendar",
          "Post and creative planning",
          "Profile review",
          "Brand consistency guidance",
          "Monthly performance review",
        ],
      },
      {
        name: "Growth",
        label: "For stronger engagement",
        description:
          "Build a more active social presence through a coordinated content and engagement strategy.",
        features: [
          "Everything in Essential",
          "Expanded content planning",
          "Reels and campaign concepts",
          "Platform-specific strategy",
          "Engagement recommendations",
        ],
        popular: true,
      },
      {
        name: "Custom",
        label: "For tailored campaigns",
        description:
          "A customised social media approach based on your brand voice, platforms, and campaign needs.",
        features: [
          "Custom content direction",
          "Campaign planning",
          "Multi-platform coordination",
          "Creative collaboration",
          "Goal-focused reporting",
        ],
      },
    ],
  },

  "advertising-performance": {
    number: "04",
    category: "Paid Media & Advertising",
    title: "Performance Advertising",
    headline: "Make every campaign more purposeful.",
    description:
      "We help businesses plan, launch, and improve digital advertising campaigns with a focus on relevant audiences, clear objectives, and performance tracking.",
    outcomes: [
      "More focused audience targeting",
      "Clearer campaign measurement",
      "Data-informed optimisation",
    ],
    services: [
      "Meta Ads",
      "Google Ads",
      "Campaign Setup",
      "Audience Targeting",
      "Conversion Tracking",
      "Campaign Optimisation",
    ],
    packages: [
      {
        name: "Essential",
        label: "For your first campaigns",
        description:
          "Set up a focused advertising foundation around your primary business objective.",
        features: [
          "Campaign objective planning",
          "Account and campaign setup",
          "Audience research",
          "Creative direction",
          "Basic performance tracking",
        ],
      },
      {
        name: "Growth",
        label: "For ongoing optimisation",
        description:
          "Improve campaign management with structured testing and regular performance reviews.",
        features: [
          "Everything in Essential",
          "Campaign monitoring",
          "Creative and audience testing",
          "Conversion tracking review",
          "Performance reporting",
        ],
        popular: true,
      },
      {
        name: "Custom",
        label: "For complex campaigns",
        description:
          "A tailored advertising approach for multiple audiences, campaigns, or business objectives.",
        features: [
          "Multi-campaign planning",
          "Advanced audience strategy",
          "Expanded testing approach",
          "Conversion improvement planning",
          "Custom reporting requirements",
        ],
      },
    ],
  },

  "creative-branding": {
    number: "05",
    category: "Creative & Brand Identity",
    title: "Creative & Branding",
    headline: "Give your business a distinct identity.",
    description:
      "We create cohesive visual assets and brand experiences that help your business communicate clearly and stand out across digital touchpoints.",
    outcomes: [
      "A more consistent brand identity",
      "Clearer visual communication",
      "Professional marketing assets",
    ],
    services: [
      "Logo Design",
      "Brand Identity",
      "Social Media Creatives",
      "Marketing Collateral",
      "Campaign Visuals",
      "Brand Guidelines",
    ],
    packages: [
      {
        name: "Essential",
        label: "For a clear identity",
        description:
          "Build a recognisable visual foundation for your business and its everyday communications.",
        features: [
          "Visual direction",
          "Logo or identity support",
          "Colour and typography guidance",
          "Essential brand assets",
          "Digital creative templates",
        ],
      },
      {
        name: "Growth",
        label: "For a cohesive brand",
        description:
          "Develop a more consistent identity across your website, social platforms, and marketing materials.",
        features: [
          "Everything in Essential",
          "Expanded brand assets",
          "Social media creative system",
          "Marketing collateral",
          "Brand consistency guidance",
        ],
        popular: true,
      },
      {
        name: "Custom",
        label: "For a complete brand system",
        description:
          "A creative solution tailored to your brand, campaign, launch, or specialised design requirements.",
        features: [
          "Custom creative direction",
          "Comprehensive identity assets",
          "Campaign-specific visuals",
          "Brand guideline development",
          "Tailored design deliverables",
        ],
      },
    ],
  },

  "growth-strategy": {
    number: "06",
    category: "Business Strategy",
    title: "Growth & Strategy",
    headline: "Turn business goals into a clear direction.",
    description:
      "We help businesses identify opportunities, organise priorities, and develop practical digital and growth strategies aligned with their next stage.",
    outcomes: [
      "Clearer business priorities",
      "Better-informed decisions",
      "A structured path forward",
    ],
    services: [
      "Digital Roadmaps",
      "Business Discovery",
      "Growth Planning",
      "Customer Journey Review",
      "Competitor Research",
      "Performance Insights",
    ],
    packages: [
      {
        name: "Essential",
        label: "For clarity and direction",
        description:
          "Understand your current digital presence and identify practical opportunities for improvement.",
        features: [
          "Initial business discovery",
          "Digital presence review",
          "Priority identification",
          "Opportunity recommendations",
          "Action plan",
        ],
      },
      {
        name: "Growth",
        label: "For structured progress",
        description:
          "Build a more detailed roadmap with clear priorities, initiatives, and progress measures.",
        features: [
          "Everything in Essential",
          "Competitor review",
          "Customer journey assessment",
          "Growth initiative planning",
          "Success metric recommendations",
        ],
        popular: true,
      },
      {
        name: "Custom",
        label: "For unique challenges",
        description:
          "A tailored strategy engagement shaped around your business model and long-term objectives.",
        features: [
          "Custom discovery process",
          "Detailed opportunity analysis",
          "Cross-channel recommendations",
          "Prioritised roadmap",
          "Tailored review framework",
        ],
      },
    ],
  },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="sd-section-heading">
      <span className="sd-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service) {
    return (
      <>
        <Navbar />
        <main className="sd-not-found">
          <span className="sd-eyebrow">SERVICE NOT FOUND</span>
          <h1>Let's find the right solution.</h1>
          <p>The service you are looking for may have moved or is unavailable.</p>
          <Link to="/services" className="sd-primary-button">
            Explore Services <ArrowRight size={17} />
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="sd-page">
        <section className="sd-hero">
          <div className="sd-hero-grid" aria-hidden="true" />

          <div className="sd-container sd-hero-content">
            <Link to="/services" className="sd-back-link">
              <ArrowLeft size={16} />
              <span>All Services</span>
            </Link>

            <div className="sd-hero-layout">
              <div className="sd-hero-copy">
                <div className="sd-eyebrow">
                  <span className="sd-eyebrow-dot" />
                  {service.category}
                </div>

                <h1>{service.title}</h1>
                <p className="sd-hero-headline">{service.headline}</p>
                <p className="sd-hero-description">{service.description}</p>

                <div className="sd-hero-actions">
                  <Link
                    to={`/enquire?service=${serviceId}`}
                    className="sd-primary-button"
                  >
                    Discuss Your Project <ArrowUpRight size={18} />
                  </Link>

                  <a href="#packages" className="sd-secondary-link">
                    Explore solutions <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="sd-hero-visual">
                <div className="sd-visual-topline">
                  <span>UPLYFTBUSINESS</span>
                  <span>/{service.number}</span>
                </div>

                <div className="sd-visual-icon">
                  <Layers3 size={34} strokeWidth={1.5} />
                </div>

                <span className="sd-visual-label">OUR APPROACH</span>
                <h2>Built around your business.</h2>
                <p>
                  Thoughtful strategy. Practical execution. Room to grow.
                </p>

                <div className="sd-visual-bottom">
                  <span>Strategy</span>
                  <ChevronRight size={15} />
                  <span>Execution</span>
                  <ChevronRight size={15} />
                  <span>Growth</span>
                </div>
              </div>
            </div>

            <div className="sd-outcomes">
              {service.outcomes.map((outcome) => (
                <div className="sd-outcome" key={outcome}>
                  <Check size={16} />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sd-offerings">
          <div className="sd-container">
            <SectionHeading
              eyebrow="WHAT WE DO"
              title="The right capabilities for your next step."
              description="Explore the key areas we can help your business with. Every engagement is shaped around your needs and objectives."
            />

            <div className="sd-offering-grid">
              {service.services.map((item, index) => (
                <div className="sd-offering" key={item}>
                  <span className="sd-offering-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="sd-offering-name">{item}</span>
                  <ArrowUpRight className="sd-offering-arrow" size={17} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sd-packages" id="packages">
          <div className="sd-container">
            <SectionHeading
              eyebrow="WAYS TO WORK TOGETHER"
              title="A solution that fits your goals."
              description="Choose a starting direction. We will discuss your requirements and tailor the scope to your business."
            />

            <div className="sd-package-grid">
              {service.packages.map((pkg, index) => (
                <article
                  className={`sd-package-card ${
                    pkg.popular ? "sd-package-featured" : ""
                  }`}
                  key={pkg.name}
                >
                  {pkg.popular && (
                    <div className="sd-popular-label">
                      <Sparkles size={14} />
                      Recommended
                    </div>
                  )}

                  <div className="sd-package-top">
                    <span className="sd-package-index">
                      OPTION {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="sd-package-icon">
                      {index === 0 ? (
                        <Layers3 size={19} />
                      ) : index === 1 ? (
                        <Zap size={19} />
                      ) : (
                        <Target size={19} />
                      )}
                    </div>
                  </div>

                  <span className="sd-package-label">{pkg.label}</span>
                  <h3>{pkg.name}</h3>
                  <p className="sd-package-description">{pkg.description}</p>

                  <div className="sd-package-divider" />

                  <span className="sd-included-title">WHAT'S INCLUDED</span>
                  <ul className="sd-feature-list">
                    {pkg.features.map((feature) => (
                      <li key={feature}>
                        <span className="sd-check">
                          <Check size={14} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/enquire?service=${serviceId}&package=${encodeURIComponent(
                      pkg.name
                    )}`}
                    className={`sd-package-button ${
                      pkg.popular ? "sd-package-button-primary" : ""
                    }`}
                  >
                    Discuss this option <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>

            <p className="sd-package-note">
              <Sparkles size={16} />
              No fixed packages or hidden assumptions. Final scope is discussed
              and tailored to your requirements.
            </p>
          </div>
        </section>

        <section className="sd-process">
          <div className="sd-container sd-process-inner">
            <div>
              <span className="sd-eyebrow">A SIMPLE PROCESS</span>
              <h2>Good work starts with a conversation.</h2>
              <p>
                Tell us what you're working towards. We'll understand your
                requirements and discuss the right next steps together.
              </p>
            </div>

            <Link
              to={`/enquire?service=${serviceId}`}
              className="sd-primary-button"
            >
              Start a Conversation <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .sd-page {
          --sd-blue: #2563eb;
          --sd-blue-dark: #1747b8;
          --sd-text: #101828;
          --sd-muted: #596579;
          --sd-border: #e4e9f1;
          --sd-surface: #ffffff;
          --sd-soft: #f6f8fc;
          color: var(--sd-text);
          background: var(--sd-surface);
          overflow: hidden;
        }

        .sd-container {
          width: min(1160px, calc(100% - 64px));
          margin-inline: auto;
        }

        .sd-hero {
          position: relative;
          padding: 34px 0 0;
          background:
            radial-gradient(ellipse at 82% 22%, rgba(219, 234, 254, 0.6), transparent 35%),
            linear-gradient(180deg, #fbfcff 0%, #ffffff 100%);
          border-bottom: 1px solid var(--sd-border);
        }

        .sd-hero-grid {
          position: absolute;
          inset: 0 0 auto;
          height: 410px;
          pointer-events: none;
          opacity: 0.32;
          background-image:
            linear-gradient(rgba(37, 99, 235, 0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.055) 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: linear-gradient(to bottom, black, transparent);
        }

        .sd-hero-content {
          position: relative;
          z-index: 1;
        }

        .sd-back-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--sd-muted);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .sd-back-link:hover,
        .sd-secondary-link:hover {
          color: var(--sd-blue);
        }

        .sd-hero-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.8fr);
          gap: 72px;
          align-items: center;
          padding: 70px 0 62px;
        }

        .sd-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--sd-blue);
          font-size: 12px;
          line-height: 1.5;
          font-weight: 750;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .sd-eyebrow-dot {
          width: 7px;
          height: 7px;
          flex: 0 0 7px;
          border-radius: 50%;
          background: var(--sd-blue);
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }

        .sd-hero-copy h1 {
          max-width: 650px;
          margin: 19px 0 14px;
          font-size: clamp(42px, 5.5vw, 66px);
          line-height: 1.06;
          letter-spacing: -0.055em;
          font-weight: 760;
          overflow-wrap: anywhere;
        }

        .sd-hero-headline {
          margin: 0 0 14px;
          font-size: clamp(19px, 2vw, 23px);
          line-height: 1.45;
          font-weight: 600;
          letter-spacing: -0.025em;
        }

        .sd-hero-description {
          max-width: 580px;
          margin: 0;
          color: var(--sd-muted);
          font-size: 17px;
          line-height: 1.85;
        }

        .sd-hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 24px;
          margin-top: 30px;
        }

        .sd-primary-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 11px;
          min-height: 50px;
          padding: 0 20px;
          border: 1px solid var(--sd-blue);
          border-radius: 8px;
          background: var(--sd-blue);
          color: #ffffff;
          font-size: 14px;
          font-weight: 650;
          text-decoration: none;
          transition: background 180ms ease, transform 180ms ease, box-shadow 180ms ease;
        }

        .sd-primary-button:hover {
          background: var(--sd-blue-dark);
          box-shadow: 0 8px 22px rgba(37, 99, 235, 0.18);
          transform: translateY(-2px);
        }

        .sd-secondary-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--sd-text);
          font-size: 14px;
          font-weight: 650;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .sd-hero-visual {
          position: relative;
          min-height: 330px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 32px;
          border: 1px solid rgba(191, 211, 244, 0.9);
          border-radius: 16px;
          background:
            radial-gradient(circle at 90% 5%, rgba(147, 197, 253, 0.32), transparent 34%),
            linear-gradient(145deg, #f4f8ff 0%, #ffffff 72%);
          box-shadow: 0 22px 60px rgba(20, 53, 105, 0.07);
        }

        .sd-visual-topline {
          position: absolute;
          top: 20px;
          right: 22px;
          left: 22px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          color: #6b7c95;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.13em;
        }

        .sd-visual-icon {
          width: 66px;
          height: 66px;
          display: grid;
          place-items: center;
          margin-bottom: 25px;
          border: 1px solid #d8e5fc;
          border-radius: 15px;
          background: #ffffff;
          color: var(--sd-blue);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.09);
        }

        .sd-visual-label {
          margin-bottom: 10px;
          color: var(--sd-blue);
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 0.13em;
        }

        .sd-hero-visual h2 {
          max-width: 300px;
          margin: 0 0 10px;
          font-size: clamp(24px, 2.8vw, 32px);
          line-height: 1.2;
          letter-spacing: -0.04em;
        }

        .sd-hero-visual > p {
          margin: 0;
          color: var(--sd-muted);
          font-size: 15px;
          line-height: 1.7;
        }

        .sd-visual-bottom {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 30px;
          padding-top: 17px;
          width: 100%;
          border-top: 1px solid #dfe8f7;
          color: #40516a;
          font-size: 12px;
          font-weight: 650;
        }

        .sd-visual-bottom svg {
          color: #91a3bc;
        }

        .sd-outcomes {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          padding: 22px 0;
          border-top: 1px solid var(--sd-border);
        }

        .sd-outcome {
          display: flex;
          align-items: center;
          gap: 11px;
          color: #344054;
          font-size: 14px;
          font-weight: 550;
        }

        .sd-outcome svg {
          flex-shrink: 0;
          color: var(--sd-blue);
        }

        .sd-offerings {
          padding: 100px 0;
          background: var(--sd-surface);
        }

        .sd-section-heading {
          max-width: 700px;
          margin-bottom: 40px;
        }

        .sd-section-heading h2 {
          margin: 13px 0 12px;
          font-size: clamp(30px, 4vw, 43px);
          line-height: 1.16;
          letter-spacing: -0.045em;
          font-weight: 740;
        }

        .sd-section-heading > p {
          max-width: 640px;
          margin: 0;
          color: var(--sd-muted);
          font-size: 16px;
          line-height: 1.8;
        }

        .sd-offering-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--sd-border);
          border-left: 1px solid var(--sd-border);
          border-radius: 10px;
          overflow: hidden;
        }

        .sd-offering {
          min-height: 110px;
          display: grid;
          grid-template-columns: 34px minmax(0, 1fr) 18px;
          align-items: center;
          gap: 13px;
          padding: 23px 20px;
          border-right: 1px solid var(--sd-border);
          border-bottom: 1px solid var(--sd-border);
          background: var(--sd-surface);
          transition: background 180ms ease;
        }

        .sd-offering:hover {
          background: var(--sd-soft);
        }

        .sd-offering-number {
          color: #8a98ac;
          font-size: 12px;
          font-weight: 650;
          font-variant-numeric: tabular-nums;
        }

        .sd-offering-name {
          font-size: 15px;
          line-height: 1.55;
          font-weight: 650;
        }

        .sd-offering-arrow {
          color: #8a98ac;
          transition: color 180ms ease, transform 180ms ease;
        }

        .sd-offering:hover .sd-offering-arrow {
          color: var(--sd-blue);
          transform: translate(2px, -2px);
        }

        .sd-packages {
          padding: 100px 0;
          background: var(--sd-soft);
          border-top: 1px solid #edf0f5;
          border-bottom: 1px solid #edf0f5;
        }

        .sd-package-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          align-items: stretch;
          gap: 22px;
        }

        .sd-package-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding: 28px;
          border: 1px solid #e0e6ef;
          border-radius: 13px;
          background: var(--sd-surface);
          box-shadow: 0 4px 14px rgba(16, 24, 40, 0.025);
          transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
        }

        .sd-package-card:hover {
          transform: translateY(-4px);
          border-color: #bfd3fa;
          box-shadow: 0 18px 36px rgba(16, 24, 40, 0.06);
        }

        .sd-package-featured {
          border-color: #9ebdfb;
          box-shadow: 0 8px 28px rgba(37, 99, 235, 0.07);
        }

        .sd-popular-label {
          position: absolute;
          top: -13px;
          right: 22px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 11px;
          border: 1px solid #c9dcff;
          border-radius: 100px;
          background: #edf4ff;
          color: #1d4ed8;
          font-size: 11px;
          font-weight: 750;
        }

        .sd-package-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .sd-package-index {
          color: #8996a9;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 0.1em;
        }

        .sd-package-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 1px solid #e1e9f8;
          border-radius: 10px;
          background: #f5f8ff;
          color: var(--sd-blue);
        }

        .sd-package-label {
          color: var(--sd-blue);
          font-size: 12px;
          line-height: 1.5;
          font-weight: 700;
        }

        .sd-package-card h3 {
          margin: 7px 0 10px;
          font-size: 26px;
          line-height: 1.2;
          letter-spacing: -0.035em;
          font-weight: 740;
        }

        .sd-package-description {
          min-height: 80px;
          margin: 0;
          color: var(--sd-muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .sd-package-divider {
          height: 1px;
          margin: 24px 0 21px;
          background: var(--sd-border);
        }

        .sd-included-title {
          margin-bottom: 18px;
          color: #68758a;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 0.1em;
        }

        .sd-feature-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding: 0;
          margin: 0 0 28px;
          list-style: none;
        }

        .sd-feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #344054;
          font-size: 14px;
          line-height: 1.65;
        }

        .sd-check {
          width: 20px;
          height: 20px;
          flex: 0 0 20px;
          display: grid;
          place-items: center;
          margin-top: 1px;
          border-radius: 50%;
          background: #edf4ff;
          color: var(--sd-blue);
        }

        .sd-package-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 47px;
          margin-top: auto;
          padding: 10px 14px;
          border: 1px solid #d9e1ed;
          border-radius: 7px;
          color: #243247;
          background: #ffffff;
          font-size: 13px;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
          transition: border-color 180ms ease, background 180ms ease, color 180ms ease;
        }

        .sd-package-button:hover {
          border-color: #9ebdfb;
          background: #f5f8ff;
          color: var(--sd-blue);
        }

        .sd-package-button-primary {
          border-color: var(--sd-blue);
          background: var(--sd-blue);
          color: #ffffff;
        }

        .sd-package-button-primary:hover {
          border-color: var(--sd-blue-dark);
          background: var(--sd-blue-dark);
          color: #ffffff;
        }

        .sd-package-note {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          margin: 30px 0 0;
          color: var(--sd-muted);
          font-size: 14px;
          line-height: 1.7;
          text-align: center;
        }

        .sd-package-note svg {
          flex-shrink: 0;
          color: var(--sd-blue);
        }

        .sd-process {
          padding: 76px 0;
          background:
            radial-gradient(ellipse at 90% 20%, rgba(219, 234, 254, 0.55), transparent 36%),
            var(--sd-surface);
        }

        .sd-process-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding: 40px;
          border: 1px solid var(--sd-border);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.72);
        }

        .sd-process-inner > div {
          max-width: 650px;
        }

        .sd-process-inner h2 {
          margin: 12px 0;
          font-size: clamp(27px, 3.5vw, 38px);
          line-height: 1.2;
          letter-spacing: -0.04em;
        }

        .sd-process-inner p {
          margin: 0;
          color: var(--sd-muted);
          font-size: 16px;
          line-height: 1.8;
        }

        .sd-process-inner .sd-primary-button {
          flex-shrink: 0;
        }

        .sd-not-found {
          width: min(760px, calc(100% - 40px));
          min-height: 55vh;
          margin-inline: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 16px;
        }

        .sd-not-found h1 {
          margin: 0;
          font-size: clamp(34px, 5vw, 54px);
          letter-spacing: -0.045em;
        }

        .sd-not-found p {
          margin: 0 0 8px;
          color: var(--sd-muted);
          font-size: 16px;
          line-height: 1.8;
        }

        @media (max-width: 1000px) {
          .sd-hero-layout {
            grid-template-columns: minmax(0, 1fr) minmax(260px, 0.8fr);
            gap: 36px;
          }

          .sd-package-grid {
            gap: 15px;
          }

          .sd-package-card {
            padding: 22px;
          }

          .sd-offering {
            padding: 19px 15px;
            gap: 9px;
          }
        }

        @media (max-width: 760px) {
          .sd-container {
            width: min(100% - 36px, 600px);
          }

          .sd-hero-layout {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 48px 0 40px;
          }

          .sd-hero-copy h1 {
            font-size: clamp(39px, 10vw, 58px);
          }

          .sd-hero-description {
            font-size: 16px;
          }

          .sd-hero-visual {
            min-height: 290px;
          }

          .sd-outcomes {
            grid-template-columns: 1fr;
            gap: 15px;
            padding: 22px 0;
          }

          .sd-offerings,
          .sd-packages {
            padding: 70px 0;
          }

          .sd-section-heading {
            margin-bottom: 30px;
          }

          .sd-section-heading > p {
            font-size: 15px;
          }

          .sd-offering-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sd-offering {
            min-height: 94px;
            grid-template-columns: 25px minmax(0, 1fr) 16px;
            padding: 16px 12px;
          }

          .sd-offering-name {
            font-size: 14px;
          }

          .sd-package-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .sd-package-card {
            padding: 26px;
          }

          .sd-package-description {
            min-height: 0;
          }

          .sd-package-note {
            align-items: flex-start;
            text-align: left;
          }

          .sd-process {
            padding: 55px 0;
          }

          .sd-process-inner {
            align-items: flex-start;
            flex-direction: column;
            gap: 25px;
            padding: 27px;
          }
        }

        @media (max-width: 420px) {
          .sd-container {
            width: calc(100% - 30px);
          }

          .sd-hero-actions {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
          }

          .sd-primary-button {
            width: 100%;
          }

          .sd-offering-grid {
            grid-template-columns: 1fr;
          }

          .sd-offering {
            min-height: 78px;
            padding: 17px;
          }

          .sd-package-card {
            padding: 22px 19px;
          }

          .sd-visual-bottom {
            font-size: 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sd-page *,
          .sd-page *::before,
          .sd-page *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }

        /* Respect the site's dark theme when Navbar toggles a dark class. */
        :is(html.dark, body.dark, [data-theme="dark"]) .sd-page {
          --sd-text: #edf2fb;
          --sd-muted: #a7b3c6;
          --sd-border: #29364a;
          --sd-surface: #101722;
          --sd-soft: #151f2d;
          background: var(--sd-surface);
          color: var(--sd-text);
        }

        :is(html.dark, body.dark, [data-theme="dark"]) .sd-hero {
          background:
            radial-gradient(ellipse at 82% 22%, rgba(37, 99, 235, 0.13), transparent 35%),
            linear-gradient(180deg, #111b29 0%, #101722 100%);
        }

        :is(html.dark, body.dark, [data-theme="dark"]) .sd-hero-grid {
          opacity: 0.16;
        }

        :is(html.dark, body.dark, [data-theme="dark"]) .sd-hero-visual {
          border-color: #2d405b;
          background:
            radial-gradient(circle at 90% 5%, rgba(37, 99, 235, 0.2), transparent 34%),
            linear-gradient(145deg, #18263a 0%, #131d2b 72%);
        }

        :is(html.dark, body.dark, [data-theme="dark"]) .sd-visual-icon,
        :is(html.dark, body.dark, [data-theme="dark"]) .sd-package-icon {
          border-color: #2e4059;
          background: #1d2b40;
          color: #8bb5ff;
        }

        :is(html.dark, body.dark, [data-theme="dark"]) .sd-visual-bottom {
          border-color: #2c3b50;
          color: #c0cde0;
        }

        :is(html.dark, body.dark, [data-theme="dark"]) .sd-outcome,
        :is(html.dark, body.dark, [data-theme="dark"]) .sd-offering-name,
        :is(html.dark, body.dark, [data-theme="dark"]) .sd-feature-list li {
          color: #d4dceb;
        }

        :is(html.dark, body.dark, [data-theme="dark"]) .sd-offering-grid {
          border-color: var(--sd-border);
        }

        :is(html.dark, body.dark, [data-theme="dark"]) .sd-offering {
          border-color: var(--sd-border);
          background: var(--sd-surface);
        }

        :is(html.dark, body.dark, [data-theme="dark"]) .sd-offering:hover {
          background: #1a2637;
        }

        :is(html.dark, body.dark, [data-theme="dark"]) .sd-package-card {
          border-color: var(--sd-border);
          background: #141e2b;
          box-shadow: none;
        }

        :is(html.dark, body.dark, [data-theme="dark"]) .sd-package-featured {
          border-color: #446cae;
        }

        :is(html.dark, body.dark, [data-theme="dark"]) .sd-popular-label {
          border-color: #365787;
          background: #1b3152;
          color: #b7d1ff;
        }

        :is(html.dark, body.dark, [data-theme="dark"]) .sd-package-button {
          border-color: #34435a;
          background: #1a2637;
          color: #e2eaf6;
        }

        :is(html.dark, body.dark, [data-theme="dark"]) .sd-package-button:hover {
          border-color: #628fd8;
          color: #b7d1ff;
        }

        :is(html.dark, body.dark, [data-theme="dark"]) .sd-package-button-primary {
          border-color: var(--sd-blue);
          background: var(--sd-blue);
          color: #ffffff;
        }

        :is(html.dark, body.dark, [data-theme="dark"]) .sd-package-button-primary:hover {
          background: var(--sd-blue-dark);
          color: #ffffff;
        }

        :is(html.dark, body.dark, [data-theme="dark"]) .sd-check {
          background: #1d3150;
          color: #9dc1ff;
        }

        :is(html.dark, body.dark, [data-theme="dark"]) .sd-process-inner {
          border-color: var(--sd-border);
          background: rgba(20, 30, 43, 0.8);
        }

        :is(html.dark, body.dark, [data-theme="dark"]) .sd-package-divider {
          background: var(--sd-border);
        }
      `}</style>
    </>
  );
}

export default ServiceDetail;
