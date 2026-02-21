import { Cabin, Attraction, Review, Audience } from "@/types";

export const WHATSAPP_NUMBER = "972523983394";
export const PHONE = "052-398-3394";
export const LOCATION = "צוריאל, גליל מערבי";

export const cabins: Cabin[] = [
  {
    id: "barbur",
    name: "ברבור",
    subtitle: "בקתה רומנטית לזוגות",
    badge: "עד 2 אנשים",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=80",
    capacity: "2",
    pricePerNight: 950,
    amenities: [
      { icon: "🛁", label: "ג'קוזי פרטי" },
      { icon: "🔥", label: "קמין עצים" },
      { icon: "📺", label: "Smart TV + Netflix" },
      { icon: "🍳", label: "מטבח מלא" },
      { icon: "🌿", label: "נוף פנורמי" },
      { icon: "☕", label: "פינת קפה" },
    ],
  },
  {
    id: "flamingo",
    name: "פלמינגו",
    subtitle: "בקתת פרמיום לזוגות",
    badge: "⭐ הפופולרית",
    image: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?w=700&q=80",
    capacity: "2",
    pricePerNight: 1150,
    amenities: [
      { icon: "🛁", label: "ג'קוזי ספא" },
      { icon: "🔥", label: "קמין עצים" },
      { icon: "📺", label: "Smart TV + Netflix" },
      { icon: "🍳", label: "מטבח מלא" },
      { icon: "🌲", label: "מרפסת ענקית" },
      { icon: "🛏️", label: "מיטת queen" },
    ],
    featured: true,
  },
  {
    id: "hasida",
    name: "חסידה",
    subtitle: "בקתה משפחתית מורחבת",
    badge: "עד 6 אנשים",
    image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=700&q=80",
    capacity: "6",
    pricePerNight: 1400,
    amenities: [
      { icon: "🛁", label: "ג'קוזי גדול" },
      { icon: "🔥", label: "קמין עצים" },
      { icon: "📺", label: "Smart TV + Netflix" },
      { icon: "🍳", label: "מטבח מלא" },
      { icon: "🛏️", label: "2 חדרי שינה" },
      { icon: "👶", label: "ידידותי לילדים" },
    ],
  },
];

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80", label: "בריכה חיצונית" },
  { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=80", label: "ג'קוזי פרטי" },
  { src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80", label: "נוף הגליל" },
  { src: "https://images.unsplash.com/photo-1597528380307-03f23fec75b2?w=900&q=80", label: "מטבח BBQ" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80", label: "גליל עליון" },
];

export const audiences: Audience[] = [
  {
    id: "couples",
    label: "זוגות",
    emoji: "💑",
    headline: "חופשה רומנטית שתזכרו לנצח",
    description: "כבו את הטלפון, הדליקו את הקמין, ותנו לגליל לעשות את שלו. האינטימיות והפרטיות שיש כאן לא תמצאו במלון.",
    features: ["ג'קוזי פרטי מול נוף הגליל", "קמין עצים לערבים חמימים", "עיצוב רומנטי ואינטימי", "פרטיות מוחלטת"],
    image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?w=700&q=80",
    cta: "הזמינו בקתה רומנטית",
  },
  {
    id: "families",
    label: "משפחות",
    emoji: "👨‍👩‍👧‍👦",
    headline: "חופשה שלמה – בטוחה ומהנה לכולם",
    description: "הילדים שמחים בבריכה המגודרת, אתם נרגעים בג'קוזי. מרחב, בטיחות, ואוכל ביחד בחוץ – זה הקסם של אליתיי.",
    features: ["בריכת ילדים מגודרת ובטוחה", "בקתת חסידה עם 2 חדרי שינה", "מטבח מלא + גריל BBQ", "שטח גינה פרטי לילדים"],
    image: "https://images.unsplash.com/photo-1545579163-bd85d212b93b?w=700&q=80",
    cta: "הזמינו חופשה משפחתית",
  },
  {
    id: "events",
    label: "אירועים",
    emoji: "🎉",
    headline: "אירועים קטנים, רגעים גדולים",
    description: "ימי הולדת, גיבושים, חגיגות משפחתיות – עד 50 איש במרחב פרטי, ירוק ומושקע בגליל.",
    features: ["קיבולת עד 50 אנשים", "מטבח חיצוני גדול + BBQ", "שלוש בקתות ללינה", "ליווי ותיאום מלא"],
    image: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=700&q=80",
    cta: "שלחו פרטים לאירוע",
  },
];

export const attractions: Attraction[] = [
  { icon: "🏍️", name: "פיני בשדה – שטח רכבי שטח", description: "חוויית ATV מרתקת בשבילי הגליל – מסלולים לכל הרמות." },
  { icon: "🐴", name: "רנצ'ו מניס – רכיבה על סוסים", description: "טיולי סוסים בנוף גלילי עוצר נשימה – מתאים לכל המשפחה." },
  { icon: "🌊", name: "נחל כזיב", description: "אחד הנחלים היפים בישראל – מושלם לטיול רגלי ורטוב בקיץ." },
];

export const dining: Attraction[] = [
  { icon: "🍴", name: "ביסטרו 89", description: "מסעדת שף אזורית עם תפריט מקומי ואווירה יוצאת מן הכלל." },
  { icon: "🥙", name: "מטבח דרוזי אותנטי", description: "לחם דרוזי, לאבנה, עלים ממולאים – מסעדות אותנטיות ברכסי הגליל." },
  { icon: "🍷", name: "יקבים בוטיק", description: "סיורי יין ביקבים קטנים ואיכותיים מסביב לחגור." },
];

export const reviews: Review[] = [
  {
    initials: "ד",
    name: "דנה וגל כהן",
    meta: "סוף שבוע זוגי · ספטמבר 2024",
    text: "החופשה הכי טובה שהיתה לנו מזה שנים. הג'קוזי מול הנוף בלילה, הקמין, הפרטיות – פשוט קסם. חוזרים בוודאות!",
    rating: 5,
  },
  {
    initials: "מ",
    name: "משפחת לוי",
    meta: "חופשה משפחתית · אוגוסט 2024",
    text: "הילדים לא רצו לחזור הביתה. בריכת הילדים בטוחה ומושקעת, הגריל נהדר, ואנחנו ההורים הצלחנו לנוח. תודה!",
    rating: 5,
  },
  {
    initials: "ר",
    name: "רחל אברהם",
    meta: "אירוע קטן · אוקטובר 2024",
    text: "ארגנו יום הולדת 40 לחברה עם 35 חברות – התוצאה היתה מהממת. השטח, האווירה, הגמישות. מומלץ בחום לאירועים.",
    rating: 5,
  },
];
