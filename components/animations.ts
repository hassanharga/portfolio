export const revealTransition = {
  duration: 0.65,
  ease: [0.16, 1, 0.3, 1],
} as const;

export const revealUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: revealTransition },
} as const;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
} as const;
