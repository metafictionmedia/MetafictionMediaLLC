import Link from 'next/link'
import { CutWindow } from '@/components/CutWindow'
import { LockedPostIt } from '@/components/LockedPostIt'
import { AppStoreBadge } from '@/components/AppStoreBadge'
import { MPS_HEADLINE, MPS_LABEL, TAGLINE } from '@/lib/copy'

export default function Home() {
  return (
    <main className="home">
      <p className="home-tagline">{TAGLINE}</p>

      <CutWindow
        className="home-window"
        src="/assets/cut-window/desk-two-phones.jpg"
        alt="Two writers at a desk covered in sticky notes, with two phones showing Meta Prompt Studio"
        priority
        sizes="(max-width: 760px) 90vw, 72vw"
      />

      <section className="home-panel paper-card" aria-labelledby="mps-headline">
        <h1 id="mps-headline">{MPS_HEADLINE}</h1>
        <p className="label eyebrow">{MPS_LABEL}</p>
        <LockedPostIt />
      </section>

      <footer className="home-bottom">
        <Link href="/newsletter" className="ink-link">Newsletter</Link>
        <AppStoreBadge />
        <span className="spacer" />
        <Link href="/meta-prompt-studio" className="ink-link">Meta Prompt Studio →</Link>
      </footer>
    </main>
  )
}
