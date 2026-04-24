export interface User {
  id: number;
  name: string;
  avatar?: string;
  bio?: string;
  email?: string;
  phone?: string;
  role: 'admin' | 'creator' | 'backer';
  deliveredCount?: number;
}
