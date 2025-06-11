'use client';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Metafiction Media</title>
        <meta name="description" content="Official site of Metafiction Media. Coming Soon." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-neutral-100 text-gray-800 font-sans">
        <main className="flex flex-col items-center justify-center p-8">
          <div className="max-w-4xl w-full text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Metafiction Media
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              A new kind of storytelling universe is taking shape.
            </p>
            <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
              <p className="text-lg mb-4">
                Our site is currently under construction, but our worlds are already coming to life.
              </p>
              <p className="text-md text-gray-500 mb-4">
                First release: <strong>Jeffree the Monster</strong> — book + app
              </p>
              {/* Shopify Buy Button Embed Placeholder */}
              <div id="shopify-buy-button"></div>
              <p className="text-sm text-gray-400 mt-8">@ 2025 Metafiction Media</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
