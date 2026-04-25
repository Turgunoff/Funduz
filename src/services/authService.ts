import { users } from '../mocks/users.mock';
import type { User } from '../types/User';

// Helper to get users from localStorage
const getStoredUsers = (): User[] => {
  const stored = localStorage.getItem('mock_db_users');
  return stored ? JSON.parse(stored) : [];
};

// Helper to save a user to our "fake DB"
const saveUserToDB = (user: User) => {
  const allUsers = getStoredUsers();
  // Check if email already exists, if so update, else add
  const index = allUsers.findIndex(u => u.email === user.email);
  if (index !== -1) {
    allUsers[index] = user;
  } else {
    allUsers.push(user);
  }
  localStorage.setItem('mock_db_users', JSON.stringify(allUsers));
};

export const authService = {
  login: async (email: string, _pass: string): Promise<{ user: User, token: string } | null> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'error@test.com') {
          reject(new Error('Internal server error'));
          return;
        }

        // 1. Try to find user in our "Fake DB"
        const storedUsers = getStoredUsers();
        let user = storedUsers.find(u => u.email === email);

        // 2. If not found, use a default template but set the name based on email
        if (!user) {
          const template = users.find(u => u.role === 'creator') || users[0];
          const nameFromEmail = email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1);
          user = { 
            ...template, 
            id: Math.floor(Math.random() * 1000),
            name: nameFromEmail,
            email 
          };
        }

        const token = 'mock-jwt-auth-token-' + Math.random().toString(36).substring(7);
        
        localStorage.setItem('auth_token', token);
        localStorage.setItem('auth_user', JSON.stringify(user));
        
        resolve({ user, token });
      }, 800);
    });
  },
  
  register: async (data: { name: string, email: string }): Promise<{ user: User, token: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser: User = {
          id: Math.floor(Math.random() * 1000),
          name: data.name || 'New User',
          email: data.email,
          role: 'backer',
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name || 'User')}&background=0f4a36&color=fff`
        };
        
        // Save to our "Fake DB" so we can login with this user later
        saveUserToDB(newUser);

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
  
  updateProfile: async (data: Partial<User>): Promise<User> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userStr = localStorage.getItem('auth_user');
        if (!userStr) {
          reject('User not logged in');
          return;
        }
        const user: User = JSON.parse(userStr);
        const updatedUser = { ...user, ...data };
        
        localStorage.setItem('auth_user', JSON.stringify(updatedUser));
        saveUserToDB(updatedUser); // Update in our DB too
        
        resolve(updatedUser);
      }, 600);
    });
  },
  
  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem('auth_user');
    return userStr ? JSON.parse(userStr) : null;
  },
  
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('auth_token');
  }
};
