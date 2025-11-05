'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  Code2, 
  Briefcase, 
  Rocket, 
  Send,
  Sparkles,
  Target,
  Zap,
  Heart,
  Star,
  TrendingUp
} from 'lucide-react';

interface StickyNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const StickyNav = ({ activeSection, onNavigate }: StickyNavProps) => {
  const [hoveredItem, setHoveredItem] = React.useState<string>(null);
  const [isScrolling, setIsScrolling] = React.useState(false);
  
  // Reset hover state when active section changes to prevent hover artifacts during scrolling
  React.useEffect(() => {
    setIsScrolling(true);
    const timer = setTimeout(() => {
      setHoveredItem(null);
      setIsScrolling(false);
    }, 100); // Slightly longer delay to account for scroll settling
    return () => clearTimeout(timer);
  }, [activeSection]);

  const navItems = [
    { 
      id: 'home', 
      icon: Home, 
      hoverIcon: Sparkles,
      label: 'Home', 
      color: 'from-blue-500 to-cyan-500',
      hoverColor: 'from-cyan-400 to-blue-600'
    },
    { 
      id: 'about', 
      icon: User, 
      hoverIcon: Heart,
      label: 'About', 
      color: 'from-purple-500 to-pink-500',
      hoverColor: 'from-pink-400 to-purple-600'
    },
    { 
      id: 'skills', 
      icon: Code2, 
      hoverIcon: Zap,
      label: 'Skills', 
      color: 'from-orange-500 to-red-500',
      hoverColor: 'from-red-400 to-orange-600'
    },
    { 
      id: 'experience', 
      icon: Briefcase, 
      hoverIcon: TrendingUp,
      label: 'Experience', 
      color: 'from-green-500 to-emerald-500',
      hoverColor: 'from-emerald-400 to-green-600'
    },
    { 
      id: 'projects', 
      icon: Rocket, 
      hoverIcon: Star,
      label: 'Projects', 
      color: 'from-indigo-500 to-purple-500',
      hoverColor: 'from-purple-400 to-indigo-600'
    },
    { 
      id: 'contact', 
      icon: Send, 
      hoverIcon: Target,
      label: 'Contact', 
      color: 'from-pink-500 to-rose-500',
      hoverColor: 'from-rose-400 to-pink-600'
    }
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4"
    >
      {/* Main container with enhanced glass effect */}
      <div className="relative">
        {/* Outer glow - larger and more prominent */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl scale-110"></div>
        
        {/* Secondary glow ring */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-2xl p-1">
          <div className="w-full h-full bg-white/80 dark:bg-black/80 rounded-[calc(1rem-2px)]"></div>
        </div>
        
        {/* Main nav bar - wider with reduced height */}
        <div className="relative backdrop-blur-xl bg-white/80 dark:bg-black/80 border border-white/20 dark:border-white/10 rounded-2xl px-10 py-3.5 shadow-2xl">
          
          {/* Top shine effect - wider */}
          <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"></div>
          
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 justify-between relative">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const HoverIcon = item.hoverIcon;
              const isActive = activeSection === item.id;
              const isHovered = hoveredItem === item.id;
              
              // Show hover icon only when hovering AND not active, or when active
              const shouldShowHoverIcon = (isHovered && !isActive) || isActive;
              const DisplayIcon = shouldShowHoverIcon ? HoverIcon : Icon;
              
              return (
                <React.Fragment key={item.id}>
                  <motion.button
                    onClick={() => {
                      // Clear hover state when clicking
                      setHoveredItem(null);
                      onNavigate(item.id);
                    }}
                    onMouseEnter={() => !isScrolling && setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative group flex-1 w-full"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`relative p-2 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 ${
                      isActive 
                        ? `bg-gradient-to-r ${item.color} shadow-lg shadow-${item.color.split('-')[1]}-500/25` 
                        : 'hover:bg-white/50 dark:hover:bg-white/10'
                    }`}>
                      {/* Active gradient border with animation */}
                      <AnimatePresence>
                        {isActive && (
                          <>
                            <motion.div
                              className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{ x: ['-100%', '100%'] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              key={`active-bg-${item.id}`}
                            />
                            <motion.div
                              className="absolute inset-0 rounded-xl shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)]"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              key={`active-shadow-${item.id}`}
                            />
                          </>
                        )}
                      </AnimatePresence>

                      {/* Hover gradient effect - only when not active */}
                      <AnimatePresence>
                        {isHovered && !isActive && (
                          <motion.div
                            className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.hoverColor} opacity-20`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key={`hover-${item.id}`}
                          />
                        )}
                      </AnimatePresence>
                      
                      <div className="relative flex items-center">
                        {/* Icon container with gradient on active or hover */}
                        <div className={`relative mr-1 transition-all duration-300 ${
                          isActive ? 'scale-110' : 'scale-100'
                        }`}>
                          {/* Icon with smooth transition using AnimatePresence */}
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={`${item.id}-${shouldShowHoverIcon ? 'hover' : 'normal'}`}
                              initial={{ rotateY: 90, opacity: 0 }}
                              animate={{ rotateY: 0, opacity: 1 }}
                              exit={{ rotateY: -90, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <DisplayIcon className={`w-5 h-5 ${
                                isActive 
                                  ? 'text-white drop-shadow-lg' 
                                  : isHovered && !isActive
                                    ? 'text-gray-800 dark:text-gray-200 drop-shadow'
                                    : 'text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200'
                              }`} />
                            </motion.div>
                          </AnimatePresence>
                          
                          {/* Icon glow on active/hover */}
                          <AnimatePresence>
                            {(isActive || isHovered) && (
                              <motion.div
                                key={`glow-${item.id}-${isActive ? 'active' : 'hover'}`}
                                className={`absolute inset-0 rounded-full bg-gradient-to-r ${isActive ? item.color : item.hoverColor} opacity-30 blur-md -z-10`}
                                animate={{ 
                                  scale: [1, 1.2, 1],
                                  opacity: isActive ? [0.3, 0.5, 0.3] : [0.2, 0.4, 0.2]
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                initial={{ opacity: 0, scale: 1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                              />
                            )}
                          </AnimatePresence>
                        </div>
                        
                        {/* Label with better typography - now horizontal */}
                        <motion.span
                          className={`text-xs font-bold transition-all duration-300 ${
                            isActive 
                              ? 'text-white font-bold' 
                              : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200'
                          }`}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {item.label}
                        </motion.span>
                      </div>

                      {/* Active indicator line with glow */}
                      <AnimatePresence>
                        {isActive && (
                          <>
                            <motion.div
                              className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 rounded-full bg-gradient-to-r ${item.color}`}
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 0.8 }}
                              transition={{ duration: 0.3 }}
                              exit={{ scaleX: 0 }}
                              key={`indicator-${item.id}`}
                            />
                            <motion.div
                              className={`absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-4 h-0.5 rounded-full blur-sm bg-gradient-to-r ${item.color}`}
                              initial={{ scaleX: 0, opacity: 0.5 }}
                              animate={{ scaleX: 0.8, opacity: 0.8 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                              exit={{ scaleX: 0, opacity: 0 }}
                              key={`indicator-blur-${item.id}`}
                            />
                          </>
                        )}
                      </AnimatePresence>

                      {/* Hover indicator dots - only when not active */}
                      <AnimatePresence>
                        {isHovered && !isActive && (
                          <motion.div
                            className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-0.5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key={`hover-dots-${item.id}`}
                          >
                            <div className="w-0.5 h-0.5 rounded-full bg-gray-400"></div>
                            <div className="w-0.5 h-0.5 rounded-full bg-gray-400"></div>
                            <div className="w-0.5 h-0.5 rounded-full bg-gray-400"></div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.button>

                  {/* Separator line (except last item) */}
                  {index < navItems.length - 1 && (
                    <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent mx-1"></div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Bottom shine effect */}
          <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"></div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-1 left-3 w-2 h-2 rounded-full bg-white/40"></div>
        <div className="absolute top-1 right-3 w-2 h-2 rounded-full bg-white/40"></div>
        <div className="absolute bottom-1 left-3 w-2 h-2 rounded-full bg-white/40"></div>
        <div className="absolute bottom-1 right-3 w-2 h-2 rounded-full bg-white/40"></div>
      </div>
    </motion.nav>
  );
};

export default StickyNav;