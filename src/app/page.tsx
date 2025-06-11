'use client';

import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Metafiction Media - A New Universe</title>
        <meta name="description" content="Official site of Metafiction Media. Coming Soon." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white text-gray-800 font-sans p-4 relative overflow-hidden">
        {/* Hero Section */}
        <section className="text-center pt-16 pb-8 z-10 relative">
          <h1 className="text-5xl font-bold mb-4">Metafiction Media</h1>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            A new kind of storytelling universe is taking shape.
          </p>
        </section>

        {/* Shopify Placeholder */}
        <section className="text-center py-8">
          <div className="inline-block bg-gray-100 rounded-lg p-6 shadow-md">
            <p className="mb-4 text-lg font-medium">Our first release:</p>
            <p className="text-xl font-bold mb-4">Jeffree the Monster — Book + App</p>
            <div id="shopify-buy-button" className="border border-dashed border-gray-400 p-4 rounded">
              <p className="text-gray-500">[Shopify Buy Button Placeholder]</p>
            </div>
          </div>
        </section>

        {/* Sketchbook Mockup Art */}
        <section className="flex flex-wrap justify-center gap-4 mt-8 z-0">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="w-32 h-32 relative">
              <Image
                src={`/sketch_thumb_${i}.jpg`}
                alt={`Sketch ${i}`}
                fill
                className="object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition"
              />
            </div>
          ))}
        </section>

        <footer className="text-center text-sm text-gray-400 mt-12">
          &copy; 2025 Metafiction Media
        </footer>
      </main>
    </>
  );
}

