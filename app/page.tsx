import Image from 'next/image';
import ScrollReveal from './components/ScrollReveal';

// ============================================================
// DATA
// ============================================================

const focusAreas = [
  {
    label: 'AI',
    desc: 'Foundation models & agents',
    from: '#3b82f6',
    to: '#6366f1',
    delay: 0,
    offset: false,
  },
  {
    label: 'Crypto',
    desc: 'Digital ownership & DeFi',
    from: '#f59e0b',
    to: '#ef4444',
    delay: 0.5,
    offset: true,
  },
  {
    label: 'Marketplaces',
    desc: 'Platforms at global scale',
    from: '#8b5cf6',
    to: '#ec4899',
    delay: 1.0,
    offset: false,
  },
  {
    label: 'Consumer Apps',
    desc: 'Products people love',
    from: '#10b981',
    to: '#3b82f6',
    delay: 1.5,
    offset: true,
  },
  {
    label: 'Data & Analytics',
    desc: 'Intelligence at scale',
    from: '#6366f1',
    to: '#8b5cf6',
    delay: 2.0,
    offset: false,
  },
];

const workAreas = [
  {
    title: 'AI & Frontier Technology',
    desc: 'Exploring the next generation of software powered by AI agents, foundation models, and new computing architectures.',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    icon: 'ai',
  },
  {
    title: 'Marketplaces & Consumer Platforms',
    desc: 'Experience analyzing and building marketplaces at global scale through my work at Expedia and Vrbo.',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    icon: 'marketplace',
  },
  {
    title: 'Crypto & Decentralized Systems',
    desc: 'Investing in infrastructure and applications that expand financial sovereignty and digital ownership.',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    icon: 'crypto',
  },
  {
    title: 'Product Experiments',
    desc: 'Building and launching new product ideas rapidly using modern AI tools and development stacks.',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    icon: 'product',
  },
];

const featuredInvestments = [
  {
    name: 'SpaceX',
    desc: 'Reusable rockets, Starlink, and the mission to make humanity multiplanetary.',
    tag: 'Aerospace',
    logo: '/logos/spacex.png',
  },
  {
    name: 'Anthropic',
    desc: 'Safety-focused AI research lab and creator of the Claude family of models.',
    tag: 'AI',
    logo: '/logos/Anthropic.jpg',
  },
  {
    name: 'xAI',
    desc: "Elon Musk's AI company building Grok and frontier AI reasoning models.",
    tag: 'AI',
    logo: '/logos/xai.png',
  },
  {
    name: 'Figure',
    desc: 'General-purpose humanoid robots designed to work alongside humans.',
    tag: 'Robotics',
    logo: '/logos/figure.jpg',
  },
  {
    name: 'Apptronik',
    desc: 'Human-centered robotics company building Apollo — a general-purpose humanoid.',
    tag: 'Robotics',
    logo: '/logos/apptronik.png',
  },
  {
    name: 'Cerebras Systems',
    desc: 'Purpose-built AI supercomputing chip technology for training the largest models.',
    tag: 'AI',
    logo: '/logos/cerebras.jpg',
  },
];

interface PortfolioCompany {
  name: string;
  logo: string | null;
  category: 'AI / ML' | 'Blockchain / Crypto' | 'Aerospace' | 'Healthcare' | 'Media / Entertainment' | 'Other';
}

const portfolioCompanies: PortfolioCompany[] = [
  // AI / ML (featured companies removed to avoid duplication)
  { name: 'Hugging Face',  logo: '/logos/hugging.png',   category: 'AI / ML' },
  { name: 'Respell',       logo: '/logos/respell.jpg',   category: 'AI / ML' },
  { name: 'TaxGPT',        logo: '/logos/taxgpt.jpg',    category: 'AI / ML' },
  { name: 'Cr8tr',         logo: '/logos/cr8tr.jpg',     category: 'AI / ML' },
  { name: 'Multion',       logo: '/logos/Multion.png',   category: 'AI / ML' },
  { name: 'alison.ai',     logo: '/logos/alison.jpg',    category: 'AI / ML' },
  { name: 'Mentra',        logo: '/logos/mentra.jpg',    category: 'AI / ML' },
  { name: 'Extropic',      logo: null,                   category: 'AI / ML' },
  // Blockchain / Crypto
  { name: 'OpenSea',        logo: '/logos/OpenSea.png',      category: 'Blockchain / Crypto' },
  { name: 'Uniswap Labs',   logo: '/logos/Uniswap.jpg',      category: 'Blockchain / Crypto' },
  { name: 'LayerZero Labs', logo: '/logos/LayerZero.jpg',    category: 'Blockchain / Crypto' },
  { name: 'Worldcoin',      logo: '/logos/worldcoin.png',    category: 'Blockchain / Crypto' },
  { name: 'Truflation',     logo: '/logos/trueflation.jpg',  category: 'Blockchain / Crypto' },
  // Aerospace
  { name: 'Axiom Space',            logo: '/logos/axiom.png',  category: 'Aerospace' },
  { name: 'Skydio',                 logo: '/logos/skydio.png', category: 'Aerospace' },
  { name: 'Portal Space',           logo: null,                category: 'Aerospace' },
  { name: 'Performance Drone Works',logo: null,                category: 'Aerospace' },
  // Healthcare
  { name: 'Loyal',        logo: '/logos/loyal.jpg',     category: 'Healthcare' },
  // Media / Entertainment
  { name: 'PearPop',        logo: '/logos/PearPop.jpg',    category: 'Media / Entertainment' },
  { name: 'Limewire',       logo: '/logos/limewire.png',   category: 'Media / Entertainment' },
  { name: 'Sandbox VR',     logo: '/logos/sandboxvr.jpg',  category: 'Media / Entertainment' },
  { name: 'Enhanced Games', logo: '/logos/enhanced.jpg',   category: 'Media / Entertainment' },
  { name: 'Betr',           logo: '/logos/betr.jpg',       category: 'Media / Entertainment' },
  { name: 'Jackpocket',     logo: '/logos/jackpocket.jpg', category: 'Media / Entertainment' },
  // Other
  { name: 'Stripe',        logo: '/logos/stripe.jpg', category: 'Other' },
  { name: 'Liquid Death',  logo: '/logos/liquid.jpg', category: 'Other' },
  { name: 'Aalo Atomics',  logo: '/logos/aalo.jpg',   category: 'Other' },
  { name: 'Airloom Energy',logo: null,                category: 'Other' },
];

const portfolioCategories: PortfolioCompany['category'][] = [
  'AI / ML',
  'Blockchain / Crypto',
  'Aerospace',
  'Healthcare',
  'Media / Entertainment',
  'Other',
];

const projects = [
  {
    name: 'Doxie Dynasty',
    desc: 'The ultimate dachshund card game — build your pack, survive chaos cards, and be crowned ruler.',
    link: 'https://www.doxiedynasty.com/',
    emoji: '🐾',
  },
  {
    name: 'QuoteWTF',
    desc: 'Memorable and shareable quote generation with a modern, engaging interface.',
    link: 'http://quotewtf.com/',
    emoji: '💬',
  },
  {
    name: 'Fun Travel Swipe',
    desc: 'Swipe-based activity discovery for travelers — find things to do anywhere in the world.',
    link: 'http://funtravelswipe.com/',
    emoji: '✈️',
  },
  {
    name: 'Trip Bord',
    desc: 'Collaborative trip planning — organize itineraries, share ideas, and travel together.',
    link: 'http://tripbord.com/',
    emoji: '🗺️',
  },
  {
    name: 'Dinestein',
    desc: 'Cook more, shop less — AI-powered meal planning tailored to your preferences and pantry.',
    link: 'https://www.dinestein.com/',
    emoji: '🍳',
  },
  {
    name: 'AgentMoneyTracker',
    desc: 'Financial tracking for real estate agents — commissions, expenses, and performance.',
    link: 'http://agentmoneytrack.com/',
    emoji: '🏡',
  },
];

// ============================================================
// INLINE ICONS (Heroicons stroke style)
// ============================================================

function AIIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

function MarketplaceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
    </svg>
  );
}

function CryptoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  );
}

function ProductIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

// ============================================================
// PAGE
// ============================================================

export default function Home() {
  return (
    <>
      <ScrollReveal />

      <div className="min-h-screen" style={{ backgroundColor: '#030d1e' }}>

        {/* ============================================================
            1. HERO
        ============================================================ */}
        <section className="relative min-h-screen flex items-center overflow-hidden">

          {/* Background gradients */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: [
                'radial-gradient(ellipse 75% 55% at 50% -5%, rgba(59,130,246,0.13) 0%, transparent 60%)',
                'radial-gradient(ellipse 45% 35% at 85% 85%, rgba(124,58,237,0.09) 0%, transparent 55%)',
                '#030d1e',
              ].join(', '),
            }}
          />

          {/* Subtle dot-grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Content */}
          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pt-36 pb-28 lg:pt-40 lg:pb-32">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

              {/* ── LEFT ── */}
              <div>
                {/* Location badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-sm text-slate-400 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 animate-status-pulse" />
                  Austin, Texas
                </div>

                {/* Logo + Name inline */}
                <div className="flex items-center gap-5 mb-5">
                  <Image
                    src="/ev-logo.png"
                    alt="Eagan Ventures"
                    width={70}
                    height={70}
                    className="object-contain flex-shrink-0"
                  />
                  <h1 className="text-[58px] lg:text-[72px] font-bold text-white tracking-tight leading-[1.04]">
                    David<br />Eagan
                  </h1>
                </div>

                {/* Role subtitle */}
                <p
                  className="text-xl font-semibold mb-7 tracking-wide"
                  style={{
                    background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Operator · Investor · Builder
                </p>

                {/* Description */}
                <p className="text-[17px] text-slate-300 leading-[1.75] mb-4 max-w-[500px]">
                  I work at the intersection of technology, data, and new products — investing in companies and building experiments across AI, crypto, marketplaces, and consumer software.
                </p>
                <p className="text-[15px] text-slate-500 leading-[1.75] mb-10 max-w-[500px]">
                  Previously Senior Director of Business Performance at Expedia Group (Vrbo), focused on marketplace performance, growth, and data strategy.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-14">
                  <a
                    href="#investments"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-white text-[15px] transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                    style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)' }}
                  >
                    View Portfolio
                  </a>
                  <a
                    href="https://linkedin.com/in/davidroberteagan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-slate-200 text-[15px] bg-white/[0.07] border border-white/[0.12] transition-all duration-200 hover:bg-white/[0.12] hover:border-white/[0.22]"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                    Connect on LinkedIn
                  </a>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-8">
                  <div>
                    <div className="text-[32px] font-bold text-white leading-none">25+</div>
                    <div className="text-sm text-slate-500 mt-1.5">Investments</div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <div className="text-[32px] font-bold text-white leading-none">10+</div>
                    <div className="text-sm text-slate-500 mt-1.5">Products Built</div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <div className="text-[32px] font-bold text-white leading-none">40+</div>
                    <div className="text-sm text-slate-500 mt-1.5">Countries</div>
                  </div>
                </div>
              </div>

              {/* ── RIGHT: Floating focus-area cards ── */}
              <div className="hidden lg:flex flex-col gap-3.5 py-6">
                {focusAreas.map((area) => (
                  <div
                    key={area.label}
                    className={`hero-card-float group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.06] cursor-default ${
                      area.offset ? 'self-end w-[85%]' : 'self-start w-[85%] ml-[15%]'
                    }`}
                    style={{ animationDelay: `${area.delay}s`, animationDuration: `${6 + area.delay * 0.4}s` }}
                  >
                    {/* Gradient icon badge */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-[11px] tracking-wide"
                      style={{ background: `linear-gradient(135deg, ${area.from}, ${area.to})` }}
                    >
                      {area.label.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{area.label}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{area.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </section>

        {/* ============================================================
            2. WHAT I WORK ON
        ============================================================ */}
        <section className="py-32 bg-[#f7f9fc]">
          <div className="max-w-[1200px] mx-auto px-6">

            <div className="mb-16" data-animate>
              <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-[0.15em] mb-4">
                Focus Areas
              </span>
              <h2 className="text-[36px] font-bold text-gray-900">What I Work On</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {workAreas.map((area, i) => (
                <div
                  key={area.title}
                  data-animate
                  data-animate-delay={String(i + 1)}
                  className="group bg-white rounded-2xl p-8 border border-gray-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.07),0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${area.iconBg} ${area.iconColor}`}>
                    {area.icon === 'ai'          && <AIIcon className="w-6 h-6" />}
                    {area.icon === 'marketplace' && <MarketplaceIcon className="w-6 h-6" />}
                    {area.icon === 'crypto'      && <CryptoIcon className="w-6 h-6" />}
                    {area.icon === 'product'     && <ProductIcon className="w-6 h-6" />}
                  </div>
                  <h3 className="text-[19px] font-bold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-500 text-[15px] leading-[1.7]">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            3. SELECTED INVESTMENTS
        ============================================================ */}
        <section id="investments" className="py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">

            <div className="mb-16" data-animate>
              <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-[0.15em] mb-4">
                Portfolio
              </span>
              <h2 className="text-[36px] font-bold text-gray-900 mb-4">Selected Investments</h2>
              <p className="text-[17px] text-gray-500 max-w-lg leading-relaxed">
                Companies and technologies I believe are shaping the future.
              </p>
            </div>

            {/* Featured top tier */}
            <div className="mb-20">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.15em] mb-6">Featured</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredInvestments.map((company, i) => (
                  <div
                    key={company.name}
                    data-animate
                    data-animate-delay={String((i % 3) + 1)}
                    className="group relative rounded-2xl border border-gray-100 p-7 hover:border-blue-100 hover:shadow-[0_8px_30px_rgba(59,130,246,0.08)] hover:-translate-y-0.5 transition-all duration-250 overflow-hidden"
                  >
                    {/* Top gradient accent line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: 'linear-gradient(90deg, #3b82f6, #7c3aed)' }}
                    />
                    {/* Logo or initials */}
                    {company.logo ? (
                      <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-5 overflow-hidden">
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={36}
                          height={36}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-white font-bold text-sm"
                        style={{ background: 'linear-gradient(135deg, #3b82f6, #7c3aed)' }}
                      >
                        {company.name.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                    <span className="inline-block text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full mb-3">
                      {company.tag}
                    </span>
                    <h4 className="text-[17px] font-bold text-gray-900 mb-2">{company.name}</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">{company.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Second tier — by category */}
            <div data-animate>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.15em] mb-8">Also Invested In</p>
              {portfolioCategories.map((cat) => {
                const companies = portfolioCompanies.filter(c => c.category === cat);
                if (companies.length === 0) return null;
                return (
                  <div key={cat} className="mb-10">
                    <h4 className="text-[13px] font-semibold text-gray-600 mb-4 pb-3 border-b border-gray-100">
                      {cat}
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
                      {companies.map(company => (
                        <div
                          key={company.name}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-gray-50 hover:bg-blue-50 hover:border-blue-100 border border-transparent transition-all duration-150 cursor-default"
                        >
                          <div className="w-7 h-7 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                            {company.logo ? (
                              <Image
                                src={company.logo}
                                alt={company.name}
                                width={22}
                                height={22}
                                className="object-contain"
                              />
                            ) : (
                              <span className="text-[9px] font-bold text-gray-500 leading-none">
                                {company.name.slice(0, 2).toUpperCase()}
                              </span>
                            )}
                          </div>
                          <span className="text-[13px] font-medium text-gray-700 truncate">{company.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ============================================================
            4. THINGS I BUILD
        ============================================================ */}
        <section id="build" className="py-32" style={{ backgroundColor: '#030d1e' }}>
          <div className="max-w-[1200px] mx-auto px-6">

            <div className="mb-16" data-animate>
              <span className="inline-block text-xs font-semibold text-blue-400 uppercase tracking-[0.15em] mb-4">
                Side Projects
              </span>
              <h2 className="text-[36px] font-bold text-white mb-4">Things I Build</h2>
              <p className="text-[17px] text-slate-400 max-w-lg leading-relaxed">
                Experiments, products, and ideas I explore outside of my core investing work.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, i) => (
                <div
                  key={project.name}
                  data-animate
                  data-animate-delay={String((i % 3) + 1)}
                  className="group flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 hover:border-white/[0.14] hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-3xl mb-5">{project.emoji}</div>
                  <h3 className="text-[17px] font-bold text-white mb-2.5">{project.name}</h3>
                  <p className="text-[14px] text-slate-400 leading-[1.7] flex-1">{project.desc}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[13px] text-blue-400 hover:text-blue-300 font-semibold mt-5 transition-colors"
                    >
                      Visit site
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ============================================================
            6. ABOUT
        ============================================================ */}
        <section id="about" className="py-32" style={{ backgroundColor: '#030d1e' }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

              {/* Left — bio text */}
              <div data-animate>
                <span className="inline-block text-xs font-semibold text-blue-400 uppercase tracking-[0.15em] mb-4">
                  Background
                </span>
                <h2 className="text-[36px] font-bold text-white mb-10">About</h2>

                <div className="space-y-5 text-[16px] text-slate-300 leading-[1.8]">
                  <p>
                    I&apos;m a technology operator and investor based in Austin.
                  </p>
                  <p>
                    Over nearly a decade at Expedia Group, I served as Senior Director of Business
                    Performance for Vrbo, focused on understanding marketplace performance, identifying
                    growth opportunities, and helping drive better business results across the platform.
                  </p>
                  <p>
                    Outside of my corporate work I&apos;ve invested in and explored dozens of technology
                    startups across AI, crypto, aerospace, and media.
                  </p>
                  <p>
                    I enjoy building small experiments, exploring new ideas, and thinking about
                    where technology is headed next.
                  </p>
                </div>
              </div>

              {/* Right — key facts table */}
              <div data-animate data-animate-delay="2" className="lg:pt-[76px]">
                {[
                  { label: 'Based in',      value: 'Austin, Texas' },
                  { label: 'Previous role', value: 'Sr. Director of Business Performance, Vrbo' },
                  { label: 'Focus areas',   value: 'AI, Crypto, Marketplaces, Data' },
                  { label: 'Portfolio',     value: '25+ investments across 6 categories' },
                  { label: 'Side projects', value: '10+ products built' },
                  { label: 'Travel',        value: '40+ countries visited' },
                ].map(item => (
                  <div
                    key={item.label}
                    className="flex items-start justify-between py-4 border-b border-white/[0.06]"
                  >
                    <span className="text-[13px] text-slate-500">{item.label}</span>
                    <span className="text-[13px] text-white font-medium text-right max-w-[220px]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================
            7. CONNECT
        ============================================================ */}
        <section id="contact" className="py-32" style={{ backgroundColor: '#010a18' }}>
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <div data-animate>
              <span className="inline-block text-xs font-semibold text-blue-400 uppercase tracking-[0.15em] mb-4">
                Let&apos;s Talk
              </span>
              <h2 className="text-[52px] font-bold text-white mb-5 tracking-tight">Connect</h2>
              <p className="text-[19px] text-slate-400 mb-14 max-w-sm mx-auto leading-relaxed">
                Interested in building, investing, or sharing ideas?
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/davidroberteagan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white text-[15px] transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, #0a66c2, #004f9a)' }}
                >
                  <LinkedInIcon className="w-5 h-5" />
                  LinkedIn
                </a>

                {/* Twitter / X */}
                <a
                  href="https://x.com/Eagan218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white text-[15px] bg-black border border-white/[0.15] transition-all duration-200 hover:bg-white/[0.08] hover:border-white/[0.25]"
                >
                  <XIcon className="w-5 h-5" />
                  Twitter / X
                </a>

                {/* Email */}
                <a
                  href="mailto:david.eagan@gmail.com"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-slate-200 text-[15px] bg-white/[0.06] border border-white/[0.12] transition-all duration-200 hover:bg-white/[0.1] hover:border-white/[0.22]"
                >
                  <MailIcon className="w-5 h-5" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            LEGAL DISCLAIMER + FOOTER
        ============================================================ */}
        <section className="py-10 border-t border-white/[0.05]" style={{ backgroundColor: '#010810' }}>
          <div className="max-w-[1200px] mx-auto px-6">

            {/* Footer brand */}
            <div className="flex items-center gap-2.5 mb-8">
              <Image
                src="/ev-logo.png"
                alt="Eagan Ventures"
                width={28}
                height={28}
                className="object-contain opacity-70"
              />
              <span className="text-slate-400 font-semibold text-[13px] tracking-tight">
                Eagan Ventures
              </span>
            </div>

            <div className="max-w-3xl text-[12px] text-slate-600 leading-relaxed space-y-2">
              <p className="text-slate-500 font-semibold text-[13px] mb-3">Legal Disclaimer</p>
              <p>
                The information on this website is private and confidential. Nothing contained on this
                website constitutes an offer to sell or solicitation of an offer to buy any securities
                or investment advisory services.
              </p>
              <p>
                Eagan Ventures LLC is a private investment vehicle with no outside limited partners.
                The investments and companies mentioned on this website are for informational purposes
                only and do not constitute investment recommendations.
              </p>
              <p>
                This website does not provide investment, financial, legal, or tax advice. Past
                performance is not indicative of future results. Investing involves risk, including
                the possible loss of principal.
              </p>
              <p className="pt-3 text-slate-500">
                © {new Date().getFullYear()} Eagan Ventures LLC. All rights reserved.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
