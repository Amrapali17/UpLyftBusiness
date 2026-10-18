
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";

function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("UpLyftBusiness_theme") === "dark";
  });

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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
            <img
              src="/logo.png"
              alt="UpLyftBusiness logo"
              className="logo-image"
            />
            <span>UpLyftBusiness</span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="nav-links" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="navbar-actions">
            <Link to="/enquire" className="project-button">
              <span>Start a Project</span>
              <ArrowUpRight size={17} />
            </Link>

            <Link to="/login" className="nav-button">
              <span>Login</span>
              <ArrowUpRight size={17} />
            </Link>

            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              title={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        {mobileMenuOpen && (
          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link to="/enquire" className="mobile-project-button">
              Start a Project <ArrowUpRight size={17} />
            </Link>

            <Link to="/login" className="mobile-login-button">
              Login <ArrowUpRight size={17} />
            </Link>
          </nav>
        )}
      </header>

      <style>{`
        html,
        body {
          transition: background-color 0.35s ease, color 0.35s ease;
        }

        /* NAVBAR */
        .navbar {
<<<<<<< HEAD
  position: fixed;
  top: 0;
  left: 0;
  transform: none;
  width: 100%;
  z-index: 1000;

  border: none;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 0;

  backdrop-filter: blur(16px);
  box-shadow: 0 6px 25px rgba(15, 23, 42, 0.08);

  transition:
    background-color 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}

.navbar-inner {
  width: min(1240px, calc(100% - 48px));
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  transition: color 0.35s ease;
}
=======
          position: fixed;
          top: 12px;
          left: 50%;
          transform: translateX(-50%);
          width: min(1400px, calc(100% - 32px));
          z-index: 1000;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 18px;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
          transition: background-color 0.35s ease,
            border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .navbar-inner {
          min-height: 76px;
          padding: 0 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
        }
>>>>>>> ed951b1c27c1f9a07cc390ca804821a6bc483cb6

        /* LOGO */
        .logo {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          flex-shrink: 0;
          text-decoration: none;
          font-size: 19px;
          font-weight: 750;
          letter-spacing: -0.7px;
          white-space: nowrap;
        }

        .logo-image {
          width: 38px;
          height: 38px;
          object-fit: contain;
        }

        /* DESKTOP LINKS */
        .nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(12px, 1.5vw, 24px);
        }

        .nav-link {
          position: relative;
          text-decoration: none;
          font-size: 13px;
          font-weight: 550;
          white-space: nowrap;
          padding: 10px 0;
          transition: color 0.25s ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 3px;
          left: 0;
          width: 0;
          height: 2px;
          border-radius: 2px;
          background: #3182ce;
          transition: width 0.25s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        /* RIGHT ACTIONS */
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .project-button,
        .nav-button {
          min-height: 42px;
          padding: 0 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 650;
          white-space: nowrap;
          transition: background-color 0.25s ease,
            color 0.25s ease, transform 0.25s ease;
        }

        .project-button {
          color: #fff;
          background: #1769aa;
        }

        .project-button:hover {
          background: #12558b;
          transform: translateY(-1px);
        }

        .nav-button {
          color: #fff;
          background: #111827;
        }

        .nav-button:hover {
          background: #263447;
          transform: translateY(-1px);
        }

        .theme-toggle,
        .mobile-menu-toggle {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          border: 1px solid transparent;
          cursor: pointer;
          transition: background-color 0.25s ease,
            color 0.25s ease, transform 0.25s ease;
        }

        .theme-toggle:hover,
        .mobile-menu-toggle:hover {
          transform: translateY(-1px);
        }

        .mobile-menu-toggle {
          display: none;
        }

        .mobile-nav-links {
          display: none;
        }

        /* LIGHT THEME */
        body:not(.dark-mode) {
          background: #fff;
          color: #111827;
        }

        body:not(.dark-mode) .navbar {
          background: rgba(255, 255, 255, 0.94);
          border-color: rgba(15, 23, 42, 0.08);
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

        body:not(.dark-mode) .theme-toggle,
        body:not(.dark-mode) .mobile-menu-toggle {
          color: #334155;
          background: #f5f7fa;
          border-color: rgba(15, 23, 42, 0.08);
        }

        body:not(.dark-mode) .theme-toggle:hover,
        body:not(.dark-mode) .mobile-menu-toggle:hover {
          background: #e9eef5;
        }

        /* DARK THEME */
        body.dark-mode {
          background: #080d12 !important;
          color: #f4f7fa;
        }

<<<<<<< HEAD
       body.dark-mode .navbar {
  background: rgba(8, 13, 18, 0.96) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
}
=======
        body.dark-mode .navbar {
          background: rgba(8, 13, 18, 0.96);
          border-color: rgba(255, 255, 255, 0.09);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }
>>>>>>> ed951b1c27c1f9a07cc390ca804821a6bc483cb6

        body.dark-mode .logo {
          color: #f7fafc;
        }

        body.dark-mode .nav-link {
          color: #aeb9c5;
        }

        body.dark-mode .nav-link:hover,
        body.dark-mode .nav-link.active {
          color: #fff;
        }

        body.dark-mode .project-button {
          background: #75b9df;
          color: #081018;
        }

        body.dark-mode .project-button:hover {
          background: #9bd0ed;
        }

        body.dark-mode .nav-button {
          color: #081018;
          background: #fff;
        }

        body.dark-mode .nav-button:hover {
          background: #e9eef2;
        }

        body.dark-mode .theme-toggle,
        body.dark-mode .mobile-menu-toggle {
          color: #f6d77a;
          background: #151f28;
          border-color: rgba(255, 255, 255, 0.1);
        }

        body.dark-mode .theme-toggle:hover,
        body.dark-mode .mobile-menu-toggle:hover {
          background: #1d2a35;
        }

        /* KEEP EXISTING SITE DARK MODE SUPPORT */
        body.dark-mode .site,
        body.dark-mode .hero,
        body.dark-mode .statement,
        body.dark-mode .services-section,
        body.dark-mode .about-section,
        body.dark-mode .team-section,
        body.dark-mode .about-page,
        body.dark-mode .services-page,
        body.dark-mode .work-page,
        body.dark-mode .industries-page,
        body.dark-mode .contact-page {
          background: #080d12 !important;
          color: #f4f7fa !important;
        }

        body.dark-mode .hero h1,
        body.dark-mode .statement-text,
        body.dark-mode .section-heading h2,
        body.dark-mode .about-content h2,
        body.dark-mode .team-info h3,
        body.dark-mode .cta-section h2,
        body.dark-mode .about-page h1,
        body.dark-mode .about-page h2,
        body.dark-mode .services-page h1,
        body.dark-mode .services-page h2,
        body.dark-mode .work-page h1,
        body.dark-mode .work-page h2,
        body.dark-mode .industries-page h1,
        body.dark-mode .industries-page h2,
        body.dark-mode .contact-page h1,
        body.dark-mode .contact-page h2 {
          color: #f7fafc !important;
        }

        body.dark-mode .hero-description,
        body.dark-mode .section-heading p,
        body.dark-mode .service-card p,
        body.dark-mode .about-content p,
        body.dark-mode .team-info p,
        body.dark-mode .cta-section p,
        body.dark-mode .about-page p,
        body.dark-mode .services-page p,
        body.dark-mode .work-page p,
        body.dark-mode .industries-page p,
        body.dark-mode .contact-page p {
          color: #aeb9c5 !important;
        }

        body.dark-mode .service-card,
        body.dark-mode .team-card,
        body.dark-mode .about-card,
        body.dark-mode .about-page article,
        body.dark-mode .services-page article,
        body.dark-mode .work-page article,
        body.dark-mode .industries-page article,
        body.dark-mode .contact-page article {
          background: #101820 !important;
          color: #f4f7fa;
          border-color: rgba(255, 255, 255, 0.08) !important;
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.16);
        }

        body.dark-mode .service-card h3,
        body.dark-mode .team-card h3 {
          color: #f4f7fa;
        }

        body.dark-mode .service-icon,
        body.dark-mode .icon-box {
          background: #182630;
          color: #75b9df;
          border-color: rgba(255, 255, 255, 0.08);
        }

        body.dark-mode .industries-section {
          background: #0c151d;
        }

        body.dark-mode .industry-card {
          background: #111d26;
          border-color: rgba(255, 255, 255, 0.08);
        }

        body.dark-mode .industry-card h3,
        body.dark-mode .industry-card p {
          color: #f0f4f7;
        }

        body.dark-mode .visual-text {
          color: rgba(117, 185, 223, 0.18);
        }

        body.dark-mode .cta-section {
          background: #101820;
          border-color: rgba(255, 255, 255, 0.08);
        }

        body.dark-mode .primary-button {
          background: #fff;
          color: #081018;
        }

        body.dark-mode .secondary-button {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.04);
        }

        body.dark-mode footer {
          background: #05090d;
          color: #e9eef2;
          border-top-color: rgba(255, 255, 255, 0.08);
        }

        body.dark-mode footer a {
          color: #aeb9c5;
        }

        body.dark-mode footer a:hover {
          color: #fff;
        }

        body.dark-mode input,
        body.dark-mode textarea,
        body.dark-mode select {
          background: #101820;
          color: #f4f7fa;
          border-color: rgba(255, 255, 255, 0.1);
        }

        body.dark-mode input::placeholder,
        body.dark-mode textarea::placeholder {
          color: #71808d;
        }

        body.dark-mode label {
          color: #dbe3e9;
        }

        /* RESPONSIVE NAVIGATION */
        @media (max-width: 1150px) {
          .navbar-inner {
            gap: 14px;
            padding: 0 16px;
          }

<<<<<<< HEAD
        /* MOBILE */
        @media (max-width: 768px) {

         .navbar-inner {
  width: calc(100% - 32px);
  min-height: 68px;
}
  
=======
>>>>>>> ed951b1c27c1f9a07cc390ca804821a6bc483cb6
          .logo {
            font-size: 17px;
          }

          .nav-links {
            gap: 12px;
          }

          .nav-link {
            font-size: 12px;
          }

          .navbar-actions {
            gap: 7px;
          }

          .project-button,
          .nav-button {
            padding: 0 10px;
          }
        }

        @media (max-width: 960px) {
          .nav-links {
            display: none;
          }

          .navbar-inner {
            min-height: 68px;
          }

          .mobile-menu-toggle {
            display: inline-flex;
          }

          .mobile-nav-links {
            display: flex;
            flex-direction: column;
            gap: 5px;
            padding: 12px 18px 18px;
            border-top: 1px solid rgba(15, 23, 42, 0.08);
          }

          .mobile-nav-links .nav-link {
            padding: 12px 10px;
            font-size: 14px;
            border-radius: 8px;
          }

          .mobile-nav-links .nav-link::after {
            display: none;
          }

          body:not(.dark-mode) .mobile-nav-links .nav-link:hover,
          body:not(.dark-mode) .mobile-nav-links .nav-link.active {
            background: #f1f5f9;
          }

          body.dark-mode .mobile-nav-links {
            border-top-color: rgba(255, 255, 255, 0.09);
          }

          body.dark-mode .mobile-nav-links .nav-link:hover,
          body.dark-mode .mobile-nav-links .nav-link.active {
            background: #15212b;
          }

          .mobile-project-button,
          .mobile-login-button {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 13px 12px;
            margin-top: 4px;
            border-radius: 9px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 650;
          }

          .mobile-project-button {
            background: #1769aa;
            color: #fff;
          }

          .mobile-login-button {
            background: #111827;
            color: #fff;
          }

          body.dark-mode .mobile-project-button {
            background: #75b9df;
            color: #081018;
          }

          body.dark-mode .mobile-login-button {
            background: #fff;
            color: #081018;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            top: 8px;
            width: calc(100% - 16px);
            border-radius: 14px;
          }

          .navbar-inner {
            padding: 0 10px;
            gap: 6px;
          }

          .logo {
            gap: 6px;
            font-size: 15px;
            letter-spacing: -0.4px;
          }

          .logo-image {
            width: 30px;
            height: 30px;
          }

          .navbar-actions {
            gap: 5px;
          }

          .project-button {
            min-height: 38px;
            padding: 0 9px;
            font-size: 11px;
          }

          .project-button svg {
            display: none;
          }

          .nav-button {
            display: none;
          }

          .theme-toggle,
          .mobile-menu-toggle {
            width: 36px;
            height: 36px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .navbar,
          .nav-link,
          .project-button,
          .nav-button,
          .theme-toggle,
          .mobile-menu-toggle {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
