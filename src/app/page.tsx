import storeFrontImage from '../assets/img/store_front.jpg';
import bakeryLogo from '../assets/img/bakeryLogo.png';

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-100 bg-opacity-90 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-1">
          <div className="flex items-center justify-center gap-4">
            {/* Menu Button */}
            <button className="text-orange-700 hover:underline transition-all duration-300 text-lg" style={{fontFamily: 'var(--font-dancing-script)'}}>
              Menu
            </button>
            
            {/* Logo */}
            <img 
              src={bakeryLogo.src} 
              alt="Bakery Logo" 
              className="w-14 h-14 object-contain"
            />
            
            {/* Contact Button */}
            <button className="text-orange-700 hover:underline transition-all duration-300 text-lg" style={{fontFamily: 'var(--font-dancing-script)'}}>
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
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-7xl font-bold text-amber-900 mb-16 text-center" style={{fontFamily: 'var(--font-dancing-script)'}}>
            Menu
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Croissant Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-amber-200 overflow-hidden">
              <div className="w-full h-48 bg-amber-100 flex items-center justify-center border-2 border-dashed border-amber-300 m-1 rounded-xl">
                <span className="text-amber-600 font-semibold">Croissant Image</span>
              </div>
              <div className="p-8 pt-2">
                <h3 className="text-3xl font-bold text-amber-900 mb-4 text-center" style={{fontFamily: 'var(--font-dancing-script)'}}>
                  Fresh Butter Croissants
                </h3>
              <p className="text-amber-800 text-base leading-relaxed text-center mb-4">
                Flaky, golden pastries made with premium European butter. Each croissant is hand-rolled and baked to perfection, 
                creating layers of buttery goodness that melt in your mouth.
              </p>
              <div className="text-center">
                <span className="inline-block bg-amber-200 text-amber-900 font-bold text-xl px-4 py-2 rounded-full">
                  $3.50 each
                </span>
              </div>
              </div>
            </div>

            {/* Artisan Bread Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-orange-200 overflow-hidden">
              <div className="w-full h-48 bg-orange-100 flex items-center justify-center border-2 border-dashed border-orange-300 m-1 rounded-xl">
                <span className="text-orange-600 font-semibold">Sourdough Image</span>
              </div>
              <div className="p-8 pt-2">
                <h3 className="text-3xl font-bold text-orange-900 mb-4 text-center" style={{fontFamily: 'var(--font-dancing-script)'}}>
                  Artisan Sourdough Bread
                </h3>
              <p className="text-orange-800 text-base leading-relaxed text-center mb-4">
                Our signature sourdough features a crispy crust and tangy, chewy interior. Made with our 20-year-old starter 
                and slowly fermented for 24 hours.
              </p>
              <div className="text-center">
                <span className="inline-block bg-orange-200 text-orange-900 font-bold text-xl px-4 py-2 rounded-full">
                  $6.95 per loaf
                </span>
              </div>
              </div>
            </div>

            {/* Chocolate Muffins Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-yellow-200 overflow-hidden">
              <div className="w-full h-48 bg-yellow-100 flex items-center justify-center border-2 border-dashed border-yellow-300 m-1 rounded-xl">
                <span className="text-yellow-600 font-semibold">Muffin Image</span>
              </div>
              <div className="p-8 pt-2">
                <h3 className="text-3xl font-bold text-yellow-900 mb-4 text-center" style={{fontFamily: 'var(--font-dancing-script)'}}>
                  Double Chocolate Muffins
                </h3>
              <p className="text-yellow-800 text-base leading-relaxed text-center mb-4">
                Rich, moist muffins loaded with Belgian dark chocolate chips and cocoa. Made with organic eggs and real vanilla extract for the ultimate indulgence.
              </p>
              <div className="text-center">
                <span className="inline-block bg-yellow-200 text-yellow-900 font-bold text-xl px-4 py-2 rounded-full">
                  $4.25 each
                </span>
              </div>
              </div>
            </div>

            {/* Danish Pastries Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-red-200 overflow-hidden">
              <div className="w-full h-48 bg-red-100 flex items-center justify-center border-2 border-dashed border-red-300 m-1 rounded-xl">
                <span className="text-red-600 font-semibold">Danish Image</span>
              </div>
              <div className="p-8 pt-2">
                <h3 className="text-3xl font-bold text-red-900 mb-4 text-center" style={{fontFamily: 'var(--font-dancing-script)'}}>
                  Fruit Danish Pastries
                </h3>
              <p className="text-red-800 text-base leading-relaxed text-center mb-4">
                Delicate puff pastry filled with seasonal fruits and cream cheese. Choose from cherry, apple cinnamon, or mixed berry varieties.
              </p>
              <div className="text-center">
                <span className="inline-block bg-red-200 text-red-900 font-bold text-xl px-4 py-2 rounded-full">
                  $3.95 each
                </span>
              </div>
              </div>
            </div>

            {/* Cinnamon Rolls Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-rose-200 overflow-hidden">
              <div className="w-full h-48 bg-rose-100 flex items-center justify-center border-2 border-dashed border-rose-300 m-1 rounded-xl">
                <span className="text-rose-600 font-semibold">Cinnamon Roll Image</span>
              </div>
              <div className="p-8 pt-2">
                <h3 className="text-3xl font-bold text-rose-900 mb-4 text-center" style={{fontFamily: 'var(--font-dancing-script)'}}>
                  Classic Cinnamon Rolls
                </h3>
              <p className="text-rose-800 text-base leading-relaxed text-center mb-4">
                Warm, fluffy rolls swirled with cinnamon sugar and topped with our signature cream cheese glaze. Baked fresh every two hours.
              </p>
              <div className="text-center">
                <span className="inline-block bg-rose-200 text-rose-900 font-bold text-xl px-4 py-2 rounded-full">
                  $4.75 each
                </span>
              </div>
              </div>
            </div>

            {/* Apple Pie Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-green-200 overflow-hidden">
              <div className="w-full h-48 bg-green-100 flex items-center justify-center border-2 border-dashed border-green-300 m-1 rounded-xl">
                <span className="text-green-600 font-semibold">Apple Pie Image</span>
              </div>
              <div className="p-8 pt-2">
                <h3 className="text-3xl font-bold text-green-900 mb-4 text-center" style={{fontFamily: 'var(--font-dancing-script)'}}>
                  Traditional Apple Pie
                </h3>
              <p className="text-green-800 text-base leading-relaxed text-center mb-4">
                Made with locally sourced Granny Smith apples, warm spices, and our famous flaky pie crust. Served with a scoop of vanilla ice cream.
              </p>
              <div className="text-center">
                <span className="inline-block bg-green-200 text-green-900 font-bold text-xl px-4 py-2 rounded-full">
                  $18.50 whole pie
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Us Section */}
      <div className="min-h-screen bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center py-16">
        <div className="max-w-2xl mx-auto px-6 w-full">
          <h2 className="text-7xl font-bold text-amber-900 mb-12 text-center" style={{fontFamily: 'var(--font-dancing-script)'}}>
            Contact Us
          </h2>
          
          <div className="bg-white rounded-2xl p-12 shadow-2xl border border-amber-200">
            <form className="space-y-6">
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
    </>
  );
}
