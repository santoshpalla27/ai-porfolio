'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { 
  Cloud, Container, GitBranch, Server, 
  Database, Lock, Code2, Workflow 
} from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('cloud');

  const categories = [
    { id: 'cloud', label: 'Cloud', icon: Cloud },
    { id: 'containers', label: 'Containers', icon: Container },
    { id: 'cicd', label: 'CI/CD', icon: GitBranch },
    { id: 'monitoring', label: 'Monitoring', icon: Server },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'scripting', label: 'Scripting', icon: Code2 },
    { id: 'orchestration', label: 'Orchestration', icon: Workflow }
  ];

  const skills = {
    cloud: [
      { name: 'AWS', level: 95, color: 'from-orange-500 to-yellow-500' },
      { name: 'Azure', level: 85, color: 'from-blue-500 to-cyan-500' },
      { name: 'GCP', level: 80, color: 'from-red-500 to-pink-500' },
      { name: 'Terraform', level: 90, color: 'from-purple-500 to-indigo-500' }
    ],
    containers: [
      { name: 'Docker', level: 95, color: 'from-blue-500 to-cyan-500' },
      { name: 'Kubernetes', level: 90, color: 'from-blue-600 to-indigo-600' },
      { name: 'Helm', level: 85, color: 'from-cyan-500 to-teal-500' },
      { name: 'Container Security', level: 80, color: 'from-green-500 to-emerald-500' }
    ],
    cicd: [
      { name: 'Jenkins', level: 90, color: 'from-red-500 to-orange-500' },
      { name: 'GitHub Actions', level: 88, color: 'from-gray-700 to-gray-900' },
      { name: 'GitLab CI', level: 85, color: 'from-orange-500 to-red-500' },
      { name: 'ArgoCD', level: 82, color: 'from-orange-400 to-pink-500' }
    ],
    monitoring: [
      { name: 'Prometheus', level: 90, color: 'from-orange-500 to-red-500' },
      { name: 'Grafana', level: 88, color: 'from-orange-500 to-yellow-500' },
      { name: 'ELK Stack', level: 85, color: 'from-cyan-500 to-blue-500' },
      { name: 'Datadog', level: 80, color: 'from-purple-500 to-pink-500' }
    ],
    database: [
      { name: 'PostgreSQL', level: 85, color: 'from-blue-600 to-indigo-600' },
      { name: 'MongoDB', level: 82, color: 'from-green-500 to-emerald-500' },
      { name: 'Redis', level: 88, color: 'from-red-500 to-pink-500' },
      { name: 'MySQL', level: 80, color: 'from-blue-500 to-cyan-500' }
    ],
    security: [
      { name: 'Security Scanning', level: 85, color: 'from-red-500 to-orange-500' },
      { name: 'Vault', level: 82, color: 'from-yellow-500 to-orange-500' },
      { name: 'SIEM', level: 80, color: 'from-purple-500 to-pink-500' },
      { name: 'Compliance', level: 78, color: 'from-blue-500 to-purple-500' }
    ],
    scripting: [
      { name: 'Python', level: 90, color: 'from-blue-500 to-yellow-500' },
      { name: 'Bash', level: 92, color: 'from-gray-600 to-gray-800' },
      { name: 'Go', level: 80, color: 'from-cyan-500 to-blue-500' },
      { name: 'PowerShell', level: 75, color: 'from-blue-600 to-indigo-600' }
    ],
    orchestration: [
      { name: 'Ansible', level: 88, color: 'from-red-500 to-pink-500' },
      { name: 'Puppet', level: 75, color: 'from-orange-500 to-yellow-500' },
      { name: 'Chef', level: 72, color: 'from-orange-600 to-red-600' },
      { name: 'SaltStack', level: 70, color: 'from-cyan-500 to-teal-500' }
    ]
  };

  return (
    <section className="relative py-32 px-4 max-w-7xl mx-auto">
      <SectionHeading title="Skills & Expertise" subtitle="Technologies I work with daily" />

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'text-white'
                  : 'backdrop-blur-xl bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/10 hover:scale-105'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                <Icon className="w-4 h-4" />
                {category.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Skills Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skills[activeCategory as keyof typeof skills].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-2xl p-6"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-lg">{skill.name}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default SkillsSection;