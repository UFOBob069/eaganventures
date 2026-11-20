"use client";
import Image from "next/image";
import { useState } from "react";
import {
  portfolioCategories,
  type PortfolioCompany,
} from "../../data/portfolio";
export default function PortfolioDirectory({
  companies,
}: {
  companies: PortfolioCompany[];
}) {
  const [category, setCategory] = useState("All");
  const filtered =
    category === "All"
      ? companies
      : companies.filter((company) => company.category === category);
  return (
    <div className="portfolio-directory">
      <div className="directory-heading">
        <h3>And in good company.</h3>
        <p>The wider portfolio.</p>
      </div>
      <div
        className="portfolio-filters"
        role="group"
        aria-label="Filter portfolio by sector"
      >
        {["All", ...portfolioCategories].map((item) => (
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
        {category !== "All" ? ` in ${category}` : " across the wider portfolio"}
      </p>
      <div className="company-grid">
        {filtered.map((company) => (
          <article key={company.name} className="company-tile">
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
              {company.badge && (
                <span className="status-badge">{company.badge}</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
