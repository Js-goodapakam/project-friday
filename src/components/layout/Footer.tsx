import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { EASE, viewportOnce } from "../../lib/motion";
import fridayLogo from "../../assets/Footer.png";

const SOLUTIONS = [
  { label: "CRM", href: "/crm" },
  { label: "Automation", href: "/automation" },
  { label: "Communication", href: "/communication" },
  { label: "AI Solutions", href: "/friday-ai" },
  { label: "Digital Transformation", href: "/digital-transformation" },
];

const SERVICES = [
  { label: "CRM & Business Systems", href: "/crm" },
  { label: "Workflow Automation", href: "/automation" },
  { label: "Business Communication", href: "/communication" },
  { label: "AI Automation", href: "/friday-ai" },
  { label: "System Integration", href: "/digital-transformation" },
];

const RESOURCES = [
  { label: "Blog", href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "Guides", href: "#" },
  { label: "FAQs", href: "#" },
];

const COMPANY = [
  { label: "Our Vision", href: "/vision" },
  { label: "Industries", href: "/industries" },
  { label: "Our Team", href: "/about/our-team" },
  { label: "Careers", href: "/about/careers" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIALS = [
  {
    name: "GitHub",
    href: "#",
    type: "github",
  },
  {
    name: "Facebook",
    href: "#",
    type: "facebook",
  },
  {
    name: "X",
    href: "#",
    type: "x",
  },
  {
    name: "Instagram",
    href: "#",
    type: "instagram",
  },
  {
    name: "LinkedIn",
    href: "#",
    type: "linkedin",
  },
] as const;

function SocialIcon({
  type,
}: {
  type: (typeof SOCIALS)[number]["type"];
}) {
  if (type === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.58 2.35 1.12 2.93.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 7.16c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
        />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M14 8h3V4h-3c-3.31 0-5 1.79-5 5v2H6v4h3v7h4v-7h3.5l.5-4H13V9c0-.66.34-1 1-1Z"
        />
      </svg>
    );
  }

  if (type === "x") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.4L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.8h1.73L8.27 4.08H6.42L17.8 19.8Z"
        />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="17.5"
          cy="6.5"
          r="1.2"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-full w-full"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M5 3.5A2.5 2.5 0 1 0 5 8.5 2.5 2.5 0 0 0 5 3.5ZM3 9h4v12H3V9Zm6 0h3.83v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.96V21H9V9Z"
      />
    </svg>
  );
}

function FooterLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  if (href === "#") {
    return (
      <a
        href="#"
        onClick={(event) => event.preventDefault()}
        className="
          text-[13.5px]
          text-ink/60
          transition-all
          duration-200
          hover:translate-x-0.5
          hover:text-[#078bd3]
        "
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      to={href}
      className="
        text-[13.5px]
        text-ink/60
        transition-all
        duration-200
        hover:translate-x-0.5
        hover:text-[#078bd3]
      "
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, ease: EASE }}
      className="
        relative
        overflow-hidden
        border-t
        border-ink/[0.06]
        bg-gradient-to-br
        from-[#eefaff]
        via-white
        to-[#edfff8]
        px-6
        pb-8
        pt-16
        sm:px-8
        lg:px-10
      "
    >
      {/* =====================================================
          FOOTER CONTENT
          ===================================================== */}

      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-12
          lg:grid-cols-[1.45fr_repeat(4,1fr)]
          lg:gap-10
        "
      >
        {/* ===================================================
            BRAND
            =================================================== */}

        <div>
          <Link
            to="/"
            className="inline-flex items-center"
          >
            <img
              src={fridayLogo}
              alt="Friday"
              className="
                h-auto
                w-[180px]
                object-contain
              "
              draggable={false}
            />
          </Link>

          <p
            className="
              mt-5
              max-w-[270px]
              text-[14px]
              leading-7
              text-ink/60
            "
          >
            Friday connects your CRM, automation, communication,
            and AI into one intelligent system
          </p>

          <div
            className="
              mt-5
              text-[12px]
              font-medium
              tracking-wide
              text-ink/45
            "
          >
            Innovate
            <span className="mx-1.5">•</span>
            Automate
            <span className="mx-1.5">•</span>
            Elevate
          </div>

          {/* =================================================
              SOCIAL MEDIA
              ================================================= */}

          <div className="mt-6 flex items-center gap-2.5">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                title={social.name}
                className="
                  group
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-ink/[0.08]
                  bg-white
                  text-ink/55
                  shadow-[0_5px_18px_-10px_rgba(11,28,51,0.3)]
                  transition-all
                  duration-200
                  ease-out
                  hover:-translate-y-1
                  hover:scale-105
                  hover:border-[#078bd3]/30
                  hover:bg-[#078bd3]
                  hover:text-white
                  hover:shadow-[0_10px_22px_-12px_rgba(7,139,211,0.55)]
                "
              >
                <span
                  className="
                    h-[17px]
                    w-[17px]
                    transition-transform
                    duration-200
                    group-hover:scale-110
                  "
                >
                  <SocialIcon type={social.type} />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* ===================================================
            SOLUTIONS
            =================================================== */}

        <div className="pt-8">
          <h3
            className="
              text-[13px]
              font-semibold
              uppercase
              tracking-[0.08em]
              text-ink
            "
          >
            Solutions
          </h3>

          <div className="mt-5 flex flex-col gap-3.5">
            {SOLUTIONS.map((item) => (
              <FooterLink
                key={item.label}
                {...item}
              />
            ))}
          </div>
        </div>

        {/* ===================================================
            SERVICES
            =================================================== */}

        <div className="pt-8">
          <h3
            className="
              text-[13px]
              font-semibold
              uppercase
              tracking-[0.08em]
              text-ink
            "
          >
            Services
          </h3>

          <div className="mt-5 flex flex-col gap-3.5">
            {SERVICES.map((item) => (
              <FooterLink
                key={item.label}
                {...item}
              />
            ))}
          </div>
        </div>

        {/* ===================================================
            RESOURCES
            =================================================== */}

        <div className="pt-8">
          <h3
            className="
              text-[13px]
              font-semibold
              uppercase
              tracking-[0.08em]
              text-ink
            "
          >
            Resources
          </h3>

          <div className="mt-5 flex flex-col gap-3.5">
            {RESOURCES.map((item) => (
              <FooterLink
                key={item.label}
                {...item}
              />
            ))}
          </div>
        </div>

        {/* ===================================================
            COMPANY
            =================================================== */}

        <div className="pt-8">
          <h3
            className="
              text-[13px]
              font-semibold
              uppercase
              tracking-[0.08em]
              text-ink
            "
          >
            Company
          </h3>

          <div className="mt-5 flex flex-col gap-3.5">
            {COMPANY.map((item) => (
              <FooterLink
                key={item.label}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
          ===================================================== */}

      <div
        className="
          mx-auto
          mt-14
          flex
          max-w-7xl
          flex-col-reverse
          items-center
          justify-between
          gap-4
          border-t
          border-ink/[0.08]
          pt-5
          sm:flex-row
        "
      >
        <span className="text-[12px] text-ink/45">
          © {year} Friday Innovation Private Limited.
          All rights reserved.
        </span>

        <div
          className="
            flex
            items-center
            gap-4
            text-[12px]
            text-ink/45
          "
        >
          <Link
            to="/privacy-policy"
            className="transition-colors hover:text-ink"
          >
            Privacy Policy
          </Link>

          <span className="text-ink/20">|</span>

          <Link
            to="/terms-and-conditions"
            className="transition-colors hover:text-ink"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
