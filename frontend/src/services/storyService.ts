import { stories } from '../mocks/stories.mock';
import type { Story } from '../types/Story';

export const storyService = {
  getAll: async (): Promise<Story[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(stories), 300);
    });
  },
  getById: async (id: number): Promise<Story | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(stories.find(s => s.id === id)), 300);
    });
  }
};
