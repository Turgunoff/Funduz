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
            <img v-if="authStore.user?.avatar" :src="authStore.user.avatar" alt="Profile" class="w-full h-full object-cover">
            <span v-else>{{ authStore.user?.name?.charAt(0) || 'U' }}</span>
          </div>
          <!-- Edit button (Placeholder logic) -->
          <button class="absolute -bottom-2 -right-2 w-12 h-12 bg-[#1a946b] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-900/20 hover:-translate-y-1 transition-all duration-300">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>

        <!-- User Info -->
        <div class="flex-grow text-center md:text-left relative z-10 w-full">
          <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f0f9f6] text-[#1a946b] text-[11px] font-black tracking-widest uppercase mb-4 shadow-sm">
            {{ authStore.user?.role === 'creator' ? 'Muallif' : 'Pleyer/Homiy' }}
          </div>
          <h1 class="text-[32px] lg:text-[40px] font-bold text-gray-900 mb-2 leading-tight">{{ authStore.user?.name || 'Foydalanuvchi' }}</h1>
          <p class="text-[16px] text-gray-500 font-medium mb-8">O'zbekiston, Toshkent</p>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            <div class="bg-gray-50 rounded-[20px] p-5 text-center border border-gray-100 hover:border-[#1a946b]/30 transition-colors">
              <div class="text-[24px] lg:text-[28px] font-bold text-[#1a946b] mb-1 leading-none">12</div>
              <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Qo'llab-quvvatlandi</div>
            </div>
            <div class="bg-gray-50 rounded-[20px] p-5 text-center border border-gray-100 hover:border-[#1a946b]/30 transition-colors">
              <div class="text-[24px] lg:text-[28px] font-bold text-[#1a946b] mb-1 leading-none">3</div>
              <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Mening loyihalarim</div>
            </div>
            <div class="bg-gray-50 rounded-[20px] p-5 text-center border border-gray-100 hover:border-[#1a946b]/30 transition-colors">
              <div class="text-[24px] lg:text-[28px] font-bold text-[#1a946b] mb-1 leading-none">8</div>
              <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Pikrlar</div>
            </div>
            <div class="bg-gray-50 rounded-[20px] p-5 text-center border border-gray-100 hover:border-[#1a946b]/30 transition-colors">
              <div class="text-[24px] lg:text-[28px] font-bold text-[#1a946b] mb-1 leading-none">1.2M</div>
              <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Ballar</div>
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
        <h2 class="text-[24px] font-bold text-gray-900 mb-2">Hozircha hech narsa yo'q</h2>
        <p class="text-gray-500 font-medium">Siz hali birorta loyihani boshlamadingiz yoki qo'llab-quvvatlamadingiz.</p>
        <router-link to="/explore" class="inline-flex items-center px-8 py-4 mt-8 bg-[#1a946b] text-white font-bold rounded-2xl hover:bg-[#157a58] transition-all shadow-xl shadow-green-900/10">
          Loyihalarni ko'rish
        </router-link>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
</script>

<style scoped>
h1 {
  letter-spacing: -0.03em;
}
</style>
