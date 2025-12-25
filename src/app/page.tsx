'use client';

import storeFrontImage from '../assets/img/store_front.jpg';
import bakeryLogo from '../assets/img/bakeryLogo.png';
import croissantImage from '../assets/img/croissant .jpg';
import sourdoughImage from '../assets/img/sourdoughBread.jpg';
import muffinsImage from '../assets/img/muffins.jpg';
import pastriesImage from '../assets/img/pastries.jpg';
import cinnamonRollsImage from '../assets/img/cinnamonRolls.jpg';
import applePieImage from '../assets/img/applePie.jpg';
import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 60; // Offset to account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };
  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-100 bg-opacity-90 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-1">
          <div className="flex items-center justify-center gap-4">
            {/* Menu Button */}
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-orange-700 hover:underline transition-all duration-300 text-lg" 
              style={{fontFamily: 'var(--font-dancing-script)'}}
            >
              Menu
            </button>
            
            {/* Logo */}
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src={bakeryLogo.src} 
                alt="Bakery Logo" 
                className="w-14 h-14 object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </button>
            
            {/* Contact Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-orange-700 hover:underline transition-all duration-300 text-lg" 
              style={{fontFamily: 'var(--font-dancing-script)'}}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Storefront Background */}
      <div 
        className="flex min-h-screen items-center justify-center relative"
        style={{
          backgroundImage: `url(${storeFrontImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <header className="text-center relative z-10 flex flex-col items-center justify-center w-full">
          <div className="mb-0.5">
            <img 
              src={bakeryLogo.src} 
              alt="Bakery Logo" 
              className="w-96 h-96 object-contain mx-auto"
            />
          </div>
          <div className="mb-4">
            <h1 className="text-8xl font-bold text-white" style={{fontFamily: 'var(--font-dancing-script)', textShadow: '4px 4px 8px rgba(0,0,0,0.9)'}}>
              Rise and Shine Bakery
            </h1>
          </div>
          <p className="text-2xl text-white font-medium" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)'}}>
            Where Every Bite is Baked with Love
          </p>
        </header>
      </div>

      {/* Menu Section */}
      <div id="menu" className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-7xl font-bold text-amber-900 mb-16 text-center" style={{fontFamily: 'var(--font-dancing-script)'}}>
            Menu
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Croissant Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-amber-200 overflow-hidden h-[520px] flex flex-col hover:shadow-3xl hover:scale-105 transition-all duration-300 hover:border-amber-300">
              <div className="h-48 m-1 rounded-xl overflow-hidden">
                <img 
                  src={croissantImage.src}
                  alt="Fresh Butter Croissants"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 pt-2 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-3xl font-bold text-amber-900 mb-4 text-center" style={{fontFamily: 'var(--font-dancing-script)'}}>
                    Fresh Butter Croissants
                  </h3>
                  <p className="text-amber-800 text-base leading-relaxed text-center mb-4">
                    Flaky, golden pastries made with premium European butter. Each croissant is hand-rolled and baked to perfection, 
                    creating layers of buttery goodness that melt in your mouth.
                  </p>
                </div>
                <div className="text-center mt-auto">
                  <span className="inline-block bg-amber-200 text-amber-900 font-bold text-xl px-4 py-2 rounded-full">
                    $3.50 each
                  </span>
                </div>
              </div>
            </div>

            {/* Artisan Bread Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-teal-300 overflow-hidden h-[520px] flex flex-col hover:shadow-3xl hover:scale-105 transition-all duration-300 hover:border-teal-400">
              <div className="h-48 m-1 rounded-xl overflow-hidden">
                <img 
                  src={sourdoughImage.src}
                  alt="Artisan Sourdough Bread"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 pt-2 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-3xl font-bold text-teal-900 mb-4 text-center" style={{fontFamily: 'var(--font-dancing-script)'}}>
                    Artisan Sourdough Bread
                  </h3>
                  <p className="text-teal-800 text-base leading-relaxed text-center mb-4">
                    Our signature sourdough features a crispy crust and tangy, chewy interior. Made with our 20-year-old starter 
                    and slowly fermented for 24 hours.
                  </p>
                </div>
                <div className="text-center mt-auto">
                  <span className="inline-block bg-teal-200 text-teal-900 font-bold text-xl px-4 py-2 rounded-full">
                    $6.95 per loaf
                  </span>
                </div>
              </div>
            </div>

            {/* Chocolate Muffins Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-purple-300 overflow-hidden h-[520px] flex flex-col hover:shadow-3xl hover:scale-105 transition-all duration-300 hover:border-purple-400">
              <div className="h-48 m-1 rounded-xl overflow-hidden">
                <img 
                  src={muffinsImage.src}
                  alt="Double Chocolate Muffins"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 pt-2 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-3xl font-bold text-purple-900 mb-4 text-center" style={{fontFamily: 'var(--font-dancing-script)'}}>
                    Double Chocolate Muffins
                  </h3>
                  <p className="text-purple-800 text-base leading-relaxed text-center mb-4">
                    Rich, moist muffins loaded with Belgian dark chocolate chips and cocoa. Made with organic eggs and real vanilla extract for the ultimate indulgence.
                  </p>
                </div>
                <div className="text-center mt-auto">
                  <span className="inline-block bg-purple-200 text-purple-900 font-bold text-xl px-4 py-2 rounded-full">
                    $4.25 each
                  </span>
                </div>
              </div>
            </div>

            {/* Danish Pastries Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-pink-300 overflow-hidden h-[520px] flex flex-col hover:shadow-3xl hover:scale-105 transition-all duration-300 hover:border-pink-400">
              <div className="h-48 m-1 rounded-xl overflow-hidden">
                <img 
                  src={pastriesImage.src}
                  alt="Fruit Danish Pastries"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 pt-2 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-3xl font-bold text-pink-900 mb-4 text-center" style={{fontFamily: 'var(--font-dancing-script)'}}>
                    Fruit Danish Pastries
                  </h3>
                  <p className="text-pink-800 text-base leading-relaxed text-center mb-4">
                    Delicate puff pastry filled with seasonal fruits and cream cheese. Choose from cherry, apple cinnamon, or mixed berry varieties.
                  </p>
                </div>
                <div className="text-center mt-auto">
                  <span className="inline-block bg-pink-200 text-pink-900 font-bold text-xl px-4 py-2 rounded-full">
                    $3.95 each
                  </span>
                </div>
              </div>
            </div>

            {/* Cinnamon Rolls Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-orange-300 overflow-hidden h-[520px] flex flex-col hover:shadow-3xl hover:scale-105 transition-all duration-300 hover:border-orange-400">
              <div className="h-48 m-1 rounded-xl overflow-hidden">
                <img 
                  src={cinnamonRollsImage.src}
                  alt="Classic Cinnamon Rolls"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 pt-2 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-3xl font-bold text-orange-900 mb-4 text-center" style={{fontFamily: 'var(--font-dancing-script)'}}>
                    Classic Cinnamon Rolls
                  </h3>
                  <p className="text-orange-800 text-base leading-relaxed text-center mb-4">
                    Warm, fluffy rolls swirled with cinnamon sugar and topped with our signature cream cheese glaze. Baked fresh every two hours.
                  </p>
                </div>
                <div className="text-center mt-auto">
                  <span className="inline-block bg-orange-200 text-orange-900 font-bold text-xl px-4 py-2 rounded-full">
                    $4.75 each
                  </span>
                </div>
              </div>
            </div>

            {/* Apple Pie Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-emerald-300 overflow-hidden h-[520px] flex flex-col hover:shadow-3xl hover:scale-105 transition-all duration-300 hover:border-emerald-400">
              <div className="h-48 m-1 rounded-xl overflow-hidden">
                <img 
                  src={applePieImage.src}
                  alt="Traditional Apple Pie"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 pt-2 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-3xl font-bold text-emerald-900 mb-4 text-center" style={{fontFamily: 'var(--font-dancing-script)'}}>
                    Traditional Apple Pie
                  </h3>
                  <p className="text-emerald-800 text-base leading-relaxed text-center mb-4">
                    Made with locally sourced Granny Smith apples, warm spices, and our famous flaky pie crust. Served with a scoop of vanilla ice cream.
                  </p>
                </div>
                <div className="text-center mt-auto">
                  <span className="inline-block bg-emerald-200 text-emerald-900 font-bold text-xl px-4 py-2 rounded-full">
                    $18.50 whole pie
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Us Section */}
      <div id="contact" className="min-h-screen bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center py-16">
        <div className="max-w-2xl mx-auto px-6 w-full">
          <h2 className="text-7xl font-bold text-amber-900 mb-12 text-center" style={{fontFamily: 'var(--font-dancing-script)'}}>
            Contact Us
          </h2>
          
          <div className="bg-white rounded-2xl p-12 shadow-2xl border border-amber-200">
            <form className="space-y-6" onSubmit={handleSendMessage}>
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-amber-900 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-amber-400 text-gray-900"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-amber-900 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-amber-400 text-gray-900"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-amber-900 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none placeholder-amber-400 text-gray-900"
                  placeholder="Tell us about your inquiry, special orders, or feedback..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xl px-12 py-4 rounded-full transition-colors duration-300 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-12 mx-4 max-w-md w-full shadow-2xl border border-amber-200">
            <div className="text-center">
              <h2 className="text-6xl font-bold text-amber-900 mb-6" style={{fontFamily: 'var(--font-dancing-script)'}}>
                Sorry!
              </h2>
              <div className="text-xl text-amber-800">
                This isn't a real place!
              </div>
              <div className="text-sm text-amber-800 mb-8" >
                 (We are sure it would have been delicious though)
              </div>
              <div>
               
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg px-8 py-3 rounded-full transition-colors duration-300 shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
