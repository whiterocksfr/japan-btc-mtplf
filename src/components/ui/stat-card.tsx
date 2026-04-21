import { clsx } from "clsx";

interface StatCardProps {
  label: string;
  value: string;
  sublabel?: string;
  accent?: boolean;
}

export function StatCard({ label, value, sublabel, accent }: StatCardProps) {
  return (
    <div className="border-l-2 border-ink-200 pl-4 py-1">
      <div className="text-[0.6875rem] font-semibold uppercase tracking-wider text-ink-400">
        {label}
      </div>
      <div
        className={clsx(
          "mt-1 font-mono text-2xl font-bold tabular-nums",
          accent ? "text-accent" : "text-ink-900"
        )}
      >
        {value}
      </div>
      {sublabel && (
        <div className="mt-0.5 text-xs text-ink-400">{sublabel}</div>
      )}
    </div>
  );
}
