import { motion } from "framer-motion";
import { EASE, viewportOnce, staggerContainer } from "../../lib/motion";

const FEATURES = [
  {
    title: "Legacy Migration",
    body: "Move data and processes off old systems without losing history or momentum.",
  },
  {
    title: "Process Digitization",
    body: "Turn paper forms, spreadsheets, and manual approvals into digital workflows.",
  },
  {
    title: "System Consolidation",
    body: "Replace a patchwork of disconnected tools with one connected platform.",
  },
  {
    title: "Cloud Readiness",
    body: "Move your operations to the cloud with a plan built around your business, not a generic checklist.",
  },
  {
    title: "Change Management",
    body: "Rollout plans and training that get your team actually using the new system.",
  },
  {
    title: "Ongoing Optimization",
    body: "Friday keeps evolving with your business, so transformation doesn't stop at go-live.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function TransformationFeatures() {
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
            Built to modernize without the disruption.
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
