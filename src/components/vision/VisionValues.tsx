import { motion } from "framer-motion";
import { EASE, viewportOnce, staggerContainer } from "../../lib/motion";

const VALUES = [
  {
    title: "Simplicity first",
    body: "Powerful software shouldn't feel complicated to use, every day.",
  },
  {
    title: "Built to connect",
    body: "Your tools should talk to each other, not live in separate silos.",
  },
  {
    title: "Growing with you",
    body: "Friday is built to scale with your business, not hold it back.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function VisionValues() {
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
            What we believe.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-8"
        >
          {VALUES.map((value) => (
            <motion.div key={value.title} variants={cardVariants}>
              <h3 className="text-[19px] font-semibold text-white">
                {value.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-white/55">
                {value.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
