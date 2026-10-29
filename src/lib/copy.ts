// LOCKED copy — do not edit without sign-off.
export const POSTIT_COPY = {
  line1: 'Give your characters a psychological spine.',
  line2: 'Meta Prompt Studio — character building tool.',
  line3: 'Coming to the App Store Nov 2026.',
}
export const POSTIT_FULL = `${POSTIT_COPY.line1} ${POSTIT_COPY.line2} ${POSTIT_COPY.line3}`
export const MPS_HEADLINE = 'Meta Prompt Studio'
export const MPS_LABEL = 'Character Profile Engine'
export const TAGLINE = 'Stories That Know They Are Stories'
// STUB: replace with the real App Store URL once the listing is live.
export const APP_STORE_URL = 'https://metapromptstudio.app'
export const MPS_SITE_URL = 'https://metapromptstudio.app'

// Support / fundraiser — LOCKED copy from Phil, do not paraphrase.
export const SUPPORT = {
  heading: 'Help get Meta Prompt Studio launched',
  description:
    'I’m preparing to launch Meta Prompt Studio, and an unexpected car repair has left me without the car I rely on for work. I’m raising $1,200 to help cover repairs, related emergency expenses, and the $100 developer fee needed to release the app. Any contribution or share would help.',
  kofiLabel: 'Support on Ko-fi',
  kofiUrl: 'https://ko-fi.com/writerwrongphil',
  lifetimeOffer:
    'Become one of 10 lifetime launch supporters. A $100 pre-order includes full app access for life, with no subscription fees. Access begins when the app launches.',
  lifetimeLabel: 'Get lifetime access — $100',
  lifetimeUrl: 'https://ko-fi.com/s/593a4dd380',
  videoId: 'wCyaMKyKhXU',
  videoUrl: 'https://www.youtube.com/watch?v=wCyaMKyKhXU',
  demoLabel: 'Explore the app demo',
  demoUrl: 'https://metapromptstudio.app',
}

// Extra supporter tiers. `url: null` = Ko-fi shop link not created yet; never invent one.
export const SUPPORT_TIERS: { price: string; perk: string; url: string | null }[] = [
  { price: '$50', perk: 'One year of free full access', url: null },
  { price: '$10', perk: 'One month of free full access', url: null },
  { price: '$5', perk: 'One month of free basic access', url: null },
]
