<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="max-w-[1240px] mx-auto px-4 sm:px-6 pt-32 lg:pt-48 pb-20 relative overflow-hidden">
      <!-- Background Large "500" text -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] lg:text-[400px] font-black text-gray-50 opacity-[0.03] select-none pointer-events-none z-0">
        500
      </div>

      <div class="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        <div class="max-w-[550px] text-center lg:text-left">
          <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-red-50 text-[12px] font-bold text-red-500 uppercase tracking-wider mb-8">
            {{ t('error500.badge') }}
          </div>
          <h1 class="text-[48px] lg:text-[72px] font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
            {{ t('error500.title') }}
          </h1>
          <p class="text-gray-500 text-[18px] lg:text-[20px] leading-relaxed mb-12">
            {{ t('error500.desc') }}
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
            <button @click="retry" class="w-full sm:w-auto px-10 py-5 bg-[#1e5c43] text-white rounded-2xl font-bold hover:bg-[#144230] transition-all text-[17px] shadow-lg shadow-green-900/20 flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              {{ t('error500.retry') }}
            </button>
            <router-link to="/" class="w-full sm:w-auto px-10 py-5 border border-gray-100 bg-white text-gray-900 hover:bg-gray-50 rounded-2xl font-bold transition-all text-[17px] shadow-sm flex items-center justify-center">
              {{ t('error500.back_home') }}
            </router-link>
          </div>
        </div>

        <!-- Illustration -->
        <div class="w-full max-w-[500px] aspect-square relative group">
          <div class="absolute inset-0 bg-red-500/5 rounded-[48px] blur-3xl -rotate-6 transition-transform group-hover:rotate-0 duration-700"></div>
          <div class="relative w-full h-full bg-[#fffcfc] rounded-[48px] overflow-hidden border border-red-50/50 shadow-2xl flex items-center justify-center">
             <div class="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/30"></div>
             <div class="absolute inset-0 flex flex-col items-center justify-center">
               <div class="text-[120px] animate-pulse">🛠️</div>
               <div class="text-[13px] font-bold text-red-800/30 uppercase tracking-widest mt-4">
                 System Maintenance
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const retry = () => {
  window.location.reload();
};
</script>

<style scoped>
h1 {
  letter-spacing: -0.04em;
}
</style>
