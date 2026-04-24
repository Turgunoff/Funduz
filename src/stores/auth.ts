import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { authService } from '../services/authService';
import type { User } from '../types/User';

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref<User | null>(authService.getCurrentUser());
  const token = ref<string | null>(localStorage.getItem('auth_token'));

  // Getters
  const isLoggedIn = computed(() => !!user.value && !!token.value);

  // Actions
  const login = async (email: string, pass: string) => {
    try {
      const res = await authService.login(email, pass);
      if (res) {
        user.value = res.user;
        token.value = res.token;
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const register = async (name: string, _email: string, _pass: string) => {
    try {
      // Mock service currently only uses name
      const res = await authService.register({ name });
      if (res) {
        user.value = res.user;
        token.value = res.token;
        return true;
      }
      return false;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  };

  const updateProfile = async (data: Partial<User>) => {
    try {
      const updatedUser = await authService.updateProfile(data);
      if (updatedUser) {
        user.value = updatedUser;
        return true;
      }
      return false;
    } catch (error) {
      console.error('Profile update failed:', error);
      return false;
    }
  };

  const logout = () => {
    authService.logout();
    user.value = null;
    token.value = null;
  };

  return {
    user,
    token,
    isLoggedIn,
    login,
    register,
    updateProfile,
    logout
  };
});
