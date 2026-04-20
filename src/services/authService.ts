import { users } from '../mocks/users.mock';
import type { User } from '../types/User';

export const authService = {
  login: async (_email: string, _pass: string): Promise<{ user: User, token: string } | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simple mock login: any email/pass works
        const user = users.find(u => u.role === 'creator') || users[0];
        const token = 'mock-jwt-auth-token-' + Math.random().toString(36).substring(7);
        
        localStorage.setItem('auth_token', token);
        localStorage.setItem('auth_user', JSON.stringify(user));
        
        resolve({ user, token });
      }, 800);
    });
  },
  
  register: async (data: { name: string }): Promise<{ user: User, token: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser: User = {
          id: Math.floor(Math.random() * 1000),
          name: data.name || 'New User',
          role: 'backer',
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name || 'User')}&background=0f4a36&color=fff`
        };
        const token = 'mock-jwt-reg-token-' + Math.random().toString(36).substring(7);
        
        localStorage.setItem('auth_token', token);
        localStorage.setItem('auth_user', JSON.stringify(newUser));
        
        resolve({ user: newUser, token });
      }, 1000);
    });
  },
  
  logout: () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
  },
  
  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem('auth_user');
    return userStr ? JSON.parse(userStr) : null;
  },
  
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('auth_token');
  }
};
