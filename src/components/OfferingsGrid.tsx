"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Card from "./ui/Card";
import {
  Briefcase,
  Mic,
  UserCheck,
  GraduationCap,
  Users,
  BookOpen,
  Calendar,
  Shield,
  Heart,
} from "lucide-react";

const offerings = [
  {
    title: "Career Discovery workshops",
    description: "Explore different career paths and discover your passion",
    icon: <Briefcase className="w-full h-full" />,
    gradient: "from-primary to-accent-maroon",
  },
  {
    title: "Podcast shoots with industry experts",
    description: "Learn from the best through engaging podcast sessions",
    icon: <Mic className="w-full h-full" />,
    gradient: "from-accent-gold to-accent-maroon",
  },
  {
    title: "1:1 mentorship with top professionals",
    description: "Personalized guidance from industry leaders",
    icon: <UserCheck className="w-full h-full" />,
    gradient: "from-accent-maroon to-accent-gold",
  },
  {
    title: "Scientifically build academic score",
    description: "Evidence-based strategies to excel academically",
    icon: <GraduationCap className="w-full h-full" />,
    gradient: "from-primary to-accent-gold",
  },
  {
    title: "Forge bonds with similarly driven teens",
    description: "Connect with peers who share your ambition",
    icon: <Users className="w-full h-full" />,
    gradient: "from-accent-gold to-primary",
  },
  {
    title: "Weekly mentorship from Harvard & UCL professionals",
    description: "Regular sessions with world-class educators",
    icon: <BookOpen className="w-full h-full" />,
    gradient: "from-primary-light to-primary",
  },
  {
    title: "Monthly career counsellor meetings",
    description: "Structured career planning and guidance",
    icon: <Calendar className="w-full h-full" />,
    gradient: "from-primary to-accent-maroon",
  },
  {
    title: "Build resilience",
    description: "Develop mental strength and perseverance",
    icon: <Shield className="w-full h-full" />,
    gradient: "from-accent-gold to-accent-maroon",
  },
  {
    title: "Build empathy",
    description: "Cultivate emotional intelligence and understanding",
    icon: <Heart className="w-full h-full" />,
    gradient: "from-accent-maroon to-accent-gold",
  },
];

export default function OfferingsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="offerings"
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
          What We Offer
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                delay={index * 0.1}
                className="h-full hover:brightness-110 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 mb-4 bg-gradient-to-br ${offering.gradient} rounded-lg p-3 text-white`}
                >
                  {offering.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                  {offering.title}
                </h3>
                <p className="text-text-secondary text-sm md:text-base">
                  {offering.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

