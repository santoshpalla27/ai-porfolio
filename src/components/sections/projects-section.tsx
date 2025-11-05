'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { ExternalLink, Github, Play, Code, Cloud, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Kubernetes Auto-Scaler',
      description: 'Custom HPA implementation with predictive scaling based on traffic patterns and ML models',
      category: 'infrastructure',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800',
      tags: ['Kubernetes', 'Go', 'Prometheus'],
      github: '#',
      demo: '#',
      color: 'from-blue-500 to-cyan-500',
      icon: Cloud
    },
    {
      title: 'CI/CD Pipeline Framework',
      description: 'Reusable Jenkins pipeline library with security scanning and automated rollback',
      category: 'automation',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800',
      tags: ['Jenkins', 'Groovy', 'Docker'],
      github: '#',
      demo: '#',
      color: 'from-purple-500 to-pink-500',
      icon: Code
    },
    {
      title: 'Infrastructure as Code Templates',
      description: 'Terraform modules for AWS multi-region deployment with disaster recovery',
      category: 'infrastructure',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      tags: ['Terraform', 'AWS', 'Python'],
      github: '#',
      demo: '#',
      color: 'from-orange-500 to-red-500',
      icon: Shield
    },
    {
      title: 'Monitoring Stack',
      description: 'Complete observability solution with Prometheus, Grafana, and custom exporters',
      category: 'monitoring',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      tags: ['Prometheus', 'Grafana', 'Go'],
      github: '#',
      demo: '#',
      color: 'from-green-500 to-emerald-500',
      icon: Play
    },
    {
      title: 'GitOps Deployment System',
      description: 'ArgoCD-based continuous deployment with automated promotion across environments',
      category: 'automation',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800',
      tags: ['ArgoCD', 'Kubernetes', 'Helm'],
      github: '#',
      demo: '#',
      color: 'from-indigo-500 to-purple-500',
      icon: Code
    },
    {
      title: 'Security Compliance Scanner',
      description: 'Automated security scanning tool for containers and infrastructure code',
      category: 'security',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
      tags: ['Python', 'Docker', 'Trivy'],
      github: '#',
      demo: '#',
      color: 'from-red-500 to-pink-500',
      icon: Shield
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'automation', label: 'Automation' },
    { id: 'monitoring', label: 'Monitoring' },
    { id: 'security', label: 'Security' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="relative py-32 px-4 max-w-7xl mx-auto">
      <SectionHeading title="Featured Projects" subtitle="Building solutions that matter" />

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((f) => (
          <motion.button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              filter === f.id
                ? 'text-white'
                : 'backdrop-blur-xl bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/10 hover:scale-105'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter === f.id && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative">{f.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                className="group relative backdrop-blur-xl bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 z-20 w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;