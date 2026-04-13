<template>
  <div class="pt-32 pb-24 bg-[#fcfcfc]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header Section -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 class="text-[32px] lg:text-[48px] font-bold text-gray-900 leading-tight">
            {{ $t('explore.title') }}
          </h1>
          <p class="text-gray-400 text-lg mt-2">
            O'zbekistonning eng yaxshi g'oyalarini birgalikda qo'llab-quvvatlaymiz
          </p>
        </div>
        
        <!-- Filter Pills (Placeholder for visual excellence) -->
        <div class="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          <button class="px-6 py-2.5 bg-[#1a946b] text-white rounded-full font-bold text-sm shadow-lg shadow-green-900/10">Barchasi</button>
          <button class="px-6 py-2.5 bg-white border border-gray-100 text-gray-400 rounded-full font-bold text-sm hover:border-[#1a946b] hover:text-[#1a946b] transition-all">Ta'lim</button>
          <button class="px-6 py-2.5 bg-white border border-gray-100 text-gray-400 rounded-full font-bold text-sm hover:border-[#1a946b] hover:text-[#1a946b] transition-all">Ekologiya</button>
          <button class="px-6 py-2.5 bg-white border border-gray-100 text-gray-400 rounded-full font-bold text-sm hover:border-[#1a946b] hover:text-[#1a946b] transition-all">Texnologiya</button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="group bg-white rounded-[40px] p-6 border border-gray-100/50 hover:border-[#1a946b]/30 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col h-full"
        >
          <!-- Image Section -->
          <div class="relative rounded-[32px] overflow-hidden aspect-[4/3] mb-6 bg-gray-50 border border-gray-50">
            <img :src="project.img" :alt="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            
            <!-- Category Badge -->
            <div class="absolute top-4 left-4 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[11px] font-black uppercase tracking-wider text-gray-800">
              {{ project.category }}
            </div>

            <!-- Favorite Icon -->
            <button class="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>
          </div>

          <!-- Author Info -->
          <div class="flex items-center gap-2 mb-4">
            <div class="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-[11px] font-bold text-orange-600">
              {{ project.author.charAt(0) }}
            </div>
            <span class="text-xs font-semibold text-gray-400">{{ project.author }}</span>
          </div>

          <!-- Content -->
          <h3 class="text-[20px] font-bold text-gray-900 leading-[1.3] mb-6 min-h-[52px]">
            {{ project.title }}
          </h3>

          <!-- Progress Info -->
          <div class="mt-auto">
            <div class="flex justify-between items-end mb-3">
              <div class="text-[17px] font-black text-gray-900">
                {{ project.raised }} <span class="text-[13px] font-bold text-gray-400 uppercase">so'm</span>
              </div>
              <div class="text-[14px] font-black text-[#1a946b]">
                {{ project.progress }}%
              </div>
            </div>

            <!-- Progress Bar -->
            <div class="w-full h-2 bg-gray-50 rounded-full mb-4 overflow-hidden">
              <div 
                class="h-full bg-[#1a946b] rounded-full transition-all duration-1000"
                :style="{ width: project.progress + '%' }"
              ></div>
            </div>

            <!-- Stats Footer -->
            <div class="flex justify-between items-center text-[12px] font-bold text-gray-400 mb-8">
              <span>Maqsad: {{ project.goal }}</span>
              <span>{{ project.donors }} donor</span>
            </div>

            <!-- Action Button -->
            <router-link 
              to="/project/1" 
              class="block w-full py-4 bg-[#f0fdf4] text-[#1a946b] font-black text-center rounded-2xl hover:bg-[#1a946b] hover:text-white transition-all duration-300"
            >
              {{ $t('projects.more') }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

// Get projects list from i18n
const projects = computed(() => {
  return tm('explore.projects_list')
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
