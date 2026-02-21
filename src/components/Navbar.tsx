"use client";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 60));
  }, [scrollY]);

  return (
    <motion.nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        borderBottom: "1px solid rgba(201,162,39,0.2)",
      }}
      animate={{
        backgroundColor: scrolled ? "rgba(26,46,26,0.97)" : "rgba(26,46,26,0.7)",
        backdropFilter: "blur(16px)",
        paddingTop: scrolled ? "10px" : "16px",
        paddingBottom: scrolled ? "10px" : "16px",
      }}
      transition={{ duration: 0.3 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Frank Ruhl Libre', serif", color: "#e8c547", fontSize: "1.3rem", fontWeight: 700 }}>
            בקתות <span style={{ color: "#f5f0e8", fontWeight: 300 }}>צוריאל</span>
          </span>
        </a>

        {/* Nav links – hidden on mobile */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="nav-links">
          {["הבקתות", "החוויה", "האזור", "הזמינו"].map((item, i) => {
            const hrefs = ["#cabins", "#experience", "#area", "#booking"];
            return (
              <a
                key={i}
                href={hrefs[i]}
                style={{ color: "rgba(245,240,232,0.75)", textDecoration: "none", fontSize: "0.88rem", fontWeight: 400, transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e8c547")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.75)")}
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "transparent",
              color: "#f5f0e8",
              border: "1px solid rgba(245,240,232,0.3)",
              padding: "9px 20px",
              borderRadius: 50,
              fontSize: "0.85rem",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#e8c547"; e.currentTarget.style.color = "#e8c547"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(245,240,232,0.3)"; e.currentTarget.style.color = "#f5f0e8"; }}
          >
            WhatsApp
          </a>
          <a
            href="#booking"
            style={{
              background: "linear-gradient(135deg, #c9a227, #e8c547)",
              color: "#1a2e1a",
              border: "none",
              padding: "10px 24px",
              borderRadius: 50,
              fontSize: "0.9rem",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.3s",
              boxShadow: "0 4px 16px rgba(201,162,39,0.3)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,162,39,0.4)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(201,162,39,0.3)"; }}
          >
            בדקו זמינות
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}
