"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection(sections[sections.length - 1]);
        return;
      }

      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
        style={{
          background: scrolled ? "var(--header-bg)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="container-xl flex items-center justify-between px-5 py-3.5">
          {/* Logo / Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group cursor-pointer text-left"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] tracking-wider shadow-xs">
              JR
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-[var(--text-primary)]">
                {profile.name}
              </span>
              <span className="text-[11px] font-mono text-[var(--text-muted)] leading-none">
                Data Engineer
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                      isActive
                        ? "text-[var(--text-primary)] bg-[var(--badge-bg)] font-semibold shadow-2xs border border-[var(--border)]"
                        : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors cursor-pointer shadow-2xs"
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              aria-label="Toggle color theme"
            >
              {theme === "light" ? (
                <Moon size={16} className="text-slate-700" />
              ) : (
                <Sun size={16} className="text-amber-400" />
              )}
            </button>

            {/* Quick Resume Link (Desktop) */}
            <a
              href={profile.resumePath}
              download
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 transition-opacity shadow-xs"
            >
              <Download size={13} />
              Resume
            </a>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)]"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 350, damping: 32 }}
            className="fixed inset-y-0 right-0 z-50 w-72 md:hidden flex flex-col pt-20 pb-8 px-6 shadow-2xl bg-[var(--bg-card)] border-l border-[var(--border)]"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                Navigation
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                <X size={18} />
              </button>
            </div>

            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-[var(--badge-bg)] text-[var(--text-primary)] font-semibold border border-[var(--border)]"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto pt-6 border-t border-[var(--border)] flex flex-col gap-2">
              <a
                href={profile.resumePath}
                download
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] shadow-xs"
              >
                <Download size={14} />
                Download ATS Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-black/40 backdrop-blur-2xs"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
