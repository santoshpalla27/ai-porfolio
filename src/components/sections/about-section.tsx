'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Rocket, Heart } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable infrastructure code',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Rocket,
      title: 'Fast Deployment',
      description: 'Automating CI/CD pipelines for rapid releases',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Love solving complex infrastructure challenges',
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <section className="relative py-32 px-4 max-w-7xl mx-auto">
      <SectionHeading title="About Me" subtitle="DevOps Engineer | Cloud Architect | Infrastructure Enthusiast" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-16"
      >
        {/* Main Bio */}
        <motion.div 
          variants={itemVariants}
          className="max-w-3xl mx-auto"
        >
          <div className="relative backdrop-blur-xl bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl" />
            <div className="relative space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                👋 Hi there! I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Santosh Reddy</span>, 
                a passionate DevOps Engineer with a love for building scalable, efficient cloud infrastructure.
              </p>
              <p>
                With years of experience in containerization, orchestration, and cloud-native technologies, 
                I specialize in transforming complex infrastructure challenges into elegant, automated solutions.
              </p>
              <p>
                When I'm not optimizing Kubernetes clusters or writing Terraform modules, you'll find me 
                exploring the latest DevOps tools, contributing to open-source projects, or sharing knowledge 
                with the tech community.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="relative backdrop-blur-xl bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-2xl">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '5+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Completed' },
            { value: '30+', label: 'Technologies' },
            { value: '99.9%', label: 'Uptime Achieved' }
          ].map((stat) => (
            <div key={stat.label} className="backdrop-blur-xl bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;