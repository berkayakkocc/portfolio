import React, { useState, useEffect } from 'react';
import { projectService, type Project, getProjectImageUrl } from '../services/projectService';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectService.getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback data
        setProjects([
          {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'Modern e-ticaret platformu. React, Node.js ve MongoDB kullanılarak geliştirildi. Ödeme entegrasyonu, kullanıcı yönetimi ve admin paneli içerir.',
            imageUrl: 'ecommerce-platform.jpg',
            githubUrl: 'https://github.com/example/ecommerce',
            liveUrl: 'https://ecommerce.example.com',
            technologies: '["React", "Node.js", "MongoDB", "Stripe"]',
            createdDate: new Date().toISOString(),
            isActive: true
          },
          {
            id: 2,
            title: 'Task Management App',
            description: 'Takım çalışması için geliştirilmiş görev yönetim uygulaması. Gerçek zamanlı güncellemeler ve detaylı raporlama özellikleri.',
            imageUrl: 'task-management.jpg',
            githubUrl: 'https://github.com/example/taskmanager',
            liveUrl: 'https://tasks.example.com',
            technologies: '["React", "TypeScript", "Socket.io", "PostgreSQL"]',
            createdDate: new Date().toISOString(),
            isActive: true
          },
          {
            id: 3,
            title: 'Portfolio Website',
            description: 'Kişisel portfolio web sitesi. Modern tasarım ve responsive yapı ile geliştirildi. Admin paneli ile içerik yönetimi mümkün.',
            imageUrl: 'portfolio-website.jpg',
            githubUrl: 'https://github.com/example/portfolio',
            liveUrl: 'https://portfolio.example.com',
            technologies: '["React", "TypeScript", "Tailwind CSS", ".NET Core"]',
            createdDate: new Date().toISOString(),
            isActive: true
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="bg-gray-50" style={{ paddingTop: '70px', paddingBottom: '70px' }}>
      <div className="container mx-auto px-4">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="text-center">
          {/* Section Header */}
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 leading-tight" style={{ lineHeight: '1.2', paddingBottom: '8px' }}>
              Projelerim
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ justifyContent: 'center' }}>
            {projects.map((project) => {
              const technologies = project.technologies ? JSON.parse(project.technologies) : [];
              
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 group min-h-[500px] flex flex-col"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={getProjectImageUrl(project.imageUrl)}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback görsel yükleme hatası durumunda
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/projects/default-project.jpg';
                      }}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-grow space-y-3" style={{ textAlign: 'center' }}>
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2" style={{ justifyContent: 'center', marginBottom: '20px' }}>
                      {technologies.slice(0, 3).map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                          +{technologies.length - 3} more
                        </span>
                      )}
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

export default Projects;
