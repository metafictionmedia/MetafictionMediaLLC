// src/app/shop/page.tsx

import { storeProducts } from '../../data';
import ProductCard from '../../components/ProductCard';

export default function ShopPage() {
  // Filter products into their respective categories
  const jeffreyProducts = storeProducts.filter(p => p.category === 'jeffrey');
  const yudyProducts = storeProducts.filter(p => p.category === 'yudy');

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Metafiction Media Shop
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Thoughtfully designed products that extend our storytelling universe into your everyday life.
          </p>
        </div>

        {/* Jeffrey Products Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-white">Jeffrey the Monster Merch</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {jeffreyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Yudy Products Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-white">Yudi the Yogi Uni(corn) Merch</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {yudyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
