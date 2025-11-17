// src/components/sections/Projects.tsx
'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Suspense } from 'react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Scene3D from '@/components/3d/Scene3D'
import { PROJECTS } from '@/lib/constants'
import { fadeInUp, staggerContainer } from '@/components/animations/variants'

// Simple 3D object for project cards
function ProjectCube() {
  return (
    <group>
      <mesh rotation={[0.3, 0.3, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#0070f3" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0.5, 0.5, 0.5]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#00f5ff" emissive="#00f5ff" emissiveIntensity={0.2} />
      </mesh>
    </group>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-dark-800/30 to-dark-900/50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world solutions that showcase expertise in cloud architecture and automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full flex flex-col">
                {/* 3D Visual */}
                <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                  <Scene3D camera={{ position: [0, 0, 5] }} className="w-full h-full">
                    <Suspense fallback={<div className="w-full h-full bg-gray-200 dark:bg-dark-700 flex items-center justify-center">Loading...</div>}>
                      <ProjectCube />
                    </Suspense>
                  </Scene3D>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <Button
                        href={project.github}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <Github size={16} />
                        Code
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        href={project.live}
                        variant="primary"
                        size="sm"
                        className="flex-1"
                      >
                        <ExternalLink size={16} />
                        Live
                      </Button>
                    )}
                    {!project.github && !project.live && (
                      <Button variant="outline" size="sm" className="flex-1">
                        View Details
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Button
            href="https://github.com/yourusername"
            variant="primary"
            size="lg"
            icon={<Github size={20} />}
          >
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}