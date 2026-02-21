import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import Cabins from "@/components/Cabins";
import GalleryStrip from "@/components/GalleryStrip";
import Experience from "@/components/Experience";
import Audiences from "@/components/Audiences";
import AreaGuide from "@/components/AreaGuide";
import Reviews from "@/components/Reviews";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import Chatbot from "@/components/Chatbot";
import CookieBanner from "@/components/legal/CookieBanner";
import AccessibilityWidget from "@/components/legal/AccessibilityWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <StatsStrip />
        <Cabins />
        <GalleryStrip />
        <Experience />
        <Audiences />
        <AreaGuide />
        <Reviews />
        <BookingForm />
      </main>
      <Footer />
      <WhatsAppBubble />
      <Chatbot />
      <AccessibilityWidget />
      <CookieBanner />
    </>
  );
}
