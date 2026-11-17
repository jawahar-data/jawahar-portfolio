import { ReactNode } from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  children?: ReactNode;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
  children,
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 flex flex-col ${centered ? "items-center text-center" : "items-start"}`}>
      <span className="text-[11px] font-bold tracking-[0.2em] uppercase mb-2 text-[var(--text-muted)]">
        {label}
      </span>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 text-[var(--text-primary)]">
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-sm sm:text-base max-w-2xl leading-relaxed text-[var(--text-secondary)]"
          style={{
            margin: centered ? "0 auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
