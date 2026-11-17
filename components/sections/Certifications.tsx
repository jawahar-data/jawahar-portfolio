"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, Building2, CheckCircle2 } from "lucide-react";
import { certifications } from "@/data/certifications";
import SectionHeader from "@/components/ui/SectionHeader";

const DISPLAY_IDS = [
  "cs50-sql",
  "google-cloud-da",
  "ibm-python-de",
  "ibm-python-ds",
  "aws-cloud-practitioner",
  "ibm-intro-de",
  "nptel-computer-arch",
  "mongodb-basics",
  "eduskills-da-internship",
];

const issuerLogos: Record<string, string> = {
  "Harvard University": "https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_logo.svg",
  "Google": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
  "IBM": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "Amazon Web Services (AWS)": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  "EduSkills Foundation®": "https://www.google.com/s2/favicons?domain=eduskillsfoundation.org&sz=128",
};

export default function Certifications() {
  const displayed = DISPLAY_IDS
    .map((id) => certifications.find((c) => c.id === id))
    .filter(Boolean) as typeof certifications;

  return (
    <section
      id="certifications"
      className="section-padding border-t border-[var(--border)] scroll-mt-20"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="container-xl">
        <SectionHeader
          label="Verified Credentials"
          title="Certifications &amp; Training"
          subtitle="Rigorous coursework in database systems, cloud analytics, and distributed data architectures."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-6">
          {displayed.map((cert, i) => {
            const logo = issuerLogos[cert.issuer];

            return (
              <motion.div
                key={cert.id}
                className="pro-card p-4 sm:p-5 flex flex-col justify-between bg-[var(--bg-card)]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-30px" }}
                transition={{ delay: i * 0.03, duration: 0.25 }}
              >
                <div>
                  <div className="flex items-start justify-between gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center p-1 border border-[var(--border)] shrink-0 shadow-2xs">
                      {logo ? (
                        <img src={logo} alt={cert.issuer} className="w-5 h-5 object-contain" />
                      ) : (
                        <Award size={16} className="text-slate-700" />
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-1">
                      <Calendar size={10} />
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="font-bold text-xs sm:text-sm text-[var(--text-primary)] leading-snug mb-1">
                    {cert.name}
                  </h3>

                  <div className="flex items-center gap-1 text-[11px] text-[var(--text-muted)] mb-2">
                    <Building2 size={11} className="shrink-0" />
                    <span>{cert.issuer}</span>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-[var(--border)] mt-2 flex items-center justify-between">
                  {cert.certificateId ? (
                    <span className="text-[10px] font-mono text-[var(--text-muted)] truncate max-w-[190px]" title={cert.certificateId}>
                      ID: {cert.certificateId}
                    </span>
                  ) : (
                    <span className="text-[10px] text-[var(--text-muted)] flex items-center gap-1">
                      <CheckCircle2 size={10} className="text-slate-600 dark:text-slate-400" />
                      Verified
                    </span>
                  )}

                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[var(--text-primary)] hover:underline flex items-center gap-1"
                    >
                      Verify
                      <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
