<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="max-w-[1240px] mx-auto px-4 sm:px-6 pt-32 lg:pt-48 pb-20 relative overflow-hidden">
      <!-- Background Large "404" text -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] lg:text-[400px] font-black text-gray-50 opacity-[0.03] select-none pointer-events-none z-0">
        404
      </div>

      <div class="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        <div class="max-w-[550px] text-center lg:text-left">
          <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-100 text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-8">
            {{ t('error404.badge') }}
          </div>
          <h1 class="text-[48px] lg:text-[72px] font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
            {{ t('error404.title') }}
          </h1>
          <p class="text-gray-500 text-[18px] lg:text-[20px] leading-relaxed mb-12">
            {{ t('error404.desc') }}
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
            <router-link to="/" class="w-full sm:w-auto px-10 py-5 border border-gray-100 bg-white text-gray-900 hover:!bg-[#1a946b] hover:!text-white hover:!border-[#1a946b] rounded-2xl font-bold transition-all text-[17px] shadow-sm flex items-center justify-center">
              {{ t('error404.back_home') }}
            </router-link>
            <router-link to="/explore" class="w-full sm:w-auto px-10 py-5 border border-gray-100 bg-white text-gray-900 hover:!bg-[#1a946b] hover:!text-white hover:!border-[#1a946b] rounded-2xl font-bold transition-all text-[17px] flex items-center justify-center gap-2 shadow-sm group">
              {{ t('error404.explore') }}
              <svg class="w-5 h-5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </router-link>
          </div>
          <router-link to="/contact" class="text-gray-400 hover:text-[#1e5c43] font-bold text-[15px] underline underline-offset-4 transition-colors">
            {{ t('error404.contact') }}
          </router-link>
        </div>

        <!-- Illustration (Rocket in Forest) -->
        <div class="w-full max-w-[500px] aspect-square relative group">
          <div class="absolute inset-0 bg-green-500/5 rounded-[48px] blur-3xl -rotate-6 transition-transform group-hover:rotate-0 duration-700"></div>
          <div class="relative w-full h-full bg-[#f8faf7] rounded-[48px] overflow-hidden border border-green-50/50 shadow-2xl flex items-center justify-center">
             <!-- Minimalist background for rocket -->
             <div class="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/30"></div>
             <div class="absolute inset-0 flex flex-col items-center justify-center">
               <div class="text-[120px] animate-bounce">🚀</div>
               <div class="text-[13px] font-bold text-green-800/30 uppercase tracking-widest mt-4">
                 Safe Landing
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Trending Projects Section -->
    <div class="bg-[#fafaf9] py-24 border-t border-gray-100">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 class="text-[32px] lg:text-[40px] font-bold text-gray-900 mb-4 tracking-tight">
              {{ t('error404.trending_title') }}
            </h2>
          </div>
          <router-link to="/explore" class="mt-8 md:mt-0 flex items-center gap-2 text-[16px] font-bold text-gray-800 hover:text-[#1a946b] transition-colors group">
            {{ t('error404.view_all') }}
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col h-full group">
            <router-link to="/project/1" class="relative h-[220px] sm:h-[260px] overflow-hidden block">
              <img src="/choyxona.png" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Choyxona" />
              <div class="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[13px] font-bold text-gray-800">
                Culture
              </div>
            </router-link>
            <div class="p-6 sm:p-8 flex-grow flex flex-col">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  <img src="https://ui-avatars.com/api/?name=Bekzod+Alimov&background=random" class="w-full h-full object-cover" />
                </div>
                <span class="text-[14px] font-medium text-gray-500">Bekzod Alimov</span>
              </div>
              <router-link to="/project/1">
                <h3 class="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-6 leading-snug min-h-[56px] line-clamp-2 group-hover:text-[#1a946b] transition-colors">
                  Choyxona 2.0: Traditional Tea House Refurbishment
                </h3>
              </router-link>
              <div class="mt-auto">
                <div class="flex justify-between items-end mb-3">
                  <span class="text-[17px] sm:text-[18px] font-bold text-gray-800">45,280,000 so'm</span>
                  <span class="text-[14px] font-bold text-[#1a946b]">75%</span>
                </div>
                <div class="w-full h-2 bg-gray-100 rounded-full mb-4 overflow-hidden">
                  <div class="h-full bg-[#1a946b] rounded-full" style="width: 75%"></div>
                </div>
              </div>
              <router-link to="/project/1" class="mt-8 w-full py-4 bg-[#f0fdf4] text-[#1a946b] font-bold rounded-xl hover:bg-[#1a946b] hover:text-white transition-all text-center">
                {{ t('error404.explore') }}
              </router-link>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col h-full group">
            <router-link to="/project/2" class="relative h-[220px] sm:h-[260px] overflow-hidden block">
              <img src="/project_library.png" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Education" />
              <div class="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[13px] font-bold text-gray-800">
                Education
              </div>
            </router-link>
            <div class="p-6 sm:p-8 flex-grow flex flex-col">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  <img src="https://ui-avatars.com/api/?name=Nigora+Umarova&background=random" class="w-full h-full object-cover" />
                </div>
                <span class="text-[14px] font-medium text-gray-500">Nigora Umarova</span>
              </div>
              <router-link to="/project/2">
                <h3 class="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-6 leading-snug min-h-[56px] line-clamp-2 group-hover:text-[#1a946b] transition-colors">
                  Smart Ziyo: Digital Library for Rural Schools
                </h3>
              </router-link>
              <div class="mt-auto">
                <div class="flex justify-between items-end mb-3">
                  <span class="text-[17px] sm:text-[18px] font-bold text-gray-800">12,800,000 so'm</span>
                  <span class="text-[14px] font-bold text-[#1a946b]">30%</span>
                </div>
                <div class="w-full h-2 bg-gray-100 rounded-full mb-4 overflow-hidden">
                  <div class="h-full bg-[#1a946b] rounded-full" style="width: 30%"></div>
                </div>
              </div>
              <router-link to="/project/2" class="mt-8 w-full py-4 bg-[#f0fdf4] text-[#1a946b] font-bold rounded-xl hover:bg-[#1a946b] hover:text-white transition-all text-center">
                {{ t('error404.explore') }}
              </router-link>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col h-full group">
            <router-link to="/project/3" class="relative h-[220px] sm:h-[260px] overflow-hidden block">
              <img src="/project_it.png" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Technology" />
              <div class="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[13px] font-bold text-gray-800">
                Tech
              </div>
            </router-link>
            <div class="p-6 sm:p-8 flex-grow flex flex-col">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                   <img src="https://ui-avatars.com/api/?name=Lola+Saidova&background=random" class="w-full h-full object-cover" />
                </div>
                <span class="text-[14px] font-medium text-gray-500">Lola Saidova</span>
              </div>
              <router-link to="/project/3">
                <h3 class="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-6 leading-snug min-h-[56px] line-clamp-2 group-hover:text-[#1a946b] transition-colors">
                  AgroTech: Smart Drip Irrigation for Fergana Valley
                </h3>
              </router-link>
              <div class="mt-auto">
                <div class="flex justify-between items-end mb-3">
                  <span class="text-[17px] sm:text-[18px] font-bold text-gray-800">22,500,000 so'm</span>
                  <span class="text-[14px] font-bold text-[#1a946b]">90%</span>
                </div>
                <div class="w-full h-2 bg-gray-100 rounded-full mb-4 overflow-hidden">
                  <div class="h-full bg-[#1a946b] rounded-full" style="width: 90%"></div>
                </div>
              </div>
              <router-link to="/project/3" class="mt-8 w-full py-4 bg-[#f0fdf4] text-[#1a946b] font-bold rounded-xl hover:bg-[#1a946b] hover:text-white transition-all text-center">
                {{ t('error404.explore') }}
              </router-link>
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
</script>

<style scoped>
h1, h2, h3 {
  letter-spacing: -0.04em;
}
</style>
