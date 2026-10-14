
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="UpLyftBusiness-footer">
      <div className="footer-main">
        {/* BRAND */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            UpLyftBusiness
          </Link>

          <p>
            Digital and technology solutions designed to help businesses
            build, grow and move forward.
          </p>

          <div className="footer-socials">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/uplyftbusiness/"
              aria-label="UpLyftBusiness on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45h3.56V9H3.54v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/uplyftbusiness/"
              aria-label="UpLyftBusiness on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918408820707"
              aria-label="Chat with UpLyftBusiness on WhatsApp"
              title="Chat with us on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} strokeWidth={2} />
            </a>
          </div>
        </div>

        {/* COMPANY */}
        <div className="footer-column">
          <div className="footer-heading">COMPANY</div>
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* SERVICES */}
        <div className="footer-column">
          <div className="footer-heading">SERVICES</div>
          <Link to="/services">Web Development</Link>
          <Link to="/services">Digital Marketing</Link>
          <Link to="/services">Social Media</Link>
          <Link to="/services">Performance Advertising</Link>
          <Link to="/services">Creative &amp; Branding</Link>
          <Link to="/services">Growth &amp; Strategy</Link>
        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <div className="footer-heading">LET'S TALK</div>

          <a href="mailto:connect@uplyftbusiness.com">
            <Mail size={15} />
            connect@uplyftbusiness.com
          </a>

          <div className="footer-location">
            <MapPin size={15} />
            <span>India · Working Worldwide</span>
          </div>

          <Link to="/enquire" className="footer-enquire">
            Start a Project
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div>
          © {currentYear} UpLyftBusiness. All rights reserved.
        </div>

        <div className="footer-bottom-links">
          <span>Digital</span>
          <span>Technology</span>
          <span>Growth</span>
        </div>

        <div>~ BY GHUGE GROUP</div>
      </div>

      <style>{`
        .UpLyftBusiness-footer {
          width: 100%;
          background: #071f2d;
          color: #ffffff;
          transition: background 0.35s ease, color 0.35s ease;
        }

        .footer-main {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
          padding: 85px 0 70px;
          display: grid;
          grid-template-columns: 1.5fr 0.8fr 1fr 1fr;
          gap: 65px;
        }

        .footer-brand {
          max-width: 310px;
        }

        .footer-logo {
          display: inline-block;
          color: #ffffff;
          text-decoration: none;
          font-size: 27px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: -0.055em;
          transition: opacity 0.25s ease;
        }

        .footer-logo:hover {
          opacity: 0.85;
        }

        .footer-brand p {
          max-width: 285px;
          margin: 24px 0 27px;
          color: rgba(255, 255, 255, 0.58);
          font-size: 13px;
          line-height: 1.75;
        }

        /* SOCIAL ICONS */
        .footer-socials {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-socials a {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          text-decoration: none;
          transition:
            color 0.2s ease,
            background 0.2s ease,
            border-color 0.2s ease,
            transform 0.2s ease;
        }

        .footer-socials a:hover {
          color: #071f2d;
          background: #69b2e6;
          border-color: #69b2e6;
          transform: translateY(-3px);
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          min-width: 0;
        }

        .footer-heading {
          margin-bottom: 10px;
          color: #69b2e6;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 0.16em;
        }

        .footer-column > a {
          color: rgba(255, 255, 255, 0.68);
          text-decoration: none;
          font-size: 12px;
          line-height: 1.6;
          overflow-wrap: anywhere;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .footer-column > a:hover {
          color: #ffffff;
          transform: translateX(2px);
        }

        /* CONTACT */
        .footer-contact > a:first-of-type {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .footer-location {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: rgba(255, 255, 255, 0.58);
          font-size: 12px;
          line-height: 1.5;
        }

        .footer-location svg,
        .footer-contact > a svg {
          flex-shrink: 0;
          color: #69b2e6;
          margin-top: 2px;
        }

        .footer-enquire {
          display: inline-flex !important;
          align-items: center;
          gap: 8px;
          margin-top: 10px;
          padding: 12px 15px;
          color: #071f2d !important;
          background: #ffffff;
          font-weight: 800;
          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .footer-enquire:hover {
          background: #69b2e6;
          transform: translateY(-2px) !important;
        }

        /* BOTTOM */
        .footer-bottom {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
          padding: 22px 0;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.5);
          font-size: 11px;
        }

        .footer-bottom > div:last-child {
          text-align: right;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .footer-bottom-links span {
          position: relative;
        }

        .footer-bottom-links span:not(:last-child)::after {
          content: "•";
          position: absolute;
          right: -9px;
          color: rgba(105, 178, 230, 0.75);
        }

        /* DARK MODE */
        body.dark-mode .UpLyftBusiness-footer {
          background: #050b10 !important;
          color: #f4f7fa;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        body.dark-mode .footer-logo {
          color: #ffffff;
        }

        body.dark-mode .footer-brand p,
        body.dark-mode .footer-location {
          color: rgba(255, 255, 255, 0.58);
        }

        body.dark-mode .footer-column > a {
          color: rgba(255, 255, 255, 0.68);
        }

        body.dark-mode .footer-column > a:hover {
          color: #ffffff;
        }

        body.dark-mode .footer-socials a {
          color: rgba(255, 255, 255, 0.8);
          border-color: rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.03);
        }

        body.dark-mode .footer-socials a:hover {
          color: #071f2d;
          background: #69b2e6;
          border-color: #69b2e6;
        }

        body.dark-mode .footer-enquire {
          color: #071f2d !important;
          background: #ffffff;
        }

        body.dark-mode .footer-enquire:hover {
          background: #69b2e6;
        }

        body.dark-mode .footer-bottom {
          border-top-color: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.45);
        }

        /* RESPONSIVE */
        @media (max-width: 950px) {
          .footer-main {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 50px 35px;
          }

          .footer-brand {
            max-width: 100%;
          }

          .footer-bottom {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .footer-bottom > div:last-child {
            text-align: left;
          }
        }

        @media (max-width: 600px) {
          .footer-main,
          .footer-bottom {
            width: min(calc(100% - 32px), 1180px);
          }

          .footer-main {
            padding: 65px 0 50px;
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .footer-brand p {
            max-width: 330px;
          }

          .footer-bottom-links {
            flex-wrap: wrap;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-socials a,
          .footer-logo,
          .footer-column > a,
          .footer-enquire {
            transition: none;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
