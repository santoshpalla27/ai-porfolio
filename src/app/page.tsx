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
import { motion } from 'framer-motion';

// Define section names
type SectionName = 'home' | 'about' | 'skills' | 'experience' | 'projects' | 'contact';

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
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const [sectionName, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
          const sectionHeight = ref.current.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionName as SectionName);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionName: SectionName) => {
    sectionRefs[sectionName].current?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  // Top element animation variants (similar to reference project)
  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8 },
    },
  };

  // Bottom element animation variants (similar to reference project)
  const bottomElementVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Fluid background canvas - this covers the entire page now */}
      <FluidCursor />
      
      {/* Big blurred footer text - now visible throughout the page */}
      <BlurredTextBackground text="Santosh" />
      
      {/* Navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
        {(['home', 'about', 'skills', 'experience', 'projects', 'contact'] as SectionName[]).map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section ? 'bg-blue-600 scale-125' : 'bg-gray-300'
            }`}
            aria-label={`Scroll to ${section} section`}
          />
        ))}
      </div>

      <div className="scroll-smooth">
        <motion.div 
          ref={sectionRefs.home} 
          id="home"
          variants={topElementVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <HeadSection />
        </motion.div>
        
        <motion.div 
          ref={sectionRefs.about} 
          id="about"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <AboutSection />
        </motion.div>
        
        <motion.div 
          ref={sectionRefs.skills} 
          id="skills"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <SkillsSection />
        </motion.div>
        
        <motion.div 
          ref={sectionRefs.experience} 
          id="experience"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <ExperienceSection />
        </motion.div>
        
        <motion.div 
          ref={sectionRefs.projects} 
          id="projects"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <ProjectsSection />
        </motion.div>
        
        <motion.div 
          ref={sectionRefs.contact} 
          id="contact"
          variants={bottomElementVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <ContactSection />
        </motion.div>
      </div>
    </div>
  );
}