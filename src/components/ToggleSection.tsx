"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type ToggleState = "school" | "outside";

const schoolContent = {
  title: "At School",
  description: "How Alcovia helps students ace school",
  points: [
    "Academic mentorship and guidance",
    "Study techniques and time management",
    "Subject-specific expert support",
    "Regular progress tracking",
  ],
};

const outsideContent = {
  title: "Outside of School",
  description:
    "How Alcovia fulfills its mission of building differentiation for each Alcovian",
  points: [
    "Real-world skill development",
    "Industry exposure and networking",
    "Personal brand building",
    "Passion project mentorship",
  ],
};

export default function ToggleSection() {
  const [activeState, setActiveState] = useState<ToggleState>("school");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentContent =
    activeState === "school" ? schoolContent : outsideContent;

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-32 bg-background-offwhite"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toggle Switch */}
        <motion.div
          className="flex justify-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative flex items-center bg-white/80 p-1 rounded-full border border-primary/30 shadow-md">
            <motion.button
              className={`relative z-10 flex-1 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base transition-colors flex items-center justify-center ${
                activeState === "school"
                  ? "text-white"
                  : "text-text-secondary hover:text-text-primary"
              }`}
              onClick={() => setActiveState("school")}
            >
              At School
            </motion.button>
            <motion.button
              className={`relative z-10 flex-1 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base transition-colors flex items-center justify-center ${
                activeState === "outside"
                  ? "text-white"
                  : "text-text-secondary hover:text-text-primary"
              }`}
              onClick={() => setActiveState("outside")}
            >
              Outside of School
            </motion.button>
            <motion.div
              className="absolute z-0 top-1 bottom-1 bg-gradient-to-r from-primary via-accent-maroon to-accent-gold rounded-full"
              initial={false}
              animate={{
                left: activeState === "school" ? "4px" : "50%",
                width: "calc(50% - 4px)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeState}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 md:mb-6">
                {currentContent.title}
              </h2>
              <p className="text-lg md:text-xl text-text-secondary mb-8 md:mb-12">
                {currentContent.description}
              </p>
              <ul className="space-y-4 md:space-y-6">
                {currentContent.points.map((point, index) => (
                  <motion.li
                    key={point}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-accent-maroon flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg text-text-secondary">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

