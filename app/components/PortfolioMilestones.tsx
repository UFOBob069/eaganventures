import Image from "next/image";
import { completedMilestones } from "../../data/portfolio";
import MilestoneBadge from "./MilestoneBadge";

export default function PortfolioMilestones() {
  const listings = completedMilestones.filter(
    (company) => company.milestone?.kind === "ipo",
  ).length;
  return (
    <section
      className="portfolio-milestones"
      aria-labelledby="milestones-heading"
    >
      <div className="milestones-heading">
        <h3 id="milestones-heading">IPOs & acquisitions.</h3>
        <p>
          {listings} public listings <span aria-hidden="true">/</span>{" "}
          {completedMilestones.length - listings} acquisitions
        </p>
      </div>
      <div className="milestone-grid">
        {completedMilestones.map((company) => (
          <article className="milestone-highlight" key={company.name}>
            <div className="milestone-company">
              {company.logo && (
                <Image src={company.logo} alt="" width={44} height={44} />
              )}
              <h4>{company.name}</h4>
            </div>
            {company.milestone && (
              <MilestoneBadge
                milestone={company.milestone}
                company={company.name}
              />
            )}
          </article>
        ))}
      </div>
      <p className="milestone-note">
        Company milestones · Updated November 19, 2026 · Select a status to read
        the announcement.
      </p>
    </section>
  );
}
