<template>
  <section class="bg-white py-16 lg:py-24">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 text-center md:text-left">
        <div>
          <h2 class="text-[32px] lg:text-[40px] font-bold text-gray-900 mb-4">{{ $t('projects.title') }}</h2>
          <p class="text-gray-500 text-[16px] lg:text-[18px] max-w-[600px] mx-auto md:mx-0">{{ $t('projects.subtitle') }}</p>
        </div>
        <a href="#" class="mt-8 md:mt-0 flex items-center justify-center md:justify-start gap-2 text-[16px] font-bold text-gray-800 hover:text-[#1a946b] transition-colors group">
          {{ $t('projects.view_all') }}
          <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project Card 1 -->
        <div class="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col h-full group">
          <!-- Image Container -->
          <div class="relative h-[220px] sm:h-[260px] overflow-hidden">
            <img src="/project_library.png" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Library" />
            <div class="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[13px] font-bold text-gray-800">
              {{ $t('projects.cat_education') }}
            </div>
            <button class="absolute top-5 right-5 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors shadow-sm">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
          
          <!-- Content -->
          <div class="p-6 sm:p-8 flex-grow flex flex-col">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Aziza+Karimova&background=random" alt="Author" />
              </div>
              <span class="text-[14px] font-medium text-gray-500 line-clamp-1">Aziza Karimova</span>
            </div>
            
            <h3 class="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-6 leading-snug min-h-[56px] line-clamp-2">
              {{ $t('projects.p1_title') }}
            </h3>
            
            <!-- Progress Section -->
            <div class="mt-auto">
              <div class="flex justify-between items-end mb-3">
                <span class="text-[17px] sm:text-[18px] font-bold text-gray-800">15,000,000 so'm</span>
                <span class="text-[14px] font-bold text-[#1a946b]">60%</span>
              </div>
              <div class="w-full h-2 bg-gray-100 rounded-full mb-4 overflow-hidden">
                <div class="h-full bg-[#1a946b] rounded-full" style="width: 60%"></div>
              </div>
              <div class="flex flex-wrap justify-between gap-1 text-[13px] font-medium text-gray-400">
                <span>{{ $t('projects.goal') }}: 25,000,000</span>
                <span>124 {{ $t('projects.donors') }}</span>
              </div>
            </div>
            
            <a href="/project/1" class="mt-8 w-full py-4 bg-[#f0fdf4] text-[#1a946b] font-bold rounded-xl hover:bg-[#1a946b] hover:text-white transition-all cursor-pointer flex items-center justify-center">
              {{ $t('projects.more') }}
            </a>
          </div>
        </div>

        <!-- Project Card 2 -->
        <div class="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col h-full group">
          <div class="relative h-[220px] sm:h-[260px] overflow-hidden">
            <img src="/project_trees.png" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Trees" />
            <div class="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[13px] font-bold text-gray-800">
              {{ $t('projects.cat_ecology') }}
            </div>
            <button class="absolute top-5 right-5 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors shadow-sm">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
          <div class="p-6 sm:p-8 flex-grow flex flex-col">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Jasur+Olimov&background=random" alt="Author" />
              </div>
              <span class="text-[14px] font-medium text-gray-500">Jasur Olimov</span>
            </div>
            <h3 class="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-6 leading-snug min-h-[56px] line-clamp-2">
              {{ $t('projects.p2_title') }}
            </h3>
            <div class="mt-auto">
              <div class="flex justify-between items-end mb-3">
                <span class="text-[17px] sm:text-[18px] font-bold text-gray-800">8,400,000 so'm</span>
                <span class="text-[14px] font-bold text-[#1a946b]">84%</span>
              </div>
              <div class="w-full h-2 bg-gray-100 rounded-full mb-4 overflow-hidden">
                <div class="h-full bg-[#1a946b] rounded-full" style="width: 84%"></div>
              </div>
              <div class="flex flex-wrap justify-between gap-1 text-[13px] font-medium text-gray-400">
                <span>{{ $t('projects.goal') }}: 10,000,000</span>
                <span>89 {{ $t('projects.donors') }}</span>
              </div>
            </div>
            <a href="/project/1" class="mt-8 w-full py-4 bg-[#f0fdf4] text-[#1a946b] font-bold rounded-xl hover:bg-[#1a946b] hover:text-white transition-all cursor-pointer flex items-center justify-center">
              {{ $t('projects.more') }}
            </a>
          </div>
        </div>

        <!-- Project Card 3 -->
        <div class="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col h-full group">
          <div class="relative h-[220px] sm:h-[260px] overflow-hidden">
            <img src="/project_it.png" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="IT" />
            <div class="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[13px] font-bold text-gray-800">
              {{ $t('projects.cat_tech') }}
            </div>
            <button class="absolute top-5 right-5 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors shadow-sm">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
          <div class="p-6 sm:p-8 flex-grow flex flex-col">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Lola+Saidova&background=random" alt="Author" />
              </div>
              <span class="text-[14px] font-medium text-gray-500">Lola Saidova</span>
            </div>
            <h3 class="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-6 leading-snug min-h-[56px] line-clamp-2">
              {{ $t('projects.p3_title') }}
            </h3>
            <div class="mt-auto">
              <div class="flex justify-between items-end mb-3">
                <span class="text-[17px] sm:text-[18px] font-bold text-gray-800">45,000,000 so'm</span>
                <span class="text-[14px] font-bold text-[#1a946b]">90%</span>
              </div>
              <div class="w-full h-2 bg-gray-100 rounded-full mb-4 overflow-hidden">
                <div class="h-full bg-[#1a946b] rounded-full" style="width: 90%"></div>
              </div>
              <div class="flex flex-wrap justify-between gap-1 text-[13px] font-medium text-gray-400">
                <span>{{ $t('projects.goal') }}: 50,000,000</span>
                <span>312 {{ $t('projects.donors') }}</span>
              </div>
            </div>
            <a href="/project/1" class="mt-8 w-full py-4 bg-[#f0fdf4] text-[#1a946b] font-bold rounded-xl hover:bg-[#1a946b] hover:text-white transition-all cursor-pointer flex items-center justify-center">
              {{ $t('projects.more') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
