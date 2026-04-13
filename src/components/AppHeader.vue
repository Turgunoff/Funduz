<template>
  <header class="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 lg:h-20">
        <!-- Logo and Nav Links -->
        <div class="flex items-center gap-8">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="text-[22px] lg:text-[24px] font-bold text-[#1a946b] tracking-wide cursor-pointer">
              FUNDUZ
            </router-link>
          </div>
          
          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex space-x-8 text-[15px] font-bold text-gray-800">
            <a href="#" class="hover:text-[#1a946b] transition-colors">{{ $t('nav.view_projects') }}</a>
            <a href="#" class="hover:text-[#1a946b] transition-colors">{{ $t('nav.how_it_works') }}</a>
            <a href="#" class="hover:text-[#1a946b] transition-colors">{{ $t('nav.community') }}</a>
          </nav>
        </div>

        <!-- Right side -->
        <div class="flex items-center gap-2 sm:gap-4">
          <!-- Search Input (Hidden on mobile, visible from sm) -->
          <div class="relative hidden md:block">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-[18px] w-[18px] text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <input 
              type="text" 
              :placeholder="$t('nav.search_placeholder')" 
              class="block w-[180px] xl:w-[240px] pl-9 pr-3 py-[10px] border border-gray-100 rounded-xl leading-5 bg-[#fafafa] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a946b]/20 focus:border-[#1a946b] text-[14px] transition-all duration-200"
            />
          </div>

          <!-- Action Buttons (Login hidden on very small screens) -->
          <a href="#" class="hidden sm:flex px-5 py-[11px] border border-gray-200 rounded-xl text-[14px] font-bold text-gray-800 bg-white hover:bg-[#1a946b] hover:text-white hover:border-[#1a946b] transition-all cursor-pointer items-center justify-center">
            {{ $t('nav.login') }}
          </a>
          <a href="#" class="flex px-5 py-[11px] border border-gray-200 rounded-xl text-[14px] font-bold text-gray-800 bg-white hover:bg-[#1a946b] hover:text-white hover:border-[#1a946b] transition-all cursor-pointer items-center justify-center">
            {{ $t('nav.start_project') }}
          </a>

          <!-- Language Switcher (Desktop) -->
          <div class="hidden lg:flex items-center ml-2 pl-4 border-l border-gray-100 h-6">
            <button 
              @click="setLocale('uz')"
              :class="locale === 'uz' ? 'text-[#1a946b]' : 'text-gray-400'"
              class="text-[13px] font-bold hover:opacity-80 transition-all cursor-pointer uppercase"
            >
              Uz
            </button>
            <span class="mx-2 text-gray-200 text-[12px]">|</span>
            <button 
              @click="setLocale('ru')"
              :class="locale === 'ru' ? 'text-[#1a946b]' : 'text-gray-400'"
              class="text-[13px] font-bold hover:text-[#1a946b] transition-all cursor-pointer uppercase"
            >
              Ru
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="lg:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-[-10px] opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-[-10px] opacity-0"
    >
      <div v-if="isMenuOpen" class="lg:hidden bg-white border-b border-gray-100 shadow-xl overflow-hidden">
        <div class="px-4 pt-2 pb-6 space-y-1">
          <a href="#" class="block px-4 py-3 text-[16px] font-bold text-gray-800 hover:bg-gray-50 rounded-xl">{{ $t('nav.view_projects') }}</a>
          <a href="#" class="block px-4 py-3 text-[16px] font-bold text-gray-800 hover:bg-gray-50 rounded-xl">{{ $t('nav.how_it_works') }}</a>
          <a href="#" class="block px-4 py-3 text-[16px] font-bold text-gray-800 hover:bg-gray-50 rounded-xl">{{ $t('nav.community') }}</a>
          <div class="pt-4 pb-2 px-4 flex items-center justify-between border-t border-gray-50 mt-2">
            <span class="text-gray-400 text-sm font-medium uppercase">Til / Язык</span>
            <div class="flex items-center gap-4">
              <button @click="setLocale('uz')" :class="locale === 'uz' ? 'text-[#1a946b]' : 'text-gray-400'" class="font-bold">UZ</button>
              <button @click="setLocale('ru')" :class="locale === 'ru' ? 'text-[#1a946b]' : 'text-gray-400'" class="font-bold">RU</button>
            </div>
          </div>
          <div class="px-4 pt-4">
             <button class="w-full py-4 bg-gray-50 text-gray-800 font-bold rounded-xl active:bg-gray-100 transition-colors">
                {{ $t('nav.login') }}
             </button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isMenuOpen = ref(false)

const setLocale = (lang: 'uz' | 'ru') => {
  locale.value = lang
  // Close menu on language change if mobile
  isMenuOpen.value = false
}
</script>
