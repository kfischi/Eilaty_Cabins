"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { audiences, WHATSAPP_NUMBER } from "@/data/content";

export default function Audiences() {
  const [active, setActive] = useState(0);
  const aud = audiences[active];

  return (
    <section style={{ background: "#f5f0e8", padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 52 }}
        >
          <div style={{ color: "#8B5E3C", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 24, height: 1, background: "#8B5E3C", display: "inline-block" }} />
            מי אנחנו מתאימים
          </div>
          <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#1a2e1a", lineHeight: 1.25 }}>
            בקתות אליתיי <span style={{ color: "#8B5E3C" }}>בשבילכם</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div style={{
          display: "inline-flex",
          background: "#ede5d4",
          borderRadius: 16,
          padding: 6,
          marginBottom: 44,
          gap: 0,
        }}>
          {audiences.map((a, i) => (
            <button
              key={a.id}
              onClick={() => setActive(i)}
              style={{
                padding: "11px 24px",
                border: "none",
                background: active === i ? "#ffffff" : "transparent",
                color: active === i ? "#1a2e1a" : "#6b7280",
                fontFamily: "'Heebo', sans-serif",
                fontWeight: active === i ? 700 : 500,
                fontSize: "0.9rem",
                borderRadius: 12,
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: active === i ? "0 4px 12px rgba(26,46,26,0.1)" : "none",
              }}
            >
              {a.emoji} {a.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "center" }}
          >
            {/* Image */}
            <div>
              {/* 📸 Replace with audience-specific photo */}
              <img
                src={aud.image}
                alt={aud.label}
                style={{ width: "100%", height: "clamp(240px, 35vw, 380px)", objectFit: "cover", borderRadius: 20 }}
              />
            </div>

            {/* Info */}
            <div>
              <h3 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#1a2e1a", marginBottom: 16, lineHeight: 1.25 }}>
                {aud.headline}
              </h3>
              <p style={{ fontSize: "1rem", color: "#6b7280", fontWeight: 300, lineHeight: 1.85, marginBottom: 28 }}>
                {aud.description}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
                {aud.features.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "0.9rem", color: "#3a3d40" }}>
                    <span style={{
                      width: 24, height: 24, minWidth: 24,
                      background: "#1a2e1a", color: "#e8c547",
                      borderRadius: "50%", display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: 12, fontWeight: 700,
                    }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(aud.cta)}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #c9a227, #e8c547)",
                  color: "#1a2e1a",
                  padding: "14px 32px",
                  borderRadius: 50,
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "all 0.3s",
                  boxShadow: "0 4px 16px rgba(201,162,39,0.35)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,162,39,0.45)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(201,162,39,0.35)"; }}
              >
                {aud.cta}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
