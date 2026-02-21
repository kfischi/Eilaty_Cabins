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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 60));
  }, [scrollY]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <motion.nav
        style={{
          position: "fixed", top: 0, width: "100%", zIndex: 1000,
          borderBottom: "1px solid rgba(201,162,39,0.2)",
        }}
        animate={{
          backgroundColor: scrolled || menuOpen ? "rgba(26,46,26,0.98)" : "rgba(26,46,26,0.7)",
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

          {/* Desktop nav links */}
          <div className="desktop-nav" style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {navLinks.map((item) => (
              <a key={item.href} href={item.href}
                style={{ color: "rgba(245,240,232,0.75)", textDecoration: "none", fontSize: "0.88rem", fontWeight: 400, transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e8c547")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.75)")}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="desktop-nav" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("היי! אני מעוניין לשמוע על בקתות צוריאל")}`}
              target="_blank" rel="noreferrer"
              aria-label="פתח WhatsApp"
              style={{
                width: 42, height: 42,
                background: "#25D366",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(37,211,102,0.35)",
                transition: "all 0.25s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,211,102,0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,211,102,0.35)"; }}
            >
              <svg viewBox="0 0 24 24" width={22} height={22} fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href="#booking"
              style={{ background: "linear-gradient(135deg, #c9a227, #e8c547)", color: "#1a2e1a", padding: "10px 24px", borderRadius: 50, fontSize: "0.9rem", fontWeight: 700, textDecoration: "none", transition: "all 0.3s", boxShadow: "0 4px 16px rgba(201,162,39,0.3)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,162,39,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(201,162,39,0.3)"; }}
            >
              בדקו זמינות
            </a>
          </div>

          {/* Hamburger Button - mobile only */}
          <motion.button
            className="hamburger-btn"
            onClick={() => setMenuOpen((p) => !p)}
            whileTap={{ scale: 0.92 }}
            style={{
              display: "none",
              flexDirection: "column",
              gap: 6,
              background: "rgba(201,162,39,0.15)",
              border: "1.5px solid rgba(201,162,39,0.4)",
              borderRadius: 12,
              padding: "10px 12px",
              cursor: "pointer",
              width: 52,
              height: 48,
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="תפריט"
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              style={{ display: "block", width: 24, height: 2, background: "#e8c547", borderRadius: 2, transformOrigin: "center" }} />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              style={{ display: "block", width: 18, height: 2, background: "#e8c547", borderRadius: 2 }} />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              style={{ display: "block", width: 24, height: 2, background: "#e8c547", borderRadius: 2, transformOrigin: "center" }} />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              left: 0,
              zIndex: 999,
              background: "rgba(15,28,15,0.98)",
              backdropFilter: "blur(20px)",
              paddingTop: 88,
              paddingBottom: 40,
              minHeight: "100dvh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Menu Title */}
            <div style={{
              textAlign: "center",
              marginBottom: 40,
              paddingBottom: 24,
              borderBottom: "1px solid rgba(201,162,39,0.2)",
              marginRight: 32,
              marginLeft: 32,
            }}>
              <div style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "1.6rem", fontWeight: 700, color: "#e8c547" }}>
                בקתות צוריאל
              </div>
              <div style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.5)", letterSpacing: "2px", textTransform: "uppercase", marginTop: 6 }}>
                צוריאל, גליל מערבי
              </div>
            </div>

            {/* Nav Links */}
            <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "0 32px", gap: 8 }}>
              {navLinks.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.35 }}
                  onClick={() => handleNavClick(item.href)}
                  style={{
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(201,162,39,0.12)",
                    color: "#f5f0e8",
                    fontSize: "1.4rem",
                    fontFamily: "'Frank Ruhl Libre', serif",
                    fontWeight: 700,
                    padding: "18px 0",
                    cursor: "pointer",
                    textAlign: "right",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e8c547")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#f5f0e8")}
                >
                  {item.label}
                  <span style={{ color: "rgba(201,162,39,0.5)", fontSize: "1rem" }}>←</span>
                </motion.button>
              ))}
            </div>

            {/* Bottom CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              style={{ padding: "24px 32px 0", display: "flex", flexDirection: "column", gap: 12 }}
            >
              <a
                href="#booking"
                onClick={() => handleNavClick("#booking")}
                style={{
                  display: "block", textAlign: "center",
                  background: "linear-gradient(135deg, #c9a227, #e8c547)",
                  color: "#1a2e1a", padding: "16px", borderRadius: 14,
                  fontWeight: 800, fontSize: "1.1rem", textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(201,162,39,0.35)",
                }}
              >
                בדקו זמינות עכשיו ✦
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank" rel="noreferrer"
                style={{
                  display: "block", textAlign: "center",
                  background: "#25D366", color: "#fff",
                  padding: "14px", borderRadius: 14,
                  fontWeight: 700, fontSize: "1rem", textDecoration: "none",
                }}
              >
                💬 WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
