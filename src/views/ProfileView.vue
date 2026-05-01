<template>
  <div class="min-h-screen bg-[#f8f6f5] pt-24 lg:pt-32 pb-20">
    <div class="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Profile Header Card -->
      <div class="bg-white rounded-[40px] p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 relative overflow-hidden">
        
        <!-- Decoration -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-[#f0f9f6] rounded-full blur-3xl -mr-20 -mt-20 opacity-60 pointer-events-none"></div>

        <!-- Avatar -->
        <div class="relative group shrink-0">
          <div class="w-32 h-32 lg:w-40 lg:h-40 rounded-[32px] overflow-hidden border-4 border-[#f0f9f6] shadow-md bg-orange-100 flex items-center justify-center text-4xl font-black text-orange-600">
            <img v-if="authStore.user?.avatar" :src="authStore.user.avatar" :alt="authStore.user?.name || 'User avatar'" class="w-full h-full object-cover">
            <span v-else>{{ authStore.user?.name?.charAt(0) || 'U' }}</span>
          </div>
          <!-- Update Avatar Button -->
          <button class="absolute -bottom-2 -right-2 w-12 h-12 bg-[#1a946b] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-900/20 hover:-translate-y-1 transition-all duration-300 z-20 hover:scale-105 active:scale-95 cursor-not-allowed">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>

        <!-- User Info -->
        <div class="flex-grow text-center md:text-left relative z-10 w-full">
          <div class="flex justify-between items-start mb-4">
            <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f0f9f6] text-[#1a946b] text-[11px] font-black tracking-widest uppercase shadow-sm">
              {{ authStore.user?.role === 'creator' ? $t('nav.role_author') : $t('nav.role_sponsor') }}
            </div>
            
            <router-link to="/settings" class="p-2 text-gray-400 hover:text-[#1a946b] hover:bg-[#f0f9f6] rounded-full transition-all group" :title="$t('nav.menu_settings') || 'Настройки'">
              <svg class="w-5 h-5 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </router-link>
          </div>
          
          <h1 class="text-[32px] lg:text-[40px] font-bold text-gray-900 mb-2 leading-tight">{{ authStore.user?.name || $t('profile.default_name') }}</h1>
          
          <div class="flex flex-col gap-2 mb-8 text-[15px] font-medium text-gray-500">
            <!-- Location -->
            <div class="flex items-center justify-center md:justify-start gap-2">
               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {{ $t('profile.location') }}
            </div>
            <!-- Email -->
            <div class="flex items-center justify-center md:justify-start gap-2" v-if="authStore.user?.email">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              {{ authStore.user.email }}
            </div>
            <!-- Phone -->
            <div class="flex items-center justify-center md:justify-start gap-2" v-if="authStore.user?.phone">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              {{ authStore.user.phone }}
            </div>
          </div>

          <!-- Bio Section -->
          <div v-if="authStore.user?.bio" class="mb-8 p-6 bg-gray-50 rounded-3xl border border-gray-100 italic text-gray-600 leading-relaxed relative">
            <svg class="absolute top-4 left-4 w-8 h-8 text-gray-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V4H21.017C21.5693 4 22.017 4.44772 22.017 5V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 7.55228 3.017 7V4H10.017C10.5693 4 11.017 4.44772 11.017 5V15C11.017 18.3137 8.33072 21 5.017 21H3.017Z" /></svg>
            <p class="relative z-10 pl-6 text-[15px]">{{ authStore.user.bio }}</p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            <div class="bg-gray-50 rounded-[20px] p-5 text-center border border-gray-100 hover:border-[#1a946b]/30 transition-colors">
              <div class="text-[24px] lg:text-[28px] font-bold text-[#1a946b] mb-1 leading-none">0</div>
              <div class="text-[10px] font-black text-gray-500 uppercase tracking-widest">{{ $t('profile.stats.supported') }}</div>
            </div>
            <div class="bg-gray-50 rounded-[20px] p-5 text-center border border-gray-100 hover:border-[#1a946b]/30 transition-colors">
              <div class="text-[24px] lg:text-[28px] font-bold text-[#1a946b] mb-1 leading-none">{{ userProjectsCount }}</div>
              <div class="text-[10px] font-black text-gray-500 uppercase tracking-widest">{{ $t('profile.stats.my_projects') }}</div>
            </div>
            <div class="bg-gray-50 rounded-[20px] p-5 text-center border border-gray-100 hover:border-[#1a946b]/30 transition-colors">
              <div class="text-[24px] lg:text-[28px] font-bold text-[#1a946b] mb-1 leading-none">0</div>
              <div class="text-[10px] font-black text-gray-500 uppercase tracking-widest">{{ $t('profile.stats.comments') }}</div>
            </div>
            <div class="bg-gray-50 rounded-[20px] p-5 text-center border border-gray-100 hover:border-[#1a946b]/30 transition-colors">
              <div class="text-[24px] lg:text-[28px] font-bold text-[#1a946b] mb-1 leading-none">100</div>
              <div class="text-[10px] font-black text-gray-500 uppercase tracking-widest">{{ $t('profile.stats.points') }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Area Placeholder -->
      <div class="mt-12 text-center py-20 bg-white rounded-[40px] border border-gray-100 border-dashed border-2">
        <div class="w-16 h-16 bg-[#f0f9f6] rounded-full flex items-center justify-center text-[#1a946b] mx-auto mb-6">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h2 class="text-[24px] font-bold text-gray-900 mb-2">{{ $t('profile.empty.title') }}</h2>
        <p class="text-gray-500 font-medium">{{ $t('profile.empty.desc') }}</p>
        <router-link to="/explore" class="inline-flex items-center px-8 py-4 mt-8 bg-[#1a946b] text-white font-bold rounded-2xl hover:bg-[#157a58] transition-all shadow-xl shadow-green-900/10">
          {{ $t('nav.view_projects') }}
        </router-link>
      </div>



    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useProjectStore } from '../stores/projects';

const authStore = useAuthStore();
const projectStore = useProjectStore();

const userProjectsCount = computed(() => {
  if (!authStore.user) return 0;
  return projectStore.allItems.filter(p => p.authorId === authStore.user?.id).length;
});
</script>

<style scoped>
h1 {
  letter-spacing: -0.03em;
}


</style>
