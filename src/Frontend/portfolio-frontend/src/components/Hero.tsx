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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 pb-16 md:pb-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="mb-12">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl font-bold animate-float shadow-2xl">
              {about?.title ? about.title.charAt(0) : 'B'}
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 leading-tight animate-fade-in-up">
              Merhaba, Ben{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {about?.title || 'Yükleniyor...'}
              </span>
            </h1>
            
            {/* Experience Badge */}
            <div className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold bg-blue-100 text-blue-800 border border-blue-200 shadow-sm">
                {about?.experience || 'Yükleniyor...'} Deneyimli .NET Developer
              </span>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {about?.content || 'Yükleniyor...'}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
            >
              Projelerimi İncele
            </a>
            <a
              href="#about"
              className="border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            >
              Hakkımda Daha Fazla
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <a href="#about" className="inline-block">
              <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center hover:border-blue-500 transition-colors duration-300">
                <div className="w-1 h-4 bg-gray-400 rounded-full mt-3 animate-pulse hover:bg-blue-500 transition-colors duration-300"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
