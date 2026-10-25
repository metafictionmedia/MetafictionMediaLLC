import type { Metadata } from 'next'
import { Geist, Caveat, Patrick_Hand } from 'next/font/google'
import './globals.css'
import { TopMenu } from '@/components/TopMenu'

const sans = Geist({ variable: '--font-sans', subsets: ['latin'] })
const hand = Caveat({ variable: '--font-hand', subsets: ['latin'], weight: ['500', '700'] })
const note = Patrick_Hand({ variable: '--font-note', subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Metafiction Media | Stories That Know They Are Stories',
  description: 'Give your characters a psychological spine. Meta Prompt Studio — character building tool. Coming to the App Store Nov 2026.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${hand.variable} ${note.variable}`}>
        <TopMenu />
        {children}
      </body>
    </html>
  )
}
