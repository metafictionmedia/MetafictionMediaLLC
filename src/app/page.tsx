
'use client';

import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  
      console.log('Email submitted:', email);
    }
  };

  return (
    <>
      <Head>
        <title>Metafiction Media – Where stories become reality… eventually</title>
        <meta name="description" content="Coming soon teaser for Metafiction Media's upcoming properties: Jeffree the Monster, Yudy the Yogi Unicorn, and MusiCasa." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="sketchbook-bg min-h-screen relative overflow-hidden px-4 py-12 text-center font-sans">
        <div className="notebook-holes absolute left-0 top-0 w-16 h-full z-0" />

        <Image src="/assets/cartoon-signs.png" alt="cartoon signs" width={150} height={150} className="absolute top-8 left-8 hidden md:block" />
        <Image src="/assets/gate-sketch.png" alt="Coming Soon Gate" width={400} height={400} className="mx-auto mb-4" />

        <h1 className="text-5xl font-bold mb-2 tracking-wider">COMING SOON</h1>
        <p className="text-md italic text-gray-600 mb-8">The festival is being set up, the magic is coming…</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/80 p-4 rounded shadow-md">
            <h2 className="font-bold text-lg mb-2">Jeffree the Monster</h2>
            <p className="text-sm text-gray-700">
              A misunderstood monster and his only friend must prove they are telling the truth when the most popular puppet at school convinces everyone otherwise.
            </p>
          </div>
          <div className="bg-white/80 p-4 rounded shadow-md">
            <h2 className="font-bold text-lg mb-2">Yudy the Yogi Unicorn</h2>
            <p className="text-sm text-gray-700">
              Yudy the Yogi’s personal journal about how to overcome the worst week ever with yoga.
            </p>
          </div>
          <div className="bg-white/80 p-4 rounded shadow-md">
            <h2 className="font-bold text-lg mb-2">MusiCasa</h2>
            <p className="text-sm text-gray-700">
              A family of guitars struggle to find harmony when the electric kids want to go solo because their acoustic parents are too classical for change.
            </p>
          </div>
        </div>

        <footer className="text-sm text-gray-500 mt-12">&copy; 2025 Metafiction Media</footer>
      </main>
    </>
  );// Trigger redeploy

}
