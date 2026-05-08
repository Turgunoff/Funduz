<template>
  <div class="min-h-screen bg-[#fcfcfc] pt-24 lg:pt-32 pb-20">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Dashboard Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 class="text-[32px] lg:text-[44px] font-black text-gray-900 leading-tight mb-2 italic tracking-tight">
            {{ $t('nav.menu_dashboard') || 'Dashboard' }}
          </h1>
          <p class="text-gray-500 font-medium text-[16px] lg:text-[18px]">
            {{ $t('dashboard.welcome') || 'Добро пожаловать в ваш личный кабинет' }}
          </p>
        </div>
        
        <!-- Quick Actions -->
        <div class="flex flex-wrap gap-4">
          <router-link 
            to="/create-project" 
            class="px-8 py-4 bg-[#1a946b] text-white font-bold rounded-2xl hover:bg-[#157a58] transition-all shadow-xl shadow-green-900/10 flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" /></svg>
            {{ $t('nav.start_project') }}
          </router-link>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
          </div>
          <div class="text-[32px] font-black text-gray-900 mb-1">12.5M <span class="text-[14px] text-gray-500 font-bold uppercase">uzs</span></div>
          <div class="text-[13px] font-black text-gray-500 uppercase tracking-widest">{{ $t('dashboard.total_raised') || 'Собрано' }}</div>
        </div>
        
        <div class="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-[#1a946b] mb-6">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div class="text-[32px] font-black text-gray-900 mb-1">4.2M <span class="text-[14px] text-gray-500 font-bold uppercase">uzs</span></div>
          <div class="text-[13px] font-black text-gray-500 uppercase tracking-widest">{{ $t('dashboard.total_donated') || 'Пожертвовано' }}</div>
        </div>

        <div class="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div>
          <div class="text-[32px] font-black text-gray-900 mb-1">{{ userProjects.length }}</div>
          <div class="text-[13px] font-black text-gray-500 uppercase tracking-widest">{{ $t('dashboard.active_projects') || 'Ваши проекты' }}</div>
        </div>
      </div>

      <!-- Main Dashboard Content -->
      <div class="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
        <!-- Tabs -->
        <div class="flex border-b border-gray-50 px-8 pt-6">
          <button 
            v-for="tab in ['projects', 'donations']" 
            :key="tab"
            @click="activeTab = tab"
            :class="[
              'px-8 pb-6 text-[15px] font-black uppercase tracking-widest transition-all relative',
              activeTab === tab ? 'text-[#1a946b]' : 'text-gray-500 hover:text-gray-600'
            ]"
          >
            {{ $t(`dashboard.tabs.${tab}`) || tab }}
            <div v-if="activeTab === tab" class="absolute bottom-0 left-0 right-0 h-1 bg-[#1a946b] rounded-t-full"></div>
          </button>
        </div>

        <div class="p-8 lg:p-12">
          <!-- Projects Tab -->
          <div v-if="activeTab === 'projects'">
            <div v-if="userProjects.length > 0" class="space-y-6">
              <div v-for="project in userProjects" :key="project.id" class="flex flex-col lg:flex-row lg:items-center gap-8 p-6 rounded-[32px] border border-gray-50 hover:border-green-100 hover:bg-green-50/10 transition-all group">
                <div class="w-full lg:w-48 h-32 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                  <img loading="lazy" :src="project.mainImage" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" :alt="project.title">
                </div>
                <div class="flex-grow">
                  <div class="flex items-center gap-3 mb-2">
                    <span class="px-3 py-1 bg-green-100 text-[#1a946b] text-[10px] font-black uppercase tracking-wider rounded-full">Active</span>
                    <span class="text-[12px] font-bold text-gray-500 uppercase tracking-widest">{{ project.categoryKey }}</span>
                  </div>
                  <h3 class="text-[18px] lg:text-[20px] font-bold text-gray-900 mb-4">{{ project.title }}</h3>
                  
                  <!-- Progress Mini -->
                  <div class="max-w-md">
                    <div class="flex justify-between text-[12px] font-bold mb-2">
                      <span class="text-gray-900">{{ formatCurrency(project.raised) }} UZS</span>
                      <span class="text-[#1a946b]">{{ Math.round((project.raised / project.goal) * 100) }}%</span>
                    </div>
                    <div class="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div class="h-full bg-[#1a946b]" :style="{ width: Math.round((project.raised / project.goal) * 100) + '%' }"></div>
                    </div>
                  </div>
                </div>
                <div class="shrink-0 flex gap-3">
                  <router-link :to="`/project/${project.id}`" class="p-4 bg-gray-50 text-gray-500 hover:text-[#1a946b] hover:bg-green-50 rounded-2xl transition-all">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </router-link>
                  <button class="p-4 bg-gray-50 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                  </button>
                </div>
              </div>
            </div>
            <div v-else class="text-center py-16">
              <div class="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-200 mx-auto mb-6">
                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 class="text-[20px] font-bold text-gray-900 mb-2">У вас пока нет проектов</h3>
              <p class="text-gray-500 mb-8 max-w-xs mx-auto">Создайте свой первый проект и начните собирать средства на мечту!</p>
              <router-link to="/create-project" class="text-[#1a946b] font-black uppercase tracking-widest text-[14px] hover:underline">Начать проект</router-link>
            </div>
          </div>

          <!-- Donations Tab -->
          <div v-else>
            <div class="overflow-x-auto no-scrollbar">
              <table class="w-full text-left border-separate border-spacing-y-4">
                <thead>
                  <tr class="text-[12px] font-black text-gray-500 uppercase tracking-widest">
                    <th class="px-6 pb-2">Проект</th>
                    <th class="px-6 pb-2">Дата</th>
                    <th class="px-6 pb-2">Сумма</th>
                    <th class="px-6 pb-2">Статус</th>
                  </tr>
                </thead>
                <tbody class="text-[15px] font-bold">
                  <tr v-for="i in 3" :key="i" class="bg-gray-50/50 hover:bg-gray-50 transition-colors">
                    <td class="px-6 py-6 rounded-l-3xl border-y border-l border-gray-50">
                      <div class="flex items-center gap-4">
                        <div class="w-10 h-10 rounded-xl bg-orange-100 shrink-0 overflow-hidden">
                          <img loading="lazy" src="https://images.unsplash.com/photo-1559027615-cd7607c1f3cf?q=80&w=200&h=200&auto=format&fit=crop" class="w-full h-full object-cover" :alt="authStore.user?.name || 'User avatar'">
                        </div>
                        <span class="text-gray-900 truncate max-w-[200px]">Эко-сад "Чиланзар"</span>
                      </div>
                    </td>
                    <td class="px-6 py-6 border-y border-gray-50 text-gray-500">12.04.2024</td>
                    <td class="px-6 py-6 border-y border-gray-50 text-gray-900">500,000 UZS</td>
                    <td class="px-6 py-6 rounded-r-3xl border-y border-r border-gray-50">
                      <span class="px-3 py-1 bg-blue-100 text-blue-600 text-[11px] font-black uppercase rounded-lg">Выполнено</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mt-8 p-6 bg-blue-50/50 rounded-3xl border border-blue-100 flex items-center gap-4">
               <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <p class="text-[14px] text-blue-800 font-medium leading-snug">Ваша поддержка помогает авторам реализовывать инновационные идеи в Узбекистане.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useProjectStore } from '../stores/projects';

const authStore = useAuthStore();
const projectStore = useProjectStore();

const activeTab = ref('projects');

const userProjects = computed(() => {
  if (!authStore.user) return [];
  return projectStore.allItems.filter(p => p.authorId === authStore.user?.id);
});

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('uz-UZ').format(val);
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
