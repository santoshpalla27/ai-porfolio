// src/components/sections/Skills.tsx
'use client'

import { motion } from 'framer-motion'
import { Suspense } from 'react'
import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import Scene3D from '@/components/3d/Scene3D'
import { SKILLS } from '@/lib/constants'
import { fadeInUp, staggerContainer, scaleIn } from '@/components/animations/variants'

// Simple 3D cube for skill cards
function SkillCube({ color }: { color: string }) {
  return (
    <mesh>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
    </mesh>
  )
}

const categoryColors: Record<string, string> = {
  devops: '#0070f3',
  cloud: '#00f5ff',
  cicd: '#a78bfa',
  monitoring: '#10b981',
  iac: '#f59e0b'
}

const categoryNames: Record<string, string> = {
  devops: 'DevOps Tools',
  cloud: 'Cloud Platforms',
  cicd: 'CI/CD',
  monitoring: 'Monitoring',
  iac: 'Infrastructure as Code'
}

export default function Skills() {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)))

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Technical Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive skill set spanning cloud platforms, DevOps tools, and modern practices
          </p>
        </motion.div>

        {categories.map((category) => (
          <motion.div 
            key={category}
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-dark-700 pb-2">
              {categoryNames[category]}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILLS.filter(skill => skill.category === category).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="p-6 rounded-xl bg-white/5 dark:bg-dark-700/20 backdrop-blur-sm border border-white/10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    {/* 3D Icon */}
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Scene3D camera={{ position: [0, 0, 2] }} className="w-10 h-10">
                        <SkillCube color={categoryColors[category]} />
                      </Scene3D>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{skill.name}</h4>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2 mb-2">
                        <motion.div 
                          className="bg-gradient-to-r from-primary-500 to-neon-cyan h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        ></motion.div>
                      </div>
                      
                      <div className="text-right text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Certifications */}
        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-dark-700 pb-2">
            Certifications & Achievements
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {[
              'AWS Certified Solutions Architect',
              'Kubernetes CKA',
              'Terraform Associate',
              'Azure DevOps Expert',
              'Docker Certified Associate',
              'Linux Professional'
            ].map((cert) => (
              <Badge key={cert} variant="primary">
                {cert}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}