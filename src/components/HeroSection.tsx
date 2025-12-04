"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
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
      className="relative min-h-screen flex items-start justify-start overflow-hidden pt-20"
      style={{ 
        opacity,
        scale,
        filter: `blur(${blur}px)`,
      }}
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0"
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
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 pl-4 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-16 pt-4 md:pt-6 lg:pt-8"
        style={{ 
          y: textY,
          scale: contentScale,
        }}
      >
        <motion.h1
          className="mb-4 md:mb-6 font-black relative text-gray-900 text-left"
          variants={wordStagger}
          initial="initial"
          animate={isLoaded ? "animate" : "initial"}
        >
          {words.map((word, index) => (
            <span key={index}>
              <motion.span
                variants={wordItem}
                className="inline-block mr-2 md:mr-3 relative"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {word}
              </motion.span>
              {(word === "become" || word === "were") && <br />}
            </span>
          ))}
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-12 max-w-2xl text-left text-gray-800"
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
            
            <span className="relative z-10 block">
              Start Your Journey
            </span>
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

