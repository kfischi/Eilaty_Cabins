"use client";
import { motion } from "framer-motion";

const stats = [
  { num: "3", label: "בקתות יוקרה" },
  { num: "50+", label: "אורחים לאירועים" },
  { num: "∞", label: "נוף גלילי מרהיב" },
  { num: "★ 4.9", label: "דירוג אורחים" },
];

export default function StatsStrip() {
  return (
    <div id="stats" style={{ background: "var(--forest, #1a2e1a)", padding: "28px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            style={{
              textAlign: "center",
              padding: "16px 48px",
              borderLeft: i < stats.length - 1 ? "1px solid rgba(201,162,39,0.2)" : "none",
            }}
          >
            <span style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "2rem", fontWeight: 700, color: "#e8c547", display: "block" }}>
              {s.num}
            </span>
            <span style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.6)", fontWeight: 300, letterSpacing: "1px" }}>
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
