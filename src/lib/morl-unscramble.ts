import { MORL_ENTRIES, MORL_PAD, MORL_SALT } from './morl-payload'

export type MorlCard = { key: string; name: string; paragraphs: string[] }

function b64ToBytes(b64: string): Uint8Array {
  const bin = atob(b64)
  const out = new Uint8Array(bin.length)
  for (let k = 0; k < bin.length; k++) out[k] = bin.charCodeAt(k)
  return out
}

// Reverse of scripts/build-morl-payload.mjs: base64 -> reverse -> XOR -> UTF-8.
function unscramble(b64: string, pad: Uint8Array): string {
  const bytes = b64ToBytes(b64).reverse()
  for (let k = 0; k < bytes.length; k++) bytes[k] ^= pad[k % pad.length] ^ ((k * 31) & 0xff)
  return new TextDecoder().decode(bytes)
}

let cache: Map<string, MorlCard> | null = null

/** Decodes the shipped payload once, in the browser, into key -> card. */
export function loadMorlCards(): Map<string, MorlCard> {
  if (cache) return cache
  const pad = b64ToBytes(MORL_PAD)
  const map = new Map<string, MorlCard>()
  for (const [tag, blob] of MORL_ENTRIES) {
    const key = unscramble(tag, pad).slice(MORL_SALT.length)
    const { n, p } = JSON.parse(unscramble(blob, pad)) as { n: string; p: string[] }
    map.set(key, { key, name: n, paragraphs: p })
  }
  cache = map
  return map
}
