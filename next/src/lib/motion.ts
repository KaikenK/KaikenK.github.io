import type { Variants } from "framer-motion";

export const staggerContainer = (reduceMotion: boolean, stagger = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: reduceMotion ? 0 : stagger,
    },
  },
});

export const fadeIn = (reduceMotion: boolean, duration = 0.7): Variants => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration,
      ease: "easeOut",
    },
  },
});

export const fadeUp = (
  reduceMotion: boolean,
  y = 8,
  duration = 0.7
): Variants => ({
  hidden: {
    opacity: 0,
    y: reduceMotion ? 0 : y,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: "easeOut",
    },
  },
});

export const fadeScale = (
  reduceMotion: boolean,
  scale = 0.98,
  duration = 0.7
): Variants => ({
  hidden: {
    opacity: 0,
    scale: reduceMotion ? 1 : scale,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      ease: "easeOut",
    },
  },
});

export const breatheOpacity = (reduceMotion: boolean): Variants => ({
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: reduceMotion ? 1 : [0.9, 1],
    transition: {
      duration: 4.5,
      ease: "easeOut",
      repeat: reduceMotion ? 0 : Infinity,
      repeatType: "reverse",
    },
  },
});
