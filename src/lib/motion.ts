// Shared motion primitives. Keep every animation in the site built from
// these so the motion language stays consistent instead of ad-hoc per section.

// Premium, slightly decelerated easing — used everywhere instead of default
// ease curves so motion feels considered rather than mechanical.
export const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

// Standard viewport config for whileInView-based reveals: triggers a little
// before the element is fully on screen, only once.
export const viewportOnce = { once: true, margin: "-80px 0px -80px 0px" };
