import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { CtaBanner } from './components/CtaBanner';
import { DifferentialsSection } from './components/DifferentialsSection';
import { FaqSection } from './components/FaqSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorksSection } from './components/HowItWorksSection';
import { NewsSection } from './components/NewsSection';
import { PartnersStrip } from './components/PartnersStrip';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />

      <main>
        <Hero />
        <PartnersStrip />
        <AboutSection />
        <ServicesSection onSelectService={setSelectedService} />
        <DifferentialsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FaqSection />
        <NewsSection />
        <CtaBanner />
        <ContactSection selectedService={selectedService} />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
