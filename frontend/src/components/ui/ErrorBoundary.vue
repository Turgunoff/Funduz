<template>
  <div v-if="error" class="min-h-[400px] flex items-center justify-center p-6 text-center">
    <div class="max-w-md">
      <div class="w-20 h-20 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h2 class="text-2xl font-bold text-gray-900 mb-3">Упс! Что-то пошло не так</h2>
      <p class="text-gray-500 mb-8 leading-relaxed">
        Произошла непредвиденная ошибка. Мы уже работаем над её исправлением. Попробуйте обновить страницу.
      </p>
      <button 
        @click="recover"
        class="px-8 py-4 bg-[#1e5c43] text-white rounded-2xl font-black hover:bg-[#144230] transition-all shadow-lg shadow-green-900/20 active:scale-95"
      >
        Обновить страницу
      </button>
      
      <div v-if="isDev" class="mt-8 text-left p-4 bg-gray-50 rounded-xl border border-gray-100 overflow-auto max-h-40">
        <p class="text-[10px] font-mono text-red-600 break-all">{{ error.toString() }}</p>
      </div>
    </div>
  </div>
  <slot v-else></slot>
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue';

const error = ref<Error | null>(null);
const isDev = import.meta.env.DEV;

onErrorCaptured((err) => {
  error.value = err;
  console.error('Captured by ErrorBoundary:', err);
  // Here you could send error to Sentry or other logging service
  return false; // Prevent error from propagating further
});

const recover = () => {
  window.location.reload();
};
</script>
