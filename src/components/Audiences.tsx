"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { audiences, WHATSAPP_NUMBER } from "@/data/content";

const icons: Record<string, React.ReactNode> = {
  couples: (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  families: (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  events: (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
};

export default function Audiences() {
  const [active, setActive] = useState(0);
  const aud = audiences[active];

  return (
    <section style={{ background: "#0c0c1e", padding: "140px 0", position: "relative", overflow: "hidden" }}>
      {/* Glow background */}
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 800, height: 500, background: "radial-gradient(ellipse, rgba(124,111,207,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>

        {/* Header – bigger, clearer */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ marginBottom: 20 }}
        >
          <div className="section-tag">למי הבקתות מתאימות?</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem, 5.5vw, 4.4rem)", fontWeight: 400, color: "#f0eeff", lineHeight: 1.15, letterSpacing: "-0.5px", maxWidth: 700 }}>
            כל אחד מוצא<br />
            <em style={{ color: "#a594f9", fontStyle: "italic" }}>את מקומו אצלנו</em>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(240,238,255,0.55)", fontWeight: 300, marginTop: 20, maxWidth: 520, lineHeight: 1.8 }}>
            בחרו את הקטגוריה שמתאימה לכם — ותגלו מה מחכה לכם
          </p>
        </motion.div>

        {/* Tabs – bigger, more prominent */}
        <div style={{ display: "flex", gap: 12, margin: "48px 0 64px", flexWrap: "wrap" }}>
          {audiences.map((a, i) => (
            <button key={a.id} onClick={() => setActive(i)}
              style={{
                padding: "14px 32px",
                border: active === i ? "1px solid rgba(165,148,249,0.6)" : "1px solid rgba(165,148,249,0.15)",
                borderRadius: 50,
                background: active === i ? "rgba(124,111,207,0.2)" : "transparent",
                color: active === i ? "#a594f9" : "rgba(240,238,255,0.45)",
                fontFamily: "'Heebo', sans-serif",
                fontWeight: active === i ? 700 : 400,
                fontSize: "1rem",
                letterSpacing: "0.3px",
                cursor: "pointer",
                transition: "all 0.3s",
                display: "flex", alignItems: "center", gap: 10,
                backdropFilter: active === i ? "blur(8px)" : "none",
              }}
              onMouseEnter={(e) => { if (active !== i) { e.currentTarget.style.borderColor = "rgba(165,148,249,0.35)"; e.currentTarget.style.color = "rgba(240,238,255,0.7)"; }}}
              onMouseLeave={(e) => { if (active !== i) { e.currentTarget.style.borderColor = "rgba(165,148,249,0.15)"; e.currentTarget.style.color = "rgba(240,238,255,0.45)"; }}}
            >
              <span style={{ opacity: active === i ? 1 : 0.5 }}>{icons[a.id]}</span>
              <span style={{ fontSize: "1.05rem" }}>{a.label}</span>
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
              <div style={{ position: "absolute", inset: -16, border: "1px solid rgba(165,148,249,0.08)", borderRadius: 2, pointerEvents: "none" }} />
              <img src={aud.image} alt={aud.label}
                style={{ width: "100%", height: "clamp(280px, 40vw, 460px)", objectFit: "cover", display: "block" }}
              />
              <div style={{ position: "absolute", bottom: 0, right: 0, width: 60, height: 60, borderBottom: "2px solid #a594f9", borderRight: "2px solid #a594f9" }} />
              <div style={{ position: "absolute", top: 0, left: 0, width: 60, height: 60, borderTop: "2px solid rgba(165,148,249,0.25)", borderLeft: "2px solid rgba(165,148,249,0.25)" }} />
            </div>

            {/* Info */}
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#f0eeff", marginBottom: 16, lineHeight: 1.2, letterSpacing: "-0.3px" }}>
                {aud.headline}
              </h3>
              <p style={{ fontSize: "1.1rem", color: "rgba(240,238,255,0.6)", fontWeight: 300, lineHeight: 1.9, marginBottom: 36 }}>
                {aud.description}
              </p>

              {/* Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 44 }}>
                {aud.features.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(124,111,207,0.2)", border: "1px solid rgba(165,148,249,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="#a594f9" strokeWidth={3}><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span style={{ fontSize: "0.95rem", color: "rgba(240,238,255,0.7)", fontWeight: 400, letterSpacing: "0.2px" }}>{f}</span>
                  </div>
                ))}
              </div>

              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(aud.cta)}`}
                target="_blank" rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 12,
                  background: "linear-gradient(135deg, #7c6fcf, #a594f9)",
                  color: "#f0eeff", padding: "18px 40px",
                  fontSize: "0.9rem", fontWeight: 700, textDecoration: "none",
                  letterSpacing: "1.5px", textTransform: "uppercase",
                  transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                  boxShadow: "0 8px 32px rgba(124,111,207,0.3)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(124,111,207,0.5)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(124,111,207,0.3)"; }}
              >
                {aud.cta}
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
