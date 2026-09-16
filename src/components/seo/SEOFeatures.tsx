import { motion } from "framer-motion";
import { EASE, viewportOnce, staggerContainer } from "../../lib/motion";

const FEATURES = [
  {
    title: "Keyword Research",
    body: "Target the exact terms your customers are actually searching for.",
  },
  {
    title: "On-Page SEO",
    body: "Titles, content, and structure optimized so search engines understand your pages.",
  },
  {
    title: "Technical SEO",
    body: "Site speed, mobile-friendliness, and crawlability fixed at the source.",
  },
  {
    title: "Local SEO",
    body: "Show up in local search and maps results when nearby customers are looking.",
  },
  {
    title: "Content Strategy",
    body: "Pages and articles built to rank and actually answer what people are searching for.",
  },
  {
    title: "Rank Tracking",
    body: "Clear reporting on where you rank and how that's moving over time.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function SEOFeatures() {
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
            Built to move you up the results page.
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
