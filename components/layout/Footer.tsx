"use client";

import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-7 px-6 border-t border-[var(--border)]"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="container-xl flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[var(--text-muted)]">
          © {year} {profile.name} · Built with Next.js, TypeScript &amp; Tailwind CSS
        </p>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <Mail size={15} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <GitHubIcon size={15} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--text-muted)] hover:text-[#0A66C2] transition-colors"
          >
            <LinkedInIcon size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
