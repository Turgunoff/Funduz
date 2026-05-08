<template>
  <div class="pt-24 lg:pt-32 pb-20 bg-[#f8f6f5] min-h-screen">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header Section -->
      <div class="bg-white rounded-[32px] p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 class="text-[32px] lg:text-[40px] font-black text-gray-900 mb-2">
            {{ $t('profile.stats.my_projects') || 'My Projects' }}
          </h1>
          <p class="text-[15px] lg:text-[16px] font-medium text-gray-500">
            Управляйте своими запущенными и черновиками проектов.
          </p>
        </div>
        <div>
          <router-link
            to="/create-project"
            class="inline-flex items-center justify-center px-8 py-4 bg-[#1a946b] text-white rounded-2xl font-bold text-[15px] hover:bg-[#147a57] transition-all shadow-md shadow-[#1a946b]/20"
          >
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>
            {{ $t('nav.start_project') }}
          </router-link>
        </div>
      </div>

      <!-- Empty State or Projects Grid -->
      <div v-if="myProjects.length === 0" class="bg-white rounded-[32px] p-12 lg:p-24 text-center border border-gray-100 shadow-sm flex flex-col items-center">
        <div class="w-24 h-24 bg-[#f0f9f6] text-[#1a946b] rounded-full flex items-center justify-center mb-8">
          <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 class="text-[24px] lg:text-[28px] font-bold text-gray-900 mb-4">{{ $t('profile.empty.title') }}</h3>
        <p class="text-[16px] text-gray-500 max-w-md mx-auto mb-10">{{ $t('profile.empty.desc') }}</p>
        <router-link
          to="/create-project"
          class="inline-flex items-center justify-center px-8 py-3.5 bg-white border-2 border-[#1a946b] text-[#1a946b] rounded-xl font-bold text-[15px] hover:bg-[#1a946b] hover:text-white transition-all"
        >
          {{ $t('nav.start_project') }}
        </router-link>
      </div>

      <!-- Projects Grid (Mocked for now) -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div 
          v-for="project in myProjects" 
          :key="project.id"
          class="bg-white rounded-[24px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 flex flex-col"
        >
          <div class="relative w-full aspect-[4/3] bg-gray-100">
            <img loading="lazy" :src="project.mainImage" :alt="project.title" class="w-full h-full object-cover"/>
            <div class="absolute top-4 left-4">
              <span 
                class="px-3 py-1.5 rounded-full text-[11px] font-black uppercase text-white shadow-sm backdrop-blur-md"
                :class="project.status === 'active' ? 'bg-[#1a946b]/90' : 'bg-gray-800/90'"
              >
                {{ project.status === 'active' ? 'Активен' : 'Черновик' }}
              </span>
            </div>
            
            <!-- Delete Action Overlay -->
            <button 
              @click="handleDelete(project.id)"
              class="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-red-500 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-xl"
              title="Удалить проект"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </button>
          </div>
          <div class="p-6 flex-1 flex flex-col">
            <h3 class="text-[18px] lg:text-[20px] font-bold text-gray-900 mb-4 leading-tight line-clamp-2">
              {{ project.title }}
            </h3>
            <div class="mt-auto space-y-4">
              <div v-if="project.status === 'active'">
                <div class="flex justify-between items-end mb-2">
                  <div class="text-[15px] font-black text-gray-900">{{ formatCurrency(project.raised) }} so'm</div>
                  <div class="text-[13px] font-black text-[#1a946b]">{{ Math.round((project.raised / project.goal) * 100) }}%</div>
                </div>
                <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div class="h-full bg-[#1a946b]" :style="{ width: Math.round((project.raised / project.goal) * 100) + '%' }"></div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3 pt-4 border-t border-gray-50">
                <router-link 
                  :to="`/create-project?edit=${project.id}`"
                  class="w-full py-2.5 bg-gray-50 text-gray-700 font-bold text-center text-[13px] rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Изменить
                </router-link>
                <router-link 
                  :to="`/project/${project.id}`"
                  class="w-full py-2.5 bg-[#f0f9f6] text-[#1a946b] font-bold text-center text-[13px] rounded-xl hover:bg-[#1a946b] hover:text-white transition-colors"
                >
                  Статистика
                </router-link>
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
import { useAuthStore } from '../stores/auth';

const projectStore = useProjectStore();
const authStore = useAuthStore();

const myProjects = computed(() => {
  if (!authStore.user) return [];
  return projectStore.allItems.filter(p => p.authorId === authStore.user?.id);
});

const handleDelete = (id: number) => {
  if (confirm('Вы уверены, что хотите удалить этот проект?')) {
    projectStore.deleteProject(id);
  }
};

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('uz-UZ').format(val);
};
</script>
