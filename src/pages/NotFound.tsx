import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { EASE } from "../lib/motion";

export default function NotFound() {
  return (
    <div className="friday-page-gradient flex min-h-screen items-center justify-center px-5">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="text-center"
      >
        <div className="text-[13px] font-medium uppercase tracking-wider text-[#078bd3]">
          404
        </div>
        <h1 className="mt-4 text-[32px] font-semibold leading-tight tracking-tight text-ink sm:text-[42px]">
          This page doesn't exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink/55">
          The page you're looking for may have moved or never existed.
          Let's get you back on track.
        </p>
        <Link
          to="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14.5px] font-medium text-white transition-colors hover:bg-ink/85"
        >
          Back to home
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </Link>
      </motion.div>
    </div>
  );
}
