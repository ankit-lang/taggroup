'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import React from 'react'

export function TextHighlighter({
  children,
  className,
  delay = 0.2,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <span className={cn("relative inline-block whitespace-nowrap", className)}>
      <motion.span
        initial={{ width: "0%" }}
        whileInView={{ width: "105%" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-[2.5%] top-[15%] -z-10 h-[75%] rounded-md bg-primary/40 -rotate-1"
      />
      <span className="relative z-10">{children}</span>
    </span>
  )
}
