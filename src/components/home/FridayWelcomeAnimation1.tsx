import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import aiBot from "../../assets/AI Bot.png";

type Stage =
  | "intro"
  | "catching-1"
  | "catching-2"
  | "catching-3"
  | "catching-4"
  | "welcome"
  | "closing";

const problems = [
  {
    id: 1,
    text: "Manual Work",
    icon: "▤",
    color: "text-red-500",
    x: "27%",
  },
  {
    id: 2,
    text: "Missed Leads",
    icon: "●",
    color: "text-amber-500",
    x: "44%",
  },
  {
    id: 3,
    text: "Disconnected Tools",
    icon: "⌕",
    color: "text-violet-500",
    x: "61%",
  },
  {
    id: 4,
    text: "Slow Processes",
    icon: "◷",
    color: "text-emerald-500",
    x: "78%",
  },
];

export default function FridayWelcomeAnimation() {
  const [stage, setStage] = useState<Stage>("intro");
  const [caught, setCaught] = useState<number[]>([]);

  useEffect(() => {
    /*
     * ============================================================
     * FRIDAY WELCOME ANIMATION TIMELINE
     * ============================================================
     *
     * 0.00s  Friday enters from left
     * 1.45s  catches Manual Work
     * 2.35s  catches Missed Leads
     * 3.25s  catches Disconnected Tools
     * 4.15s  catches Slow Processes
     * 4.70s  Friday stops
     * 5.00s  Welcome message appears
     * 7.20s  Closing animation
     * 8.00s  Completely disappears
     */

    const timers = [
      window.setTimeout(() => {
        setCaught((prev) => [...prev, 1]);
        setStage("catching-1");
      }, 1450),

      window.setTimeout(() => {
        setCaught((prev) => [...prev, 2]);
        setStage("catching-2");
      }, 2350),

      window.setTimeout(() => {
        setCaught((prev) => [...prev, 3]);
        setStage("catching-3");
      }, 3250),

      window.setTimeout(() => {
        setCaught((prev) => [...prev, 4]);
        setStage("catching-4");
      }, 4150),

      window.setTimeout(() => {
        setStage("welcome");
      }, 4900),

      window.setTimeout(() => {
        setStage("closing");
      }, 7200),
    ];

    return () => {
      timers.forEach((timer) => {
        window.clearTimeout(timer);
      });
    };
  }, []);

  const robotPosition =
    stage === "intro"
      ? "8%"
      : stage === "catching-1"
        ? "27%"
        : stage === "catching-2"
          ? "44%"
          : stage === "catching-3"
            ? "61%"
            : "78%";

  const isRunning =
    stage === "intro" ||
    stage === "catching-1" ||
    stage === "catching-2" ||
    stage === "catching-3";

  return (
    <AnimatePresence>
      {stage !== "closing" && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* ========================================================
              BACKGROUND BLUR
              ======================================================== */}

          <motion.div
            className="absolute inset-0 bg-slate-900/30"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity:
                stage === "welcome"
                  ? 0.42
                  : 0.72,
            }}
            transition={{
              duration: 0.7,
            }}
            style={{
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          />

          {/* ========================================================
              SOFT BLUE CINEMATIC GLOW
              ======================================================== */}

          <motion.div
            className="absolute left-1/2 top-1/2 h-[260px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            animate={{
              opacity:
                stage === "welcome"
                  ? 0.15
                  : 0.35,
            }}
            transition={{
              duration: 0.8,
            }}
            style={{
              background:
                "radial-gradient(ellipse, rgba(37,99,235,0.32) 0%, rgba(59,130,246,0.12) 45%, transparent 75%)",
              filter: "blur(35px)",
            }}
          />

          {/* ========================================================
              PROBLEM LINE
              ======================================================== */}

          <motion.div
            className="absolute left-[10%] right-[8%] top-[51%] h-[2px]"
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            animate={{
              opacity:
                stage === "welcome"
                  ? 0.15
                  : 0.4,
              scaleX: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)",
            }}
          />

          {/* ========================================================
              PROBLEM / ERROR CHIPS
              ======================================================== */}

          {problems.map((problem) => {
            const isCaught = caught.includes(
              problem.id
            );

            return (
              <AnimatePresence
                key={problem.id}
              >
                {!isCaught && (
                  <motion.div
                    className="absolute"
                    style={{
                      left: problem.x,
                      top: "47%",
                      transform:
                        "translate(-50%, -50%)",
                    }}
                    initial={{
                      opacity: 0,
                      scale: 0.6,
                      y: 20,
                    }}
                    animate={{
                      opacity:
                        stage === "welcome"
                          ? 0
                          : 1,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.2,
                      x: 45,
                      y: -15,
                      filter: "blur(6px)",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -4, 0],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/70 bg-white/95 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-[0_10px_35px_rgba(15,23,42,0.2)] backdrop-blur-md"
                    >
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs ${problem.color}`}
                      >
                        {problem.icon}
                      </span>

                      {problem.text}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}

          {/* ========================================================
              FRIDAY ROBOT
              ======================================================== */}

          <motion.div
            className="absolute top-[51%]"
            style={{
              width:
                "clamp(105px, 11vw, 155px)",
            }}
            initial={{
              left: "-15%",
              x: "-50%",
              y: "-50%",
              opacity: 0,
              scale: 0.72,
            }}
            animate={{
              left: robotPosition,
              x: "-50%",
              y: "-50%",
              opacity: 1,
              scale:
                stage === "welcome"
                  ? 1
                  : 0.95,
            }}
            transition={{
              left: {
                duration: isRunning
                  ? 0.95
                  : 0.55,
                ease: "easeInOut",
              },
              opacity: {
                duration: 0.35,
              },
              scale: {
                duration: 0.5,
              },
            }}
          >
            {/* ======================================================
                SPEED TRAILS
                ====================================================== */}

            <AnimatePresence>
              {isRunning && (
                <>
                  <motion.div
                    className="absolute right-[72%] top-[38%] h-[5px] w-[100px] rounded-full bg-blue-400/70 blur-sm"
                    initial={{
                      opacity: 0,
                      scaleX: 0,
                    }}
                    animate={{
                      opacity: [
                        0.1,
                        0.8,
                        0.1,
                      ],
                      scaleX: [
                        0.5,
                        1,
                        0.6,
                      ],
                    }}
                    transition={{
                      duration: 0.45,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />

                  <motion.div
                    className="absolute right-[75%] top-[52%] h-[3px] w-[75px] rounded-full bg-cyan-300/70 blur-sm"
                    animate={{
                      opacity: [
                        0.1,
                        0.7,
                        0.1,
                      ],
                      x: [0, -15, 0],
                    }}
                    transition={{
                      duration: 0.4,
                      repeat: Infinity,
                    }}
                  />

                  <motion.div
                    className="absolute right-[68%] top-[65%] h-[3px] w-[50px] rounded-full bg-blue-500/60 blur-sm"
                    animate={{
                      opacity: [
                        0,
                        0.8,
                        0,
                      ],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: 0.15,
                    }}
                  />
                </>
              )}
            </AnimatePresence>

            {/* ======================================================
                RUNNING ROBOT
                ====================================================== */}

            <motion.img
              src={aiBot}
              alt="Friday AI"
              className="relative z-10 w-full drop-shadow-[0_18px_35px_rgba(0,0,0,0.3)]"
              animate={
                isRunning
                  ? {
                      y: [
                        0,
                        -9,
                        0,
                        -8,
                        0,
                      ],
                      rotate: [
                        -2,
                        2,
                        -2,
                        2,
                        -1,
                      ],
                    }
                  : stage === "catching-4"
                    ? {
                        y: [
                          0,
                          -12,
                          0,
                        ],
                        rotate: [
                          0,
                          -6,
                          6,
                          -3,
                          0,
                        ],
                        scale: [
                          1,
                          1.08,
                          1.03,
                          1,
                        ],
                      }
                    : {
                        y: [
                          0,
                          -5,
                          0,
                        ],
                      }
              }
              transition={{
                duration: isRunning
                  ? 0.48
                  : 0.8,
                repeat: isRunning
                  ? Infinity
                  : stage ===
                        "welcome"
                    ? Infinity
                    : 0,
                ease: "easeInOut",
              }}
            />

            {/* ======================================================
                CATCH EFFECT
                ====================================================== */}

            <AnimatePresence>
              {(stage === "catching-1" ||
                stage === "catching-2" ||
                stage === "catching-3" ||
                stage === "catching-4") && (
                <>
                  <motion.div
                    className="absolute right-[-15px] top-1/2 z-20 h-16 w-16 -translate-y-1/2 rounded-full border-[3px] border-blue-400"
                    initial={{
                      opacity: 0,
                      scale: 0.2,
                    }}
                    animate={{
                      opacity: [
                        0,
                        1,
                        0,
                      ],
                      scale: [
                        0.2,
                        1,
                        1.5,
                      ],
                    }}
                    transition={{
                      duration: 0.55,
                      ease: "easeOut",
                    }}
                  />

                  <motion.span
                    className="absolute right-[-28px] top-[25%] z-30 text-2xl text-blue-500"
                    initial={{
                      opacity: 0,
                      scale: 0,
                      rotate: -30,
                    }}
                    animate={{
                      opacity: [
                        0,
                        1,
                        0,
                      ],
                      scale: [
                        0,
                        1.3,
                        0.5,
                      ],
                      rotate: [
                        -30,
                        15,
                        30,
                      ],
                      y: [
                        10,
                        -10,
                        -25,
                      ],
                    }}
                    transition={{
                      duration: 0.65,
                    }}
                  >
                    ✦
                  </motion.span>

                  <motion.span
                    className="absolute right-[-30px] top-[65%] z-30 text-xl text-cyan-400"
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: [
                        0,
                        1,
                        0,
                      ],
                      scale: [
                        0,
                        1.4,
                        0.4,
                      ],
                      x: [
                        10,
                        0,
                        20,
                      ],
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.05,
                    }}
                  >
                    ✨
                  </motion.span>
                </>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ========================================================
              WELCOME SPEECH BUBBLE
              ======================================================== */}

          <AnimatePresence>
            {stage === "welcome" && (
              <motion.div
                className="absolute left-[82%] top-[calc(51%-145px)] -translate-x-1/2"
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.85,
                  y: -10,
                }}
                transition={{
                  duration: 0.65,
                  ease: "easeOut",
                }}
              >
                <div className="relative rounded-[28px] bg-white px-7 py-5 shadow-[0_18px_55px_rgba(15,23,42,0.25)]">
                  <div className="whitespace-nowrap text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
                    Hi! 👋
                    <br />
                    Welcome to
                    <br />
                    <span className="text-blue-600">
                      FRIDAY!
                    </span>
                  </div>

                  {/* Speech bubble pointer */}
                  <div className="absolute bottom-[-10px] left-9 h-5 w-5 rotate-45 bg-white" />

                  {/* Sparkle */}
                  <motion.span
                    className="absolute -right-7 top-4 text-xl text-blue-500"
                    animate={{
                      scale: [
                        1,
                        1.3,
                        1,
                      ],
                      rotate: [
                        0,
                        15,
                        0,
                      ],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                    }}
                  >
                    ✦
                  </motion.span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}