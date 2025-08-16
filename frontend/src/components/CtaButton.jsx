import React from "react";
import { Button } from "./ui/button";

export default function CtaButton({ children, onClick, as = "button", href, className = "", colorA = "#BFA32F", colorB = "#d8c45a", ...props }) {
  const style = { background: `linear-gradient(90deg, ${colorA}, ${colorB})`, color: "#111" };
  if (as === "a") {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md ${className}`}
        style={style}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Button
      onClick={onClick}
      className={`rounded-full px-5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md ${className}`}
      style={style}
      {...props}
    >
      {children}
    </Button>
  );
}