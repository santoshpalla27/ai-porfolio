// src/components/sections/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'
import Scene3D from '@/components/3d/Scene3D'
import DevOpsLoop from '@/components/3d/DevOpsLoop'
import ParticleField from '@/components/3d/ParticleField'
import NeonGrid from '@/components/3d/NeonGrid'
import { fadeInUp, fadeInDown, staggerContainer } from '@/components/animations/variants'
import { scrollToSection } from '@/lib/utils'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D camera={{ position: [0, 0, 10] }}>
          <DevOpsLoop />
          <ParticleField />
          <NeonGrid />
        </Scene3D>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/70 via-dark-900/50 to-dark-900 z-10"></div>

      {/* Content */}
      <div className="container-custom relative z-20 text-center">
        <motion.div
          className="text-sm font-semibold bg-primary-500/10 text-primary-500 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
          ☁️ DevOps Engineer
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Building the{' '}
          <span className="gradient-text">Future</span>
          <br />
          of Infrastructure
        </motion.h1>

        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Architecting scalable cloud solutions, automating deployments, and optimizing
          infrastructure for peak performance.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <Button 
            onClick={() => scrollToSection('projects')}
            variant="primary"
            size="lg"
            icon={<ArrowRight size={20} />}
          >
            View My Work
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            size="lg"
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center space-x-6 mt-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.8 }}
        >
          {[
            { icon: Github, href: 'https://github.com' },
            { icon: Linkedin, href: 'https://linkedin.com' },
            { icon: Mail, href: 'mailto:contact@example.com' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 dark:bg-dark-700/50 backdrop-blur-sm border border-white/20 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight className="rotate-90" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}