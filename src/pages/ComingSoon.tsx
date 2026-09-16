import { motion } from "framer-motion";
import { EASE } from "../lib/motion";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <section className="flex min-h-screen items-center justify-center px-5">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="text-center"
      >
        <div className="text-[13px] font-medium uppercase tracking-wider text-ink/40">
          Friday
        </div>
        <h1 className="mt-2 text-[32px] font-semibold tracking-tight text-ink sm:text-[42px]">
          {title}
        </h1>
        <p className="mt-3 text-ink/50">This section is being built in a later phase.</p>
      </motion.div>
    </section>
  );
}
