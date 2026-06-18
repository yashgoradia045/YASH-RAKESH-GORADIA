import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface SplitTextProps {
  /** Text to slice and animate */
  text: string;
  /** Custom wrapper class */
  className?: string;
  /** Delay before animation starts (in seconds) */
  delay?: number;
  /** Duration of individual character transitions */
  duration?: number;
  /** Amount to offset characters vertically at start */
  translateY?: number;
  /** Initial rotation angle */
  rotate?: number;
  /** Spring stiffness */
  stiffness?: number;
  /** Spring damping */
  damping?: number;
  /** Animated character wrapper font styles */
  letterClassName?: string;
  /** Word wrapper styles */
  wordClassName?: string;
  /** Trigger visual stagger once or repeatedly */
  once?: boolean;
}

/**
 * SplitText - Elegant, frame-accurate character splitting layout animation.
 * Replicates the fluid, premium editorial headline effects from thecookie-co.com 
 * under ReactBits spec guidelines.
 */
export default function SplitText({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  translateY = 30,
  rotate = 2,
  stiffness = 180,
  damping = 16,
  letterClassName = '',
  wordClassName = 'inline-block',
  once = true,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once, margin: "-40px" });

  const words = text.split(' ');

  // Stagger parameters
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02,
        delayChildren: delay,
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: translateY,
      rotate: rotate,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: stiffness,
        damping: damping,
        duration: duration
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, wordIndex) => (
        <span 
          key={`${word}-${wordIndex}`} 
          className={`${wordClassName} whitespace-nowrap mr-[0.25em]`}
        >
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={`${char}-${charIndex}`}
              variants={letterVariants}
              className={`inline-block ${letterClassName}`}
              style={{ originY: 0.8 }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}
