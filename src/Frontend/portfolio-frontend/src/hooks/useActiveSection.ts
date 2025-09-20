import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'skills'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Header yüksekliği + margin
      
      let currentSection = 'home';
      
      // Her bölümü kontrol et
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          // Eğer scroll pozisyonu bölümün içindeyse
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section;
            break;
          }
          // Eğer scroll pozisyonu bölümün başlangıcından büyükse
          else if (scrollPosition >= offsetTop) {
            currentSection = section;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (sections.includes(hash)) {
        setActiveSection(hash);
      }
    };

    // İlk yüklemede kontrol et
    handleScroll();
    handleHashChange();

    // Event listener'ları ekle
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return activeSection;
};
