import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  Code2,
  Megaphone,
  MessageCircle,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ─────────────────────────────────────────────
   PRICING DATA  (sourced from official docs)
───────────────────────────────────────────── */
const categories = [
  {
    id: "web-development",
    label: "Web Development",
    icon: Code2,
    accent: "#9dc8ee",
    billing: "one-time",
    billingLabel: "One-time fixed price",
    note: "Domain & hosting included for year 1 in Starter, Business & Premium. GST extra if applicable.",
    packages: [
      {
        name: "Starter",
        price: "₹14,999",
        best: "Individuals and small businesses needing a simple website.",
        features: [
          "Up to 5 website pages",
          "Custom mobile-responsive design",
          "Home, About, Services, Contact + 1 extra page",
          "Contact / enquiry form",
          "WhatsApp & click-to-call buttons",
          "Basic on-page SEO setup",
          "SSL setup",
          "Domain & hosting for 1 year",
          "Website launch & handover guidance",
          "1 round of design / content revisions",
        ],
      },
      {
        name: "Business",
        price: "₹29,999",
        best: "Businesses that need more pages, SEO and lead generation.",
        popular: true,
        features: [
          "Up to 10 website pages",
          "Everything in Starter",
          "Enhanced design tailored to the business",
          "Lead-generation or appointment enquiry form",
          "Google Business Profile setup assistance",
          "Blog or CMS setup for editable content",
          "Basic analytics setup",
          "Performance optimisation",
          "3 months post-launch support",
          "2 rounds of design / content revisions",
        ],
      },
      {
        name: "Premium",
        price: "₹49,999",
        best: "Growing businesses needing advanced features or e-commerce-ready scope.",
        features: [
          "Up to 15 pages (additional pages quoted separately)",
          "Everything in Business",
          "Advanced page layouts and visual elements",
          "CMS / blog setup",
          "Advanced on-page SEO and schema setup",
          "E-commerce-ready scope or basic online store",
          "Analytics and conversion tracking setup",
          "Speed & performance optimisation",
          "6 months post-launch support",
          "3 rounds of design / content revisions",
        ],
      },
      {
        name: "Custom",
        price: "From ₹1,49,999",
        best: "Web apps, API integrations and tailored workflows.",
        features: [
          "Tailored website or web application",
          "Custom features and user journeys",
          "API and third-party integrations",
          "Login / user accounts where required",
          "Advanced workflows and automation",
          "Custom CMS, dashboard or admin tools",
          "Security, testing and deployment planning",
          "Timeline, deliverables & support agreed after discovery",
          "Final quote based on written technical scope",
        ],
      },
    ],
  },
  {
    id: "advertising-performance",
    label: "Performance Advertising",
    icon: Target,
    accent: "#e2c4a3",
    billing: "monthly",
    billingLabel: "Per month (management fee)",
    note: "Ad spend budget is separate and paid directly to the platform. Final scope confirmed in proposal.",
    packages: [
      {
        name: "Basic",
        price: "₹25,000 / mo",
        best: "Businesses starting out with paid ads on one platform.",
        features: [
          "Ad platform: Meta OR Google",
          "6 static ad creatives per month",
          "Landing page copy & consultation (basic review)",
          "Conversion pixel & event setup (standard)",
          "A/B audience & ad testing — 2 variations",
          "Bi-weekly reporting & call cadence",
        ],
      },
      {
        name: "Premium",
        price: "₹45,000 / mo",
        best: "Growing businesses running ads on Meta + Google.",
        popular: true,
        features: [
          "Ad platforms: Meta + Google",
          "12 statics + 4 reels per month",
          "Landing page copy & full optimisation",
          "Conversion pixel & event setup with Advanced CAPI",
          "A/B audience & ad testing — continuous testing",
          "Weekly sprint call & reporting",
        ],
      },
      {
        name: "Custom",
        price: "₹75,000 / mo",
        best: "Established brands needing multi-platform scaling.",
        features: [
          "Ad platforms: Meta + Google + LinkedIn",
          "20 statics + 8 reels per month",
          "Landing page copy with custom design included",
          "Server-side custom tracking",
          "Multi-variate testing matrix",
          "Dedicated Slack channel + weekly call",
        ],
      },
    ],
  },
  {
    id: "whatsapp-automation",
    label: "WhatsApp Automation",
    icon: MessageCircle,
    accent: "#a9ded5",
    billing: "one-time",
    billingLabel: "One-time setup fee",
    note: "WhatsApp Business Platform / API fees and third-party tool subscriptions are extra.",
    packages: [
      {
        name: "Basic",
        price: "₹6,999",
        best: "Small businesses getting started with WhatsApp automation.",
        features: [
          "WhatsApp Business account setup assistance",
          "Welcome & greeting messages",
          "Away messages & quick replies",
          "Basic FAQ automation",
          "Simple keyword-based responses",
          "Business hours & contact information",
          "Basic lead collection",
          "Up to 5 automated conversation flows",
          "Testing and setup support",
        ],
      },
      {
        name: "Premium",
        price: "₹11,999",
        best: "Businesses needing advanced automation and CRM integration.",
        popular: true,
        features: [
          "WhatsApp Business Platform / API integration",
          "Advanced automated chatbot flows",
          "Lead qualification & data collection",
          "Product or service menu",
          "Appointment or booking workflow",
          "Google Sheets or CRM integration",
          "Lead assignment & human handover",
          "Follow-up message automation",
          "Order or enquiry notifications",
          "Up to 15–20 automated flows",
          "Basic performance report",
          "30 days of post-launch support",
        ],
      },
      {
        name: "Custom",
        price: "₹21,999",
        best: "Tailored automation for complex business requirements.",
        features: [
          "Scope & deliverables finalised per business needs",
          "Advanced API integrations",
          "Multi-channel automation",
          "Enterprise-grade chatbot flows",
          "Priority support & team training",
        ],
      },
    ],
  },
  {
    id: "growth-strategy",
    label: "Growth & Strategy",
    icon: TrendingUp,
    accent: "#b6c8ff",
    billing: "one-time",
    billingLabel: "One-time project fee (indicative)",
    note: "All pricing is indicative. Final scope and quotation confirmed after discovery call.",
    packages: [
      {
        name: "Starter",
        price: "₹4,999",
        best: "Small businesses that need clarity on where to improve.",
        features: [
          "Business growth audit (model, products, sales challenges)",
          "Digital presence audit (website, Google, social)",
          "Competitor analysis — up to 3 competitors",
          "Customer journey review",
          "Prioritised list of 5–10 improvement recommendations",
          "30-day action plan with weekly tasks",
          "PDF audit report + competitor comparison sheet",
          "One online review meeting",
        ],
      },
      {
        name: "Growth Pro",
        price: "₹19,999",
        best: "Businesses that need a structured sales process and growth plan.",
        popular: true,
        features: [
          "Detailed growth strategy & target segments",
          "Competitor research — up to 5 competitors",
          "90-day roadmap with milestones & KPIs",
          "Sales process design (lead stages, enquiry handling)",
          "Basic CRM configuration",
          "Enquiry tracking, follow-up tasks & reminders",
          "Customer journey & conversion recommendations",
          "Digital growth plan (SEO, local visibility)",
          "Basic dashboard / tracking sheet",
          "30 days of agreed support",
        ],
      },
      {
        name: "Complete Growth",
        price: "From ₹49,999",
        best: "Established businesses wanting strategy plus implementation.",
        features: [
          "Full business & digital growth audit",
          "Competitor research — up to 5 competitors",
          "90-day implementation roadmap",
          "Basic website or landing page (scope agreed)",
          "Basic on-page SEO & mobile usability",
          "CRM configuration with sales pipeline",
          "Up to 3 workflow automations",
          "AI-assisted workflow suggestions",
          "Basic KPI dashboard",
          "Team training & handover documentation",
          "3 monthly performance review meetings",
        ],
      },
    ],
  },
  {
    id: "social-media-management",
    label: "Social Media Management",
    icon: Share2,
    accent: "#a9d7f4",
    billing: "monthly",
    billingLabel: "Monthly retainer",
    note: "Final scope is shaped around your platforms, brand voice, and campaign goals.",
    packages: [
      {
        name: "Essential",
        price: "Custom",
        best: "Businesses looking for a consistent social presence.",
        features: [
          "Content calendar creation",
          "Post & creative planning",
          "Profile review & optimisation",
          "Brand consistency guidance",
          "Monthly performance review",
        ],
      },
      {
        name: "Growth",
        price: "Custom",
        best: "Brands ready to grow engagement and reach.",
        popular: true,
        features: [
          "Everything in Essential",
          "Expanded content planning",
          "Reels and campaign concepts",
          "Platform-specific strategy",
          "Engagement recommendations",
        ],
      },
      {
        name: "Custom",
        price: "Custom",
        best: "Multi-platform campaigns with tailored creative direction.",
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
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    icon: Megaphone,
    accent: "#c8d7ff",
    billing: "monthly",
    billingLabel: "Monthly retainer",
    note: "Strategy is shaped around your industry, competition, audience, and business objectives.",
    packages: [
      {
        name: "Essential",
        price: "Custom",
        best: "Businesses building their digital foundation.",
        features: [
          "Digital presence review",
          "Marketing direction & priorities",
          "Basic SEO recommendations",
          "Google Business Profile guidance",
          "Action plan for improvement",
        ],
      },
      {
        name: "Growth",
        price: "Custom",
        best: "Businesses targeting consistent online growth.",
        popular: true,
        features: [
          "Everything in Essential",
          "Ongoing SEO activities",
          "Content recommendations",
          "Visibility improvements",
          "Progress reporting",
        ],
      },
      {
        name: "Custom",
        price: "Custom",
        best: "Ambitious goals requiring multi-channel strategy.",
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
];

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState(0);
  const cat = categories[activeCategory];
  const Icon = cat.icon;

  return (
    <>
      <Navbar />

      <main className="pricing-page">
        {/* ── HERO ── */}
        <section className="pr-hero">
          <div className="pr-hero-grid" aria-hidden="true" />
          <div className="pr-hero-orb pr-orb-one" />
          <div className="pr-hero-orb pr-orb-two" />

          <div className="pr-hero-inner">
            <div className="pr-eyebrow">
              <span className="pr-eyebrow-dot" />
              UPLYFTBUSINESS / PRICING
            </div>

            <h1>
              Clear pricing.
              <br />
              <span>Real results.</span>
            </h1>

            <p className="pr-hero-sub">
              Transparent packages built around what your business actually needs.
              Every engagement starts with a conversation to make sure we're the
              right fit.
            </p>

            <div className="pr-hero-tags">
              <span>No hidden fees</span>
              <span className="pr-tag-dot" />
              <span>Scope confirmed upfront</span>
              <span className="pr-tag-dot" />
              <span>Tailored to your goals</span>
            </div>
          </div>
        </section>

        {/* ── CATEGORY TABS ── */}
        <section className="pr-tabs-section">
          <div className="pr-container">
            <div className="pr-tabs" role="tablist" aria-label="Service pricing categories">
              {categories.map((c, i) => {
                const CIcon = c.icon;
                return (
                  <button
                    key={c.id}
                    type="button"
                    role="tab"
                    aria-selected={i === activeCategory}
                    className={`pr-tab ${i === activeCategory ? "pr-tab-active" : ""}`}
                    onClick={() => setActiveCategory(i)}
                    style={{ "--tab-accent": c.accent }}
                  >
                    <CIcon size={16} strokeWidth={1.8} />
                    <span>{c.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PACKAGES ── */}
        <section className="pr-packages-section" key={cat.id}>
          <div className="pr-container">
            {/* Section header */}
            <div className="pr-section-header">
              <div className="pr-section-left">
                <div className="pr-section-eyebrow" style={{ "--tab-accent": cat.accent }}>
                  <Icon size={15} strokeWidth={1.8} />
                  {cat.label.toUpperCase()}
                </div>
                <div className="pr-billing-badge">
                  <Zap size={13} />
                  {cat.billingLabel}
                </div>
              </div>
              <p className="pr-section-note">
                <Sparkles size={14} />
                {cat.note}
              </p>
            </div>

            {/* Package cards */}
            <div className={`pr-cards pr-cards-${cat.packages.length}`}>
              {cat.packages.map((pkg, idx) => (
                <article
                  key={pkg.name}
                  className={`pr-card ${pkg.popular ? "pr-card-featured" : ""}`}
                  style={{ "--card-accent": cat.accent }}
                >
                  {pkg.popular && (
                    <div className="pr-popular-badge">
                      <Sparkles size={13} />
                      Most Popular
                    </div>
                  )}

                  <div className="pr-card-top">
                    <span className="pr-card-index">OPTION {String(idx + 1).padStart(2, "0")}</span>
                    <span className="pr-card-icon">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                  </div>

                  <div className="pr-card-name">{pkg.name}</div>
                  <div className="pr-card-price">{pkg.price}</div>
                  <p className="pr-card-best">{pkg.best}</p>

                  <div className="pr-card-divider" />

                  <div className="pr-card-features-label">WHAT'S INCLUDED</div>
                  <ul className="pr-card-features">
                    {pkg.features.map((f) => (
                      <li key={f}>
                        <span className="pr-check">
                          <Check size={13} />
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/enquire?service=${cat.id}&package=${encodeURIComponent(pkg.name)}`}
                    className={`pr-card-btn ${pkg.popular ? "pr-card-btn-primary" : ""}`}
                  >
                    Discuss this package
                    <ArrowUpRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── DISCLAIMER / NOTE ── */}
        <section className="pr-disclaimer">
          <div className="pr-container">
            <div className="pr-disclaimer-inner">
              <Sparkles size={18} className="pr-disclaimer-icon" />
              <p>
                All pricing shown is indicative and based on standard scope. Final
                quotations are provided after a short discovery call where we
                understand your specific requirements, integrations, and goals.
                GST is additional where applicable.
              </p>
              <Link to="/enquire" className="pr-disclaimer-cta">
                Get a tailored quote <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="pr-cta">
          <div className="pr-cta-grid" aria-hidden="true" />
          <div className="pr-cta-orb" />
          <div className="pr-container pr-cta-inner">
            <div className="pr-cta-eyebrow">
              <span className="pr-eyebrow-dot" />
              READY TO MOVE FORWARD?
            </div>
            <h2>
              Not sure which
              <br />
              package is right?
              <br />
              <span>Let's find out together.</span>
            </h2>
            <p>
              Tell us about your business and goals. We'll recommend the right
              starting point and answer any questions you have.
            </p>
            <div className="pr-cta-actions">
              <Link to="/enquire" className="pr-cta-btn-primary">
                Start a project <ArrowUpRight size={18} />
              </Link>
              <Link to="/contact" className="pr-cta-btn-secondary">
                Talk to our team <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        /* ════════════════════════════════════════
           PRICING PAGE
        ════════════════════════════════════════ */
        .pricing-page {
          --pr-bg: #f5f7fa;
          --pr-surface: #ffffff;
          --pr-navy: #091725;
          --pr-text: #111d2a;
          --pr-muted: #6e7d8c;
          --pr-line: #dce4eb;
          background: var(--pr-bg);
          color: var(--pr-text);
          overflow: hidden;
          font-family: inherit;
        }

        .pr-container {
          width: min(1220px, 90%);
          margin-inline: auto;
        }

        /* HERO */
        .pr-hero {
          position: relative;
          min-height: 560px;
          display: flex;
          align-items: center;
          isolation: isolate;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 80% 30%, rgba(75,119,155,.22), transparent 38%),
            linear-gradient(120deg, #081521 0%, #0b1d2d 55%, #10283a 100%);
          color: #f8fbff;
        }

        .pr-hero-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(219,235,249,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(219,235,249,.055) 1px, transparent 1px);
          background-size: 58px 58px;
          mask-image: linear-gradient(to bottom, black, transparent 95%);
        }

        .pr-hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          opacity: .13;
          animation: prOrbFloat 9s ease-in-out infinite alternate;
        }

        .pr-orb-one {
          width: 380px; height: 380px;
          top: 5%; right: -80px;
          background: #7cb8e6;
        }

        .pr-orb-two {
          width: 320px; height: 320px;
          bottom: -180px; left: 30%;
          background: #6c92d1;
          animation-delay: -4s;
        }

        @keyframes prOrbFloat {
          from { transform: translateY(0) scale(1); }
          to   { transform: translateY(-22px) scale(1.04); }
        }

        .pr-hero-inner {
          position: relative;
          z-index: 1;
          width: min(1220px, 90%);
          margin: auto;
          padding: 140px 0 110px;
        }

        .pr-eyebrow {
          display: flex;
          align-items: center;
          gap: 11px;
          color: #b5c5d2;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 2px;
          margin-bottom: 34px;
        }

        .pr-eyebrow-dot {
          width: 7px; height: 7px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #a4c9e7;
          box-shadow: 0 0 15px rgba(145,195,231,.6);
        }

        .pr-hero-inner h1 {
          font-size: clamp(50px, 7vw, 92px);
          line-height: .99;
          letter-spacing: -5px;
          font-weight: 740;
          margin: 0 0 28px;
        }

        .pr-hero-inner h1 span {
          background: linear-gradient(100deg, #b7d9f3, #7da9ce);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .pr-hero-sub {
          max-width: 520px;
          color: #b4c2ce;
          font-size: 16px;
          line-height: 1.9;
          margin: 0 0 30px;
        }

        .pr-hero-tags {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #8094a5;
          font-size: 11px;
          font-weight: 650;
          letter-spacing: 1.2px;
        }

        .pr-tag-dot {
          width: 3px; height: 3px;
          border-radius: 50%;
          background: #6685a0;
        }

        /* TABS */
        .pr-tabs-section {
          background: var(--pr-surface);
          border-bottom: 1px solid var(--pr-line);
          position: sticky;
          top: 76px;
          z-index: 100;
        }

        .pr-tabs {
          display: flex;
          gap: 4px;
          overflow-x: auto;
          padding: 12px 0;
          scrollbar-width: none;
        }

        .pr-tabs::-webkit-scrollbar { display: none; }

        .pr-tab {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          border: 1px solid transparent;
          border-radius: 10px;
          background: transparent;
          color: var(--pr-muted);
          font-family: inherit;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
          flex-shrink: 0;
          transition: all .2s ease;
        }

        .pr-tab:hover {
          color: var(--pr-text);
          background: rgba(0,0,0,.04);
        }

        .pr-tab-active {
          color: var(--pr-navy);
          background: color-mix(in srgb, var(--tab-accent) 14%, transparent);
          border-color: color-mix(in srgb, var(--tab-accent) 40%, transparent);
        }

        /* PACKAGES SECTION */
        .pr-packages-section {
          padding: 80px 0 100px;
        }

        .pr-section-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 52px;
          flex-wrap: wrap;
        }

        .pr-section-left {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pr-section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: color-mix(in srgb, var(--tab-accent) 70%, #333);
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 1.8px;
        }

        .pr-billing-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 13px;
          background: #eef2f8;
          border-radius: 99px;
          color: var(--pr-muted);
          font-size: 11px;
          font-weight: 650;
        }

        .pr-section-note {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          max-width: 420px;
          color: var(--pr-muted);
          font-size: 13px;
          line-height: 1.75;
          margin: 0;
        }

        .pr-section-note svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: #8aabca;
        }

        /* CARDS GRID */
        .pr-cards {
          display: grid;
          gap: 22px;
          align-items: start;
        }

        .pr-cards-3 { grid-template-columns: repeat(3, 1fr); }
        .pr-cards-4 { grid-template-columns: repeat(4, 1fr); }

        .pr-card {
          position: relative;
          background: var(--pr-surface);
          border: 1px solid var(--pr-line);
          border-radius: 18px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: box-shadow .25s ease, transform .25s ease;
        }

        .pr-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,.09);
          transform: translateY(-3px);
        }

        .pr-card-featured {
          border-color: color-mix(in srgb, var(--card-accent) 55%, transparent);
          background: color-mix(in srgb, var(--card-accent) 5%, white);
          box-shadow: 0 8px 32px rgba(0,0,0,.08);
        }

        .pr-popular-badge {
          position: absolute;
          top: -13px;
          left: 50%;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 99px;
          background: var(--pr-navy);
          color: #ffffff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .pr-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .pr-card-index {
          color: var(--pr-muted);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .pr-card-icon {
          width: 38px; height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, var(--card-accent) 18%, white);
          color: color-mix(in srgb, var(--card-accent) 80%, #333);
        }

        .pr-card-name {
          font-size: 20px;
          font-weight: 760;
          letter-spacing: -0.6px;
          color: var(--pr-text);
          margin-bottom: 6px;
        }

        .pr-card-price {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -1.5px;
          color: var(--pr-navy);
          margin-bottom: 10px;
        }

        .pr-card-best {
          font-size: 13px;
          color: var(--pr-muted);
          line-height: 1.65;
          margin: 0 0 20px;
        }

        .pr-card-divider {
          height: 1px;
          background: var(--pr-line);
          margin-bottom: 18px;
        }

        .pr-card-features-label {
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 1.5px;
          color: #9aacbb;
          margin-bottom: 14px;
        }

        .pr-card-features {
          list-style: none;
          margin: 0 0 28px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .pr-card-features li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-size: 13px;
          line-height: 1.55;
          color: #3d4f5e;
        }

        .pr-check {
          flex-shrink: 0;
          width: 20px; height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: color-mix(in srgb, var(--card-accent) 20%, white);
          color: color-mix(in srgb, var(--card-accent) 80%, #333);
          margin-top: 1px;
        }

        .pr-card-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 13px 18px;
          border: 1.5px solid var(--pr-line);
          border-radius: 10px;
          background: transparent;
          color: var(--pr-text);
          font-size: 13px;
          font-weight: 650;
          text-decoration: none;
          transition: all .22s ease;
          margin-top: auto;
        }

        .pr-card-btn:hover {
          background: var(--pr-navy);
          border-color: var(--pr-navy);
          color: #fff;
          transform: translateY(-2px);
        }

        .pr-card-btn-primary {
          background: var(--pr-navy);
          border-color: var(--pr-navy);
          color: #fff;
        }

        .pr-card-btn-primary:hover {
          background: #0f2540;
          border-color: #0f2540;
        }

        /* DISCLAIMER */
        .pr-disclaimer {
          background: #edf3f9;
          padding: 40px 0;
          border-top: 1px solid var(--pr-line);
          border-bottom: 1px solid var(--pr-line);
        }

        .pr-disclaimer-inner {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .pr-disclaimer-icon {
          color: #7aabca;
          flex-shrink: 0;
        }

        .pr-disclaimer-inner p {
          flex: 1;
          margin: 0;
          color: var(--pr-muted);
          font-size: 13px;
          line-height: 1.75;
          min-width: 200px;
        }

        .pr-disclaimer-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 18px;
          border: 1.5px solid #b0cce0;
          border-radius: 9px;
          background: white;
          color: var(--pr-navy);
          font-size: 13px;
          font-weight: 650;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: all .22s ease;
        }

        .pr-disclaimer-cta:hover {
          background: var(--pr-navy);
          border-color: var(--pr-navy);
          color: white;
        }

        /* CTA SECTION */
        .pr-cta {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 80% 30%, rgba(75,119,155,.2), transparent 36%),
            linear-gradient(120deg, #081521 0%, #0b1d2d 55%, #10283a 100%);
          color: #f8fbff;
        }

        .pr-cta-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(219,235,249,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(219,235,249,.055) 1px, transparent 1px);
          background-size: 58px 58px;
          mask-image: linear-gradient(to bottom, black, transparent 90%);
        }

        .pr-cta-orb {
          position: absolute;
          width: 400px; height: 400px;
          right: -100px; top: -100px;
          border-radius: 50%;
          background: #7cb8e6;
          filter: blur(100px);
          opacity: .12;
        }

        .pr-cta-inner {
          position: relative;
          z-index: 1;
          padding: 120px 0;
        }

        .pr-cta-eyebrow {
          display: flex;
          align-items: center;
          gap: 11px;
          color: #b5c5d2;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 2px;
          margin-bottom: 30px;
        }

        .pr-cta-inner h2 {
          font-size: clamp(44px, 6vw, 80px);
          line-height: 1.02;
          letter-spacing: -4px;
          font-weight: 740;
          margin: 0 0 24px;
        }

        .pr-cta-inner h2 span {
          background: linear-gradient(100deg, #b7d9f3, #7da9ce);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .pr-cta-inner > p {
          max-width: 440px;
          color: #b4c2ce;
          font-size: 16px;
          line-height: 1.85;
          margin: 0 0 36px;
        }

        .pr-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .pr-cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 22px;
          background: #f4f8fb;
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 10px;
          color: #0b1a27;
          font-size: 13px;
          font-weight: 750;
          text-decoration: none;
          transition: all .25s ease;
        }

        .pr-cta-btn-primary:hover {
          background: #dcecf8;
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(0,0,0,.2);
        }

        .pr-cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 22px;
          background: transparent;
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 10px;
          color: #b5c5d2;
          font-size: 13px;
          font-weight: 650;
          text-decoration: none;
          transition: all .25s ease;
        }

        .pr-cta-btn-secondary:hover {
          border-color: rgba(255,255,255,.4);
          color: #fff;
          transform: translateY(-2px);
        }

        /* DARK MODE */
        body.dark-mode .pricing-page {
          --pr-bg: #0a1118;
          --pr-surface: #111d2a;
          --pr-text: #e8eef4;
          --pr-muted: #8a9fb5;
          --pr-line: rgba(255,255,255,.1);
        }

        body.dark-mode .pr-tabs-section {
          background: #0d1820;
          border-color: rgba(255,255,255,.08);
        }

        body.dark-mode .pr-tab:hover {
          background: rgba(255,255,255,.06);
        }

        body.dark-mode .pr-card {
          border-color: rgba(255,255,255,.08);
        }

        body.dark-mode .pr-billing-badge {
          background: rgba(255,255,255,.07);
          color: #8a9fb5;
        }

        body.dark-mode .pr-disclaimer {
          background: #0d1820;
          border-color: rgba(255,255,255,.08);
        }

        body.dark-mode .pr-disclaimer-cta {
          background: #111d2a;
          border-color: rgba(255,255,255,.15);
          color: #e8eef4;
        }

        /* RESPONSIVE */
        @media (max-width: 1100px) {
          .pr-cards-4 { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 860px) {
          .pr-cards-3,
          .pr-cards-4 { grid-template-columns: repeat(2, 1fr); }

          .pr-section-header { flex-direction: column; gap: 20px; }
        }

        @media (max-width: 600px) {
          .pr-cards-3,
          .pr-cards-4 { grid-template-columns: 1fr; }

          .pr-hero-inner { padding: 120px 0 80px; }
          .pr-hero-inner h1 { letter-spacing: -3px; }
          .pr-cta-inner { padding: 90px 0; }
          .pr-cta-inner h2 { letter-spacing: -2.5px; }
        }
      `}</style>
    </>
  );
}
