"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { Linkedin, Instagram, MessageCircle, Mail, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/company/alcovia",
    angle: -15,
    bgColor: "bg-[#0077B5]",
    iconColor: "text-white",
    textColor: "text-white",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/alcovia",
    angle: -5,
    bgColor: "bg-gradient-to-br from-[#E4405F] to-[#F56040]",
    iconColor: "text-white",
    textColor: "text-white",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/9129093900",
    angle: 5,
    bgColor: "bg-[#25D366]",
    iconColor: "text-white",
    textColor: "text-white",
  },
  {
    name: "Gmail",
    icon: Mail,
    url: "mailto:contact@alcovia.com",
    angle: 10,
    bgColor: "bg-[#EA4335]",
    iconColor: "text-white",
    textColor: "text-white",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/ashut0shj",
    angle: 15,
    bgColor: "bg-[#24292E]",
    iconColor: "text-white",
    textColor: "text-white",
  },
];

export default function SocialsFooter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate arc positions and z-index
  const getCardStyle = (index: number) => {
    const totalCards = socials.length;
    const centerIndex = Math.floor(totalCards / 2); // 2 (WhatsApp)
    
    // Arc y-offset: center is 0, sides go down
    const distanceFromCenter = Math.abs(index - centerIndex);
    const yOffset = distanceFromCenter * (isMobile ? 10 : 20); // Smaller arc on mobile
    
    // Z-index: center highest, then middle, then extremes
    let zIndex = 10;
    if (index === centerIndex) {
      zIndex = 50; // Center card in front
    } else if (distanceFromCenter === 1) {
      zIndex = 30; // Middle cards behind center
    } else {
      zIndex = 10; // Extreme cards at back
    }

    // Adjust z-index when hovered
    if (hoveredIndex === index) {
      zIndex = 100; // Hovered card on top
    } else if (hoveredIndex !== null) {
      zIndex = Math.max(5, zIndex - 10); // Other cards move back slightly
    }

    return { yOffset, zIndex };
  };

  return (
    <footer className="relative bg-background-offwhite border-t border-primary/20">
      {/* Social Cards Section */}
      <section
        ref={ref}
        className="relative py-20 md:py-32 bg-background-light"
      >
        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 max-w-full">
          <motion.h2
            className="text-center mb-12 md:mb-16 text-text-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Connect With Us
          </motion.h2>

          {/* Fanned Out Social Cards in Arc */}
          <div className="flex justify-center items-end flex-nowrap relative pb-8 md:pb-12" style={{ minHeight: isMobile ? "300px" : "500px" }}>
            <div className="flex justify-center items-end mx-auto">
            {socials.map((social, index) => {
              const Icon = social.icon;
              const { yOffset, zIndex } = getCardStyle(index);
              const isHovered = hoveredIndex === index;
              
              // Card dimensions (base width in pixels) - responsive
              const baseCardWidth = isMobile ? 80 : 180; // Smaller cards to fit without scroll
              const overlapAmount = isMobile ? 20 : 50; // pixels - less overlap to fit better
              const hoverScale = 1.25; // Scale factor when hovered
              
              // Calculate overlap: each card overlaps by about 60px
              // Center the group by offsetting from the center
              const totalCards = socials.length;
              const centerIndex = Math.floor(totalCards / 2);
              const baseOverlapOffset = (index - centerIndex) * -overlapAmount;
              
              // Calculate compression to maintain container width
              // When one card scales up, others compress proportionally
              let scale = 1;
              let xOffset = baseOverlapOffset;
              
              if (hoveredIndex !== null) {
                if (isHovered) {
                  // Hovered card scales up and moves up
                  scale = hoverScale;
                  // Move up more when hovered
                } else {
                  // Other cards compress to maintain total width
                  // Extra space taken by hovered card = baseCardWidth * (hoverScale - 1)
                  const extraSpace = baseCardWidth * (hoverScale - 1);
                  // Distribute compression across other cards
                  const compressionRatio = 1 - (extraSpace / (baseCardWidth * (totalCards - 1)));
                  scale = Math.max(0.85, compressionRatio); // Minimum scale of 0.85
                  
                  // Adjust x position to compensate for compression
                  // Cards before hovered card shift left, cards after shift right
                  const compressionOffset = (baseCardWidth * (1 - scale)) / 2;
                  if (index < hoveredIndex!) {
                    xOffset = baseOverlapOffset - compressionOffset;
                  } else {
                    xOffset = baseOverlapOffset + compressionOffset;
                  }
                }
              }
              
              return (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: 50, rotate: social.angle }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? (isHovered ? yOffset - 40 : yOffset) : 50,
                    rotate: social.angle,
                    scale: scale,
                    x: xOffset,
                    zIndex: zIndex,
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="group relative"
                  style={{ zIndex }}
                >
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <motion.div
                      className={`${social.bgColor} rounded-2xl p-4 md:p-8 lg:p-10 w-20 md:w-44 lg:w-52 h-36 md:h-64 lg:h-80 shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center`}
                      whileHover={{ 
                        scale: 1.1,
                        y: -30,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="flex flex-col items-center text-center h-full justify-center">
                        <div className={`w-8 h-8 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 md:mb-6 ${social.iconColor} transition-colors`}>
                          <Icon className="w-full h-full" />
                        </div>
                        <h3 className={`text-xs md:text-xl lg:text-2xl font-bold ${social.textColor} mb-1 md:mb-3`}>
                          {social.name}
                        </h3>
                        <p className={`text-[10px] md:text-sm lg:text-base ${social.textColor} opacity-90`}>
                          {social.name === "Gmail" ? "Email Us" : social.name === "WhatsApp" ? "Message Us" : "Follow"}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="bg-[#0a0a0a] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            {/* Logo and Tagline */}
            <div>
              <Image
                src="/images/logo/alcovia-logo.svg"
                alt="Alcovia Logo"
                width={200}
                height={60}
                className="h-10 w-auto mb-3 brightness-0 invert"
              />
              <p className="text-white/70 text-sm">
                Building the leaders of tomorrow, today
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">
                Quick Links
              </h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <a href="#offerings" className="hover:text-white transition-colors">
                    Programs
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/alcovia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">
                Address
              </h4>
              <p className="text-white/70 text-sm">
                WeWork, Two Horizon Centre,
                <br />
                DLF Phase 5, Gurugram
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 mt-6 pt-6 text-center">
            <p className="text-white/60 text-xs md:text-sm">
              © 2025 Alcovia. Ahead of the Curve.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

