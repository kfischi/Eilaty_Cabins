"use client";
import { motion } from "framer-motion";
import { reviews } from "@/data/content";

export default function Reviews() {
  return (
    <section style={{ background: "#1a2e1a", padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 60 }}
        >
          <div style={{ color: "#c49a6c", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 24, height: 1, background: "#c49a6c", display: "inline-block" }} />
            מה אומרים האורחים
          </div>
          <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#f5f0e8", lineHeight: 1.25 }}>
            חוויות <span style={{ color: "#c49a6c" }}>אמיתיות</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(201,162,39,0.15)",
                borderRadius: 20,
                padding: 28,
              }}
            >
              <div style={{ color: "#e8c547", fontSize: "1.1rem", marginBottom: 16 }}>
                {"★".repeat(r.rating)}
              </div>
              <p style={{ fontSize: "0.95rem", color: "rgba(245,240,232,0.78)", fontWeight: 300, lineHeight: 1.85, fontStyle: "italic", marginBottom: 22 }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 42, height: 42,
                  background: "linear-gradient(135deg, #8B5E3C, #c49a6c)",
                  borderRadius: "50%", display: "flex", alignItems: "center",
                  justifyContent: "center", fontWeight: 700, color: "#ffffff", fontSize: "1rem",
                }}>
                  {r.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: "#f5f0e8", fontSize: "0.9rem" }}>{r.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.45)" }}>{r.meta}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
