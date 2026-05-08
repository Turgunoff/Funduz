import { articles } from '../mocks/articles.mock';
import type { Article } from '../types/Article';

export const articleService = {
  getAll: async (): Promise<Article[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(articles), 300);
    });
  },
  getBySlug: async (slug: string): Promise<Article | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(articles.find(a => a.slug === slug)), 300);
    });
  }
};
