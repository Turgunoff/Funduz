<template>
  <header class="w-full border-b border-gray-200 bg-white">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo and Nav Links -->
        <div class="flex items-center gap-8">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <a href="#" class="text-[22px] font-bold text-[#1ba0f2] tracking-wide">
              FUNDUZ
            </a>
          </div>
          
          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex space-x-6 text-[15px] font-bold text-gray-800">
            <a href="#" class="hover:text-black transition-colors">Loyihalarni ko'rish</a>
            <a href="#" class="hover:text-black transition-colors">Qanday ishlaydi?</a>
            <a href="#" class="hover:text-black transition-colors">Jamiyat</a>
          </nav>
        </div>

        <!-- Right side (Search and Buttons) -->
        <div class="flex items-center space-x-3">
          <!-- Search Input -->
          <div class="relative hidden sm:block mr-2">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-[18px] w-[18px] text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Loyiha qidirish..." 
              class="block w-[240px] pl-9 pr-3 py-[9px] border border-gray-200 rounded-md leading-5 bg-[#fafafa] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1ba0f2] focus:border-[#1ba0f2] sm:text-[14px] transition-colors duration-200"
            />
          </div>

          <!-- Action Buttons -->
          <button class="px-5 py-[9px] border border-gray-200 rounded-md text-[14px] font-bold text-gray-800 bg-white hover:bg-[#1ba0f2] hover:text-white hover:border-[#1ba0f2] transition-colors">
            Kirish
          </button>
          <button class="px-5 py-[9px] border border-gray-200 rounded-md text-[14px] font-bold text-gray-800 bg-white hover:bg-[#1ba0f2] hover:text-white hover:border-[#1ba0f2] transition-colors">
            Loyiha boshlash
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>
