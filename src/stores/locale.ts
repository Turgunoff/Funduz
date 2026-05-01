import { defineStore } from 'pinia';
import { ref } from 'vue';
import { i18n } from '../i18n';

export const useLocaleStore = defineStore('locale', () => {
  // Initialize locale from localStorage or default to 'uz'
  const getSavedLocale = (): 'uz' | 'ru' | 'en' => {
    const saved = localStorage.getItem('user_locale');
    if (saved === 'uz' || saved === 'ru' || saved === 'en') return saved as 'uz' | 'ru' | 'en';
    return 'uz';
  };

  const currentLocale = ref<'uz' | 'ru' | 'en'>(getSavedLocale());

  // Method to change locale
  const setLocale = (lang: 'uz' | 'ru' | 'en') => {
    currentLocale.value = lang;
    
    // Update vue-i18n instance safely
    try {
      if (i18n.mode === 'legacy') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (i18n.global as any).locale = lang;
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (i18n.global.locale as any).value = lang;
      }
    } catch (e) {
      console.error('Failed to update i18n locale:', e);
    }

    // Persist to localStorage
    localStorage.setItem('user_locale', lang);
    
    // Set HTML lang attribute for SEO/Accessibility
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', lang);
    }
  };

  // Sync i18n and document on store initialization
  const initLocale = () => {
    setLocale(currentLocale.value);
  };

  // Run initial sync
  initLocale();

  return {
    currentLocale,
    setLocale
  };
});
