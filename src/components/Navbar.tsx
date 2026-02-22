"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/data/content";

const navLinks = [
  { label: "הבקתות", href: "#cabins" },
  { label: "החוויה", href: "#experience" },
  { label: "האזור", href: "#area" },
  { label: "הזמינו", href: "#booking" },
];

const WaIcon = () => (
  <svg viewBox="0 0 24 24" width={20} height={20} fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => scrollY.on("change", (v) => setScrolled(v > 60)), [scrollY]);
  useEffect(() => {
    const h = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 280);
  };

  return (
    <>
      <motion.nav
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
        animate={{
          backgroundColor: scrolled || menuOpen ? "rgba(10,15,10,0.97)" : "rgba(10,15,10,0.3)",
          backdropFilter: "blur(24px)",
          borderBottom: scrolled ? "1px solid rgba(45,135,174,0.15)" : "1px solid transparent",
          paddingTop: scrolled ? "12px" : "20px",
          paddingBottom: scrolled ? "12px" : "20px",
        }}
        transition={{ duration: 0.4 }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2.2rem",
              fontWeight: 700,
              letterSpacing: "0.5px",
              background: "linear-gradient(135deg, #81e6d9 0%, #4299e1 40%, #b2f5ea 70%, #4299e1 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 12px rgba(66,153,225,0.7))",
            }}>
              בקתות צוריאל
            </span>
            <span style={{ fontSize: "0.65rem", letterSpacing: "4px", color: "rgba(129,230,217,0.5)", textTransform: "uppercase", marginTop: 5 }}>
              גליל מערבי · לינת יוקרה
            </span>
          </a>

          {/* Desktop links */}
          <div className="desktop-nav" style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} style={{ color: "rgba(247,242,234,0.65)", textDecoration: "none", fontSize: "1rem", fontWeight: 400, letterSpacing: "0.3px", transition: "color 0.3s", position: "relative" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#4299e1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,242,234,0.65)")}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="desktop-nav" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {/* WhatsApp bubble */}
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("היי! אני מעוניין לשמוע על בקתות צוריאל")}`}
              target="_blank" rel="noreferrer" aria-label="WhatsApp"
              style={{ width: 40, height: 40, background: "#25D366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", boxShadow: "0 4px 16px rgba(37,211,102,0.3)", transition: "all 0.3s", flexShrink: 0 }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,211,102,0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,211,102,0.3)"; }}
            >
              <WaIcon />
            </a>
            <a href="#booking" style={{ background: "linear-gradient(135deg, #2d87ae, #4299e1)", color: "#0a0f1a", padding: "11px 26px", borderRadius: 50, fontSize: "0.95rem", fontWeight: 700, textDecoration: "none", letterSpacing: "0.3px", transition: "all 0.3s", boxShadow: "0 4px 20px rgba(45,135,174,0.3)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(45,135,174,0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(45,135,174,0.3)"; }}
            >
              בדקו זמינות
            </a>
          </div>

          {/* Mobile: WA + Hamburger */}
          <div className="mobile-nav" style={{ display: "none", alignItems: "center", gap: 10 }}>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("היי! אני מעוניין לשמוע על בקתות צוריאל")}`}
              target="_blank" rel="noreferrer" aria-label="WhatsApp"
              style={{ width: 38, height: 38, background: "#25D366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", flexShrink: 0 }}
            >
              <WaIcon />
            </a>
            <motion.button onClick={() => setMenuOpen((p) => !p)} whileTap={{ scale: 0.92 }}
              style={{ width: 44, height: 44, background: "rgba(45,135,174,0.12)", border: "1px solid rgba(45,135,174,0.3)", borderRadius: 10, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}
              aria-label="תפריט"
            >
              {[0, 1, 2].map((i) => (
                <motion.span key={i}
                  animate={i === 0 ? { rotate: menuOpen ? 45 : 0, y: menuOpen ? 9 : 0 } : i === 1 ? { opacity: menuOpen ? 0 : 1 } : { rotate: menuOpen ? -45 : 0, y: menuOpen ? -9 : 0 }}
                  style={{ display: "block", width: i === 1 ? 16 : 22, height: 1.5, background: "#4299e1", borderRadius: 2, transformOrigin: "center" }}
                />
              ))}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            style={{ position: "fixed", inset: 0, zIndex: 999, background: "rgba(10,15,10,0.98)", backdropFilter: "blur(24px)", paddingTop: 90, display: "flex", flexDirection: "column" }}
          >
            {/* Decorative gold line */}
            <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: "1px", background: "linear-gradient(90deg, transparent, #4299e1, transparent)" }} />

            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: "2.4rem", fontWeight: 700,
                background: "linear-gradient(135deg, #81e6d9, #4299e1, #b2f5ea)",
                WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 12px rgba(66,153,225,0.6))",
              }}>בקתות צוריאל</div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "5px", color: "rgba(247,242,234,0.35)", textTransform: "uppercase", marginTop: 6 }}>גליל מערבי · לינת יוקרה</div>
            </div>

            <div style={{ flex: 1, padding: "0 40px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 4 }}>
              {navLinks.map((item, i) => (
                <motion.button key={item.href}
                  initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  onClick={() => go(item.href)}
                  style={{ background: "none", border: "none", borderBottom: "1px solid rgba(45,135,174,0.08)", color: "#e8f4f8", fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 500, padding: "20px 0", cursor: "pointer", textAlign: "right", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", letterSpacing: "0.5px" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#4299e1")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#e8f4f8")}
                >
                  {item.label}
                  <span style={{ fontSize: "1rem", color: "rgba(45,135,174,0.4)", fontFamily: "Heebo" }}>←</span>
                </motion.button>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              style={{ padding: "32px 40px 48px", display: "flex", flexDirection: "column", gap: 12 }}
            >
              <a href="#booking" onClick={() => go("#booking")}
                style={{ display: "block", textAlign: "center", background: "linear-gradient(135deg, #2d87ae, #4299e1)", color: "#0a0f1a", padding: "18px", borderRadius: 14, fontWeight: 800, fontSize: "1.05rem", textDecoration: "none" }}>
                בדקו זמינות עכשיו ✦
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "#25D366", color: "#fff", padding: "16px", borderRadius: 14, fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>
                <WaIcon /> WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </>
  );
}
