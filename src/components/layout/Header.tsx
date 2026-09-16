import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { EASE, staggerContainer } from "../../lib/motion";
import fridayMark from "../../assets/Header.png";

interface NavLinkItem {
  label: string;
  href: string;
}

interface NavGroup {
  heading?: string;
  headingHref?: string;
  items: NavLinkItem[];
}

type NavEntry =
  | {
      type: "link";
      label: string;
      href: string;
    }
  | {
      type: "dropdown";
      label: string;
      groups: NavGroup[];
    };

const NAV: NavEntry[] = [
  {
    type: "link",
    label: "Home",
    href: "/",
  },
  {
    type: "dropdown",
    label: "Solutions",
    groups: [
      {
        items: [
          { label: "CRM & Customer Management", href: "/crm" },
          { label: "Business Automation", href: "/automation" },
          { label: "Customer Communication", href: "/communication" },
          { label: "AI-Powered Business", href: "/friday-ai" },
          { label: "Digital Transformation", href: "/digital-transformation" },
        ],
      },
    ],
  },
  {
    type: "dropdown",
    label: "Services",
    groups: [
      {
        items: [
          { label: "Automation", href: "/automation" },
          { label: "Communication", href: "/communication" },
          { label: "Friday AI", href: "/friday-ai" },
        ],
      },
      {
        heading: "Digital Marketing",
        items: [
          { label: "Branding", href: "/digital-marketing/branding" },
          {
            label: "Website Development",
            href: "/digital-marketing/website-development",
          },
          { label: "SEO", href: "/digital-marketing/seo" },
        ],
      },
    ],
  },
  {
    type: "link",
    label: "Industries",
    href: "/industries",
  },
  {
    type: "dropdown",
    label: "About Us",
    groups: [
      {
        items: [
          { label: "Our Team", href: "/about/our-team" },
          { label: "Careers", href: "/about/careers" },
          { label: "Vision", href: "/vision" },
        ],
      },
    ],
  },
  {
    type: "link",
    label: "Contact us",
    href: "/contact",
  },
];

const logoVariants = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: EASE },
  },
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 10 10"
      fill="none"
      className="transition-transform duration-200"
      style={{ transform: open ? "rotate(180deg)" : "none" }}
      aria-hidden="true"
    >
      <path
        d="M2 3.5L5 6.5L8 3.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9s-1.2 6.5-3.5 9c-2.3-2.5-3.5-5.5-3.5-9S9.7 5.5 12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const { scrollY } = useScroll();

const topOffset = useTransform(scrollY, [0, 1], [18, 0]);

const headerWidth = useTransform(
  scrollY,
  [0, 1],
  ["calc(100% - 32px)", "100%"]
);

const headerGap = useTransform(scrollY, [0, 1], [16, 0]);

const leftRadius = useTransform(scrollY, [0, 1], [16, 0]);
const rightRadius = useTransform(scrollY, [0, 1], [16, 0]);
const headerBgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
const pillShadow = useTransform(
  scrollY,
  [0, 80],
  ["0 12px 35px rgba(7,26,51,0.08)", "0 0px 0px rgba(7,26,51,0)"]
);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);
  const [openLabel, setOpenLabel] = useState<string | null>(null);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    setOpenLabel(null);
    setMenuOpen(false);
    setMobileOpenGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenLabel(label);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenLabel(null), 150);
  };

  return (
    <>
<motion.header
  className="fixed left-0 right-0 top-0 z-50"
  style={{ paddingTop: topOffset }}
>
  {/* Full-bleed white fill — merges the pill gaps into one solid bar on scroll */}
  <motion.div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10 bg-white"
    style={{ opacity: headerBgOpacity }}
  />

<motion.div
          variants={staggerContainer(0.06, 0.08)}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-[1240px] items-center justify-between gap-20"
        >
          {/* LEFT WHITE NAVIGATION CARD */}
          <motion.div
            variants={logoVariants}
            style={{ borderRadius: leftRadius, boxShadow: pillShadow }}
            className="flex min-h-[68px] flex-1 items-center gap-7 bg-white px-5 sm:px-6 lg:gap-8"
          >
            <Link
              to="/"
              className="flex shrink-0 items-center"
              aria-label="Friday Home"
            >
              <img
                src={fridayMark}
                alt="Friday"
                className="h-auto w-[120px] sm:w-[125px]"
                draggable={false}
              />
            </Link>

            <nav
              className="hidden min-w-0 flex-1 items-center justify-center gap-5 text-[14px] font-medium text-[#172b4d] lg:flex xl:gap-7"
              aria-label="Primary navigation"
              onMouseLeave={scheduleClose}
            >
              {NAV.map((entry) => {
                if (entry.type === "link") {
                  return (
                    <motion.div
                      key={entry.label}
                      variants={navItemVariants}
                      className="shrink-0"
                    >
                      <Link
                        to={entry.href}
                        className="whitespace-nowrap transition-colors hover:text-[#078bd3]"
                      >
                        {entry.label}
                      </Link>
                    </motion.div>
                  );
                }

                const isOpen = openLabel === entry.label;

                return (
                  <motion.div
                    key={entry.label}
                    variants={navItemVariants}
                    className="relative shrink-0"
                    onMouseEnter={() => openMenu(entry.label)}
                  >
                    <button
                      type="button"
                      className="flex items-center gap-1 whitespace-nowrap text-[#172b4d] transition-colors hover:text-[#078bd3]"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenLabel(isOpen ? null : entry.label)
                      }
                    >
                      {entry.label}
                      <ChevronIcon open={isOpen} />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.18, ease: EASE }}
                          onMouseEnter={() => openMenu(entry.label)}
                          className="absolute left-1/2 top-full mt-3 w-max -translate-x-1/2 rounded-2xl border border-[#dceaf4] bg-white p-5 shadow-[0_20px_50px_-20px_rgba(7,26,51,0.28)]"
                        >
                          <div className="flex gap-9">
                            {entry.groups.map((group, groupIndex) => (
                              <div
                                key={groupIndex}
                                className="min-w-[190px]"
                              >
                                {group.heading && (
                                  <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-[#078bd3]">
                                    {group.heading}
                                  </div>
                                )}

                                <ul className="space-y-2.5">
                                  {group.items.map((item) => (
                                    <li key={item.href}>
                                      <Link
                                        to={item.href}
                                        className="block text-[14px] leading-snug text-[#52657f] transition-colors hover:text-[#078bd3]"
                                      >
                                        {item.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              variants={ctaVariants}
              type="button"
              className="ml-auto flex flex-col gap-[5px] lg:hidden"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span
                className="h-[2px] w-6 bg-[#0b2748] transition-transform duration-300"
                style={{
                  transform: menuOpen
                    ? "rotate(45deg) translateY(6px)"
                    : "none",
                }}
              />
              <span
                className="h-[2px] w-6 bg-[#0b2748] transition-opacity duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="h-[2px] w-6 bg-[#0b2748] transition-transform duration-300"
                style={{
                  transform: menuOpen
                    ? "rotate(-45deg) translateY(-6px)"
                    : "none",
                }}
              />
            </motion.button>
          </motion.div>

          {/* RIGHT WHITE CONTACT CARD */}
          <motion.div
            variants={ctaVariants}
            style={{ borderRadius: rightRadius, boxShadow: pillShadow }}
            className="hidden min-h-[68px] shrink-0 items-center gap-5 bg-white px-5 lg:flex"
          >
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 whitespace-nowrap text-[13.5px] font-medium text-[#172b4d] transition-colors hover:text-[#078bd3]"
            >
              <PhoneIcon />
              <span>+91 99999 99999</span>
            </a>

            <span className="h-5 w-px bg-[#dce4ec]" aria-hidden="true" />

            <button
              type="button"
              className="flex items-center gap-2 whitespace-nowrap text-[13.5px] font-medium text-[#172b4d] transition-colors hover:text-[#078bd3]"
              aria-label="Language: English"
            >
              <GlobeIcon />
              <span>Eng</span>
            </button>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-[#0a84ff] px-4 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-[#078bd3]"
            >
              Let&apos;s Talk
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                ↗
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.header>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-x-4 top-[92px] z-40 max-h-[calc(100vh-108px)] overflow-y-auto rounded-2xl bg-white p-5 shadow-[0_20px_50px_rgba(7,26,51,0.18)] lg:hidden"
          >
            {NAV.map((entry) => {
              if (entry.type === "link") {
                return (
                  <Link
                    key={entry.label}
                    to={entry.href}
                    className="block border-b border-[#e5edf4] py-3.5 text-[17px] font-medium text-[#172b4d]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {entry.label}
                  </Link>
                );
              }

              const expanded = mobileOpenGroup === entry.label;

              return (
                <div
                  key={entry.label}
                  className="border-b border-[#e5edf4]"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3.5 text-[17px] font-medium text-[#172b4d]"
                    aria-expanded={expanded}
                    onClick={() =>
                      setMobileOpenGroup(
                        expanded ? null : entry.label
                      )
                    }
                  >
                    {entry.label}
                    <ChevronIcon open={expanded} />
                  </button>

                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: EASE }}
                        className="overflow-hidden"
                      >
                        {entry.groups.map((group, groupIndex) => (
                          <div
                            key={groupIndex}
                            className="pb-2 pl-2"
                          >
                            {group.heading && (
                              <div className="mb-1 mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#078bd3]">
                                {group.heading}
                              </div>
                            )}

                            {group.items.map((item) => (
                              <Link
                                key={item.href}
                                to={item.href}
                                className="block py-2 text-[15px] text-[#52657f] hover:text-[#078bd3]"
                                onClick={() => setMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            <div className="mt-5 space-y-4">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 text-[15px] font-medium text-[#172b4d]"
              >
                <PhoneIcon />
                +91 99999 99999
              </a>

              <div className="flex items-center gap-2 text-[15px] font-medium text-[#172b4d]">
                <GlobeIcon />
                Eng
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#0a84ff] px-5 py-3 text-[15px] font-semibold text-white"
                onClick={() => setMenuOpen(false)}
              >
                Let&apos;s Talk ↗
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
