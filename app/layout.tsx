import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eagan Ventures',
  description: 'Investing in the future of technology and partnering with exceptional founders building transformative companies.',
  keywords: 'venture capital, investments, technology, startups, AI, blockchain, aerospace, healthcare',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  openGraph: {
    title: 'Eagan Ventures',
    description: 'Investing in the future of technology and partnering with exceptional founders.',
    url: 'https://eaganventures.com',
    siteName: 'Eagan Ventures',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eagan Ventures',
    description: 'Investing in the future of technology and partnering with exceptional founders.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 