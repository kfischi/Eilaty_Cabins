"use client";
import { motion } from "framer-motion";

const features = [
  { icon: "🏊", title: "בריכה מחוממת + בריכת ילדים", desc: "בריכה גדולה למבוגרים ובריכה מגודרת ובטוחה לילדים – שקט מוחלט בשבילכם." },
  { icon: "🔥", title: "מטבח חיצוני + גריל BBQ", desc: "ציוד מלא, שולחנות גדולים ואווירה שתגרום לכם לבשל כמו שף." },
  { icon: "🌲", title: "שטח ירוק ופרטי לחלוטין", desc: "המתחם כולו שלכם – גדר, פרטיות, ונוף גלילי שאי אפשר לשכוח." },
];

export default function Experience() {
  return (
    <section id="experience" style={{ background: "#1a2e1a", padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, alignItems: "center" }}>

          {/* Left – Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ color: "#c49a6c", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 24, height: 1, background: "#c49a6c", display: "inline-block" }} />
              המתחם שלנו
            </div>
            <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#f5f0e8", lineHeight: 1.25, marginBottom: 20 }}>
              החצר שלנו היא{" "}
              <span style={{ color: "#c49a6c" }}>הגן עדן שלכם</span>
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(245,240,232,0.68)", fontWeight: 300, lineHeight: 1.85, marginBottom: 40 }}>
              מתחם מגודר ומושקע עם כל מה שצריך לחופשה מושלמת – בטוח לילדים, מרשים למבוגרים.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  whileHover={{ x: -4, transition: { duration: 0.2 } }}
                  style={{
                    display: "flex", gap: 20, alignItems: "flex-start",
                    padding: 22,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(201,162,39,0.15)",
                    borderRadius: 16,
                    cursor: "default",
                  }}
                >
                  <div style={{
                    width: 52, height: 52,
                    background: "linear-gradient(135deg, #8B5E3C, #c49a6c)",
                    borderRadius: 14, display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 22, flexShrink: 0,
                  }}>
                    {f.icon}
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "1.1rem", fontWeight: 700, color: "#f5f0e8", marginBottom: 6 }}>
                      {f.title}
                    </h4>
                    <p style={{ fontSize: "0.84rem", color: "rgba(245,240,232,0.6)", fontWeight: 300, lineHeight: 1.65 }}>
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right – Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            {/* 📸 Replace with real aerial/pool photo */}
            {/* 🎬 Best place for drone video of property */}
            <img
              src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80"
              alt="בריכה ומתחם"
              style={{ width: "100%", height: "clamp(320px, 45vw, 500px)", objectFit: "cover", borderRadius: 24 }}
            />
            <div style={{
              position: "absolute", bottom: 24, right: 24,
              background: "rgba(26,46,26,0.92)", backdropFilter: "blur(12px)",
              border: "1px solid rgba(201,162,39,0.3)", borderRadius: 16,
              padding: "16px 22px", color: "#f5f0e8",
            }}>
              <strong style={{ display: "block", fontFamily: "'Frank Ruhl Libre', serif", fontSize: "1.2rem", color: "#e8c547" }}>
                100% פרטי
              </strong>
              <small style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.55)" }}>
                המתחם שלכם בלבד
              </small>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
