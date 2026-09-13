import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { EASE, viewportOnce, staggerContainer } from "../../lib/motion";

const SOLUTIONS = [
  {
    title: "CRM & Customer Management",
    body: "Smarter relationships, better visibility, and stronger customer journeys.",
    href: "/crm",
  },
  {
    title: "Business Automation",
    body: "Automate repetitive work and improve business efficiency.",
    href: "/automation",
  },
  {
    title: "Customer Communication",
    body: "Connect every conversation across voice, chat, and WhatsApp.",
    href: "/communication",
  },
  {
    title: "AI-Powered Business",
    body: "Bring intelligence into everyday decisions and processes.",
    href: "/friday-ai",
  },
  {
    title: "Digital Transformation",
    body: "Build modern, scalable, and future-ready business operations.",
    href: "/digital-transformation",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
};

export default function Solutions() {
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
            Solutions built around your business.
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.45, delay: 0.1, ease: EASE }}
            className="mt-4 text-[16px] leading-relaxed text-ink/60"
          >
            From customer relationships to intelligent automation, Friday
            brings the right technology together.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.09, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SOLUTIONS.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -7 }}
              whileTap={{ scale: 0.99 }}
              className="h-full"
            >
              <Link
                to={item.href}
                className="group flex h-full flex-col rounded-2xl border border-[#dceaf4] bg-white p-6 transition-all duration-300 hover:border-[#b9d9ec] hover:shadow-[0_24px_55px_-20px_rgba(7,26,51,0.3)]"
              >
                <motion.h3
                  className="text-[17px] font-semibold text-ink"
                  whileHover={{ x: 2 }}
                >
                  {item.title}
                </motion.h3>

                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink/55">
                  {item.body}
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#078bd3]">
                  Explore
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                  >
                    →
                  </motion.span>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
