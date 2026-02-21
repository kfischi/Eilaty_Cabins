"use client";
import { motion } from "framer-motion";
import { reviews } from "@/data/content";

export default function Reviews() {
  return (
    <section id="reviews" style={{ background: "#0a0f0a", padding: "140px 0", position: "relative", overflow: "hidden" }}>
      {/* Background quote marks */}
      <div style={{ position: "absolute", top: 60, right: "5%", fontFamily: "'Cormorant Garamond', serif", fontSize: "20rem", color: "rgba(201,162,39,0.03)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>״</div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <div className="section-tag" style={{ justifyContent: "center" }}>ביקורות אורחים</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, color: "#f7f2ea", letterSpacing: "-0.3px" }}>
            מה אומרים עלינו
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {reviews.map((r, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.8 }}
              style={{
                background: "linear-gradient(145deg, rgba(26,46,26,0.3), rgba(10,15,10,0.6))",
                border: "1px solid rgba(201,162,39,0.1)",
                borderRadius: 2, padding: "40px 36px",
                position: "relative",
                transition: "all 0.4s",
              }}
              whileHover={{ borderColor: "rgba(201,162,39,0.3)", y: -6 }}
            >
              {/* Stars */}
              <div style={{ marginBottom: 24, color: "#e8c547", fontSize: "0.85rem", letterSpacing: 2 }}>
                {"★".repeat(r.rating)}
              </div>

              {/* Quote */}
              <div style={{ fontFamily: "'Cormorant Garamond', serif", position: "absolute", top: 20, left: 28, fontSize: "3rem", color: "rgba(201,162,39,0.15)", lineHeight: 1 }}>
                "
              </div>

              <p style={{ fontSize: "0.95rem", color: "rgba(247,242,234,0.65)", lineHeight: 1.9, fontWeight: 300, marginBottom: 28, fontStyle: "italic", fontFamily: "'Cormorant Garamond', serif" }}>
                {r.text}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 14, borderTop: "1px solid rgba(201,162,39,0.08)", paddingTop: 20 }}>
                <div style={{ width: 40, height: 40, background: "linear-gradient(135deg, #1a2e1a, #3a5c3a)", border: "1px solid rgba(201,162,39,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "#e8c547", fontWeight: 600, flexShrink: 0 }}>
                  {r.initials}
                </div>
                <div>
                  <div style={{ fontSize: "0.88rem", color: "#f7f2ea", fontWeight: 500 }}>{r.name}</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(247,242,234,0.35)", letterSpacing: "1px", marginTop: 2 }}>{r.meta}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
