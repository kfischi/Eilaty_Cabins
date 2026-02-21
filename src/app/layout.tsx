import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "בקתות צוריאל | צוריאל, גליל מערבי",
  description: "חוויית לינה יוקרתית בלב הגליל. בקתות עץ פרטיות עם ג'קוזי, קמין ונוף מרהיב.",
  openGraph: {
    title: "בקתות צוריאל – הגליל מחכה לכם",
    description: "בקתות עץ יוקרתיות עם ג'קוזי פרטי, קמין ונוף גלילי עוצר נשימה.",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;400;700;900&family=Heebo:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
