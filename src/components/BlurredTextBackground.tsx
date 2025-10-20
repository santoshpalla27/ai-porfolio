'use client';

import { motion } from 'framer-motion';

interface BlurredTextBackgroundProps {
  text: string;
}

const BlurredTextBackground = ({ text }: BlurredTextBackgroundProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { y: '100%' },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div 
      className="absolute inset-x-0 bottom-0 flex justify-center overflow-hidden pointer-events-none"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className="hidden bg-gradient-to-b from-neutral-500/10 to-neutral-500/0 bg-clip-text text-[10rem] leading-none font-black text-transparent select-none sm:block lg:text-[16rem]"
        style={{ marginBottom: '-2.5rem' }}
      >
        {text.split('').map((char, index) => (
          <motion.span 
            key={index} 
            variants={letterVariants}
            className="inline-block"
            style={{ originY: 1 }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default BlurredTextBackground;