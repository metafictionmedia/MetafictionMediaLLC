import { PostIt } from './PostIt'
import { SUPPORT, SUPPORT_TIERS } from '@/lib/copy'

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

/** Fundraiser block. Plain outbound links to Ko-fi only — nothing is collected on this site. */
export function SupportSection({ id, asPage = false }: { id?: string; asPage?: boolean }) {
  const H = asPage ? 'h1' : 'h2'
  return (
    <section id={id} className={`support${asPage ? ' support-page' : ''}`} aria-labelledby="support-heading">
      <div className="support-main paper-card">
        <p className="eyebrow">Support the launch</p>
        <H id="support-heading">{SUPPORT.heading}</H>
        <p className="support-desc">{SUPPORT.description}</p>
        <div className="support-actions">
          <a href={SUPPORT.kofiUrl} {...ext} className="paper-button support-kofi">{SUPPORT.kofiLabel} ↗</a>
          <span className="support-note">Any amount helps</span>
        </div>
        <div className="support-video cut-window cut-1">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${SUPPORT.videoId}`}
            title="Meta Prompt Studio — support video"
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className="support-links">
          <a href={SUPPORT.videoUrl} {...ext} className="ink-link">Watch on YouTube ↗</a>
          <a href={SUPPORT.demoUrl} {...ext} className="ink-link">{SUPPORT.demoLabel} ↗</a>
        </p>
      </div>

      <div className="support-offers">
        <PostIt color="pink" tilt={1.4} className="support-lifetime">
          <p className="eyebrow">Limited · 10 spots · $100 pre-order</p>
          <p className="support-offer-text">{SUPPORT.lifetimeOffer}</p>
          <a href={SUPPORT.lifetimeUrl} {...ext} className="paper-button">{SUPPORT.lifetimeLabel} ↗</a>
        </PostIt>

        <PostIt color="blue" tilt={-1.2} className="support-tiers">
          <p className="eyebrow">More supporter tiers</p>
          <ul>
            {SUPPORT_TIERS.map((t) => (
              <li key={t.price}>
                <strong>{t.price}</strong>
                <span>{t.perk}</span>
                {t.url ? <a href={t.url} {...ext} className="ink-link">Get it ↗</a> : null}
              </li>
            ))}
          </ul>
          {SUPPORT_TIERS.some((t) => !t.url) ? <p className="support-soon">Shop links for these tiers are coming soon.</p> : null}
        </PostIt>
      </div>
    </section>
  )
}

/** Compact above-the-fold call-out used on the home hero and MPS page. */
export function SupportFlag({ href = '#support' }: { href?: string }) {
  return (
    <div className="support-flag">
      <p className="support-flag-title">{SUPPORT.heading}</p>
      <p className="support-flag-sub">Raising $1,200 for the launch</p>
      <div className="support-flag-actions">
        <a href={SUPPORT.kofiUrl} {...ext} className="paper-button support-kofi">{SUPPORT.kofiLabel} ↗</a>
        <a href={href} className="ink-link">How to help</a>
      </div>
    </div>
  )
}
