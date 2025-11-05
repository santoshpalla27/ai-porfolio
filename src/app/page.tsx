'use client';

'use client';

import { useState, useRef, useEffect } from 'react';
import HeadSection from '@/components/sections/head-section';
import AboutSection from '@/components/sections/about-section';
import SkillsSection from '@/components/sections/skills-section';
import ExperienceSection from '@/components/sections/experience-section';
import ProjectsSection from '@/components/sections/projects-section';
import ContactSection from '@/components/sections/contact-section';
import FluidCursor from '@/components/FluidCursor';
import BlurredTextBackground from '@/components/BlurredTextBackground';
import StickyNav from '@/components/sticky-nav';
import { Toaster } from 'sonner';

const SECTIONS = ['home', 'about', 'skills', 'experience', 'projects', 'contact'] as const;
type SectionName = typeof SECTIONS[number];

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionName>('home');
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const options = {
      threshold: 0.5,
      rootMargin: '0px 0px -50% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionName);
        }
      });
    }, options);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const scrollToSection = (sectionName: string) => {
    const ref = sectionRefs[sectionName as SectionName];
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      <FluidCursor />
      <BlurredTextBackground text="Santosh" />
      
      <div className="scroll-smooth">
        <div ref={sectionRefs.home} id="home" className="relative z-10">
          <HeadSection />
        </div>
        
        <div ref={sectionRefs.about} id="about" className="relative z-10">
          <AboutSection />
        </div>
        
        <div ref={sectionRefs.skills} id="skills" className="relative z-10">
          <SkillsSection />
        </div>
        
        <div ref={sectionRefs.experience} id="experience" className="relative z-10">
          <ExperienceSection />
        </div>
        
        <div ref={sectionRefs.projects} id="projects" className="relative z-10">
          <ProjectsSection />
        </div>
        
        <div ref={sectionRefs.contact} id="contact" className="relative z-10">
          <ContactSection />
        </div>
      </div>

      {/* Sticky Bottom Navigation */}
      <StickyNav activeSection={activeSection} onNavigate={scrollToSection} />
      
      {/* Toast notifications */}
      <Toaster position="top-right" />
    </div>
  );
}