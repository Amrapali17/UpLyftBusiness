import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Globe,
  Layers3,
  Megaphone,
  Palette,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
  {
  id: "01",
    category: "Web Development",
    filter: "Web",
    title: "A digital presence built around your business.",
    description:
      "Modern, responsive websites designed to communicate your value, build trust, and encourage enquiries.",
    tags: ["Web Design", "Development", "Responsive"],
    type: "website",
    icon: Globe,
    color: "#e3f2fb",
  },
  {
    id: "02",
    category: "Creative & Branding",
    filter: "Branding",
    title: "A brand identity that stands out.",
    description:
      "Thoughtful visual systems that bring consistency to your brand identity, communication, and customer experience.",
    tags: ["Brand Identity", "Creative", "Design"],
    type: "branding",
    icon: Palette,
    color: "#eee7ff",
  },
  {
    id: "03",
    category: "Digital Marketing",
    filter: "Marketing",
    title: "A smarter approach to digital growth.",
    description:
      "Connected marketing concepts that combine campaign planning, audience understanding, and digital visibility.",
    tags: ["Marketing", "Campaigns", "Growth"],
    type: "marketing",
    icon: TrendingUp,
    color: "#e0f5e9",
  },
  {
    id: "04",
    category: "Landing Pages",
    filter: "Web",
    title: "Clear messaging. Focused experiences.",
    description:
      "Purpose-built landing pages that communicate your offer clearly and guide visitors towards the next step.",
    tags: ["Landing Pages", "UI/UX", "Conversion"],
    type: "landing",
    icon: Target,
    color: "#fff0e4",
  },
  {
    id: "05",
    category: "Social Media",
    filter: "Marketing",
    title: "Consistent creative across every channel.",
    description:
      "A cohesive social media direction that combines content planning, visual storytelling, and brand consistency.",
    tags: ["Content", "Social Media", "Creative"],
    type: "social",
    icon: Megaphone,
    color: "#fbe5f0",
  },
  {
    id: "06",
    category: "Growth & Strategy",
    filter: "Strategy",
    title: "Turn business goals into a clear direction.",
    description:
      "Strategic planning concepts that connect your objectives, digital channels, and priorities for growth.",
    tags: ["Strategy", "Planning", "Analytics"],
    type: "strategy",
    icon: BarChart3,
    color: "#e3edff",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Web & Technology",
    description:
      "Digital experiences that help businesses present their services and connect with their audiences.",
    icon: Code2,
    services: ["Website Development", "UI/UX Design", "Landing Pages"],
  },
  {
    number: "02",
    title: "Creative & Branding",
    description:
      "Consistent visual communication that gives your business a recognisable and professional identity.",
    icon: Palette,
    services: ["Brand Identity", "Creative Design", "Social Creatives"],
  },
  {
    number: "03",
    title: "Marketing & Growth",
    description:
      "Purposeful digital marketing activities shaped around your audience, objectives, and business goals.",
    icon: TrendingUp,
    services: ["Digital Marketing", "Performance Ads", "Growth Strategy"],
  },
];

function ProjectPreview({ project }) {
  const Icon = project.icon;

  return (
    <div
      className={`work-preview preview-${project.type}`}
      style={{ "--preview-bg": project.color }}
    >
      <div className="preview-browser">
        <div className="preview-browser-bar">
          <div className="preview-dots">
            <span />
            <span />
            <span />
          </div>
          <div className="preview-url">preview.uplyftbusiness.com</div>
          <ArrowUpRight size={14} />
        </div>

        <div className="preview-screen">
          {project.type === "website" && (
            <div className="website-mock">
              <div className="mock-nav">
                <strong>BRAND<span>.</span></strong>
                <span>ABOUT&nbsp;&nbsp; SERVICES&nbsp;&nbsp; CONTACT</span>
              </div>
              <div className="mock-website-body">
                <div>
                  <small>BUILT FOR WHAT'S NEXT</small>
                  <h3>Make your next move count.</h3>
                  <p>Digital experiences designed around your business.</p>
                  <span className="mock-button">Discover more <ArrowRight size={11} /></span>
                </div>
                <div className="mock-art">
                  <div className="mock-orb" />
                  <div className="mock-floating-card">
                    <TrendingUp size={23} />
                    <b>Growth starts here</b>
                    <i />
                    <i />
                  </div>
                </div>
              </div>
            </div>
          )}

          {project.type === "branding" && (
            <div className="branding-mock">
              <small>BRAND IDENTITY / 001</small>
              <div className="branding-mark">a<span>.</span></div>
              <strong>ARCADIA</strong>
              <p>A study in simplicity.</p>
              <div className="brand-swatches">
                <i /><i /><i /><i />
              </div>
            </div>
          )}

          {project.type === "marketing" && (
            <div className="marketing-mock">
              <small>CAMPAIGN OVERVIEW</small>
              <h3>Ideas into impact.</h3>
              <div className="marketing-metrics">
                <div><small>Focus</small><b>Visibility</b></div>
                <div><small>Objective</small><b>Engagement</b></div>
              </div>
              <div className="mock-chart">
                {[32, 48, 40, 62, 52, 76, 65, 91, 78, 100].map(
                  (height, index) => (
                    <i key={index} style={{ height: `${height}%` }} />
                  )
                )}
              </div>
              <p><TrendingUp size={12} /> Strategy-led marketing</p>
            </div>
          )}

          {project.type === "landing" && (
            <div className="landing-mock">
              <div className="landing-nav"><b>YOUR BRAND</b><b>LET'S TALK ↗</b></div>
              <small>A BETTER WAY FORWARD</small>
              <h3>Big ideas.<br /><span>Clear direction.</span></h3>
              <p>A focused experience for your next opportunity.</p>
              <span className="mock-button">Start a conversation <ArrowRight size={11} /></span>
              <div className="landing-circle" />
            </div>
          )}

          {project.type === "social" && (
            <div className="social-mock">
              <small>SOCIAL CREATIVE SYSTEM</small>
              <div className="social-mock-grid">
                <div className="social-tile tile-dark">
                  <Sparkles size={22} />
                  <b>Think<br />different.</b>
                </div>
                <div className="social-tile tile-light">
                  <small>YOUR BRAND</small>
                  <b>Made to<br />stand out.</b>
                </div>
                <div className="social-tile tile-pink">
                  <Palette size={21} />
                  <b>CREATIVE<br />DIRECTION</b>
                </div>
              </div>
            </div>
          )}

          {project.type === "strategy" && (
            <div className="strategy-mock">
              <small>YOUR GROWTH ROADMAP</small>
              <h3>A plan for<br /><span>what's next.</span></h3>
              <div className="strategy-steps">
                {["Understand", "Strategise", "Grow"].map((step, index) => (
                  <div key={step}>
                    <small>0{index + 1}</small>
                    <i />
                    <b>{step}</b>
                  </div>
                ))}
              </div>
              <p><Layers3 size={13} /> Connected thinking. Clear priorities.</p>
            </div>
          )}
        </div>
      </div>

      <div className="preview-caption">
        <span><Icon size={13} /> {project.category}</span>
        <span>Concept preview</span>
      </div>
    </div>
  );
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { label: "All", value: "All" },
    { label: "Web & Digital", value: "Web" },
    { label: "Branding", value: "Branding" },
    { label: "Marketing", value: "Marketing" },
    { label: "Strategy", value: "Strategy" },
  ];

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.filter === activeFilter);

  return (
    <div className="work-page">
      <style>{`
        .work-page {
          --work-navy: #123b52;
          --work-blue: #2f79a8;
          --work-sky: #69b2e6;
          --work-pale: #edf7fc;
          --work-ink: #172832;
          --work-muted: #687984;
          --work-line: #e3ebf0;
          background: #fff;
          color: var(--work-ink);
          overflow: hidden;
        }

        .work-page * { box-sizing: border-box; }
        .work-page a { text-decoration: none; }
        .work-container {
          width: min(1160px, calc(100% - 48px));
          margin: 0 auto;
        }

        .work-hero {
          position: relative;
          padding: 100px 0 82px;
          background:
            radial-gradient(ellipse at 83% 24%, rgba(105,178,230,.2), transparent 36%),
            linear-gradient(135deg, #f7fbfe, #edf7fc 54%, #fff);
          border-bottom: 1px solid #e7eff4;
        }

        .work-hero:before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .35;
          background-image:
            linear-gradient(rgba(47,121,168,.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(47,121,168,.07) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, #000, transparent 90%);
        }

        .work-hero-grid {
          position: relative;
          display: grid;
          grid-template-columns: 1.25fr .75fr;
          align-items: center;
          gap: 48px;
        }

        .work-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--work-blue);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .work-eyebrow:before {
          content: "";
          width: 24px;
          height: 2px;
          background: var(--work-sky);
        }

        .work-hero h1 {
          margin: 24px 0 21px;
          color: var(--work-navy);
          font-size: clamp(44px, 5.6vw, 72px);
          line-height: 1.04;
          letter-spacing: -3px;
          font-weight: 800;
        }

        .work-hero h1 span { color: var(--work-blue); }

        .work-hero-copy {
          max-width: 570px;
          margin: 0;
          color: #5c6c77;
          font-size: 15px;
          line-height: 1.9;
        }

        .work-actions {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-top: 31px;
        }

        .work-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 14px 20px;
          border: 1px solid transparent;
          border-radius: 5px;
          background: var(--work-navy);
          color: white !important;
          font-size: 13px;
          font-weight: 750;
          transition: background .2s, transform .2s;
        }

        .work-btn:hover {
          background: var(--work-blue);
          transform: translateY(-2px);
        }

        .work-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--work-navy);
          font-size: 13px;
          font-weight: 750;
        }

        .work-link:hover { color: var(--work-blue); }

        .work-hero-art {
          position: relative;
          min-height: 300px;
          display: grid;
          place-items: center;
        }

        .work-orbit {
          position: absolute;
          width: 270px;
          height: 270px;
          border: 1px solid rgba(47,121,168,.2);
          border-radius: 50%;
        }

        .work-orbit:before, .work-orbit:after {
          content: "";
          position: absolute;
          border: 1px solid rgba(47,121,168,.15);
          border-radius: 50%;
        }

        .work-orbit:before { inset: 26px; }
        .work-orbit:after { inset: 55px; }

        .work-orbit-center {
          position: relative;
          display: grid;
          place-items: center;
          width: 130px;
          height: 130px;
          border-radius: 27px;
          color: white;
          background: linear-gradient(145deg, #123b52, #2f79a8);
          box-shadow: 0 22px 50px rgba(18,59,82,.2);
          transform: rotate(-7deg);
        }

        .work-orbit-center svg { transform: rotate(7deg); }

        .work-float {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 14px;
          border: 1px solid #e0ebf2;
          border-radius: 7px;
          background: white;
          color: var(--work-navy);
          box-shadow: 0 12px 30px rgba(18,59,82,.08);
          font-size: 11px;
          font-weight: 750;
        }

        .work-float svg { color: var(--work-blue); }
        .work-float-top { top: 30px; right: 0; }
        .work-float-bottom { bottom: 30px; left: 0; }

        .work-intro { padding: 76px 0 58px; }

        .work-intro-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 60px;
          align-items: start;
        }

        .work-intro h2, .work-section-heading h2,
        .work-capabilities-heading h2 {
          margin: 15px 0 0;
          color: var(--work-navy);
          font-size: clamp(29px, 3.2vw, 42px);
          line-height: 1.17;
          letter-spacing: -1.4px;
        }

        .work-intro p {
          margin: 5px 0 0;
          color: var(--work-muted);
          font-size: 14px;
          line-height: 1.95;
        }

        .work-projects { padding: 48px 0 90px; }

        .work-section-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 28px;
          margin-bottom: 27px;
        }

        .work-section-heading h2 { max-width: 600px; }

        .work-section-heading > p {
          max-width: 390px;
          margin: 0;
          color: var(--work-muted);
          font-size: 13px;
          line-height: 1.85;
        }

        .work-disclaimer {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 25px;
          padding: 13px 15px;
          border: 1px solid #dcebf5;
          border-radius: 5px;
          background: #f6fbfe;
          color: #536b79;
          font-size: 12px;
          line-height: 1.7;
        }

        .work-disclaimer svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--work-blue);
        }

        .work-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }

        .work-filter {
          padding: 10px 14px;
          border: 1px solid #e0e9ef;
          border-radius: 4px;
          background: #fff;
          color: #657681;
          font: inherit;
          font-size: 12px;
          font-weight: 650;
          cursor: pointer;
          transition: all .2s;
        }

        .work-filter:hover, .work-filter.active {
          border-color: var(--work-navy);
          background: var(--work-navy);
          color: white;
        }

        .work-project-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 25px;
        }

        .work-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid var(--work-line);
          border-radius: 8px;
          background: white;
          transition: transform .25s, box-shadow .25s, border-color .25s;
        }

        .work-card:hover {
          transform: translateY(-4px);
          border-color: #c8dfed;
          box-shadow: 0 18px 45px rgba(18,59,82,.08);
        }

        .work-preview {
          padding: 18px 18px 0;
          background: linear-gradient(145deg, #f2f8fc, #e9f3f9);
          overflow: hidden;
        }

        .preview-browser {
          overflow: hidden;
          border: 1px solid rgba(18,59,82,.12);
          border-bottom: 0;
          border-radius: 7px 7px 0 0;
          background: white;
          box-shadow: 0 10px 28px rgba(18,59,82,.08);
        }

        .preview-browser-bar {
          height: 33px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 11px;
          border-bottom: 1px solid #edf1f4;
          color: #9aa8b0;
        }

        .preview-dots { display: flex; gap: 4px; }
        .preview-dots span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #d5e0e7;
        }

        .preview-url {
          flex: 1;
          max-width: 190px;
          margin: 0 auto;
          padding: 4px 9px;
          border-radius: 3px;
          background: #f5f8fa;
          text-align: center;
          color: #9ba8b1;
          font-size: 8px;
        }

        .preview-screen {
          min-height: 238px;
          position: relative;
          overflow: hidden;
          background: var(--preview-bg);
        }

        .preview-screen small {
          display: block;
          color: #5486a2;
          font-size: 7px;
          font-weight: 850;
          letter-spacing: 1.2px;
        }

        .mock-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 18px;
          color: #173c50;
        }

        .mock-nav strong { font-size: 12px; font-weight: 900; }
        .mock-nav strong span { color: #398ac0; }
        .mock-nav > span { font-size: 7px; color: #57707f; }

        .mock-website-body {
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 5px;
          align-items: center;
          padding: 15px 18px 22px;
        }

        .mock-website-body h3 {
          margin: 9px 0;
          color: #123b52;
          font-size: clamp(20px, 2.2vw, 28px);
          line-height: 1.05;
          letter-spacing: -1px;
        }

        .mock-website-body p {
          margin: 0;
          color: #5f7786;
          font-size: 8px;
          line-height: 1.6;
        }

        .mock-button {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 13px;
          padding: 8px 10px;
          border-radius: 3px;
          background: #123b52;
          color: white;
          font-size: 8px;
          font-weight: 750;
        }

        .mock-art {
          min-height: 145px;
          position: relative;
          display: grid;
          place-items: center;
        }

        .mock-orb {
          width: 112px;
          height: 112px;
          border-radius: 50%;
          background: linear-gradient(145deg, #9dd7f6, #4d98c8);
        }

        .mock-floating-card {
          position: absolute;
          right: 0;
          bottom: 10px;
          display: flex;
          flex-direction: column;
          gap: 7px;
          width: 115px;
          padding: 12px;
          border: 1px solid white;
          border-radius: 6px;
          background: rgba(255,255,255,.95);
          color: #2f79a8;
          box-shadow: 0 10px 24px rgba(18,59,82,.1);
        }

        .mock-floating-card b { color: #274b60; font-size: 8px; }
        .mock-floating-card i { height: 4px; border-radius: 4px; background: #dcecf5; }
        .mock-floating-card i:last-child { width: 65%; }

        .branding-mock {
          min-height: 238px;
          padding: 23px 27px;
          text-align: center;
          background: #eee7ff;
        }

        .branding-mock > small {
          text-align: left;
          color: #7862b2 !important;
        }

        .branding-mark {
          margin-top: 15px;
          color: #322455;
          font-family: Georgia, serif;
          font-size: 70px;
          font-weight: bold;
          line-height: 1;
        }

        .branding-mark span { color: #a48bdd; }
        .branding-mock > strong {
          display: block;
          margin-top: 8px;
          color: #322455;
          font-size: 16px;
          letter-spacing: 5px;
        }

        .branding-mock > p {
          margin: 7px 0 0;
          color: #786b98;
          font-size: 9px;
        }

        .brand-swatches {
          display: flex;
          justify-content: center;
          gap: 7px;
          margin-top: 16px;
        }

        .brand-swatches i {
          width: 28px;
          height: 7px;
          border-radius: 2px;
          background: #322455;
        }

        .brand-swatches i:nth-child(2) { background: #a48bdd; }
        .brand-swatches i:nth-child(3) { background: #c5b5ee; }
        .brand-swatches i:nth-child(4) { background: #fff; }

        .marketing-mock {
          min-height: 238px;
          padding: 23px 26px;
          background: #e0f5e9;
        }

        .marketing-mock > small { color: #347d60 !important; }
        .marketing-mock h3 {
          margin: 10px 0 13px;
          color: #184d3a;
          font-size: 27px;
          letter-spacing: -1px;
        }

        .marketing-metrics { display: flex; gap: 10px; }
        .marketing-metrics div {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 95px;
          padding: 9px 11px;
          border-radius: 4px;
          background: rgba(255,255,255,.65);
        }

        .marketing-metrics div small {
          color: #638b7a;
          font-size: 7px;
          letter-spacing: 0;
        }

        .marketing-metrics b { color: #245943; font-size: 10px; }
        .mock-chart { display: flex; align-items: end; gap: 7px; height: 42px; margin-top: 13px; }
        .mock-chart i { flex: 1; min-height: 5px; border-radius: 2px 2px 0 0; background: #4d9b78; opacity: .82; }
        .marketing-mock > p { display: flex; align-items: center; gap: 5px; margin: 7px 0 0; color: #347d60; font-size: 8px; }

        .landing-mock {
          position: relative;
          min-height: 238px;
          overflow: hidden;
          padding: 18px 24px;
          background: #fff0e4;
        }

        .landing-nav {
          display: flex;
          justify-content: space-between;
          margin-bottom: 25px;
          color: #956d50;
          font-size: 7px;
          letter-spacing: 1px;
        }

        .landing-mock > small { color: #a66e47 !important; }
        .landing-mock h3 {
          position: relative;
          z-index: 1;
          margin: 9px 0;
          color: #56341f;
          font-size: 30px;
          line-height: 1.02;
          letter-spacing: -1px;
        }

        .landing-mock h3 span { color: #b46e40; }
        .landing-mock > p { position: relative; z-index: 1; max-width: 205px; margin: 0; color: #8c664d; font-size: 8px; line-height: 1.6; }
        .landing-circle { position: absolute; right: -48px; bottom: -78px; width: 165px; height: 165px; border: 22px solid rgba(180,110,64,.16); border-radius: 50%; }

        .social-mock {
          min-height: 238px;
          padding: 20px 23px;
          background: #fbe5f0;
        }

        .social-mock > small { color: #a34d7d !important; }
        .social-mock-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 75px 75px;
          gap: 8px;
          margin-top: 13px;
        }

        .social-tile {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 11px;
          border-radius: 4px;
        }

        .tile-dark { grid-row: span 2; background: #6d3157; color: #ffe8f3; }
        .tile-dark b { margin-top: 13px; font-size: 20px; line-height: 1.03; }
        .tile-light { background: #fff7fb; color: #6d3157; }
        .tile-light small { color: #a34d7d; font-size: 6px; }
        .tile-light b { margin-top: 6px; font-size: 13px; line-height: 1.05; }
        .tile-pink { gap: 5px; background: #e9a9cc; color: #6d3157; }
        .tile-pink b { font-size: 8px; line-height: 1.5; }

        .strategy-mock {
          min-height: 238px;
          padding: 23px 26px;
          background: #e3edff;
        }

        .strategy-mock > small { color: #507baa !important; }
        .strategy-mock h3 { margin: 9px 0 0; color: #1e4268; font-size: 28px; line-height: 1.04; letter-spacing: -1px; }
        .strategy-mock h3 span { color: #4d85ba; }
        .strategy-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 17px; }
        .strategy-steps > div { display: flex; flex-direction: column; gap: 6px; padding: 9px; border-radius: 4px; background: rgba(255,255,255,.65); }
        .strategy-steps small { color: #5485b4; font-size: 7px; }
        .strategy-steps i { height: 3px; border-radius: 3px; background: #91b9df; }
        .strategy-steps b { color: #244c73; font-size: 8px; }
        .strategy-mock > p { display: flex; align-items: center; gap: 6px; margin: 11px 0 0; color: #507baa; font-size: 8px; }

        .preview-caption {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          padding: 10px 0 0;
          color: #6b8797;
          font-size: 9px;
        }

        .preview-caption span:first-child {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #315b73;
          font-weight: 750;
        }

        .work-card-content { padding: 22px 23px 24px; }
        .work-card-meta { display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-bottom: 12px; }
        .work-card-number { color: #80a6bd; font-size: 11px; font-weight: 800; letter-spacing: 1px; }
        .work-card-category { color: var(--work-blue); font-size: 10px; font-weight: 800; letter-spacing: .5px; text-transform: uppercase; }
        .work-card-content h3 { margin: 0; color: var(--work-navy); font-size: 22px; line-height: 1.3; letter-spacing: -.5px; }
        .work-card-content > p { margin: 11px 0 17px; color: var(--work-muted); font-size: 13px; line-height: 1.85; }
        .work-tags { display: flex; flex-wrap: wrap; gap: 7px; }
        .work-tags span { padding: 7px 9px; border: 1px solid #e5edf2; border-radius: 3px; color: #637783; font-size: 10px; font-weight: 650; }
        .work-card-bottom { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: 19px; padding-top: 14px; border-top: 1px solid #edf1f4; }
        .work-card-bottom > span { color: #84949d; font-size: 10px; }
        .work-card-bottom a { display: inline-flex; align-items: center; gap: 6px; color: var(--work-navy); font-size: 11px; font-weight: 800; }
        .work-card-bottom a:hover { color: var(--work-blue); }

        .work-capabilities {
          padding: 82px 0;
          background: #f6fafc;
          border-top: 1px solid #eaf1f5;
          border-bottom: 1px solid #eaf1f5;
        }

        .work-capabilities-heading { max-width: 680px; margin-bottom: 35px; }
        .work-capabilities-heading > p { max-width: 550px; margin: 15px 0 0; color: var(--work-muted); font-size: 14px; line-height: 1.85; }

        .work-capability-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }

        .work-capability {
          padding: 25px 23px;
          border: 1px solid #e3edf3;
          border-radius: 7px;
          background: white;
          transition: transform .2s, box-shadow .2s;
        }

        .work-capability:hover { transform: translateY(-3px); box-shadow: 0 14px 35px rgba(18,59,82,.06); }
        .work-capability-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 22px; }
        .work-capability-icon { display: grid; place-items: center; width: 44px; height: 44px; border-radius: 7px; background: var(--work-pale); color: var(--work-blue); }
        .work-capability-number { color: #a5b8c4; font-size: 11px; font-weight: 800; }
        .work-capability h3 { margin: 0 0 10px; color: var(--work-navy); font-size: 19px; }
        .work-capability > p { min-height: 72px; margin: 0; color: var(--work-muted); font-size: 12px; line-height: 1.9; }
        .work-capability-services { display: flex; flex-direction: column; gap: 11px; margin-top: 20px; padding-top: 18px; border-top: 1px solid #edf1f4; }
        .work-capability-services span { display: flex; align-items: center; gap: 8px; color: #536c7b; font-size: 11px; }
        .work-capability-services svg { color: #58a2d2; }

        .work-cta { padding: 78px 0; }
        .work-cta-inner {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          padding: 52px 55px;
          border-radius: 9px;
          background: linear-gradient(115deg, #123b52, #205d7e);
          color: white;
        }

        .work-cta-inner:after {
          content: "";
          position: absolute;
          top: -210px;
          right: 15%;
          width: 330px;
          height: 330px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
          box-shadow: 0 0 0 35px rgba(255,255,255,.025), 0 0 0 75px rgba(255,255,255,.02);
        }

        .work-cta-copy { position: relative; z-index: 1; max-width: 620px; }
        .work-cta .work-eyebrow { color: #a6d8f6; }
        .work-cta h2 { margin: 16px 0 12px; color: white; font-size: clamp(30px, 3.7vw, 46px); line-height: 1.1; letter-spacing: -1.6px; }
        .work-cta p { max-width: 500px; margin: 0; color: #c7dce7; font-size: 13px; line-height: 1.85; }
        .work-cta .work-btn { position: relative; z-index: 1; flex-shrink: 0; border-color: white; background: white; color: var(--work-navy) !important; }
        .work-cta .work-btn:hover { border-color: var(--work-sky); background: var(--work-sky); color: white !important; }

        @media (max-width: 900px) {
          .work-hero-grid { grid-template-columns: 1.1fr .7fr; gap: 20px; }
          .work-orbit { width: 225px; height: 225px; }
          .work-orbit-center { width: 105px; height: 105px; }
          .work-intro-grid { gap: 35px; }
          .work-section-heading { align-items: flex-start; flex-direction: column; gap: 14px; }
          .work-cta-inner { padding: 42px 35px; }
        }

        @media (max-width: 700px) {
          .work-container { width: min(calc(100% - 34px), 560px); }
          .work-hero { padding: 70px 0 48px; }
          .work-hero-grid { grid-template-columns: 1fr; }
          .work-hero h1 { font-size: clamp(42px, 10vw, 58px); letter-spacing: -2.4px; }
          .work-hero-copy { font-size: 14px; }
          .work-hero-art { min-height: 220px; margin-top: 10px; }
          .work-orbit { width: 195px; height: 195px; }
          .work-orbit-center { width: 94px; height: 94px; border-radius: 21px; }
          .work-float-top { top: 15px; right: 6%; }
          .work-float-bottom { bottom: 12px; left: 6%; }
          .work-intro { padding: 53px 0 35px; }
          .work-intro-grid { grid-template-columns: 1fr; gap: 18px; }
          .work-intro p { font-size: 13px; }
          .work-projects { padding: 38px 0 62px; }
          .work-project-grid { grid-template-columns: 1fr; gap: 19px; }
          .work-preview { padding: 13px 13px 0; }
          .preview-screen { min-height: 230px; }
          .work-capabilities { padding: 60px 0; }
          .work-capability-grid { grid-template-columns: 1fr; gap: 13px; }
          .work-capability > p { min-height: 0; }
          .work-cta { padding: 53px 0; }
          .work-cta-inner { align-items: flex-start; flex-direction: column; padding: 33px 24px; }
        }

        @media (max-width: 420px) {
          .work-container { width: calc(100% - 28px); }
          .work-hero h1 { letter-spacing: -1.8px; }
          .work-actions { gap: 15px; }
          .work-btn { padding: 12px 14px; }
          .work-filter { padding: 9px 10px; font-size: 11px; }
          .work-card-content { padding: 18px 16px 20px; }
          .work-card-content h3 { font-size: 20px; }
          .work-cta-inner { padding: 28px 20px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .work-page *, .work-page *:before, .work-page *:after {
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <Navbar />

      <main>
        <section className="work-hero">
          <div className="work-container work-hero-grid">
            <div>
              <div className="work-eyebrow">Our Work & Capabilities</div>
              <h1>
                Digital ideas.
                <br />
                <span>Built for impact.</span>
              </h1>
              <p className="work-hero-copy">
                We bring technology, creativity, and strategy together to help
                businesses build a stronger digital presence and move forward
                with confidence.
              </p>

              <div className="work-actions">
                <Link to="/enquire" className="work-btn">
                  Start a Project <ArrowUpRight size={16} />
                </Link>
                <a href="#work-projects" className="work-link">
                  Explore our work <ArrowDown size={15} />
                </a>
              </div>
            </div>

            <div className="work-hero-art" aria-hidden="true">
              <div className="work-orbit" />
              <div className="work-orbit-center">
                <Layers3 size={44} strokeWidth={1.5} />
              </div>
              <div className="work-float work-float-top">
                <Sparkles size={16} /> Creative thinking
              </div>
              <div className="work-float work-float-bottom">
                <TrendingUp size={16} /> Growth focused
              </div>
            </div>
          </div>
        </section>

        <section className="work-intro">
          <div className="work-container work-intro-grid">
            <div>
              <div className="work-eyebrow">Our Approach</div>
              <h2>Great digital work begins with understanding your business.</h2>
            </div>
            <p>
              Every business has different goals, audiences, and challenges.
              We combine thoughtful design, practical technology, and purposeful
              strategy to create solutions around those needs. From a first
              website to a connected marketing system, we focus on helping your
              business communicate clearly and create a stronger digital
              experience for its customers.
            </p>
          </div>
        </section>

        <section className="work-projects" id="work-projects">
          <div className="work-container">
            <div className="work-section-heading">
              <div>
                <div className="work-eyebrow">What We Can Create</div>
                <h2>Solutions designed for real business needs.</h2>
              </div>
              <p>
                Explore examples of the digital experiences and growth
                solutions we can create for your business.
              </p>
            </div>

            <div className="work-disclaimer">
              <CheckCircle2 size={16} />
              <span>
                <strong>About these previews:</strong> These are illustrative
                design concepts demonstrating our capabilities, not claims of
                completed client projects or measured results.
              </span>
            </div>

            <div className="work-filters" aria-label="Filter project concepts">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  className={`work-filter ${activeFilter === filter.value ? "active" : ""}`}
                  onClick={() => setActiveFilter(filter.value)}
                  aria-pressed={activeFilter === filter.value}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="work-project-grid">
              {visibleProjects.map((project) => (
                <article className="work-card" key={project.id}>
                  <ProjectPreview project={project} />

                  <div className="work-card-content">
                    <div className="work-card-meta">
                      <span className="work-card-number">{project.id}</span>
                      <span className="work-card-category">{project.category}</span>
                    </div>

                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="work-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <div className="work-card-bottom">
                      <span>Concept preview</span>
                      <Link to="/enquire">
                        Discuss a project <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work-capabilities">
          <div className="work-container">
            <div className="work-capabilities-heading">
              <div className="work-eyebrow">How We Help</div>
              <h2>Technology, creativity, and growth — connected.</h2>
              <p>
                Bring the right digital capabilities together under one roof,
                with solutions shaped around your business goals.
              </p>
            </div>

            <div className="work-capability-grid">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <article className="work-capability" key={capability.number}>
                    <div className="work-capability-top">
                      <div className="work-capability-icon">
                        <Icon size={22} />
                      </div>
                      <span className="work-capability-number">
                        {capability.number}
                      </span>
                    </div>

                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>

                    <div className="work-capability-services">
                      {capability.services.map((service) => (
                        <span key={service}>
                          <CheckCircle2 size={14} />
                          {service}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="work-cta">
          <div className="work-container">
            <div className="work-cta-inner">
              <div className="work-cta-copy">
                <div className="work-eyebrow">Have an Idea?</div>
                <h2>Let's build something meaningful.</h2>
                <p>
                  Tell us what you are working towards. We'll help you explore
                  the right digital solution for your business.
                </p>
              </div>

              <Link to="/enquire" className="work-btn">
                Let's Talk <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
