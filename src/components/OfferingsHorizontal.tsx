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
      const titleRef = sectionRef.current.querySelector("h2");
      const titleContainerRef = sectionRef.current.querySelector(".title-container");

      // Wait for images to load before calculating dimensions
      const setupScrollTrigger = () => {
        const cards = Array.from(horizontalRef.current!.children) as HTMLElement[];
        if (cards.length === 0 || !titleRef || !titleContainerRef) return;

        // Kill existing triggers
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars.trigger === sectionRef.current) {
            trigger.kill();
          }
        });

        // Calculate total width based on actual card dimensions
        const cardWidth = cards[0].offsetWidth || 400;
        const gap = 24;
        const container = horizontalRef.current;
        const leftPadding = container ? parseInt(getComputedStyle(container).paddingLeft) || 24 : 24;
        const rightPadding = container ? parseInt(getComputedStyle(container).paddingRight) || 24 : 24;
        const cardsWidth = (cardWidth + gap) * offerings.length - gap;
        const totalWidth = cardsWidth + leftPadding + rightPadding;
        const viewportWidth = window.innerWidth;
        const scrollDistance = Math.max(0, totalWidth - viewportWidth);

        // Set width of horizontal container
        gsap.set(horizontalRef.current, {
          width: totalWidth,
        });

        // Phase 1: Initial state - Big title centered, cards off-screen
        gsap.set(titleRef, {
          scale: 4,
          opacity: 1,
        });
        gsap.set(titleContainerRef, {
          position: "absolute",
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
          width: "100%",
          willChange: "transform",
        });
        gsap.set(horizontalRef.current, {
          opacity: 0,
          x: window.innerWidth + 200,
        });
        gsap.set(cards, {
          x: window.innerWidth + 200,
          opacity: 0,
        });

        // Calculate scroll phases
        const introScroll = window.innerHeight * 0.6; // First 60vh for intro
        const totalPinnedScroll = introScroll + scrollDistance;
        
        // Main pin - pins the entire section for the full duration
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalPinnedScroll}`,
          pin: pinRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
        
        // Phase 1: Title shrinks and moves to top (first 40% of intro) - using transforms for smoothness
        // Calculate the exact transform needed to move from center (50%) to top (5%)
        const viewportHeight = window.innerHeight;
        const moveDistance = viewportHeight * 0.45; // 50% - 5% = 45% of viewport
        
        gsap.to(titleRef, {
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${introScroll * 0.4}`,
            scrub: 1.5, // Smoother scrubbing
            invalidateOnRefresh: true,
          },
        });

        gsap.to(titleContainerRef, {
          y: -moveDistance, // Move up by 45% of viewport height
          x: "-50%",
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${introScroll * 0.4}`,
            scrub: 1.5, // Smoother scrubbing
            invalidateOnRefresh: true,
          },
        });
        
        // Keep title fixed at top for the rest of the scroll
        gsap.set(titleContainerRef, {
          y: -moveDistance,
          x: "-50%",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top top+=${introScroll * 0.4}`,
            end: `+=${totalPinnedScroll - introScroll * 0.4}`,
            scrub: false,
            onEnter: () => {
              gsap.set(titleContainerRef, { 
                y: -moveDistance, 
                x: "-50%"
              });
            },
            onUpdate: () => {
              // Ensure title stays in place during horizontal scroll
              gsap.set(titleContainerRef, { 
                y: -moveDistance, 
                x: "-50%"
              });
            },
          },
        });

        // Phase 2: Cards container appears and cards enter from right (40%-100% of intro)
        gsap.to(horizontalRef.current, {
          opacity: 1,
          x: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top top+=${introScroll * 0.4}`,
            end: `+=${introScroll * 0.6}`,
            scrub: true,
          },
        });

        gsap.to(cards, {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top top+=${introScroll * 0.4}`,
            end: `+=${introScroll * 0.6}`,
            scrub: true,
          },
        });

        // Phase 3: Horizontal scroll (after intro completes)
        scrollTween = gsap.to(horizontalRef.current, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top top+=${introScroll}`,
            end: () => `+=${scrollDistance}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      };

      // Setup after a short delay to ensure DOM is ready
      const timeoutId = setTimeout(setupScrollTrigger, 100);
      window.addEventListener("load", setupScrollTrigger);
      
      // Handle window resize
      const handleResize = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener("load", setupScrollTrigger);
        window.removeEventListener("resize", handleResize);
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
          <div ref={pinRef} className="relative h-screen w-full overflow-hidden">
            {/* Title Container - Starts big and centered */}
            <div className="title-container w-full">
              <h2 className="text-center text-text-primary">What We Offer</h2>
            </div>

            {/* Horizontal Scroll Container - Cards come from right */}
            <div className="absolute inset-0 flex items-center justify-start overflow-hidden">
            <div
              ref={horizontalRef}
              className="flex flex-row items-center pl-6 lg:pl-12 pr-6 lg:pr-12"
              style={{ willChange: "transform" }}
            >
              {offerings.map((offering, index) => (
                <div
                  key={offering.title}
                  className="flex-shrink-0 w-[400px] mr-6"
                  style={{ willChange: "transform" }}
                >
                  <div className="relative rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden h-full hover:scale-105 border border-white/20">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={offering.image}
                        alt={offering.title}
                        fill
                        className="object-cover"
                        sizes="400px"
                      />
                    </div>
                    
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 mb-4 bg-gradient-to-br ${offering.gradient} rounded-lg p-3 text-white shadow-lg`}
                      >
                        {offering.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        {offering.title}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: 3 Rows of Horizontal Scrolling Cards */}
      <div className="md:hidden pb-20 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="mb-12">
            <h2 className="text-center text-text-primary">What We Offer</h2>
          </div>
          
          {/* Split offerings into 3 rows (3 cards per row) */}
          {[
            offerings.slice(0, 3),   // Row 1: first 3 cards
            offerings.slice(3, 6),   // Row 2: next 3 cards
            offerings.slice(6, 9),   // Row 3: last 3 cards
          ].map((rowOfferings, rowIndex) => (
            <div key={rowIndex} className="mb-8">
              <div className="relative overflow-hidden w-full">
                <div className={`flex ${rowIndex === 1 ? 'animate-scroll-reverse' : 'animate-scroll'}`}>
                  {/* First set of cards */}
                  {rowOfferings.map((offering, index) => (
                    <div
                      key={`first-${offering.title}-${index}`}
                      className="flex-shrink-0 w-[calc(50vw-32px)] sm:w-[300px] px-2"
                    >
                      <div className="relative rounded-2xl p-3 sm:p-4 hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                          <Image
                            src={offering.image}
                            alt={offering.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 50vw, 300px"
                          />
                        </div>
                        
                        {/* Dark overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                        
                        {/* Content */}
                        <div className="relative z-10 flex flex-col">
                          <div
                            className={`w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 bg-gradient-to-br ${offering.gradient} rounded-lg p-2 sm:p-3 text-white shadow-lg flex-shrink-0`}
                          >
                            {offering.icon}
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-tight">
                            {offering.title}
                          </h3>
                          <p className="text-white/90 text-xs sm:text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-snug">
                            {offering.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {rowOfferings.map((offering, index) => (
                    <div
                      key={`second-${offering.title}-${index}`}
                      className="flex-shrink-0 w-[calc(50vw-32px)] sm:w-[300px] px-2"
                    >
                      <div className="relative rounded-2xl p-3 sm:p-4 hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                          <Image
                            src={offering.image}
                            alt={offering.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 50vw, 300px"
                          />
                        </div>
                        
                        {/* Dark overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                        
                        {/* Content */}
                        <div className="relative z-10 flex flex-col">
                          <div
                            className={`w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 bg-gradient-to-br ${offering.gradient} rounded-lg p-2 sm:p-3 text-white shadow-lg flex-shrink-0`}
                          >
                            {offering.icon}
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-tight">
                            {offering.title}
                          </h3>
                          <p className="text-white/90 text-xs sm:text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-snug">
                            {offering.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

