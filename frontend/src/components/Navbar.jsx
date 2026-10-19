
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

function Navbar() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("UpLyftBusiness_theme") === "dark";
    } catch {
      return false;
    }
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Industries", path: "/industries" },
  ];

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";

    try {
      localStorage.setItem(
        "UpLyftBusiness_theme",
        darkMode ? "dark" : "light"
      );
    } catch {
      // Theme still works when localStorage is unavailable.
    }
  }, [darkMode]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setContactDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setContactDropdownOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          {/* BRAND */}
          <Link to="/" className="logo" onClick={closeMenus}>
            <img
              src="/logo.png"
              alt="UpLyftBusiness logo"
              className="logo-image"
            />

            <span className="logo-text">
              <span className="logo-name">UpLyftBusiness</span>
              <span className="logo-company">
                A Ghuge Group Company
              </span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* CONTACT DROPDOWN — NO FEEDBACK */}
            <div
              className="contact-dropdown"
              onMouseEnter={() => setContactDropdownOpen(true)}
              onMouseLeave={() => setContactDropdownOpen(false)}
            >
              <button
                type="button"
                className={`nav-link contact-trigger${
                  location.pathname === "/contact" ? " active" : ""
                }`}
                aria-expanded={contactDropdownOpen}
                onClick={() =>
                  setContactDropdownOpen((current) => !current)
                }
              >
                Contact
                <ChevronDown
                  size={15}
                  className={contactDropdownOpen ? "chevron-open" : ""}
                />
              </button>

              {contactDropdownOpen && (
                <div className="dropdown-menu">
                  <Link
                    to="/contact"
                    className="dropdown-link"
                    onClick={closeMenus}
                  >
                    Contact Us
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="navbar-actions desktop-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              title={darkMode ? "Light mode" : "Dark mode"}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link to="/login" className="login-link">
              Login
            </Link>

            <Link to="/enquire" className="project-button">
              <span>Start a Project</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="mobile-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              title={darkMode ? "Light mode" : "Dark mode"}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen((current) => !current)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU BACKDROP */}
      <div
        className={`mobile-menu-backdrop${
          mobileMenuOpen ? " backdrop-visible" : ""
        }`}
        onClick={closeMenus}
        aria-hidden="true"
      />

      {/* MOBILE MENU */}
      <nav
        className={`mobile-menu${mobileMenuOpen ? " mobile-menu-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >
        <div className="mobile-menu-heading">
          <span>Explore UpLyftBusiness</span>
          <span className="mobile-menu-caption">
            A Ghuge Group Company
          </span>
        </div>

        {navLinks.map((link, index) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            tabIndex={mobileMenuOpen ? 0 : -1}
            className={({ isActive }) =>
              `mobile-nav-link${isActive ? " active" : ""}`
            }
            onClick={closeMenus}
            style={{ "--item-index": index }}
          >
            <span>{link.name}</span>
            <ArrowUpRight size={17} />
          </NavLink>
        ))}

        {/* MOBILE CONTACT LINKS — NO FEEDBACK */}
        <div className="mobile-contact-links">
          <Link
            to="/contact"
            tabIndex={mobileMenuOpen ? 0 : -1}
            onClick={closeMenus}
          >
            Contact Us
          </Link>

          <Link
            to="/login"
            tabIndex={mobileMenuOpen ? 0 : -1}
            onClick={closeMenus}
          >
            Login
          </Link>
        </div>

        <Link
          to="/enquire"
          className="mobile-project-button"
          tabIndex={mobileMenuOpen ? 0 : -1}
          onClick={closeMenus}
        >
          Start a Project
          <ArrowUpRight size={18} />
        </Link>
      </nav>

      <style>{`
        /* FLOATING NAVBAR */
        .navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  border: none;
  border-radius: 0;

  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);

  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);

  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}}

        .navbar-inner {
          width: 100%;
          min-height: 76px;
          padding: 0 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
        }

        /* BRAND */
        .logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          text-decoration: none;
          color: inherit;
          min-width: 0;
        }

        .logo-image {
          width: 40px;
          height: 40px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 3px;
          min-width: 0;
        }

        .logo-name {
          font-size: 19px;
          line-height: 1.1;
          font-weight: 750;
          letter-spacing: -0.7px;
          white-space: nowrap;
          color: #101828;
        }

        .logo-company {
          font-size: 10px;
          line-height: 1.2;
          font-weight: 550;
          letter-spacing: 0.45px;
          white-space: nowrap;
          color: #64748b;
        }

        /* DESKTOP NAVIGATION */
        .desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          flex: 1;
        }

        .nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 10px 11px;
          border: none;
          border-radius: 10px;
          background: transparent;
          color: #536174;
          font-family: inherit;
          font-size: 13px;
          font-weight: 550;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition:
            color 0.2s ease,
            background 0.2s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #2563eb;
          background: rgba(37, 99, 235, 0.07);
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 15px;
          height: 2px;
          border-radius: 10px;
          background: #2563eb;
        }

        .contact-trigger svg {
          transition: transform 0.2s ease;
        }

        .contact-trigger .chevron-open {
          transform: rotate(180deg);
        }

        /* CONTACT DROPDOWN */
        .contact-dropdown {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 12px);
          right: 0;
          width: 190px;
          padding: 7px;
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 14px;
          background: #ffffff;
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.14);
          animation: dropdown-enter 0.18s ease both;
        }

        .dropdown-menu::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: -13px;
          height: 13px;
        }

        .dropdown-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 11px 12px;
          border-radius: 9px;
          color: #334155;
          font-size: 13px;
          text-decoration: none;
          transition:
            color 0.2s ease,
            background 0.2s ease;
        }

        .dropdown-link:hover {
          color: #2563eb;
          background: #eff6ff;
        }

        @keyframes dropdown-enter {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* NAVBAR ACTIONS */
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .theme-toggle,
        .mobile-menu-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          padding: 0;
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 12px;
          background: transparent;
          color: #475569;
          cursor: pointer;
          transition:
            background 0.2s ease,
            color 0.2s ease,
            border-color 0.2s ease,
            transform 0.2s ease;
        }

        .theme-toggle:hover,
        .mobile-menu-toggle:hover {
          background: rgba(37, 99, 235, 0.08);
          border-color: rgba(37, 99, 235, 0.25);
          color: #2563eb;
          transform: translateY(-1px);
        }

        .login-link {
          color: #334155;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .login-link:hover {
          color: #2563eb;
        }

        .project-button,
.mobile-project-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 42px;
  padding: 0 16px;
  border: 1px solid #7dd3fc;
  border-radius: 12px;
  background: #7dd3fc;
  color: #0f172a;
  font-size: 12px;
  font-weight: 650;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 5px 14px rgba(125, 211, 252, 0.25);
  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

        .project-button:hover,
.mobile-project-button:hover {
  background: #38bdf8;
  border-color: #38bdf8;
  box-shadow: 0 8px 20px rgba(56, 189, 248, 0.3);
  transform: translateY(-1px);
}

        .mobile-actions {
          display: none;
          align-items: center;
          gap: 8px;
        }

        /* MOBILE MENU BACKDROP */
        .mobile-menu-backdrop {
          position: fixed;
          inset: 0;
          z-index: 998;
          background: rgba(15, 23, 42, 0.25);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition:
            opacity 0.25s ease,
            visibility 0.25s ease;
        }

        .mobile-menu-backdrop.backdrop-visible {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }

        /* MOBILE MENU */
        .mobile-menu {
          position: fixed;
          top: 86px;
          left: 12px;
          right: 12px;
          z-index: 999;
          max-height: calc(100dvh - 105px);
          overflow-y: auto;
          padding: 18px;
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0 22px 55px rgba(15, 23, 42, 0.18);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(-10px) scale(0.985);
          transform-origin: top center;
          transition:
            opacity 0.25s ease,
            transform 0.25s ease,
            visibility 0.25s ease;
        }

        .mobile-menu.mobile-menu-open {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0) scale(1);
        }

        .mobile-menu-heading {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 5px 4px 16px;
          border-bottom: 1px solid #e8edf4;
          color: #0f172a;
          font-size: 15px;
          font-weight: 750;
        }

        .mobile-menu-caption {
          color: #64748b;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2px;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 10px;
          border-bottom: 1px solid #edf1f6;
          color: #334155;
          font-size: 14px;
          font-weight: 550;
          text-decoration: none;
          animation: mobile-link-enter 0.3s ease both;
          animation-delay: calc(var(--item-index, 0) * 35ms);
          transition:
            color 0.2s ease,
            padding 0.2s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          padding-left: 15px;
          color: #2563eb;
        }

        @keyframes mobile-link-enter {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-contact-links {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 18px;
          padding: 16px 10px;
        }

        .mobile-contact-links a {
          color: #64748b;
          font-size: 12px;
          font-weight: 550;
          text-decoration: none;
        }

        .mobile-contact-links a:hover {
          color: #2563eb;
        }

        .mobile-project-button {
          display: flex;
          width: 100%;
          min-height: 46px;
          margin-top: 4px;
        }

        /* DARK MODE */
        body.dark-mode .navbar {
          background: rgba(8, 13, 22, 0.90);
          border-color: rgba(255, 255, 255, 0.11);
          box-shadow: 0 12px 38px rgba(0, 0, 0, 0.28);
        }

        body.dark-mode .logo-name {
          color: #f8fafc;
        }

        body.dark-mode .logo-company {
          color: #aeb9c8;
        }

        body.dark-mode .nav-link {
          color: #c0cad8;
        }

        body.dark-mode .nav-link:hover,
        body.dark-mode .nav-link.active {
          color: #93baff;
          background: rgba(96, 165, 250, 0.11);
        }

        body.dark-mode .nav-link.active::after {
          background: #60a5fa;
        }

        body.dark-mode .theme-toggle,
        body.dark-mode .mobile-menu-toggle {
          color: #dbe5f2;
          border-color: rgba(255, 255, 255, 0.14);
        }

        body.dark-mode .theme-toggle:hover,
        body.dark-mode .mobile-menu-toggle:hover {
          color: #93baff;
          background: rgba(96, 165, 250, 0.12);
        }

        body.dark-mode .login-link {
          color: #dbe5f2;
        }

        body.dark-mode .login-link:hover {
          color: #93baff;
        }

        body.dark-mode .dropdown-menu,
        body.dark-mode .mobile-menu {
          background: #111827;
          border-color: rgba(255, 255, 255, 0.10);
          box-shadow: 0 22px 55px rgba(0, 0, 0, 0.35);
        }

        body.dark-mode .dropdown-link,
        body.dark-mode .mobile-nav-link {
          color: #d1d9e6;
          border-color: rgba(255, 255, 255, 0.08);
        }

        body.dark-mode .dropdown-link:hover,
        body.dark-mode .mobile-nav-link:hover,
        body.dark-mode .mobile-nav-link.active {
          color: #93baff;
          background: rgba(96, 165, 250, 0.09);
        }

        body.dark-mode .mobile-menu-heading {
          color: #f8fafc;
          border-color: rgba(255, 255, 255, 0.12);
        }

        body.dark-mode .mobile-menu-caption,
        body.dark-mode .mobile-contact-links a {
          color: #9caec3;
        }

        body.dark-mode .mobile-contact-links a:hover {
          color: #93baff;
        }

        /* TABLET */
        @media (max-width: 1120px) {
          .navbar-inner {
            padding: 0 16px;
            gap: 12px;
          }

          .desktop-nav {
            gap: 1px;
          }

          .nav-link {
            padding: 10px 8px;
            font-size: 12px;
          }

          .navbar-actions {
            gap: 9px;
          }

          .logo-name {
            font-size: 17px;
          }

          .project-button {
            padding: 0 12px;
          }
        }

        /* MOBILE / SMALL TABLET */
        @media (max-width: 860px) {
          .navbar {
            top: 10px;
            width: calc(100% - 24px);
            border-radius: 17px;
          }

          .navbar-inner {
            min-height: 68px;
            padding: 0 14px;
          }

          .desktop-nav,
          .desktop-actions {
            display: none;
          }

          .mobile-actions {
            display: flex;
            flex-shrink: 0;
          }

          .logo-image {
            width: 36px;
            height: 36px;
          }

          .logo-name {
            font-size: 17px;
          }

          .mobile-menu {
            top: 88px;
          }
        }

        /* SMALL PHONES */
        @media (max-width: 480px) {
          .navbar {
            top: 8px;
            width: calc(100% - 16px);
            border-radius: 15px;
          }

          .navbar-inner {
            min-height: 64px;
            padding: 0 10px;
            gap: 6px;
          }

          .logo {
            gap: 6px;
          }

          .logo-image {
            width: 30px;
            height: 30px;
          }

          .logo-name {
            font-size: 15px;
            letter-spacing: -0.45px;
          }

          .logo-company {
            font-size: 8px;
            letter-spacing: 0.15px;
          }

          .mobile-actions {
            gap: 5px;
          }

          .theme-toggle,
          .mobile-menu-toggle {
            width: 34px;
            height: 34px;
            border-radius: 10px;
          }

          .mobile-menu {
            top: 78px;
            left: 8px;
            right: 8px;
            padding: 15px;
            border-radius: 17px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .navbar,
          .nav-link,
          .dropdown-menu,
          .mobile-menu,
          .mobile-nav-link,
          .project-button {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
