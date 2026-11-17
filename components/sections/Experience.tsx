"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Award, CheckCircle2, X } from "lucide-react";
import { experiences } from "@/data/experience";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section
      id="experience"
      className="section-padding border-t border-[var(--border)] scroll-mt-20"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="container-xl">
        <SectionHeader
          label="Professional Experience"
          title="Internships &amp; Industry Training"
          subtitle="Structured cloud analytics and AI programmes with Google Cloud, AICTE, and EduSkills."
        />

        <div className="flex flex-col gap-6 mt-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="pro-card p-6 sm:p-7 flex flex-col md:flex-row gap-5 items-start bg-[var(--bg-card)]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
            >
              {/* Logos */}
              <div className="flex md:flex-col items-center gap-2 shrink-0">
                {exp.logos ? (
                  exp.logos.map((logo, idx) => (
                    <div
                      key={idx}
                      className="w-11 h-11 rounded-lg bg-white flex items-center justify-center p-2 border border-[var(--border)] shadow-2xs"
                    >
                      <img src={logo} alt="Company Logo" className="w-6 h-6 object-contain" />
                    </div>
                  ))
                ) : (
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-[var(--bg-subtle)] text-[var(--text-primary)] border border-[var(--border)]">
                    <Briefcase size={18} />
                  </div>
                )}
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    {exp.badge && (
                      <span className="badge-pill font-mono text-[11px]">
                        <Award size={12} />
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-subtle)] px-2.5 py-0.5 rounded border border-[var(--border)]">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-[var(--text-secondary)] mb-0.5">
                  {exp.organization}
                </p>

                {exp.programmeType && (
                  <p className="text-xs text-[var(--text-muted)] italic mb-3">
                    {exp.programmeType}
                  </p>
                )}

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                  {exp.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                      <CheckCircle2 size={13} className="text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Footer with Credential ID */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[var(--border)] mt-auto">
                  {exp.certificateId ? (
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      Credential ID: <span className="text-[var(--text-primary)] font-medium">{exp.certificateId}</span>
                    </span>
                  ) : <div />}

                  {exp.certificateImage && (
                    <button
                      onClick={() => setSelectedCert(exp.certificateImage!)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all cursor-pointer shadow-2xs"
                    >
                      <Award size={13} />
                      View Certificate
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-3.5 border-b border-[var(--border)] bg-[var(--bg-surface)]">
                <span className="text-xs font-semibold text-[var(--text-primary)]">Verified Credential</span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="w-full h-[75vh] bg-white">
                <iframe
                  src={selectedCert}
                  title="Certificate Preview"
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
