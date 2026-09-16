import { motion } from "framer-motion";
import { EASE, viewportOnce, staggerContainer } from "../../lib/motion";

const INDUSTRIES = [
  {
    title: "Healthcare",
    body: "Manage patient relationships and communication while staying on top of compliance.",
  },
  {
    title: "Retail & E-commerce",
    body: "Track customers across every channel and automate order and support workflows.",
  },
  {
    title: "Real Estate",
    body: "Follow up on leads automatically and keep every listing conversation organized.",
  },
  {
    title: "Financial Services",
    body: "Centralize client relationships with the structure and audit trail your industry needs.",
  },
  {
    title: "Education",
    body: "Manage student and parent communication, admissions, and follow-ups in one place.",
  },
  {
    title: "Professional Services",
    body: "Keep client work, communication, and billing visible to your whole team.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function IndustriesGrid() {
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
            Wherever you work, Friday fits in.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {INDUSTRIES.map((industry) => (
            <motion.div
              key={industry.title}
              variants={cardVariants}
              className="rounded-2xl border border-[#dceaf4] bg-white p-6"
            >
              <h3 className="text-[17px] font-semibold text-ink">
                {industry.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/55">
                {industry.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
