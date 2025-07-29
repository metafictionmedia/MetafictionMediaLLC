'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'about':
        return <AboutPage />
      case 'jeffree':
        return <JeffreePage />
      case 'shop':
        return <ShopPage />
      default:
        return <HomePage />
    }
  }

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/assets/Mfmlogo.jpeg"
              alt="Metafiction Media Logo"
              width={200}
              height={100}
              className="mx-auto mb-6 rounded-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Metafiction Media
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Where Stories Come Alive Through Interactive Storytelling and Immersive Experiences
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setCurrentPage('jeffree')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Meet Jeffree
            </button>
            <button
              onClick={() => setCurrentPage('shop')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 bg-black bg-opacity-30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
                <Image
                  src="/assets/IMG_3672(2).jpeg"
                  alt="Jeffree Character"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Jeffree the Monster</h3>
              <p className="text-blue-200">A heartwarming tale of friendship and self-acceptance</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                <Image
                  src="/assets/5BEC9A40-6F4E-4F5E-A28D-D2474441D5BD.jpeg"
                  alt="U-GA Platform"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">U-GA Platform</h3>
              <p className="text-blue-200">Interactive storytelling meets mindfulness</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
                <Image
                  src="/assets/IMG_3413.jpeg"
                  alt="Musicasa"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Musicasa</h3>
              <p className="text-blue-200">Where music and storytelling unite</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  const AboutPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-12">About Metafiction Media</h1>
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-white">
          <p className="text-lg mb-6">
            Metafiction Media is a creative studio dedicated to pushing the boundaries of storytelling through innovative technology and immersive experiences.
          </p>
          <p className="text-lg mb-6">
            Our mission is to create stories that don't just entertain, but transform the way audiences engage with narrative content. Through interactive books, multimedia experiences, and cutting-edge technology, we're building the future of storytelling.
          </p>
          <p className="text-lg">
            Founded on the belief that every story has the power to change lives, we specialize in creating content that bridges the gap between traditional storytelling and modern interactive media.
          </p>
        </div>
      </div>
    </div>
  )

  const JeffreePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-12">Meet Jeffree the Monster</h1>
        
        {/* Hero Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/assets/IMG_3672(2).jpeg"
                alt="Jeffree the Monster"
                width={400}
                height={400}
                className="rounded-lg mx-auto"
              />
            </div>
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">A Story of Friendship and Self-Discovery</h2>
              <p className="text-lg mb-4">
                Follow Jeffree, a misunderstood monster navigating the challenges of middle school, friendship, and finding his place in the world.
              </p>
              <p className="text-lg">
                Through humor, heart, and stunning comic-style illustrations, this story explores themes of acceptance, identity, and the power of true friendship.
              </p>
            </div>
          </div>
        </div>

        {/* Character Gallery */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Character Gallery</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Image
                src="/assets/IMG_3672(2).jpeg"
                alt="Jeffree"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Jeffree</h3>
              <p className="text-purple-200">The purple monster with a big heart</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Image
                src="/assets/Barry.jpeg"
                alt="Barry"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Barry</h3>
              <p className="text-purple-200">Jeffree's loyal friend</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Image
                src="/assets/IMG_6072.jpeg"
                alt="Monty"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Monty</h3>
              <p className="text-purple-200">The green character</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Image
                src="/assets/IMG_6073(1).jpeg"
                alt="Sam"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Sam</h3>
              <p className="text-purple-200">The blonde girl</p>
            </div>
          </div>
        </div>

        {/* Comic Showcase */}
        <div>
          <h2 className="text-4xl font-bold text-white text-center mb-8">Comic Showcase</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <Image
                src="/assets/top_panel_colorized.png"
                alt="Comic Panel 1"
                width={300}
                height={200}
                className="rounded-lg mb-4 w-full"
              />
              <h3 className="text-lg font-bold text-white mb-2">Talent Show Scene</h3>
              <p className="text-purple-200">Jeffree prepares for his big moment</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <Image
                src="/assets/corrected_comic_panel.jpeg"
                alt="Comic Panel 2"
                width={300}
                height={200}
                className="rounded-lg mb-4 w-full"
              />
              <h3 className="text-lg font-bold text-white mb-2">Robot Encounter</h3>
              <p className="text-purple-200">An unexpected meeting</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <Image
                src="/assets/IMG_3747.jpeg"
                alt="Comic Panel 3"
                width={300}
                height={200}
                className="rounded-lg mb-4 w-full"
              />
              <h3 className="text-lg font-bold text-white mb-2">Jeffree's Expressions</h3>
              <p className="text-purple-200">The many faces of our hero</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const ShopPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-12">Metafiction Media Shop</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Jeffree Authenticity Tee */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
            <Image
              src="/assets/IMG_3672(2).jpeg"
              alt="Jeffree Authenticity Tee"
              width={300}
              height={300}
              className="rounded-lg mb-4 w-full"
            />
            <h3 className="text-xl font-bold text-white mb-2">Jeffree Authenticity Tee</h3>
            <p className="text-green-200 mb-4">Show your authentic self with Jeffree's signature style</p>
            <p className="text-2xl font-bold text-white mb-4">$24.99</p>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
              Add to Cart
            </button>
          </div>

          {/* U-GA Namaste Collection */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
            <Image
              src="/assets/5BEC9A40-6F4E-4F5E-A28D-D2474441D5BD.jpeg"
              alt="U-GA Namaste Collection"
              width={300}
              height={300}
              className="rounded-lg mb-4 w-full"
            />
            <h3 className="text-xl font-bold text-white mb-2">U-GA Namaste Collection</h3>
            <p className="text-green-200 mb-4">Find your inner peace with mindful storytelling</p>
            <p className="text-2xl font-bold text-white mb-4">$29.99</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
              Add to Cart
            </button>
          </div>

          {/* Musicasa Pin Collection */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
            <Image
              src="/assets/IMG_3413.jpeg"
              alt="Musicasa Pin Collection"
              width={300}
              height={300}
              className="rounded-lg mb-4 w-full"
            />
            <h3 className="text-xl font-bold text-white mb-2">Musicasa Pin Collection</h3>
            <p className="text-green-200 mb-4">Wear your love for music and stories</p>
            <p className="text-2xl font-bold text-white mb-4">$12.99</p>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-white mb-4">More products coming soon!</p>
          <p className="text-lg text-blue-200">Sign up for our newsletter to be the first to know about new releases.</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-50 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/Mfmlogo.jpeg"
                alt="MF Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="text-white font-bold text-xl">Metafiction Media</span>
            </div>
            <div className="flex space-x-6">
              <button
                onClick={() => setCurrentPage('home')}
                className={`text-white hover:text-blue-300 transition-colors ${currentPage === 'home' ? 'text-blue-300' : ''}`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className={`text-white hover:text-blue-300 transition-colors ${currentPage === 'about' ? 'text-blue-300' : ''}`}
              >
                About
              </button>
              <button
                onClick={() => setCurrentPage('jeffree')}
                className={`text-white hover:text-blue-300 transition-colors ${currentPage === 'jeffree' ? 'text-blue-300' : ''}`}
              >
                Jeffree
              </button>
              <button
                onClick={() => setCurrentPage('shop')}
                className={`text-white hover:text-blue-300 transition-colors ${currentPage === 'shop' ? 'text-blue-300' : ''}`}
              >
                Shop
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-black bg-opacity-80 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Metafiction Media</h3>
              <p className="text-gray-300">Creating immersive storytelling experiences that transform how audiences engage with narrative content.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentPage('home')} className="text-gray-300 hover:text-white">Home</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="text-gray-300 hover:text-white">About</button></li>
                <li><button onClick={() => setCurrentPage('jeffree')} className="text-gray-300 hover:text-white">Jeffree the Monster</button></li>
                <li><button onClick={() => setCurrentPage('shop')} className="text-gray-300 hover:text-white">Shop</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <p className="text-gray-300 mb-2">Stay updated on our latest projects and releases.</p>
              <p className="text-gray-300">philip@metafiction.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">&copy; 2025 Metafiction Media LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

