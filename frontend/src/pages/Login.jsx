import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  LockKeyhole,
  Mail,
  User,
} from "lucide-react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const service = params.get("service");
  const packageName = params.get("package");

  const [mode, setMode] = useState("login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    /*
      DEMO LOGIN

      This stores login state in the browser.
      Later you can replace this with Firebase,
      Supabase, your own backend, etc.
    */

    localStorage.setItem("velqor_logged_in", "true");
    localStorage.setItem("velqor_user_email", email);

    if (service && packageName) {
      navigate(
        `/enquire?service=${service}&package=${packageName}`
      );
    } else {
      navigate("/enquire");
    }
  };

  return (
    <div className="login-page">

      <style>{`
        .login-page {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 80% 15%,
              rgba(105,178,230,.16),
              transparent 28%
            ),
            linear-gradient(
              135deg,
              #ffffff,
              #f4fbff
            );
          color: #111418;
        }

        .login-page *,
        .login-page *::before,
        .login-page *::after {
          box-sizing: border-box;
        }

        .login-wrapper {
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
        }

        .login-card {
          width: min(460px, 100%);
          padding: 42px;
          background: rgba(255,255,255,.92);
          border: 1px solid rgba(17,20,24,.08);
          border-radius: 28px;
          box-shadow:
            0 30px 80px rgba(30,70,95,.10);
          backdrop-filter: blur(15px);
        }

        .login-icon {
          width: 54px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: #eaf7fd;
          color: #2875a5;
          margin-bottom: 27px;
        }

        .login-card h1 {
          margin: 0;
          font-size: 38px;
          line-height: 1;
          letter-spacing: -.045em;
        }

        .login-card > p {
          margin: 15px 0 30px;
          color: #65717a;
          font-size: 14px;
          line-height: 1.7;
        }

        .selected-package {
          padding: 15px 17px;
          margin-bottom: 25px;
          border-radius: 14px;
          background: #f2f9fc;
          border: 1px solid rgba(105,178,230,.18);
          font-size: 12px;
          color: #5d6872;
        }

        .selected-package strong {
          display: block;
          color: #111418;
          margin-top: 4px;
          font-size: 14px;
        }

        .login-field {
          margin-bottom: 17px;
        }

        .login-field label {
          display: block;
          margin-bottom: 8px;
          color: #343e45;
          font-size: 12px;
          font-weight: 700;
        }

        .input-wrap {
          position: relative;
        }

        .input-wrap svg {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #8c989f;
        }

        .login-field input {
          width: 100%;
          height: 50px;
          padding: 0 15px 0 45px;
          border: 1px solid rgba(17,20,24,.10);
          border-radius: 13px;
          outline: none;
          background: white;
          color: #111418;
          font-size: 13px;
          transition: .2s ease;
        }

        .login-field input:focus {
          border-color: #69b2e6;
          box-shadow: 0 0 0 4px rgba(105,178,230,.10);
        }

        .login-submit {
          width: 100%;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 25px;
          border: 0;
          border-radius: 100px;
          background: #071016;
          color: white;
          cursor: pointer;
          font-size: 13px;
          font-weight: 750;
          transition: .25s ease;
        }

        .login-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(7,16,22,.16);
        }

        .login-switch {
          margin-top: 25px;
          text-align: center;
          color: #68747c;
          font-size: 13px;
        }

        .login-switch button {
          border: 0;
          padding: 0;
          background: transparent;
          color: #2875a5;
          cursor: pointer;
          font-weight: 750;
        }

        .login-back {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 25px;
          color: #65717a;
          text-decoration: none;
          font-size: 12px;
        }

        .login-back:hover {
          color: #2875a5;
        }

        @media (max-width: 600px) {
          .login-card {
            padding: 30px 24px;
            border-radius: 22px;
          }

          .login-card h1 {
            font-size: 34px;
          }
        }
      `}</style>

      <Navbar />

      <div className="login-wrapper">

        <div className="login-card">

          <Link
            to="/services"
            className="login-back"
          >
            <ArrowLeft size={15} />
            Back to Services
          </Link>

          <div className="login-icon">
            <LockKeyhole size={23} />
          </div>

          <h1>
            {mode === "login"
              ? "Welcome back."
              : "Create your account."}
          </h1>

          <p>
            {mode === "login"
              ? "Login to connect with UpLyftBusiness and continue your enquiry."
              : "Create your UpLyftBusiness account to connect with our services."}
          </p>

          {service && packageName && (
            <div className="selected-package">
              You're connecting with UpLyftBusiness for:
              <strong>
                {service.replaceAll("-", " ")} — {packageName}
              </strong>
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {mode === "signup" && (
              <div className="login-field">

                <label>
                  Full Name
                </label>

                <div className="input-wrap">
                  <User size={17} />

                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    required
                  />
                </div>

              </div>
            )}

            <div className="login-field">

              <label>
                Email Address
              </label>

              <div className="input-wrap">
                <Mail size={17} />

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                />
              </div>

            </div>

            <div className="login-field">

              <label>
                Password
              </label>

              <div className="input-wrap">
                <LockKeyhole size={17} />

                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />
              </div>

            </div>

            <button
              type="submit"
              className="login-submit"
            >
              {mode === "login"
                ? "Login & Continue"
                : "Create Account & Continue"}

              <ArrowUpRight size={16} />
            </button>

          </form>

          <div className="login-switch">

            {mode === "login" ? (
              <>
                Don't have an account?{" "}
                <button
                  onClick={() => setMode("signup")}
                >
                  Create one
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setMode("login")}
                >
                  Login
                </button>
              </>
            )}

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Login;