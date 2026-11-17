"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Rocket, Cloud, Calendar } from "lucide-react";
import { achievements } from "@/data/achievements";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ReactNode> = {
  rocket: <Rocket size={18} />,
  trophy: <Trophy size={18} />,
  award: <Award size={18} />,
  cloud: <Cloud size={18} />,
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-padding border-t border-[var(--border)] scroll-mt-20"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="container-xl">
        <SectionHeader
          label="Honors &amp; Hackathons"
          title="Achievements"
          subtitle="Hackathon participation, technical exhibitions, and certified cloud performance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              className="pro-card p-5 flex flex-col justify-between bg-[var(--bg-card)]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-30px" }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded border border-[var(--border)] text-[var(--text-secondary)] bg-[var(--bg-subtle)]">
                    {item.category}
                  </span>
                  {item.date && (
                    <span className="text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-1">
                      <Calendar size={11} />
                      {item.date}
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-[var(--bg-subtle)] text-[var(--text-primary)] border border-[var(--border)] shadow-2xs">
                    {iconMap[item.icon] || <Award size={18} />}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-[var(--text-primary)] leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
