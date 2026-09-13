import { motion } from "framer-motion";
import aiBot from "../../assets/AI Bot.png";

export type MiniFridayActionType =
  | "innovate"
  | "automate"
  | "elevate"
  | "secure";

interface MiniFridayActionProps {
  action: MiniFridayActionType;
  active: boolean;
}

const ACTIONS = {
  innovate: { message: "Got an idea?" },
  automate: { message: "I'll handle it." },
  elevate: { message: "Let's level up!" },
  secure: { message: "You're covered." },
} as const;

export default function MiniFridayAction({
  action,
  active,
}: MiniFridayActionProps) {
  const current = ACTIONS[action];

  return (
    <motion.div
      initial={false}
      animate={
        active
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 8, scale: 0.92 }
      }
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="pointer-events-none absolute -top-3 right-2 z-20 origin-bottom-right"
      aria-hidden={!active}
    >
      <div className="relative flex items-center gap-2.5">
        <div className="relative flex h-[58px] w-[58px] items-end justify-center">
          <motion.img
            src={aiBot}
            alt=""
            className="h-[58px] w-auto object-contain drop-shadow-[0_10px_18px_rgba(11,28,51,0.16)]"
            animate={
              active
                ? {
                    y:
                      action === "elevate"
                        ? [4, -8, 0]
                        : action === "innovate" || action === "secure"
                          ? [0, -2, 0]
                          : [0, -1, 0],
                    rotate:
                      action === "innovate"
                        ? [0, -4, 4, 0]
                        : action === "secure"
                          ? [0, -3, 0]
                          : 0,
                  }
                : { y: 0, rotate: 0 }
            }
            transition={
              active
                ? {
                    duration: action === "elevate" ? 0.75 : 0.65,
                    ease: "easeInOut",
                  }
                : { duration: 0.2 }
            }
          />

          {action === "innovate" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 8 }}
              animate={
                active
                  ? { opacity: 1, scale: [0.8, 1.08, 1], y: -20 }
                  : { opacity: 0, scale: 0.5, y: 8 }
              }
              transition={{ delay: 0.18, duration: 0.45 }}
              className="absolute -right-1 -top-1 text-[20px] drop-shadow-sm"
            >
              💡
            </motion.div>
          )}

          {action === "automate" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={
                active
                  ? { opacity: 1, scale: 1, rotate: 360 }
                  : { opacity: 0, scale: 0.6, rotate: 0 }
              }
              transition={{
                delay: 0.12,
                duration: 0.7,
                ease: "easeInOut",
              }}
              className="absolute -right-2 top-0 text-[21px] leading-none"
            >
              ⚙
            </motion.div>
          )}

          {action === "elevate" && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.7 }}
              animate={
                active
                  ? { opacity: 1, y: -18, scale: [0.8, 1.15, 1] }
                  : { opacity: 0, y: 8, scale: 0.7 }
              }
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute -right-1 -top-1 text-[22px] font-bold text-[#078bd3]"
            >
              ↗
            </motion.div>
          )}

          {action === "secure" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={
                active
                  ? { opacity: [0, 1, 0.85], scale: [0.65, 1.15, 1] }
                  : { opacity: 0, scale: 0.6 }
              }
              transition={{ delay: 0.15, duration: 0.55 }}
              className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border border-[#078bd3]/30 bg-[#078bd3]/10 text-[15px] text-[#078bd3]"
            >
              🛡️
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 5 }}
          animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 5 }}
          transition={{ delay: 0.16, duration: 0.22 }}
          className="whitespace-nowrap rounded-xl border border-ink/[0.08] bg-white/95 px-3 py-2 text-[11px] font-medium text-ink shadow-[0_10px_24px_-12px_rgba(11,28,51,0.28)] backdrop-blur-md"
        >
          {current.message}
        </motion.div>
      </div>
    </motion.div>
  );
}
