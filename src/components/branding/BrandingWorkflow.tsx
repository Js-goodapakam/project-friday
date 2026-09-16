import { motion } from "framer-motion";
import { EASE, viewportOnce, staggerContainer } from "../../lib/motion";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    body: "We learn your business, your customers, and what makes you different.",
  },
  {
    number: "02",
    title: "Design",
    body: "Logo, colors, type, and voice come together into one clear identity.",
  },
  {
    number: "03",
    title: "Deploy",
    body: "Your new brand rolls out across every touchpoint, with guidelines your team can actually follow.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function BrandingWorkflow() {
  return (
    <section className="friday-dark px-5 py-24 sm:px-8 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-xl"
        >
          <h2 className="text-[30px] font-semibold leading-tight tracking-tight text-white sm:text-[36px]">
            From unclear identity to a brand people trust.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-8"
        >
          {STEPS.map((step) => (
            <motion.div key={step.number} variants={stepVariants}>
              <div className="text-[13px] font-medium text-[#22c1ff]">
                {step.number}
              </div>
              <h3 className="mt-3 text-[19px] font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-white/55">
                {step.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
