'use client';

import { motion } from 'framer-motion';
import { GithubButton } from '../ui/github-button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/button';
import { ArrowRight, Laugh, BriefcaseBusiness, Layers, UserRoundSearch } from 'lucide-react';

const HeadSection = () => {
  // Animation variants from reference project
  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8 },
    },
  };

  const bottomElementVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8, delay: 0.2 },
    },
  };

  const questionConfig = [
    { key: 'About', color: '#329696', icon: Laugh },
    { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
    { key: 'Skills', color: '#856ED9', icon: Layers },
    { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
  ] as const;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
      {/* Header section with animations - centered content */}
      <motion.div
        className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center py-10"
        variants={topElementVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-secondary-foreground mt-1 text-xl font-semibold md:text-2xl">
          Hey, I'm Santosh Reddy 👋
        </h2>
        <motion.h1 
          className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          DevOps Engineer
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl my-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I transform infrastructure into scalable, efficient systems. 
          Passionate about automation, cloud technologies, and building 
          resilient systems that power modern applications.
        </motion.p>
        
        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            variant="glass"
            className="border border-border bg-white/40 backdrop-blur-sm transition-all hover:bg-white/60 dark:border-white/20 dark:bg-white/20 dark:hover:bg-white/30"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
          <Button 
            variant="outline"
            className="border border-border bg-white/40 backdrop-blur-sm transition-all hover:bg-white/60 dark:border-white/20 dark:bg-white/20 dark:hover:bg-white/30"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Quick question grid - positioned below the main content */}
      <motion.div
        variants={bottomElementVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="z-10 w-full max-w-2xl mx-auto mt-12"
      >
        <div className="grid w-full grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {questionConfig.map(({ key, color, icon: Icon }) => (
            <Button
              key={key}
              variant="outline"
              className="border-border hover:bg-border/40 aspect-square cursor-pointer rounded-2xl border bg-white/50 py-7 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 dark:border-white/30 dark:bg-white/20"
              onClick={() => {
                // Navigate to the corresponding section
                const sectionId = key.toLowerCase();
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="flex flex-col items-center justify-center gap-1 text-gray-700 dark:text-gray-300">
                <Icon size={20} strokeWidth={2} color={color} />
                <span className="text-xs font-medium">{key}</span>
              </div>
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Top right controls */}
      <div className="absolute top-6 right-8 z-20 flex items-center gap-2">
        <ThemeToggle />
        <GithubButton
          animationDuration={1.5}
          label="Star"
          size={'sm'}
          repoUrl="https://github.com/santoshreddy/devops-portfolio"
        />
      </div>

      {/* Looking for talent button */}
      <div className="absolute top-6 left-6 z-20">
        <button
          className="relative flex cursor-pointer items-center gap-2 rounded-full border bg-white/30 px-4 py-1.5 text-sm font-medium text-black shadow-md backdrop-blur-lg transition hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800"
        >
          {/* Green pulse dot */}
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Available for work?
        </button>
      </div>
    </section>
  );
};

export default HeadSection;