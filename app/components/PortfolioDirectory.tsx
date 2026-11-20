"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  portfolioCategories,
  type PortfolioCompany,
} from "../../data/portfolio";
import MilestoneBadge from "./MilestoneBadge";

function CompanyTile({
  company,
  index,
}: {
  company: PortfolioCompany;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], [32, 0, 0, -16]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [index % 2 ? 12 : -12, 0, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.75, 1],
    [0.94, 1, 1, 0.98],
  );
  const glow = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [0, 0.8, 0.2, 0],
  );
  return (
    <div className="company-slot" ref={ref}>
      <motion.article
        className={`company-tile${company.milestone ? ` company-has-${company.milestone.kind}` : ""}`}
        style={reduced ? undefined : { x, y, scale }}
      >
        <motion.div
          className="company-halo"
          aria-hidden="true"
          style={{ opacity: reduced ? 0 : glow }}
        />
        <div className="company-logo">
          {company.logo ? (
            <Image
              src={company.logo}
              alt=""
              width={100}
              height={100}
              sizes="100px"
            />
          ) : (
            <span aria-hidden="true">
              {company.name
                .split(" ")
                .map((word) => word[0])
                .slice(0, 2)
                .join("")}
            </span>
          )}
        </div>
        <div className="company-name">
          <h4>{company.name}</h4>
          <p>{company.category}</p>
        </div>
        {company.milestone && (
          <MilestoneBadge
            milestone={company.milestone}
            company={company.name}
          />
        )}
      </motion.article>
    </div>
  );
}

function PortfolioOutro() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-35, 35]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  return (
    <div className="portfolio-outro" ref={ref}>
      <p className="eyebrow">Invest. Build. Repeat.</p>
      <motion.div style={reduced ? undefined : { x }}>
        <span>
          Curiosity
          <br />
          <em>compounds.</em>
        </span>
        <motion.span
          className="outro-star"
          aria-hidden="true"
          style={reduced ? undefined : { rotate }}
        >
          ✳
        </motion.span>
      </motion.div>
    </div>
  );
}

export default function PortfolioDirectory({
  companies,
}: {
  companies: PortfolioCompany[];
}) {
  const [category, setCategory] = useState("All");
  const filtered = companies.filter((company) => {
    if (category === "All") return true;
    if (category === "IPOs & acquisitions")
      return company.milestone && company.milestone.kind !== "announced";
    if (category === "Announced deals")
      return company.milestone?.kind === "announced";
    return company.category === category;
  });
  return (
    <div className="portfolio-directory">
      <div className="directory-heading">
        <h3>And in good company.</h3>
        <p>The wider portfolio.</p>
      </div>
      <div
        className="portfolio-filters"
        role="group"
        aria-label="Filter portfolio by sector or milestone"
      >
        {[
          "All",
          "IPOs & acquisitions",
          "Announced deals",
          ...portfolioCategories,
        ].map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="portfolio-count" role="status" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "company" : "companies"}
        {category !== "All" ? ` · ${category}` : " across the wider portfolio"}
      </p>
      <div className="company-grid">
        {filtered.map((company, index) => (
          <CompanyTile key={company.name} company={company} index={index} />
        ))}
      </div>
      <PortfolioOutro />
    </div>
  );
}
