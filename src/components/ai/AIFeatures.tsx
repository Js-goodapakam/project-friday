import { motion } from "framer-motion";
import { EASE, viewportOnce, staggerContainer } from "../../lib/motion";

const FEATURES = [
  {
    title: "AI Assistant",
    body: "Ask questions in plain language and get answers pulled straight from your data.",
  },
  {
    title: "Predictive Insights",
    body: "Spot trends and risks before they show up in a report — not after.",
  },
  {
    title: "Smart Summaries",
    body: "Long calls, threads, and documents condensed into what actually matters.",
  },
  {
    title: "Auto-Tagging",
    body: "Friday classifies leads, tickets, and messages automatically, consistently.",
  },
  {
    title: "Anomaly Detection",
    body: "Get flagged the moment something looks off — a stalled deal, a spike in tickets.",
  },
  {
    title: "Natural Language Reporting",
    body: "Describe the report you want and Friday builds it, no dashboard-building required.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function AIFeatures() {
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
            Built to think alongside your team.
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
