"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Card from "./ui/Card";
import { Users, Sparkles, TrendingUp, Rocket } from "lucide-react";
import { wordStagger, wordItem } from "@/lib/animations";

const manifestoText =
  "Unprecedented ##Learnings##, Failing regularly, ##Building## with friends, while being on a journey of ##self-discovery##. Get on a ##legacy-building## journey today, to build the ##future## of tomorrow.";

const keyOfferings = [
  {
    title: "Mentorship from professionals",
    icon: <Users className="w-full h-full" />,
  },
  {
    title: "Self Discovery",
    icon: <Sparkles className="w-full h-full" />,
  },
  {
    title: "Build leadership",
    icon: <TrendingUp className="w-full h-full" />,
  },
  {
    title: "Meet future builders",
    icon: <Rocket className="w-full h-full" />,
  },
];

export default function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Parse text and identify highlighted words
  const parseText = (text: string) => {
    const parts: Array<{ text: string; isHighlighted: boolean }> = [];
    const regex = /##([^#]+)##/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      // Add text before highlight
      if (match.index > lastIndex) {
        parts.push({
          text: text.substring(lastIndex, match.index),
          isHighlighted: false,
        });
      }
      // Add highlighted text
      parts.push({
        text: match[1],
        isHighlighted: true,
      });
      lastIndex = regex.lastIndex;
    }
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push({
        text: text.substring(lastIndex),
        isHighlighted: false,
      });
    }

    return parts;
  };

  const textParts = parseText(manifestoText);

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-32 bg-background-offwhite min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Manifesto Text */}
        <motion.div
          className="mb-16 md:mb-24"
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={wordStagger}
        >
          <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-text-primary leading-tight text-justify">
            {textParts.map((part, partIndex) => {
              const words = part.text.split(" ");
              return words.map((word, wordIndex) => {
                const isLastWord = wordIndex === words.length - 1;
                const key = `${partIndex}-${wordIndex}`;
                
                if (part.isHighlighted) {
                  return (
                    <motion.span
                      key={key}
                      variants={wordItem}
                      className="inline-block mr-2 md:mr-3 text-[#F4A261]"
                      style={{ 
                        fontFamily: "var(--font-dancing), 'Dancing Script', cursive",
                        fontWeight: 900,
                        letterSpacing: "0.03em",
                        WebkitTextStroke: "0.5px #F4A261"
                      }}
                    >
                      {word}{!isLastWord && " "}
                    </motion.span>
                  );
                } else {
                  return (
                    <motion.span
                      key={key}
                      variants={wordItem}
                      className="inline-block mr-2 md:mr-3 font-black"
                    >
                      {word}{!isLastWord && " "}
                    </motion.span>
                  );
                }
              });
            })}
          </p>
        </motion.div>

        {/* Key Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {keyOfferings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                delay={index * 0.1}
                icon={
                  <div className="w-12 h-12 md:w-16 md:h-16 text-primary">
                    {offering.icon}
                  </div>
                }
                className="h-full hover:shadow-xl group"
              >
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2 group-hover:text-accent-maroon transition-colors">
                  {offering.title}
                </h3>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

