import type { Metadata } from 'next'
import Link from 'next/link'
import { MorlDemo } from '@/components/MorlDemo'

export const metadata: Metadata = { title: 'Morality Demo | Meta Prompt Studio | Metafiction Media' }

export default function MetaPromptStudioDemoPage() {
  return (
    <main className="page">
      <header className="page-head">
        <p className="label eyebrow">Meta Prompt Studio · try it</p>
        <h1>Build a moral spine</h1>
        <p>Three axes. One key. One card. Answer the questions or turn the dials.</p>
      </header>

      <MorlDemo />

      <footer className="page-foot">
        <Link href="/meta-prompt-studio" className="ink-link">Back to Meta Prompt Studio</Link>
        <Link href="/newsletter" className="ink-link">Newsletter</Link>
      </footer>
    </main>
  )
}
