import { ArrowUpRight, Check, Clock3, TrendingUp } from "lucide-react";
import type { PortfolioMilestone } from "../../data/portfolio";

export default function MilestoneBadge({
  milestone,
  company,
}: {
  milestone: PortfolioMilestone;
  company: string;
}) {
  const Icon =
    milestone.kind === "ipo"
      ? TrendingUp
      : milestone.kind === "acquired"
        ? Check
        : Clock3;
  return (
    <a
      className={`milestone-badge milestone-${milestone.kind}`}
      href={milestone.source}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company}: ${milestone.label}. ${milestone.detail}. Read announcement`}
    >
      <Icon size={22} aria-hidden="true" />
      <div>
        <strong>{milestone.label}</strong>
        <span>{milestone.detail}</span>
      </div>
      <ArrowUpRight
        className="milestone-source-icon"
        size={16}
        aria-hidden="true"
      />
    </a>
  );
}
