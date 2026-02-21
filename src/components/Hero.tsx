"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  });

  return (
    <section style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      {/* Background */}
      <div
        className="hero-bg-anim"
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(160deg, rgba(26,46,26,0.88) 0%, rgba(45,74,45,0.65) 50%, rgba(26,46,26,0.92) 100%), url('https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1800&q=80') center/cover no-repeat`,
        }}
      />

      {/* Grain overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.25,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 20px", maxWidth: 920 }}>
        <motion.div {...fadeUp(0.3)} style={{
          display: "inline-block",
          background: "rgba(201,162,39,0.15)",
          border: "1px solid rgba(201,162,39,0.45)",
          color: "#e8c547",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "3px",
          padding: "7px 22px",
          borderRadius: 50,
          marginBottom: 30,
          textTransform: "uppercase",
        }}>
          צוריאל, גליל מערבי
        </motion.div>

        <motion.h1
          {...fadeUp(0.5)}
          style={{
            fontFamily: "'Frank Ruhl Libre', serif",
            fontSize: "clamp(2.2rem, 6vw, 4.8rem)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.18,
            marginBottom: 26,
          }}
        >
          הגליל מחכה לכם:<br />
          <span style={{ color: "#e8c547" }}>רגעים של שקט</span><br />
          בבקתות עץ חמימות
        </motion.h1>

        <motion.p
          {...fadeUp(0.7)}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(245,240,232,0.82)",
            fontWeight: 300,
            lineHeight: 1.85,
            maxWidth: 640,
            margin: "0 auto 52px",
          }}
        >
          בין קמין עצים בוער לג׳קוזי פרטי מול הנוף – מצאנו לכם את המקום המושלם להתנתק מהרעש ולהתחבר לעצמכם.
        </motion.p>

        <motion.div {...fadeUp(0.9)} style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#booking"
            style={{
              background: "linear-gradient(135deg, #c9a227, #e8c547)",
              color: "#1a2e1a",
              padding: "18px 46px",
              borderRadius: 50,
              fontWeight: 800,
              fontSize: "1.05rem",
              textDecoration: "none",
              boxShadow: "0 8px 32px rgba(201,162,39,0.4)",
              letterSpacing: "0.5px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(201,162,39,0.5)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,162,39,0.4)"; }}
          >
            בדקו זמינות עכשיו ✦
          </a>
          <a
            href="#cabins"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.3)",
              padding: "18px 46px",
              borderRadius: 50,
              fontWeight: 400,
              fontSize: "1rem",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#e8c547"; e.currentTarget.style.color = "#e8c547"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#ffffff"; }}
          >
            הכירו את הבקתות
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <button
        className="scroll-bounce"
        onClick={() => document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "rgba(245,240,232,0.55)",
          zIndex: 2,
          padding: 8,
        }}
        aria-label="גלול למטה"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
