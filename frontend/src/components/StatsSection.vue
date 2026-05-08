<template>
  <section class="bg-[#fafafa] py-16 lg:py-24">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
        <!-- Card 1: Projects -->
        <div class="bg-white rounded-[32px] p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-100/50">
          <div class="w-16 h-16 rounded-full bg-[#f0fdf4] flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-[#0f5238]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
            </svg>
          </div>
          <h2 class="text-[36px] lg:text-[42px] font-bold text-gray-900 mb-2 leading-none">1,200+</h2>
          <p class="text-gray-500 text-[16px] font-medium">{{ $t('stats.projects') }}</p>
        </div>

        <!-- Card 2: Donors -->
        <div class="bg-white rounded-[32px] p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-100/50">
          <div class="w-16 h-16 rounded-full bg-[#f0fdf4] flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-[#0f5238]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h2 class="text-[36px] lg:text-[42px] font-bold text-gray-900 mb-2 leading-none">45,000+</h2>
          <p class="text-gray-500 text-[16px] font-medium">{{ $t('stats.donors') }}</p>
        </div>

        <!-- Card 3: Collected -->
        <div class="bg-white rounded-[32px] p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-100/50">
          <div class="w-16 h-16 rounded-full bg-[#f0fdf4] flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-[#0f5238]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
          </div>
          <h2 class="text-[36px] lg:text-[42px] font-bold text-gray-900 mb-2 leading-none">12 mlrd+</h2>
          <p class="text-gray-500 text-[16px] font-medium">{{ $t('stats.collected') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
