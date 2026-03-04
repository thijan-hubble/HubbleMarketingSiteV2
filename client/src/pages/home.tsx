import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import CaseStudiesSection from "@/components/case-studies-section";
import HowItWorksSection from "@/components/how-it-works-section";
import FaqSection from "@/components/faq-section";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <ServicesSection />
        <CaseStudiesSection />
        <AboutSection />
        <FaqSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
