import { motion } from "framer-motion";
import { EASE, viewportOnce, staggerContainer } from "../../lib/motion";

const STEPS = [
  {
    number: "01",
    title: "Connect",
    body: "Bring your CRM, calls, chats, and workflows into one system — no rip-and-replace required.",
  },
  {
    number: "02",
    title: "Automate",
    body: "Set the rules once. Friday handles routing, reminders, follow-ups, and reporting in the background.",
  },
  {
    number: "03",
    title: "Elevate",
    body: "Friday's AI surfaces insights and drafts responses, so every team works from better information.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
};

const bodyVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.08, ease: EASE },
  },
};

export default function BusinessWorkflow() {
  return (
    <section className="friday-dark px-5 py-24 sm:px-8 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.65, ease: EASE }}
          className="max-w-xl"
        >
          <h2 className="text-[30px] font-semibold leading-tight tracking-tight text-white sm:text-[36px]">
            Built to run your business end-to-end.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.14, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-16 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-8"
        >
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1, delay: 0.25, ease: EASE }}
            className="pointer-events-none absolute left-0 right-0 top-0 hidden h-px origin-left bg-white/20 md:block"
          />

          {STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="text-[13px] font-medium text-[#22c1ff]"
              >
                {step.number}
              </motion.div>

              <h3 className="mt-3 text-[19px] font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
                {step.title}
              </h3>

              <motion.p
                variants={bodyVariants}
                className="mt-2 text-[14.5px] leading-relaxed text-white/55"
              >
                {step.body}
              </motion.p>

              <div className="mt-5 h-px w-0 bg-[#22c1ff]/60 transition-all duration-500 group-hover:w-12" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
