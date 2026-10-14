
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  Moon,
  Sun,
} from "lucide-react";

function Navbar() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("UpLyftBusiness_theme") === "dark";
  });

  // Apply theme globally
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);

    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );

    localStorage.setItem(
      "UpLyftBusiness_theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Industries", path: "/industries" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">

          {/* LOGO */}
          <Link to="/" className="logo">
            UpLyftBusiness
          </Link>

          {/* NAVIGATION */}
          <nav className="nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="navbar-actions">

            {/* LOGIN */}
            <Link to="/login" className="nav-button">
              <span>Login</span>
              <ArrowUpRight size={17} />
            </Link>

            {/* THEME TOGGLE */}
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              title={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun size={19} />
              ) : (
                <Moon size={19} />
              )}
            </button>

          </div>
        </div>
      </header>

      <style>{`
        /* BASE */
        html,
        body {
          transition:
            background-color 0.35s ease,
            color 0.35s ease;
        }

        /* NAVBAR */
        .navbar {
          position: relative;
          z-index: 1000;
          transition:
            background-color 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .navbar-inner {
          transition: color 0.35s ease;
        }

        /* LOGO */
        .logo {
          font-size: 25px;
          font-weight: 800;
          letter-spacing: -0.8px;
          white-space: nowrap;
          text-decoration: none;
          transition:
            color 0.3s ease,
            opacity 0.3s ease;
        }

        /* NAVIGATION LINKS */
        .nav-link,
        .nav-button,
        .theme-toggle {
          transition:
            color 0.25s ease,
            background-color 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            transform 0.25s ease;
        }

        /* LOGIN + THEME SPACING */
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .theme-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .theme-toggle:hover {
          transform: translateY(-1px);
        }

        /* LIGHT MODE */
        body:not(.dark-mode) {
          background-color: #ffffff;
          color: #111827;
        }

        body:not(.dark-mode) .navbar {
          background: rgba(255, 255, 255, 0.92);
          border-bottom-color: rgba(15, 23, 42, 0.08);
        }

        body:not(.dark-mode) .logo {
          color: #111827;
        }

        body:not(.dark-mode) .nav-link {
          color: #475569;
        }

        body:not(.dark-mode) .nav-link:hover,
        body:not(.dark-mode) .nav-link.active {
          color: #111827;
        }

        body:not(.dark-mode) .nav-button {
          color: #ffffff;
          background: #111827;
        }

        body:not(.dark-mode) .nav-button:hover {
          background: #1f2937;
        }

        body:not(.dark-mode) .theme-toggle {
          color: #334155;
          background: #f5f7fa;
          border-color: rgba(15, 23, 42, 0.08);
        }

        body:not(.dark-mode) .theme-toggle:hover {
          background: #edf1f5;
        }

        /* DARK MODE */
        body.dark-mode {
          background: #080d12 !important;
          color: #f4f7fa;
        }

        body.dark-mode .navbar {
          background: rgba(8, 13, 18, 0.94) !important;
          border-bottom-color: rgba(255, 255, 255, 0.08) !important;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
        }

        body.dark-mode .logo {
          color: #f7fafc !important;
        }

        body.dark-mode .nav-link {
          color: #aeb9c5 !important;
        }

        body.dark-mode .nav-link:hover,
        body.dark-mode .nav-link.active {
          color: #ffffff !important;
        }

        body.dark-mode .nav-button {
          color: #081018 !important;
          background: #ffffff !important;
        }

        body.dark-mode .nav-button:hover {
          background: #e9eef2 !important;
        }

        body.dark-mode .theme-toggle {
          color: #f6d77a !important;
          background: #151f28 !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
        }

        body.dark-mode .theme-toggle:hover {
          background: #1d2a35 !important;
        }

        /* HOME PAGE — DARK MODE */
        body.dark-mode .site {
          background: #080d12 !important;
          color: #f4f7fa !important;
        }

        body.dark-mode .hero,
        body.dark-mode .statement,
        body.dark-mode .services-section,
        body.dark-mode .about-section,
        body.dark-mode .team-section {
          background: #080d12 !important;
          color: #f4f7fa !important;
        }

        body.dark-mode .hero h1,
        body.dark-mode .statement-text,
        body.dark-mode .section-heading h2,
        body.dark-mode .about-content h2,
        body.dark-mode .team-info h3,
        body.dark-mode .cta-section h2 {
          color: #f7fafc !important;
        }

        body.dark-mode .hero-description,
        body.dark-mode .section-heading p,
        body.dark-mode .service-card p,
        body.dark-mode .about-content p,
        body.dark-mode .team-info p,
        body.dark-mode .cta-section p {
          color: #aeb9c5 !important;
        }

        body.dark-mode .service-card,
        body.dark-mode .team-card {
          background: #101820 !important;
          border-color: rgba(255, 255, 255, 0.08) !important;
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.16) !important;
        }

        body.dark-mode .service-card:hover,
        body.dark-mode .team-card:hover {
          background: #131e27 !important;
          border-color: rgba(255, 255, 255, 0.13) !important;
        }

        body.dark-mode .service-card h3,
        body.dark-mode .team-card h3 {
          color: #f4f7fa !important;
        }

        body.dark-mode .service-icon,
        body.dark-mode .icon-box {
          background: #182630 !important;
          color: #75b9df !important;
          border-color: rgba(255, 255, 255, 0.08) !important;
        }

        body.dark-mode .industries-section {
          background: #0c151d !important;
        }

        body.dark-mode .industry-card {
          background: #111d26 !important;
          border-color: rgba(255, 255, 255, 0.08) !important;
        }

        body.dark-mode .industry-card h3,
        body.dark-mode .industry-card p {
          color: #f0f4f7 !important;
        }

        body.dark-mode .industry-card p {
          color: #aeb9c5 !important;
        }

        body.dark-mode .about-card,
        body.dark-mode .about-visual,
        body.dark-mode .about-content {
          color: #f4f7fa;
        }

        body.dark-mode .about-card {
          background: #101820 !important;
          border-color: rgba(255, 255, 255, 0.08) !important;
        }

        body.dark-mode .visual-text {
          color: rgba(117, 185, 223, 0.18) !important;
        }

        body.dark-mode .cta-section {
          background: #101820 !important;
          border-color: rgba(255, 255, 255, 0.08) !important;
        }

        body.dark-mode .primary-button {
          background: #ffffff !important;
          color: #081018 !important;
        }

        body.dark-mode .secondary-button {
          color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.18) !important;
          background: rgba(255, 255, 255, 0.04) !important;
        }

        body.dark-mode .secondary-button:hover {
          background: rgba(255, 255, 255, 0.08) !important;
        }

        /* FOOTER — DARK MODE */
        body.dark-mode footer {
          background: #05090d !important;
          color: #e9eef2 !important;
          border-top-color: rgba(255, 255, 255, 0.08) !important;
        }

        body.dark-mode footer a {
          color: #aeb9c5 !important;
        }

        body.dark-mode footer a:hover {
          color: #ffffff !important;
        }

        /* FORM ELEMENTS — DARK MODE */
        body.dark-mode input,
        body.dark-mode textarea,
        body.dark-mode select {
          background: #101820 !important;
          color: #f4f7fa !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
        }

        body.dark-mode input::placeholder,
        body.dark-mode textarea::placeholder {
          color: #71808d !important;
        }

        body.dark-mode label {
          color: #dbe3e9 !important;
        }

        /* SCROLLBAR */
        body.dark-mode::-webkit-scrollbar {
          width: 10px;
        }

        body.dark-mode::-webkit-scrollbar-track {
          background: #080d12;
        }

        body.dark-mode::-webkit-scrollbar-thumb {
          background: #263641;
          border-radius: 10px;
        }

        body.dark-mode::-webkit-scrollbar-thumb:hover {
          background: #354957;
        }

        /* ACCESSIBILITY */
        @media (prefers-reduced-motion: reduce) {
          .navbar,
          .nav-link,
          .nav-button,
          .theme-toggle {
            transition: none !important;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .logo {
            font-size: 19px;
          }

          .navbar-actions {
            gap: 14px;
          }

          .nav-button span {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
