import api from './api';

export interface About {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
  skills?: string;
  experience?: string;
  location?: string;
  email?: string;
  phone?: string;
  createdDate: string;
  updatedDate?: string;
}

export const aboutService = {
  // Get about information
  getAbout: async (): Promise<About> => {
    const response = await api.get('/about');
    return response.data;
  },

  // Update about information (Admin only)
  updateAbout: async (about: Partial<About>): Promise<void> => {
    await api.put('/about', about);
  },
};
