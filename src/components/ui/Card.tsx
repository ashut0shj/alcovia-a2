"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInOnScroll } from "@/lib/animations";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  icon?: ReactNode;
}

export default function Card({ children, className = "", delay = 0, icon }: CardProps) {
  return (
    <motion.div
      className={`bg-white border-2 border-primary/60 rounded-2xl p-6 md:p-8 hover:border-primary hover:shadow-xl transition-all duration-300 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ willChange: "transform" }}
    >
      {icon && (
        <div className="mb-4 text-primary text-4xl">{icon}</div>
      )}
      {children}
    </motion.div>
  );
}

