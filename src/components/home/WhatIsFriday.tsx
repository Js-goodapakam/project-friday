import { useState } from "react";
import { motion } from "framer-motion";
import { EASE, viewportOnce, staggerContainer } from "../../lib/motion";

type PillarAction = "innovate" | "automate" | "elevate" | "secure";

const PILLARS: {
  title: string;
  body: string;
  action: PillarAction;
}[] = [
  {
    title: "Innovate",
    body: "New ideas, built into working software fast.",
    action: "innovate",
  },
  {
    title: "Automate",
    body: "Repetitive work moves to the background.",
    action: "automate",
  },
  {
    title: "Elevate",
    body: "Every team works from better information.",
    action: "elevate",
  },
  {
    title: "Secure",
    body: "Reliability and security by default.",
    action: "secure",
  },
];

const pillarVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
};

export default function WhatIsFriday() {
  const [activeAction, setActiveAction] =
    useState<PillarAction | null>(null);

  return (
    <section className="px-5 py-24 sm:px-8 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.65, ease: EASE }}
          className="max-w-xl"
        >
          <h2 className="text-[30px] font-semibold leading-tight tracking-tight text-ink sm:text-[36px]">
            Technology should feel simpler.
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.45, delay: 0.1, ease: EASE }}
            className="mt-4 text-[16px] leading-relaxed text-ink/60"
          >
            Friday brings CRM, automation, communication, and AI together so
            businesses can focus on customers, people, and growth — one
            connected system instead of five disconnected tools.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-x-8 gap-y-10 border-t border-ink/[0.08] pt-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PILLARS.map((pillar) => {
            const isActive = activeAction === pillar.action;

            return (
              <motion.div
                key={pillar.title}
                variants={pillarVariants}
                onMouseEnter={() => setActiveAction(pillar.action)}
                onMouseLeave={() => setActiveAction(null)}
                onClick={() =>
                  setActiveAction(isActive ? null : pillar.action)
                }
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
                className={`group relative mx-[-0.75rem] cursor-pointer rounded-2xl px-3 py-3 transition-all duration-300 ${
                  isActive
                    ? "bg-white/70 shadow-[0_14px_35px_-24px_rgba(11,28,51,0.35)]"
                    : ""
                }`}
              >
                <motion.div
                  animate={isActive ? { y: -3 } : { y: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <h3 className="text-[18px] font-semibold text-ink">
                    {pillar.title}
                  </h3>

                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink/55">
                    {pillar.body}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={
                    isActive
                      ? { width: 28, opacity: 1 }
                      : { width: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.25 }}
                  className="mt-4 h-px bg-[#078bd3]/60"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}