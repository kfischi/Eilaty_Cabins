"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#0a0f0a" }}>

      {/* Parallax background */}
      <motion.div style={{ position: "absolute", inset: "-20%", y }}
        className="hero-bg-anim"
      >
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url('https://res.cloudinary.com/decirk3zb/image/upload/q_auto,f_auto,w_1800/v1771705562/WhatsApp_Image_2026-02-19_at_22.03.37_7_fwm7yz.jpg')`,
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        {/* Multi-layer gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(10,15,10,0.5) 0%, rgba(10,15,10,0.2) 40%, rgba(10,15,10,0.7) 80%, rgba(10,15,10,0.95) 100%)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 60% 40%, rgba(26,46,26,0.3) 0%, transparent 70%)",
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
        border: "1px solid rgba(201,162,39,0.06)",
        borderRadius: "50%",
      }} />
      <motion.div className="rotate-slow" style={{
        position: "absolute", zIndex: 2, pointerEvents: "none",
        width: 800, height: 800,
        border: "1px solid rgba(201,162,39,0.04)",
        borderRadius: "50%",
        animationDirection: "reverse",
      }} />

      {/* Content */}
      <motion.div style={{ position: "relative", zIndex: 3, textAlign: "center", padding: "0 24px", maxWidth: 960, opacity }}>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          style={{ display: "inline-flex", alignItems: "center", gap: 16, marginBottom: 40 }}
        >
          <span style={{ width: 40, height: 1, background: "linear-gradient(90deg, transparent, #c9a227)" }} />
          <span style={{ fontFamily: "'Heebo'", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "5px", textTransform: "uppercase", color: "#c9a227" }}>
            צוריאל · גליל מערבי
          </span>
          <span style={{ width: 40, height: 1, background: "linear-gradient(90deg, #c9a227, transparent)" }} />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.8rem, 7vw, 6.5rem)", fontWeight: 300, color: "#f7f2ea", lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: 8 }}
        >
          לינת יוקרה
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-shimmer"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.8rem, 7vw, 6.5rem)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: 36, display: "block" }}
        >
          בלב הגליל
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9 }}
          style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "rgba(247,242,234,0.65)", fontWeight: 300, lineHeight: 2, maxWidth: 560, margin: "0 auto 56px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", letterSpacing: "0.3px" }}
        >
          שלוש בקתות פרטיות עם ג׳קוזי, קמין ונוף אינסופי — המקום שבו הזמן מואט
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.1 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
        >
          <a href="#booking" className="glow-anim"
            style={{
              background: "linear-gradient(135deg, #c9a227, #e8c547, #f5d76e)",
              color: "#0a0f0a", padding: "20px 52px", borderRadius: 2,
              fontWeight: 700, fontSize: "0.9rem", textDecoration: "none",
              letterSpacing: "2px", textTransform: "uppercase",
              transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px) scale(1.02)"; e.currentTarget.style.letterSpacing = "3px"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.letterSpacing = "2px"; }}
          >
            בדקו זמינות
          </a>
          <a href="#cabins"
            style={{
              background: "transparent", color: "#f7f2ea",
              border: "1px solid rgba(247,242,234,0.2)",
              padding: "20px 52px", borderRadius: 2,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.05rem", fontStyle: "italic",
              textDecoration: "none", letterSpacing: "1px",
              transition: "all 0.4s",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,162,39,0.5)"; e.currentTarget.style.color = "#e8c547"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(247,242,234,0.2)"; e.currentTarget.style.color = "#f7f2ea"; }}
          >
            הכירו את הבקתות
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}
          style={{ display: "flex", gap: 48, justifyContent: "center", marginTop: 72, flexWrap: "wrap" }}
        >
          {[
            { num: "3", label: "בקתות פרטיות" },
            { num: "50+", label: "אורחים לאירועים" },
            { num: "4.9★", label: "דירוג ממוצע" },
          ].map((s) => (
            <div key={s.num} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 600, color: "#e8c547", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: "0.7rem", color: "rgba(247,242,234,0.45)", letterSpacing: "2px", textTransform: "uppercase", marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <button className="scroll-bounce"
        onClick={() => document.getElementById("cabins")?.scrollIntoView({ behavior: "smooth" })}
        style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", background: "none", border: "none", cursor: "pointer", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
        aria-label="גלול למטה"
      >
        <span style={{ fontSize: "0.6rem", letterSpacing: "3px", color: "rgba(247,242,234,0.3)", textTransform: "uppercase" }}>גלול</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(201,162,39,0.6), transparent)" }} />
      </button>
    </section>
  );
}
