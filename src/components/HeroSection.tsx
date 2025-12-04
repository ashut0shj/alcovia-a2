"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import { ChevronDown } from "lucide-react";
import { wordStagger, wordItem } from "@/lib/animations";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.7]);
  const blur = useTransform(scrollYProgress, [0, 0.6], [0, 20]);
  const contentScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.8]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const heroText = "Dare to become everything you were born to be";
  const words = heroText.split(" ");

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ 
        opacity,
        scale,
        filter: `blur(${blur}px)`,
      }}
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background-offwhite via-background-light to-background-cream"
        style={{ y: backgroundY, scale }}
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
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 via-transparent to-accent-maroon/20"
          animate={{
            background: [
              "linear-gradient(to bottom right, rgba(244, 162, 97, 0.2), transparent, rgba(139, 21, 56, 0.2))",
              "linear-gradient(to bottom right, rgba(139, 21, 56, 0.2), transparent, rgba(244, 162, 97, 0.2))",
              "linear-gradient(to bottom right, rgba(244, 162, 97, 0.2), transparent, rgba(139, 21, 56, 0.2))",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Futuristic animated orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-accent-gold rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-accent-maroon rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, -40, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 360],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ transform: "translate(-50%, -50%)" }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ 
          y: textY,
          scale: contentScale,
        }}
      >
        {/* Futuristic glow effect behind text */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{
            background: [
              "radial-gradient(circle at 50% 50%, rgba(244, 162, 97, 0.1), transparent 70%)",
              "radial-gradient(circle at 50% 50%, rgba(139, 21, 56, 0.1), transparent 70%)",
              "radial-gradient(circle at 50% 50%, rgba(244, 162, 97, 0.1), transparent 70%)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.h1
          className="mb-6 md:mb-8 font-black relative"
          variants={wordStagger}
          initial="initial"
          animate={isLoaded ? "animate" : "initial"}
        >
          {/* Gradient text with glow */}
          <span className="relative inline-block">
            <span className="absolute inset-0 text-gradient blur-xl opacity-50" aria-hidden="true">
              {words.map((word, index) => (
                <span key={`glow-${index}`} className="inline-block mr-2 md:mr-3">
                  {word}
                </span>
              ))}
            </span>
            <span className="relative text-white drop-shadow-[0_0_30px_rgba(244,162,97,0.5)]">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordItem}
                  className="inline-block mr-2 md:mr-3 relative"
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0 0 20px rgba(244, 162, 97, 0.8)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12 max-w-3xl mx-auto text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] backdrop-blur-sm"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={isLoaded ? { 
            opacity: 1, 
            y: 0,
            filter: "blur(0px)"
          } : { 
            opacity: 0, 
            y: 30,
            filter: "blur(10px)"
          }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        >
          Alcovia is a premier community of passion-driven teenagers (11-16 years) for whom we are providing the right exposure and exploration opportunities through professional mentorships, peer learning and hyper-personalised career guidance; empowering them to get ahead of the curve.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={isLoaded ? { 
            opacity: 1, 
            y: 0,
            scale: 1
          } : { 
            opacity: 0, 
            y: 30,
            scale: 0.9
          }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <motion.button
            type="button"
            onClick={() => {
              const offeringsSection = document.getElementById('offerings');
              offeringsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 relative overflow-hidden cursor-pointer bg-gradient-to-r from-primary via-accent-maroon to-accent-gold text-white hover:shadow-lg hover:shadow-accent-gold/30"
          >
            {/* Shimmer animation covering full button */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
              style={{ width: "50%" }}
            />
            
            {/* Glowing text */}
            <motion.span
              className="relative z-10 block"
              animate={{
                textShadow: [
                  "0 0 10px rgba(244, 162, 97, 0.5)",
                  "0 0 20px rgba(244, 162, 97, 0.8)",
                  "0 0 10px rgba(244, 162, 97, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Start Your Journey
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>

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

