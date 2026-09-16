import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { EASE, viewportOnce, staggerContainer } from "../../lib/motion";

const ROLES = [
  { title: "Customer Success Associate", type: "Full-time · Remote" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function CareersOpenRoles() {
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
            Open positions
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 flex flex-col gap-4"
        >
          {ROLES.map((role) => (
            <motion.div
              key={role.title}
              variants={cardVariants}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#dceaf4] bg-white p-6"
            >
              <div>
                <h3 className="text-[16px] font-semibold text-ink">
                  {role.title}
                </h3>
                <p className="mt-1 text-[13.5px] text-ink/55">
                  {role.type}
                </p>
              </div>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-medium text-white transition-colors hover:bg-ink/85"
              >
                Apply
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
