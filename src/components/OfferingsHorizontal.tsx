"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap-init";
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
    image: "/images/offerings/workshop.png",
  },
  {
    title: "Podcast shoots with industry experts",
    description: "Learn from the best through engaging podcast sessions",
    icon: <Mic className="w-full h-full" />,
    gradient: "from-accent-gold to-accent-maroon",
    image: "/images/offerings/workshop.png",
  },
  {
    title: "1:1 mentorship with top professionals",
    description: "Personalized guidance from industry leaders",
    icon: <UserCheck className="w-full h-full" />,
    gradient: "from-accent-maroon to-accent-gold",
    image: "/images/offerings/mentorship.png",
  },
  {
    title: "Scientifically build academic score",
    description: "Evidence-based strategies to excel academically",
    icon: <GraduationCap className="w-full h-full" />,
    gradient: "from-primary to-accent-gold",
    image: "/images/offerings/academic-support.png",
  },
  {
    title: "Forge bonds with similarly driven teens",
    description: "Connect with peers who share your ambition",
    icon: <Users className="w-full h-full" />,
    gradient: "from-accent-gold to-primary",
    image: "/images/offerings/peer-learning.png",
  },
  {
    title: "Weekly mentorship from Harvard & UCL professionals",
    description: "Regular sessions with world-class educators",
    icon: <BookOpen className="w-full h-full" />,
    gradient: "from-primary-light to-primary",
    image: "/images/offerings/leadership.png",
  },
  {
    title: "Monthly career counsellor meetings",
    description: "Structured career planning and guidance",
    icon: <Calendar className="w-full h-full" />,
    gradient: "from-primary to-accent-maroon",
    image: "/images/offerings/career-guidance.png",
  },
  {
    title: "Build resilience",
    description: "Develop mental strength and perseverance",
    icon: <Shield className="w-full h-full" />,
    gradient: "from-accent-gold to-accent-maroon",
    image: "/images/offerings/resilience.png",
  },
  {
    title: "Build empathy",
    description: "Cultivate emotional intelligence and understanding",
    icon: <Heart className="w-full h-full" />,
    gradient: "from-accent-maroon to-accent-gold",
    image: "/images/offerings/empathy.png",
  },
];

export default function OfferingsHorizontal() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only setup GSAP ScrollTrigger on desktop
    if (window.innerWidth >= 768 && sectionRef.current && pinRef.current && horizontalRef.current) {
      let scrollTween: gsap.core.Tween | null = null;

      // Wait for images to load before calculating dimensions
      const setupScrollTrigger = () => {
        const cards = Array.from(horizontalRef.current!.children) as HTMLElement[];
        if (cards.length === 0) return;

        // Kill existing trigger if any
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars.trigger === sectionRef.current) {
            trigger.kill();
          }
        });

        // Calculate total width based on actual card dimensions
        const cardWidth = cards[0].offsetWidth || 400;
        const gap = 24; // mr-6 = 1.5rem = 24px
        const container = horizontalRef.current;
        const leftPadding = container ? parseInt(getComputedStyle(container).paddingLeft) || 24 : 24;
        const rightPadding = container ? parseInt(getComputedStyle(container).paddingRight) || 24 : 24;
        const totalWidth = (cardWidth + gap) * offerings.length - gap + leftPadding + rightPadding;
        const scrollDistance = Math.max(0, totalWidth - window.innerWidth);

        // Set width of horizontal container
        gsap.set(horizontalRef.current, {
          width: totalWidth,
        });

        // Initial entrance animation for cards
        gsap.set(cards, {
          opacity: 0,
          y: 30,
        });

        // Create horizontal scroll animation
        scrollTween = gsap.to(horizontalRef.current, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            pin: pinRef.current,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onEnter: () => {
              // Fade + slide in animation when entering
              gsap.to(cards, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
              });
            },
          },
        });
      };

      // Setup after a short delay to ensure DOM is ready
      const timeoutId = setTimeout(setupScrollTrigger, 100);

      // Also setup on window load (for images)
      window.addEventListener("load", setupScrollTrigger);

      // Cleanup
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener("load", setupScrollTrigger);
        if (scrollTween) scrollTween.kill();
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars.trigger === sectionRef.current) {
            trigger.kill();
          }
        });
      };
    }
  }, []);

  return (
    <section
      id="offerings"
      ref={sectionRef}
      className="relative bg-background-light"
    >
      {/* Desktop: Horizontal Scroll */}
      <div className="hidden md:block">
        <div ref={pinRef} className="relative h-screen w-full flex flex-col items-center justify-start pt-20 md:pt-32">
          {/* Title */}
          <div className="w-full mb-8">
            <h2 className="text-center text-text-primary">What We Offer</h2>
          </div>

          {/* Horizontal Scroll Container - Vertically Centered */}
          <div className="flex items-center justify-center w-full h-[60vh] min-h-[60vh] overflow-hidden">
            <div
              ref={horizontalRef}
              className="flex flex-row items-center px-6 lg:px-12"
              style={{ willChange: "transform" }}
            >
              {offerings.map((offering, index) => (
                <div
                  key={offering.title}
                  className="flex-shrink-0 w-[400px] mr-6"
                  style={{ willChange: "transform" }}
                >
                  <div className="bg-white border border-primary/20 rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden h-full hover:scale-105">
                    {/* Offering Image */}
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={offering.image}
                        alt={offering.title}
                        fill
                        className="object-cover"
                        sizes="400px"
                      />
                    </div>

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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Vertical Grid */}
      <div className="md:hidden pb-20 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="mb-12">
            <h2 className="text-center text-text-primary">What We Offer</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="bg-white border border-primary/20 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Offering Image */}
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={offering.image}
                    alt={offering.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

