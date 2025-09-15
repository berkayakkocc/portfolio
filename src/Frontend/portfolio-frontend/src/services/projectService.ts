import api from './api';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies?: string;
  createdDate: string;
  updatedDate?: string;
  isActive: boolean;
}

export const projectService = {
  // Get all active projects
  getProjects: async (): Promise<Project[]> => {
    const response = await api.get('/projects');
    return response.data;
  },

  // Get project by ID
  getProject: async (id: number): Promise<Project> => {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  },

  // Create new project (Admin only)
  createProject: async (project: Omit<Project, 'id' | 'createdDate' | 'isActive'>): Promise<Project> => {
    const response = await api.post('/projects', project);
    return response.data;
  },

  // Update project (Admin only)
  updateProject: async (id: number, project: Partial<Project>): Promise<void> => {
    await api.put(`/projects/${id}`, project);
  },

  // Delete project (Admin only)
  deleteProject: async (id: number): Promise<void> => {
    await api.delete(`/projects/${id}`);
  },
};
