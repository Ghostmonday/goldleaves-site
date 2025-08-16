import React from "react";

export default function LeafLogo({ size = 56, color = "#BFA32F" }) {
  return (
    <div className="inline-block" style={{ width: size, height: size }}>
      <svg
        className="transition-transform duration-200 hover:scale-105"
        viewBox="0 0 64 64"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M54 10C36 10 22 20 16 30c-6 10-4 18 2 22s16 2 24-6C54 36 62 22 54 10Z" fill={color} />
        <path d="M36 20c-6 8-10 18-10 24" stroke="#111" strokeOpacity=".35" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}