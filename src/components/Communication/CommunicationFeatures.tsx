import { motion } from "framer-motion";
import { EASE, viewportOnce, staggerContainer } from "../../lib/motion";

const FEATURES = [
  {
    title: "Unified Inbox",
    body: "Calls, chat, email, and SMS in one thread per customer — nothing scattered across tools.",
  },
  {
    title: "Call Routing",
    body: "Calls reach the right person automatically, based on rules your team sets.",
  },
  {
    title: "Live Chat",
    body: "Talk to website visitors in real time, with full context from their account.",
  },
  {
    title: "Automated Replies",
    body: "Friday handles common questions instantly, and hands off to a human when needed.",
  },
  {
    title: "Team Inboxes",
    body: "Shared inboxes with clear ownership, so no message falls through the cracks.",
  },
  {
    title: "Conversation History",
    body: "Every past interaction is one click away, no matter which channel it happened on.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function CommunicationFeatures() {
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
            Built to keep every conversation connected.
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
