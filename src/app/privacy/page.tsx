import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "מדיניות פרטיות | בקתות צוריאל",
  description: "מדיניות הפרטיות של בקתות צוריאל – כיצד אנו אוספים, משתמשים ומגינים על המידע שלך.",
};

export default function PrivacyPage() {
  return (
    <div dir="rtl" style={{ background: "#f5f0e8", minHeight: "100vh", paddingTop: 80 }}>
      {/* Header */}
      <div style={{ background: "#1a2e1a", padding: "60px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ color: "#e8c547", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16 }}>
            מסמך משפטי
          </div>
          <h1 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#f5f0e8", marginBottom: 12 }}>
            מדיניות פרטיות
          </h1>
          <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.9rem" }}>
            עדכון אחרון: פברואר 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ background: "#fff", borderRadius: 20, padding: "48px 40px", boxShadow: "0 4px 30px rgba(26,46,26,0.08)", lineHeight: 1.9, color: "#3a3d40", fontSize: "0.95rem" }}>

          <Section title="1. מבוא">
            <p>בקתות צוריאל (&quot;אנחנו&quot;, &quot;שלנו&quot;) מחויבת להגנה על פרטיות המשתמשים באתר זה. מדיניות זו מסבירה אילו נתונים אנו אוספים, כיצד אנו משתמשים בהם ומה הם זכויותיך בהתאם לחוק הגנת הפרטיות הישראלי (תשמ&quot;א-1981) ותקנות הגנת המידע האירופיות (GDPR) ככל שחלות.</p>
          </Section>

          <Section title="2. מידע שאנו אוספים">
            <p><strong>מידע שנמסר מרצון:</strong></p>
            <ul>
              <li>שם מלא, מספר טלפון – בעת יצירת קשר או בקשת הזמנה</li>
              <li>תאריכי שהייה ומספר אורחים</li>
              <li>תכתובת WhatsApp ו/או טופס צור קשר</li>
            </ul>
            <p><strong>מידע נאסף אוטומטית:</strong></p>
            <ul>
              <li>כתובת IP, סוג דפדפן, מכשיר</li>
              <li>עמודים שנצפו, זמן שהייה (Google Analytics)</li>
              <li>עוגיות (Cookies) – ראה סעיף 5</li>
            </ul>
          </Section>

          <Section title="3. כיצד אנו משתמשים במידע">
            <ul>
              <li>טיפול בבקשות הזמנה ויצירת קשר</li>
              <li>שיפור חווית המשתמש באתר</li>
              <li>שליחת עדכונים רלוונטיים (בהסכמתך בלבד)</li>
              <li>עמידה בדרישות חוקיות</li>
            </ul>
          </Section>

          <Section title="4. שיתוף מידע עם צדדים שלישיים">
            <p>אנו <strong>לא מוכרים</strong> ולא משכירים את פרטיך לצדדים שלישיים. מידע עשוי להישמר/להועבר ל:</p>
            <ul>
              <li><strong>WhatsApp (Meta):</strong> בעת שיחת וואטסאפ ישירה</li>
              <li><strong>Google Analytics:</strong> נתוני שימוש אנונימיים בלבד</li>
              <li><strong>Netlify:</strong> אחסון האתר (שרתים באיחוד האירופי)</li>
              <li><strong>Google Gemini AI:</strong> הצ&apos;אט הבוט – שיחות מעובדות ואינן נשמרות</li>
            </ul>
          </Section>

          <Section title="5. עוגיות (Cookies)">
            <p>האתר משתמש בסוגי עוגיות הבאים:</p>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 12 }}>
              <thead>
                <tr style={{ background: "#ede5d4" }}>
                  <Th>סוג</Th><Th>מטרה</Th><Th>משך</Th>
                </tr>
              </thead>
              <tbody>
                <Tr><Td>הכרחיות</Td><Td>תפקוד בסיסי של האתר</Td><Td>Session</Td></Tr>
                <Tr><Td>אנליטיקה</Td><Td>Google Analytics – סטטיסטיקות</Td><Td>24 חודש</Td></Tr>
                <Tr><Td>העדפות</Td><Td>שמירת בחירת עוגיות</Td><Td>12 חודש</Td></Tr>
              </tbody>
            </table>
            <p style={{ marginTop: 12 }}>ניתן לנהל העדפות עוגיות דרך הבאנר בתחתית האתר.</p>
          </Section>

          <Section title="6. זכויותיך">
            <p>בהתאם לחוק הגנת הפרטיות ו-GDPR, יש לך זכות:</p>
            <ul>
              <li>לעיין במידע שנשמר עליך</li>
              <li>לתקן מידע שגוי</li>
              <li>למחוק את המידע שלך (&quot;הזכות להישכח&quot;)</li>
              <li>להגביל עיבוד המידע</li>
              <li>להתנגד לשיווק ישיר</li>
            </ul>
            <p>לממש זכויות אלה, פנה אלינו בוואטסאפ.</p>
          </Section>

          <Section title="7. אבטחת מידע">
            <p>האתר פועל תחת HTTPS עם הצפנת SSL. אנו נוקטים אמצעים טכניים וארגוניים סבירים להגנה על המידע. עם זאת, אין אנו יכולים להבטיח אבטחה מוחלטת בסביבת אינטרנט.</p>
          </Section>

          <Section title="8. קישורים חיצוניים">
            <p>האתר עשוי לכלול קישורים לאתרים חיצוניים (Google Maps, Booking.com וכד&apos;). מדיניות זו אינה חלה על אתרים אלה.</p>
          </Section>

          <Section title="9. שינויים במדיניות">
            <p>אנו רשאים לעדכן מדיניות זו מעת לעת. שינויים מהותיים יפורסמו באתר. המשך השימוש באתר לאחר עדכון מהווה הסכמה למדיניות המעודכנת.</p>
          </Section>

          <Section title="10. יצירת קשר">
            <p>לכל שאלה בנושא פרטיות, ניתן לפנות אלינו ישירות דרך WhatsApp.</p>
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

function Th({ children }: { children: React.ReactNode }) {
  return <th style={{ padding: "8px 12px", textAlign: "right", fontSize: "0.85rem", fontWeight: 700, color: "#1a2e1a" }}>{children}</th>;
}
function Td({ children }: { children: React.ReactNode }) {
  return <td style={{ padding: "8px 12px", fontSize: "0.85rem", borderBottom: "1px solid #ede5d4" }}>{children}</td>;
}
function Tr({ children }: { children: React.ReactNode }) {
  return <tr>{children}</tr>;
}
