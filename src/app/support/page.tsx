import type { Metadata } from 'next'
import { SupportSection } from '@/components/SupportSection'
import { SUPPORT } from '@/lib/copy'

export const metadata: Metadata = {
  title: 'Support | Metafiction Media',
  description: SUPPORT.description,
}

export default function SupportPage() {
  return (
    <main className="page">
      <SupportSection asPage />
    </main>
  )
}
