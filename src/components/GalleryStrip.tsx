"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/data/content";

// All 16 real images with categories and labels
const allPhotos = [
  { src: IMAGES.view1,     cat: "נוף",      label: "נוף פנורמי על הגליל",        span: "wide" },
  { src: IMAGES.jacuzzi,   cat: "ספא",      label: "ג׳קוזי פרטי מחומם",          span: "tall" },
  { src: IMAGES.barbur1,   cat: "בקתות",    label: "בקתת ברבור — פנים",          span: "normal" },
  { src: IMAGES.pool1,     cat: "מתחם",     label: "בריכת המתחם",                span: "normal" },
  { src: IMAGES.flamingo1, cat: "בקתות",    label: "בקתת פלמינגו",               span: "tall" },
  { src: IMAGES.nature1,   cat: "טבע",      label: "יער הגליל",                   span: "normal" },
  { src: IMAGES.interior1, cat: "פנים",     label: "עיצוב פנים יוקרתי",          span: "wide" },
  { src: IMAGES.bbq,       cat: "מתחם",     label: "פינת BBQ ומרפסת",            span: "normal" },
  { src: IMAGES.hasida1,   cat: "בקתות",    label: "בקתת חסידה — חדר שינה",     span: "normal" },
  { src: IMAGES.pool2,     cat: "מתחם",     label: "בריכה בשעת ערב",             span: "wide" },
  { src: IMAGES.view2,     cat: "נוף",      label: "שקיעה מהמרפסת",              span: "normal" },
  { src: IMAGES.barbur2,   cat: "בקתות",    label: "בקתת ברבור — מרפסת",        span: "tall" },
  { src: IMAGES.nature2,   cat: "טבע",      label: "שבילי הטבע סביב המתחם",     span: "normal" },
  { src: IMAGES.flamingo2, cat: "בקתות",    label: "בקתת פלמינגו — פינת ישיבה", span: "normal" },
  { src: IMAGES.interior2, cat: "פנים",     label: "מטבח מאובזר",               span: "normal" },
  { src: IMAGES.hasida2,   cat: "בקתות",    label: "בקתת חסידה — סלון",         span: "wide" },
];

const cats = ["הכל", "בקתות", "ספא", "מתחם", "נוף", "טבע", "פנים"];

export default function GalleryStrip() {
  const [activecat, setActivecat] = useState("הכל");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const headerY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const filtered = activecat === "הכל" ? allPhotos : allPhotos.filter(p => p.cat === activecat);

  // Keyboard lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") setLightbox(i => i !== null ? (i + 1) % filtered.length : null);
      if (e.key === "ArrowRight") setLightbox(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, filtered.length]);

  return (
    <section ref={sectionRef} id="gallery" style={{ background: "#08080f", padding: "140px 0 160px", position: "relative", overflow: "hidden" }}>

      {/* Ambient glow */}
      <div style={{ position: "absolute", top: "30%", right: "20%", width: 600, height: 600, background: "radial-gradient(circle, rgba(124,111,207,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "20%", left: "10%", width: 400, height: 400, background: "radial-gradient(circle, rgba(100,80,180,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 28px" }}>

        {/* Header */}
        <motion.div style={{ y: headerY }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="section-tag">גלריית המתחם</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 300, color: "#f0eeff", lineHeight: 1.1, letterSpacing: "-0.5px" }}>
              ראו לפני<br />
              <em style={{ fontWeight: 600, color: "#a594f9" }}>שתחליטו</em>
            </h2>
            <p style={{ fontSize: "0.9rem", color: "rgba(240,238,255,0.4)", maxWidth: 260, lineHeight: 1.8, textAlign: "right" }}>
              {filtered.length} תמונות אמיתיות מהמתחם — ללא פילטרים, ללא הפתעות
            </p>
          </div>

          {/* Category filter pills */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 56 }}>
            {cats.map(cat => (
              <motion.button key={cat} onClick={() => setActivecat(cat)}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "9px 20px", borderRadius: 50, cursor: "pointer",
                  border: activecat === cat ? "1px solid transparent" : "1px solid rgba(165,148,249,0.12)",
                  background: activecat === cat ? "linear-gradient(135deg, #7c6fcf, #a594f9)" : "rgba(165,148,249,0.07)",
                  color: activecat === cat ? "#fff" : "rgba(240,238,255,0.45)",
                  fontSize: "0.82rem", fontWeight: activecat === cat ? 700 : 400,
                  fontFamily: "'Heebo', sans-serif",
                  letterSpacing: "0.5px",
                  boxShadow: activecat === cat ? "0 4px 20px rgba(124,111,207,0.4)" : "none",
                  transition: "all 0.3s cubic-bezier(0.23,1,0.32,1)",
                }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Netflix-style masonry grid */}
        <motion.div layout style={{
          columns: "3 280px",
          gap: 10,
          columnFill: "balance",
        }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((photo, i) => (
              <motion.div key={photo.src}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setLightbox(i)}
                style={{
                  breakInside: "avoid",
                  marginBottom: 10,
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  display: "block",
                  borderRadius: 2,
                  // tall spans for certain images
                  ...(photo.span === "tall" && {}),
                }}
              >
                {/* Image */}
                <motion.img
                  src={photo.src}
                  alt={photo.label}
                  loading="lazy"
                  animate={{ scale: hovered === i ? 1.07 : 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ width: "100%", display: "block", verticalAlign: "bottom" }}
                />

                {/* Hover overlay */}
                <motion.div
                  animate={{ opacity: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(8,8,15,0.92) 0%, rgba(8,8,15,0.3) 50%, transparent 100%)",
                    display: "flex", flexDirection: "column", justifyContent: "flex-end",
                    padding: "20px 18px",
                  }}
                >
                  {/* Cat badge */}
                  <div style={{
                    display: "inline-block", alignSelf: "flex-start",
                    background: "rgba(124,111,207,0.85)", backdropFilter: "blur(8px)",
                    color: "#fff", fontSize: "0.65rem", fontWeight: 700,
                    padding: "4px 10px", letterSpacing: "2px", textTransform: "uppercase",
                    marginBottom: 8,
                  }}>
                    {photo.cat}
                  </div>

                  {/* Label */}
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: "#f0eeff", lineHeight: 1.3 }}>
                    {photo.label}
                  </div>

                  {/* Expand icon */}
                  <div style={{ position: "absolute", top: 14, left: 14, width: 32, height: 32, background: "rgba(165,148,249,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(165,148,249,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="#a594f9" strokeWidth={2.5}><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Count indicator */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: 48, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}
        >
          <div style={{ height: 1, flex: 1, background: "linear-gradient(90deg, transparent, rgba(165,148,249,0.2))" }} />
          <span style={{ fontSize: "0.72rem", color: "rgba(240,238,255,0.25)", letterSpacing: "3px", textTransform: "uppercase" }}>
            {filtered.length} תמונות
          </span>
          <div style={{ height: 1, flex: 1, background: "linear-gradient(90deg, rgba(165,148,249,0.2), transparent)" }} />
        </motion.div>
      </div>

      {/* ─── LIGHTBOX ─── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 9000,
              background: "rgba(4,4,12,0.96)", backdropFilter: "blur(20px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: 24,
            }}
          >
            {/* Close */}
            <button onClick={() => setLightbox(null)} aria-label="סגור"
              style={{ position: "absolute", top: 24, right: 24, width: 48, height: 48, background: "rgba(165,148,249,0.1)", border: "1px solid rgba(165,148,249,0.25)", borderRadius: "50%", cursor: "pointer", color: "#a594f9", fontSize: "1.1rem", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
              ✕
            </button>

            {/* Prev */}
            <button onClick={(e) => { e.stopPropagation(); setLightbox(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null); }}
              aria-label="הקודם"
              style={{ position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", width: 52, height: 52, background: "rgba(165,148,249,0.1)", border: "1px solid rgba(165,148,249,0.2)", borderRadius: "50%", cursor: "pointer", color: "#a594f9", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
              ›
            </button>

            {/* Next */}
            <button onClick={(e) => { e.stopPropagation(); setLightbox(i => i !== null ? (i + 1) % filtered.length : null); }}
              aria-label="הבא"
              style={{ position: "absolute", left: 24, top: "50%", transform: "translateY(-50%)", width: 52, height: 52, background: "rgba(165,148,249,0.1)", border: "1px solid rgba(165,148,249,0.2)", borderRadius: "50%", cursor: "pointer", color: "#a594f9", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
              ‹
            </button>

            {/* Image */}
            <motion.div key={lightbox}
              initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              style={{ maxWidth: "90vw", maxHeight: "88vh", position: "relative" }}
            >
              <img src={filtered[lightbox].src} alt={filtered[lightbox].label}
                style={{ maxWidth: "90vw", maxHeight: "82vh", objectFit: "contain", display: "block", borderRadius: 2 }}
              />
              {/* Caption bar */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(8,8,15,0.9))", padding: "28px 20px 16px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <div style={{ fontSize: "0.62rem", color: "#a594f9", letterSpacing: "3px", textTransform: "uppercase", marginBottom: 4 }}>{filtered[lightbox].cat}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "#f0eeff" }}>{filtered[lightbox].label}</div>
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(240,238,255,0.3)", letterSpacing: "2px" }}>
                  {lightbox + 1} / {filtered.length}
                </div>
              </div>
            </motion.div>

            {/* Thumbnail strip */}
            <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, maxWidth: "80vw", overflowX: "auto" }}>
              {filtered.map((p, i) => (
                <motion.img key={p.src} src={p.src} alt="" onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                  whileHover={{ scale: 1.08 }}
                  style={{ width: 56, height: 40, objectFit: "cover", cursor: "pointer", flexShrink: 0, opacity: lightbox === i ? 1 : 0.4, outline: lightbox === i ? "2px solid #a594f9" : "none", outlineOffset: 2, transition: "opacity 0.2s" }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
