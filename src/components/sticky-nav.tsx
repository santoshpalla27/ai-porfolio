'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Wrench, Briefcase, FolderGit2, Mail } from 'lucide-react';

interface StickyNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const StickyNav = ({ activeSection, onNavigate }: StickyNavProps) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Wrench, label: 'Skills' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'projects', icon: FolderGit2, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="backdrop-blur-xl bg-white/80 dark:bg-black/80 border border-white/20 dark:border-white/10 rounded-full px-6 py-3 shadow-2xl">
        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative group px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive ? 'text-white' : 'hover:bg-white/50 dark:hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <div className="relative flex items-center gap-2">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : ''}`} />
                  
                  {/* Label on hover */}
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ width: 'auto', opacity: 1 }}
                    className={`overflow-hidden whitespace-nowrap text-sm font-medium ${
                      isActive ? 'text-white' : ''
                    }`}
                  >
                    {item.label}
                  </motion.span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default StickyNav;