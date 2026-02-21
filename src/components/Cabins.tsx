"use client";
import { motion } from "framer-motion";
import { cabins, WHATSAPP_NUMBER } from "@/data/content";

export default function Cabins() {
  return (
    <section id="cabins" style={{ background: "#ede5d4", padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag" style={{ color: "#8B5E3C", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 24, height: 1, background: "#8B5E3C", display: "inline-block" }} />
            הלינה שלנו
          </div>
          <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#1a2e1a", lineHeight: 1.25, marginBottom: 16 }}>
            שלוש בקתות, <span style={{ color: "#8B5E3C" }}>חוויה אחת בלתי נשכחת</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#6b7280", fontWeight: 300, lineHeight: 1.8, maxWidth: 560 }}>
            כל בקתה מעוצבת כיחידה עצמאית מלאה עם כל מה שתצטרכו לחופשה מושלמת.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28, marginTop: 60 }}>
          {cabins.map((cabin, i) => (
            <motion.div
              key={cabin.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              style={{
                background: "#ffffff",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 4px 30px rgba(26,46,26,0.12)",
              }}
            >
              {/* Image */}
              <div style={{ height: 260, position: "relative", overflow: "hidden" }}>
                {/* 📸 Replace with actual cabin photo */}
                <img
                  src={cabin.image}
                  alt={cabin.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div style={{
                  position: "absolute", top: 16, right: 16,
                  background: "rgba(26,46,26,0.85)", backdropFilter: "blur(8px)",
                  color: "#e8c547", fontSize: "0.74rem", fontWeight: 600,
                  padding: "6px 14px", borderRadius: 50,
                  border: "1px solid rgba(201,162,39,0.3)", letterSpacing: "1px",
                }}>
                  {cabin.badge}
                </div>
                {cabin.featured && (
                  <div style={{
                    position: "absolute", top: 16, left: 16,
                    background: "linear-gradient(135deg, #c9a227, #e8c547)",
                    color: "#1a2e1a", fontSize: "0.7rem", fontWeight: 800,
                    padding: "5px 12px", borderRadius: 50, letterSpacing: "0.5px",
                  }}>
                    BESTSELLER
                  </div>
                )}
              </div>

              {/* Body */}
              <div style={{ padding: 28 }}>
                <div style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "1.6rem", fontWeight: 700, color: "#1a2e1a", marginBottom: 6 }}>
                  {cabin.name}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#8B5E3C", fontWeight: 500, marginBottom: 20, letterSpacing: "0.5px" }}>
                  {cabin.subtitle}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
                  {cabin.amenities.map((a, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.82rem", color: "#3a3d40" }}>
                      <span style={{ width: 28, height: 28, background: "#ede5d4", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>
                        {a.icon}
                      </span>
                      {a.label}
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 20 }}>
                  <span style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "1.8rem", fontWeight: 700, color: "#1a2e1a" }}>
                    ₪{cabin.pricePerNight.toLocaleString()}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>ללילה</span>
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=היי! אני מעוניין לשמוע על בקתת ${cabin.name} ולבדוק זמינות`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "block", textAlign: "center",
                    background: "#1a2e1a", color: "#f5f0e8",
                    padding: 14, borderRadius: 12, textDecoration: "none",
                    fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.5px",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#3d6b3d"; e.currentTarget.style.color = "#e8c547"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#1a2e1a"; e.currentTarget.style.color = "#f5f0e8"; }}
                >
                  בדקו זמינות
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
