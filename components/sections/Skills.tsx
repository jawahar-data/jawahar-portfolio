"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layers, Cpu, Wrench, BookOpen, Cloud, Server } from "lucide-react";
import { skillGroups } from "@/data/skills";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ReactNode> = {
  database: <Database size={16} />,
  cloud: <Cloud size={16} />,
  code: <Code2 size={16} />,
  cpu: <Cpu size={16} />,
  tool: <Wrench size={16} />,
  book: <BookOpen size={16} />,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding border-t border-[var(--border)] scroll-mt-20"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="container-xl">
        <SectionHeader
          label="Technical Profile"
          title="Skills &amp; Technologies"
          subtitle="Distributed stream processing, cloud data warehouses, backend APIs, and pipeline orchestration."
        />

        {/* Perfectly Balanced 3x2 Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5 mt-6">
          {skillGroups.map((group, gi) => {
            const isCore = group.category === "Data Engineering";
            return (
              <motion.div
                key={group.category}
                className={`pro-card p-5 flex flex-col justify-between h-full bg-[var(--bg-card)] ${
                  isCore ? "ring-1 ring-[var(--border-hover)]" : ""
                }`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-30px" }}
                transition={{ delay: gi * 0.04, duration: 0.3 }}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[var(--border)]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--bg-subtle)] text-[var(--text-primary)] border border-[var(--border)] shadow-2xs shrink-0">
                        {iconMap[group.icon] || <Server size={16} />}
                      </div>
                      <h3 className="font-bold text-sm text-[var(--text-primary)]">
                        {group.category}
                      </h3>
                    </div>

                    {group.badge && (
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--text-muted)] uppercase tracking-wider">
                        {group.badge}
                      </span>
                    )}
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`tag-chip ${
                          isCore ? "font-semibold text-[var(--text-primary)] bg-[var(--bg-subtle)]" : ""
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
