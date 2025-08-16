import React, { useEffect, useRef, useState } from "react";
import { site } from "../mock";

// Lightweight 3D cube using CSS transforms (no deps).
// - Idle float via rAF
// - Mouse move rotates toward pointer
// - Respects prefers-reduced-motion
export default function HeroCube({ size = 260 }) {
  const wrapperRef = useRef(null);
  const cubeRef = useRef(null);
  const rafRef = useRef(0);
  const [target, setTarget] = useState({ rx: -15, ry: 25 });
  const [current, setCurrent] = useState({ rx: -15, ry: 25 });
  const accent = site.brand.accent;

  const apply = (rx, ry) => {
    if (!cubeRef.current) return;
    cubeRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let t = 0;
    const loop = () => {
      // Lerp toward target for smoothness
      const lerp = 0.08;
      const rx = current.rx + (target.rx - current.rx) * lerp;
      const ry = current.ry + (target.ry - current.ry) * lerp;
      setCurrent({ rx, ry });
      apply(rx, ry);
      if (!prefersReduced) {
        t += 0.01;
        // Gentle breathing on idle
        setTarget((prev) => ({ rx: prev.rx + Math.sin(t) * 0.02, ry: prev.ry + Math.cos(t) * 0.02 }));
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target.rx, target.ry]);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width; // -0.5..0.5
      const dy = (e.clientY - cy) / rect.height;
      const ry = dx * 40; // yaw
      const rx = -dy * 30; // pitch
      setTarget({ rx, ry });
    };
    const onLeave = () => setTarget({ rx: -15, ry: 25 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const faceCommon = "absolute inset-0 flex items-center justify-center text-xs font-medium select-none";
  const faceStyle = (bg) => ({
    background: bg,
    border: "1px solid rgba(255,255,255,0.06)",
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.3)",
    backfaceVisibility: "hidden",
  });

  const s = size;
  const half = s / 2;

  return (
    <div ref={wrapperRef} className="relative" style={{ width: s, height: s, perspective: 900 }}>
      <div
        ref={cubeRef}
        className="absolute left-1/2 top-1/2"
        style={{
          width: s,
          height: s,
          transformStyle: "preserve-3d",
          transform: `translate(-50%, -50%) rotateX(${current.rx}deg) rotateY(${current.ry}deg)`,
          transition: "transform 0.1s linear",
        }}
      >
        {/* Faces */}
        <div
          className={faceCommon}
          style={{
            ...faceStyle("linear-gradient(135deg, #0d1117, #151a23)"),
            width: s,
            height: s,
            transform: `translateZ(${half}px)`,
          }}
        >
          <span style={{ color: accent }}>GoldLeaves</span>
        </div>
        <div
          className={faceCommon}
          style={{
            ...faceStyle("linear-gradient(135deg, #0a0d12, #121720)"),
            width: s,
            height: s,
            transform: `rotateY(180deg) translateZ(${half}px)`,
          }}
        />
        <div
          className={faceCommon}
          style={{
            ...faceStyle("radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.06), rgba(0,0,0,0.2))"),
            width: s,
            height: s,
            transform: `rotateY(90deg) translateZ(${half}px)`,
          }}
        />
        <div
          className={faceCommon}
          style={{
            ...faceStyle("radial-gradient(ellipse at 70% 70%, rgba(255,255,255,0.06), rgba(0,0,0,0.2))"),
            width: s,
            height: s,
            transform: `rotateY(-90deg) translateZ(${half}px)`,
          }}
        />
        <div
          className={faceCommon}
          style={{
            ...faceStyle("linear-gradient(180deg, rgba(217,251,6,0.12), rgba(0,0,0,0.15))"),
            width: s,
            height: s,
            transform: `rotateX(90deg) translateZ(${half}px)`,
          }}
        />
        <div
          className={faceCommon}
          style={{
            ...faceStyle("linear-gradient(0deg, rgba(217,251,6,0.08), rgba(0,0,0,0.2))"),
            width: s,
            height: s,
            transform: `rotateX(-90deg) translateZ(${half}px)`,
          }}
        />

        {/* Decorative floating tiles */}
        <div
          aria-hidden
          className="absolute"
          style={{
            width: half,
            height: half,
            transform: `translate3d(-30%, -30%, ${half / 3}px) rotateX(15deg) rotateY(-20deg)`,
            background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(0,0,0,0.2))",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
          }}
        />
      </div>
    </div>
  );
}