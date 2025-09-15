import React, { useState, useEffect } from 'react';
import { aboutService, type About as AboutType } from '../services/aboutService';

const About: React.FC = () => {
  const [about, setAbout] = useState<AboutType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const aboutData = await aboutService.getAbout();
        console.log('About data:', aboutData);
        setAbout(aboutData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {about?.title || 'Hakkımda'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            {/* About Content */}
            <div className="space-y-8">
              <p className="text-xl text-gray-600 leading-relaxed">
                {about?.content || 'Yükleniyor...'}
              </p>

              {/* Experience & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {about?.experience || 'Yükleniyor...'}
                  </div>
                  <div className="text-gray-600 font-medium">Deneyim</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {about?.location || 'Yükleniyor...'}
                  </div>
                  <div className="text-gray-600 font-medium">Konum</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="pt-8 space-y-4">
                <div className="flex items-center justify-center text-gray-600">
                  <svg className="w-6 h-6 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-lg">{about?.email || 'Yükleniyor...'}</span>
                </div>
                <div className="flex items-center justify-center text-gray-600">
                  <svg className="w-6 h-6 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-lg">{about?.phone || 'Yükleniyor...'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
