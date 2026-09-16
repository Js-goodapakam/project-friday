import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { EASE } from "../../lib/motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import HeroVisual from "./HeroVisual";

const ROTATING_PHRASES = [
  "Stronger Businesses",
  "Smarter Teams",
  "Happier Customers",
  "Faster Growth",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 sm:px-8 md:px-10">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-8">
        {/* Text column */}
        <div>
          <h1 className="text-[38px] font-semibold leading-[1.08] tracking-tight text-ink sm:text-[52px] md:text-[58px]">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.45 }}
              >
                Smart Solutions
              </motion.span>
            </span>

            <RotatingHeadlineLine
              words={ROTATING_PHRASES}
              initialDelay={0.57}
            />

            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.69 }}
              >
                Thats Friday AI.
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mt-6 max-w-md text-[16px] leading-relaxed text-ink/60 sm:text-[18px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.95 }}
          >
            Friday connects your CRM, automation, communication, and AI into one
            system - so your business runs like it has a second brain.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 1.1 }}
          >
            {/* Explore Friday */}
            <Link
              to="/crm"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14.5px] font-medium text-white transition-all duration-200 ease-out hover:scale-105 hover:bg-ink/90 hover:shadow-lg"
            >
              Explore Friday
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </Link>

            {/* See our vision */}
            <Link
              to="/vision"
              className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-[14.5px] font-medium text-ink/70 transition-all duration-200 ease-out hover:scale-105 hover:bg-white hover:text-ink hover:shadow-md"
            >
              See our vision
              <span className="transition-transform duration-200 group-hover:translate-y-0.5">
                ↓
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Visual column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function RotatingHeadlineLine({
  words,
  initialDelay,
}: {
  words: string[];
  initialDelay: number;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion || words.length < 2) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2600);

    return () => clearInterval(id);
  }, [reducedMotion, words.length]);

  return (
    <span className="block overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className="block bg-gradient-to-r from-[#0A3D91] via-[#126FD1] to-[#1E90FF] bg-clip-text text-transparent"
          initial={{
            y: reducedMotion ? 0 : "115%",
            opacity: reducedMotion ? 1 : 0,
          }}
          animate={{ y: 0, opacity: 1 }}
          exit={{
            y: reducedMotion ? 0 : "-115%",
            opacity: reducedMotion ? 1 : 0,
          }}
          transition={{
            duration: reducedMotion ? 0 : index === 0 ? 0.75 : 0.5,
            ease: EASE,
            delay: reducedMotion ? 0 : index === 0 ? initialDelay : 0,
          }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}