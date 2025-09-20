import React, { useState, useEffect } from 'react';
import { aboutService, type About } from '../services/aboutService';

const Hero: React.FC = () => {
  const [about, setAbout] = useState<About | null>(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const aboutData = await aboutService.getAbout();
        setAbout(aboutData);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchAbout();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-12" style={{ textAlign: 'center' }}>
          {/* Profile Image - Logo tam ortada */}
          <div className="flex flex-col items-center justify-center" style={{ marginTop: '35px' }}>
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold animate-float shadow-2xl">
              B
            </div>
          </div>

          {/* Main Content - Metin içeriği */}
          <div className="space-y-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight animate-fade-in-up">
              Merhaba, Ben{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {about?.title || 'Yükleniyor...'}
              </span>
            </h1>
            
            {/* Experience Badge */}
            <div className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s', marginTop: '25px' }}>
              <span className="inline-flex items-center rounded-full text-lg font-semibold bg-blue-900/30 text-blue-300 border border-blue-600/50 shadow-sm backdrop-blur-sm" style={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
                {about?.experience || 'Yükleniyor...'} Deneyimli .NET Developer
              </span>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-3xl mx-auto text-center animate-fade-in-up" style={{ animationDelay: '0.4s', marginTop: '25px' }}>
              {about?.content || 'Yükleniyor...'}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s', marginTop: '25px' }}>
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-xl font-semibold text-lg sm:text-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 min-w-[240px] sm:min-w-[280px]"
              style={{ paddingTop: '10px', paddingBottom: '10px' }}
            >
              Projelerimi İncele
            </a>
            <a
              href="#about"
              className="border-2 border-blue-600 text-blue-600 px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-xl font-semibold text-lg sm:text-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 min-w-[240px] sm:min-w-[280px]"
              style={{ paddingTop: '10px', paddingBottom: '10px' }}
            >
              Hakkımda Daha Fazla
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-8 animate-bounce">
            <a href="#about" className="inline-block">
              <div className="w-8 h-12 border-2 border-gray-500 rounded-full flex justify-center hover:border-blue-400 transition-colors duration-300">
                <div className="w-1 h-4 bg-gray-500 rounded-full mt-3 animate-pulse hover:bg-blue-400 transition-colors duration-300"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
