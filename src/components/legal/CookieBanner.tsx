"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ConsentState = {
  analytics: boolean;
  preferences: boolean;
  accepted: boolean;
};

const STORAGE_KEY = "tzuriel_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    analytics: false,
    preferences: false,
    accepted: false,
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setTimeout(() => setVisible(true), 1500);
      }
    } catch {
      setTimeout(() => setVisible(true), 1500);
    }
  }, []);

  const saveConsent = (state: ConsentState) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, date: new Date().toISOString() }));
    } catch { /* ignore */ }
    setConsent(state);
    setVisible(false);
  };

  const acceptAll = () => saveConsent({ analytics: true, preferences: true, accepted: true });
  const rejectAll = () => saveConsent({ analytics: false, preferences: false, accepted: true });
  const saveCustom = () => saveConsent({ ...consent, accepted: true });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="הגדרות עוגיות"
          aria-modal="true"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            position: "fixed",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
            width: "min(680px, calc(100vw - 32px))",
            background: "#ffffff",
            borderRadius: 20,
            boxShadow: "0 20px 80px rgba(26,46,26,0.2), 0 0 0 1px rgba(26,46,26,0.06)",
            overflow: "hidden",
          }}
        >
          {/* Top bar */}
          <div style={{ background: "#1a2e1a", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: "1.2rem" }}>🍪</span>
              <span style={{ fontFamily: "'Frank Ruhl Libre', serif", color: "#e8c547", fontWeight: 700, fontSize: "1rem" }}>
                הגדרות עוגיות
              </span>
            </div>
            <button
              onClick={rejectAll}
              aria-label="סגור ודחה עוגיות"
              style={{ background: "none", border: "none", color: "rgba(245,240,232,0.5)", fontSize: "1.2rem", cursor: "pointer", padding: 4, lineHeight: 1 }}
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: "20px 24px" }}>
            <p style={{ fontSize: "0.88rem", color: "#3a3d40", lineHeight: 1.75, marginBottom: 16 }}>
              אנו משתמשים בעוגיות כדי לשפר את חווית הגלישה שלך. עוגיות הכרחיות פועלות תמיד.{" "}
              <a href="/privacy" style={{ color: "#1a2e1a", fontWeight: 600, textDecoration: "underline" }}>
                מדיניות פרטיות
              </a>
            </p>

            {/* Cookie types - always visible */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
              {/* Essential - always on */}
              <CookieRow
                label="עוגיות הכרחיות"
                description="נדרשות לתפקוד בסיסי של האתר"
                checked={true}
                disabled={true}
                onChange={() => {}}
              />

              {/* Analytics */}
              <CookieRow
                label="עוגיות אנליטיקה"
                description="Google Analytics – עוזר לנו לשפר את האתר"
                checked={consent.analytics}
                disabled={false}
                onChange={(v) => setConsent((p) => ({ ...p, analytics: v }))}
              />

              {/* Preferences */}
              <CookieRow
                label="עוגיות העדפות"
                description="שמירת הגדרות אישיות שלך"
                checked={consent.preferences}
                disabled={false}
                onChange={(v) => setConsent((p) => ({ ...p, preferences: v }))}
              />
            </div>

            {/* Details toggle */}
            <button
              onClick={() => setShowDetails((p) => !p)}
              style={{
                background: "none", border: "none", color: "#8B5E3C",
                fontSize: "0.8rem", fontWeight: 600, cursor: "pointer",
                padding: "0 0 12px", display: "flex", alignItems: "center", gap: 6,
                fontFamily: "inherit",
              }}
              aria-expanded={showDetails}
            >
              {showDetails ? "▲" : "▼"} {showDetails ? "הסתר פרטים" : "הצג פרטים נוספים"}
            </button>

            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: "hidden", marginBottom: 16 }}
                >
                  <div style={{ background: "#f5f0e8", borderRadius: 12, padding: "14px 16px", fontSize: "0.8rem", color: "#6b7280", lineHeight: 1.7 }}>
                    <p><strong>עוגיות הכרחיות:</strong> session cookies לניהול הטופס. אינן מצריכות הסכמה.</p>
                    <p><strong>Google Analytics (_ga, _gid):</strong> נתוני גלישה אנונימיים. IP מקוצר. נשמרים עד 24 חודש.</p>
                    <p><strong>העדפות (tzuriel_*):</strong> שמירת הסכמת עוגיות ובחירות UI. נשמרים 12 חודש.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button
                onClick={acceptAll}
                style={{
                  flex: 1, minWidth: 120,
                  background: "linear-gradient(135deg, #1a2e1a, #3d6b3d)",
                  color: "#e8c547", border: "none",
                  padding: "12px 20px", borderRadius: 12,
                  fontFamily: "inherit", fontWeight: 700, fontSize: "0.9rem",
                  cursor: "pointer", transition: "all 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                אשר הכל
              </button>
              <button
                onClick={saveCustom}
                style={{
                  flex: 1, minWidth: 120,
                  background: "#f5f0e8",
                  color: "#1a2e1a",
                  border: "1.5px solid #ede5d4",
                  padding: "12px 20px", borderRadius: 12,
                  fontFamily: "inherit", fontWeight: 600, fontSize: "0.9rem",
                  cursor: "pointer", transition: "all 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#1a2e1a")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#ede5d4")}
              >
                שמור בחירה
              </button>
              <button
                onClick={rejectAll}
                style={{
                  flex: 1, minWidth: 120,
                  background: "transparent",
                  color: "#6b7280",
                  border: "1.5px solid #e5e7eb",
                  padding: "12px 20px", borderRadius: 12,
                  fontFamily: "inherit", fontWeight: 400, fontSize: "0.9rem",
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                דחה הכל
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CookieRow({
  label, description, checked, disabled, onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled: boolean;
  onChange: (v: boolean) => void;
}) {
  const id = label.replace(/\s/g, "-");
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 12, padding: "10px 14px",
      background: "#f8f5f0", borderRadius: 12,
      border: "1px solid #ede5d4",
    }}>
      <div style={{ flex: 1 }}>
        <label htmlFor={id} style={{ fontWeight: 600, fontSize: "0.85rem", color: "#1a2e1a", display: "block", cursor: disabled ? "default" : "pointer" }}>
          {label} {disabled && <span style={{ color: "#6b7280", fontWeight: 400, fontSize: "0.75rem" }}>(תמיד פעיל)</span>}
        </label>
        <p style={{ fontSize: "0.75rem", color: "#6b7280", margin: 0, marginTop: 2 }}>{description}</p>
      </div>
      {/* Toggle switch */}
      <button
        id={id}
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        style={{
          width: 44, height: 24, borderRadius: 12,
          background: checked ? "#1a2e1a" : "#d1d5db",
          border: "none", cursor: disabled ? "default" : "pointer",
          position: "relative", flexShrink: 0,
          transition: "background 0.2s",
          opacity: disabled ? 0.6 : 1,
        }}
        aria-label={`${label} ${checked ? "פעיל" : "כבוי"}`}
      >
        <span style={{
          position: "absolute", top: 3,
          right: checked ? 3 : "auto",
          left: checked ? "auto" : 3,
          width: 18, height: 18,
          background: "#fff", borderRadius: "50%",
          transition: "all 0.2s",
          boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
        }} />
      </button>
    </div>
  );
}
