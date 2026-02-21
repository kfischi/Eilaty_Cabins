"use client";
import { motion } from "framer-motion";

const stats = [
  { num: "3", label: "בקתות פרטיות" },
  { num: "5★", label: "דירוג ממוצע" },
  { num: "∞", label: "נוף גלילי" },
  { num: "50+", label: "אורחים לאירועים" },
];

export default function StatsStrip() {
  return (
    <section id="stats" style={{ background: "#0a0f0a", borderTop: "1px solid rgba(201,162,39,0.1)", borderBottom: "1px solid rgba(201,162,39,0.1)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{
                padding: "44px 0", textAlign: "center",
                borderLeft: i > 0 ? "1px solid rgba(201,162,39,0.08)" : "none",
              }}
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.6rem", fontWeight: 600, color: "#e8c547", lineHeight: 1 }}>
                {s.num}
              </div>
              <div style={{ fontSize: "0.65rem", color: "rgba(247,242,234,0.35)", letterSpacing: "3px", textTransform: "uppercase", marginTop: 10 }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
