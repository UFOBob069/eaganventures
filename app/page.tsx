import Image from 'next/image';
import PortfolioItem from './components/PortfolioItem';
import TeamMember from './components/TeamMember';

// Portfolio company interface
interface PortfolioCompany {
  name: string;
  logo: string;
  description: string;
  theme: 'AI & ML' | 'Blockchain / Crypto' | 'Aerospace' | 'Media / Entertainment' | 'Healthcare' | 'Other';
}

// Team member interface
interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const portfolioCompanies: PortfolioCompany[] = [
  // AI & ML Companies
  {
    name: "Anthropic",
    logo: "/logos/Anthropic.jpg",
    description: "Leading AI research and deployment",
    theme: "AI & ML"
  },
  {
    name: "Hugging Face",
    logo: "/logos/hugging.png",
    description: "Open-source AI platform and community",
    theme: "AI & ML"
  },
  {
    name: "x.ai",
    logo: "/logos/xai.png",
    description: "Advanced AI systems development",
    theme: "AI & ML"
  },
  {
    name: "Respell",
    logo: "/logos/respell.jpg",
    description: "AI-powered text generation",
    theme: "AI & ML"
  },
  {
    name: "TaxGPT",
    logo: "/logos/taxgpt.jpg",
    description: "AI-powered tax assistance",
    theme: "AI & ML"
  },
  {
    name: "Cr8tr",
    logo: "/logos/cr8tr.jpg",
    description: "AI content creation platform",
    theme: "AI & ML"
  },
  {
    name: "Multion",
    logo: "/logos/Multion.png",
    description: "AI automation solutions",
    theme: "AI & ML"
  },
  {
    name: "Figure",
    logo: "/logos/figure.jpg",
    description: "Advanced humanoid robotics and AI",
    theme: "AI & ML"
  },
  {
    name: "alison.ai",
    logo: "/logos/alison.jpg",
    description: "AI-powered advertising technology",
    theme: "AI & ML"
  },
  {
    name: "Cerebras Systems",
    logo: "/logos/cerebras.jpg",
    description: "AI supercomputing and chip technology",
    theme: "AI & ML"
  },

  // Blockchain / Crypto Companies
  {
    name: "OpenSea",
    logo: "/logos/OpenSea.png",
    description: "Leading NFT marketplace",
    theme: "Blockchain / Crypto"
  },
  {
    name: "Uniswap Labs",
    logo: "/logos/Uniswap.jpg",
    description: "Decentralized trading protocol",
    theme: "Blockchain / Crypto"
  },
  {
    name: "LayerZero Labs",
    logo: "/logos/LayerZero.jpg",
    description: "Cross-chain interoperability protocol",
    theme: "Blockchain / Crypto"
  },
  {
    name: "Worldcoin",
    logo: "/logos/worldcoin.png",
    description: "Digital identity and cryptocurrency",
    theme: "Blockchain / Crypto"
  },
  {
    name: "Truflation",
    logo: "/logos/trueflation.jpg",
    description: "Decentralized economic data oracle",
    theme: "Blockchain / Crypto"
  },

  // Aerospace Companies
  {
    name: "SpaceX",
    logo: "/logos/spacex.png",
    description: "Space exploration and transportation",
    theme: "Aerospace"
  },
  {
    name: "Axiom Space",
    logo: "/logos/axiom.png",
    description: "Commercial space station development",
    theme: "Aerospace"
  },
  {
    name: "Skydio",
    logo: "/logos/skydio.png",
    description: "Autonomous drone technology",
    theme: "Aerospace"
  },

  // Healthcare
  {
    name: "Loyal",
    logo: "/logos/loyal.jpg",
    description: "Healthcare consumer platform",
    theme: "Healthcare"
  },

  // Media & Entertainment
  {
    name: "PearPop",
    logo: "/logos/PearPop.jpg",
    description: "Creator collaboration platform",
    theme: "Media / Entertainment"
  },
  {
    name: "Limewire",
    logo: "/logos/limewire.png",
    description: "Digital content marketplace",
    theme: "Media / Entertainment"
  },
  {
    name: "Sandbox VR",
    logo: "/logos/sandboxvr.jpg",
    description: "Virtual reality experiences",
    theme: "Media / Entertainment"
  },
  {
    name: "Enhanced Games",
    logo: "/logos/enhanced.jpg",
    description: "Next-generation sports entertainment",
    theme: "Media / Entertainment"
  },
  {
    name: "Betr",
    logo: "/logos/betr.jpg",
    description: "Sports betting and media platform",
    theme: "Media / Entertainment"
  },
  {
    name: "Jackpocket",
    logo: "/logos/jackpocket.jpg",
    description: "Mobile lottery platform",
    theme: "Media / Entertainment"
  },
  
  // Other
  {
    name: "Stripe",
    logo: "/logos/stripe.jpg",
    description: "Global payment infrastructure",
    theme: "Other"
  },
  {
    name: "Liquid Death",
    logo: "/logos/liquid.jpg",
    description: "Canned water with attitude",
    theme: "Other"
  }
];

// Update the portfolio section to show main investment categories
const investmentThemes = [
  'AI & ML',
  'Blockchain / Crypto',
  'Aerospace',
  'Healthcare',
  'Media / Entertainment',
  'Other'
] as const;

const teamMembers: TeamMember[] = [
  {
    name: "David Eagan",
    role: "CEO",
    image: "/david.jpg",
    bio: "Founder of Eagan Ventures, with extensive experience in technology investments and entrepreneurship."
  },
  {
    name: "Andre Eagan",
    role: "Chief Dog Officer (CDO)",
    image: "/andre.jpg",
    bio: "A distinguished dachshund with a nose for promising investments. Specializes in nap-time strategy, treat economics, and maintaining office morale."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="w-full h-full bg-[url('/hero-pattern.svg')] bg-cover bg-center"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
        </div>
        
        {/* Investment Pulse Effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative">
            {/* Central pulse origin */}
            <div className="w-40 h-40 rounded-full bg-white/10 backdrop-blur-sm animate-investment-pulse"></div>
            
            {/* Ripple effects */}
            <div className="absolute inset-0 w-40 h-40 rounded-full border-2 border-white/30 animate-pulse-ripple"></div>
            <div className="absolute inset-0 w-40 h-40 rounded-full border-2 border-white/20 animate-pulse-ripple" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute inset-0 w-40 h-40 rounded-full border-2 border-white/10 animate-pulse-ripple" style={{ animationDelay: '1s' }}></div>
            
            {/* Central glow */}
            <div className="absolute inset-0 w-40 h-40 rounded-full bg-indigo-500/30 blur-xl animate-glow"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 z-10 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-block relative">
              <Image 
                src="/logo.png" 
                alt="Eagan Ventures Logo" 
                width={100}
                height={100}
                className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 animate-glow-delayed"
              />
              {/* Small pulse around logo */}
              <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse-ripple" style={{ animationDuration: '2s' }}></div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg relative z-10">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 animate-glow-delayed" style={{ animationDelay: '0.3s' }}>
                Eagan Ventures
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed px-4 animate-glow-delayed" style={{ animationDelay: '0.6s' }}>
              Investing in the future of technology and partnering with exceptional founders building transformative companies.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 relative z-10">
              <a href="#portfolio" className="bg-white text-indigo-900 px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg animate-glow-delayed" style={{ animationDelay: '0.9s' }}>
                Our Portfolio
              </a>
              <a href="https://linkedin.com/in/davidroberteagan" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-white/10 transition-colors animate-glow-delayed" style={{ animationDelay: '1.2s' }}>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-glow-delayed" style={{ animationDelay: '1.5s' }}>
          <span className="text-white/70 text-xs sm:text-sm mb-2">Scroll to explore</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
            <div className="w-1 sm:w-1.5 h-2 sm:h-3 bg-white/80 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-bl-full opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-50 rounded-tr-full opacity-70"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
                Our <span className="text-indigo-600">Mission</span>
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-indigo-600 mb-6 sm:mb-8"></div>
              <div className="text-base sm:text-lg text-gray-600 space-y-4 sm:space-y-6">
                <p className="leading-relaxed">
                  Eagan Ventures LLC, headquartered in Austin, Texas, is an investment management firm 
                  that embodies the spirit of innovation, investing in the future&apos;s potential across 
                  a diverse landscape. Guided by curiosity and a passion for transformative opportunities, 
                  the firm embraces ventures that promise growth and inspire change, maintaining a flexible 
                  yet focused approach in the ever-evolving entrepreneurial world.
                </p>
                <p className="leading-relaxed">
                  At Eagan Ventures, we partner with exceptional founders building transformative companies. 
                  Our focus spans artificial intelligence, enterprise software, fintech, and healthcare technology.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-indigo-600 p-4 sm:p-6 rounded-lg text-white h-auto sm:h-48 flex flex-col justify-center transform hover:scale-105 transition-transform">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-sm sm:text-base">We seek out groundbreaking ideas that challenge the status quo and create new possibilities.</p>
                </div>
                <div className="bg-blue-500 p-4 sm:p-6 rounded-lg text-white h-auto sm:h-48 flex flex-col justify-center transform hover:scale-105 transition-transform sm:mt-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Partnership</h3>
                  <p className="text-sm sm:text-base">We build lasting relationships with founders based on trust, support, and shared vision.</p>
                </div>
                <div className="bg-purple-500 p-4 sm:p-6 rounded-lg text-white h-auto sm:h-48 flex flex-col justify-center transform hover:scale-105 transition-transform">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Growth</h3>
                  <p className="text-sm sm:text-base">We&apos;re committed to helping our portfolio companies scale and achieve their full potential.</p>
                </div>
                <div className="bg-indigo-800 p-4 sm:p-6 rounded-lg text-white h-auto sm:h-48 flex flex-col justify-center transform hover:scale-105 transition-transform sm:mt-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Impact</h3>
                  <p className="text-sm sm:text-base">We invest in technologies that solve meaningful problems and create lasting value.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-12 sm:mt-16">
            <div className="flex items-center">
              <div className="text-3xl sm:text-5xl font-bold text-indigo-600 mr-3 sm:mr-4">25+</div>
              <div className="text-sm sm:text-base text-gray-700">Companies<br/>Invested</div>
            </div>
            <div className="flex items-center">
              <div className="text-3xl sm:text-5xl font-bold text-indigo-600 mr-3 sm:mr-4">6</div>
              <div className="text-sm sm:text-base text-gray-700">Investment<br/>Categories</div>
            </div>
            <div className="flex items-center">
              <div className="text-3xl sm:text-5xl font-bold text-indigo-600 mr-3 sm:mr-4">5+</div>
              <div className="text-sm sm:text-base text-gray-700">Years of<br/>Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16 text-gray-900">Our Portfolio</h2>
          
          {investmentThemes.map((theme) => (
            <div key={theme} className="mb-12 sm:mb-20">
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-gray-900 border-b pb-4">
                {theme}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {portfolioCompanies
                  .filter(company => company.theme === theme)
                  .map((company) => (
                    <PortfolioItem
                      key={company.name}
                      name={company.name}
                      logo={company.logo}
                      description={company.description}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16 text-gray-900">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vibe Coding Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4 text-gray-900">Vibe Coding</h2>
          <p className="text-base sm:text-xl text-center text-gray-600 mb-10 sm:mb-16 max-w-3xl mx-auto">
            Built by David Eagan, these projects showcase a passion for continuous learning and 
            exploring new technologies to understand their capabilities and potential.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            {/* MoonTower Business */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 sm:h-64 relative">
                <Image
                  src="/projects/moontower.jpg"
                  alt="MoonTower Business"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">MoonTower Business</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  A podcast exploring the Austin business landscape through engaging conversations with 
                  entrepreneurs, executives, and innovators.
                </p>
                <a 
                  href="http://moontowerbusiness.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold hover:text-indigo-800 text-sm sm:text-base"
                >
                  Visit Website →
                </a>
              </div>
            </div>
            
            {/* Dinestein */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 sm:h-64 relative">
                <Image
                  src="/projects/dinestein.jpg"
                  alt="Dinestein"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Dinestein</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  An AI-powered meal planning platform that helps users cook more and shop less, 
                  generating personalized meal plans based on preferences and dietary restrictions.
                </p>
                <a 
                  href="http://dinestein.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold hover:text-indigo-800 text-sm sm:text-base"
                >
                  Visit Website →
                </a>
              </div>
            </div>
            
            {/* GoVisitWinery */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 sm:h-64 relative">
                <Image
                  src="/projects/govisit.jpg"
                  alt="GoVisitWinery"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">GoVisitWinery</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  A platform for wine enthusiasts to discover and explore wineries, featuring an 
                  extensive directory, verified reviews, and easy navigation tools.
                </p>
                <a 
                  href="http://govisitwinery.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold hover:text-indigo-800 text-sm sm:text-base"
                >
                  Visit Website →
                </a>
              </div>
            </div>
            
            {/* OptimizeBnb.ai */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 sm:h-64 relative">
                <Image
                  src="/projects/optimizebnb.jpg"
                  alt="OptimizeBnb.ai"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">OptimizeBnb.ai</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  AI-powered tools to help Airbnb hosts optimize their listings, boost bookings, 
                  improve guest experiences, and increase revenue.
                </p>
                <a 
                  href="http://optimizebnb.ai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold hover:text-indigo-800 text-sm sm:text-base"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Get in Touch</h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8">
            Interested in partnering with us? Connect with David on LinkedIn.
          </p>
          <a 
            href="https://linkedin.com/in/davidroberteagan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-indigo-600 text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-6 sm:py-8 bg-gray-950 text-gray-400">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-xs sm:text-sm leading-relaxed">
            <h3 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-300">Legal Disclaimer</h3>
            <p className="mb-2">
              The information on this website is private and confidential. Nothing contained on this website constitutes an offer to sell or solicitation of an offer to buy any securities or investment advisory services.
            </p>
            <p className="mb-2">
              Eagan Ventures LLC is a private investment vehicle with no outside limited partners. The investments and companies mentioned on this website are for informational purposes only and do not constitute investment recommendations.
            </p>
            <p className="mb-2">
              This website does not provide investment, financial, legal, or tax advice. The content herein should not be relied upon for making investment decisions. Past performance is not indicative of future results. Investing involves risk, including the possible loss of principal.
            </p>
            <p>
              © {new Date().getFullYear()} Eagan Ventures LLC. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
