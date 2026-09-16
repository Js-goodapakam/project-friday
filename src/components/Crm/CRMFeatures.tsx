import { motion } from "framer-motion";
import { EASE, viewportOnce, staggerContainer } from "../../lib/motion";

const FEATURES = [
  {
    title: "360° Customer View",
    body: "Every call, chat, email, and deal in a single timeline — no more digging across five tools.",
  },
  {
    title: "Pipeline Management",
    body: "Track deals from first touch to close, without spreadsheets or guesswork.",
  },
  {
    title: "Smart Follow-Ups",
    body: "Friday reminds your team who to reach out to, and exactly when.",
  },
  {
    title: "Lead Scoring",
    body: "Automatically prioritize the leads most likely to convert.",
  },
  {
    title: "Team Collaboration",
    body: "Notes, tasks, and ownership visible to the whole team in real time.",
  },
  {
    title: "Custom Reporting",
    body: "Live dashboards on pipeline health, response times, and team performance.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function CRMFeatures() {
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
            Built to keep every relationship moving forward.
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