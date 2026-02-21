import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `אתה נציג שירות לקוחות מקצועי ואדיב של בקתות צוריאל – נכס נופש יוקרתי בצוריאל, גליל מערבי.

המידע שלך על הנכס:
━━━━━━━━━━━━━━━━
🏕️ הבקתות:
• ברבור – לזוגות (עד 2 אנשים), ₪950/לילה, ג'קוזי פרטי, קמין, Smart TV+Netflix, מטבח מלא, נוף פנורמי
• פלמינגו – לזוגות פרמיום (עד 2 אנשים), ₪1,150/לילה, ג'קוזי ספא, קמין, Smart TV+Netflix, מטבח מלא, מרפסת ענקית  
• חסידה – משפחתית (עד 6 אנשים), ₪1,400/לילה, ג'קוזי גדול, קמין, Smart TV+Netflix, 2 חדרי שינה, ידידותי לילדים

🏊 המתחם:
• בריכה מחוממת למבוגרים
• בריכת ילדים מגודרת ובטוחה
• מטבח חיצוני + גריל BBQ
• שטח ירוק פרטי מגודר
• ניתן לאירועים עד 50 איש

📍 מיקום: צוריאל, גליל מערבי
📞 יצירת קשר: WhatsApp בלבד

🗺️ אטרקציות קרובות:
• פיני בשדה – ATV ורכבי שטח
• רנצ'ו מניס – רכיבה על סוסים
• נחל כזיב – טיולי טבע
• ביסטרו 89 – מסעדת שף
• מטבח דרוזי אותנטי
• יקבי בוטיק

━━━━━━━━━━━━━━━━
הנחיות התנהגות:
• דבר תמיד בעברית
• היה חם, מקצועי ועוזר
• אסוף מידע לפני הפניה ל-WhatsApp: שם, תאריכים, מספר אנשים, בקתה מועדפת
• בסוף כל שיחת הזמנה – הפנה ל-WhatsApp עם הפרטים שנאספו
• אם שואלים על מחיר – ציין את המחיר ואמור שיש הנחות בהזמנה מוקדמת
• אל תמציא מידע שאינו רשום למעלה`;

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash", // Free tier model
      systemInstruction: SYSTEM_PROMPT,
    });

    // Convert messages to Gemini format
    const history = messages.slice(0, -1).map((msg: { role: string; content: string }) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const lastMessage = messages[messages.length - 1];

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(lastMessage.content);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ message: text });
  } catch (error) {
    console.error("Gemini API error:", error);
    return NextResponse.json(
      { error: "שגיאה בשירות. אנא נסו שוב." },
      { status: 500 }
    );
  }
}
