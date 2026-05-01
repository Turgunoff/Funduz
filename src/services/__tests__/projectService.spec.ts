import { describe, it, expect, vi } from 'vitest';
import { projectService } from '../projectService';

// Mock the projects data
vi.mock('../../mocks/projects.mock', () => ({
  projects: [
    { id: 1, title: 'Project One', description: 'Description one', categoryKey: 'tech', donorsCount: 10, endsAt: '2026-12-31' },
    { id: 2, title: 'Project Two', description: 'Description two', categoryKey: 'eco', donorsCount: 50, endsAt: '2026-11-30' },
  ]
}));

describe('projectService', () => {
  it('getAll returns all projects', async () => {
    const result = await projectService.getAll();
    expect(result).toHaveLength(2);
    expect(result[0].title).toBe('Project One');
  });

  it('getById returns correct project', async () => {
    const result = await projectService.getById(1);
    expect(result?.title).toBe('Project One');
  });

  it('getById returns undefined for non-existent id', async () => {
    const result = await projectService.getById(999);
    expect(result).toBeUndefined();
  });

  it('search returns filtered projects', async () => {
    const result = await projectService.search('Two');
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('Project Two');
  });

  it('filterByCategory returns correct projects', async () => {
    const result = await projectService.filterByCategory('tech');
    expect(result).toHaveLength(1);
    expect(result[0].categoryKey).toBe('tech');
  });

  it('filterByCategory returns all projects when key is "all"', async () => {
    const result = await projectService.filterByCategory('all');
    expect(result).toHaveLength(2);
  });
});
