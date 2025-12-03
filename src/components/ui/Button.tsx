"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { scaleOnHover } from "@/lib/animations";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 relative overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary via-accent-maroon to-accent-gold text-white hover:shadow-lg hover:shadow-accent-gold/30",
    secondary:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
    outline:
      "bg-transparent border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-white",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...scaleOnHover}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent-gold via-accent-maroon to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
    </motion.button>
  );
}

