import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const principles = [
  {
    icon: Target,
    number: "01",
    title: "Business First",
    description:
      "We understand the business, audience and goals before deciding what to build.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "One Digital Partner",
    description:
      "Technology, creative and growth come together through one connected approach.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Practical Execution",
    description:
      "We focus on solutions that are useful, scalable and built for real business value.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Built to Grow",
    description:
      "Every solution is designed with the next stage of your business in mind.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern websites and digital experiences built around your business.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Digital Marketing",
    description:
      "Digital campaigns and strategies designed to increase visibility and reach.",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "Creative & Branding",
    description:
      "Clear visual identities and creative systems that make brands memorable.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Growth & Strategy",
    description:
      "Practical thinking that connects digital execution with business growth.",
    icon: Target,
  },
];

const journey = [
  "Digital Services",
  "Technology Solutions",
  "AI & Automation",
  "Software Products",
  "SaaS",
];

function About() {
  return (
    <div className="about-page">
      <style>{`
        /* =====================================================
           BASE
        ===================================================== */

        .about-page {
          --white: #ffffff;
          --black: #111418;
          --soft-black: #1b2329;

          --blue: #69b2e6;
          --blue-dark: #2f79a8;
          --blue-light: #eaf6fd;
          --blue-soft: #f5fbff;

          --text-soft: #5d6872;
          --text-muted: #8a949d;

          --border: rgba(17, 20, 24, 0.08);
          --border-blue: rgba(105, 178, 230, 0.22);

          --max-width: 1200px;

          width: 100%;
          min-height: 100vh;

          overflow: hidden;

          background: var(--white);
          color: var(--black);

          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;

          -webkit-font-smoothing: antialiased;
        }

        .about-page *,
        .about-page *::before,
        .about-page *::after {
          box-sizing: border-box;
        }

        .about-page h1,
        .about-page h2,
        .about-page h3,
        .about-page p {
          margin-top: 0;
        }

        .about-page a {
          color: inherit;
          text-decoration: none;
        }


        /* =====================================================
           ANIMATIONS
        ===================================================== */

        @keyframes aboutReveal {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes aboutFade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes aboutFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes aboutRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .about-reveal {
          animation: aboutReveal 0.8s ease both;
        }

        .about-reveal-delay-1 {
          animation-delay: 0.12s;
        }

        .about-reveal-delay-2 {
          animation-delay: 0.24s;
        }

        .about-reveal-delay-3 {
          animation-delay: 0.36s;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .about-hero {
          position: relative;

          min-height: 680px;

          display: flex;
          align-items: center;

          padding: 120px 24px 90px;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 78% 40%,
              rgba(105, 178, 230, 0.16),
              transparent 30%
            ),
            linear-gradient(
              180deg,
              #ffffff 0%,
              #fafdff 100%
            );
        }

        .about-hero::before {
          content: "";

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

          background-size: 60px 60px;

          mask-image:
            linear-gradient(
              90deg,
              transparent,
              black 30%,
              black 85%,
              transparent
            );

          pointer-events: none;
        }

        .about-hero::after {
          content: "";

          position: absolute;

          width: 650px;
          height: 650px;

          right: -300px;
          top: -250px;

          border:
            1px solid
            rgba(105, 178, 230, 0.15);

          border-radius: 50%;

          box-shadow:
            0 0 0 70px rgba(105, 178, 230, 0.025),
            0 0 0 140px rgba(105, 178, 230, 0.018);

          pointer-events: none;
        }

        .about-hero-content {
          position: relative;
          z-index: 2;

          width: min(
            var(--max-width),
            calc(100% - 48px)
          );

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            minmax(0, 1.08fr)
            minmax(380px, 0.92fr);

          gap: 70px;

          align-items: center;
        }

        .about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          margin-bottom: 22px;

          color: var(--blue-dark);

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .about-eyebrow svg {
          color: var(--blue);
        }

        .about-hero-copy h1 {
          max-width: 720px;

          margin: 0;

          font-size: clamp(54px, 6vw, 82px);

          line-height: 0.96;

          letter-spacing: -0.065em;

          font-weight: 750;
        }

        .about-hero-copy h1 span {
          color: var(--blue-dark);
        }

        .about-hero-description {
          max-width: 600px;

          margin: 27px 0 0;

          color: var(--text-soft);

          font-size: 16px;

          line-height: 1.75;
        }


        /* =====================================================
           BUTTONS
        ===================================================== */

        .about-actions {
          display: flex;
          flex-wrap: wrap;

          gap: 12px;

          margin-top: 32px;
        }

        .about-primary-button,
        .about-secondary-button {
          min-height: 49px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          padding: 0 20px;

          border-radius: 999px;

          font-size: 13px;
          font-weight: 750;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .about-primary-button {
          color: #ffffff;

          background: var(--blue-dark);

          box-shadow:
            0 12px 28px
            rgba(47, 121, 168, 0.18);
        }

        .about-primary-button:hover {
          transform: translateY(-2px);

          background: #256b97;

          box-shadow:
            0 16px 35px
            rgba(47, 121, 168, 0.24);
        }

        .about-secondary-button {
          color: var(--black);

          background: #ffffff;

          border:
            1px solid
            rgba(17, 20, 24, 0.12);
        }

        .about-secondary-button:hover {
          transform: translateY(-2px);

          border-color:
            rgba(105, 178, 230, 0.5);

          box-shadow:
            0 12px 28px
            rgba(105, 178, 230, 0.09);
        }


        /* =====================================================
           HERO VISUAL
        ===================================================== */

        .about-hero-visual {
          position: relative;

          min-height: 470px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-visual-card {
          position: relative;
          z-index: 2;

          width: 365px;
          min-height: 425px;

          padding: 25px;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 80% 15%,
              rgba(105, 178, 230, 0.28),
              transparent 34%
            ),
            linear-gradient(
              145deg,
              #17232b,
              #0c1217
            );

          border:
            1px solid
            rgba(105, 178, 230, 0.24);

          border-radius: 23px;

          box-shadow:
            0 35px 80px
            rgba(30, 70, 95, 0.16);

          transform: rotate(2deg);

          animation:
            aboutFloat 6s ease-in-out infinite;
        }

        .about-visual-card::before {
          content: "";

          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(105, 178, 230, 0.065) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(105, 178, 230, 0.065) 1px,
              transparent 1px
            );

          background-size: 40px 40px;
        }

        .about-card-top {
          position: relative;
          z-index: 2;

          display: flex;
          justify-content: space-between;

          color: rgba(255,255,255,0.48);

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 0.13em;
        }

        .about-card-top span:first-child {
          color: #ffffff;
        }

        .about-card-line {
          position: relative;
          z-index: 2;

          height: 1px;

          margin: 22px 0;

          background:
            linear-gradient(
              90deg,
              rgba(105, 178, 230, 0.55),
              rgba(255,255,255,0.08),
              transparent
            );
        }

        .about-card-center {
          position: relative;
          z-index: 2;

          height: 345px;

          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .about-card-label {
          color: #9ed5f2;

          font-size: 9px;
          font-weight: 800;

          letter-spacing: 0.15em;
        }

        .about-big-letter {
          margin-left: -13px;

          color: transparent;

          font-size: 250px;

          line-height: 0.8;

          font-weight: 900;

          letter-spacing: -0.12em;

          -webkit-text-stroke:
            1px
            rgba(105, 178, 230, 0.60);
        }

        .about-card-copy {
          position: absolute;

          left: 0;
          right: 0;
          bottom: 0;

          display: flex;
          justify-content: space-between;

          padding-top: 16px;

          border-top:
            1px solid
            rgba(255,255,255,0.12);
        }

        .about-card-copy strong {
          color: rgba(255,255,255,0.55);

          font-size: 9px;

          letter-spacing: 0.08em;

          text-transform: uppercase;
        }


        /* =====================================================
           FLOATING CARDS
        ===================================================== */

        .about-floating-card {
          position: absolute;
          z-index: 4;

          min-width: 165px;

          padding: 15px 17px;

          background:
            rgba(255,255,255,0.95);

          border:
            1px solid
            rgba(105,178,230,0.23);

          border-radius: 12px;

          box-shadow:
            0 16px 45px
            rgba(30,70,95,0.11);

          backdrop-filter: blur(12px);

          animation:
            aboutFloat 5s ease-in-out infinite;
        }

        .about-floating-card span {
          display: block;

          margin-bottom: 5px;

          color: var(--text-muted);

          font-size: 8px;
          font-weight: 800;

          letter-spacing: 0.12em;
        }

        .about-floating-card strong {
          font-size: 11px;
        }

        .about-floating-one {
          left: -15px;
          top: 70px;
        }

        .about-floating-two {
          right: -8px;
          bottom: 55px;

          animation-delay: -2s;
        }


        /* =====================================================
           SHARED SECTION
        ===================================================== */

        .about-label {
          display: flex;
          align-items: center;
          gap: 9px;

          margin-bottom: 17px;

          color: var(--blue-dark);

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 0.16em;

          text-transform: uppercase;
        }

        .about-label::before {
          content: "";

          width: 24px;
          height: 2px;

          background: var(--blue);
        }

        .about-section-heading {
          max-width: var(--max-width);

          margin: 0 auto;

          display: flex;

          align-items: flex-end;
          justify-content: space-between;

          gap: 60px;
        }

        .about-section-heading h2 {
          max-width: 700px;

          margin: 0;

          font-size: clamp(43px, 5vw, 66px);

          line-height: 0.98;

          letter-spacing: -0.06em;

          font-weight: 720;
        }

        .about-section-heading h2 span {
          color: var(--blue-dark);
        }

        .about-section-heading > p {
          max-width: 390px;

          margin: 0;

          color: var(--text-soft);

          font-size: 14px;

          line-height: 1.75;
        }


        /* =====================================================
           WHO WE ARE
        ===================================================== */

        .about-intro {
          max-width: var(--max-width);

          margin: 0 auto;

          padding: 110px 24px;

          display: grid;

          grid-template-columns:
            1fr
            0.85fr;

          gap: 90px;

          align-items: center;
        }

        .about-intro h2 {
          margin: 0;

          font-size: clamp(44px, 5vw, 65px);

          line-height: 0.98;

          letter-spacing: -0.06em;
        }

        .about-intro h2 span {
          color: var(--blue-dark);
        }

        .about-intro-copy p {
          margin: 0 0 20px;

          color: var(--text-soft);

          font-size: 15px;

          line-height: 1.8;
        }

        .about-intro-copy p:last-child {
          margin-bottom: 0;
        }


        /* =====================================================
           APPROACH
        ===================================================== */

        .about-approach {
          padding: 105px 24px;

          background:
            radial-gradient(
              circle at 90% 20%,
              rgba(105,178,230,0.11),
              transparent 28%
            ),
            var(--blue-soft);

          border-top:
            1px solid
            rgba(105,178,230,0.10);

          border-bottom:
            1px solid
            rgba(105,178,230,0.10);
        }

        .about-capability-grid {
          max-width: var(--max-width);

          margin: 60px auto 0;

          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          border-top:
            1px solid
            var(--border-blue);

          border-left:
            1px solid
            var(--border-blue);
        }

        .about-capability {
          min-height: 165px;

          padding: 27px;

          display: grid;

          grid-template-columns:
            40px
            1fr
            20px;

          gap: 18px;

          border-right:
            1px solid
            var(--border-blue);

          border-bottom:
            1px solid
            var(--border-blue);

          background:
            rgba(255,255,255,0.72);

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .about-capability:hover {
          transform: translateY(-4px);

          background: #ffffff;

          box-shadow:
            0 18px 45px
            rgba(30,70,95,0.07);
        }

        .about-capability-number {
          color: var(--blue-dark);

          font-size: 10px;

          font-weight: 800;
        }

        .about-capability h3 {
          margin: 0 0 9px;

          font-size: 19px;

          letter-spacing: -0.03em;
        }

        .about-capability p {
          margin: 0;

          color: var(--text-soft);

          font-size: 12px;

          line-height: 1.7;
        }

        .about-capability svg {
          color: var(--blue-dark);

          transition:
            transform 0.25s ease;
        }

        .about-capability:hover svg {
          transform:
            translate(4px, -4px);
        }


        /* =====================================================
           UpLyftBusiness SYSTEM
        ===================================================== */

        .about-system {
          max-width: var(--max-width);

          margin: 0 auto;

          padding: 120px 24px;

          display: grid;

          grid-template-columns:
            1fr
            0.85fr;

          gap: 100px;

          align-items: center;
        }

        .about-system-visual {
          position: relative;

          width: min(460px, 100%);

          aspect-ratio: 1;

          margin: auto;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .system-orbit {
          position: absolute;

          border:
            1px solid
            rgba(105,178,230,0.18);

          border-radius: 50%;
        }

        .system-orbit-one {
          width: 94%;
          height: 94%;

          animation:
            aboutRotate 25s linear infinite;
        }

        .system-orbit-two {
          width: 68%;
          height: 68%;

          border-color:
            rgba(105,178,230,0.28);

          animation:
            aboutRotate 18s linear infinite reverse;
        }

        .system-orbit-three {
          width: 43%;
          height: 43%;

          border-color:
            rgba(47,121,168,0.35);
        }

        .system-center {
          position: relative;
          z-index: 2;

          width: 135px;
          height: 135px;

          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;

          color: white;

          background:
            linear-gradient(
              145deg,
              #17232b,
              #0c1217
            );

          border:
            1px solid
            rgba(105,178,230,0.3);

          border-radius: 50%;

          box-shadow:
            0 20px 60px
            rgba(30,70,95,0.17);
        }

        .system-center span {
          color: #9ed5f2;

          font-size: 46px;

          line-height: 1;

          font-weight: 850;
        }

        .system-center strong {
          margin-top: 5px;

          font-size: 9px;

          letter-spacing: 0.2em;
        }

        .system-node {
          position: absolute;
          z-index: 3;

          padding: 12px 14px;

          display: flex;
          align-items: center;

          gap: 8px;

          color: var(--black);

          background: #ffffff;

          border:
            1px solid
            rgba(105,178,230,0.25);

          border-radius: 10px;

          box-shadow:
            0 12px 30px
            rgba(30,70,95,0.08);

          font-size: 10px;
          font-weight: 750;
        }

        .system-node svg {
          color: var(--blue-dark);
        }

        .system-node-one {
          top: 8%;
          right: 5%;
        }

        .system-node-two {
          right: 0;
          bottom: 10%;
        }

        .system-node-three {
          left: 0;
          bottom: 20%;
        }

        .about-system-content h2 {
          margin: 15px 0 25px;

          font-size: clamp(48px, 5vw, 70px);

          line-height: 0.92;

          letter-spacing: -0.06em;
        }

        .about-system-content h2 span {
          color: var(--blue-dark);
        }

        .about-system-content > p:not(.about-label) {
          max-width: 510px;

          margin: 0 0 17px;

          color: var(--text-soft);

          font-size: 15px;

          line-height: 1.75;
        }

        .about-text-link {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          margin-top: 10px;

          color: var(--blue-dark);

          font-size: 12px;

          font-weight: 800;

          transition:
            gap 0.25s ease;
        }

        .about-text-link:hover {
          gap: 12px;
        }


        /* =====================================================
           PRINCIPLES
        ===================================================== */

        .about-principles {
          padding: 105px 24px;

          background:
            linear-gradient(
              135deg,
              #f7fbfe,
              #edf7fc,
              #ffffff
            );

          border-top:
            1px solid
            rgba(105,178,230,0.10);

          border-bottom:
            1px solid
            rgba(105,178,230,0.10);
        }

        .about-principles-grid {
          max-width: var(--max-width);

          margin: 60px auto 0;

          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 14px;
        }

        .about-principle-card {
          min-height: 270px;

          padding: 25px;

          background: #ffffff;

          border:
            1px solid
            var(--border);

          border-radius: 18px;

          box-shadow:
            0 10px 35px
            rgba(30,70,95,0.035);

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .about-principle-card:hover {
          transform: translateY(-6px);

          border-color:
            rgba(105,178,230,0.32);

          box-shadow:
            0 20px 50px
            rgba(30,70,95,0.08);
        }

        .about-principle-top {
          display: flex;

          justify-content: space-between;
          align-items: center;
        }

        .about-principle-number {
          color: var(--blue-dark);

          font-size: 10px;

          font-weight: 800;
        }

        .about-principle-icon {
          width: 42px;
          height: 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: var(--blue-dark);

          background:
            rgba(105,178,230,0.10);

          border-radius: 11px;
        }

        .about-principle-card h3 {
          margin: 58px 0 11px;

          font-size: 18px;

          letter-spacing: -0.025em;
        }

        .about-principle-card p {
          margin: 0;

          color: var(--text-soft);

          font-size: 12px;

          line-height: 1.7;
        }


        /* =====================================================
           GROWTH JOURNEY
        ===================================================== */

        .about-journey {
          max-width: var(--max-width);

          margin: 0 auto;

          padding: 120px 24px;
        }

        .about-journey-list {
          margin-top: 60px;

          border-top:
            1px solid
            var(--border);
        }

        .about-journey-item {
          display: grid;

          grid-template-columns:
            70px
            1fr
            25px;

          align-items: center;

          gap: 25px;

          min-height: 85px;

          border-bottom:
            1px solid
            var(--border);

          transition:
            padding 0.3s ease,
            background 0.3s ease;
        }

        .about-journey-item:hover {
          padding-left: 12px;

          background:
            linear-gradient(
              90deg,
              rgba(105,178,230,0.06),
              transparent
            );
        }

        .about-journey-number {
          color: var(--blue-dark);

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.1em;
        }

        .about-journey-title {
          font-size: 19px;

          font-weight: 700;

          letter-spacing: -0.025em;
        }

        .about-journey-arrow {
          color: var(--blue-dark);

          transition:
            transform 0.25s ease;
        }

        .about-journey-item:hover .about-journey-arrow {
          transform:
            translate(4px, -4px);
        }


        /* =====================================================
           CTA
        ===================================================== */

        .about-final-cta {
          position: relative;

          padding: 120px 24px;

          overflow: hidden;

          text-align: center;

          background:
            radial-gradient(
              circle at 75% 35%,
              rgba(105,178,230,0.16),
              transparent 30%
            ),
            #f5fbff;

          border-top:
            1px solid
            rgba(105,178,230,0.12);
        }

        .about-final-cta::before {
          content: "UpLyftBusiness";

          position: absolute;

          left: 50%;
          top: 50%;

          transform:
            translate(-50%, -50%);

          white-space: nowrap;

          color:
            rgba(47,121,168,0.035);

          font-size:
            clamp(100px, 20vw, 300px);

          font-weight: 900;

          letter-spacing: -0.08em;

          pointer-events: none;
        }

        .about-final-cta-content {
          position: relative;
          z-index: 2;

          max-width: 800px;

          margin: 0 auto;
        }

        .about-final-cta .about-label {
          justify-content: center;
        }

        .about-final-cta h2 {
          margin: 0;

          font-size:
            clamp(46px, 6vw, 78px);

          line-height: 0.95;

          letter-spacing: -0.065em;
        }

        .about-final-cta h2 span {
          color: var(--blue-dark);
        }

        .about-final-cta-content > p:not(.about-label) {
          max-width: 580px;

          margin: 23px auto 30px;

          color: var(--text-soft);

          font-size: 14px;

          line-height: 1.75;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1050px) {

          .about-hero-content {
            grid-template-columns: 1fr;

            gap: 45px;
          }

          .about-hero-copy {
            max-width: 800px;
          }

          .about-intro,
          .about-system {
            grid-template-columns: 1fr;

            gap: 55px;
          }

          .about-intro-copy {
            max-width: 700px;
          }

          .about-section-heading {
            flex-direction: column;

            align-items: flex-start;

            gap: 25px;
          }

          .about-principles-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 720px) {

          .about-hero {
            min-height: auto;

            padding:
              100px 16px 75px;
          }

          .about-hero-content {
            width: 100%;

            gap: 45px;
          }

          .about-hero-copy h1 {
            font-size:
              clamp(47px, 13vw, 68px);
          }

          .about-hero-description {
            font-size: 14px;
          }

          .about-actions {
            flex-direction: column;

            align-items: stretch;
          }

          .about-primary-button,
          .about-secondary-button {
            width: 100%;
          }

          .about-hero-visual {
            min-height: 410px;
          }

          .about-visual-card {
            width: 295px;

            min-height: 390px;
          }

          .about-card-center {
            height: 310px;
          }

          .about-big-letter {
            font-size: 200px;
          }

          .about-floating-card {
            min-width: 140px;

            padding: 12px;
          }

          .about-floating-one {
            left: 0;
            top: 30px;
          }

          .about-floating-two {
            right: 0;
            bottom: 25px;
          }


          /* Intro */

          .about-intro {
            padding:
              85px 16px;

            gap: 42px;
          }

          .about-intro h2 {
            font-size: 44px;
          }


          /* Approach */

          .about-approach {
            padding:
              85px 16px;
          }

          .about-section-heading h2 {
            font-size: 42px;
          }

          .about-capability-grid {
            grid-template-columns: 1fr;

            margin-top: 48px;
          }

          .about-capability {
            min-height: 145px;

            padding: 22px 18px;
          }


          /* System */

          .about-system {
            padding:
              90px 16px;

            gap: 55px;
          }

          .about-system-visual {
            width: 100%;
          }

          .system-center {
            width: 115px;
            height: 115px;
          }

          .system-center span {
            font-size: 40px;
          }

          .system-node {
            padding: 9px;
          }

          .system-node span {
            display: none;
          }

          .about-system-content h2 {
            font-size: 45px;
          }


          /* Principles */

          .about-principles {
            padding:
              85px 16px;
          }

          .about-principles-grid {
            grid-template-columns: 1fr;

            margin-top: 48px;
          }

          .about-principle-card {
            min-height: 230px;
          }

          .about-principle-card h3 {
            margin-top: 42px;
          }


          /* Journey */

          .about-journey {
            padding:
              90px 16px;
          }

          .about-journey-list {
            margin-top: 48px;
          }

          .about-journey-item {
            grid-template-columns:
              45px
              1fr
              20px;

            gap: 15px;

            min-height: 75px;
          }

          .about-journey-title {
            font-size: 16px;
          }


          /* CTA */

          .about-final-cta {
            padding:
              90px 16px;
          }

          .about-final-cta h2 {
            font-size: 45px;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 430px) {

          .about-hero-copy h1 {
            font-size: 45px;
          }

          .about-visual-card {
            width: 275px;
          }

          .about-big-letter {
            font-size: 180px;
          }

          .about-intro h2,
          .about-system-content h2 {
            font-size: 39px;
          }

          .about-section-heading h2 {
            font-size: 38px;
          }

          .about-final-cta h2 {
            font-size: 41px;
          }
        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .about-page *,
          .about-page *::before,
          .about-page *::after {
            animation: none !important;
            transition: none !important;
          }
        }
        /* ABOUT PAGE — DARK MODE */
body.dark-mode .about-page {
  --white: #080d12;
  --black: #f4f7fa;
  --soft-black: #dbe3e9;
  --blue-dark: #75b9df;
  --blue-light: #14232d;
  --blue-soft: #101820;
  --text-soft: #aeb9c5;
  --text-muted: #8a99a6;
  --border: rgba(255, 255, 255, 0.1);
  --border-blue: rgba(117, 185, 223, 0.22);

  background: #080d12 !important;
  color: #f4f7fa !important;
}

body.dark-mode .about-page .about-hero,
body.dark-mode .about-page .about-approach,
body.dark-mode .about-page .about-principles,
body.dark-mode .about-page .about-final-cta {
  background: #080d12 !important;
  color: #f4f7fa !important;
}

body.dark-mode .about-page .about-floating-card,
body.dark-mode .about-page .about-capability,
body.dark-mode .about-page .about-principle-card,
body.dark-mode .about-page .about-secondary-button {
  background: #101820 !important;
  color: #f4f7fa !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
}

body.dark-mode .about-page .about-hero-copy h1,
body.dark-mode .about-page .about-section-heading h2,
body.dark-mode .about-page .about-system-content h2,
body.dark-mode .about-page .about-final-cta h2,
body.dark-mode .about-page .about-principle-card h3 {
  color: #f4f7fa !important;
}

body.dark-mode .about-page .about-hero-description,
body.dark-mode .about-page .about-principle-card p,
body.dark-mode .about-page .about-final-cta-content > p {
  color: #aeb9c5 !important;
}
      `}</style>

      <Navbar />

      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="about-hero">

          <div className="about-hero-content">

            <div className="about-hero-copy">

              <div className="about-eyebrow about-reveal">
                <Sparkles size={15} />
                ABOUT UpLyftBusiness
              </div>

              <h1 className="about-reveal about-reveal-delay-1">
                Building digital
                <br />
                momentum for
                <br />
                <span>businesses.</span>
              </h1>

              <p className="about-hero-description about-reveal about-reveal-delay-2">
                UpLyftBusiness is a digital and technology company helping businesses
                build stronger digital foundations, connect with customers and
                move toward sustainable growth.
              </p>

              <div className="about-actions about-reveal about-reveal-delay-3">

                <Link
                  to="/services"
                  className="about-primary-button"
                >
                  Explore Our Services
                  <ArrowUpRight size={17} />
                </Link>

                <Link
                  to="/enquire"
                  className="about-secondary-button"
                >
                  Start a Project
                </Link>

              </div>

            </div>


            <div className="about-hero-visual">

              <div className="about-visual-card">

                <div className="about-card-top">
                  <span>UpLyftBusiness</span>
                  <span>01 / 05</span>
                </div>

                <div className="about-card-line"></div>

                <div className="about-card-center">

                  <span className="about-card-label">
                    DIGITAL & TECHNOLOGY
                  </span>

                  <div className="about-big-letter">
                    UB
                  </div>

                  <div className="about-card-copy">
                    <strong>Technology</strong>
                    <strong>Creative</strong>
                    <strong>Growth</strong>
                  </div>

                </div>

              </div>

              <div className="about-floating-card about-floating-one">
                <span>FOCUS</span>
                <strong>Business Growth</strong>
              </div>

              <div className="about-floating-card about-floating-two">
                <span>APPROACH</span>
                <strong>Digital First</strong>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            WHO WE ARE
        ===================================================== */}

        <section className="about-intro">

          <div>

            <p className="about-label">
              WHO WE ARE
            </p>

            <h2>
              Digital should do more
              <br />
              than <span>look good.</span>
            </h2>

          </div>

          <div className="about-intro-copy">

            <p>
              A strong digital presence is about more than having a website
              or being active on social media. It should help your business
              communicate, compete and grow.
            </p>

            <p>
              UpLyftBusiness brings technology, creativity and digital growth together
              to help businesses move forward with clarity and confidence.
            </p>

          </div>

        </section>


        {/* =====================================================
            WHAT WE DO
        ===================================================== */}

        <section className="about-approach">

          <div className="about-section-heading">

            <div>

              <p className="about-label">
                WHAT WE DO
              </p>

              <h2>
                Everything connected.
                <br />
                <span>Nothing unnecessary.</span>
              </h2>

            </div>

            <p>
              We bring the essential parts of your digital presence together
              instead of treating every requirement as a separate project.
            </p>

          </div>


          <div className="about-capability-grid">

            {capabilities.map((capability) => {

              const Icon = capability.icon;

              return (
                <div
                  className="about-capability"
                  key={capability.number}
                >

                  <span className="about-capability-number">
                    {capability.number}
                  </span>

                  <div>

                    <h3>
                      {capability.title}
                    </h3>

                    <p>
                      {capability.description}
                    </p>

                  </div>

                  <Icon size={18} />

                </div>
              );

            })}

          </div>

        </section>


        {/* =====================================================
            UpLyftBusiness SYSTEM
        ===================================================== */}

        <section className="about-system">

          <div className="about-system-visual">

            <div className="system-orbit system-orbit-one"></div>
            <div className="system-orbit system-orbit-two"></div>
            <div className="system-orbit system-orbit-three"></div>

            <div className="system-center">

              <span>UB</span>

              <strong>UpLyftBusiness</strong>

            </div>

            <div className="system-node system-node-one">

              <Code2 size={17} />

              <span>Technology</span>

            </div>

            <div className="system-node system-node-two">

              <Sparkles size={17} />

              <span>Creative</span>

            </div>

            <div className="system-node system-node-three">

              <TrendingUp size={17} />

              <span>Growth</span>

            </div>

          </div>


          <div className="about-system-content">

            <p className="about-label">
              THE UpLyftBusiness SYSTEM
            </p>

            <h2>
              Technology.
              <br />
              Creative.
              <br />
              <span>Growth.</span>
            </h2>

            <p>
              These three areas form the foundation of how we think about
              digital business.
            </p>

            <p>
              Technology creates the foundation. Creative builds connection.
              Growth turns that foundation into opportunity.
            </p>

            <Link
              to="/services"
              className="about-text-link"
            >
              Explore our services
              <ArrowRight size={16} />
            </Link>

          </div>

        </section>


        {/* =====================================================
            PRINCIPLES
        ===================================================== */}

        <section className="about-principles">

          <div className="about-section-heading">

            <div>

              <p className="about-label">
                WHAT WE BELIEVE
              </p>

              <h2>
                Built around how
                <br />
                businesses <span>actually grow.</span>
              </h2>

            </div>

            <p>
              Our approach is simple: understand the business, build the
              right solution and keep improving it.
            </p>

          </div>


          <div className="about-principles-grid">

            {principles.map((principle) => {

              const Icon = principle.icon;

              return (
                <article
                  className="about-principle-card"
                  key={principle.number}
                >

                  <div className="about-principle-top">

                    <span className="about-principle-number">
                      {principle.number}
                    </span>

                    <div className="about-principle-icon">
                      <Icon size={20} />
                    </div>

                  </div>

                  <h3>
                    {principle.title}
                  </h3>

                  <p>
                    {principle.description}
                  </p>

                </article>
              );

            })}

          </div>

        </section>


        {/* =====================================================
            FUTURE
        ===================================================== */}

        <section className="about-journey">

          <div className="about-section-heading">

            <div>

              <p className="about-label">
                OUR DIRECTION
              </p>

              <h2>
                Starting with services.
                <br />
                Building toward <span>technology.</span>
              </h2>

            </div>

            <p>
              UpLyftBusiness is being built for the long term — solving business needs
              today while creating the foundation for bigger technology
              solutions tomorrow.
            </p>

          </div>


          <div className="about-journey-list">

            {journey.map((item, index) => (

              <div
                className="about-journey-item"
                key={item}
              >

                <span className="about-journey-number">
                  0{index + 1}
                </span>

                <span className="about-journey-title">
                  {item}
                </span>

                <ArrowUpRight
                  size={17}
                  className="about-journey-arrow"
                />

              </div>

            ))}

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="about-final-cta">

          <div className="about-final-cta-content">

            <p className="about-label">
              READY TO MOVE FORWARD?
            </p>

            <h2>
              Let's build something
              <br />
              <span>meaningful.</span>
            </h2>

            <p>
              Whether you're starting from scratch or improving what already
              exists, let's talk about where your business can go next.
            </p>

            <Link
              to="/enquire"
              className="about-primary-button"
            >
              Start a Conversation
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </section>

      </main>

      <Footer />

    </div>
    
  );
}

export default About;