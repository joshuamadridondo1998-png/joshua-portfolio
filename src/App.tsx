import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ExperienceSection from "./components/ExperienceSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-zinc-950 bg-[#F4F2EB] dark:bg-[#121110] dark:text-zinc-50 selection:bg-[#f59e0b] selection:text-zinc-950 transition-colors duration-300">
      {/* Top sticky navigation headers */}
      <Header />

      {/* Main content body sections */}
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Bottom info footer */}
      <Footer />
    </div>
  );
}
