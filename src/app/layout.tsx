import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import Hero from '@/components/hero'
import Footer from '@/components/footer'

import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anime Vault',
  description: 'Using Next JS, Server Actions and Framer Motion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
