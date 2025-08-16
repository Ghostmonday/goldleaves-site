import React from "react";

/*
  GoldLogo (animated): uses uploaded gold leaf PNG with a gentle float/glide motion.
  - Respects prefers-reduced-motion
  - Works on light and dark backgrounds
*/
export default function GoldLogo({ size = 56, className = "" }) {
  const s = size;
  return (
    <div
      className={`gl-float inline-block ${className}`}
      style={{ width: s, height: s }}
      aria-label="GoldLeaves logo"
      role="img"
    >
      <img
        src="/gold-logo.png"
        width={s}
        height={s}
        alt="Gold leaf"
        className="select-none pointer-events-none"
        style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.25))" }}
      />
      <style>{`
        @keyframes gl-drift {
          0% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-2px) rotate(-1.2deg); }
          50% { transform: translateY(0px) rotate(0.6deg); }
          75% { transform: translateY(2px) rotate(-0.6deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .gl-float { will-change: transform; }
        @media (prefers-reduced-motion: no-preference) {
          .gl-float { animation: gl-drift 6.5s ease-in-out infinite; }
        }
      `}</style>
    </div>
  );
}