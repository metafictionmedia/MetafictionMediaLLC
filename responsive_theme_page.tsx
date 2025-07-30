'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Detect user's theme preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const themeClasses = {
    background: isDarkMode 
      ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900' 
      : 'bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    cardBg: isDarkMode 
      ? 'bg-white/10 backdrop-blur-sm border-white/20' 
      : 'bg-white/80 backdrop-blur-sm border-gray-200',
    navBg: isDarkMode 
      ? 'bg-black/20 backdrop-blur-md border-white/10' 
      : 'bg-white/90 backdrop-blur-md border-gray-200',
    buttonPrimary: isDarkMode
      ? 'bg-purple-600 hover:bg-purple-700 text-white'
      : 'bg-purple-600 hover:bg-purple-700 text-white',
    buttonSecondary: isDarkMode
      ? 'bg-white/10 hover:bg-white/20 text-white border-white/20'
      : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-300'
  }

  const renderNavigation = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${themeClasses.navBg} border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Image
              src="/assets/Mfmlogo.jpeg"
              alt="Metafiction Media Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className={`text-xl font-bold ${themeClasses.text}`}>Metafiction Media</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'jeffree', 'shop'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === section
                    ? themeClasses.buttonPrimary
                    : `${themeClasses.text} hover:bg-white/10`
                }`}
              >
                {section === 'jeffree' ? 'Jeffree the Monster' : section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )

  const renderHome = () => (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src="/assets/Mfmlogo.jpeg"
              alt="Metafiction Media Logo"
              width={120}
              height={120}
              className="mx-auto rounded-full mb-6"
            />
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${themeClasses.text}`}>
            Metafiction Media
          </h1>
          <p className={`text-xl md:text-2xl mb-8 ${themeClasses.text} opacity-90`}>
            Where Stories Come to Life Through Art and Innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveSection('jeffree')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${themeClasses.buttonPrimary}`}
            >
              Explore Our Stories
            </button>
            <button
              onClick={() => setActiveSection('shop')}
              className={`px-8 py-3 rounded-lg font-semibold border transition-all 
${themeClasses.buttonSecondary}`}
            >
              Shop Merchandise
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 ${themeClasses.text}`}>
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Jeffree the Monster",
                description: "A heartwarming tale of friendship and acceptance in a world where being different is a superpower.",
                image: "/assets/IMG_3672(2).jpeg",
                section: "jeffree"
              },
              {
                title: "U-GA Universe",
                description: "Magical adventures in a world where unicorns and friendship create the most powerful magic.",
                image: "/assets/5BEC9A40-6F4E-4F5E-A28D-D2474441D5BD.jpeg",
                section: "about"
              },
              {
                title: "Musicasa",
                description: "Where music meets storytelling in an enchanting world of rhythm and melody.",
                image: "/assets/IMG_3413.jpeg",
                section: "about"
              }
            ].map((project, index) => (
              <div
                key={index}
                className={`${themeClasses.cardBg} rounded-xl p-6 border transition-all hover:scale-105 
cursor-pointer`}
                onClick={() => setActiveSection(project.section)}
              >
                <div className="mb-4 flex justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={120}
                    height={120}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className={`text-xl font-bold mb-3 text-center ${themeClasses.text}`}>
                  {project.title}
                </h3>
                <p className={`${themeClasses.text} opacity-80 text-center`}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )

  const renderAbout = () => (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 text-center ${themeClasses.text}`}>
          About Metafiction Media
        </h1>
        <div className={`${themeClasses.cardBg} rounded-xl p-8 border`}>
          <p className={`text-lg mb-6 ${themeClasses.text} opacity-90`}>
            Welcome to Metafiction Media, where imagination meets innovation in the world of storytelling. 
            We create immersive narratives that blend traditional storytelling with modern digital 
experiences.
          </p>
          <p className={`text-lg mb-6 ${themeClasses.text} opacity-90`}>
            Our mission is to bring characters to life through compelling stories, beautiful artwork, 
            and interactive experiences that resonate with readers of all ages.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className={`text-xl font-bold mb-4 ${themeClasses.text}`}>Our Vision</h3>
              <p className={`${themeClasses.text} opacity-80`}>
                To create a universe where every story matters and every character has the power to inspire, 
                educate, and entertain audiences worldwide.
              </p>
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-4 ${themeClasses.text}`}>Our Values</h3>
              <p className={`${themeClasses.text} opacity-80`}>
                Creativity, inclusivity, and the belief that great stories can change the world. 
                We celebrate diversity and the unique perspectives that make each story special.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderJeffree = () => (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 text-center ${themeClasses.text}`}>
          Jeffree the Monster
        </h1>
        
        {/* Character Gallery */}
        <section className="mb-16">
          <h2 className={`text-2xl font-bold mb-8 text-center ${themeClasses.text}`}>
            Meet the Characters
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Jeffree", image: "/assets/IMG_3672(2).jpeg", description: "The lovable purple monster 
with a heart of gold" },
              { name: "Barry", image: "/assets/Barry.jpeg", description: "The brave boy who sees beyond 
appearances" },
              { name: "Monty", image: "/assets/IMG_6072.jpeg", description: "The wise green friend with 
endless stories" },
              { name: "Sam", image: "/assets/IMG_6073(1).jpeg", description: "The adventurous girl with 
blonde hair and big dreams" }
            ].map((character, index) => (
              <div key={index} className={`${themeClasses.cardBg} rounded-xl p-6 border text-center`}>
                <Image
                  src={character.image}
                  alt={character.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className={`text-lg font-bold mb-2 ${themeClasses.text}`}>{character.name}</h3>
                <p className={`text-sm ${themeClasses.text} opacity-80`}>{character.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comic Showcase */}
        <section>
          <h2 className={`text-2xl font-bold mb-8 text-center ${themeClasses.text}`}>
            Comic Showcase
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { image: "/assets/top_panel_colorized.png", title: "The Talent Show" },
              { image: "/assets/corrected_comic_panel.jpeg", title: "Robot Encounter" },
              { image: "/assets/IMG_3747.jpeg", title: "Jeffree's Expression" }
            ].map((comic, index) => (
              <div key={index} className={`${themeClasses.cardBg} rounded-xl p-4 border`}>
                <Image
                  src={comic.image}
                  alt={comic.title}
                  width={300}
                  height={200}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h3 className={`text-lg font-bold text-center ${themeClasses.text}`}>{comic.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )

  const renderShop = () => (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 text-center ${themeClasses.text}`}>
          Shop Merchandise
        </h1>
        <div className="text-center mb-12">
          <p className={`text-lg ${themeClasses.text} opacity-90`}>
            Bring your favorite characters home with our exclusive merchandise collection.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Jeffree T-Shirt",
              description: "Comfortable cotton tee featuring Jeffree the Monster",
              price: "$24.99",
              image: "/assets/IMG_3672(2).jpeg"
            },
            {
              title: "Character Sticker Pack",
              description: "Set of 6 vinyl stickers with all main characters",
              price: "$9.99",
              image: "/assets/Barry.jpeg"
            },
            {
              title: "Comic Print Set",
              description: "High-quality prints of featured comic panels",
              price: "$19.99",
              image: "/assets/top_panel_colorized.png"
            }
          ].map((product, index) => (
            <div key={index} className={`${themeClasses.cardBg} rounded-xl p-6 border`}>
              <Image
                src={product.image}
                alt={product.title}
                width={250}
                height={200}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className={`text-xl font-bold mb-2 ${themeClasses.text}`}>{product.title}</h3>
              <p className={`${themeClasses.text} opacity-80 mb-4`}>{product.description}</p>
              <div className="flex justify-between items-center">
                <span className={`text-lg font-bold ${themeClasses.text}`}>{product.price}</span>
                <button className={`px-4 py-2 rounded-lg font-semibold transition-all 
${themeClasses.buttonPrimary}`}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className={`min-h-screen ${themeClasses.background} transition-colors duration-300`}>
      {renderNavigation()}
      
      {activeSection === 'home' && renderHome()}
      {activeSection === 'about' && renderAbout()}
      {activeSection === 'jeffree' && renderJeffree()}
      {activeSection === 'shop' && renderShop()}
    </div>
  )
}
