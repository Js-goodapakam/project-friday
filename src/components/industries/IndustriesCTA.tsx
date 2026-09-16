import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { EASE, viewportOnce } from "../../lib/motion";

export default function IndustriesCTA() {
  return (
    <section className="px-5 py-24 sm:px-8 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: EASE }}
        className="mx-auto max-w-3xl rounded-3xl border border-[#dceaf4] bg-white p-10 text-center sm:p-14"
      >
        <h2 className="text-[26px] font-semibold leading-tight tracking-tight text-ink sm:text-[32px]">
          Don't see your industry listed?
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/55">
          Friday adapts to how your business runs. Tell us about your industry and we'll show you how it fits.
        </p>
        <Link
          to="/contact"
          className="group mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14.5px] font-medium text-white transition-colors hover:bg-ink/85"
        >
          Talk to us
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </Link>
      </motion.div>
    </section>
  );
}
