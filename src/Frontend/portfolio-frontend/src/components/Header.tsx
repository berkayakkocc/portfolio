import React, { useState, useEffect } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Ana Sayfa', href: '#home', section: 'home' },
    { name: 'Hakkımda', href: '#about', section: 'about' },
    { name: 'Projeler', href: '#projects', section: 'projects' },
    { name: 'Yetenekler', href: '#skills', section: 'skills' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    
    // Hash'i güncelle
    window.location.hash = section;
    
    const element = document.getElementById(section);
    if (element) {
      const headerHeight = 64; // Header yüksekliği
      const elementPosition = element.offsetTop - headerHeight;
      
      // Scroll işlemini başlat
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-gray-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-md shadow-2xl border-b border-white/10'
          : 'bg-transparent'
      }`}
      style={{
        minHeight: '64px',
        maxHeight: '64px',
        height: '64px'
      }}
    >
      <nav className="w-full py-2 h-full">
        <div className="flex items-center justify-between h-full px-4">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-xl sm:text-2xl font-bold gradient-text whitespace-nowrap"
            style={{ minWidth: '120px' }}
          >
            Portfolio
          </a>

          {/* Desktop Navigation - 60px sola kaydırılmış */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8" style={{ marginRight: '60px' }}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.section)}
                className={`relative transition-all duration-500 font-medium group whitespace-nowrap rounded-xl border ${
                  activeSection === item.section
                    ? 'text-white border-white/20 bg-gradient-to-r from-blue-500/15 to-purple-500/15 backdrop-blur-sm shadow-lg'
                    : 'text-white border-transparent hover:border-white/15 hover:bg-gradient-to-r hover:from-blue-400/8 hover:to-purple-400/8 hover:text-blue-200 hover:shadow-md'
                }`}
                style={{ 
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  padding: '10px 16px'
                }}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  activeSection === item.section
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ minWidth: '40px', minHeight: '40px' }}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md px-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.section);
                    setIsMenuOpen(false);
                  }}
                  className={`transition-colors duration-300 font-medium py-3 px-4 rounded-lg whitespace-nowrap ${
                    activeSection === item.section
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  style={{ fontSize: 'clamp(0.875rem, 4vw, 1rem)' }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
