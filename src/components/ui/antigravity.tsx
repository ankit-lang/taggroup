"use client";   

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";   

export interface AntigravityProps {
  children: ReactNode;
  className?: string;
  /** Maximum pixel height the element floats upwards */
  floatHeight?: number;
  /** Duration of one complete float cycle in seconds */
  duration?: number;
}   

export function Antigravity({
  children,
  className,
  floatHeight = 15,
  duration = 4,
}: AntigravityProps) {
  return (
    <motion.div
      className={cn("relative inline-block", className)}
      animate={{ y: [0, -floatHeight, 0] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
