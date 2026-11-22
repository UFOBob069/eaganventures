// Company events, not claims about realized returns or sales of David's holdings.
// Verified against linked company announcements / filings on November 19, 2026.
export type PortfolioMilestone = {
  kind: "ipo" | "acquired" | "announced";
  label: string;
  detail: string;
  source: string;
};

export type FeaturedInvestment = {
  name: string;
  desc: string;
  tag: string;
  logo: string;
  website: string;
  milestone?: PortfolioMilestone;
};

export const featuredInvestments: FeaturedInvestment[] = [
  {
    name: "SpaceX",
    website: "https://www.spacex.com/",
    desc: "Reusable rockets, Starlink, and the mission to make humanity multiplanetary.",
    tag: "Aerospace",
    logo: "/logos/spacex.png",
    milestone: {
      kind: "ipo",
      label: "IPO",
      detail: "NASDAQ: SPCX · June 2026",
      source: "https://ir.spacex.com/faqs-and-contact/",
    },
  },
  {
    name: "Anthropic",
    website: "https://www.anthropic.com/",
    desc: "Safety-focused AI research lab and creator of the Claude family of models.",
    tag: "AI",
    logo: "/logos/Anthropic.jpg",
    milestone: {
      kind: "ipo",
      label: "IPO",
      detail: "NASDAQ: ANT · November 2026",
      source:
        "https://www.anthropic.com/news/anthropic-prices-initial-public-offering",
    },
  },
  {
    name: "xAI",
    website: "https://x.ai/",
    desc: "Elon Musk's AI company building Grok and frontier AI reasoning models.",
    tag: "AI",
    logo: "/logos/xai.png",
    milestone: {
      kind: "acquired",
      label: "Acquired",
      detail: "By SpaceX · February 2026",
      source: "https://x.ai/news/xai-joins-spacex",
    },
  },
  {
    name: "Figure",
    website: "https://www.figure.ai/",
    desc: "General-purpose humanoid robots designed to work alongside humans.",
    tag: "Robotics",
    logo: "/logos/figure.jpg",
  },
  {
    name: "Apptronik",
    website: "https://apptronik.com/",
    desc: "Human-centered robotics company building Apollo — a general-purpose humanoid.",
    tag: "Robotics",
    logo: "/logos/apptronik.png",
  },
  {
    name: "Cerebras Systems",
    website: "https://www.cerebras.ai/",
    desc: "Purpose-built AI supercomputing chip technology for training the largest models.",
    tag: "AI",
    logo: "/logos/cerebras.jpg",
    milestone: {
      kind: "ipo",
      label: "IPO",
      detail: "NASDAQ: CBRS · May 2026",
      source:
        "https://investors.cerebras.ai/shareholder-services/investor-faqs",
    },
  },
];

export interface PortfolioCompany {
  name: string;
  logo: string | null;
  category:
    | "AI / ML"
    | "Blockchain / Crypto"
    | "Aerospace"
    | "Healthcare"
    | "Media / Entertainment"
    | "Other";
  description: string;
  website: string;
  linkLabel?: string;
  milestone?: PortfolioMilestone;
}

export const portfolioCompanies: PortfolioCompany[] = [
  // AI / ML (featured companies removed to avoid duplication)
  {
    name: "Hugging Face",
    description:
      "Open models, datasets, and tools for the machine-learning community.",
    website: "https://huggingface.co/",
    logo: "/logos/hugging.png",
    category: "AI / ML",
    milestone: {
      kind: "announced",
      label: "Acquisition announced",
      detail: "NVIDIA · Pending close",
      source: "https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/",
    },
  },
  {
    name: "TaxGPT",
    description:
      "AI-assisted tax research, document analysis, and drafting for tax professionals.",
    website: "https://www.taxgpt.com/",
    logo: "/logos/taxgpt.jpg",
    category: "AI / ML",
  },
  {
    name: "Cr8tr",
    description:
      "Creator tools and guidance for artists and independent creatives. Now HelloCreator.",
    website: "https://www.linkedin.com/company/hellocreatorworld/",
    linkLabel: "Company profile",
    logo: "/logos/cr8tr.jpg",
    category: "AI / ML",
  },
  {
    name: "Multion",
    description:
      "Personal AI agents for everyday tasks. Now building Please, an AI-assisted to-do app.",
    website: "https://please.ai/",
    logo: "/logos/Multion.png",
    category: "AI / ML",
  },
  {
    name: "alison.ai",
    description:
      "Creative analytics and AI tools that help teams understand and improve advertising.",
    website: "https://alison.ai/",
    logo: "/logos/alison.jpg",
    category: "AI / ML",
  },
  {
    name: "Mentra",
    description:
      "Smart glasses and MentraOS, an open-source platform for hands-free AI applications.",
    website: "https://mentraglass.com/",
    logo: "/logos/mentra.jpg",
    category: "AI / ML",
  },
  {
    name: "Extropic",
    description:
      "Thermodynamic computing hardware designed for probabilistic AI workloads.",
    website: "https://extropic.ai/",
    logo: null,
    category: "AI / ML",
  },
  // Blockchain / Crypto
  {
    name: "OpenSea",
    description:
      "A marketplace for discovering and trading NFTs and digital assets.",
    website: "https://opensea.io/",
    logo: "/logos/OpenSea.png",
    category: "Blockchain / Crypto",
  },
  {
    name: "Uniswap Labs",
    description:
      "Products that make decentralized token exchange accessible to more people.",
    website: "https://www.uniswap.org/",
    logo: "/logos/Uniswap.jpg",
    category: "Blockchain / Crypto",
  },
  {
    name: "LayerZero Labs",
    description:
      "Infrastructure that connects assets and applications across blockchains.",
    website: "https://layerzero.network/",
    logo: "/logos/LayerZero.jpg",
    category: "Blockchain / Crypto",
  },
  {
    name: "Worldcoin",
    description:
      "The World network combines proof of human identity with digital financial infrastructure.",
    website: "https://world.org/",
    logo: "/logos/worldcoin.png",
    category: "Blockchain / Crypto",
  },
  {
    name: "Truflation",
    description: "Independent inflation indexes and real-time economic data.",
    website: "https://truflation.com/",
    logo: "/logos/trueflation.jpg",
    category: "Blockchain / Crypto",
  },
  // Aerospace
  {
    name: "Axiom Space",
    description:
      "Commercial space stations, astronaut missions, and next-generation spacesuits.",
    website: "https://www.axiomspace.com/",
    logo: "/logos/axiom.png",
    category: "Aerospace",
  },
  {
    name: "Skydio",
    description:
      "Autonomous drones for public safety, infrastructure inspection, and defense.",
    website: "https://www.skydio.com/",
    logo: "/logos/skydio.png",
    category: "Aerospace",
  },
  {
    name: "Portal Space",
    description:
      "Spacecraft and propulsion systems built for rapid movement between orbits.",
    website: "https://www.portalsystems.space/",
    logo: null,
    category: "Aerospace",
  },
  {
    name: "Performance Drone Works",
    description:
      "American-made aerial robotics and mission systems for defense.",
    website: "https://www.pdw.ai/",
    logo: null,
    category: "Aerospace",
  },
  // Healthcare
  {
    name: "Loyal",
    description:
      "Veterinary medicines in development to help dogs live longer, healthier lives.",
    website: "https://loyal.com/",
    logo: "/logos/loyal.jpg",
    category: "Healthcare",
  },
  // Media / Entertainment
  {
    name: "PearPop",
    description:
      "Creator marketing that brings brands and talent together, from strategy to measurement.",
    website: "https://www.pearpop.com/",
    logo: "/logos/PearPop.jpg",
    category: "Media / Entertainment",
  },
  {
    name: "Limewire",
    description:
      "File sharing and AI-powered tools for working with images, video, and documents.",
    website: "https://limewire.com/",
    logo: "/logos/limewire.png",
    category: "Media / Entertainment",
  },
  {
    name: "Sandbox VR",
    description:
      "Shared, full-body virtual reality adventures at dedicated entertainment venues.",
    website: "https://sandboxvr.com/",
    logo: "/logos/sandboxvr.jpg",
    category: "Media / Entertainment",
  },
  {
    name: "Enhanced Games",
    description:
      "A sports competition exploring the boundaries of human performance.",
    website: "https://www.enhanced.com/games",
    logo: "/logos/enhanced.jpg",
    category: "Media / Entertainment",
    milestone: {
      kind: "ipo",
      label: "Public via SPAC",
      detail: "NYSE: ENHA · May 2026",
      source:
        "https://www.sec.gov/Archives/edgar/data/1956439/000119312526364151/d38462ds1.htm",
    },
  },
  {
    name: "Betr",
    description:
      "Sports entertainment and gaming products, including fantasy sports.",
    website: "https://www.betr.app/",
    logo: "/logos/betr.jpg",
    category: "Media / Entertainment",
  },
  {
    name: "Jackpocket",
    description:
      "A digital lottery courier that brings ticket ordering to mobile devices.",
    website: "https://jackpocket.com/",
    logo: "/logos/jackpocket.jpg",
    category: "Media / Entertainment",
    milestone: {
      kind: "acquired",
      label: "Acquired",
      detail: "By DraftKings · May 2024",
      source:
        "https://ir.aboutdraftkings.com/news/news-details/2024/DraftKings-Completes-Acquisition-of-Jackpocket-05-23-2024/default.aspx",
    },
  },
  // Other
  {
    name: "Stripe",
    description:
      "Payments and financial infrastructure for internet businesses.",
    website: "https://stripe.com/",
    logo: "/logos/stripe.jpg",
    category: "Other",
  },
  {
    name: "Liquid Death",
    description:
      "A beverage brand bringing a distinctive voice to water, sparkling drinks, and tea.",
    website: "https://liquiddeath.com/",
    logo: "/logos/liquid.jpg",
    category: "Other",
  },
  {
    name: "Aalo Atomics",
    description:
      "Factory-built nuclear power systems designed to serve data centers.",
    website: "https://www.aalo.com/",
    logo: "/logos/aalo.jpg",
    category: "Other",
  },
  {
    name: "Airloom Energy",
    description:
      "A lower-profile approach to wind power using turbines that move around a track.",
    website: "https://www.airloom.energy/",
    logo: null,
    category: "Other",
  },
];

export const portfolioCategories: PortfolioCompany["category"][] = [
  "AI / ML",
  "Blockchain / Crypto",
  "Aerospace",
  "Healthcare",
  "Media / Entertainment",
  "Other",
];

export const projects = [
  {
    name: "Doxie Dynasty",
    desc: "A dachshund card game built for clever combinations, chaotic quirks, and game night.",
    link: "https://www.doxiedynasty.com/",
    image: "/projects/doxie-preview.jpg",
    category: "Physical product",
    contribution: "From game concept to a playable deck and online storefront.",
    featured: true,
    cta: "Explore the game",
  },
  {
    name: "Moontower Business",
    desc: "Conversations with founders, investors, and community leaders, with Austin at the center.",
    link: "https://www.moontowerbusiness.com/",
    image: "/projects/moontower-preview.jpg",
    category: "Podcast & media",
    contribution:
      "Co-founder and producer. Building a home for the conversations.",
    featured: true,
    cta: "Meet the podcast",
  },
  {
    name: "QuoteWTF",
    desc: "Upload a contractor quote to explore pricing, missing details, and questions to ask before committing.",
    link: "https://quotewtf.com/",
    image: "/projects/quotewtf-preview.jpg",
    category: "AI / Home services",
    contribution: "A quote-analysis tool for homeowners.",
    featured: false,
    cta: "Explore project",
  },
  {
    name: "Fun Travel Swipe",
    desc: "Discover experiences one swipe at a time, and save the activities that catch your eye.",
    link: "https://funtravelswipe.com/",
    image: "/projects/travel-preview.jpg",
    category: "Travel / Discovery",
    contribution: "A swipe-based experience for finding things to do.",
    featured: false,
    cta: "Explore project",
  },
  {
    name: "Trip Bord",
    desc: "Give group trips a shared home for ideas, favorites, and decisions.",
    link: "https://tripbord.com/",
    image: "/projects/tripbord-preview.jpg",
    category: "Travel / Collaboration",
    contribution: "A collaborative workspace for planning trips together.",
    featured: false,
    cta: "Explore project",
  },
  {
    name: "Dinestein",
    desc: "Plan meals at home or explore restaurant options, with preferences that shape the decision.",
    link: "https://www.dinestein.com/",
    image: "/projects/dinestein-preview.jpg",
    category: "Food / Everyday tools",
    contribution: "A meal-planning and dining discovery app.",
    featured: false,
    cta: "Explore project",
  },
  {
    name: "AgentMoneyTracker",
    desc: "A financial workspace for real estate agents to organize commissions, expenses, and performance.",
    link: "https://agentmoneytracker.vercel.app/",
    image: "/projects/tracker-preview.jpg",
    category: "Real estate / Finance",
    contribution: "An agent-focused financial tracking app.",
    featured: false,
    cta: "Explore project",
  },
];
