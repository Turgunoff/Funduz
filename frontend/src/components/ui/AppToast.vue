<template>
  <div class="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
    <TransitionGroup 
      name="toast" 
      tag="div"
      class="flex flex-col gap-3 items-end"
    >
      <div 
        v-for="toast in toastStore.toasts" 
        :key="toast.id"
        class="w-full sm:w-[380px] bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] overflow-hidden pointer-events-auto border transition-all duration-300"
        :class="{
          'border-[#dcfce7]': toast.type === 'success',
          'border-red-100': toast.type === 'error',
          'border-orange-100': toast.type === 'warning',
          'border-blue-100': toast.type === 'info'
        }"
      >
        <div class="p-4 flex items-start gap-4">
          <!-- Icon based on type -->
          <div 
            class="w-10 h-10 shrink-0 rounded-full flex items-center justify-center mt-0.5"
            :class="{
              'bg-[#dcfce7] text-[#1a946b]': toast.type === 'success',
              'bg-red-50 text-red-500': toast.type === 'error',
              'bg-orange-50 text-orange-500': toast.type === 'warning',
              'bg-blue-50 text-blue-500': toast.type === 'info'
            }"
          >
            <!-- Success Icon -->
            <svg v-if="toast.type === 'success'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <!-- Error Icon -->
            <svg v-if="toast.type === 'error'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <!-- Warning Icon -->
            <svg v-if="toast.type === 'warning'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <!-- Info Icon -->
            <svg v-if="toast.type === 'info'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <!-- Content -->
          <div class="flex-1 min-w-0 pt-1">
            <h4 v-if="toast.title" class="text-[15px] font-bold text-gray-900 mb-1 leading-tight">
              {{ toast.title }}
            </h4>
            <p class="text-[14px] text-gray-500 font-medium leading-snug break-words" :class="{ 'mt-2': !toast.title }">
              {{ toast.message }}
            </p>
          </div>

          <!-- Close Button -->
          <button 
            @click="toastStore.removeToast(toast.id)"
            class="w-8 h-8 flex items-center justify-center shrink-0 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '@/stores/toast';

const toastStore = useToastStore();
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.toast-enter-from {
  opacity: 0;
  transform: translateX(100px) scale(0.9);
}
.toast-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
