"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#08080f" }}>

      {/* Video background with parallax */}
      <motion.div style={{ position: "absolute", inset: 0, y }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center",
          }}
        >
          <source
            src="https://res.cloudinary.com/decirk3zb/video/upload/q_auto,vc_auto/v1771798659/%D7%A1%D7%A8%D7%98%D7%95%D7%9F_%D7%94%D7%99%D7%A8%D7%95_vhoarz.mp4"
            type="video/mp4"
          />
        </video>
        {/* Multi-layer gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(8,8,15,0.3) 0%, rgba(8,8,15,0.05) 30%, rgba(8,8,15,0.5) 60%, rgba(8,8,15,0.92) 85%, rgba(8,8,15,0.98) 100%)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 60% 40%, rgba(18,20,58,0.25) 0%, transparent 70%)",
        }} />
      </motion.div>

      {/* Noise grain */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none", opacity: 0.4,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
      }} />

      {/* Decorative rotating ring */}
      <motion.div className="rotate-slow" style={{
        position: "absolute", zIndex: 2, pointerEvents: "none",
        width: 600, height: 600,
        border: "1px solid rgba(124,111,207,0.06)",
        borderRadius: "50%",
      }} />
      <motion.div className="rotate-slow" style={{
        position: "absolute", zIndex: 2, pointerEvents: "none",
        width: 800, height: 800,
        border: "1px solid rgba(124,111,207,0.04)",
        borderRadius: "50%",
        animationDirection: "reverse",
      }} />

      {/* Content – glass card anchored to bottom */}
      <motion.div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3, padding: "0 0 0", opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            margin: "0 32px 48px",
            padding: "44px 52px",
            background: "linear-gradient(135deg, rgba(18,20,58,0.75) 0%, rgba(30,20,70,0.65) 50%, rgba(10,8,30,0.8) 100%)",
            backdropFilter: "blur(28px) saturate(180%)",
            WebkitBackdropFilter: "blur(28px) saturate(180%)",
            border: "1px solid rgba(165,148,249,0.25)",
            borderRadius: 20,
            boxShadow: "0 8px 64px rgba(8,8,15,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Shimmer top border */}
          <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 1, background: "linear-gradient(90deg, transparent, rgba(165,148,249,0.6), rgba(196,184,255,0.8), rgba(165,148,249,0.6), transparent)" }} />

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          style={{ display: "inline-flex", alignItems: "center", gap: 16, marginBottom: 28 }}
        >
          <span style={{ width: 40, height: 1, background: "linear-gradient(90deg, transparent, #7c6fcf)" }} />
          <span style={{ fontFamily: "'Heebo'", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "5px", textTransform: "uppercase", color: "#c4b8ff" }}>
            צוריאל · גליל מערבי
          </span>
          <span style={{ width: 40, height: 1, background: "linear-gradient(90deg, #7c6fcf, transparent)" }} />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem, 6vw, 5.5rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.05, letterSpacing: "-1px", marginBottom: 4, textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
        >
          לינת יוקרה
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-shimmer"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem, 6vw, 5.5rem)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-1px", marginBottom: 24, display: "block", filter: "drop-shadow(0 0 20px rgba(165,148,249,0.4))" }}
        >
          בלב הגליל
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9 }}
          style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "rgba(240,238,255,0.82)", fontWeight: 300, lineHeight: 1.8, maxWidth: 520, marginBottom: 36, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", letterSpacing: "0.3px" }}
        >
          שלוש בקתות פרטיות עם ג׳קוזי, קמין ונוף אינסופי — המקום שבו הזמן מואט
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.1 }}
          style={{ display: "flex", gap: 14, justifyContent: "flex-start", flexWrap: "wrap" }}
        >
          <a href="#booking" className="glow-anim"
            style={{
              background: "linear-gradient(135deg, #7c6fcf, #a594f9, #c4b8ff)",
              color: "#08080f", padding: "18px 48px", borderRadius: 8,
              fontWeight: 800, fontSize: "0.95rem", textDecoration: "none",
              letterSpacing: "2px", textTransform: "uppercase",
              boxShadow: "0 0 32px rgba(165,148,249,0.5), 0 4px 16px rgba(0,0,0,0.3)",
              transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px) scale(1.02)"; e.currentTarget.style.letterSpacing = "3px"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.letterSpacing = "2px"; }}
          >
            בדקו זמינות
          </a>
          <a href="#cabins"
            style={{
              background: "transparent", color: "#f0eeff",
              border: "1px solid rgba(165,148,249,0.4)",
              padding: "20px 52px", borderRadius: 2,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.05rem", fontStyle: "italic",
              textDecoration: "none", letterSpacing: "1px",
              transition: "all 0.4s",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(124,111,207,0.5)"; e.currentTarget.style.color = "#a594f9"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(247,242,234,0.2)"; e.currentTarget.style.color = "#f0eeff"; }}
          >
            הכירו את הבקתות
          </a>
        </motion.div>

        {/* Stats strip – compact row */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}
          style={{ display: "flex", gap: 32, marginTop: 40, flexWrap: "wrap" }}
        >
          {[
            { num: "3", label: "בקתות פרטיות" },
            { num: "50+", label: "אורחים לאירועים" },
            { num: "4.9★", label: "דירוג ממוצע" },
          ].map((s, i) => (
            <div key={s.num} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {i > 0 && <div style={{ width: 1, height: 28, background: "rgba(165,148,249,0.2)" }} />}
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 600, color: "#c4b8ff", lineHeight: 1, textShadow: "0 0 16px rgba(196,184,255,0.5)" }}>{s.num}</div>
                <div style={{ fontSize: "0.6rem", color: "rgba(247,242,234,0.4)", letterSpacing: "2px", textTransform: "uppercase", marginTop: 3 }}>{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <button className="scroll-bounce"
        onClick={() => document.getElementById("cabins")?.scrollIntoView({ behavior: "smooth" })}
        style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", background: "none", border: "none", cursor: "pointer", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
        aria-label="גלול למטה"
      >
        <span style={{ fontSize: "0.6rem", letterSpacing: "3px", color: "rgba(247,242,234,0.3)", textTransform: "uppercase" }}>גלול</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(124,111,207,0.6), transparent)" }} />
      </button>
    </section>
  );
}
