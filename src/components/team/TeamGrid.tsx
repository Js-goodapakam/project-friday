import { motion } from "framer-motion";
import { EASE, viewportOnce, staggerContainer } from "../../lib/motion";

const TEAM = [
  { name: "Bharath G", role: "Co-Founder & CEO" },
  { name: "Sasi Kumar T", role: "Co-Founder & CTO" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function TeamGrid() {
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
            Leadership
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.role}
              variants={cardVariants}
              className="rounded-2xl border border-[#dceaf4] bg-white p-6 text-center"
            >
              <div className="mx-auto h-20 w-20 rounded-full bg-[#dceaf4]" />
              <h3 className="mt-4 text-[16px] font-semibold text-ink">
                {member.name}
              </h3>
              <p className="mt-1 text-[13.5px] text-ink/55">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
