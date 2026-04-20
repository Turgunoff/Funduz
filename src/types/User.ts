export interface User {
  id: number;
  name: string;
  avatar?: string;
  bio?: string;
  role: 'admin' | 'creator' | 'backer';
  deliveredCount?: number;
}
