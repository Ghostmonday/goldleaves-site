import React, { useEffect, useRef } from "react";
import { site } from "../mock";

/*
  HeroCube v2 — smoother, predictable interaction
  - Inertial spring toward target (no state churn per frame)
  - Subtle hover tilt (bounded) + optional click-drag
  - Pauses when offscreen or tab hidden
  - Respects prefers-reduced-motion (static)
  - Touch devices: static by default to avoid jank
*/
export default function HeroCube({ size = 260, enableDrag = true }) {
  const wrapperRef = useRef(null);
  const cubeRef = useRef(null);
  const rafRef = useRef(0);
  const runningRef = useRef(true);

  // Model refs (no React state per frame)
  const currentRef = useRef({ rx: -12, ry: 22 });
  const targetRef = useRef({ rx: -12, ry: 22 });
  const velocityRef = useRef({ rx: 0, ry: 0 });

  // Drag handling
  const draggingRef = useRef(false);
  const lastPosRef = useRef({ x: 0, y: 0 });

  const accent = site.brand.accent;

  const isReduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = () => matchMedia('(pointer: coarse)').matches;

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  const applyTransform = (rx, ry) => {
    if (!cubeRef.current) return;
    cubeRef.current.style.transform = `translate3d(-50%, -50%, 0) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const animate = () => {
    const k = 0.12; // spring stiffness
    const d = 0.82; // damping

    const c = currentRef.current;
    const t = targetRef.current;
    const v = velocityRef.current;

    // Spring integration
    v.rx = d * (v.rx + (t.rx - c.rx) * k);
    v.ry = d * (v.ry + (t.ry - c.ry) * k);

    c.rx += v.rx;
    c.ry += v.ry;

    applyTransform(c.rx, c.ry);

    if (runningRef.current) rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const prefersReduced = isReduced();
    const touch = isTouch();

    // Initial transform
    const c = currentRef.current;
    applyTransform(c.rx, c.ry);

    // Pause when not visible / offscreen
    const onVisibility = () => {
      const active = document.visibilityState === 'visible';
      runningRef.current = active && !prefersReduced;
      if (runningRef.current) rafRef.current = requestAnimationFrame(animate);
    };
    document.addEventListener('visibilitychange', onVisibility);

    const io = new IntersectionObserver((entries) => {
      const visible = entries[0]?.isIntersecting;
      runningRef.current = !!visible && !prefersReduced;
      if (runningRef.current) rafRef.current = requestAnimationFrame(animate);
    });
    if (wrapperRef.current) io.observe(wrapperRef.current);

    // Subtle hover tilt (desktop only)
    const host = wrapperRef.current;
    const onMove = (e) => {
      if (draggingRef.current) return; // drag has priority
      const rect = host.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = clamp((e.clientX - cx) / (rect.width / 2), -1, 1);
      const dy = clamp((e.clientY - cy) / (rect.height / 2), -1, 1);
      const maxTiltX = 12; // pitch bound
      const maxTiltY = 16; // yaw bound
      targetRef.current = {
        rx: clamp(-dy * maxTiltX, -18, 18),
        ry: clamp(dx * maxTiltY + 20, -25, 40),
      };
    };

    const onLeave = () => {
      if (!draggingRef.current) {
        targetRef.current = { rx: -12, ry: 22 };
      }
    };

    // Drag-to-rotate (desktop only)
    const onDown = (e) => {
      if (!enableDrag) return;
      draggingRef.current = true;
      lastPosRef.current = { x: e.clientX, y: e.clientY };
      host.setPointerCapture?.(e.pointerId || 1);
    };
    const onUp = (e) => {
      draggingRef.current = false;
      host.releasePointerCapture?.(e.pointerId || 1);
    };
    const onDrag = (e) => {
      if (!draggingRef.current) return;
      const last = lastPosRef.current;
      const dx = e.clientX - last.x;
      const dy = e.clientY - last.y;
      lastPosRef.current = { x: e.clientX, y: e.clientY };
      const c = targetRef.current;
      targetRef.current = {
        rx: clamp(c.rx - dy * 0.25, -35, 35),
        ry: clamp(c.ry + dx * 0.25, -40, 55),
      };
    };

    if (!touch && !prefersReduced) {
      host.addEventListener('mousemove', onMove);
      host.addEventListener('mouseleave', onLeave);
      host.addEventListener('pointerdown', onDown);
      window.addEventListener('pointerup', onUp);
      window.addEventListener('pointermove', onDrag);
    }

    if (!prefersReduced) rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      io.disconnect();
      if (!touch && !prefersReduced) {
        host.removeEventListener('mousemove', onMove);
        host.removeEventListener('mouseleave', onLeave);
        host.removeEventListener('pointerdown', onDown);
        window.removeEventListener('pointerup', onUp);
        window.removeEventListener('pointermove', onDrag);
      }
      cancelAnimationFrame(rafRef.current);
    };
  }, [enableDrag]);

  const s = size;
  const half = s / 2;
  const faceCommon = "absolute inset-0 flex items-center justify-center text-xs font-medium select-none";
  const faceStyle = (bg) => ({
    background: bg,
    border: "1px solid rgba(255,255,255,0.06)",
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.3)",
    backfaceVisibility: "hidden",
    willChange: "transform",
  });

  return (
    <div ref={wrapperRef} className="relative" style={{ width: s, height: s, perspective: 900 }}>
      <div
        ref={cubeRef}
        className="absolute left-1/2 top-1/2"
        style={{
          width: s,
          height: s,
          transformStyle: "preserve-3d",
          transform: `translate3d(-50%, -50%, 0) rotateX(-12deg) rotateY(22deg)`,
          willChange: "transform",
        }}
      >
        {/* Faces */}
        <div className={faceCommon} style={{ ...faceStyle("linear-gradient(135deg, #0d1117, #151a23)"), width: s, height: s, transform: `translateZ(${half}px)` }}>
          <span style={{ color: accent }}>GoldLeaves</span>
        </div>
        <div className={faceCommon} style={{ ...faceStyle("linear-gradient(135deg, #0a0d12, #121720)"), width: s, height: s, transform: `rotateY(180deg) translateZ(${half}px)` }} />
        <div className={faceCommon} style={{ ...faceStyle("radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.06), rgba(0,0,0,0.2))"), width: s, height: s, transform: `rotateY(90deg) translateZ(${half}px)` }} />
        <div className={faceCommon} style={{ ...faceStyle("radial-gradient(ellipse at 70% 70%, rgba(255,255,255,0.06), rgba(0,0,0,0.2))"), width: s, height: s, transform: `rotateY(-90deg) translateZ(${half}px)` }} />
        <div className={faceCommon} style={{ ...faceStyle("linear-gradient(180deg, rgba(217,251,6,0.12), rgba(0,0,0,0.15))"), width: s, height: s, transform: `rotateX(90deg) translateZ(${half}px)` }} />
        <div className={faceCommon} style={{ ...faceStyle("linear-gradient(0deg, rgba(217,251,6,0.08), rgba(0,0,0,0.2))"), width: s, height: s, transform: `rotateX(-90deg) translateZ(${half}px)` }} />

        {/* Decorative tile */}
        <div aria-hidden className="absolute" style={{ width: half, height: half, transform: `translate3d(-30%, -30%, ${half / 3}px) rotateX(15deg) rotateY(-20deg)`, background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(0,0,0,0.2))", border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 8px 30px rgba(0,0,0,0.4)" }} />
      </div>
    </div>
  );
}