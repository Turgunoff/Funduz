<template>
  <div class="pt-20 bg-[#fcfcfc] min-h-screen">
    
    <!-- Hero Search Section -->
    <div class="pt-20 pb-16 bg-white border-b border-gray-50">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-[32px] md:text-[56px] font-black text-gray-900 leading-[1.1] mb-10 max-w-4xl mx-auto tracking-tight">
          {{ $t('explore.hero_title') }}
        </h1>
        
        <div class="relative max-w-2xl mx-auto group">
          <div class="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400 group-focus-within:text-[#1a946b] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text" 
            :placeholder="$t('explore.search_placeholder')"
            class="block w-full pl-14 pr-8 py-5 bg-white border border-gray-100 rounded-[24px] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.05)] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#1a946b]/10 focus:border-[#1a946b] transition-all text-lg font-medium"
          >
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      <!-- Filter & Sort Bar -->
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 bg-white p-2 rounded-full border border-gray-50 shadow-sm">
        <div class="flex items-center gap-2 overflow-x-auto no-scrollbar px-2">
          <button class="px-6 py-3 bg-[#0f5238] text-white rounded-full font-bold text-[14px] whitespace-nowrap">{{ $t('explore.categories.all') }}</button>
          <button class="px-6 py-3 bg-gray-100 text-gray-500 rounded-full font-bold text-[14px] hover:bg-gray-200 transition-colors whitespace-nowrap">{{ $t('explore.categories.tech') }}</button>
          <button class="px-6 py-3 bg-gray-100 text-gray-500 rounded-full font-bold text-[14px] hover:bg-gray-200 transition-colors whitespace-nowrap">{{ $t('explore.categories.art') }}</button>
          <button class="px-6 py-3 bg-gray-100 text-gray-500 rounded-full font-bold text-[14px] hover:bg-gray-200 transition-colors whitespace-nowrap">{{ $t('explore.categories.social') }}</button>
          <button class="px-6 py-3 bg-gray-100 text-gray-500 rounded-full font-bold text-[14px] hover:bg-gray-200 transition-colors whitespace-nowrap">{{ $t('explore.categories.edu') }}</button>
          <button class="px-6 py-3 bg-gray-100 text-gray-500 rounded-full font-bold text-[14px] hover:bg-gray-200 transition-colors whitespace-nowrap">{{ $t('explore.categories.eco') }}</button>
        </div>

        <div class="px-4">
          <div class="relative min-w-[160px]">
            <select class="appearance-none w-full bg-gray-100 border-none rounded-full px-6 py-3 pr-10 text-[14px] font-bold text-gray-700 focus:ring-2 focus:ring-[#1a946b]/20 cursor-pointer">
              <option>{{ $t('explore.sort.newest') }}</option>
              <option>{{ $t('explore.sort.popular') }}</option>
              <option>{{ $t('explore.sort.ending') }}</option>
            </select>
            <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="group bg-white rounded-[40px] p-6 border border-gray-100/50 hover:border-[#1a946b]/30 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col h-full"
        >
          <div class="relative rounded-[32px] overflow-hidden aspect-[4/3] mb-6 bg-gray-50 border border-gray-50">
            <img :src="project.img" :alt="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div class="absolute top-4 left-4 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[11px] font-black uppercase tracking-wider text-gray-800">
              {{ project.category }}
            </div>
          </div>

          <div class="flex items-center gap-2 mb-4">
            <div class="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-[11px] font-bold text-orange-600">
              {{ project.author.charAt(0) }}
            </div>
            <span class="text-xs font-semibold text-gray-400">{{ project.author }}</span>
          </div>

          <h3 class="text-[20px] font-bold text-gray-900 leading-[1.3] mb-6 min-h-[52px]">
            {{ project.title }}
          </h3>

          <div class="mt-auto">
            <div class="flex justify-between items-end mb-3">
              <div class="text-[17px] font-black text-gray-900">
                {{ project.raised }} <span class="text-[13px] font-bold text-gray-400 uppercase">so'm</span>
              </div>
              <div class="text-[14px] font-black text-[#1a946b]">
                {{ project.progress }}%
              </div>
            </div>
            <div class="w-full h-2 bg-gray-50 rounded-full mb-4 overflow-hidden">
              <div class="h-full bg-[#1a946b] rounded-full transition-all duration-1000" :style="{ width: project.progress + '%' }"></div>
            </div>
            <div class="flex justify-between items-center text-[12px] font-bold text-gray-400 mb-8">
              <span>Maqsad: {{ project.goal }}</span>
              <span>{{ project.donors }} donor</span>
            </div>
            <router-link to="/project/1" class="block w-full py-4 bg-[#f0fdf4] text-[#1a946b] font-black text-center rounded-2xl hover:bg-[#1a946b] hover:text-white transition-all duration-300">
              {{ $t('projects.more') }}
            </router-link>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="flex justify-center pt-8 pb-12">
        <button class="px-14 py-4 bg-white border-2 border-[#0f5238] text-[#0f5238] rounded-full font-black text-[15px] hover:bg-[#0f5238] hover:text-white transition-all duration-300 shadow-sm uppercase tracking-wide">
          {{ $t('explore.load_more') }}
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()
const projects = computed(() => tm('explore.projects_list'))
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
