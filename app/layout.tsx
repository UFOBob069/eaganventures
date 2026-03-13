import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'David Eagan — Operator, Investor, Builder',
  description: 'Technology operator, investor, and builder based in Austin. Previously Senior Director at Expedia Group (Vrbo). Investing in AI, crypto, marketplaces, and consumer software.',
  keywords: 'David Eagan, venture capital, investments, technology, startups, AI, blockchain, aerospace, Expedia, Vrbo, Austin',
  icons: {
    icon: '/ev-logo.png',
    apple: '/ev-logo.png',
  },
  openGraph: {
    title: 'David Eagan — Operator, Investor, Builder',
    description: 'Technology operator, investor, and builder based in Austin. Previously Senior Director at Expedia Group.',
    url: 'https://eaganventures.com',
    siteName: 'Eagan Ventures',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Eagan — Operator, Investor, Builder',
    description: 'Technology operator, investor, and builder based in Austin.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
