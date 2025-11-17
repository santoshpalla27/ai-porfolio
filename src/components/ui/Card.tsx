// src/components/ui/Card.tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
}

export default function Card({ children, className, hover = true, gradient = false }: CardProps) {
  return (
    <motion.div
      className={cn(
        'bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-600',
        gradient && 'bg-gradient-to-br from-white/10 to-dark-800/10',
        className
      )}
      whileHover={hover ? { y: -5 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}