<template>
  <div class="relative">
    <header class="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-gray-50 h-16 lg:h-20 flex items-center shadow-sm">
      <div class="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        
        <!-- UNIFIED CLASSIC DESIGN (For All Pages) -->
        <div class="flex justify-between items-center w-full">
          <div class="flex items-center gap-8">
            <router-link to="/" class="text-[22px] lg:text-[26px] font-bold text-[#1a946b] tracking-wide">FUNDUZ</router-link>
            
            <nav class="hidden lg:flex items-center space-x-10 text-[16px] font-bold text-gray-800">
              <a href="#" class="hover:text-[#1a946b] transition-colors">{{ $t('nav.projects') }}</a>
              <a href="#" class="hover:text-[#1a946b] transition-colors">{{ $t('nav.about') }}</a>
              <a href="#" class="hover:text-[#1a946b] transition-colors">{{ $t('nav.cooperation') }}</a>
            </nav>
          </div>

          <div class="flex items-center gap-3">
            <a href="#" class="hidden sm:flex px-6 py-2.5 border border-gray-200 rounded-xl text-[14px] font-bold text-gray-800 bg-white hover:bg-[#1a946b] hover:text-white transition-all">
              {{ $t('nav.login') }}
            </a>
            <a href="#" class="flex px-6 py-2.5 border border-gray-200 rounded-xl text-[14px] font-bold text-gray-800 bg-white hover:bg-[#1a946b] hover:text-white transition-all shadow-sm">
              Loyiha boshlash
            </a>

            <!-- Desktop Language Switcher -->
            <div class="hidden lg:flex items-center ml-2 pl-4 border-l border-gray-100 h-6 gap-3">
              <button @click="setLocale('uz')" :class="locale === 'uz' ? 'text-[#1a946b]' : 'text-gray-400'" class="text-[13px] font-bold uppercase transition-colors cursor-pointer">Uz</button>
              <span class="text-gray-200">|</span>
              <button @click="setLocale('ru')" :class="locale === 'ru' ? 'text-[#1a946b]' : 'text-gray-400'" class="text-[13px] font-bold uppercase transition-colors cursor-pointer">Ru</button>
            </div>

            <!-- Hamburger Button -->
            <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden text-gray-800 ml-2">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer -->
    <div 
      v-show="isMenuOpen" 
      class="fixed inset-0 top-16 lg:top-20 bg-white z-[90] lg:hidden overflow-y-auto"
    >
      <div class="p-6 pt-10 flex flex-col gap-10">
        <nav class="flex flex-col gap-6">
          <a href="#" class="text-[20px] font-black text-gray-900 border-b border-gray-50 pb-5 flex justify-between items-center">
            {{ $t('nav.projects') }}
            <svg class="w-4 h-4 text-[#1a946b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" /></svg>
          </a>
          <a href="#" class="text-[20px] font-black text-gray-900 border-b border-gray-50 pb-5 flex justify-between items-center">
            {{ $t('nav.about') }}
            <svg class="w-4 h-4 text-[#1a946b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" /></svg>
          </a>
          <a href="#" class="text-[20px] font-black text-gray-900 border-b border-gray-50 pb-5 flex justify-between items-center">
            {{ $t('nav.cooperation') }}
            <svg class="w-4 h-4 text-[#1a946b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" /></svg>
          </a>
        </nav>

        <div class="flex flex-col gap-5">
          <button class="w-full py-5 border-2 border-gray-100 rounded-2xl font-black text-gray-900 bg-white shadow-sm">{{ $t('nav.login') }}</button>
          <div class="bg-gray-50 p-6 rounded-[32px] border border-gray-100 text-center">
            <p class="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-4">
              {{ locale === 'uz' ? 'TILNI TANLASH' : 'ВЫБОР ЯЗЫКА' }}
            </p>
            <div class="grid grid-cols-2 gap-3">
              <button @click="setLocale('uz')" :class="locale === 'uz' ? 'bg-[#1a946b] text-white shadow-lg shadow-green-900/10' : 'bg-white text-gray-400'" class="py-3.5 rounded-2xl font-black transition-all">UZ</button>
              <button @click="setLocale('ru')" :class="locale === 'ru' ? 'bg-[#1a946b] text-white shadow-lg shadow-green-900/10' : 'bg-white text-gray-400'" class="py-3.5 rounded-2xl font-black transition-all">RU</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isMenuOpen = ref(false)

const setLocale = (lang: string) => {
  locale.value = lang
}

// Prevent scroll when menu is open
watch(isMenuOpen, (val) => {
  if (val) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = ''
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
</style>
