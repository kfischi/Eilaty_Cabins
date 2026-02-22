import { Cabin, Attraction, Review, Audience } from "@/types";

export const WHATSAPP_NUMBER = "972500000000";
export const PHONE = "050-000-0000";
export const LOCATION = "צוריאל, גליל מערבי";

// All real Cloudinary images
export const IMAGES = {
  // Cabins
  barbur1: "https://res.cloudinary.com/decirk3zb/image/upload/v1771706994/6_lt7xxt.jpg",
  barbur2: "https://res.cloudinary.com/decirk3zb/image/upload/v1771706986/5_ywermp.jpg",
  flamingo1: "https://res.cloudinary.com/decirk3zb/image/upload/v1771706986/4_su0u31.jpg",
  flamingo2: "https://res.cloudinary.com/decirk3zb/image/upload/v1771706985/2_tp5qp8.jpg",
  hasida1: "https://res.cloudinary.com/decirk3zb/image/upload/v1771706985/1_zxjkwe.jpg",
  hasida2: "https://res.cloudinary.com/decirk3zb/image/upload/v1771707165/3_fvqxuv.jpg",
  // Property / Experience
  pool1: "https://res.cloudinary.com/decirk3zb/image/upload/v1771705569/WhatsApp_Image_2026-02-19_at_22.03.38_5_ikcgvp.jpg",
  pool2: "https://res.cloudinary.com/decirk3zb/image/upload/v1771705565/WhatsApp_Image_2026-02-19_at_22.03.38_3_d4eqsf.jpg",
  jacuzzi: "https://res.cloudinary.com/decirk3zb/image/upload/v1771705563/WhatsApp_Image_2026-02-19_at_22.03.38_1_ojldo9.jpg",
  interior1: "https://res.cloudinary.com/decirk3zb/image/upload/v1771707164/2_yvbyaa.jpg",
  interior2: "https://res.cloudinary.com/decirk3zb/image/upload/v1771707164/1_q49spa.jpg",
  bbq: "https://res.cloudinary.com/decirk3zb/image/upload/v1771705556/WhatsApp_Image_2026-02-19_at_22.03.37_2_p2a2vl.jpg",
  nature1: "https://res.cloudinary.com/decirk3zb/image/upload/v1771705555/WhatsApp_Image_2026-02-19_at_22.03.36_3_ajz7ra.jpg",
  nature2: "https://res.cloudinary.com/decirk3zb/image/upload/v1771705555/WhatsApp_Image_2026-02-19_at_22.03.36_2_bcuftb.jpg",
  view1: "https://res.cloudinary.com/decirk3zb/image/upload/v1771705562/WhatsApp_Image_2026-02-19_at_22.03.37_7_fwm7yz.jpg",
  view2: "https://res.cloudinary.com/decirk3zb/image/upload/v1771705563/WhatsApp_Image_2026-02-19_at_22.03.38_2_gtbgvv.jpg",
};

export const cabins: Cabin[] = [
  {
    id: "barbur",
    name: "ברבור",
    subtitle: "בקתה רומנטית לזוגות",
    badge: "עד 2 אנשים",
    image: IMAGES.barbur1,
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
    image: IMAGES.flamingo1,
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
    image: IMAGES.hasida1,
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
  { src: IMAGES.pool1, label: "בריכה חיצונית" },
  { src: IMAGES.jacuzzi, label: "ג'קוזי פרטי" },
  { src: IMAGES.view1, label: "נוף הגליל" },
  { src: IMAGES.bbq, label: "מטבח BBQ" },
  { src: IMAGES.nature1, label: "גליל עליון" },
];

export const audiences: Audience[] = [
  {
    id: "couples",
    label: "זוגות",
    emoji: "💑",
    headline: "חופשה רומנטית שתזכרו לנצח",
    description: "כבו את הטלפון, הדליקו את הקמין, ותנו לגליל לעשות את שלו. האינטימיות והפרטיות שיש כאן לא תמצאו במלון.",
    features: ["ג'קוזי פרטי מול נוף הגליל", "קמין עצים לערבים חמימים", "עיצוב רומנטי ואינטימי", "פרטיות מוחלטת"],
    image: IMAGES.barbur2,
    cta: "הזמינו בקתה רומנטית",
  },
  {
    id: "families",
    label: "משפחות",
    emoji: "👨‍👩‍👧‍👦",
    headline: "חופשה שלמה – בטוחה ומהנה לכולם",
    description: "הילדים שמחים בבריכה המגודרת, אתם נרגעים בג'קוזי. מרחב, בטיחות, ואוכל ביחד בחוץ – זה הקסם של צוריאל.",
    features: ["בריכת ילדים מגודרת ובטוחה", "בקתת חסידה עם 2 חדרי שינה", "מטבח מלא + גריל BBQ", "שטח גינה פרטי לילדים"],
    image: IMAGES.pool2,
    cta: "הזמינו חופשה משפחתית",
  },
  {
    id: "events",
    label: "אירועים",
    emoji: "🎉",
    headline: "אירועים קטנים, רגעים גדולים",
    description: "ימי הולדת, גיבושים, חגיגות משפחתיות – עד 50 איש במרחב פרטי, ירוק ומושקע בגליל.",
    features: ["קיבולת עד 50 אנשים", "מטבח חיצוני גדול + BBQ", "שלוש בקתות ללינה", "ליווי ותיאום מלא"],
    image: IMAGES.nature2,
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
