"use client";

import { useRef, useEffect } from "react";

type ParticleType = "circle" | "star" | "diamond";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  type: ParticleType;
  rotation: number;
  rotationSpeed: number;
}

function drawStar(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  rotation: number,
) {
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const angle = rotation + (i * Math.PI * 2) / 5 - Math.PI / 2;
    const px = cx + Math.cos(angle) * r;
    const py = cy + Math.sin(angle) * r;
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    const innerAngle = angle + Math.PI / 5;
    ctx.lineTo(
      cx + Math.cos(innerAngle) * r * 0.4,
      cy + Math.sin(innerAngle) * r * 0.4,
    );
  }
  ctx.closePath();
  ctx.fill();
}

function drawDiamond(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  rotation: number,
) {
  ctx.beginPath();
  for (let i = 0; i < 4; i++) {
    const angle = rotation + (i * Math.PI) / 2;
    const px = cx + Math.cos(angle) * r;
    const py = cy + Math.sin(angle) * r;
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
}

function pickType(): ParticleType {
  const roll = Math.random();
  if (roll < 0.6) return "circle";
  if (roll < 0.8) return "star";
  return "diamond";
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const maxParticles = isMobile ? 20 : 50;
    const frameSkip = isMobile ? 3 : 2;
    const maxConnectionDist = isMobile ? 80 : 120;
    const maxConnections = isMobile ? 30 : Infinity;

    let width = 0;
    let height = 0;
    const particles: Particle[] = [];

    const colors = [
      "rgba(63,116,47,",
      "rgba(103,168,68,",
      "rgba(40,89,31,",
    ];

    // IntersectionObserver to pause animation when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    observer.observe(canvas);

    function resize() {
      if (!canvas || !ctx) return;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      width = rect.width;
      height = rect.height;
      const dpr = isMobile ? 1 : window.devicePixelRatio;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles() {
      particles.length = 0;
      const area = width * height;
      const count = Math.min(maxParticles, Math.floor(area / (isMobile ? 40000 : 25000)));
      for (let i = 0; i < count; i++) {
        const type = pickType();
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size:
            type === "circle"
              ? Math.random() * 2 + 1
              : type === "star"
                ? Math.random() * 3 + 2
                : Math.random() * 2 + 1.5,
          alpha:
            type === "circle"
              ? Math.random() * 0.4 + 0.1
              : type === "star"
                ? Math.random() * 0.25 + 0.08
                : Math.random() * 0.3 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
          type,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed:
            (Math.random() - 0.5) * 0.02 + (type === "diamond" ? 0.015 : 0.008),
        });
      }
    }

    let frameCount = 0;
    function animate() {
      if (!ctx || !canvas) return;

      // Pause when off-screen
      if (!isVisibleRef.current) {
        animRef.current = requestAnimationFrame(animate);
        return;
      }

      frameCount++;
      // Skip frames for performance
      if (frameCount % frameSkip !== 0) {
        animRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        if (p.type === "circle") {
          // On mobile, use simple solid fill instead of radial gradient
          if (isMobile) {
            ctx.fillStyle = `${p.color}${p.alpha})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          } else {
            const gradient = ctx.createRadialGradient(
              p.x,
              p.y,
              0,
              p.x,
              p.y,
              p.size * 2.5,
            );
            gradient.addColorStop(0, p.color + p.alpha + ")");
            gradient.addColorStop(1, "transparent");
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (p.type === "star") {
          ctx.fillStyle = `${p.color}${p.alpha})`;
          drawStar(ctx, p.x, p.y, p.size, p.rotation);
        } else {
          ctx.fillStyle = `${p.color}${p.alpha})`;
          drawDiamond(ctx, p.x, p.y, p.size, p.rotation);
        }
      }

      // Connect nearby particles with faint lines
      let connectionCount = 0;
      for (let i = 0; i < particles.length; i++) {
        if (connectionCount >= maxConnections) break;
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxConnectionDist * maxConnectionDist) {
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(63,116,47,${0.06 * (1 - dist / maxConnectionDist)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            connectionCount++;
          }
        }
      }

      animRef.current = requestAnimationFrame(animate);
    }

    resize();
    createParticles();
    animate();

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        createParticles();
      }, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animRef.current);
      observer.disconnect();
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      style={{ willChange: "transform" }}
    />
  );
}