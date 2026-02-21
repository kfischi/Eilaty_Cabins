"use client";
import { motion } from "framer-motion";
import { attractions, dining } from "@/data/content";
import { Attraction } from "@/types";

function AttractionCard({ item, index }: { item: Attraction; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ x: -4, transition: { duration: 0.2 } }}
      style={{
        background: "#ffffff",
        borderRadius: 14,
        padding: "16px 20px",
        display: "flex",
        gap: 16,
        alignItems: "flex-start",
        border: "1px solid transparent",
        transition: "border-color 0.3s, box-shadow 0.3s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#c49a6c";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(139,94,60,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "transparent";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <span style={{ fontSize: 26, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
      <div>
        <h4 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1a2e1a", marginBottom: 4 }}>{item.name}</h4>
        <p style={{ fontSize: "0.82rem", color: "#6b7280", fontWeight: 300, lineHeight: 1.6 }}>{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function AreaGuide() {
  return (
    <section id="area" style={{ background: "#ede5d4", padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 60 }}
        >
          <div style={{ color: "#8B5E3C", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 24, height: 1, background: "#8B5E3C", display: "inline-block" }} />
            סביבת המתחם
          </div>
          <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#1a2e1a", lineHeight: 1.25, marginBottom: 16 }}>
            הגליל <span style={{ color: "#8B5E3C" }}>ממתין לכם בחוץ</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#6b7280", fontWeight: 300, lineHeight: 1.8, maxWidth: 560 }}>
            צוריאל שוכנת בלב הגליל המערבי – דקות ספורות מהרפתקאות, טבע, אוכל מדהים ויין בוטיק.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40 }}>
          {/* Attractions */}
          <div>
            <h3 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "1.3rem", color: "#1a2e1a", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #c49a6c", display: "flex", alignItems: "center", gap: 10 }}>
              🏕️ פעילויות והרפתקאות
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {attractions.map((a, i) => <AttractionCard key={i} item={a} index={i} />)}
            </div>
          </div>

          {/* Dining */}
          <div>
            <h3 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "1.3rem", color: "#1a2e1a", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #c49a6c", display: "flex", alignItems: "center", gap: 10 }}>
              🍷 אוכל ושתייה
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {dining.map((d, i) => <AttractionCard key={i} item={d} index={i} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
