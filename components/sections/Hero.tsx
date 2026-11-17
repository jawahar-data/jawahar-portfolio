"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Database } from "lucide-react";
import { profile } from "@/data/profile";
import Image from "next/image";

const stats = [
  { label: "Data Lake Scale", value: "99,440+", sub: "Olist Orders in AWS S3" },
  { label: "Pipeline Quality", value: "34 / 34", sub: "Great Expectations Passed" },
  { label: "End-to-End Speed", value: "< 2 min", sub: "Kafka to Neon Warehouse" },
  { label: "NASA Space Apps", value: "FIRE-FUSE", sub: "H3 Spatiotemporal Method" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 px-4"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Ambient Top Glow & Subtle Dot Grid */}
      <div className="ambient-hero-glow" />
      <div className="absolute inset-0 bg-grid-mesh opacity-75 pointer-events-none" />

      <div className="container-xl relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border border-[var(--border)] bg-[var(--badge-bg)] text-[var(--text-secondary)] shadow-2xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
          </span>
          <span className="font-semibold text-[var(--text-primary)]">{profile.statusBadge}</span>
        </motion.div>

        {/* Profile Avatar — Enhanced & Prominent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="relative mb-6"
        >
          <div className="relative p-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)] shadow-lg">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden bg-[var(--bg-surface)]">
              <Image
                src="/images/profile-v4.png"
                alt={profile.name}
                fill
                sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 192px"
                className="object-cover object-[center_28%]"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-3 text-[var(--text-primary)]"
        >
          {profile.name}
        </motion.h1>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl font-medium tracking-tight mb-4 max-w-2xl text-[var(--text-secondary)]"
        >
          {profile.headline} — <span className="text-[var(--text-primary)] font-semibold">{profile.subheadline}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="text-xs sm:text-sm max-w-2xl text-balance leading-relaxed mb-8 text-[var(--text-muted)]"
        >
          Specializing in end-to-end stream ingestion with <span className="font-semibold text-[var(--text-primary)]">Kafka</span>, distributed batch transformation with <span className="font-semibold text-[var(--text-primary)]">PySpark</span>, cloud lakehouse architectures with <span className="font-semibold text-[var(--text-primary)]">AWS S3 &amp; Athena</span>, and spatiotemporal analytics for satellite data.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-5 py-2.5 rounded-lg font-semibold text-xs transition-all shadow-xs cursor-pointer flex items-center gap-2 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90"
          >
            <Database size={15} />
            Explore Projects
          </button>

          <a
            href={profile.resumePath}
            download
            className="px-5 py-2.5 rounded-lg font-medium text-xs border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all cursor-pointer flex items-center gap-2 shadow-2xs"
          >
            <Download size={15} />
            Download ATS Resume
          </a>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-4 py-2.5 rounded-lg font-medium text-xs border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer flex items-center gap-2 shadow-2xs"
          >
            Contact
          </button>
        </motion.div>

        {/* Telemetry Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="pro-card p-4 flex flex-col items-center justify-center text-center bg-[var(--bg-card)]"
            >
              <span className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-[var(--text-primary)]">
                {stat.value}
              </span>
              <span className="text-xs font-semibold mt-1 text-[var(--text-primary)]">
                {stat.label}
              </span>
              <span className="text-[11px] mt-0.5 text-[var(--text-muted)]">
                {stat.sub}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="mt-10 cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
