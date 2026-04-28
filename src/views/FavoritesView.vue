<template>
  <div class="pt-24 lg:pt-32 pb-20 bg-[#f8f6f5] min-h-screen">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header Section -->
      <div class="bg-white rounded-[32px] p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 class="text-[32px] lg:text-[40px] font-black text-gray-900 mb-2">
            {{ $t('nav.menu_favorites') || 'Избранное' }}
          </h1>
          <p class="text-[15px] lg:text-[16px] font-medium text-gray-500">
            Сохраненные проекты, за которыми вы следите.
          </p>
        </div>
      </div>

      <!-- Empty State or Favorites Grid -->
      <div v-if="favoriteProjects.length === 0" class="bg-white rounded-[32px] p-12 lg:p-24 text-center border border-gray-100 shadow-sm flex flex-col items-center">
        <div class="w-24 h-24 bg-[#f0f9f6] text-[#1a946b] rounded-full flex items-center justify-center mb-8">
          <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h3 class="text-[24px] lg:text-[28px] font-bold text-gray-900 mb-4">У вас пока нет сохраненных проектов</h3>
        <p class="text-[16px] text-gray-500 max-w-md mx-auto mb-10">Добавляйте понравившиеся инициативы в избранное, чтобы не потерять их и поддержать в будущем.</p>
        <router-link
          to="/explore"
          class="inline-flex items-center justify-center px-8 py-3.5 bg-white border-2 border-[#1a946b] text-[#1a946b] rounded-xl font-bold text-[15px] hover:bg-[#1a946b] hover:text-white transition-all"
        >
          {{ $t('nav.projects') || 'Смотреть проекты' }}
        </router-link>
      </div>

      <!-- Favorites Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div 
          v-for="project in favoriteProjects" 
          :key="project.id"
          class="bg-white rounded-[24px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 flex flex-col relative group"
        >
          <!-- Unfavorite Button -->
          <button @click="removeFavorite(project.id)" class="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur text-red-500 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>

          <router-link :to="`/project/${project.id}`" class="block relative w-full aspect-[4/3] bg-gray-100">
            <img :src="project.mainImage" :alt="project.title" class="w-full h-full object-cover"/>
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1.5 rounded-full text-[11px] font-black uppercase text-white shadow-sm backdrop-blur-md bg-[#1a946b]/90">
                {{ $t(`explore.categories.${project.categoryKey}`) || project.categoryKey }}
              </span>
            </div>
          </router-link>

          <div class="p-6 flex-1 flex flex-col">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-600">
                U
              </div>
              <span class="text-[13px] font-medium text-gray-500">User #{{ project.authorId }}</span>
            </div>

            <router-link :to="`/project/${project.id}`" class="block mb-4">
              <h3 class="text-[18px] lg:text-[20px] font-bold text-gray-900 leading-tight line-clamp-2 hover:text-[#1a946b] transition-colors">
                {{ project.title }}
              </h3>
            </router-link>

            <div class="mt-auto space-y-4">
              <div>
                <div class="flex justify-between items-end mb-2">
                  <div class="text-[15px] font-black text-gray-900">{{ formatCurrency(project.raised) }} UZS</div>
                  <div class="text-[13px] font-black text-[#1a946b]">{{ getProgress(project) }}%</div>
                </div>
                <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div class="h-full bg-[#1a946b]" :style="{ width: getProgress(project) + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useProjectStore } from '../stores/projects';
import { useFavoriteStore } from '../stores/favorites';
import type { Project } from '../types/Project';

const projectStore = useProjectStore();
const favoriteStore = useFavoriteStore();

const favoriteProjects = computed(() => {
  return projectStore.allItems.filter(p => favoriteStore.projectIds.includes(p.id));
});

const removeFavorite = (id: number) => {
  favoriteStore.removeFavorite(id);
};

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('uz-UZ').format(val);
};

const getProgress = (project: Project) => {
  return Math.min(100, Math.round((project.raised / project.goal) * 100));
};
</script>
