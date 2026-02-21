"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { audiences, WHATSAPP_NUMBER } from "@/data/content";

// Luxury SVG icons - no emoji
const icons: Record<string, React.ReactNode> = {
  couples: (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  families: (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  events: (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
};

export default function Audiences() {
  const [active, setActive] = useState(0);
  const aud = audiences[active];

  return (
    <section style={{ background: "#0d160d", padding: "140px 0", position: "relative", overflow: "hidden" }}>
      {/* Subtle diagonal texture */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.025, pointerEvents: "none",
        backgroundImage: "repeating-linear-gradient(45deg, #c9a227 0, #c9a227 1px, transparent 0, transparent 50%)",
        backgroundSize: "24px 24px",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ marginBottom: 64 }}
        >
          <div className="section-tag">מי אנחנו מתאימים</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 400, color: "#f7f2ea", lineHeight: 1.15, letterSpacing: "-0.3px" }}>
            בקתות צוריאל <em style={{ color: "#e8c547", fontStyle: "italic" }}>בשבילכם</em>
          </h2>
        </motion.div>

        {/* Tabs - luxury style */}
        <div style={{ display: "flex", gap: 0, marginBottom: 64, borderBottom: "1px solid rgba(201,162,39,0.1)" }}>
          {audiences.map((a, i) => (
            <button key={a.id} onClick={() => setActive(i)}
              style={{
                padding: "16px 32px",
                border: "none",
                borderBottom: active === i ? "2px solid #e8c547" : "2px solid transparent",
                background: "transparent",
                color: active === i ? "#e8c547" : "rgba(247,242,234,0.35)",
                fontFamily: "'Heebo', sans-serif",
                fontWeight: active === i ? 600 : 400,
                fontSize: "0.85rem",
                letterSpacing: "1px",
                cursor: "pointer",
                transition: "all 0.3s",
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: "-1px",
              }}
              onMouseEnter={(e) => { if (active !== i) e.currentTarget.style.color = "rgba(247,242,234,0.7)"; }}
              onMouseLeave={(e) => { if (active !== i) e.currentTarget.style.color = "rgba(247,242,234,0.35)"; }}
            >
              <span style={{ opacity: active === i ? 1 : 0.5 }}>{icons[a.id]}</span>
              {a.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}
          >
            {/* Image */}
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: -16, border: "1px solid rgba(201,162,39,0.1)", borderRadius: 2, pointerEvents: "none" }} />
              <img src={aud.image} alt={aud.label}
                style={{ width: "100%", height: "clamp(280px, 40vw, 440px)", objectFit: "cover", display: "block" }}
              />
              {/* Gold corner */}
              <div style={{ position: "absolute", bottom: 0, right: 0, width: 60, height: 60, borderBottom: "2px solid #e8c547", borderRight: "2px solid #e8c547" }} />
              <div style={{ position: "absolute", top: 0, left: 0, width: 60, height: 60, borderTop: "2px solid rgba(201,162,39,0.3)", borderLeft: "2px solid rgba(201,162,39,0.3)" }} />
            </div>

            {/* Info */}
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 400, color: "#f7f2ea", marginBottom: 20, lineHeight: 1.2, letterSpacing: "-0.3px" }}>
                {aud.headline}
              </h3>
              <p style={{ fontSize: "1.05rem", color: "rgba(247,242,234,0.5)", fontWeight: 300, lineHeight: 2, marginBottom: 36, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
                {aud.description}
              </p>

              {/* Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 44 }}>
                {aud.features.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ width: 1, height: 20, background: "linear-gradient(to bottom, #e8c547, rgba(201,162,39,0.2))", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.88rem", color: "rgba(247,242,234,0.65)", fontWeight: 300, letterSpacing: "0.3px" }}>{f}</span>
                  </div>
                ))}
              </div>

              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(aud.cta)}`}
                target="_blank" rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 12,
                  background: "linear-gradient(135deg, #c9a227, #e8c547)",
                  color: "#0a0f0a", padding: "16px 36px",
                  fontSize: "0.82rem", fontWeight: 700, textDecoration: "none",
                  letterSpacing: "2px", textTransform: "uppercase",
                  transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(201,162,39,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {aud.cta}
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
