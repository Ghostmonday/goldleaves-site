import React from "react";

// Minimal matte-gold outline icons with subtle leaf motif
// All icons accept { size = 18, stroke = 1.8, color = "#BFA32F" }

const GoldStroke = ({ id = "gl-matte" }) => (
  <defs>
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#C4A94A" />
      <stop offset="100%" stopColor="#B08D2C" />
    </linearGradient>
  </defs>
);

function BaseLeaf({ size = 18, stroke = 1.8, color = "url(#gl-matte)", children, viewBox = "0 0 24 24" }) {
  return (
    <svg width={size} height={size} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <GoldStroke />
      <path d="M4 13c5-7 11-9 16-8 1.2.2 1.8 1.7 1 2.7C18 12 12 17 7 18.5 5.4 19 4 17.6 4 16V13Z" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {children}
    </svg>
  );
}

export function Code2(props) {
  return (
    <BaseLeaf {...props}>
      <path d="M10 9l-2 3 2 3M14 9l2 3-2 3" stroke="url(#gl-matte)" strokeWidth={props.stroke || 1.8} strokeLinecap="round" strokeLinejoin="round" />
    </BaseLeaf>
  );
}

export function LayoutDashboard(props) {
  return (
    <BaseLeaf {...props}>
      <rect x="9" y="7.5" width="3.5" height="3.5" rx="0.6" stroke="url(#gl-matte)" strokeWidth={props.stroke || 1.8} />
      <rect x="13.5" y="7.5" width="4.5" height="7" rx="0.6" stroke="url(#gl-matte)" strokeWidth={props.stroke || 1.8} />
      <rect x="6" y="12.2" width="5.8" height="2.3" rx="0.6" stroke="url(#gl-matte)" strokeWidth={props.stroke || 1.8} />
    </BaseLeaf>
  );
}

export function Cpu(props) {
  return (
    <BaseLeaf {...props}>
      <rect x="9" y="9" width="6" height="6" rx="1.2" stroke="url(#gl-matte)" strokeWidth={props.stroke || 1.8} />
      {Array.from({ length: 4 }).map((_, i) => (
        <line key={i} x1={7 + i * 2} y1="7" x2={7 + i * 2} y2="5.5" stroke="url(#gl-matte)" strokeWidth={props.stroke || 1.8} />
      ))}
    </BaseLeaf>
  );
}

export function CreditCard(props) {
  return (
    <BaseLeaf {...props}>
      <rect x="7" y="9" width="10" height="6" rx="1.2" stroke="url(#gl-matte)" strokeWidth={props.stroke || 1.8} />
      <line x1="7" y1="11" x2="17" y2="11" stroke="url(#gl-matte)" strokeWidth={props.stroke || 1.8} />
    </BaseLeaf>
  );
}

export function CloudCog(props) {
  return (
    <BaseLeaf {...props}>
      <path d="M9 11.5c.4-2 2.2-3.5 4.3-3.3 1.8.2 3.1 1.7 3.3 3.5 1.2.3 2.1 1.5 2.1 2.8 0 1.6-1.3 2.9-2.9 2.9H10" stroke="url(#gl-matte)" strokeWidth={props.stroke || 1.8} strokeLinecap="round" />
      <circle cx="10.5" cy="14.5" r="1.2" stroke="url(#gl-matte)" strokeWidth={props.stroke || 1.8} />
    </BaseLeaf>
  );
}

export function Workflow(props) {
  return (
    <BaseLeaf {...props}>
      <circle cx="9" cy="10" r="1.5" stroke="url(#gl-matte)" strokeWidth={props.stroke || 1.8} />
      <circle cx="15" cy="14" r="1.5" stroke="url(#gl-matte)" strokeWidth={props.stroke || 1.8} />
      <path d="M10.5 10h3l1.5 2.5" stroke="url(#gl-matte)" strokeWidth={props.stroke || 1.8} strokeLinecap="round" />
    </BaseLeaf>
  );
}