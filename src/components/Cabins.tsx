"use client";
import { motion } from "framer-motion";
import { cabins, WHATSAPP_NUMBER } from "@/data/content";
import { useState } from "react";

export default function Cabins() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="cabins" style={{ background: "#0d0d1f", padding: "140px 0", position: "relative", overflow: "hidden" }}>
      {/* Background texture */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: "radial-gradient(circle, #7c6fcf 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 80, flexWrap: "wrap", gap: 24 }}
        >
          <div>
            <div className="section-tag">הלינה שלנו</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 400, color: "#f0eeff", lineHeight: 1.15, letterSpacing: "-0.3px" }}>
              שלוש בקתות,<br />
              <em style={{ color: "#a594f9", fontStyle: "italic" }}>חוויה אחת בלתי נשכחת</em>
            </h2>
          </div>
          <p style={{ fontSize: "0.9rem", color: "rgba(247,242,234,0.45)", fontWeight: 300, lineHeight: 1.9, maxWidth: 300, textAlign: "right" }}>
            כל בקתה מעוצבת בקפידה כיחידה עצמאית מלאה — עם כל מה שתצטרכו לחופשה מושלמת.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 2 }}>
          {cabins.map((cabin, i) => (
            <motion.div key={cabin.id}
              initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(cabin.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative", overflow: "hidden",
                cursor: "pointer",
                outline: cabin.featured ? "1px solid rgba(124,111,207,0.3)" : "none",
              }}
            >
              {/* Image */}
              <div style={{ height: 480, overflow: "hidden", position: "relative" }}>
                <motion.img
                  src={cabin.image} alt={cabin.name}
                  animate={{ scale: hovered === cabin.id ? 1.08 : 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(10,15,10,0.95) 0%, rgba(10,15,10,0.3) 50%, rgba(10,15,10,0.1) 100%)",
                }} />

                {/* Badges */}
                <div style={{ position: "absolute", top: 20, right: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                  {cabin.featured && (
                    <div style={{ background: "linear-gradient(135deg, #7c6fcf, #a594f9)", color: "#08080f", fontSize: "0.62rem", fontWeight: 800, padding: "5px 14px", letterSpacing: "2px", textTransform: "uppercase" }}>
                      BESTSELLER
                    </div>
                  )}
                  <div style={{ background: "rgba(10,15,10,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(124,111,207,0.2)", color: "#a594f9", fontSize: "0.7rem", fontWeight: 500, padding: "5px 14px", letterSpacing: "1px" }}>
                    {cabin.badge}
                  </div>
                </div>

                {/* Price overlay on image */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 28px 0" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 400, color: "#f0eeff", letterSpacing: "-0.5px" }}>
                    {cabin.name}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(124,111,207,0.7)", letterSpacing: "2px", textTransform: "uppercase", marginTop: 4, marginBottom: 20 }}>
                    {cabin.subtitle}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div style={{ background: "#111128", padding: "24px 28px 28px", borderTop: "1px solid rgba(124,111,207,0.08)" }}>
                {/* Amenities */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
                  {cabin.amenities.map((a, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ width: 30, height: 30, background: "rgba(124,111,207,0.08)", border: "1px solid rgba(124,111,207,0.12)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>
                        {a.icon}
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "rgba(247,242,234,0.55)", fontWeight: 300 }}>{a.label}</span>
                    </div>
                  ))}
                </div>

                {/* Price + CTA */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, color: "#a594f9" }}>
                      ₪{cabin.pricePerNight.toLocaleString()}
                    </span>
                    <span style={{ fontSize: "0.72rem", color: "rgba(247,242,234,0.35)", marginRight: 6, letterSpacing: "1px" }}>ללילה</span>
                  </div>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`היי! אני מעוניין לשמוע על בקתת ${cabin.name}`)}`}
                    target="_blank" rel="noreferrer"
                    style={{
                      background: "linear-gradient(135deg, #7c6fcf, #a594f9)",
                      color: "#08080f", padding: "12px 24px",
                      fontSize: "0.8rem", fontWeight: 700,
                      textDecoration: "none", letterSpacing: "1px",
                      textTransform: "uppercase",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(124,111,207,0.4)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    בדקו זמינות
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
