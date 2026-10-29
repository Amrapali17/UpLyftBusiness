import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Replace with your complete WhatsApp number:
  // India country code + 10-digit mobile number, without + or spaces.
  const whatsappNumber = "918408820707";

  const whatsappMessage = encodeURIComponent(
    "Hi UpLyftBusiness! I'd like to know more about your services."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="floating-whatsapp">
      {showTooltip && (
        <div className="whatsapp-tooltip">
          <span>
            <strong>Chat with us</strong>
            <small>How can we help your business?</small>
          </span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            aria-label="Close WhatsApp message"
          >
            <X size={15} />
          </button>
        </div>
      )}

      <a
        href={whatsappUrl}
        className="floating-whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with UpLyftBusiness on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onFocus={() => setShowTooltip(true)}
      >
        <svg
          viewBox="0 0 24 24"
          width="29"
          height="29"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.53 0 .18 5.35.18 11.92c0 2.1.55 4.15 1.6 5.96L.08 24l6.27-1.64a11.9 11.9 0 0 0 5.75 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.51-8.43ZM12.1 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.97.99-3.63-.24-.37a9.85 9.85 0 0 1-1.52-5.26c0-5.46 4.45-9.91 9.92-9.91 2.64 0 5.13 1.03 7 2.9a9.85 9.85 0 0 1 2.91 7.01c0 5.46-4.45 9.91-9.93 9.91Zm5.44-7.42c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.23-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.23 5.14 4.53.72.31 1.28.5 1.71.64.72.23 1.37.2 1.88.12.58-.09 1.77-.73 2.02-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
        </svg>
      </a>

      <style>{`
        .floating-whatsapp {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 10000;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
        }

        .floating-whatsapp-button {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #25D366;
          color: #fff;
          box-shadow: 0 6px 22px rgba(37, 211, 102, 0.35);
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          animation: whatsapp-entrance 0.5s ease both;
        }

        .floating-whatsapp-button:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 9px 28px rgba(37, 211, 102, 0.45);
        }

        .floating-whatsapp-button:focus-visible {
          outline: 3px solid #111418;
          outline-offset: 4px;
        }

        .whatsapp-tooltip {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 14px 16px;
          border: 1px solid rgba(17, 20, 24, 0.08);
          border-radius: 12px;
          background: #fff;
          color: #111418;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          animation: whatsapp-tooltip-in 0.2s ease both;
        }

        .whatsapp-tooltip span {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .whatsapp-tooltip strong {
          font-size: 13px;
        }

        .whatsapp-tooltip small {
          color: #68727c;
          font-size: 11px;
        }

        .whatsapp-tooltip button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px;
          border: 0;
          border-radius: 50%;
          background: transparent;
          color: #68727c;
          cursor: pointer;
        }

        @keyframes whatsapp-entrance {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes whatsapp-tooltip-in {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 600px) {
          .floating-whatsapp {
            right: 16px;
            bottom: 18px;
          }

          .floating-whatsapp-button {
            width: 54px;
            height: 54px;
          }

          .whatsapp-tooltip {
            max-width: calc(100vw - 64px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-whatsapp-button,
          .whatsapp-tooltip {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}