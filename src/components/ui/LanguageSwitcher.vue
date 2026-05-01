<template>
  <div class="relative flex items-center" ref="dropdownRef">
    <button
      @click="isLangMenuOpen = !isLangMenuOpen"
      :class="[
        'flex items-center gap-1.5 text-[13px] font-black uppercase transition-all duration-300 rounded-full px-4 py-2 border',
        variant === 'glass' 
          ? 'bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20' 
          : 'bg-white border-gray-100 text-gray-800 hover:bg-gray-50'
      ]"
    >
      {{ locale }}
      <svg :class="['w-3.5 h-3.5 transition-transform duration-300', isLangMenuOpen ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
    
    <transition name="dropdown">
      <div 
        v-show="isLangMenuOpen" 
        :class="[
          'absolute top-full mt-3 w-28 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-[100]',
          align === 'right' ? 'right-0' : 'left-0'
        ]"
      >
        <button 
          v-for="lang in ['uz', 'ru', 'en']" 
          :key="lang"
          @click="changeLocale(lang)" 
          class="w-full text-left px-5 py-2.5 text-[13px] font-black uppercase transition-colors"
          :class="locale === lang ? 'text-[#1a946b] bg-[#f0f9f6]' : 'text-gray-700 hover:bg-gray-50'"
        >
          {{ lang }}
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLocaleStore } from '../../stores/locale';

defineProps<{
  variant?: 'glass' | 'default';
  align?: 'left' | 'right';
}>();

const { locale } = useI18n();
const localeStore = useLocaleStore();
const isLangMenuOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const changeLocale = (lang: string) => {
  localeStore.setLocale(lang as 'uz' | 'ru' | 'en');
  locale.value = lang;
  isLangMenuOpen.value = false;
};

// Close on click outside
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isLangMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}
</style>
