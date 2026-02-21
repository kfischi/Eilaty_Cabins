"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER, PHONE, LOCATION } from "@/data/content";

export default function BookingForm() {
  const [form, setForm] = useState({ checkin: "", checkout: "", cabin: "", name: "", phone: "", notes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.cabin || !form.name || !form.phone) {
      alert("אנא מלאו את כל השדות הנדרשים");
      return;
    }
    const msg = encodeURIComponent(
      `היי! אני ${form.name} ומעוניין להזמין ${form.cabin}.\nתאריכים: ${form.checkin || "?"} – ${form.checkout || "?"}\nטלפון: ${form.phone}${form.notes ? `\nהערות: ${form.notes}` : ""}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    border: "1.5px solid #ede5d4",
    borderRadius: 12,
    fontFamily: "'Heebo', sans-serif",
    fontSize: "0.9rem",
    color: "#3a3d40",
    background: "#f5f0e8",
    outline: "none",
    transition: "border-color 0.3s, background 0.3s",
  };

  return (
    <section id="booking" style={{ background: "#ede5d4", padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <div style={{ color: "#8B5E3C", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <span style={{ width: 24, height: 1, background: "#8B5E3C", display: "inline-block" }} />
            הזמינו עכשיו
          </div>
          <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#1a2e1a", lineHeight: 1.25 }}>
            התחילו את <span style={{ color: "#8B5E3C" }}>החופשה שלכם</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: "#ffffff",
            borderRadius: 28,
            overflow: "hidden",
            boxShadow: "0 20px 80px rgba(26,46,26,0.15)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {/* Left */}
          <div style={{ background: "#1a2e1a", padding: "52px 44px" }}>
            <h3 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "1.8rem", fontWeight: 700, color: "#f5f0e8", marginBottom: 12 }}>
              צרו קשר ישיר
            </h3>
            <p style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.6)", fontWeight: 300, lineHeight: 1.75, marginBottom: 36 }}>
              מלאו את הטופס ונחזור אליכם תוך שעה. מעדיפים WhatsApp?
            </p>

            {[
              { icon: "📞", text: PHONE },
              { icon: "📍", text: LOCATION },
              { icon: "💬", text: "מענה מיידי ב-WhatsApp" },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, fontSize: "0.9rem", color: "rgba(245,240,232,0.78)" }}>
                <span style={{ width: 36, height: 36, background: "rgba(201,162,39,0.18)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>
                  {c.icon}
                </span>
                {c.text}
              </div>
            ))}

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("היי! אני מעוניין לשמוע על בקתות אליתיי ולבדוק זמינות")}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block", textAlign: "center", marginTop: 32,
                background: "linear-gradient(135deg, #c9a227, #e8c547)",
                color: "#1a2e1a", padding: "14px", borderRadius: 14,
                fontWeight: 700, fontSize: "0.95rem", textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,162,39,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              💬 שלחו הודעת WhatsApp
            </a>
          </div>

          {/* Right – Form */}
          <form onSubmit={handleSubmit} style={{ padding: "52px 44px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 18 }}>
              <div>
                <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#3a3d40", marginBottom: 7, letterSpacing: "0.5px" }}>תאריך הגעה</label>
                <input type="date" value={form.checkin} onChange={(e) => setForm({ ...form, checkin: e.target.value })} style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "#1a2e1a"; e.target.style.background = "#fff"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#ede5d4"; e.target.style.background = "#f5f0e8"; }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#3a3d40", marginBottom: 7, letterSpacing: "0.5px" }}>תאריך עזיבה</label>
                <input type="date" value={form.checkout} onChange={(e) => setForm({ ...form, checkout: e.target.value })} style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "#1a2e1a"; e.target.style.background = "#fff"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#ede5d4"; e.target.style.background = "#f5f0e8"; }} />
              </div>
            </div>

            <div style={{ marginBottom: 18 }}>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#3a3d40", marginBottom: 7, letterSpacing: "0.5px" }}>בחירת בקתה</label>
              <select value={form.cabin} onChange={(e) => setForm({ ...form, cabin: e.target.value })} style={{ ...inputStyle, cursor: "pointer" }}
                onFocus={(e) => { e.target.style.borderColor = "#1a2e1a"; e.target.style.background = "#fff"; }}
                onBlur={(e) => { e.target.style.borderColor = "#ede5d4"; e.target.style.background = "#f5f0e8"; }}>
                <option value="">-- בחרו בקתה --</option>
                <option>ברבור – לזוגות (עד 2)</option>
                <option>פלמינגו – פרמיום (עד 2)</option>
                <option>חסידה – משפחתית (עד 6)</option>
                <option>כל המתחם – לאירועים (עד 50)</option>
              </select>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 18 }}>
              <div>
                <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#3a3d40", marginBottom: 7, letterSpacing: "0.5px" }}>שם מלא</label>
                <input type="text" placeholder="ישראל ישראלי" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "#1a2e1a"; e.target.style.background = "#fff"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#ede5d4"; e.target.style.background = "#f5f0e8"; }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#3a3d40", marginBottom: 7, letterSpacing: "0.5px" }}>טלפון</label>
                <input type="tel" placeholder="050-0000000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "#1a2e1a"; e.target.style.background = "#fff"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#ede5d4"; e.target.style.background = "#f5f0e8"; }} />
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#3a3d40", marginBottom: 7, letterSpacing: "0.5px" }}>הערות</label>
              <input type="text" placeholder="אירוע מיוחד? אלרגיות? הכל חשוב לנו..." value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = "#1a2e1a"; e.target.style.background = "#fff"; }}
                onBlur={(e) => { e.target.style.borderColor = "#ede5d4"; e.target.style.background = "#f5f0e8"; }} />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #1a2e1a, #3d6b3d)",
                color: "#e8c547",
                border: "none",
                padding: 16,
                borderRadius: 14,
                fontFamily: "'Heebo', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                cursor: "pointer",
                transition: "all 0.3s",
                letterSpacing: "0.5px",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(26,46,26,0.3)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              שלחו בקשת הזמנה →
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
