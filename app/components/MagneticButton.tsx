"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect, type ReactNode } from "react";

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  onClick,
  href,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  // On touch devices, render a plain button/link without magnetic effect
  if (isTouchDevice) {
    if (href) {
      return (
        <a href={href} onClick={onClick} className={`inline-block ${className}`}>
          {children}
        </a>
      );
    }
    return (
      <button type="button" onClick={onClick} className={`inline-block ${className}`}>
        {children}
      </button>
    );
  }

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      style={{ willChange: "transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}