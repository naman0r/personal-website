"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineClose,
} from "react-icons/ai";
import {
  HiOutlineBriefcase,
  HiOutlineMenu,
  HiOutlinePencilAlt,
} from "react-icons/hi";
import { HiOutlineWrench, HiOutlineMinus } from "react-icons/hi2";
import { RiRocketLine } from "react-icons/ri";
import { SiMedium } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";

interface SidebarProps {
  isOpen?: boolean; // mobile drawer open
  onClose?: () => void; // mobile drawer close handler
  initialExpanded?: boolean; // desktop expanded/collapsed
  user?: {
    name?: string;
    title?: string;
    avatarUrl?: string;
  };
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen = true,
  onClose,
  initialExpanded = true,
  user = {
    name: "Naman Rusia",
    title: "Software Engineer",
    avatarUrl: "/profile_pic.jpeg",
  },
}) => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<boolean>(initialExpanded);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // persist expanded state across reloads
  useEffect(() => {
    const saved =
      typeof window !== "undefined" && localStorage.getItem("sidebar:expanded");
    if (saved !== null) setExpanded(saved === "1");
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("sidebar:expanded", expanded ? "1" : "0");
    }
  }, [expanded]);

  const navigationItems = useMemo(
    () => [
      { icon: AiOutlineHome, label: "Home", href: "/" },
      { icon: HiOutlineBriefcase, label: "Experience", href: "/experience" },
      { icon: RiRocketLine, label: "Projects", href: "/projects" },
      { icon: HiOutlinePencilAlt, label: "Blogs", href: "/blogs" },
      { icon: AiOutlineUser, label: "About", href: "/about" },
      { icon: AiOutlineMail, label: "Contact", href: "/contact" },
      { icon: HiOutlineWrench, label: "Tools", href: "/tools" },
    ],
    []
  );

  const socialLinks = useMemo(
    () => [
      {
        icon: AiOutlineTwitter,
        label: "Twitter",
        url: "https://x.com/namanrusia1",
      },
      {
        icon: AiOutlineLinkedin,
        label: "LinkedIn",
        url: "https://linkedin.com/in/namanrusia",
      },
      {
        icon: AiOutlineGithub,
        label: "GitHub",
        url: "https://github.com/naman0r",
      },
      // Example extras (commented until you add)
      // { icon: SiMedium, label: "Medium", url: "https://medium.com/@yourhandle" },
      // { icon: AiOutlineInstagram, label: "Instagram", url: "https://instagram.com/yourhandle" },
    ],
    []
  );

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const RailItem: React.FC<{
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    href: string;
  }> = ({ icon: Icon, label, href }) => {
    const active = isActive(href);
    return (
      <li>
        <Link
          href={href}
          onClick={onClose}
          aria-current={active ? "page" : undefined}
          className={
            `group relative flex items-center rounded-xl text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 ` +
            (expanded ? "gap-3 px-3 py-2.5" : "justify-center px-2 py-3") +
            " " +
            (active
              ? "bg-white text-gray-900 shadow-[inset_0_0_0_1px_rgba(17,24,39,0.08)]"
              : "text-gray-300 hover:text-white hover:bg-white/5")
          }
        >
          <Icon
            className={`shrink-0 transition-all ${
              expanded ? "h-5 w-5" : "h-6 w-6"
            }`}
          />
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.span
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                className="truncate"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>

          {/* Active indicator */}
          {active && (
            <span
              className={`absolute bg-gradient-to-b from-indigo-400 to-sky-400 rounded ${
                expanded
                  ? "left-0 top-1/2 -translate-y-1/2 h-5 w-0.5"
                  : "bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-5"
              }`}
            />
          )}

          {/* Tooltip when collapsed */}
          {!expanded && (
            <span className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 scale-95 opacity-0 rounded-lg bg-gray-900/95 px-3 py-2 text-xs text-white shadow-lg ring-1 ring-white/10 transition-all group-hover:opacity-100 group-hover:scale-100 whitespace-nowrap z-50">
              {label}
            </span>
          )}
        </Link>
      </li>
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[1px]"
            onClick={onClose}
            aria-hidden
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          // Mobile: slide in/out based on isOpen, Desktop: always visible but width changes
          x: isMobile ? (isOpen ? 0 : -320) : 0,
          width: expanded ? 260 : 88,
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 35,
          mass: 0.6,
        }}
        className={`${
          isMobile ? "fixed" : "sticky"
        } inset-y-0 left-0 z-50 flex h-screen flex-col border-r border-white/10 bg-gray-950/90 px-2 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl`}
        style={{
          backgroundImage:
            "radial-gradient(1200px 400px at -10% -10%, rgba(99,102,241,0.12), transparent 40%), radial-gradient(1200px 400px at 110% 110%, rgba(56,189,248,0.12), transparent 40%)",
        }}
        role="navigation"
        aria-label="Primary"
      >
        {/* Mobile close button */}
        {isMobile && (
          <div className="mb-3 flex justify-end px-2">
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 transition-colors"
              aria-label="Close sidebar"
            >
              <AiOutlineClose className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* Profile */}
        <div className="mb-6 px-2">
          <div
            className={`flex items-center ${
              expanded ? "gap-3" : "justify-center"
            }`}
          >
            <div className="relative group">
              <img
                src={user.avatarUrl}
                alt="Profile avatar"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10 transition-all hover:ring-blue-500/30"
              />
              <span
                className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-gray-950"
                aria-hidden
              />

              {/* Hover to expand trigger for desktop */}
              {!isMobile && !expanded && (
                <button
                  onClick={() => setExpanded(true)}
                  className="absolute inset-0 rounded-full bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
                  aria-label="Expand sidebar"
                >
                  <span className="text-white text-xs">→</span>
                </button>
              )}
            </div>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  className="flex-1"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-white leading-5">
                        {user.name}
                      </h3>
                      <p className="text-xs text-gray-400">{user.title}</p>
                    </div>
                    {!isMobile && (
                      <button
                        onClick={() => setExpanded(false)}
                        className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Collapse sidebar"
                      >
                        <span className="text-xs">←</span>
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="mt-4 grid grid-cols-2 gap-2"
              >
                <Link
                  href="/contact"
                  className="rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 px-3 py-2 text-center text-xs font-semibold text-white shadow-sm shadow-black/20 outline-none ring-offset-0 transition hover:opacity-95 focus-visible:ring-2 focus-visible:ring-indigo-400/70"
                >
                  Contact
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs font-medium text-gray-200 outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-indigo-400/70"
                >
                  Resume
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <nav className="mt-1 flex-1 overflow-y-auto px-1">
          <ul className="flex flex-col gap-1">
            {navigationItems.map((n) => (
              <RailItem
                key={n.href}
                icon={n.icon}
                label={n.label}
                href={n.href}
              />
            ))}
          </ul>
        </nav>

        {/* Connect Section */}
        <div className="mt-auto w-full px-2 pb-3 pt-3">
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.h4
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                className="mb-3 px-1 text-xs font-semibold uppercase tracking-wide text-gray-300"
              >
                Connect
              </motion.h4>
            )}
          </AnimatePresence>

          <div className={`${expanded ? "px-1" : "px-0"}`}>
            {expanded ? (
              // Expanded: horizontal layout with labels
              <div className="flex justify-start gap-2">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={s.label}
                      className="group relative inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            ) : (
              // Collapsed: vertical stack
              <div className="flex flex-col items-center gap-3">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={s.label}
                      className="group relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:text-white hover:bg-white/10 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
                    >
                      <Icon className="h-4 w-4" />
                      {/* Tooltip when collapsed */}
                      <span className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 scale-95 whitespace-nowrap rounded-lg bg-gray-900/95 px-3 py-2 text-xs text-white opacity-0 shadow-lg ring-1 ring-white/10 transition-all group-hover:scale-100 group-hover:opacity-100 z-50">
                        {s.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className="mt-4 rounded-xl border border-white/10 bg-white/5 p-2 text-center text-[10px] text-gray-400"
              >
                © {new Date().getFullYear()} {user.name}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.aside>
    </>
  );
};

// Mobile Header Component
export const MobileHeader: React.FC<{
  onMenuClick: () => void;
  title?: string;
}> = ({ onMenuClick, title = "Portfolio" }) => {
  return (
    <div
      className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-gray-950/90 px-4 py-3 backdrop-blur-xl lg:hidden"
      style={{
        backgroundImage:
          "radial-gradient(600px 200px at -10% -10%, rgba(99,102,241,0.12), transparent 40%), radial-gradient(600px 200px at 110% 110%, rgba(56,189,248,0.12), transparent 40%)",
      }}
    >
      <h1 className="text-sm font-semibold text-white">{title}</h1>
      <button
        onClick={onMenuClick}
        className="inline-flex items-center justify-center rounded-lg p-2 text-gray-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
        aria-label="Open menu"
      >
        <HiOutlineMenu className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Sidebar;
