"use client";

import { motion } from "framer-motion";

const blobRadii = [
  "60% 40% 50% 50% / 50% 60% 40% 50%",
  "40% 60% 60% 40% / 60% 40% 60% 40%",
  "50% 50% 40% 60% / 40% 60% 50% 50%",
];

const blobConfigs = [
  { size: 300, top: "10%", left: "-5%", color: "rgba(217,119,6,0.04)", duration: 14 },
  { size: 250, top: "40%", right: "-8%", color: "rgba(217,119,6,0.05)", duration: 18 },
  { size: 200, bottom: "10%", left: "20%", color: "rgba(217,119,6,0.03)", duration: 16 },
];

export function OrganicBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {blobConfigs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute blur-3xl"
          style={{
            borderRadius: blobRadii[i % blobRadii.length],
            width: blob.size,
            height: blob.size,
            background: blob.color,
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -25, 15, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: blob.duration,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
