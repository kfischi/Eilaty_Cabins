"use client";
import { WHATSAPP_NUMBER, PHONE } from "@/data/content";

export default function Footer() {
  return (
    <footer style={{ background: "#0f1c0f", color: "rgba(245,240,232,0.65)", padding: "60px 0 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <span style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "1.6rem", color: "#e8c547", fontWeight: 700, display: "block", marginBottom: 16 }}>
              בקתות צוריאל
            </span>
            <p style={{ fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.8, maxWidth: 280 }}>
              חוויית לינה יוקרתית בלב הגליל המערבי. בקתות פרטיות עם ג׳קוזי, קמין וכל מה שצריך לחופשה מושלמת.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#f5f0e8", fontWeight: 700, fontSize: "0.9rem", marginBottom: 20, letterSpacing: "1px" }}>ניווט</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[["#cabins", "הבקתות"], ["#experience", "החוויה"], ["#area", "האזור"], ["#booking", "הזמינו"]].map(([href, label]) => (
                <li key={href} style={{ marginBottom: 10 }}>
                  <a href={href} style={{ color: "rgba(245,240,232,0.6)", textDecoration: "none", fontSize: "0.85rem", fontWeight: 300, transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#e8c547")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.6)")}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#f5f0e8", fontWeight: 700, fontSize: "0.9rem", marginBottom: 20, letterSpacing: "1px" }}>צרו קשר</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                [`https://wa.me/${WHATSAPP_NUMBER}`, "WhatsApp"],
                [`tel:${PHONE.replace(/-/g, "")}`, PHONE],
                ["https://instagram.com", "אינסטגרם"],
              ].map(([href, label]) => (
                <li key={label} style={{ marginBottom: 10 }}>
                  <a href={href} target="_blank" rel="noreferrer" style={{ color: "rgba(245,240,232,0.6)", textDecoration: "none", fontSize: "0.85rem", fontWeight: 300, transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#e8c547")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.6)")}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: "#f5f0e8", fontWeight: 700, fontSize: "0.9rem", marginBottom: 20, letterSpacing: "1px" }}>מידע משפטי</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                ["/privacy", "מדיניות פרטיות"],
                ["/accessibility", "הצהרת נגישות"],
              ].map(([href, label]) => (
                <li key={href} style={{ marginBottom: 10 }}>
                  <a href={href} style={{ color: "rgba(245,240,232,0.6)", textDecoration: "none", fontSize: "0.85rem", fontWeight: 300, transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#e8c547")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.6)")}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: "0.8rem" }}>© 2025 בקתות צוריאל. כל הזכויות שמורות.</span>
          <span style={{ fontSize: "0.75rem", color: "#c49a6c" }}>
            נבנה ע&quot;י{" "}
            <a href="#" style={{ color: "#e8c547", textDecoration: "none", fontWeight: 600 }}>MULTISITE – אתרים שבונים עסקים</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
