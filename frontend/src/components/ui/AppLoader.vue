<template>
  <div 
    v-if="show"
    class="flex items-center justify-center z-[100]"
    :class="fullScreen ? 'fixed inset-0 bg-white/80 backdrop-blur-sm' : 'p-8'"
  >
    <div class="flex flex-col items-center gap-5">
      <div class="relative w-16 h-16 flex items-center justify-center">
        <!-- Outer spinning ring -->
        <div class="absolute inset-0 rounded-full border-[4px] border-[#dcfce7] border-t-[#1a946b] animate-spin"></div>
        
        <!-- Inner pulsing logo/dot -->
        <div class="w-10 h-10 rounded-full bg-[#1a946b] flex items-center justify-center shadow-lg shadow-green-900/20 animate-pulse">
          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>

      <span v-if="text" class="text-[#1a946b] font-bold text-[14px] uppercase tracking-widest animate-pulse">
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  show: {
    type: Boolean,
    default: true
  },
  fullScreen: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: 'Загрузка...'
  }
});
</script>
