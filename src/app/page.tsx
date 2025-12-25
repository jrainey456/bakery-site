import storeFrontImage from '../assets/img/store_front.jpg';

export default function Home() {
  return (
    <div 
      className="flex min-h-screen items-center justify-center relative"
      style={{
        backgroundImage: `url(${storeFrontImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <header className="text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <svg width="80" height="60" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="45" rx="45" ry="25" fill="#D2691E" stroke="#8B4513" strokeWidth="2"/>
            <ellipse cx="50" cy="40" rx="40" ry="20" fill="#DEB887"/>
            <path d="M15 45 Q25 35 35 45" stroke="#8B4513" strokeWidth="1.5" fill="none"/>
            <path d="M30 45 Q40 35 50 45" stroke="#8B4513" strokeWidth="1.5" fill="none"/>
            <path d="M45 45 Q55 35 65 45" stroke="#8B4513" strokeWidth="1.5" fill="none"/>
            <path d="M60 45 Q70 35 80 45" stroke="#8B4513" strokeWidth="1.5" fill="none"/>
          </svg>
          <h1 className="text-6xl font-bold text-white" style={{fontFamily: 'var(--font-dancing-script)', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
            Rise and Shine Bakery
          </h1>
        </div>
        <p className="text-xl text-white font-medium" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
          Where Every Bite is Baked with Love
        </p>
      </header>
    </div>
  );
}
