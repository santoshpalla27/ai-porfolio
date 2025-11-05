'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior DevOps Engineer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading infrastructure automation and cloud migration initiatives',
      achievements: [
        'Reduced deployment time by 70% through CI/CD optimization',
        'Managed AWS infrastructure serving 1M+ users',
        'Implemented GitOps workflows with ArgoCD'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'DevOps Engineer',
      company: 'Cloud Solutions Inc',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Built and maintained Kubernetes clusters and monitoring solutions',
      achievements: [
        'Designed multi-region Kubernetes architecture',
        'Implemented comprehensive monitoring with Prometheus',
        'Automated infrastructure provisioning with Terraform'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Junior DevOps Engineer',
      company: 'StartupXYZ',
      location: 'Seattle, WA',
      period: '2018 - 2020',
      description: 'Managed CI/CD pipelines and cloud infrastructure',
      achievements: [
        'Built Jenkins pipelines for microservices',
        'Migrated on-premise workloads to AWS',
        'Implemented container orchestration'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative py-32 px-4 max-w-7xl mx-auto">
      <SectionHeading title="Experience" subtitle="My professional journey" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative"
      >
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

        {/* Experience Items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} ring-4 ring-white dark:ring-black`} />
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''} ml-8 md:ml-0`}
              >
                <div className="backdrop-blur-xl bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                  {/* Header */}
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} mb-4`}>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                      {exp.company}
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className={`flex flex-wrap gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}
                      >
                        <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;