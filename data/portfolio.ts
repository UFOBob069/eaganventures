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
  milestone?: PortfolioMilestone;
};

export const featuredInvestments: FeaturedInvestment[] = [
  {
    name: "SpaceX",
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
    desc: "General-purpose humanoid robots designed to work alongside humans.",
    tag: "Robotics",
    logo: "/logos/figure.jpg",
  },
  {
    name: "Apptronik",
    desc: "Human-centered robotics company building Apollo — a general-purpose humanoid.",
    tag: "Robotics",
    logo: "/logos/apptronik.png",
  },
  {
    name: "Cerebras Systems",
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
  milestone?: PortfolioMilestone;
}

export const portfolioCompanies: PortfolioCompany[] = [
  // AI / ML (featured companies removed to avoid duplication)
  {
    name: "Hugging Face",
    logo: "/logos/hugging.png",
    category: "AI / ML",
    milestone: {
      kind: "announced",
      label: "Acquisition announced",
      detail: "NVIDIA · Pending close",
      source: "https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/",
    },
  },
  { name: "TaxGPT", logo: "/logos/taxgpt.jpg", category: "AI / ML" },
  { name: "Cr8tr", logo: "/logos/cr8tr.jpg", category: "AI / ML" },
  { name: "Multion", logo: "/logos/Multion.png", category: "AI / ML" },
  { name: "alison.ai", logo: "/logos/alison.jpg", category: "AI / ML" },
  { name: "Mentra", logo: "/logos/mentra.jpg", category: "AI / ML" },
  { name: "Extropic", logo: null, category: "AI / ML" },
  // Blockchain / Crypto
  {
    name: "OpenSea",
    logo: "/logos/OpenSea.png",
    category: "Blockchain / Crypto",
  },
  {
    name: "Uniswap Labs",
    logo: "/logos/Uniswap.jpg",
    category: "Blockchain / Crypto",
  },
  {
    name: "LayerZero Labs",
    logo: "/logos/LayerZero.jpg",
    category: "Blockchain / Crypto",
  },
  {
    name: "Worldcoin",
    logo: "/logos/worldcoin.png",
    category: "Blockchain / Crypto",
  },
  {
    name: "Truflation",
    logo: "/logos/trueflation.jpg",
    category: "Blockchain / Crypto",
  },
  // Aerospace
  { name: "Axiom Space", logo: "/logos/axiom.png", category: "Aerospace" },
  { name: "Skydio", logo: "/logos/skydio.png", category: "Aerospace" },
  { name: "Portal Space", logo: null, category: "Aerospace" },
  { name: "Performance Drone Works", logo: null, category: "Aerospace" },
  // Healthcare
  { name: "Loyal", logo: "/logos/loyal.jpg", category: "Healthcare" },
  // Media / Entertainment
  {
    name: "PearPop",
    logo: "/logos/PearPop.jpg",
    category: "Media / Entertainment",
  },
  {
    name: "Limewire",
    logo: "/logos/limewire.png",
    category: "Media / Entertainment",
  },
  {
    name: "Sandbox VR",
    logo: "/logos/sandboxvr.jpg",
    category: "Media / Entertainment",
  },
  {
    name: "Enhanced Games",
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
  { name: "Betr", logo: "/logos/betr.jpg", category: "Media / Entertainment" },
  {
    name: "Jackpocket",
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
  { name: "Stripe", logo: "/logos/stripe.jpg", category: "Other" },
  { name: "Liquid Death", logo: "/logos/liquid.jpg", category: "Other" },
  { name: "Aalo Atomics", logo: "/logos/aalo.jpg", category: "Other" },
  { name: "Airloom Energy", logo: null, category: "Other" },
];

export const portfolioCategories: PortfolioCompany["category"][] = [
  "AI / ML",
  "Blockchain / Crypto",
  "Aerospace",
  "Healthcare",
  "Media / Entertainment",
  "Other",
];

// Company events, not claims about realized returns or sales of David's holdings.
// Verified against linked company announcements / filings on November 19, 2026.
export const completedMilestones = [
  ...featuredInvestments,
  ...portfolioCompanies,
].filter(
  (company) => company.milestone && company.milestone.kind !== "announced",
);

export const projects = [
  {
    name: "Moontower Business",
    desc: "Conversations with founders, investors, and community leaders. An Austin-rooted business podcast I co-founded and produce.",
    link: "https://moontowerbusiness.com/",
    emoji: "🎙️",
  },
  {
    name: "Doxie Dynasty",
    desc: "The ultimate dachshund card game — build your pack, survive chaos cards, and be crowned ruler.",
    link: "https://www.doxiedynasty.com/",
    emoji: "🐾",
  },
  {
    name: "QuoteWTF",
    desc: "Memorable and shareable quote generation with a modern, engaging interface.",
    link: "http://quotewtf.com/",
    emoji: "💬",
  },
  {
    name: "Fun Travel Swipe",
    desc: "Swipe-based activity discovery for travelers — find things to do anywhere in the world.",
    link: "http://funtravelswipe.com/",
    emoji: "✈️",
  },
  {
    name: "Trip Bord",
    desc: "Collaborative trip planning — organize itineraries, share ideas, and travel together.",
    link: "http://tripbord.com/",
    emoji: "🗺️",
  },
  {
    name: "Dinestein",
    desc: "Cook more, shop less — AI-powered meal planning tailored to your preferences and pantry.",
    link: "https://www.dinestein.com/",
    emoji: "🍳",
  },
  {
    name: "AgentMoneyTracker",
    desc: "Financial tracking for real estate agents — commissions, expenses, and performance.",
    link: "http://agentmoneytrack.com/",
    emoji: "🏡",
  },
];
