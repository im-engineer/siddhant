import { useState, useEffect } from 'react';
import { HeroSection } from '@/app/components/portfolio/HeroSection';
import { ServicesSection } from '@/app/components/portfolio/ServicesSection';
import { JourneySection } from '@/app/components/portfolio/JourneySection';
import { SkillsShowcase } from '@/app/components/portfolio/SkillsShowcase';
import { TechStackSection } from '@/app/components/portfolio/TechStackSection';
import { ProjectsSection } from '@/app/components/portfolio/ProjectsSection';
import { MetricsSection } from '@/app/components/portfolio/MetricsSection';
import { TestimonialsSection } from '@/app/components/portfolio/TestimonialsSection';

import { ContactSection } from '@/app/components/portfolio/ContactSection';
import { Navigation } from '@/app/components/portfolio/Navigation';
import { AIChatbot } from '@/app/components/portfolio/AIChatbot';
import { ScrollControls } from '@/app/components/portfolio/ScrollControls';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navigation scrolled={scrolled} />
      <main>
        <HeroSection />
        <ServicesSection />
        <JourneySection />
        <SkillsShowcase />
        <ProjectsSection />
        <MetricsSection />
        <TestimonialsSection />

        {/* <TechStackSection /> */}
        <ContactSection />
      </main>
      <AIChatbot />
      <ScrollControls />
    </div>
  );
}
