import { projects } from '../mocks/projects.mock';
import type { Project } from '../types/Project';

// Helper to get projects from localStorage
const getStoredProjects = (): Project[] => {
  if (typeof window === 'undefined') return projects;
  const stored = localStorage.getItem('mock_db_projects');
  if (!stored) {
    localStorage.setItem('mock_db_projects', JSON.stringify(projects));
    return projects;
  }
  return JSON.parse(stored);
};

// Helper to save projects to localStorage
const saveProjectsToStorage = (list: Project[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('mock_db_projects', JSON.stringify(list));
  }
};

export const projectService = {
  getAll: async (): Promise<Project[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(getStoredProjects()), 300);
    });
  },
  getById: async (id: number): Promise<Project | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(getStoredProjects().find(p => p.id === id)), 300);
    });
  },
  search: async (query: string): Promise<Project[]> => {
    const q = query.toLowerCase();
    return getStoredProjects().filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q)
    );
  },
  filterByCategory: async (categoryKey: string): Promise<Project[]> => {
    const all = getStoredProjects();
    if (categoryKey === 'all') return all;
    return all.filter(p => p.categoryKey === categoryKey);
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
  },
  create: async (project: Omit<Project, 'id' | 'createdAt' | 'raised' | 'donorsCount' | 'status'> & { id?: number }): Promise<Project> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const all = getStoredProjects();
        const newProj: Project = {
          ...project,
          id: project.id || Math.floor(Math.random() * 1000000),
          createdAt: new Date().toISOString().split('T')[0] || '',
          raised: 0,
          donorsCount: 0,
          status: 'active'
        };
        all.unshift(newProj);
        saveProjectsToStorage(all);
        resolve(newProj);
      }, 500);
    });
  },
  update: async (id: number, data: Partial<Project>): Promise<Project> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const all = getStoredProjects();
        const index = all.findIndex(p => p.id === id);
        if (index === -1) {
          reject(new Error('Project not found'));
          return;
        }
        const proj = all[index];
        if (proj) {
          const updated = { ...proj, ...data } as Project;
          all[index] = updated;
          saveProjectsToStorage(all);
          resolve(updated);
        } else {
          reject(new Error('Project not found'));
        }
      }, 300);
    });
  },
  addDonation: async (projectId: number, amount: number): Promise<Project> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const all = getStoredProjects();
        const index = all.findIndex(p => p.id === projectId);
        if (index === -1) {
          reject(new Error('Project not found'));
          return;
        }
        const proj = all[index];
        if (proj) {
          proj.raised += amount;
          proj.donorsCount += 1;
          saveProjectsToStorage(all);
          resolve(proj);
        } else {
          reject(new Error('Project not found'));
        }
      }, 300);
    });
  }
};
