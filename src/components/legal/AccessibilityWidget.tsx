"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Settings = {
  fontSize: number;       // 1 = normal, 1.15, 1.3
  contrast: boolean;      // high contrast
  reduceMotion: boolean;  // reduce animations
  underlineLinks: boolean;
  readableFont: boolean;  // switch to system sans-serif
};

const DEFAULT: Settings = {
  fontSize: 1,
  contrast: false,
  reduceMotion: false,
  underlineLinks: false,
  readableFont: false,
};

const STORAGE_KEY = "tzuriel_a11y";

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULT);

  // Load saved settings
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setSettings(JSON.parse(saved));
    } catch { /* ignore */ }
  }, []);

  // Apply settings to document
  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = `${settings.fontSize * 100}%`;
    root.style.filter = settings.contrast ? "contrast(1.4) brightness(0.95)" : "";
    root.setAttribute("data-reduce-motion", String(settings.reduceMotion));
    root.setAttribute("data-readable-font", String(settings.readableFont));

    // Underline links
    const style = document.getElementById("a11y-style") || (() => {
      const s = document.createElement("style");
      s.id = "a11y-style";
      document.head.appendChild(s);
      return s;
    })();
    style.textContent = settings.underlineLinks ? "a { text-decoration: underline !important; }" : "";

    // Save
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(settings)); } catch { /* ignore */ }
  }, [settings]);

  const update = (key: keyof Settings, value: Settings[keyof Settings]) =>
    setSettings((p) => ({ ...p, [key]: value }));

  const reset = () => setSettings(DEFAULT);

  return (
    <>
      {/* Skip to content - hidden until focused */}
      <a
        href="#main-content"
        style={{
          position: "fixed", top: -100, right: 0, zIndex: 10000,
          background: "#e8c547", color: "#1a2e1a",
          padding: "12px 24px", fontWeight: 700, fontSize: "1rem",
          textDecoration: "none", borderRadius: "0 0 0 12px",
          transition: "top 0.2s",
        }}
        onFocus={(e) => (e.currentTarget.style.top = "0")}
        onBlur={(e) => (e.currentTarget.style.top = "-100px")}
      >
        דלג לתוכן הראשי
      </a>

      {/* Floating button */}
      <div style={{ position: "fixed", bottom: 32, right: 32, zIndex: 996 }}>
        <motion.button
          onClick={() => setOpen((p) => !p)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="הגדרות נגישות"
          aria-expanded={open}
          aria-haspopup="dialog"
          style={{
            width: 64, height: 64, borderRadius: "50%",
            background: "#1565C0",
            border: "2px solid rgba(255,255,255,0.25)",
            cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 20px rgba(21,101,192,0.45)",
            color: "#ffffff", fontSize: "1.7rem",
          }}
        >
          <svg viewBox="0 0 24 24" width={30} height={30} fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="12" cy="4" r="2"/>
            <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-1.45c1.03.95 2.06 1.46 4 1.46v-2c-1.97 0-2-.35-2-.51zm-6.9 6.9C10 20.9 7.5 18.4 7.5 15.3c0-2.18 1.23-4.06 3-5.02v-2.17C7.42 9.19 5.5 12.04 5.5 15.3c0 4.14 3.36 7.5 7.5 7.5.99 0 1.93-.2 2.8-.54l-1.54-1.54c-.41.1-.83.18-1.26.18z"/>
          </svg>
        </motion.button>
      </div>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="הגדרות נגישות"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed", bottom: 108, right: 32, zIndex: 995,
              width: 280,
              background: "#fff",
              borderRadius: 20,
              boxShadow: "0 16px 60px rgba(26,46,26,0.2), 0 0 0 1px rgba(26,46,26,0.07)",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div style={{ background: "#1a2e1a", padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "'Frank Ruhl Libre', serif", color: "#e8c547", fontWeight: 700, fontSize: "0.95rem" }}>
                ♿ הגדרות נגישות
              </span>
              <button onClick={() => setOpen(false)} aria-label="סגור"
                style={{ background: "none", border: "none", color: "rgba(245,240,232,0.6)", fontSize: "1rem", cursor: "pointer" }}>
                ✕
              </button>
            </div>

            {/* Settings */}
            <div style={{ padding: "16px" }}>

              {/* Font size */}
              <SettingRow label="גודל טקסט">
                <div style={{ display: "flex", gap: 6 }}>
                  {[
                    { val: 1, label: "A", size: "0.85rem" },
                    { val: 1.15, label: "A", size: "1rem" },
                    { val: 1.3, label: "A", size: "1.15rem" },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => update("fontSize", opt.val)}
                      aria-pressed={settings.fontSize === opt.val}
                      style={{
                        width: 36, height: 36, borderRadius: 8,
                        background: settings.fontSize === opt.val ? "#1a2e1a" : "#f5f0e8",
                        color: settings.fontSize === opt.val ? "#e8c547" : "#3a3d40",
                        border: settings.fontSize === opt.val ? "none" : "1px solid #ede5d4",
                        fontSize: opt.size, fontWeight: 700, cursor: "pointer",
                        fontFamily: "inherit",
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </SettingRow>

              {/* Toggles */}
              {[
                { key: "contrast" as keyof Settings, label: "ניגודיות גבוהה", icon: "◑" },
                { key: "reduceMotion" as keyof Settings, label: "הפחת אנימציות", icon: "⏸" },
                { key: "underlineLinks" as keyof Settings, label: "סמן קישורים", icon: "🔗" },
                { key: "readableFont" as keyof Settings, label: "פונט קריא", icon: "Aa" },
              ].map((item) => (
                <SettingRow key={item.key} label={`${item.icon} ${item.label}`}>
                  <Toggle
                    checked={settings[item.key] as boolean}
                    onChange={(v) => update(item.key, v)}
                    label={item.label}
                  />
                </SettingRow>
              ))}

              {/* Reset */}
              <button
                onClick={reset}
                style={{
                  width: "100%", marginTop: 8,
                  background: "#f5f0e8", border: "1px solid #ede5d4",
                  color: "#6b7280", padding: "10px", borderRadius: 10,
                  fontFamily: "inherit", fontSize: "0.82rem", cursor: "pointer",
                  fontWeight: 500, transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#ede5d4"; e.currentTarget.style.color = "#1a2e1a"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#f5f0e8"; e.currentTarget.style.color = "#6b7280"; }}
              >
                איפוס הגדרות
              </button>

              <a href="/accessibility"
                style={{ display: "block", textAlign: "center", marginTop: 10, fontSize: "0.75rem", color: "#8B5E3C", textDecoration: "underline" }}>
                הצהרת נגישות מלאה
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SettingRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f0ebe3" }}>
      <span style={{ fontSize: "0.83rem", color: "#3a3d40", fontWeight: 500 }}>{label}</span>
      {children}
    </div>
  );
}

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      style={{
        width: 40, height: 22, borderRadius: 11,
        background: checked ? "#1a2e1a" : "#d1d5db",
        border: "none", cursor: "pointer",
        position: "relative", transition: "background 0.2s", flexShrink: 0,
      }}
    >
      <span style={{
        position: "absolute", top: 3,
        right: checked ? 3 : "auto",
        left: checked ? "auto" : 3,
        width: 16, height: 16,
        background: "#fff", borderRadius: "50%",
        transition: "all 0.2s",
        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      }} />
    </button>
  );
}
