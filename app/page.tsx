import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Globe2,
  Linkedin,
  Mail,
  Sparkles,
  Headphones,
  Radio,
} from "lucide-react";
import {
  featuredInvestments,
  portfolioCompanies,
  projects,
} from "../data/portfolio";
import InvestmentShowcase from "./components/InvestmentShowcase";
import PortfolioDirectory from "./components/PortfolioDirectory";
import ScrollReveal from "./components/ScrollReveal";
import { getLatestPodcast } from "../lib/latest-podcast";

export const revalidate = 3600;

export default async function Home() {
  const latestPodcast = await getLatestPodcast();
  return (
    <>
      <ScrollReveal />
      <main id="main">
        <section className="hero shell" id="top" aria-labelledby="hero-heading">
          <div className="hero-eyebrow">
            <span>DAVID EAGAN / EAGAN VENTURES</span>
            <span className="location">
              <Globe2 size={15} /> Austin, Texas
            </span>
          </div>
          <div className="hero-main">
            <h1 id="hero-heading">
              Curious about
              <br />
              what&apos;s <span>next.</span>
            </h1>
            <div className="orbit-art" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <span className="orbit-core">
                ev<span>✳</span>
              </span>
              <span className="orbit-label">EXPLORING THE FRONTIER</span>
              <span className="orbit-node node-one" />
              <span className="orbit-node node-two" />
            </div>
          </div>
          <div className="hero-bottom">
            <div className="hero-intro">
              <p className="role-line">Operator. Investor. Builder.</p>
              <p>
                I invest in ambitious companies and build things I want to see
                in the world. AI, crypto, marketplaces, and whatever comes next.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#investments">
                  Explore the portfolio <ArrowDown size={19} />
                </a>
                <a className="text-link" href="#about">
                  Meet David <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
            <div className="profile-note">
              <Image
                src="/david.jpg"
                alt="David Eagan"
                width={64}
                height={64}
                priority
              />
              <div>
                <strong>David Eagan</strong>
                <a
                  href="https://x.com/Eagan218"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Eagan218 <ArrowUpRight size={14} />
                </a>
                <p>Previously Sr. Director at Expedia Group / Vrbo.</p>
              </div>
            </div>
          </div>
          <div className="hero-stats">
            <div>
              <strong>
                {featuredInvestments.length + portfolioCompanies.length}
              </strong>
              <span>Investments</span>
            </div>
            <div>
              <strong>10+</strong>
              <span>Products built</span>
            </div>
            <div>
              <strong>40+</strong>
              <span>Countries explored</span>
            </div>
            <a href="#investments" className="scroll-cue">
              Keep exploring <ArrowDown size={20} />
            </a>
          </div>
        </section>
        <section
          id="investments"
          className="section shell"
          aria-labelledby="investments-heading"
        >
          <div className="section-heading" data-animate>
            <div>
              <p className="eyebrow">Conviction meets curiosity</p>
              <h2 id="investments-heading">
                The future isn&apos;t
                <br />
                <span className="muted">standing still.</span>
              </h2>
            </div>
            <p>
              Neither am I. A selection of the companies and technologies I
              believe are moving us forward.
            </p>
          </div>
          <div className="section-meta">
            <span>Selected investments</span>
            <span>
              Scroll to explore <ArrowDown size={16} />
            </span>
          </div>
          <InvestmentShowcase companies={featuredInvestments} />
          <PortfolioDirectory companies={portfolioCompanies} />
        </section>
        <section
          id="build"
          className="section build-section"
          aria-labelledby="build-heading"
        >
          <div className="shell">
            <div className="section-heading" data-animate>
              <div>
                <p className="eyebrow">The build side</p>
                <h2 id="build-heading">
                  Less someday.
                  <br />
                  <span className="blue">More shipped.</span>
                </h2>
              </div>
              <p>
                Small experiments. Real products. A few of the ideas I&apos;ve
                taken from “what if” to out in the world.
              </p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`project-card${project.featured ? " project-featured" : ""}`}
                  data-animate
                >
                  <div className="project-preview">
                    <div className="project-browser-bar" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                      <span>
                        {new URL(project.link).hostname.replace("www.", "")}
                      </span>
                    </div>
                    <Image
                      src={project.image}
                      alt={`${project.name} website preview`}
                      width={1280}
                      height={800}
                      sizes="(max-width: 760px) 90vw, (max-width: 1100px) 45vw, 55vw"
                    />
                  </div>
                  <div className="project-details">
                    <p className="eyebrow">{project.category}</p>
                    <h3>{project.name}</h3>
                    <p>{project.desc}</p>
                    <p className="project-contribution">
                      {project.contribution}
                    </p>
                    <span className="project-cta">
                      {project.cta}{" "}
                      <ArrowUpRight size={20} aria-hidden="true" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section
          id="about"
          className="section shell about-section"
          aria-labelledby="about-heading"
        >
          <div className="about-photo" data-animate>
            <Image
              src="/david.jpg"
              alt="David Eagan, technology operator and investor"
              width={600}
              height={720}
              sizes="(max-width: 760px) 90vw, 40vw"
            />
            <span>Austin, Texas. Thinking globally.</span>
          </div>
          <div className="about-copy" data-animate>
            <p className="eyebrow">A little about me</p>
            <h2 id="about-heading">
              Always
              <br />
              in beta.
            </h2>
            <p className="about-lead">
              I&apos;m David. A technology operator, investor, and relentlessly
              curious builder.
            </p>
            <p>
              Over nearly a decade at Expedia Group, I served as Senior Director
              of Business Performance for Vrbo, focused on marketplace
              performance, growth opportunities, and better business results.
            </p>
            <p>
              Outside of my corporate work, I&apos;ve invested in and explored
              dozens of technology startups across AI, crypto, aerospace, and
              media. I enjoy building small experiments, exploring new ideas,
              and thinking about where technology is headed next.
            </p>
            <div className="interest-tags">
              <span>AI & frontier tech</span>
              <span>Marketplaces</span>
              <span>Crypto</span>
              <span>Data & analytics</span>
              <span>Consumer products</span>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="shell">
            <p className="eyebrow">
              <Sparkles size={17} /> Good things start with a conversation
            </p>
            <h2>
              What&apos;s <span>next?</span>
            </h2>
            <article
              className="podcast-feature"
              aria-labelledby="podcast-heading"
            >
              <div className="podcast-art">
                <Image
                  src="/projects/moontower-podcast.jpg"
                  alt="Moontower Business podcast cover"
                  width={360}
                  height={360}
                  sizes="(max-width: 760px) 180px, 300px"
                />
                <div className="podcast-wave" aria-hidden="true">
                  {[
                    18, 32, 24, 46, 60, 34, 52, 72, 42, 28, 56, 38, 22, 44, 64,
                    30, 48, 20,
                  ].map((height, index) => (
                    <span key={index} style={{ height }} />
                  ))}
                </div>
              </div>
              <div className="podcast-copy">
                <p className="eyebrow">
                  <Radio size={18} aria-hidden="true" /> In the conversation
                </p>
                <h3 id="podcast-heading">
                  Moontower
                  <br />
                  Business.
                </h3>
                <p>
                  Big ideas. Real people. Conversations with the founders,
                  investors, and leaders building what comes next.
                </p>
                <p className="podcast-role">
                  Co-founded & produced by David Eagan · Hosted by Joseph
                  O&apos;Bell
                </p>
                <a
                  className="podcast-latest"
                  href={latestPodcast.notesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Latest conversation
                    {latestPodcast.number
                      ? ` · EP. ${latestPodcast.number}`
                      : ""}
                  </span>
                  <strong>
                    {latestPodcast.name}{" "}
                    <ArrowUpRight size={19} aria-hidden="true" />
                  </strong>
                  <time dateTime={latestPodcast.date}>
                    {new Intl.DateTimeFormat("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      timeZone: "UTC",
                    }).format(new Date(latestPodcast.date))}
                  </time>
                </a>
                <div className="podcast-actions">
                  <a
                    href="https://moontowerbusiness.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-light"
                  >
                    <Headphones size={18} aria-hidden="true" /> Explore the
                    podcast
                  </a>
                  <a
                    href="https://open.spotify.com/show/1ffGDEnDolncAj4xA753TA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spotify <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                  <a
                    href="https://podcasts.apple.com/us/podcast/moontower-business/id1507993317"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apple Podcasts <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
            <div className="contact-bottom">
              <p>
                Building something? Exploring an idea?
                <br />
                Let&apos;s compare notes.
              </p>
              <div className="contact-links">
                <a
                  href="https://x.com/Eagan218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-light"
                >
                  <span className="x-icon" aria-hidden="true">
                    𝕏
                  </span>{" "}
                  Follow on X
                </a>
                <a
                  href="https://linkedin.com/in/davidroberteagan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-outline"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a
                  href="mailto:david.eagan@gmail.com"
                  className="button button-outline"
                >
                  <Mail size={20} /> Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="shell footer">
        <div className="disclosure">
          <h2>Regulatory Disclosure</h2>
          <p>
            Eagan Ventures LLC is a Texas-registered investment adviser. This
            website describes the personal investment and business activities of
            David Eagan and is not an offer of investment advisory services or a
            solicitation to become an advisory client. Nothing on this website
            constitutes investment advice or a recommendation to buy or sell any
            security. Registration as an investment adviser does not imply any
            particular level of skill or training.
          </p>
        </div>
        <div className="footer-brand">
          <a href="#top" className="wordmark">
            eagan<span>ventures</span>
            <span className="brand-star">✳</span>
          </a>
          <span>© {new Date().getFullYear()} Eagan Ventures LLC.</span>
        </div>
        <div className="legal">
          <h2>Legal Disclaimer</h2>
          <p>
            The information on this website is private and confidential. Nothing
            contained on this website constitutes an offer to sell or
            solicitation of an offer to buy any securities or investment
            advisory services.
          </p>
          <p>
            Eagan Ventures LLC is a private investment vehicle with no outside
            limited partners. The investments and companies mentioned on this
            website are for informational purposes only and do not constitute
            investment recommendations.
          </p>
          <p>
            This website does not provide investment, financial, legal, or tax
            advice. Past performance is not indicative of future results.
            Investing involves risk, including the possible loss of principal.
            All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
