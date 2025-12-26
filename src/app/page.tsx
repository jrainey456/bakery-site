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
import RecipeCard from '../components/RecipeCard';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const menuItems = [
    {
      image: croissantImage,
      imageAlt: "Fresh Butter Croissants",
      title: "Fresh Butter Croissants",
      description: "Delicately flaky, golden pastries crafted with the finest European butter. Each croissant is lovingly hand-rolled and baked to heavenly perfection, creating silky layers of buttery bliss that simply melt on your tongue.",
      price: "$3.50 each",
      borderColor: "border-amber-200",
      hoverBorderColor: "hover:border-amber-300",
      rotation: "rotate-3"
    },
    {
      image: sourdoughImage,
      imageAlt: "Artisan Sourdough Bread",
      title: "Artisan Sourdough Bread",
      description: "Our treasured sourdough features a beautifully crisp crust and delightfully tangy, tender interior. Lovingly crafted with our cherished 20-year-old starter and patiently fermented for 24 graceful hours.",
      price: "$6.95 per loaf",
      borderColor: "border-teal-300",
      hoverBorderColor: "hover:border-teal-400",
      rotation: "-rotate-2"
    },
    {
      image: muffinsImage,
      imageAlt: "Double Chocolate Muffins",
      title: "Double Chocolate Muffins",
      description: "Luxuriously moist and tender muffins adorned with Belgian dark chocolate chips and velvety cocoa. Crafted with farm-fresh organic eggs and pure vanilla extract for the most divine indulgence.",
      price: "$4.25 each",
      borderColor: "border-purple-300",
      hoverBorderColor: "hover:border-purple-400",
      rotation: "rotate-3"
    },
    {
      image: pastriesImage,
      imageAlt: "Fruit Danish Pastries",
      title: "Fruit Danish Pastries",
      description: "Gracefully delicate puff pastry filled with luscious seasonal fruits and silky cream cheese. Choose from enchanting cherry, spiced apple cinnamon, or dreamy mixed berry varieties.",
      price: "$3.95 each",
      borderColor: "border-pink-300",
      hoverBorderColor: "hover:border-pink-400",
      rotation: "-rotate-3"
    },
    {
      image: cinnamonRollsImage,
      imageAlt: "Classic Cinnamon Rolls",
      title: "Classic Cinnamon Rolls",
      description: "Heavenly soft and fluffy rolls elegantly swirled with aromatic cinnamon sugar and crowned with our divine signature cream cheese glaze. Lovingly baked fresh every two hours.",
      price: "$4.75 each",
      borderColor: "border-orange-300",
      hoverBorderColor: "hover:border-orange-400",
      rotation: "rotate-2"
    },
    {
      image: applePieImage,
      imageAlt: "Traditional Apple Pie",
      title: "Traditional Apple Pie",
      description: "Lovingly crafted with locally sourced Granny Smith apples, delicate warm spices, and our celebrated flaky pie crust. Elegantly served with a generous scoop of creamy vanilla ice cream.",
      price: "$18.50 whole pie",
      borderColor: "border-emerald-300",
      hoverBorderColor: "hover:border-emerald-400",
      rotation: "-rotate-2"
    }
  ];

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
                className="w-11 h-11 object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
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
        className="flex min-h-screen items-center justify-center relative pt-16 sm:pt-20"
        style={{
          backgroundImage: `url(${storeFrontImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <header className="text-center relative z-10 flex flex-col items-center justify-center w-full">
          <div className="">
            <img 
                src={bakeryLogo.src} 
                alt="Bakery Logo" 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 object-contain mx-auto"
              />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white pb-8" style={{fontFamily: 'var(--font-dancing-script)', textShadow: '4px 4px 8px rgba(0,0,0,0.9)'}}>
                Rise and Shine Bakery
              </h1>
          </div>
        </header>
      </div>

      {/* Menu Section */}
      <div id="menu" className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-amber-900 mb-16 text-center" style={{fontFamily: 'var(--font-dancing-script)'}}>
            Menu
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <RecipeCard
                key={index}
                image={item.image}
                imageAlt={item.imageAlt}
                title={item.title}
                description={item.description}
                price={item.price}
                borderColor={item.borderColor}
                hoverBorderColor={item.hoverBorderColor}
                rotation={item.rotation}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Contact Us Section */}
      <div id="contact" className="min-h-screen bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center py-16">
        <div className="max-w-2xl mx-auto px-6 w-full">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-amber-900 mb-12 text-center" style={{fontFamily: 'var(--font-dancing-script)'}}>
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
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-900 mb-6" style={{fontFamily: 'var(--font-dancing-script)'}}>
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
