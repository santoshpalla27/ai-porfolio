// src/components/sections/About.tsx
'use client'

import { motion } from 'framer-motion'
import { Award, Briefcase, Code2, Rocket } from 'lucide-react'
import Card from '@/components/ui/Card'
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/components/animations/variants'

const highlights = [
  {
    icon: Award,
    title: '8+ Years',
    description: 'DevOps Experience'
  },
  {
    icon: Rocket,
    title: '100+',
    description: 'Projects Deployed'
  },
  {
    icon: Code2,
    title: '20+',
    description: 'Technologies Mastered'
  },
  {
    icon: Briefcase,
    title: '50+',
    description: 'Clients Worldwide'
  }
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-dark-900/50 to-dark-800/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate DevOps engineer specializing in cloud infrastructure and automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual */}
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <Card className="p-8 relative z-10">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary-500 to-neon-cyan mx-auto mb-6 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-dark-900 flex items-center justify-center">
                    <div className="text-4xl">👨‍💻</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">DevOps Engineer</h3>
                <p className="text-gray-600 dark:text-gray-400">Cloud Infrastructure & Automation</p>
              </div>
            </Card>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-16 h-16 rounded-lg bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Code2 className="text-primary-500" size={24} />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-20 h-20 rounded-lg bg-neon-cyan/20 backdrop-blur-sm border border-neon-cyan/30 flex items-center justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
            >
              <Rocket className="text-neon-cyan" size={32} />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Transforming Infrastructure into Innovation
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                With over 8 years of experience in DevOps and cloud engineering, I specialize in designing 
                and implementing robust, scalable infrastructure solutions. My expertise spans across major 
                cloud platforms, container orchestration, and CI/CD automation.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300">
                I'm passionate about Infrastructure as Code, GitOps practices, and building systems that 
                enable teams to deploy with confidence. My approach combines technical excellence with 
                business value, ensuring that every solution drives measurable results.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Cloud Architecture',
                  'Kubernetes Expert',
                  'CI/CD Automation',
                  'IaC Specialist',
                ].map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-3 bg-white/5 dark:bg-dark-700/30 rounded-lg border border-white/10"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-white/5 dark:bg-dark-700/20 backdrop-blur-sm border border-white/10"
              variants={fadeInUp}
            >
              <div className="w-14 h-14 rounded-full bg-primary-500/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary-500" size={28} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}