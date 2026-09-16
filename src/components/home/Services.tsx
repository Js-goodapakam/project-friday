import { motion } from "framer-motion";
import { EASE, viewportOnce, staggerContainer } from "../../lib/motion";

const SERVICES = [
  {
    title: "Automation",
    items: ["Workflow automation", "Business process automation", "API integration"],
  },
  {
    title: "Communication",
    items: ["Cloud telephony", "Contact center", "WhatsApp solutions"],
  },
  {
    title: "Friday AI",
    items: ["Voice AI", "AI agents", "Conversational AI"],
  },
  {
    title: "Digital Marketing",
    items: ["Branding", "Website development", "SEO"],
  },
];

const colVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: EASE },
  },
};

export default function Services() {
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
            Everything your business needs to move forward.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid divide-y divide-ink/[0.07] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={colVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="group py-6 sm:px-8 sm:py-0 first:pl-0"
            >
              <h3 className="text-[16px] font-semibold text-ink transition-transform duration-300 group-hover:translate-x-1">
                {service.title}
              </h3>

              <motion.ul
                variants={staggerContainer(0.06, 0.1)}
                className="mt-4 space-y-2.5"
              >
                {service.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={itemVariants}
                    className="text-[14px] leading-snug text-ink/55 transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-5 h-px w-0 bg-[#078bd3]/50 transition-all duration-500 group-hover:w-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
