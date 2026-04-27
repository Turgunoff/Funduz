import type { Reward } from './Reward';

export interface Project {
  id: number;
  title: string;
  description: string;
  categoryKey: string;
  authorId: number;
  authorName?: string;
  mainImage: string;
  images?: string[];
  goal: number;
  raised: number;
  donorsCount: number;
  createdAt: string;
  endsAt: string;
  rewards: Reward[];
  status: 'draft' | 'active' | 'success' | 'failed';
}
