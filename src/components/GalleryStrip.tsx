"use client";
import { useState } from "react";
import { galleryImages } from "@/data/content";

export default function GalleryStrip() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", height: "clamp(240px, 35vw, 420px)", gap: 4, overflow: "hidden" }}>
      {galleryImages.map((img, i) => (
        <div
          key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            position: "relative",
            overflow: "hidden",
            flex: hovered === i ? 3 : 1,
            transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1)",
            cursor: "pointer",
          }}
        >
          {/* 📸 Replace src with actual property photos */}
          <img
            src={img.src}
            alt={img.label}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: hovered === i ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.5s ease",
            }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(26,46,26,0.85) 0%, transparent 55%)",
            opacity: hovered === i ? 1 : 0,
            transition: "opacity 0.4s ease",
            display: "flex",
            alignItems: "flex-end",
            padding: 24,
            color: "#f5f0e8",
            fontSize: "1rem",
            fontWeight: 600,
          }}>
            {img.label}
          </div>
        </div>
      ))}
    </div>
  );
}
