import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion as motionTokens } from "../../tokens";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
  threshold?: number;
}

const variants = (y: number, delay: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.slow,
      delay,
      ease: motionTokens.ease,
    },
  },
});

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  y = 32,
  className,
  style,
  threshold = 0.12,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants(y, delay)}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  stagger?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  stagger = 0.1,
  className,
  style,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; y?: number }> = ({
  children,
  y = 24,
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: motionTokens.duration.normal, ease: motionTokens.ease },
      },
    }}
  >
    {children}
  </motion.div>
);
