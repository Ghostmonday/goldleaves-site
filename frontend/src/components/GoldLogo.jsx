import React from "react";

/*
  GoldLogo (animated + sheen): uses uploaded gold leaf PNG with a gentle float/tilt motion
  and an animated sheen overlay for a premium pop. Respects prefers-reduced-motion.
*/
export default function GoldLogo({ size = 56, className = "" }) {
  const s = size;
  return (
    <div
      className={`gl-float relative inline-flex items-center justify-center rounded-xl ${className}`}
      style={{ width: s + 12, height: s + 12, background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.15))", border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 10px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)" }}
      aria-label="GoldLeaves logo"
      role="img"
    >
      <img
        src="/gold-logo.png"
        width={s}
        height={s}
        alt="Gold leaf"
        className="select-none pointer-events-none rounded-lg"
        style={{ display: "block" }}
      />
      {/* Sheen overlay */}
      <span className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none" aria-hidden>
        <span className="absolute -inset-1 translate-x-[-120%] sheen"></span>
      </span>
      <style>{`
        @keyframes gl-drift {
          0% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-2px) rotate(-1.2deg); }
          50% { transform: translateY(0px) rotate(0.6deg); }
          75% { transform: translateY(2px) rotate(-0.6deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes gl-sheen-scan {
          0% { transform: translateX(-120%) skewX(-15deg); opacity: 0; }
          20% { opacity: 0.25; }
          50% { transform: translateX(120%) skewX(-15deg); opacity: 0; }
          100% { transform: translateX(120%) skewX(-15deg); opacity: 0; }
        }
        .gl-float { will-change: transform; }
        .sheen { top: 0; bottom: 0; width: 40%; background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.55), rgba(255,255,255,0)); filter: blur(4px); }
        @media (prefers-reduced-motion: no-preference) {
          .gl-float { animation: gl-drift 6.5s ease-in-out infinite; }
          .sheen { animation: gl-sheen-scan 3.8s ease-in-out infinite; }
        }
      `}</style>
    </div>
  );
}