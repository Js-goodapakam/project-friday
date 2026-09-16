import { useRef } from "react";
import { useMotionValue, useSpring, MotionValue } from "framer-motion";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

interface MouseParallax {
  ref: React.RefObject<HTMLDivElement>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  handleMouseMove: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseLeave: () => void;
}

// Returns normalized (-0.5 to 0.5) smoothed x/y motion values based on
// pointer position within the attached container. Disabled entirely when
// the user prefers reduced motion — values simply stay at 0.
export function useMouseParallax(): MouseParallax {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 22, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 120, damping: 22, mass: 0.6 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x: springX, y: springY, handleMouseMove, handleMouseLeave };
}
