import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { EASE, viewportOnce, staggerContainer } from "../../lib/motion";

const INDUSTRIES = [
  "Healthcare",
  "Education",
  "Financial Services",
  "Real Estate",
  "Technology",
  "Professional Services",
];

const chipVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE },
  },
};

export default function Industries() {
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
            Built for the way your industry works.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.07, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 flex flex-wrap gap-3"
        >
          {INDUSTRIES.map((name) => (
            <motion.div
              key={name}
              variants={chipVariants}
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/industries"
                className="
                  inline-flex items-center rounded-full
                  border border-ink/[0.1]
                  bg-white
                  px-5 py-2.5
                  text-[14px] font-medium text-ink/70
                  transition-all duration-200 ease-out
                  hover:border-ink
                  hover:bg-ink
                  hover:text-white
                  hover:shadow-lg
                "
              >
                {name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
