import { motion } from "framer-motion";
import { EASE, viewportOnce, staggerContainer } from "../../lib/motion";

const FEATURES = [
  {
    title: "Logo & Identity",
    body: "A logo and visual system built to work everywhere — from business cards to billboards.",
  },
  {
    title: "Brand Guidelines",
    body: "Clear rules for colors, type, and tone, so your brand stays consistent as your team grows.",
  },
  {
    title: "Messaging & Voice",
    body: "A consistent way of talking about your business, across every channel.",
  },
  {
    title: "Marketing Collateral",
    body: "Templates for decks, social, and print that stay on-brand without a designer every time.",
  },
  {
    title: "Rebranding",
    body: "A refreshed identity that respects where you've been, built for where you're going.",
  },
  {
    title: "Brand Strategy",
    body: "Positioning that's clear on who you serve and why they should choose you.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function BrandingFeatures() {
  return (
    <section className="px-5 py-24 sm:px-8 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-xl"
        >
          <h2 className="text-[30px] font-semibold leading-tight tracking-tight text-ink sm:text-[36px]">
            Built to make your brand unmistakable.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="rounded-2xl border border-[#dceaf4] bg-white p-6"
            >
              <h3 className="text-[17px] font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/55">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
