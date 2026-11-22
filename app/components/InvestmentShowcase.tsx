"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import type { FeaturedInvestment } from "../../data/portfolio";
import MilestoneBadge from "./MilestoneBadge";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
function InvestmentCard({
  company,
  index,
}: {
  company: FeaturedInvestment;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 20%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.78, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [48, 0]);
  return (
    <article ref={ref} className={`investment-card investment-${index}`}>
      <div className="investment-logo-panel">
        <span className="investment-category">{company.tag}</span>
        <motion.div
          className="investment-logo"
          style={reduceMotion ? undefined : { scale, y }}
        >
          <Image
            src={company.logo}
            alt={`${company.name} logo`}
            width={360}
            height={240}
            sizes="(max-width: 760px) 65vw, 30vw"
          />
        </motion.div>
        <span className="logo-panel-caption">Eagan Ventures / Portfolio</span>
      </div>
      <div className="investment-copy">
        <div className="investment-label">
          <span>Selected investment</span>
        </div>
        {company.milestone && (
          <MilestoneBadge
            milestone={company.milestone}
            company={company.name}
          />
        )}
        <h3>{company.name}</h3>
        <p>{company.desc}</p>
        <a
          className="featured-website"
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore {company.name} <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        <div className="investment-bottom">
          <span>{company.tag}</span>
          <span aria-hidden="true">✳</span>
        </div>
      </div>
    </article>
  );
}
export default function InvestmentShowcase({
  companies,
}: {
  companies: FeaturedInvestment[];
}) {
  return (
    <div className="featured-stack">
      {companies.map((company, index) => (
        <InvestmentCard key={company.name} company={company} index={index} />
      ))}
    </div>
  );
}
