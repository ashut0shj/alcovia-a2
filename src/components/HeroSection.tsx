"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import { ChevronDown } from "lucide-react";
import { wordStagger, wordItem } from "@/lib/animations";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const heroText = "Dare to become everything you were born to be";
  const words = heroText.split(" ");

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ opacity }}
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background-offwhite via-background-light to-background-cream"
        style={{ y: backgroundY }}
      >
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 via-transparent to-accent-maroon/10" />
        
        {/* Abstract pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-maroon rounded-full blur-3xl" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="mb-6 md:mb-8 text-text-primary font-black"
          variants={wordStagger}
          initial="initial"
          animate="animate"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordItem}
              className="inline-block mr-2 md:mr-3"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-text-secondary mb-8 md:mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Alcovia is a premier community of passion-driven teenagers (11-16 years) for whom we are providing the right exposure and exploration opportunities through professional mentorships, peer learning and hyper-personalised career guidance; empowering them to get ahead of the curve.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Button variant="primary" className="cursor-pointer" onClick={() => {
            const offeringsSection = document.getElementById('offerings');
            offeringsSection?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Start Your Journey
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-text-primary/60" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

