"use client";

import React from "react";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Target,
  Database,
  Mail,
  Award,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";
import SectionHeader from "@/components/ui/SectionHeader";

const focusAreas = [
  "ETL & Data Pipelines",
  "Real-Time Stream Ingestion",
  "Cloud Lakehouses (S3 & Athena)",
  "Data Quality & Schema Validation",
  "Distributed PySpark Batch Jobs",
  "FastAPI Serving Layers",
];

export default function About() {
  const { education, summary } = profile;

  return (
    <section id="about" className="section-padding border-t border-[var(--border)] scroll-mt-20" style={{ background: "var(--bg-surface)" }}>
      <div className="container-xl">
        <SectionHeader
          label="Background &amp; Focus"
          title="About Me"
          subtitle="Data engineering student driven by reliability, clean pipeline architecture, and scalable data systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
          {/* LEFT: Story & Focus (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="pro-card p-6 sm:p-7 flex flex-col gap-5 bg-[var(--bg-card)]">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                  Engineering Philosophy
                </span>
                <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                  {summary}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                  Core Areas of Focus
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {focusAreas.map((area) => (
                    <span key={area} className="tag-chip font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                  Languages
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {profile.languages.map((l) => (
                    <div
                      key={l.language}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs border border-[var(--border)] bg-[var(--bg-subtle)]"
                    >
                      <span className="font-semibold text-[var(--text-primary)]">
                        {l.language}
                      </span>
                      <span className="text-[var(--text-muted)]">
                        ({l.level})
                      </span>
                      {l.note && (
                        <span className="text-[var(--text-muted)] font-mono text-[10px]">
                          · {l.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Education & Profile Card (2 cols) */}
          <div className="lg:col-span-2">
            <div className="pro-card p-6 sm:p-7 flex flex-col gap-5 sticky top-24 bg-[var(--bg-card)]">
              <div className="flex items-center gap-3 pb-4 border-b border-[var(--border)]">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] shadow-xs">
                  JR
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[var(--text-primary)]">
                    {profile.name}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    {profile.headline}
                  </p>
                </div>
              </div>

              {/* Education List */}
              <div className="flex flex-col gap-3">
                {[
                  { icon: <GraduationCap size={14} />, label: "Degree", value: education.degree },
                  { icon: <Target size={14} />, label: "Institution", value: education.college },
                  { icon: <Award size={14} />, label: "Academic Standing", value: `CGPA: ${education.cgpa}` },
                  { icon: <Calendar size={14} />, label: "Timeline", value: education.period },
                  { icon: <MapPin size={14} />, label: "Location", value: profile.location },
                  { icon: <Database size={14} />, label: "Specialization", value: education.focus },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-2.5 text-xs">
                    <div className="w-6 h-6 rounded flex items-center justify-center shrink-0 bg-[var(--bg-subtle)] text-[var(--text-primary)] border border-[var(--border)]">
                      {row.icon}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] tracking-wider">
                        {row.label}
                      </span>
                      <span className="font-medium text-[var(--text-primary)] leading-tight">
                        {row.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-2 pt-3 border-t border-[var(--border)]">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 transition-opacity shadow-xs"
                >
                  <Mail size={13} />
                  {profile.email}
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-[#0A66C2] text-white hover:opacity-90 transition-opacity"
                  >
                    <LinkedInIcon size={13} />
                    LinkedIn
                  </a>

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-medium border border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors"
                  >
                    <GitHubIcon size={13} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
