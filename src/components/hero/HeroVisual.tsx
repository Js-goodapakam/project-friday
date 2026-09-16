import { motion, MotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useMouseParallax } from "../../hooks/useMouseParallax";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { EASE } from "../../lib/motion";
import aiBot from "../../assets/AI Bot.png";

interface TechCardDef {
label: string;
sub: string;
pos: string;
depth: number;
to: string;
icon: JSX.Element;
}

const iconProps = {
width: 16,
height: 16,
viewBox: "0 0 24 24",
fill: "none",
stroke: "#078bd3",
strokeWidth: 2,
strokeLinecap: "round" as const,
strokeLinejoin: "round" as const,
};

/* =========================================================
NORMAL ICONS
========================================================= */

const CRMIcon = (
<svg {...iconProps}> <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /> <circle cx="9" cy="7" r="4" /> <path d="M23 21v-2a4 4 0 0 0-3-3.87" /> <path d="M16 3.13a4 4 0 0 1 0 7.75" /> </svg>
);

const AutomationIcon = (
<svg {...iconProps}> <circle cx="12" cy="12" r="3" /> <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /> </svg>
);

const CommunicationIcon = (
<svg {...iconProps}> <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> </svg>
);

const AIIcon = (
<svg {...iconProps}> <path d="M12 3v3M12 18v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M3 12h3M18 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" /> <circle cx="12" cy="12" r="4" /> </svg>
);

const TransformationIcon = (
<svg {...iconProps}> <polyline points="23 4 23 10 17 10" /> <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /> </svg>
);

const SEOIcon = (
<svg {...iconProps}> <circle cx="11" cy="11" r="8" /> <line x1="21" y1="21" x2="16.65" y2="16.65" /> </svg>
);

/* =========================================================
TECH CARDS
========================================================= */

const TECH_CARDS: TechCardDef[] = [
{
label: "CRM",
sub: "Relationships",
pos: "top-[6%] left-[2%]",
depth: 14,
to: "/crm",
icon: CRMIcon,
},
{
label: "Automation",
sub: "Workflows",
pos: "top-[14%] right-[0%]",
depth: 20,
to: "/automation",
icon: AutomationIcon,
},
{
label: "Communication",
sub: "Connected",
pos: "bottom-[16%] left-[0%]",
depth: 17,
to: "/communication",
icon: CommunicationIcon,
},
{
label: "AI",
sub: "Intelligence",
pos: "bottom-[6%] right-[6%]",
depth: 24,
to: "/friday-ai",
icon: AIIcon,
},
{
label: "Transformation",
sub: "Modernize",
pos: "top-[42%] left-[-16%]",
depth: 12,
to: "/digital-transformation",
icon: TransformationIcon,
},
{
label: "SEO",
sub: "Visibility",
pos: "top-[46%] right-[-6%]",
depth: 18,
to: "/digital-marketing/seo",
icon: SEOIcon,
},
];

/* =========================================================
HERO VISUAL
========================================================= */

export default function HeroVisual() {
const { ref, x, y, handleMouseMove, handleMouseLeave } =
useMouseParallax();

const reducedMotion = usePrefersReducedMotion();

return ( <div
   ref={ref}
   onMouseMove={handleMouseMove}
   onMouseLeave={handleMouseLeave}
   className="relative mx-auto aspect-square w-full max-w-[480px]"
 >
{/* Soft background glow */}
<div
className="absolute inset-0 rounded-full"
style={{
background:
"radial-gradient(circle at 50% 45%, rgba(47,180,224,0.16), rgba(79,201,122,0.08) 45%, transparent 70%)",
}}
/>

  {/* Slow orbit rings */}
  <div className="absolute inset-[6%] rounded-full border border-ink/[0.06]" />

  <div
    className="absolute inset-[16%] rounded-full border border-ink/[0.08]"
    style={{
      animation: reducedMotion
        ? "none"
        : "friday-orbit-spin 46s linear infinite",
    }}
  />

  <div
    className="absolute inset-[28%] rounded-full border border-dashed border-ink/[0.1]"
    style={{
      animation: reducedMotion
        ? "none"
        : "friday-orbit-spin-reverse 60s linear infinite",
    }}
  />

  {/* =====================================================
      FRIDAY AI BOT
      ===================================================== */}
  <motion.div
    id="friday-character-slot"
    className="group/bot absolute inset-[18%] flex cursor-pointer items-center justify-center"
    initial={{ opacity: 0, scale: 0.92, y: 12 }}
    role="button"
    tabIndex={0}
    aria-label="Open Friday AI chat"
    onClick={() => {
      window.dispatchEvent(new CustomEvent("friday:open-chat"));
    }}
    onKeyDown={(event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.dispatchEvent(new CustomEvent("friday:open-chat"));
      }
    }}
    animate={{
      opacity: 1,
      scale: 1,
      y: reducedMotion ? 0 : [0, -7, 0],
    }}
    transition={{
      opacity: {
        duration: 0.7,
        ease: EASE,
        delay: 0.9,
      },
      scale: {
        duration: 0.7,
        ease: EASE,
        delay: 0.9,
      },
      y: reducedMotion
        ? {
            duration: 0,
          }
        : {
            duration: 4.5,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1.6,
          },
    }}
  >
    {/* Friday AI Message */}
    <div
      className="
        pointer-events-none
        absolute
        -right-2
        top-[8%]
        z-30
        w-[190px]
        translate-x-4
        rounded-2xl
        border border-ink/[0.08]
        bg-white/95
        px-4
        py-3
        text-[12px]
        leading-relaxed
        text-ink
        opacity-0
        shadow-[0_12px_30px_-12px_rgba(11,28,51,0.25)]
        backdrop-blur-md
        transition-all
        duration-300
        ease-out
        group-hover/bot:translate-x-0
        group-hover/bot:opacity-100
      "
    >
      <div className="font-medium">
        Hi, I'm Friday! 👋
      </div>

      <div className="mt-0.5 text-ink/55">
        How can I help you?
      </div>

      {/* Speech bubble tail */}
      <div
        className="
          absolute
          left-5
          -bottom-1.5
          h-3
          w-3
          rotate-45
          border-b
          border-r
          border-ink/[0.08]
          bg-white
        "
      />
    </div>

    {/* Friday Bot */}
    <div
      className="
        cursor-pointer
        transition-transform
        duration-300
        ease-out
        group-hover/bot:scale-105
      "
    >
      <img
        src={aiBot}
        alt="Friday AI Assistant"
        className="
          relative
          z-10
          h-auto
          w-[72%]
          max-w-[260px]
          origin-bottom
          object-contain
          drop-shadow-[0_18px_30px_rgba(11,28,51,0.16)]
          motion-safe:group-hover/bot:animate-[friday-bot-wave_0.9s_ease-in-out]
        "
      />
    </div>
  </motion.div>

  {/* Floating tech cards */}
  {TECH_CARDS.map((card, i) => (
    <FloatingCard
      key={card.label}
      card={card}
      index={i}
      x={x}
      y={y}
      reducedMotion={reducedMotion}
    />
  ))}

  <style>{`
    @keyframes friday-orbit-spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    @keyframes friday-orbit-spin-reverse {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(-360deg);
      }
    }

    @keyframes friday-float {
      0%, 100% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-6px);
      }
    }

    @keyframes friday-bot-wave {
      0% {
        transform: rotate(0deg) translateY(0);
      }

      12% {
        transform: rotate(-3deg) translateY(-1px);
      }

      25% {
        transform: rotate(3deg) translateY(-3px);
      }

      38% {
        transform: rotate(-4deg) translateY(-2px);
      }

      51% {
        transform: rotate(4deg) translateY(-3px);
      }

      64% {
        transform: rotate(-3deg) translateY(-2px);
      }

      77% {
        transform: rotate(2deg) translateY(-1px);
      }

      90% {
        transform: rotate(-1deg) translateY(0);
      }

      100% {
        transform: rotate(0deg) translateY(0);
      }
    }

    @keyframes friday-automation-spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    @keyframes friday-transformation-rotate {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    @keyframes friday-ai-spark {
      0% {
        transform: scale(1);
        filter: drop-shadow(0 0 0 rgba(7,139,211,0));
      }

      25% {
        transform: scale(1.15) rotate(8deg);
        filter: drop-shadow(0 0 4px rgba(7,139,211,0.35));
      }

      45% {
        transform: scale(1.28) rotate(-8deg);
        filter: drop-shadow(0 0 9px rgba(7,139,211,0.65));
      }

      65% {
        transform: scale(1.16) rotate(7deg);
        filter: drop-shadow(0 0 5px rgba(7,139,211,0.45));
      }

      100% {
        transform: scale(1);
        filter: drop-shadow(0 0 0 rgba(7,139,211,0));
      }
    }

    @keyframes friday-paper-bird {
      0% {
        opacity: 0;
        transform: translateX(-2px) translateY(2px) rotate(0deg) scale(0.7);
      }

      20% {
        opacity: 1;
        transform: translateX(0) translateY(0) rotate(-8deg) scale(1);
      }

      55% {
        opacity: 1;
        transform: translateX(12px) translateY(-8px) rotate(-12deg) scale(1.05);
      }

      100% {
        opacity: 0;
        transform: translateX(32px) translateY(-22px) rotate(-18deg) scale(0.85);
      }
    }

    @keyframes friday-crm-left {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-4px);
      }
    }

    @keyframes friday-crm-right {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(4px);
      }
    }

    @keyframes friday-seo-zoom {
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.32);
      }

      100% {
        transform: scale(1.12);
      }
    }
  `}</style>
</div>

);
}

/* =========================================================
FLOATING CARD
========================================================= */

function FloatingCard({
card,
index,
x,
y,
reducedMotion,
}: {
card: TechCardDef;
index: number;
x: MotionValue<number>;
y: MotionValue<number>;
reducedMotion: boolean;
}) {
const translateX = useTransform(x, (v) => v * card.depth);
const translateY = useTransform(y, (v) => v * card.depth);

return (
<motion.div
className={`absolute ${card.pos}`}
initial={{ opacity: 0, y: 10, scale: 0.96 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
transition={{
duration: 0.6,
ease: EASE,
delay: 0.9 + index * 0.1,
}}
style={
reducedMotion
? undefined
: {
translateX,
translateY,
}
}
> <Link
     to={card.to}
     className="group flex items-center gap-2.5 rounded-2xl border border-ink/[0.06] bg-white/90 px-4 py-3 shadow-[0_8px_24px_-12px_rgba(11,28,51,0.18)] backdrop-blur-sm transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_12px_28px_-10px_rgba(11,28,51,0.24)]"
   >
{/* =================================================
ICON AREA
================================================= */} <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#078bd3]/10">

      {/* =================================================
          CRM
         ================================================= */}
      {card.label === "CRM" ? (
        <div className="relative flex h-5 w-6 items-center justify-center transition-transform duration-300 ease-out group-hover:scale-125">
          {/* Left person */}
          <svg
            width="11"
            height="18"
            viewBox="0 0 12 20"
            fill="none"
            stroke="#078bd3"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-[2px] transition-transform duration-300 ease-out group-hover:-translate-x-[3px]"
          >
            <circle cx="6" cy="4" r="3" />
            <path d="M1.5 19v-2.5a4.5 4.5 0 0 1 9 0V19" />
          </svg>

          {/* Right person */}
          <svg
            width="11"
            height="18"
            viewBox="0 0 12 20"
            fill="none"
            stroke="#078bd3"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute right-[2px] transition-transform duration-300 ease-out group-hover:translate-x-[3px]"
          >
            <circle cx="6" cy="4" r="3" />
            <path d="M1.5 19v-2.5a4.5 4.5 0 0 1 9 0V19" />
          </svg>
        </div>
      ) : null}

      {/* =================================================
          TRANSFORMATION
         ================================================= */}
      {card.label === "Transformation" ? (
        <div className="transition-transform duration-300 ease-out group-hover:scale-125">
          <div className="motion-safe:group-hover:animate-[friday-transformation-rotate_0.8s_ease-in-out]">
            {card.icon}
          </div>
        </div>
      ) : null}

      {/* =================================================
          COMMUNICATION
         ================================================= */}
      {card.label === "Communication" ? (
        <>
          {/* Original communication icon */}
          <div className="transition-transform duration-300 ease-out group-hover:scale-125">
            <div className="transition-opacity duration-200 motion-safe:group-hover:opacity-0">
              {card.icon}
            </div>
          </div>

          {/* Paper bird */}
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#078bd3"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="pointer-events-none absolute opacity-0 motion-safe:group-hover:animate-[friday-paper-bird_0.9s_ease-out_forwards]"
          >
            <path d="M3 11.5 21 3l-7.5 18-3.5-7-7-2.5Z" />
            <path d="m10 14 4-4" />
            <path d="m10 14 4 7" />
          </svg>
        </>
      ) : null}

      {/* =================================================
          AI
         ================================================= */}
      {card.label === "AI" ? (
        <div className="transition-transform duration-300 ease-out group-hover:scale-125">
          <div className="motion-safe:group-hover:animate-[friday-ai-spark_0.65s_ease-in-out]">
            {card.icon}
          </div>
        </div>
      ) : null}

      {/* =================================================
          SEO
         ================================================= */}
      {card.label === "SEO" ? (
        <div className="transition-transform duration-300 ease-out group-hover:scale-125">
          <div className="motion-safe:group-hover:animate-[friday-seo-zoom_0.65s_ease-out]">
            {card.icon}
          </div>
        </div>
      ) : null}

      {/* =================================================
          AUTOMATION
         ================================================= */}
      {card.label === "Automation" ? (
        <div className="transition-transform duration-300 ease-out group-hover:scale-125">
          <div className="motion-safe:group-hover:animate-[friday-automation-spin_0.8s_ease-in-out]">
            {card.icon}
          </div>
        </div>
      ) : null}
    </div>

    {/* Card text */}
    <div>
      <div className="text-[13px] font-semibold text-ink">
        {card.label}
      </div>

      <div className="text-[11.5px] text-ink/50">
        {card.sub}
      </div>
    </div>
  </Link>
</motion.div>

);
}
