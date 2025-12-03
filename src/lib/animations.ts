import { Variants } from "framer-motion";

// Fade in up animation
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -60 },
};

// Stagger container for children
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Scale on hover
export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

// Fade in on scroll (viewport should be set on component, not in variant)
export const fadeInOnScroll: Variants = {
  initial: { opacity: 0, y: 50 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" }
  },
  exit: { 
    opacity: 0, 
    x: 50,
    transition: { duration: 0.5, ease: "easeInOut" }
  },
};

// Slide in from right
export const slideInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" }
  },
  exit: { 
    opacity: 0, 
    x: -50,
    transition: { duration: 0.5, ease: "easeInOut" }
  },
};

// Word stagger animation
export const wordStagger: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const wordItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  },
};

