import React from "react";

// GL monogram mark in matte-gold stroke — suitable for small sizes and favicon
export default function GoldMonogram({ size = 56, className = "" }) {
  const s = size;
  return (
    <svg
      role="img"
      aria-label="GoldLeaves monogram"
      width={s}
      height={s}
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gl-matte" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C4A94A" />
          <stop offset="100%" stopColor="#B08D2C" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="14" fill="none" stroke="url(#gl-matte)" strokeWidth="2.5" />
      {/* G */}
      <path
        d="M24 24c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10h-6m0 0h14"
        fill="none"
        stroke="url(#gl-matte)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* L */}
      <path d="M24 40v10h12" fill="none" stroke="url(#gl-matte)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}