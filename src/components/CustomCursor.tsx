"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkTouchDevice = () => {
      const isTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        (typeof (navigator as any).msMaxTouchPoints !== "undefined" && (navigator as any).msMaxTouchPoints > 0);
      setIsTouchDevice(isTouch);
      return isTouch;
    };

    const isTouch = checkTouchDevice();
    if (isTouch) return;

    const updateCursorPosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a, button, [role='button']")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a, button, [role='button']")
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {/* Alcovian with wings SVG - improved design */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        {/* Left wing */}
        <path
          d="M5 20C5 12 8 6 14 4C10 9 8 14 8 20C8 26 10 31 14 33C8 31 5 26 5 20Z"
          fill="currentColor"
          opacity="0.9"
        />
        {/* Right wing */}
        <path
          d="M35 20C35 12 32 6 26 4C30 9 32 14 32 20C32 26 30 31 26 33C32 31 35 26 35 20Z"
          fill="currentColor"
          opacity="0.9"
        />
        {/* Central body - stylized A */}
        <circle cx="20" cy="20" r="5" fill="currentColor" />
        <path
          d="M17 20L20 15L23 20M20 15V25"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
        />
      </svg>
    </motion.div>
  );
}

