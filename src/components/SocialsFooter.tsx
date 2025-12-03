"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Linkedin, Instagram, MessageCircle, Mail, Github } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/company/alcovia",
    angle: -10,
    gradient: "from-blue-600 to-white",
    iconColor: "text-blue-600",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/alcovia",
    angle: 10,
    gradient: "from-pink-500 via-yellow-400 to-pink-500",
    iconColor: "text-pink-500",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/9129093900",
    angle: -5,
    gradient: "from-green-500 to-white",
    iconColor: "text-green-500",
  },
  {
    name: "Gmail",
    icon: Mail,
    url: "mailto:contact@alcovia.com",
    angle: 5,
    gradient: "from-red-500 to-white",
    iconColor: "text-red-500",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/ashut0shj",
    angle: -8,
    gradient: "from-gray-700 to-white",
    iconColor: "text-gray-700",
  },
];

export default function SocialsFooter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

          {/* Fanned Out Social Cards */}
          <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: 50, rotate: social.angle }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, rotate: social.angle }
                      : { opacity: 0, y: 50, rotate: social.angle }
                  }
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.15,
                    rotate: social.angle * 1.5,
                    z: 50,
                  }}
                  className="group"
                >
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <motion.div
                      className={`bg-gradient-to-br ${social.gradient} border border-primary/30 rounded-2xl p-6 md:p-8 w-56 md:w-72 hover:border-primary hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden relative`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="flex flex-col items-center text-center relative z-10">
                        <div className={`w-12 h-12 md:w-16 md:h-16 mb-4 ${social.iconColor} transition-colors`}>
                          <Icon className="w-full h-full" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
                          {social.name}
                        </h3>
                        <p className="text-sm md:text-base text-gray-700 transition-colors">
                          {social.name === "Gmail" ? "Email" : social.name === "WhatsApp" ? "Message" : "Follow"}
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

