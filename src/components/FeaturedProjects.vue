<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { projectService } from '../services/projectService';
import type { Project } from '../types/Project';

const projects = ref<Project[]>([]);
const isLoading = ref(true);

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('uz-UZ').format(val);
};

const getProgress = (p: Project) => {
  return Math.min(Math.round((p.raised / p.goal) * 100), 100);
};

onMounted(async () => {
  try {
    const all = await projectService.getAll();
    projects.value = all.slice(0, 3);
  } catch (err) {
    console.error(err);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <section class="bg-white py-16 lg:py-24">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 text-center md:text-left">
        <div>
          <h2 class="text-[32px] lg:text-[40px] font-bold text-gray-900 mb-4">{{ $t('projects.title') }}</h2>
          <p class="text-gray-500 text-[16px] lg:text-[18px] max-w-[600px] mx-auto md:mx-0">{{ $t('projects.subtitle') }}</p>
        </div>
        <router-link to="/explore" class="mt-8 md:mt-0 flex items-center justify-center md:justify-start gap-2 text-[16px] font-bold text-gray-800 hover:text-[#1a946b] transition-colors group">
          {{ $t('projects.view_all') }}
          <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>

      <!-- Projects Grid -->
      <div v-if="!isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col h-full group transition-all duration-500 hover:shadow-xl"
        >
          <!-- Image Container -->
          <div class="relative h-[220px] sm:h-[260px] overflow-hidden">
            <img :src="project.mainImage" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" :alt="project.title" />
            <div class="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[12px] font-black tracking-widest text-gray-800 uppercase">
              {{ $t(`explore.categories.${project.categoryKey}`) }}
            </div>
          </div>
          
          <!-- Content -->
          <div class="p-6 sm:p-8 flex-grow flex flex-col">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-[10px] font-bold text-green-700 uppercase">
                U
              </div>
              <span class="text-[14px] font-medium text-gray-500 line-clamp-1">User #{{ project.authorId }}</span>
            </div>
            
            <h3 class="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-6 leading-snug min-h-[56px] line-clamp-2">
              {{ project.title }}
            </h3>
            
            <!-- Progress Section -->
            <div class="mt-auto">
              <div class="flex justify-between items-end mb-3">
                <span class="text-[17px] sm:text-[18px] font-bold text-gray-800">{{ formatCurrency(project.raised) }} so'm</span>
                <span class="text-[14px] font-bold text-[#1a946b]">{{ getProgress(project) }}%</span>
              </div>
              <div class="w-full h-2 bg-gray-100 rounded-full mb-4 overflow-hidden">
                <div class="h-full bg-[#1a946b] rounded-full transition-all duration-1000" :style="{ width: getProgress(project) + '%' }"></div>
              </div>
              <div class="flex flex-wrap justify-between gap-1 text-[13px] font-medium text-gray-400">
                <span>{{ $t('projects.goal') }}: {{ formatCurrency(project.goal) }}</span>
                <span>{{ project.donorsCount }} {{ $t('projects.donors') }}</span>
              </div>
            </div>
            
            <router-link :to="`/project/${project.id}`" class="mt-8 w-full py-4 bg-[#f0fdf4] text-[#1a946b] font-bold rounded-xl hover:bg-[#1a946b] hover:text-white transition-all cursor-pointer flex items-center justify-center">
              {{ $t('projects.more') }}
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Skeleton Loading -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 3" :key="i" class="bg-gray-50 rounded-[32px] h-[450px] animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

