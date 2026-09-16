import { motion } from "framer-motion";
import { EASE } from "../../lib/motion";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden px-5 pt-32 pb-12 sm:px-8 md:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-[13px] font-medium uppercase tracking-wider text-[#078bd3]"
        >
          Let's Talk
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="mt-4 text-[34px] font-semibold leading-[1.1] tracking-tight text-ink sm:text-[46px] md:text-[52px]"
        >
          Tell us what's slowing you down.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-ink/60 sm:text-[18px]"
        >
          Whether it's a specific problem or you're just exploring, we'll
          get back to you within one business day.
        </motion.p>
      </div>
    </section>
  );
}
