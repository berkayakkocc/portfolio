import api from './api';

export interface Skill {
  id: number;
  name: string;
  level?: string;
  category?: string;
  order?: number;
  isActive: boolean;
  createdDate: string;
}

export const skillService = {
  // Get all skills
  getSkills: async (): Promise<Skill[]> => {
    const response = await api.get('/skills');
    return response.data;
  },

  // Get active skills
  getActiveSkills: async (): Promise<Skill[]> => {
    const response = await api.get('/skills/active');
    return response.data;
  },

  // Get skills by category
  getSkillsByCategory: async (category: string): Promise<Skill[]> => {
    const response = await api.get(`/skills/category/${category}`);
    return response.data;
  },

  // Create skill (Admin only)
  createSkill: async (skill: Omit<Skill, 'id' | 'createdDate' | 'isActive'>): Promise<Skill> => {
    const response = await api.post('/skills', skill);
    return response.data;
  },

  // Update skill (Admin only)
  updateSkill: async (id: number, skill: Partial<Skill>): Promise<void> => {
    await api.put(`/skills/${id}`, skill);
  },

  // Delete skill (Admin only)
  deleteSkill: async (id: number): Promise<void> => {
    await api.delete(`/skills/${id}`);
  },
};
