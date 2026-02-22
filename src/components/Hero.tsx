"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      {/* ── 1. VIDEO – full viewport, clean ── */}
      <section style={{ height: "100vh", position: "relative", overflow: "hidden", background: "#0a0f1a" }}>
        <video
          autoPlay muted loop playsInline preload="auto"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        >
          <source
            src="https://res.cloudinary.com/decirk3zb/video/upload/q_auto,vc_auto/v1771798659/%D7%A1%D7%A8%D7%98%D7%95%D7%9F_%D7%94%D7%99%D7%A8%D7%95_vhoarz.mp4"
            type="video/mp4"
          />
        </video>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          onClick={() => document.getElementById("hero-content")?.scrollIntoView({ behavior: "smooth" })}
          style={{
            position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
            cursor: "pointer", zIndex: 3,
            display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          }}
        >
          <span style={{ fontSize: "0.58rem", letterSpacing: "3px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>גלול</span>
          <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, rgba(129,230,217,0.8), transparent)" }} />
        </motion.div>
      </section>

      {/* ── 2. TEXT – clean section below video ── */}
      <section id="hero-content" style={{ background: "#0a0f1a", padding: "80px 0 100px", position: "relative" }}>

        {/* Top shimmer line – visual bridge from video */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg, transparent, rgba(129,230,217,0.4), rgba(178,245,234,0.7), rgba(129,230,217,0.4), transparent)",
        }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 64, alignItems: "center" }}>

            {/* ── Left: text ── */}
            <div>
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 14, marginBottom: 24 }}
              >
                <span style={{ width: 36, height: 1, background: "linear-gradient(90deg, transparent, #81e6d9)" }} />
                <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "5px", textTransform: "uppercase", color: "#81e6d9" }}>
                  צוריאל · גליל מערבי
                </span>
              </motion.div>

              {/* Headlines */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.5px", marginBottom: 4 }}
              >
                לינת יוקרה
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-shimmer"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.5px", marginBottom: 32, display: "block" }}
              >
                בלב הגליל
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)", color: "rgba(224,247,250,0.65)", fontWeight: 300, lineHeight: 1.9, maxWidth: 520, marginBottom: 44, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
              >
                שלוש בקתות פרטיות עם ג׳קוזי, קמין ונוף אינסופי — המקום שבו הזמן מואט
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
              >
                <a href="#booking" style={{
                  background: "linear-gradient(135deg, #1a365d, #2d87ae, #4299e1)",
                  color: "#ffffff", padding: "16px 44px", borderRadius: 8,
                  fontWeight: 700, fontSize: "0.9rem", textDecoration: "none",
                  letterSpacing: "2px", textTransform: "uppercase",
                  boxShadow: "0 0 28px rgba(45,135,174,0.45), 0 4px 16px rgba(0,0,0,0.3)",
                  transition: "all 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
                  fontFamily: "'Heebo', sans-serif",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(45,135,174,0.7), 0 8px 24px rgba(0,0,0,0.4)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 28px rgba(45,135,174,0.45), 0 4px 16px rgba(0,0,0,0.3)"; }}
                >
                  בדקו זמינות
                </a>
                <a href="#cabins" style={{
                  background: "transparent", color: "#e0f7fa",
                  border: "1px solid rgba(129,230,217,0.3)",
                  padding: "16px 40px", borderRadius: 8,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.05rem", fontStyle: "italic",
                  textDecoration: "none", letterSpacing: "0.5px",
                  transition: "all 0.35s",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(129,230,217,0.6)"; e.currentTarget.style.color = "#81e6d9"; e.currentTarget.style.background = "rgba(45,135,174,0.08)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(129,230,217,0.3)"; e.currentTarget.style.color = "#e0f7fa"; e.currentTarget.style.background = "transparent"; }}
                >
                  הכירו את הבקתות
                </a>
              </motion.div>
            </div>

            {/* ── Right: stats ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              style={{ display: "flex", flexDirection: "column", borderRight: "1px solid rgba(66,153,225,0.12)", paddingRight: 48 }}
            >
              {[
                { num: "3", label: "בקתות פרטיות" },
                { num: "50+", label: "אורחים לאירועים" },
                { num: "4.9★", label: "דירוג ממוצע" },
              ].map((s, i) => (
                <div key={s.num} style={{
                  padding: "22px 0",
                  borderBottom: i < 2 ? "1px solid rgba(66,153,225,0.1)" : "none",
                  textAlign: "center",
                }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.4rem", fontWeight: 600, color: "#81e6d9", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: "0.6rem", color: "rgba(224,247,250,0.38)", letterSpacing: "2px", textTransform: "uppercase", marginTop: 6 }}>{s.label}</div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
