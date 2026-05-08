import { projects } from '../mocks/projects.mock';
import type { Project } from '../types/Project';

export const projectService = {
  getAll: async (): Promise<Project[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(projects), 300);
    });
  },
  getById: async (id: number): Promise<Project | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(projects.find(p => p.id === id)), 300);
    });
  },
  search: async (query: string): Promise<Project[]> => {
    const q = query.toLowerCase();
    return projects.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q)
    );
  },
  filterByCategory: async (categoryKey: string): Promise<Project[]> => {
    if (categoryKey === 'all') return projects;
    return projects.filter(p => p.categoryKey === categoryKey);
  },
  sort: async (list: Project[], sortBy: string): Promise<Project[]> => {
    const sorted = [...list];
    if (sortBy === 'newest') sorted.sort((a, b) => b.id - a.id);
    else if (sortBy === 'popular') sorted.sort((a, b) => b.donorsCount - a.donorsCount);
    else if (sortBy === 'ending') {
      sorted.sort((a, b) => {
        const aDate = new Date(a.endsAt).getTime();
        const bDate = new Date(b.endsAt).getTime();
        return aDate - bDate;
      });
    }
    return sorted;
  }
};
