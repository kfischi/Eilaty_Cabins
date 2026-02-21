import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "הצהרת נגישות | בקתות צוריאל",
  description: "הצהרת הנגישות של בקתות צוריאל בהתאם לתקן WCAG 2.1 ותקנות שוויון זכויות לאנשים עם מוגבלות.",
};

export default function AccessibilityPage() {
  return (
    <div dir="rtl" style={{ background: "#f5f0e8", minHeight: "100vh", paddingTop: 80 }}>
      {/* Header */}
      <div style={{ background: "#1a2e1a", padding: "60px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ color: "#e8c547", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16 }}>
            מסמך נגישות
          </div>
          <h1 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#f5f0e8", marginBottom: 12 }}>
            הצהרת נגישות
          </h1>
          <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.9rem" }}>
            בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע&quot;ג–2013
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ background: "#fff", borderRadius: 20, padding: "48px 40px", boxShadow: "0 4px 30px rgba(26,46,26,0.08)", lineHeight: 1.9, color: "#3a3d40", fontSize: "0.95rem" }}>

          <Section title="אודות הצהרה זו">
            <p>בקתות צוריאל שואפת להנגיש את אתר האינטרנט שלה לאנשים עם מוגבלות, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, תשנ&quot;ח-1998, ותקנותיו.</p>
          </Section>

          <Section title="רמת הנגישות">
            <p>אנו פועלים להתאים את האתר לתקן <strong>WCAG 2.1 ברמה AA</strong>, וכן לדרישות תקנות הנגישות הישראליות.</p>
            <p>האתר עומד בדרישות הנגישות הבאות:</p>
            <ul>
              <li>✓ תמיכה בניווט מקלדת בלבד</li>
              <li>✓ תגיות ARIA לכל הרכיבים האינטראקטיביים</li>
              <li>✓ יחסי ניגודיות צבעים עומדים בתקן AA (4.5:1 לפחות)</li>
              <li>✓ תמיכה ב-RTL מלאה לעברית</li>
              <li>✓ תמיכה בקוראי מסך (NVDA, JAWS, VoiceOver)</li>
              <li>✓ טקסט חלופי (alt text) לכל התמונות</li>
              <li>✓ מבנה כותרות היררכי (H1–H4)</li>
              <li>✓ אפשרות הגדלת טקסט עד 200% ללא פגיעה בתוכן</li>
              <li>✓ שפה מוגדרת בתג HTML</li>
              <li>✓ קישורים ניתנים לזיהוי ויזואלי</li>
            </ul>
          </Section>

          <Section title="תכונות נגישות באתר">
            <p><strong>ניווט:</strong> ניתן לנווט באתר כולו באמצעות מקלדת בלבד (Tab, Enter, Escape).</p>
            <p><strong>עצירת אנימציות:</strong> האתר מכבד את הגדרת prefers-reduced-motion של המשתמש.</p>
            <p><strong>גיוון בחוויה:</strong> הממשק פועל במלואו ללא עכבר, ללא JavaScript (תוכן בסיסי), ועל מסכים בגדלים שונים.</p>
            <p><strong>קישורי דילוג:</strong> קיים קישור &quot;דלג לתוכן הראשי&quot; בראש כל עמוד.</p>
          </Section>

          <Section title="היבטים שאינם נגישים">
            <p>אנו מודעים לפערים הבאים ועובדים לתיקונם:</p>
            <ul>
              <li>חלק מהתמונות בגלריה אינן כוללות עדיין תיאור מפורט</li>
              <li>הצ&apos;אטבוט עשוי להיות מוגבל בנגישות מלאה לקורא מסך</li>
            </ul>
          </Section>

          <Section title="פנייה בנושא נגישות">
            <p>נתקלת בבעיית נגישות? אנו מתחייבים לטפל בפנייתך תוך <strong>7 ימי עסקים</strong>.</p>
            <div style={{ background: "#f5f0e8", borderRadius: 14, padding: "20px 24px", marginTop: 16 }}>
              <p style={{ marginBottom: 8 }}><strong>רכז נגישות:</strong> בקתות צוריאל</p>
              <p style={{ marginBottom: 8 }}><strong>טלפון:</strong> 050-000-0000</p>
              <p><strong>WhatsApp:</strong> פנייה ישירה דרך האתר</p>
            </div>
          </Section>

          <Section title="תאריך עדכון">
            <p>הצהרה זו עודכנה לאחרונה בפברואר 2025 ותיבדק בפעם הבאה עד פברואר 2026.</p>
          </Section>

        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link href="/" style={{
            display: "inline-block",
            background: "#1a2e1a",
            color: "#e8c547",
            padding: "14px 32px",
            borderRadius: 50,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "0.95rem",
          }}>
            ← חזרה לאתר
          </Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2e1a", marginBottom: 12, paddingBottom: 8, borderBottom: "2px solid #ede5d4" }}>
        {title}
      </h2>
      {children}
    </div>
  );
}
