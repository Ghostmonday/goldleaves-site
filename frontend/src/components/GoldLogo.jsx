import React from "react";

/*
  GoldLogo — stylized gilded mark
  - Rich metallic gradient (closer to real gold)
  - Two interleaved leaf/crest shapes for a more artistic, premium feel
  - Works on light and dark backgrounds
*/
export default function GoldLogo({ size = 56, className = "" }) {
  const s = size;
  return (
    <svg
      role="img"
      aria-label="GoldLeaves logo"
      width={s}
      height={s}
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Metallic gold gradient */}
        <linearGradient id="gl-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2C2" />
          <stop offset="24%" stopColor="#F7D774" />
          <stop offset="55%" stopColor="#D4AF37" />
          <stop offset="85%" stopColor="#B8892D" />
          <stop offset="100%" stopColor="#F3E6A2" />
        </linearGradient>
        {/* Soft highlight */}
        <radialGradient id="gl-highlight" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.65)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        {/* Shadow stroke */}
        <linearGradient id="gl-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.45)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
        </linearGradient>
        {/* Subtle inner shadow filter */}
        <filter id="gl-inset" x="-20%" y="-20%" width="140%" height="140%">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.3 0" />
          <feBlend in="SourceGraphic" mode="normal" />
        </filter>
      </defs>

      {/* Interleaved crest — left leaf */}
      <path
        d="M10 38c4-12 18-22 32-24 3.5-.5 6.4 2.7 5.6 6.1C45 29 37 38 28 44c-6.2 4.1-12.8 4.7-16.5 1.8C9.5 44.1 9.3 41 10 38Z"
        fill="url(#gl-gold)"
        filter="url(#gl-inset)"
        stroke="url(#gl-stroke)"
        strokeWidth="0.6"
      />

      {/* Interleaved crest — right leaf (mirrored sweep) */}
      <path
        d="M54 28c-4.6 10.8-16.7 19.6-28.6 21.8-3.2.6-6-2.2-5.5-5.5C21 37 27.5 29 35 24c5.6-3.7 12.1-4.6 15.7-2.2C53.8 23.3 54.8 25.8 54 28Z"
        fill="url(#gl-gold)"
        filter="url(#gl-inset)"
        stroke="url(#gl-stroke)"
        strokeWidth="0.6"
      />

      {/* Central vein flourish */}
      <path
        d="M33 17c-5.5 8.2-9.6 18-10.3 24"
        fill="none"
        stroke="url(#gl-stroke)"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Highlight overlay */}
      <ellipse cx="28" cy="22" rx="18" ry="10" fill="url(#gl-highlight)" opacity="0.4" />
    </svg>
  );
}