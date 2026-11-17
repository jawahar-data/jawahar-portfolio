"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Download, Check, Copy } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";
import SectionHeader from "@/components/ui/SectionHeader";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="section-padding border-t border-[var(--border)] scroll-mt-20 flex flex-col justify-center items-center min-h-[48vh] w-full"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="container-xl w-full flex flex-col items-center justify-center">
        <div className="max-w-xl w-full flex flex-col items-center text-center">
          <SectionHeader
            label="Get In Touch"
            title="Open to Opportunities"
            subtitle="Actively seeking Data Engineering internship roles where I can contribute to stream processing, batch pipelines, and scalable cloud architectures."
            centered
          />

          <motion.div
            className="flex flex-col w-full gap-2.5 mt-2 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.35 }}
          >
            {/* Primary Email CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
              <a
                href={`mailto:${profile.email}`}
                className="flex-1 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-xs sm:text-sm bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 transition-opacity shadow-xs"
              >
                <Mail size={15} />
                <span>{profile.email}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-4 py-3 rounded-lg text-xs font-medium border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                title="Copy email to clipboard"
              >
                {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                <span>{copied ? "Copied" : "Copy Email"}</span>
              </button>
            </div>

            {/* Secondary Action Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg font-medium text-xs bg-[#0A66C2] text-white hover:opacity-90 transition-opacity"
              >
                <LinkedInIcon size={13} />
                LinkedIn
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg font-medium text-xs border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors shadow-2xs"
              >
                <GitHubIcon size={13} />
                GitHub
              </a>

              <a
                href={profile.resumePath}
                download
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg font-semibold text-xs border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors shadow-2xs"
              >
                <Download size={13} />
                ATS Resume
              </a>
            </div>
          </motion.div>

          {/* Location note */}
          <div className="flex flex-col items-center gap-1 text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-1">
              <MapPin size={12} />
              <span>{profile.location} · Open to remote, hybrid &amp; on-site internships</span>
            </div>
            <p className="text-[11px] text-[var(--text-muted)]">
              ⚡ Typically responds within 24 hours via email or LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
