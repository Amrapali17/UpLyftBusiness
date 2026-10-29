
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  KeyRound,
  LoaderCircle,
  LockKeyhole,
  Mail,
  Moon,
  Phone,
  ShieldCheck,
  Sun,
  UserRound,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || ""
).replace(/\/$/, "");
export default function Login() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("uplyft_theme") === "dark"
  );

  const [mode, setMode] = useState("login");
  const [method, setMethod] = useState("email");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    localStorage.setItem("uplyft_theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    if (resendCountdown <= 0) return;

    const timer = setTimeout(() => {
      setResendCountdown((current) => Math.max(0, current - 1));
    }, 1000);

    return () => clearTimeout(timer);
  }, [resendCountdown]);

  const clearNotices = () => {
    setMessage("");
    setError("");
  };

  const resetOtp = () => {
    setOtp("");
    setOtpSent(false);
    setOtpVerified(false);
    setResendCountdown(0);
  };

  const changeMode = (nextMode) => {
    setMode(nextMode);
    resetOtp();
    setLoginPassword("");
    setNewPassword("");
    setConfirmPassword("");
    clearNotices();
  };

  const changeMethod = (nextMethod) => {
    setMethod(nextMethod);
    resetOtp();
    clearNotices();
  };

  const validateDestination = () => {
    if (mode === "register" && !name.trim()) {
      setError("Please enter your name to create an account.");
      return false;
    }

    if (method === "email") {
      const value = email.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!value) {
        setError("Please enter your email address.");
        return false;
      }

      if (!emailPattern.test(value)) {
        setError("Please enter a valid email address.");
        return false;
      }
    } else {
      const cleanedPhone = phone.replace(/[\s()-]/g, "");

      if (!/^\+?[1-9]\d{7,14}$/.test(cleanedPhone)) {
        setError(
          "Enter a valid phone number with country code, such as +919876543210."
        );
        return false;
      }
    }

    return true;
  };

  const getOtpPayload = () => ({
    method,
    type: method,
    email: method === "email" ? email.trim() : undefined,
    phone:
      method === "phone"
        ? phone.replace(/[\s()-]/g, "")
        : undefined,
    mode,

    // Name is required only during registration.
    name: mode === "register" ? name.trim() : undefined,

    // Compatibility with backends that still expect fullName.
    fullName: mode === "register" ? name.trim() : undefined,
  });

  const sendOtp = async () => {
    clearNotices();

    if (!validateDestination()) return;

    setLoading(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/auth/send-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(getOtpPayload()),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.message || data.error || "Unable to send OTP."
        );
      }

      setOtpSent(true);
      setOtpVerified(false);
      setResendCountdown(30);

      setMessage(
        data.message ||
          `Verification code sent. Check your ${
            method === "email" ? "email inbox" : "phone"
          }.`
      );
    } catch (err) {
      setError(
        err.message ||
          "Could not send the verification code. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    clearNotices();

    if (!otpSent) {
      setError("Please request a verification code first.");
      return;
    }

    if (!/^\d{4,8}$/.test(otp.trim())) {
      setError("Enter the verification code you received.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/auth/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            ...getOtpPayload(),
            otp: otp.trim(),
            token: otp.trim(),
          }),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.message ||
            data.error ||
            "The verification code is invalid."
        );
      }

      if (data.user) {
        localStorage.setItem("uplyft_user", JSON.stringify(data.user));
      }

      setOtpVerified(true);
      if (mode === "register") {
        setMessage("Email verified. Create a password to finish setting up your account.");
      } else {
        setMessage(data.message || "You have been signed in successfully.");
        window.setTimeout(() => {
          navigate(data.redirectTo || "/", { replace: true });
        }, 900);
      }
    } catch (err) {
      setError(
        err.message ||
          "Verification failed. Please check the code and retry."
      );
    } finally {
      setLoading(false);
    }
  };

  const loginWithPassword = async () => {
    clearNotices();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!loginPassword) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email: email.trim().toLowerCase(), password: loginPassword }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || data.error || "Unable to sign in.");
      if (data.user) localStorage.setItem("uplyft_user", JSON.stringify(data.user));
      setMessage(data.message || "Signed in successfully. Redirecting...");
      window.setTimeout(() => navigate(data.redirectTo || "/", { replace: true }), 700);
    } catch (err) {
      setError(err.message || "Sign in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const createPassword = async () => {
    clearNotices();
    if (newPassword.length < 8) {
      setError("Create a password with at least 8 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/set-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email: email.trim().toLowerCase(), password: newPassword, confirmPassword }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || data.error || "Unable to save your password.");
      setNewPassword("");
      setConfirmPassword("");
      resetOtp();
      setMode("login");
      setLoginPassword("");
      setMessage("Account created successfully. Please sign in with your email and new password.");
    } catch (err) {
      setError(err.message || "Unable to create your password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    clearNotices();
    if (mode === "login") {
      await loginWithPassword();
      return;
    }
    if (otpVerified) {
      await createPassword();
      return;
    }
    if (!otpSent) {
      await sendOtp();
      return;
    }
    await verifyOtp();
  };

  const canEditDestination = !otpSent || otpVerified;

  return (
    <div className={`login-page ${isDark ? "dark" : ""}`}>
      <Navbar />

      <main className="login-main">
        <div className="login-background-shape shape-one" />
        <div className="login-background-shape shape-two" />

        <div className="login-layout">
          <section className="login-intro">
            <Link to="/" className="back-home">
              <ArrowLeft size={16} />
              Back to home
            </Link>

            <div className="intro-content">
              <div className="brand-mark">
                <span>U</span>
              </div>

              <p className="eyebrow">WELCOME TO UPLYFTBUSINESS</p>

              <h1>
                Your next stage
                <br />
                <span>starts here.</span>
              </h1>

              <p className="intro-description">
                Access your UpLyftBusiness account and stay connected
                with the digital solutions that help your business move
                forward.
              </p>

              <div className="trust-points">
                <div className="trust-point">
                  <span className="trust-icon">
                    <ShieldCheck size={19} />
                  </span>
                  <div>
                    <strong>Secure verification</strong>
                    <p>Verify your identity with a one-time code.</p>
                  </div>
                </div>

                <div className="trust-point">
                  <span className="trust-icon">
                    <KeyRound size={19} />
                  </span>
                  <div>
                    <strong>Simple access</strong>
                    <p>Choose email or mobile verification.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="intro-footer">
              Build. Grow. Scale.
              <span> &nbsp;|&nbsp; UpLyftBusiness</span>
            </p>
          </section>

          <section className="login-form-section">
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setIsDark((current) => !current)}
              aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
              title={`Switch to ${isDark ? "light" : "dark"} theme`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="login-card">
              <div className="mobile-brand-mark">
                <span>U</span>
              </div>

              <div className="form-heading">
                <p className="eyebrow">
                  {mode === "register" ? "GET STARTED" : "YOUR ACCOUNT"}
                </p>

                <h2>
                  {mode === "register"
                    ? "Create your account"
                    : "Welcome back"}
                </h2>

                <p>
                  {mode === "register"
                    ? "Verify your email, create a password, and set up your account."
                    : "Sign in securely with your email and password."}
                </p>
              </div>

              <div
                className="mode-switch"
                role="group"
                aria-label="Account mode"
              >
                <button
                  type="button"
                  className={mode === "login" ? "active" : ""}
                  onClick={() => changeMode("login")}
                >
                  Sign in
                </button>

                <button
                  type="button"
                  className={mode === "register" ? "active" : ""}
                  onClick={() => changeMode("register")}
                >
                  Create account
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                {mode === "login" ? (
                  <>
                    <div className="form-field">
                      <label htmlFor="email">Email address</label>
                      <div className="input-wrap">
                        <Mail size={18} />
                        <input id="email" name="email" type="email" placeholder="you@example.com" value={email}
                          onChange={(event) => { setEmail(event.target.value); clearNotices(); }}
                          autoComplete="email" required />
                      </div>
                    </div>
                    <div className="form-field">
                      <label htmlFor="loginPassword">Password</label>
                      <div className="input-wrap">
                        <LockKeyhole size={18} />
                        <input id="loginPassword" name="password" type="password" placeholder="Enter your password"
                          value={loginPassword} onChange={(event) => { setLoginPassword(event.target.value); clearNotices(); }}
                          autoComplete="current-password" required />
                      </div>
                    </div>
                  </>
                ) : otpVerified ? (
                  <>
                    <div className="otp-heading">
                      <div><h3>Create your password</h3><p>Your email is verified. Set a password to finish registration.</p></div>
                      <span className="secure-label"><LockKeyhole size={13} /> Secure</span>
                    </div>
                    <div className="form-field">
                      <label htmlFor="newPassword">Create password</label>
                      <div className="input-wrap">
                        <LockKeyhole size={18} />
                        <input id="newPassword" name="newPassword" type="password" placeholder="At least 8 characters"
                          value={newPassword} onChange={(event) => { setNewPassword(event.target.value); clearNotices(); }}
                          autoComplete="new-password" minLength={8} required />
                      </div>
                      <p className="field-hint">Use at least 8 characters. Avoid using a password you use elsewhere.</p>
                    </div>
                    <div className="form-field">
                      <label htmlFor="confirmPassword">Confirm password</label>
                      <div className="input-wrap">
                        <LockKeyhole size={18} />
                        <input id="confirmPassword" name="confirmPassword" type="password" placeholder="Enter password again"
                          value={confirmPassword} onChange={(event) => { setConfirmPassword(event.target.value); clearNotices(); }}
                          autoComplete="new-password" minLength={8} required />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="form-field">
                      <label htmlFor="name">Full name</label>
                      <div className="input-wrap"><UserRound size={18} /><input id="name" name="name" type="text"
                        placeholder="Enter your full name" value={name}
                        onChange={(event) => { setName(event.target.value); clearNotices(); }}
                        autoComplete="name" required /></div>
                    </div>
                    <div className="form-field">
                      <label htmlFor="registerEmail">Email address</label>
                      <div className="input-wrap"><Mail size={18} /><input id="registerEmail" name="email" type="email"
                        placeholder="you@example.com" value={email}
                        onChange={(event) => { setEmail(event.target.value); if (otpSent) resetOtp(); clearNotices(); }}
                        autoComplete="email" required disabled={otpSent} /></div>
                    </div>
                    {otpSent && <div className="form-field otp-field">
                      <label htmlFor="otp">Email verification code</label>
                      <div className="input-wrap"><KeyRound size={18} /><input id="otp" name="otp" type="text" inputMode="numeric"
                        autoComplete="one-time-code" placeholder="Enter 6-digit code" value={otp}
                        onChange={(event) => { setOtp(event.target.value.replace(/\D/g, "").slice(0, 6)); clearNotices(); }}
                        maxLength={6} required /></div>
                      <div className="otp-actions"><span>Didn't receive the code?</span>
                        <button type="button" className="resend-button" onClick={sendOtp} disabled={loading || resendCountdown > 0}>
                          {resendCountdown > 0 ? `Resend in ${resendCountdown}s` : "Resend OTP"}
                        </button>
                      </div>
                    </div>}
                  </>
                )}

                {message && <div className="notice success-notice" role="status"><CheckCircle2 size={17} /><span>{message}</span></div>}
                {error && <div className="notice error-notice" role="alert"><span>{error}</span></div>}

                <button type="submit" className="primary-button" disabled={loading}>
                  {loading ? <><LoaderCircle className="spinner" size={18} /> Please wait...</> : mode === "login" ? <>{"Sign in"}<ArrowRight size={18} /></> : otpVerified ? <>Create password <ArrowRight size={18} /></> : otpSent ? <>Verify email <ArrowRight size={18} /></> : <>Send verification code <ArrowRight size={18} /></>}
                </button>
                <p className="terms-text">
                  By continuing, you agree to our{" "}
                  <Link to="/terms">Terms of Service</Link> and{" "}
                  <Link to="/privacy">Privacy Policy</Link>.
                </p>
              </form>

              <div className="card-footer">
                <span>Need help?</span>
                <Link to="/contact">
                  Contact our team <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <p className="copyright">
              © {new Date().getFullYear()} UpLyftBusiness. All rights reserved.
            </p>
          </section>
        </div>
      </main>

      <Footer />

      <style>{`
        .login-page {
          --login-blue: #234f91;
          --login-blue-dark: #102b52;
          --login-blue-soft: #e8eef8;
          --login-text: #12213a;
          --login-muted: #66758d;
          --login-border: #d9e1ed;
          --login-surface: #ffffff;
          --login-page-bg: #f3f6fb;
          --login-input-bg: #f8faff;
          --login-shadow: 0 24px 70px rgba(10, 31, 66, 0.12);
          min-height: 100vh;
          background: var(--login-page-bg);
          color: var(--login-text);
          transition: background 0.25s ease, color 0.25s ease;
        }

        .login-page *,
        .login-page *::before,
        .login-page *::after {
          box-sizing: border-box;
        }

        .login-page.dark {
          --login-blue: #91baff;
          --login-blue-dark: #c0d7ff;
          --login-blue-soft: #1b3153;
          --login-text: #edf3ff;
          --login-muted: #a6b5cc;
          --login-border: #2c3c55;
          --login-surface: #101d32;
          --login-page-bg: #081426;
          --login-input-bg: #0b172a;
          --login-shadow: 0 24px 70px rgba(0, 0, 0, 0.3);
        }

        .login-main {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          min-height: 750px;
          padding: 56px 24px 64px;
          background:
            radial-gradient(ellipse at 8% 12%, rgba(35, 79, 145, 0.09), transparent 34%),
            radial-gradient(ellipse at 90% 90%, rgba(35, 79, 145, 0.08), transparent 34%),
            var(--login-page-bg);
        }

        .login-background-shape {
          position: absolute;
          z-index: -1;
          border: 1px solid rgba(35, 79, 145, 0.09);
          border-radius: 50%;
          pointer-events: none;
        }

        .shape-one {
          width: 390px;
          height: 390px;
          top: -190px;
          right: -100px;
        }

        .shape-two {
          width: 270px;
          height: 270px;
          bottom: -150px;
          left: -90px;
        }

        .login-layout {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          width: 100%;
          max-width: 1110px;
          min-height: 620px;
          margin: 0 auto;
          overflow: hidden;
          border: 1px solid var(--login-border);
          border-radius: 28px;
          background: var(--login-surface);
          box-shadow: var(--login-shadow);
        }

        .login-intro {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-width: 0;
          padding: 38px 42px 32px;
          color: #fff;
          background:
            radial-gradient(circle at 100% 0%, rgba(90, 139, 205, 0.25), transparent 40%),
            linear-gradient(145deg, #173c70 0%, #0d2850 48%, #071a35 100%);
        }

        .back-home {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          color: #dbe7fa;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
        }

        .back-home:hover {
          color: #fff;
        }

        .intro-content {
          margin: 50px 0;
        }

        .brand-mark,
        .mobile-brand-mark {
          display: grid;
          place-items: center;
          width: 54px;
          height: 54px;
          border: 1px solid rgba(255, 255, 255, 0.23);
          border-radius: 17px;
          background: linear-gradient(145deg, #315f9c, #071a35);
          color: #fff;
          font-size: 29px;
          font-weight: 800;
          letter-spacing: -2px;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
        }

        .eyebrow {
          margin: 24px 0 10px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .login-intro .eyebrow {
          color: #b8cdef;
        }

        .login-intro h1 {
          margin: 0;
          color: #fff;
          font-size: clamp(36px, 4vw, 49px);
          font-weight: 750;
          letter-spacing: -2px;
          line-height: 1.12;
        }

        .login-intro h1 span {
          color: #b8d2ff;
        }

        .intro-description {
          max-width: 360px;
          margin: 22px 0 0;
          color: #d3def0;
          font-size: 14px;
          line-height: 1.85;
        }

        .trust-points {
          display: grid;
          gap: 21px;
          margin-top: 38px;
        }

        .trust-point {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .trust-icon {
          display: grid;
          place-items: center;
          flex: 0 0 42px;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.08);
          color: #d3e2ff;
        }

        .trust-point strong {
          display: block;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
        }

        .trust-point p {
          margin: 5px 0 0;
          color: #c2d0e6;
          font-size: 11px;
          line-height: 1.6;
        }

        .intro-footer {
          margin: 0;
          color: #fff;
          font-size: 13px;
          font-weight: 750;
          letter-spacing: 0.2px;
        }

        .intro-footer span {
          color: #b8cdef;
          font-weight: 500;
        }

        .login-form-section {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 0;
          padding: 55px 40px 25px;
          background: var(--login-surface);
        }

        .theme-toggle {
          position: absolute;
          top: 22px;
          right: 24px;
          display: grid;
          place-items: center;
          width: 40px;
          height: 40px;
          border: 1px solid var(--login-border);
          border-radius: 12px;
          background: var(--login-surface);
          color: var(--login-text);
          cursor: pointer;
        }

        .theme-toggle:hover {
          border-color: var(--login-blue);
          background: var(--login-blue-soft);
        }

        .login-card {
          width: 100%;
          max-width: 410px;
          margin: auto 0;
        }

        .mobile-brand-mark {
          display: none;
        }

        .form-heading .eyebrow {
          margin: 0 0 9px;
          color: var(--login-blue);
        }

        .form-heading h2 {
          margin: 0;
          color: var(--login-text);
          font-size: 29px;
          font-weight: 760;
          letter-spacing: -1px;
          line-height: 1.25;
        }

        .form-heading > p:last-child {
          margin: 9px 0 0;
          color: var(--login-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        .mode-switch {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px;
          margin: 26px 0 24px;
          padding: 4px;
          border: 1px solid var(--login-border);
          border-radius: 12px;
          background: var(--login-input-bg);
        }

        .mode-switch button {
          min-height: 40px;
          border: 0;
          border-radius: 9px;
          background: transparent;
          color: var(--login-muted);
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .mode-switch button.active {
          background: var(--login-surface);
          color: var(--login-blue);
          box-shadow: 0 2px 8px rgba(10, 31, 66, 0.08);
        }

        .otp-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 13px;
        }

        .otp-heading h3 {
          margin: 0;
          color: var(--login-text);
          font-size: 14px;
          font-weight: 750;
        }

        .otp-heading p {
          margin: 5px 0 0;
          color: var(--login-muted);
          font-size: 11px;
          line-height: 1.6;
        }

        .secure-label {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          flex-shrink: 0;
          padding: 6px 8px;
          border: 1px solid var(--login-border);
          border-radius: 7px;
          color: var(--login-muted);
          font-size: 10px;
          font-weight: 700;
        }

        .method-switch {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 21px;
        }

        .method-switch button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 46px;
          padding: 10px;
          border: 1px solid var(--login-border);
          border-radius: 11px;
          background: var(--login-surface);
          color: var(--login-muted);
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .method-switch button.active {
          border-color: var(--login-blue);
          background: var(--login-blue-soft);
          color: var(--login-blue);
          box-shadow: inset 0 0 0 1px var(--login-blue);
        }

        .method-switch button:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }

        .form-field {
          margin-bottom: 18px;
        }

        .form-field label {
          display: block;
          margin-bottom: 8px;
          color: var(--login-text);
          font-size: 12px;
          font-weight: 700;
        }

        .input-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 48px;
          padding: 0 13px;
          border: 1px solid var(--login-border);
          border-radius: 11px;
          background: var(--login-input-bg);
          color: var(--login-muted);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .input-wrap:focus-within {
          border-color: var(--login-blue);
          box-shadow: 0 0 0 3px rgba(35, 79, 145, 0.1);
        }

        .input-wrap input {
          width: 100%;
          min-width: 0;
          min-height: 46px;
          padding: 0;
          border: 0;
          outline: none;
          background: transparent;
          color: var(--login-text);
          font: inherit;
          font-size: 13px;
        }

        .input-wrap input::placeholder {
          color: var(--login-muted);
          opacity: 0.7;
        }

        .input-wrap input:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }

        .field-hint {
          margin: 7px 0 0;
          color: var(--login-muted);
          font-size: 10px;
          line-height: 1.5;
        }

        .otp-field {
          margin-top: 2px;
        }

        .otp-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 9px;
          color: var(--login-muted);
          font-size: 10px;
        }

        .resend-button {
          padding: 0;
          border: 0;
          background: transparent;
          color: var(--login-blue);
          font: inherit;
          font-weight: 750;
          cursor: pointer;
        }

        .resend-button:disabled {
          cursor: not-allowed;
          opacity: 0.55;
        }

        .verified-icon {
          flex-shrink: 0;
          color: #16a36a;
        }

        .notice {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin: 12px 0;
          padding: 11px 12px;
          border: 1px solid transparent;
          border-radius: 10px;
          font-size: 11px;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .success-notice {
          border-color: #b9e7d1;
          background: #edf9f2;
          color: #176b47;
        }

        .error-notice {
          border-color: #f0c7c7;
          background: #fff1f1;
          color: #a52e2e;
        }

        .dark .success-notice {
          border-color: #245e49;
          background: #102c25;
          color: #a9e8c8;
        }

        .dark .error-notice {
          border-color: #673b45;
          background: #321c26;
          color: #ffb9c2;
        }

        .primary-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          min-height: 49px;
          margin-top: 22px;
          padding: 12px 16px;
          border: 0;
          border-radius: 11px;
          background: linear-gradient(105deg, #234f91, #102b52);
          box-shadow: 0 8px 20px rgba(16, 43, 82, 0.22);
          color: #fff;
          font-size: 13px;
          font-weight: 750;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .primary-button:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 11px 24px rgba(16, 43, 82, 0.28);
        }

        .primary-button:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }

        .verified-banner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          width: 100%;
          min-height: 49px;
          margin-top: 22px;
          padding: 12px;
          border: 1px solid #b9e7d1;
          border-radius: 11px;
          background: #edf9f2;
          color: #176b47;
          font-size: 13px;
          font-weight: 750;
        }

        .dark .verified-banner {
          border-color: #245e49;
          background: #102c25;
          color: #a9e8c8;
        }

        .spinner {
          animation: login-spin 0.9s linear infinite;
        }

        @keyframes login-spin {
          to {
            transform: rotate(360deg);
          }
        }

        .terms-text {
          margin: 15px 0 0;
          color: var(--login-muted);
          font-size: 10px;
          line-height: 1.8;
          text-align: center;
        }

        .terms-text a,
        .card-footer a {
          color: var(--login-blue);
          font-weight: 700;
          text-decoration: none;
        }

        .terms-text a:hover,
        .card-footer a:hover {
          text-decoration: underline;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 24px;
          padding-top: 19px;
          border-top: 1px solid var(--login-border);
          color: var(--login-muted);
          font-size: 11px;
        }

        .card-footer a {
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .copyright {
          margin: 24px 0 0;
          color: var(--login-muted);
          font-size: 10px;
          text-align: center;
        }

        @media (max-width: 850px) {
          .login-main {
            min-height: auto;
            padding: 35px 18px 45px;
          }

          .login-layout {
            grid-template-columns: 1fr;
            max-width: 540px;
            border-radius: 23px;
          }

          .login-intro {
            display: none;
          }

          .login-form-section {
            padding: 55px 34px 26px;
          }

          .mobile-brand-mark {
            display: grid;
            width: 45px;
            height: 45px;
            margin-bottom: 23px;
            border: 0;
            border-radius: 13px;
            background: linear-gradient(145deg, #173c70, #071a35);
            font-size: 25px;
          }

          .theme-toggle {
            top: 17px;
            right: 17px;
          }

          .login-card {
            max-width: none;
          }

          .copyright {
            margin-top: 25px;
          }
        }

        @media (max-width: 480px) {
          .login-main {
            padding: 20px 12px 30px;
          }

          .login-layout {
            border-radius: 18px;
          }

          .login-form-section {
            padding: 54px 20px 23px;
          }

          .form-heading h2 {
            font-size: 25px;
          }

          .mode-switch {
            margin: 22px 0;
          }

          .method-switch {
            gap: 7px;
          }

          .method-switch button {
            gap: 6px;
            padding: 9px 6px;
            font-size: 11px;
          }

          .otp-heading {
            align-items: flex-start;
          }

          .secure-label {
            font-size: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .login-page *,
          .login-page *::before,
          .login-page *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
