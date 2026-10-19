
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  LockKeyhole,
  Mail,
  Phone,
  RefreshCw,
  ShieldCheck,
  User,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const API_BASE_URL = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

async function postJSON(path, payload) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }

  return data;
}

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");
  const [method, setMethod] = useState("email");

  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");

  const [requestId, setRequestId] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [resendSeconds, setResendSeconds] = useState(0);

  const service = location.state?.service || "";
  const packageName = location.state?.packageName || "";

  useEffect(() => {
    if (resendSeconds <= 0) return undefined;

    const timer = window.setTimeout(() => {
      setResendSeconds((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [resendSeconds]);

  function resetOTP() {
    setOtp("");
    setRequestId("");
    setOtpSent(false);
    setOtpVerified(false);
    setResendSeconds(0);
    setMessage("");
    setError("");
  }

  function changeMode(nextMode) {
    setMode(nextMode);
    resetOTP();
  }

  function changeMethod(nextMethod) {
    setMethod(nextMethod);
    setContact("");
    resetOTP();
  }

  function changeContact(value) {
    setContact(value);
    resetOTP();
  }

  function validateDetails() {
    if (mode === "register" && !fullName.trim()) {
      setError("Please enter your full name.");
      return false;
    }

    if (!contact.trim()) {
      setError(
        method === "email"
          ? "Please enter your email address."
          : "Please enter your mobile number."
      );
      return false;
    }

    if (method === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(contact.trim())) {
        setError("Please enter a valid email address.");
        return false;
      }
    }

    if (method === "phone") {
      const digits = contact.replace(/\D/g, "");

      if (digits.length < 10 || digits.length > 15) {
        setError("Please enter a valid mobile number with country code if needed.");
        return false;
      }
    }

    return true;
  }

  async function handleSendOTP(event) {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!validateDetails()) return;

    setLoading(true);

    try {
      const payload = {
        mode,
        method,
        name: mode === "register" ? fullName.trim() : undefined,
        email: method === "email" ? contact.trim().toLowerCase() : undefined,
        phone: method === "phone" ? contact.trim() : undefined,
      };

      const data = await postJSON("/api/auth/send-otp", payload);

      if (!data.requestId) {
        throw new Error("The server did not return an OTP request ID.");
      }

      setRequestId(data.requestId);
      setOtpSent(true);
      setOtpVerified(false);
      setOtp("");
      setResendSeconds(30);
      setMessage(
        data.message ||
          `We've sent a verification code to your ${
            method === "email" ? "email address" : "mobile number"
          }.`
      );
    } catch (err) {
      setError(
        err.message ||
          "Unable to send the verification code. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleVerifyOTP(event) {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!otpSent || !requestId) {
      setError("Please request a verification code first.");
      return;
    }

    if (!/^\d{4,8}$/.test(otp.trim())) {
      setError("Enter the verification code sent to you.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        requestId,
        otp: otp.trim(),
        mode,
        method,
        name: mode === "register" ? fullName.trim() : undefined,
        email: method === "email" ? contact.trim().toLowerCase() : undefined,
        phone: method === "phone" ? contact.trim() : undefined,
      };

      const data = await postJSON("/api/auth/verify-otp", payload);

      if (!data.success) {
        throw new Error(data.message || "Verification failed.");
      }

      setOtpVerified(true);
      setMessage("Verification successful. Redirecting...");

      const redirectTo = location.state?.from || "/enquire";

      window.setTimeout(() => {
        navigate(redirectTo, {
          replace: true,
          state: {
            ...location.state,
            authenticated: true,
            user: data.user || null,
            service,
            packageName,
          },
        });
      }, 700);
    } catch (err) {
      setError(
        err.message || "Invalid or expired code. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleResendOTP() {
    if (resendSeconds > 0 || loading) return;

    setError("");
    setMessage("");
    setLoading(true);

    try {
      const payload = {
        mode,
        method,
        name: mode === "register" ? fullName.trim() : undefined,
        email: method === "email" ? contact.trim().toLowerCase() : undefined,
        phone: method === "phone" ? contact.trim() : undefined,
      };

      const data = await postJSON("/api/auth/send-otp", payload);

      if (!data.requestId) {
        throw new Error("The server did not return an OTP request ID.");
      }

      setRequestId(data.requestId);
      setOtp("");
      setOtpVerified(false);
      setResendSeconds(30);
      setMessage(data.message || "A new verification code has been sent.");
    } catch (err) {
      setError(err.message || "Could not resend the code. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <main className="auth-page">
        <div className="auth-background-glow auth-glow-one" />
        <div className="auth-background-glow auth-glow-two" />

        <div className="auth-layout">
          <section className="auth-intro">
            <div className="auth-eyebrow">
              <span className="auth-eyebrow-dot" />
              DIGITAL & TECHNOLOGY
            </div>

            <h1>
              Your next step
              <br />
              starts <span>here.</span>
            </h1>

            <p className="auth-intro-description">
              Access your UpLyftBusiness account to continue your journey
              toward smarter digital solutions and business growth.
            </p>

            <div className="auth-benefits">
              <div className="auth-benefit">
                <span className="auth-benefit-icon">
                  <ShieldCheck size={19} />
                </span>
                <div>
                  <strong>Secure verification</strong>
                  <p>Verify with an email or mobile OTP.</p>
                </div>
              </div>

              <div className="auth-benefit">
                <span className="auth-benefit-icon">
                  <LockKeyhole size={19} />
                </span>
                <div>
                  <strong>Simple access</strong>
                  <p>One verification step to get started.</p>
                </div>
              </div>
            </div>

            <div className="auth-intro-footer">
              <span>Build.</span>
              <span className="auth-footer-separator">•</span>
              <span>Grow.</span>
              <span className="auth-footer-separator">•</span>
              <span>Scale.</span>
            </div>
          </section>

          <section className="auth-card">
            <div className="auth-card-top">
              <div className="auth-brand-mark">U</div>

              <div className="auth-card-heading">
                <h2>
                  {mode === "login" ? "Welcome back" : "Create your account"}
                </h2>
                <p>
                  {mode === "login"
                    ? "Sign in to continue to your account."
                    : "Join us and get started with UpLyftBusiness."}
                </p>
              </div>
            </div>

            <div className="auth-mode-toggle">
              <button
                type="button"
                className={mode === "login" ? "active" : ""}
                onClick={() => changeMode("login")}
              >
                Login
              </button>

              <button
                type="button"
                className={mode === "register" ? "active" : ""}
                onClick={() => changeMode("register")}
              >
                Register
              </button>
            </div>

            <div className="auth-method-heading">
              <span>Continue with</span>
              <span className="auth-method-line" />
            </div>

            <div className="auth-method-toggle">
              <button
                type="button"
                className={method === "email" ? "active" : ""}
                onClick={() => changeMethod("email")}
              >
                <Mail size={16} />
                Email OTP
              </button>

              <button
                type="button"
                className={method === "phone" ? "active" : ""}
                onClick={() => changeMethod("phone")}
              >
                <Phone size={16} />
                Mobile OTP
              </button>
            </div>

            <form
              className="auth-form"
              onSubmit={otpSent ? handleVerifyOTP : handleSendOTP}
            >
              {mode === "register" && (
                <div className="auth-field">
                  <label htmlFor="auth-name">Full name</label>

                  <div className="auth-input-wrap">
                    <User size={18} />
                    <input
                      id="auth-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      autoComplete="name"
                      required
                      disabled={otpSent || loading}
                    />
                  </div>
                </div>
              )}

              <div className="auth-field">
                <label htmlFor="auth-contact">
                  {method === "email" ? "Email address" : "Mobile number"}
                </label>

                <div className="auth-input-wrap">
                  {method === "email" ? (
                    <Mail size={18} />
                  ) : (
                    <Phone size={18} />
                  )}

                  <input
                    id="auth-contact"
                    type={method === "email" ? "email" : "tel"}
                    placeholder={
                      method === "email"
                        ? "you@example.com"
                        : "Enter mobile number"
                    }
                    value={contact}
                    onChange={(event) => changeContact(event.target.value)}
                    autoComplete={
                      method === "email" ? "email" : "tel"
                    }
                    required
                    disabled={otpSent || loading}
                  />

                  {otpSent && (
                    <button
                      type="button"
                      className="auth-change-button"
                      onClick={() => {
                        setOtpSent(false);
                        setOtpVerified(false);
                        setOtp("");
                        setRequestId("");
                        setMessage("");
                        setError("");
                      }}
                      disabled={loading}
                    >
                      Change
                    </button>
                  )}
                </div>
              </div>

              {otpSent && (
                <div className="auth-field auth-otp-field">
                  <div className="auth-otp-label-row">
                    <label htmlFor="auth-otp">Verification code</label>

                    <button
                      type="button"
                      className="auth-resend-button"
                      onClick={handleResendOTP}
                      disabled={resendSeconds > 0 || loading}
                    >
                      <RefreshCw size={13} />
                      {resendSeconds > 0
                        ? `Resend in ${resendSeconds}s`
                        : "Resend code"}
                    </button>
                  </div>

                  <div className="auth-input-wrap auth-otp-input-wrap">
                    <ShieldCheck size={18} />

                    <input
                      id="auth-otp"
                      type="text"
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(event) =>
                        setOtp(
                          event.target.value.replace(/\D/g, "").slice(0, 8)
                        )
                      }
                      maxLength={8}
                      required
                      disabled={loading || otpVerified}
                    />
                  </div>

                  <p className="auth-otp-hint">
                    Enter the code sent to your{" "}
                    {method === "email" ? "email" : "mobile"}.
                  </p>
                </div>
              )}

              {error && (
                <div className="auth-alert auth-alert-error" role="alert">
                  {error}
                </div>
              )}

              {message && (
                <div className="auth-alert auth-alert-success" role="status">
                  <CheckCircle2 size={16} />
                  <span>{message}</span>
                </div>
              )}

              <button
                className="auth-submit"
                type="submit"
                disabled={loading || otpVerified}
              >
                {loading ? (
                  <>
                    <span className="auth-spinner" />
                    Please wait...
                  </>
                ) : otpSent ? (
                  <>
                    Verify OTP
                    <ArrowRight size={17} />
                  </>
                ) : (
                  <>
                    Send OTP
                    <ArrowUpRight size={17} />
                  </>
                )}
              </button>

              {otpSent && (
                <button
                  type="button"
                  className="auth-back-button"
                  onClick={() => {
                    setOtpSent(false);
                    setOtpVerified(false);
                    setOtp("");
                    setRequestId("");
                    setMessage("");
                    setError("");
                  }}
                  disabled={loading}
                >
                  <ArrowLeft size={15} />
                  Back to details
                </button>
              )}
            </form>

            <div className="auth-card-bottom">
              <LockKeyhole size={14} />
              <span>Your verification details are protected.</span>
            </div>

            <p className="auth-terms">
              By continuing, you agree to our{" "}
              <Link to="/contact">Terms of Service</Link> and{" "}
              <Link to="/contact">Privacy Policy</Link>.
            </p>
          </section>
        </div>
      </main>

      <Footer />

      <style>{`
        .auth-page {
          --navy: #0B1F3A;
          --navy-primary: #17365D;
          --navy-hover: #102A4C;
          --steel-blue: #496A91;
          --blue-grey: #EAF0F7;
          --border-color: #DCE4EE;
          --text-primary: #14243A;
          --text-secondary: #68778C;
          --surface: #FFFFFF;

          position: relative;
          isolation: isolate;
          overflow: hidden;
          min-height: calc(100vh - 140px);
          padding: 76px 24px 88px;
          background: #F5F7FB;
          color: var(--text-primary);
        }

        .auth-page * {
          box-sizing: border-box;
        }

        .auth-background-glow {
          position: absolute;
          z-index: -1;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(2px);
        }

        .auth-glow-one {
          width: 440px;
          height: 440px;
          top: -210px;
          right: -100px;
          background: radial-gradient(
            circle,
            rgba(23, 54, 93, 0.10),
            transparent 70%
          );
        }

        .auth-glow-two {
          width: 400px;
          height: 400px;
          bottom: -220px;
          left: -150px;
          background: radial-gradient(
            circle,
            rgba(73, 106, 145, 0.09),
            transparent 70%
          );
        }

        .auth-layout {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, 460px);
          align-items: center;
          gap: clamp(45px, 8vw, 110px);
        }

        .auth-intro {
          max-width: 510px;
        }

        .auth-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 13px;
          border: 1px solid #D8E2EE;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.78);
          color: var(--navy-primary);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .auth-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--steel-blue);
          box-shadow: 0 0 0 4px rgba(73, 106, 145, 0.12);
        }

        .auth-intro h1 {
          margin: 25px 0 18px;
          color: var(--navy);
          font-size: clamp(42px, 5.2vw, 66px);
          line-height: 1.08;
          letter-spacing: -2.8px;
          font-weight: 800;
        }

        .auth-intro h1 span {
          color: var(--steel-blue);
        }

        .auth-intro-description {
          max-width: 450px;
          margin: 0;
          color: var(--text-secondary);
          font-size: 16px;
          line-height: 1.85;
        }

        .auth-benefits {
          display: grid;
          gap: 23px;
          margin-top: 38px;
        }

        .auth-benefit {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .auth-benefit-icon {
          display: grid;
          place-items: center;
          width: 45px;
          height: 45px;
          flex-shrink: 0;
          border: 1px solid #DCE5F0;
          border-radius: 14px;
          background: #FFFFFF;
          color: var(--navy-primary);
        }

        .auth-benefit strong {
          display: block;
          margin-bottom: 4px;
          color: var(--navy);
          font-size: 14px;
          font-weight: 750;
        }

        .auth-benefit p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 13px;
          line-height: 1.6;
        }

        .auth-intro-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 42px;
          color: var(--navy-primary);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.1px;
          text-transform: uppercase;
        }

        .auth-footer-separator {
          color: #8A9DB4;
        }

        .auth-card {
          width: 100%;
          padding: 34px;
          border: 1px solid #E1E7EF;
          border-radius: 24px;
          background: var(--surface);
          box-shadow:
            0 25px 75px rgba(11, 31, 58, 0.08),
            0 3px 12px rgba(11, 31, 58, 0.025);
        }

        .auth-card-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }

        .auth-brand-mark {
          display: grid;
          place-items: center;
          width: 49px;
          height: 49px;
          flex-shrink: 0;
          border-radius: 15px;
          background: var(--navy);
          color: #FFFFFF;
          font-size: 25px;
          font-weight: 850;
          letter-spacing: -1px;
          box-shadow: 0 7px 18px rgba(11, 31, 58, 0.18);
        }

        .auth-card-heading h2 {
          margin: 0 0 6px;
          color: var(--navy);
          font-size: 23px;
          font-weight: 800;
          letter-spacing: -0.7px;
        }

        .auth-card-heading p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 12px;
          line-height: 1.6;
        }

        .auth-mode-toggle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5px;
          padding: 5px;
          border: 1px solid #E5EAF1;
          border-radius: 12px;
          background: #F3F6FA;
        }

        .auth-mode-toggle button {
          min-height: 42px;
          border: 1px solid transparent;
          border-radius: 9px;
          background: transparent;
          color: #64748B;
          font: inherit;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition:
            background 0.2s ease,
            color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .auth-mode-toggle button.active {
          border-color: #E0E7F0;
          background: #FFFFFF;
          color: var(--navy);
          box-shadow: 0 2px 8px rgba(11, 31, 58, 0.07);
        }

        .auth-method-heading {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 24px 0 14px;
          color: #7B8798;
          font-size: 11px;
          font-weight: 650;
        }

        .auth-method-line {
          height: 1px;
          flex: 1;
          background: #E8EDF3;
        }

        .auth-method-toggle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .auth-method-toggle button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 43px;
          padding: 9px 8px;
          border: 1px solid #DFE6EF;
          border-radius: 10px;
          background: #FFFFFF;
          color: #526278;
          font: inherit;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .auth-method-toggle button.active {
          border-color: var(--navy-primary);
          background: #EEF2F8;
          color: var(--navy-primary);
          box-shadow: inset 0 0 0 1px rgba(23, 54, 93, 0.05);
        }

        .auth-form {
          display: grid;
          gap: 18px;
          margin-top: 25px;
        }

        .auth-field {
          display: grid;
          gap: 9px;
          min-width: 0;
        }

        .auth-field label {
          color: #29394F;
          font-size: 12px;
          font-weight: 750;
        }

        .auth-input-wrap {
          display: flex;
          align-items: center;
          gap: 11px;
          min-width: 0;
          min-height: 49px;
          padding: 0 14px;
          border: 1px solid #DCE3EC;
          border-radius: 10px;
          background: #FFFFFF;
          color: #7B8BA0;
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .auth-input-wrap:focus-within {
          border-color: var(--navy-primary);
          box-shadow: 0 0 0 3px rgba(23, 54, 93, 0.10);
        }

        .auth-input-wrap > svg {
          flex-shrink: 0;
        }

        .auth-input-wrap input {
          width: 100%;
          min-width: 0;
          min-height: 45px;
          padding: 0;
          outline: none;
          border: none;
          background: transparent;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 13px;
        }

        .auth-input-wrap input::placeholder {
          color: #9AA6B6;
        }

        .auth-input-wrap input:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .auth-change-button {
          flex-shrink: 0;
          padding: 6px 0 6px 8px;
          border: 0;
          background: transparent;
          color: var(--navy-primary);
          font: inherit;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
        }

        .auth-otp-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .auth-resend-button {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 0;
          border: 0;
          background: transparent;
          color: var(--navy-primary);
          font: inherit;
          font-size: 11px;
          font-weight: 750;
          cursor: pointer;
        }

        .auth-resend-button:disabled {
          color: #9AA6B6;
          cursor: not-allowed;
        }

        .auth-otp-hint {
          margin: 0;
          color: var(--text-secondary);
          font-size: 11px;
          line-height: 1.6;
        }

        .auth-alert {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 11px 12px;
          border-radius: 9px;
          font-size: 12px;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .auth-alert-error {
          border: 1px solid #F0D3D3;
          background: #FFF6F6;
          color: #9F2D2D;
        }

        .auth-alert-success {
          border: 1px solid #CFE4D8;
          background: #F2FAF5;
          color: #236544;
        }

        .auth-alert-success svg {
          flex-shrink: 0;
          margin-top: 1px;
        }

        .auth-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          min-height: 49px;
          margin-top: 2px;
          padding: 12px 18px;
          border: 1px solid var(--navy);
          border-radius: 10px;
          background: var(--navy);
          color: #FFFFFF;
          font-family: inherit;
          font-size: 13px;
          font-weight: 750;
          cursor: pointer;
          box-shadow: 0 7px 18px rgba(11, 31, 58, 0.14);
          transition:
            background 0.2s ease,
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .auth-submit:hover:not(:disabled) {
          transform: translateY(-1px);
          background: var(--navy-primary);
          box-shadow: 0 10px 22px rgba(11, 31, 58, 0.19);
        }

        .auth-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .auth-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.35);
          border-top-color: #FFFFFF;
          border-radius: 50%;
          animation: auth-spin 0.7s linear infinite;
        }

        @keyframes auth-spin {
          to {
            transform: rotate(360deg);
          }
        }

        .auth-back-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          width: 100%;
          padding: 5px;
          border: 0;
          background: transparent;
          color: #66758A;
          font: inherit;
          font-size: 12px;
          font-weight: 650;
          cursor: pointer;
        }

        .auth-card-bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          margin-top: 25px;
          padding-top: 18px;
          border-top: 1px solid #EDF0F5;
          color: #7A8798;
          font-size: 11px;
        }

        .auth-card-bottom svg {
          color: var(--steel-blue);
        }

        .auth-terms {
          margin: 15px 0 0;
          color: #8792A1;
          font-size: 10px;
          line-height: 1.7;
          text-align: center;
        }

        .auth-terms a {
          color: var(--navy-primary);
          font-weight: 700;
          text-decoration: none;
        }

        .auth-terms a:hover {
          text-decoration: underline;
        }

        .auth-page button:focus-visible,
        .auth-page a:focus-visible {
          outline: 3px solid rgba(73, 106, 145, 0.4);
          outline-offset: 3px;
        }

        body.dark-mode .auth-page {
          --navy: #E7EDF6;
          --navy-primary: #A8BCD5;
          --navy-hover: #CAD7E7;
          --steel-blue: #9AB1CD;
          --text-primary: #E7EDF6;
          --text-secondary: #A3B0C2;
          --surface: #111D2D;
          --border-color: #2C3C50;

          background: #0B1422;
          color: #E7EDF6;
        }

        body.dark-mode .auth-glow-one {
          background: radial-gradient(
            circle,
            rgba(73, 106, 145, 0.16),
            transparent 70%
          );
        }

        body.dark-mode .auth-glow-two {
          background: radial-gradient(
            circle,
            rgba(23, 54, 93, 0.22),
            transparent 70%
          );
        }

        body.dark-mode .auth-eyebrow {
          border-color: #2C3C50;
          background: #142236;
          color: #C0D0E4;
        }

        body.dark-mode .auth-card {
          border-color: #29394D;
          background: #111D2D;
          box-shadow: 0 25px 75px rgba(0, 0, 0, 0.22);
        }

        body.dark-mode .auth-benefit-icon {
          border-color: #2C3C50;
          background: #17263A;
          color: #C0D0E4;
        }

        body.dark-mode .auth-mode-toggle {
          border-color: #29394D;
          background: #0C1726;
        }

        body.dark-mode .auth-mode-toggle button {
          color: #9EADC0;
        }

        body.dark-mode .auth-mode-toggle button.active {
          border-color: #34465D;
          background: #1B2B40;
          color: #E7EDF6;
          box-shadow: none;
        }

        body.dark-mode .auth-method-line,
        body.dark-mode .auth-card-bottom {
          border-color: #29394D;
        }

        body.dark-mode .auth-method-toggle button {
          border-color: #34465D;
          background: #111D2D;
          color: #A8B6C9;
        }

        body.dark-mode .auth-method-toggle button.active {
          border-color: #617C9F;
          background: #1A2B41;
          color: #D7E3F2;
        }

        body.dark-mode .auth-field label {
          color: #D7E1ED;
        }

        body.dark-mode .auth-input-wrap {
          border-color: #34465D;
          background: #0D1827;
          color: #A8B6C9;
        }

        body.dark-mode .auth-input-wrap:focus-within {
          border-color: #819AB9;
          box-shadow: 0 0 0 3px rgba(129, 154, 185, 0.15);
        }

        body.dark-mode .auth-input-wrap input {
          color: #E7EDF6;
        }

        body.dark-mode .auth-input-wrap input::placeholder {
          color: #74849A;
        }

        body.dark-mode .auth-submit {
          border-color: #D6E1EF;
          background: #D6E1EF;
          color: #0B1F3A;
          box-shadow: 0 7px 18px rgba(0, 0, 0, 0.2);
        }

        body.dark-mode .auth-submit:hover:not(:disabled) {
          border-color: #B8C9DE;
          background: #B8C9DE;
        }

        body.dark-mode .auth-spinner {
          border-color: rgba(11, 31, 58, 0.25);
          border-top-color: #0B1F3A;
        }

        body.dark-mode .auth-terms a,
        body.dark-mode .auth-change-button,
        body.dark-mode .auth-resend-button {
          color: #C0D0E4;
        }

        body.dark-mode .auth-alert-error {
          border-color: #613B43;
          background: #2B1B23;
          color: #F0B9C0;
        }

        body.dark-mode .auth-alert-success {
          border-color: #315B49;
          background: #152B25;
          color: #A8DEC0;
        }

        @media (max-width: 900px) {
          .auth-page {
            padding: 56px 22px 70px;
          }

          .auth-layout {
            max-width: 520px;
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .auth-intro {
            max-width: 100%;
          }

          .auth-intro h1 {
            font-size: clamp(42px, 8vw, 58px);
          }

          .auth-intro-description {
            max-width: 520px;
          }

          .auth-benefits {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }

          .auth-intro-footer {
            margin-top: 25px;
          }
        }

        @media (max-width: 540px) {
          .auth-page {
            padding: 38px 15px 52px;
          }

          .auth-layout {
            gap: 28px;
          }

          .auth-intro h1 {
            margin-top: 20px;
            font-size: 43px;
            letter-spacing: -1.8px;
          }

          .auth-intro-description {
            font-size: 14px;
            line-height: 1.75;
          }

          .auth-benefits {
            grid-template-columns: 1fr;
            gap: 18px;
            margin-top: 27px;
          }

          .auth-intro-footer {
            margin-top: 25px;
          }

          .auth-card {
            padding: 23px 18px;
            border-radius: 19px;
          }

          .auth-card-heading h2 {
            font-size: 20px;
          }

          .auth-card-heading p {
            font-size: 11px;
          }

          .auth-method-toggle {
            gap: 7px;
          }

          .auth-method-toggle button {
            gap: 6px;
            font-size: 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .auth-page *,
          .auth-page *::before,
          .auth-page *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}
