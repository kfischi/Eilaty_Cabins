"use client";
import { WHATSAPP_NUMBER, PHONE } from "@/data/content";

export default function Footer() {
  return (
    <footer style={{ background: "#06060f", borderTop: "1px solid rgba(124,111,207,0.1)", padding: "80px 0 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 400, color: "#a594f9", marginBottom: 8 }}>
              בקתות צוריאל
            </div>
            <div style={{ fontSize: "0.62rem", letterSpacing: "4px", color: "rgba(247,242,234,0.3)", textTransform: "uppercase", marginBottom: 24 }}>
              גליל מערבי · לינת יוקרה
            </div>
            <p style={{ fontSize: "0.85rem", color: "rgba(247,242,234,0.4)", fontWeight: 300, lineHeight: 2, maxWidth: 280 }}>
              חוויית לינה יוקרתית בלב הגליל. בקתות פרטיות עם ג׳קוזי, קמין ונוף שישכח.
            </p>
          </div>

          {[
            { title: "ניווט", links: [["#cabins","הבקתות"],["#experience","החוויה"],["#area","האזור"],["#booking","הזמינו"]] },
            { title: "צרו קשר", links: [[`https://wa.me/${WHATSAPP_NUMBER}`,"WhatsApp"],[`tel:${PHONE}`,"טלפון"],["https://instagram.com","אינסטגרם"]] },
            { title: "משפטי", links: [["/privacy","מדיניות פרטיות"],["/accessibility","הצהרת נגישות"]] },
          ].map(({ title, links }) => (
            <div key={title}>
              <div style={{ fontSize: "0.62rem", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(124,111,207,0.6)", marginBottom: 24, fontWeight: 600 }}>{title}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map(([href, label]) => (
                  <li key={label}>
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                      style={{ color: "rgba(247,242,234,0.35)", textDecoration: "none", fontSize: "0.85rem", fontWeight: 300, transition: "color 0.3s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#a594f9")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,242,234,0.35)")}
                    >{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gold divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(124,111,207,0.2), transparent)", marginBottom: 32 }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: "0.75rem", color: "rgba(247,242,234,0.2)" }}>© 2025 בקתות צוריאל. כל הזכויות שמורות.</span>
          <a href="#" style={{ fontSize: "0.72rem", color: "rgba(124,111,207,0.5)", textDecoration: "none", letterSpacing: "1px", fontWeight: 600, transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#a594f9")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(124,111,207,0.5)")}
          >
            MULTISITE – אתרים שבונים עסקים
          </a>
        </div>
      </div>
    </footer>
  );
}
