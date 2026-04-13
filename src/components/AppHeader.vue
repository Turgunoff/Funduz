<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-50 h-20 flex items-center">
    <div class="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8">
      
      <!-- DESIGN 1: MODERN (ONLY for /explore - Exactly like your screenshot) -->
      <div v-if="isExplorePage" class="flex justify-between items-center w-full">
        <!-- Left: Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="text-[26px] font-bold text-[#1a946b] tracking-tight">
            Funduz
          </router-link>
        </div>

        <!-- Center: Navigation Links -->
        <nav class="hidden lg:flex items-center gap-12 ml-12">
          <router-link 
            to="/explore" 
            class="text-[17px] font-bold text-[#1a946b] py-1 border-b-2 border-[#1a946b]"
          >
            {{ $t('nav.projects') }}
          </router-link>
          <a href="#" class="text-[17px] font-semibold text-gray-300 hover:text-gray-900 transition-colors">
            {{ $t('nav.about') }}
          </a>
          <a href="#" class="text-[17px] font-semibold text-gray-300 hover:text-gray-900 transition-colors">
            {{ $t('nav.cooperation') }}
          </a>
        </nav>

        <!-- Right: Actions -->
        <div class="flex items-center gap-8 ml-auto">
          <!-- Only Search Icon -->
          <button class="text-gray-500 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <!-- Login Button (Modern style with hover) -->
          <a href="#" class="px-8 py-2.5 border border-gray-200 bg-white text-gray-800 rounded-full text-[15px] font-bold hover:bg-[#1a946b] hover:text-white hover:border-[#1a946b] transition-all shadow-sm cursor-pointer">
            {{ $t('nav.login') }}
          </a>

          <!-- Language Switcher (UZ | RU) -->
          <div class="hidden sm:flex items-center gap-2 text-[13px] font-bold text-gray-400">
            <button @click="setLocale('uz')" :class="locale === 'uz' ? 'text-[#1a946b]' : ''" class="hover:text-gray-900 uppercase transition-colors cursor-pointer">Uz</button>
            <span class="text-gray-200">|</span>
            <button @click="setLocale('ru')" :class="locale === 'ru' ? 'text-[#1a946b]' : ''" class="hover:text-gray-900 uppercase transition-colors cursor-pointer">Ru</button>
          </div>
        </div>
      </div>

      <!-- DESIGN 2: CLASSIC (For Home and Project pages) -->
      <div v-else class="flex justify-between items-center w-full">
        <div class="flex items-center gap-8">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="text-[22px] lg:text-[24px] font-bold text-[#1a946b] tracking-wide">
              FUNDUZ
            </router-link>
          </div>
          <nav class="hidden lg:flex space-x-8 text-[15px] font-bold text-gray-800">
            <router-link to="/explore" class="hover:text-[#1a946b] transition-colors">Loyihalarni ko'rish</router-link>
            <a href="#" class="hover:text-[#1a946b] transition-colors">Qanday ishlaydi?</a>
            <a href="#" class="hover:text-[#1a946b] transition-colors">Jamiyat</a>
          </nav>
        </div>

        <div class="flex items-center gap-3">
          <div class="hidden md:block relative">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </span>
            <input type="text" placeholder="Loyiha qidirish..." class="block w-[200px] xl:w-[240px] pl-9 pr-3 py-[10px] border border-gray-100 rounded-xl bg-[#fafafa] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a946b]/20 focus:border-[#1a946b] text-[14px]">
          </div>

          <a href="#" class="hidden sm:flex px-5 py-[11px] border border-gray-200 rounded-xl text-[14px] font-bold text-gray-800 bg-white hover:bg-[#1a946b] hover:text-white hover:border-[#1a946b] transition-all">
            Kirish
          </a>
          <a href="#" class="flex px-5 py-[11px] border border-gray-200 rounded-xl text-[14px] font-bold text-gray-800 bg-white hover:bg-[#1a946b] hover:text-white hover:border-[#1a946b] transition-all">
            Loyiha boshlash
          </a>

          <!-- Language Switcher ONLY on Classic design -->
          <div class="hidden lg:flex items-center ml-2 pl-4 border-l border-gray-100 h-6">
            <button @click="setLocale('uz')" :class="locale === 'uz' ? 'text-[#1a946b]' : 'text-gray-400'" class="text-[13px] font-bold uppercase cursor-pointer">Uz</button>
            <span class="mx-2 text-gray-200 text-[12px]">|</span>
            <button @click="setLocale('ru')" :class="locale === 'ru' ? 'text-[#1a946b]' : 'text-gray-400'" class="text-[13px] font-bold uppercase cursor-pointer">Ru</button>
          </div>
        </div>
      </div>

    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { locale } = useI18n()

const isExplorePage = computed(() => route.path === '/explore')

const setLocale = (lang: string) => {
  locale.value = lang
}
</script>

<style scoped>
/* No extra styles needed, Tailwind handles it */
</style>
