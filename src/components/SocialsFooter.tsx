"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Linkedin, Instagram, MessageCircle, Mail, Github } from "lucide-react";
import Link from "next/link";

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

  // Calculate arc positions and z-index
  const getCardStyle = (index: number) => {
    const totalCards = socials.length;
    const centerIndex = Math.floor(totalCards / 2); // 2 (WhatsApp)
    
    // Arc y-offset: center is 0, sides go down
    const distanceFromCenter = Math.abs(index - centerIndex);
    const yOffset = distanceFromCenter * 20; // 0, 20, 40 for arc effect
    
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-center mb-12 md:mb-16 text-text-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Connect With Us
          </motion.h2>

          {/* Fanned Out Social Cards in Arc */}
          <div className="flex justify-center items-end flex-wrap relative" style={{ minHeight: "400px" }}>
            {socials.map((social, index) => {
              const Icon = social.icon;
              const { yOffset, zIndex } = getCardStyle(index);
              const isHovered = hoveredIndex === index;
              
              // Calculate overlap: each card overlaps by about 60px
              // Center the group by offsetting from the center
              const totalCards = socials.length;
              const centerIndex = Math.floor(totalCards / 2);
              const baseOverlapOffset = (index - centerIndex) * -60;
              
              // Only move adjacent cards when hovering
              const isAdjacent = hoveredIndex !== null && Math.abs(index - hoveredIndex!) === 1;
              const hoverXOffset = isHovered 
                ? 0 
                : isAdjacent 
                  ? (index < hoveredIndex! ? -30 : 30) 
                  : 0;
              
              return (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: 50, rotate: social.angle }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? yOffset : 50,
                    rotate: social.angle,
                    scale: isHovered ? 1.2 : 1,
                    x: baseOverlapOffset + hoverXOffset,
                    zIndex: zIndex,
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 25
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
                      className={`${social.bgColor} rounded-2xl p-8 md:p-10 w-48 md:w-56 h-64 md:h-80 shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center`}
                      whileHover={{ 
                        scale: 1.1,
                        y: -30,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="flex flex-col items-center text-center h-full justify-center">
                        <div className={`w-16 h-16 md:w-20 md:h-20 mb-6 ${social.iconColor} transition-colors`}>
                          <Icon className="w-full h-full" />
                        </div>
                        <h3 className={`text-xl md:text-2xl font-bold ${social.textColor} mb-3`}>
                          {social.name}
                        </h3>
                        <p className={`text-sm md:text-base ${social.textColor} opacity-90`}>
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
      </section>

      {/* Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-4">
              Building the leaders of tomorrow, today
            </h3>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-text-secondary">
              <li>
                <a href="#offerings" className="hover:text-primary transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/alcovia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">
              Address
            </h4>
            <p className="text-text-secondary">
              WeWork, Two Horizon Centre,
              <br />
              DLF Phase 5, Gurugram
            </p>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-text-secondary text-sm md:text-base">
            © 2025 Alcovia. Ahead of the Curve.
          </p>
        </div>
      </div>
    </footer>
  );
}

