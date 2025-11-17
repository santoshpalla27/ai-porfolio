// src/components/sections/Experience.tsx
'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import { EXPERIENCE } from '@/lib/constants'
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/components/animations/variants'

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Work Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey through impactful roles and transformative projects
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-neon-cyan transform -translate-x-1/2 hidden md:block"></div>
          
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
            >
              {/* Timeline line for mobile */}
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-neon-cyan hidden md:block"></div>
              
              {/* Timeline Dot */}
              <div className="absolute left-2 w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-neon-cyan flex items-center justify-center z-10 border-4 border-white dark:border-dark-900 hidden md:block">
                <Briefcase size={16} className="text-white" />
              </div>
              
              {/* Content Card */}
              <div className={`ml-0 md:ml-8 lg:ml-16 ${index % 2 === 0 ? 'md:pr-8 lg:pr-16' : 'md:pl-8 lg:pl-16 md:text-right md:float-right md:w-1/2'}`}>
                {/* Header */}
                <div className={`p-6 rounded-xl bg-white/5 dark:bg-dark-700/20 backdrop-blur-sm border border-white/10 ${index % 2 === 0 ? 'md:mr-0' : 'md:ml-0'}`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{exp.position}</h3>
                      <p className="text-lg text-primary-500 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">▹</span>
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}