<template>
  <div class="min-h-screen bg-[#f8f6f5] pt-24 lg:pt-32 pb-20">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Hero Section Card -->
      <div class="bg-[#1e5c43] rounded-[60px] lg:rounded-[80px] p-10 lg:p-20 relative overflow-hidden mb-12 lg:mb-16">
        <div class="relative z-10 max-w-3xl">
          <h1 class="text-[32px] md:text-[48px] lg:text-[64px] font-bold text-white leading-[1.1] mb-8 tracking-tight">
            {{ $t('community.title') }}
          </h1>
          <p class="text-[16px] lg:text-[18px] text-white/70 leading-relaxed font-medium max-w-2xl">
            {{ $t('community.subtitle') }}
          </p>
        </div>
        <!-- Subtle pattern overlay -->
        <div class="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        
        <!-- Stat Card 1 -->
        <div class="bg-white rounded-[40px] p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 group">
          <div class="w-12 h-12 rounded-xl bg-[#f0f9f6] flex items-center justify-center mb-10 group-hover:bg-[#1e5c43] transition-colors duration-300">
            <svg class="w-6 h-6 text-[#1e5c43] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="text-[28px] lg:text-[34px] font-black text-gray-900 mb-2">
            {{ $t('community.stats.collected_val') }}
          </div>
          <div class="text-[11px] lg:text-[12px] font-bold text-gray-400 uppercase tracking-widest">
            {{ $t('community.stats.collected_label') }}
          </div>
        </div>

        <!-- Stat Card 2 -->
        <div class="bg-white rounded-[40px] p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 group">
          <div class="w-12 h-12 rounded-xl bg-[#f0f9f6] flex items-center justify-center mb-10 group-hover:bg-[#1e5c43] transition-colors duration-300">
            <svg class="w-6 h-6 text-[#1e5c43] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div class="text-[28px] lg:text-[34px] font-black text-gray-900 mb-2">
            {{ $t('community.stats.sponsors_val') }}
          </div>
          <div class="text-[11px] lg:text-[12px] font-bold text-gray-400 uppercase tracking-widest">
            {{ $t('community.stats.sponsors_label') }}
          </div>
        </div>

        <!-- Stat Card 3 -->
        <div class="bg-white rounded-[40px] p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 group">
          <div class="w-12 h-12 rounded-xl bg-[#f0f9f6] flex items-center justify-center mb-10 group-hover:bg-[#1e5c43] transition-colors duration-300">
            <svg class="w-6 h-6 text-[#1e5c43] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <div class="text-[28px] lg:text-[34px] font-black text-gray-900 mb-2">
            {{ $t('community.stats.projects_val') }}
          </div>
          <div class="text-[11px] lg:text-[12px] font-bold text-gray-400 uppercase tracking-widest">
            {{ $t('community.stats.projects_label') }}
          </div>
        </div>

      </div>

      <!-- Success Stories Section -->
      <div class="mt-24 lg:mt-32">
        <div class="flex items-end justify-between mb-12">
          <div>
            <h2 class="text-[32px] lg:text-[40px] font-bold text-gray-900 mb-4 tracking-tight">
              {{ $t('community.stories.title') }}
            </h2>
            <p class="text-[15px] lg:text-[16px] text-gray-500 font-medium">
              {{ $t('community.stories.subtitle') }}
            </p>
          </div>
          <router-link to="/explore" class="hidden md:flex items-center gap-2 text-[14px] lg:text-[15px] font-bold text-[#1e5c43] hover:translate-x-1 transition-transform">
            {{ $t('community.stories.view_all') }}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(story, idx) in ($tm('community.stories.items') as any[])" :key="idx" class="bg-white rounded-[40px] overflow-hidden group hover:shadow-xl transition-all duration-500">
            <!-- Story Image -->
            <div class="relative h-[240px] lg:h-[280px] overflow-hidden">
              <img 
                :src="idx === 0 ? 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800' : (idx === 1 ? 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800' : 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&q=80&w=800')" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Story"
              >
              <!-- Success Badge -->
              <div class="absolute top-6 left-6 px-4 py-2 rounded-xl bg-[#7c2d12]/90 backdrop-blur-md text-[10px] lg:text-[11px] font-black text-white uppercase tracking-widest whitespace-nowrap">
                {{ $t('community.stories.badge') }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-8 lg:p-10">
              <h3 class="text-[20px] lg:text-[24px] font-bold text-gray-900 mb-6 group-hover:text-[#1e5c43] transition-colors">
                {{ (story as any).title }}
              </h3>
              <p class="text-[14px] lg:text-[15px] text-gray-500 leading-relaxed italic mb-10">
                "{{ (story as any).desc }}"
              </p>
              
              <a href="#" class="inline-flex items-center gap-2 text-[13px] lg:text-[14px] font-bold text-[#1e5c43] hover:gap-3 transition-all">
                {{ $t('community.stories.read_story') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
/* Minimal setup with i18n support */
</script>

<style scoped>
/* Ensure the font matches the premium look */
h1 {
  letter-spacing: -0.03em;
}
</style>
