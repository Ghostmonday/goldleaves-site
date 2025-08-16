import React from "react";

// Alternate matte-gold single leaf lockup
export default function GoldLeafMatte({ size = 56, className = "" }) {
  const s = size;
  return (
    <svg
      role="img"
      aria-label="GoldLeaves matte leaf"
      width={s}
      height={s}
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gl-matte" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4A94A" />
          <stop offset="100%" stopColor="#B08D2C" />
        </linearGradient>
      </defs>
      <path
        d="M10 36c5-12 19-22 33-23 3.4-.2 5.3 3.4 3.8 6.4C42 29 33 38 24 43c-6.1 3.5-12.7 3.2-15-1-1.1-2-1-4-.9-6Z"
        fill="none"
        stroke="url(#gl-matte)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M32 18c-5 7-9 16-10 22" fill="none" stroke="url(#gl-matte)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}