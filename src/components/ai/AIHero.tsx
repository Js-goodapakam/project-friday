import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { EASE } from "../../lib/motion";

export default function AIHero() {
  return (
    <section className="relative overflow-hidden px-5 pt-32 pb-20 sm:px-8 md:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-[13px] font-medium uppercase tracking-wider text-[#078bd3]"
        >
          AI-Powered Business
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="mt-4 text-[34px] font-semibold leading-[1.1] tracking-tight text-ink sm:text-[46px] md:text-[52px]"
        >
          Intelligence built into every part of your business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-ink/60 sm:text-[18px]"
        >
          Friday uses AI to surface insights, answer questions, and take
          action — so your team makes faster decisions with less guesswork.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14.5px] font-medium text-white transition-colors hover:bg-ink/85"
          >
            Get a walkthrough
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
