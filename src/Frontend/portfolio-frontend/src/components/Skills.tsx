import React, { useState, useEffect } from 'react';
import { skillService, type Skill } from '../services/skillService';

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await skillService.getActiveSkills();
        setSkills(data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-50 rounded-xl shadow-md animate-pulse min-h-[200px] overflow-hidden">
                <div className="h-1 bg-gray-300 w-full"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded mb-4 w-24"></div>
                  <div className="flex flex-wrap gap-2">
                    <div className="h-8 bg-gray-200 rounded-full w-16"></div>
                    <div className="h-8 bg-gray-200 rounded-full w-20"></div>
                    <div className="h-8 bg-gray-200 rounded-full w-14"></div>
                    <div className="h-8 bg-gray-200 rounded-full w-18"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc[skill.category || 'Other']) {
      acc[skill.category || 'Other'] = [];
    }
    acc[skill.category || 'Other'].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Kategori renklerini belirle
  const getCategoryColors = (category: string) => {
    const colorMap: Record<string, { accent: string; background: string; dot: string }> = {
      'Backend': { accent: 'bg-blue-500', background: 'bg-blue-50', dot: 'bg-blue-500' },
      'Frontend': { accent: 'bg-teal-500', background: 'bg-teal-50', dot: 'bg-teal-500' },
      'Database': { accent: 'bg-pink-500', background: 'bg-pink-50', dot: 'bg-pink-500' },
      'Cloud': { accent: 'bg-purple-500', background: 'bg-purple-50', dot: 'bg-purple-500' },
      'Tools': { accent: 'bg-orange-500', background: 'bg-yellow-50', dot: 'bg-orange-500' },
      'Methodology': { accent: 'bg-green-500', background: 'bg-green-50', dot: 'bg-green-500' },
      'Other': { accent: 'bg-gray-500', background: 'bg-gray-50', dot: 'bg-gray-500' }
    };
    
    return colorMap[category] || colorMap['Other'];
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-white mt-16 md:mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Yeteneklerim
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillCategories).map(([category, categorySkills]) => {
              const colors = getCategoryColors(category);
              
              return (
                <div 
                  key={category}
                  className={`${colors.background} rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group min-h-[200px] overflow-hidden`}
                >
                  {/* Accent Bar */}
                  <div className={`${colors.accent} h-1 w-full`}></div>
                  
                  {/* Card Content */}
                  <div className="p-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center group-hover:text-blue-600 transition-colors duration-300">
                      <div className={`w-3 h-3 ${colors.dot} rounded-full mr-3 group-hover:scale-110 transition-transform duration-300`}></div>
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => (
                        <span
                          key={skill.id}
                          className="inline-flex px-3 py-2 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 transition-all duration-200 cursor-default shadow-sm"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
