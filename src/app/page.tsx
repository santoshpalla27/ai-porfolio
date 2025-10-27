'use client';

import { useState, useRef, useEffect } from 'react';
import HeadSection from '@/components/sections/head-section';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      <div className="scroll-smooth">
        <motion.div 
          id="home"
          className="relative z-10"
        >
          <HeadSection />
        </motion.div>
      </div>
    </div>
  );
}