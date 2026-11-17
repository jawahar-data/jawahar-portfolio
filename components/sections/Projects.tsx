"use client";

import { useState } from "react";
import { ExternalLink, Play, Layers, AlertCircle, CheckCircle2 } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import { projects, Project } from "@/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";

function FlowMatrixCard({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<"architecture" | "video">("architecture");

  return (
    <div className="pro-card p-6 sm:p-8 flex flex-col gap-6 relative overflow-hidden bg-[var(--bg-card)]">
      {/* Top Meta Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--border)]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="badge-pill">
            {project.badge}
          </span>
          <span className="text-xs px-2.5 py-0.5 rounded-full font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
            {project.statusBadge}
          </span>
        </div>
        <span className="text-xs font-mono text-[var(--text-muted)]">
          {project.period}
        </span>
      </div>

      {/* Title & Tagline */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1 text-[var(--text-primary)]">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-[var(--text-secondary)]">
          {project.tagline}
        </p>
      </div>

      {/* Description Bullets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
        {project.description.map((bullet, idx) => (
          <div key={idx} className="flex items-start gap-2 p-2.5 rounded-md bg-[var(--bg-subtle)] border border-[var(--border)]">
            <CheckCircle2 size={14} className="text-slate-700 dark:text-slate-300 shrink-0 mt-0.5" />
            <span className="text-xs leading-relaxed">{bullet}</span>
          </div>
        ))}
      </div>

      {/* Media Switcher: Architecture Diagram vs Video Walkthrough */}
      <div className="mt-1 flex flex-col gap-2.5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
            System Visualization
          </span>
          <div className="inline-flex rounded-lg p-0.5 bg-[var(--bg-subtle)] border border-[var(--border)]">
            <button
              onClick={() => setActiveTab("architecture")}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "architecture"
                  ? "bg-[var(--bg-card)] text-[var(--text-primary)] font-semibold shadow-2xs border border-[var(--border)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              <Layers size={13} />
              Architecture Diagram
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "video"
                  ? "bg-[var(--bg-card)] text-[var(--text-primary)] font-semibold shadow-2xs border border-[var(--border)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              <Play size={13} />
              Video Walkthrough
            </button>
          </div>
        </div>

        {/* Media Player */}
        {activeTab === "architecture" && project.architectureImage ? (
          <div className="w-full rounded-lg overflow-hidden border border-[var(--border)] bg-black/5 dark:bg-black/40">
            <Image
              src={project.architectureImage}
              alt="FlowMatrix Pipeline Architecture"
              width={1200}
              height={675}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        ) : (
          <div className="video-responsive-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0`}
              title={project.videoTitle || "FlowMatrix Architecture Walkthrough"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>

      {/* Tech Stack */}
      <div>
        <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-bold block mb-2">
          Tech Stack
        </span>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag-chip font-mono">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-[var(--border)]">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-xs bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 transition-opacity shadow-xs"
          >
            <ExternalLink size={13} />
            Live Dashboard
          </a>
        )}

        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium text-xs border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors shadow-2xs"
          >
            <GitHubIcon size={13} />
            View Source Code
          </a>
        )}

        <button
          onClick={() => setActiveTab(activeTab === "architecture" ? "video" : "architecture")}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-medium text-xs border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
        >
          {activeTab === "architecture" ? <Play size={12} /> : <Layers size={12} />}
          {activeTab === "architecture" ? "Watch Walkthrough" : "View Architecture"}
        </button>
      </div>
    </div>
  );
}

function CelestialXCard({ project }: { project: Project }) {
  return (
    <div className="pro-card p-6 sm:p-8 flex flex-col gap-6 relative overflow-hidden bg-[var(--bg-card)]">
      {/* Top Meta Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--border)]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="badge-pill">
            {project.badge}
          </span>
          <span className="text-xs px-2.5 py-0.5 rounded-full font-medium border border-slate-300 dark:border-slate-700 bg-[var(--bg-subtle)] text-[var(--text-primary)]">
            {project.statusBadge}
          </span>
        </div>
        <span className="text-xs font-mono text-[var(--text-muted)]">
          Virudhunagar Local Event · Team of 3
        </span>
      </div>

      {/* Title & Tagline */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1 text-[var(--text-primary)]">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-[var(--text-secondary)]">
          {project.tagline}
        </p>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
        {project.description.map((paragraph, i) => (
          <p key={i} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Required Disclaimer Note */}
      {project.disclaimer && (
        <div className="flex items-start gap-2.5 p-3 rounded-lg border border-amber-400/40 bg-amber-500/8 text-amber-950 dark:text-amber-200 text-xs">
          <AlertCircle size={15} className="shrink-0 mt-0.5 text-amber-700 dark:text-amber-400" />
          <p className="leading-snug">
            <span className="font-semibold">Note: </span>
            {project.disclaimer}
          </p>
        </div>
      )}

      {/* Embedded YouTube Demo Video Player */}
      {project.youtubeId && (
        <div className="flex flex-col gap-2 mt-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
            <Play size={12} />
            Demo Walkthrough
          </span>
          <div className="video-responsive-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0`}
              title={project.videoTitle || "CELESTIAL X Project Demo"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Tech Stack Chips */}
      <div>
        <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-bold block mb-2">
          Stack Tags
        </span>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag-chip font-mono">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-[var(--border)]">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-xs bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 transition-opacity shadow-xs"
          >
            <ExternalLink size={13} />
            Live App (Streamlit)
          </a>
        )}

        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium text-xs border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors shadow-2xs"
          >
            <GitHubIcon size={13} />
            View Source Code
          </a>
        )}
      </div>
    </div>
  );
}

function StandardProjectCard({ project }: { project: Project }) {
  return (
    <div className="pro-card p-5 flex flex-col justify-between gap-4 h-full bg-[var(--bg-card)]">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] px-2 py-0.5 rounded font-medium border border-[var(--border)] text-[var(--text-muted)] bg-[var(--bg-subtle)]">
            {project.badge || project.organization}
          </span>
          <span className="text-[11px] font-mono text-[var(--text-muted)]">
            {project.period}
          </span>
        </div>

        <h4 className="text-base font-bold mb-1.5 text-[var(--text-primary)]">
          {project.title}
        </h4>

        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          {project.shortDescription}
        </p>

        <ul className="flex flex-col gap-1.5 mb-3">
          {project.description.slice(0, 3).map((item, i) => (
            <li key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[var(--text-muted)] mt-1.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="flex flex-wrap gap-1 mb-3 pt-3 border-t border-[var(--border)]">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-[10px] px-2 py-0.5 rounded border border-[var(--border)] text-[var(--text-muted)] bg-[var(--bg-subtle)] font-mono">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={12} />
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors"
            >
              <GitHubIcon size={12} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const flowMatrix = projects.find((p) => p.id === "flow-matrix");
  const celestialX = projects.find((p) => p.id === "celestial-x");
  const otherProjects = projects.filter((p) => p.id !== "flow-matrix" && p.id !== "celestial-x");

  return (
    <section id="projects" className="section-padding border-t border-[var(--border)] scroll-mt-20" style={{ background: "var(--bg-base)" }}>
      <div className="container-xl">
        <SectionHeader
          label="Portfolio Systems"
          title="Featured Projects"
          subtitle="Production data pipelines, spatiotemporal fire-event resolution, and end-to-end architectures."
        />

        <div className="flex flex-col gap-8 mt-6">
          {/* Flagship Project 1: FlowMatrix */}
          {flowMatrix && <FlowMatrixCard project={flowMatrix} />}

          {/* Flagship Project 2: CELESTIAL X (placed right after FlowMatrix) */}
          {celestialX && <CelestialXCard project={celestialX} />}

          {/* Additional Systems Grid */}
          {otherProjects.length > 0 && (
            <div className="mt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                Additional Open Source &amp; Hackathon Projects
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {otherProjects.map((p) => (
                  <StandardProjectCard key={p.id} project={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
