
import { useEffect, useRef, useCallback } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const raf = useRef(null);
  const isHovering = useRef(false);

  const lerp = (a, b, t) => a + (b - a) * t;

  const loop = useCallback(() => {
    ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.12);
    ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.12);

    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
    }

    raf.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };

    const onEnter = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-hover");

      if (isInteractive) {
        isHovering.current = true;
        dotRef.current?.classList.add("cursor-dot--hover");
        ringRef.current?.classList.add("cursor-ring--hover");
      }
    };

    const onLeave = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a");

      if (isInteractive) {
        isHovering.current = false;
        dotRef.current?.classList.remove("cursor-dot--hover");
        ringRef.current?.classList.remove("cursor-ring--hover");
      }
    };

    const onMouseDown = () => {
      dotRef.current?.classList.add("cursor-dot--click");
      ringRef.current?.classList.add("cursor-ring--click");
    };

    const onMouseUp = () => {
      dotRef.current?.classList.remove("cursor-dot--click");
      ringRef.current?.classList.remove("cursor-ring--click");
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(raf.current);
    };
  }, [loop]);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />

      <style>{`
        /* Hide native cursor site-wide (desktop only) */
        @media (pointer: fine) {
          *, *::before, *::after {
            cursor: none !important;
          }
        }

        /* ── Cursor dot ── */
        .cursor-dot {
          position: fixed;
          top: -5px;
          left: -5px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #69b2e6;
          pointer-events: none;
          z-index: 99999;
          will-change: transform;
          transition:
            width 0.2s ease,
            height 0.2s ease,
            background 0.2s ease,
            opacity 0.2s ease,
            top 0.2s ease,
            left 0.2s ease;
        }

        .cursor-dot--hover {
          top: -16px;
          left: -16px;
          width: 32px;
          height: 32px;
          background: rgba(105, 178, 230, 0.25);
          mix-blend-mode: multiply;
        }

        .cursor-dot--click {
          transform: scale(0.7) !important;
          background: #2563eb;
        }

        /* ── Cursor ring ── */
        .cursor-ring {
          position: fixed;
          top: -20px;
          left: -20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid rgba(105, 178, 230, 0.7);
          pointer-events: none;
          z-index: 99998;
          will-change: transform;
          transition:
            width 0.3s ease,
            height 0.3s ease,
            border-color 0.3s ease,
            border-width 0.3s ease,
            top 0.3s ease,
            left 0.3s ease,
            opacity 0.3s ease;
        }

        .cursor-ring--hover {
          top: -30px;
          left: -30px;
          width: 60px;
          height: 60px;
          border-color: rgba(105, 178, 230, 0.5);
          border-width: 1.5px;
        }

        .cursor-ring--click {
          top: -16px;
          left: -16px;
          width: 32px;
          height: 32px;
          border-color: #2563eb;
        }

        /* Hide custom cursor on touch devices */
        @media (pointer: coarse) {
          .cursor-dot,
          .cursor-ring {
            display: none;
          }
        }

        /* Dark mode */
        body.dark-mode .cursor-dot {
          background: #93c5fd;
        }
        body.dark-mode .cursor-ring {
          border-color: rgba(147, 197, 253, 0.6);
        }
        body.dark-mode .cursor-dot--hover {
          background: rgba(147, 197, 253, 0.2);
        }
      `}</style>
    </>
  );
}
