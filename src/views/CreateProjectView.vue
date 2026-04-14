<template>
  <div class="min-h-screen bg-[#fcfaf9] flex flex-col">
    <!-- Header -->
    <header class="bg-white border-b border-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div class="max-w-[1440px] mx-auto flex items-center justify-between">
        <div class="flex items-center gap-6">
          <router-link to="/" class="text-[22px] lg:text-[26px] font-bold text-[#1a946b] tracking-wide">FUNDUZ</router-link>
          <div class="h-6 w-[1px] bg-gray-200"></div>
          <span class="text-[15px] font-bold text-gray-500">{{ $t('create.header_title') }}</span>
        </div>
        
        <div class="flex items-center gap-8">
          <!-- Language Switcher -->
          <div class="hidden sm:flex items-center gap-3 pr-8 border-r border-gray-100">
            <button @click="setLocale('uz')" :class="locale === 'uz' ? 'text-[#1a946b]' : 'text-gray-400'" class="text-[13px] font-bold uppercase transition-colors">Uz</button>
            <div class="w-[1px] h-3 bg-gray-200"></div>
            <button @click="setLocale('ru')" :class="locale === 'ru' ? 'text-[#1a946b]' : 'text-gray-400'" class="text-[13px] font-bold uppercase transition-colors">Ru</button>
          </div>

          <router-link to="/" class="text-[14px] font-bold text-gray-400 hover:text-red-500 transition-colors">
            {{ $t('create.cancel') }}
          </router-link>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow py-12 lg:py-20">
      <div class="max-w-[800px] mx-auto px-4">
        
        <!-- Step Info -->
        <div class="mb-12">
          <div class="text-[11px] font-black text-[#1e5c43] uppercase tracking-[0.2em] mb-4">
            {{ $t('create.step_prefix') }} 1/3
          </div>
          <h1 class="text-[32px] lg:text-[40px] font-bold text-gray-900 mb-8 tracking-tight">
            {{ $t('create.step1_title') }}
          </h1>
          
          <!-- Progress Bar -->
          <div class="relative h-1.5 w-full bg-gray-200 rounded-full mb-6">
            <div class="absolute h-full w-1/3 bg-[#1e5c43] rounded-full transition-all duration-500 shadow-sm shadow-green-900/20"></div>
          </div>

          <!-- Step Tabs -->
          <div class="flex items-center gap-12 border-b border-gray-100 pb-4">
             <span :class="currentStep === 1 ? 'text-[#1e5c43] border-[#1e5c43]' : 'text-gray-300 border-transparent'" class="text-[11px] font-black uppercase tracking-widest border-b-2 py-4 -mb-5 transition-all">{{ $t('create.tab_info') }}</span>
             <span :class="currentStep === 2 ? 'text-[#1e5c43] border-[#1e5c43]' : 'text-gray-300 border-transparent'" class="text-[11px] font-black uppercase tracking-widest border-b-2 py-4 -mb-5 transition-all">{{ $t('create.tab_media') }}</span>
             <span :class="currentStep === 3 ? 'text-[#1e5c43] border-[#1e5c43]' : 'text-gray-300 border-transparent'" class="text-[11px] font-black uppercase tracking-widest border-b-2 py-4 -mb-5 transition-all">{{ $t('create.tab_rewards') }}</span>
          </div>
        </div>

        <!-- Form Step 1 -->
        <div v-if="currentStep === 1" class="space-y-10">
          <!-- Project Name -->
          <div class="group">
            <label class="block text-[14px] font-bold text-gray-900 mb-2">{{ $t('create.name_label') }}</label>
            <p class="text-[13px] text-gray-400 mb-4">{{ $t('create.name_help') }}</p>
            <input 
              type="text" 
              :placeholder="$t('create.name_placeholder')"
              class="w-full px-6 py-5 bg-white border border-gray-200 rounded-[24px] focus:border-[#1e5c43] focus:ring-4 focus:ring-green-500/5 outline-none transition-all text-lg font-medium"
            >
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Category -->
            <div>
              <label class="block text-[14px] font-bold text-gray-900 mb-4">{{ $t('create.category_label') }}</label>
              <div class="relative">
                <select class="w-full px-6 py-5 bg-white border border-gray-200 rounded-[24px] focus:border-[#1e5c43] outline-none transition-all text-gray-700 font-medium appearance-none">
                  <option>Texnologiya</option>
                  <option>San'at</option>
                  <option>Jamiyat</option>
                </select>
                <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <!-- Duration -->
            <div>
              <label class="block text-[14px] font-bold text-gray-900 mb-4">{{ $t('create.duration_label') }}</label>
              <input 
                type="number" 
                value="30"
                class="w-full px-6 py-5 bg-white border border-gray-200 rounded-[24px] focus:border-[#1e5c43] outline-none transition-all font-medium"
              >
            </div>
          </div>

          <!-- Goal Amount -->
          <div>
            <label class="block text-[14px] font-bold text-gray-900 mb-4">{{ $t('create.goal_label') }}</label>
            <div class="relative">
              <input 
                type="text" 
                value="0.00"
                class="w-full px-6 py-5 bg-white border border-gray-200 rounded-[24px] focus:border-[#1e5c43] outline-none transition-all font-medium pr-16"
              >
              <span class="absolute right-6 top-1/2 -translate-y-1/2 font-bold text-gray-400">UZS</span>
            </div>
            <div class="flex items-center gap-2 mt-4 text-[#94654c]">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>
              <p class="text-[12px] font-medium">{{ $t('create.tax_info') }}</p>
            </div>
          </div>

          <!-- Media & Story -->
          <div>
            <h3 class="text-[20px] font-bold text-gray-900 mb-8">{{ $t('create.media_title') }}</h3>
            <div class="w-full border-2 border-dashed border-gray-200 rounded-[40px] p-12 lg:p-20 flex flex-col items-center justify-center bg-white/50 hover:bg-white hover:border-[#1e5c43] transition-all cursor-pointer group">
              <div class="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors">
                <svg class="w-8 h-8 text-gray-400 group-hover:text-[#1e5c43]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <p class="text-[15px] font-bold text-gray-400 group-hover:text-gray-900 transition-colors text-center max-w-[300px]">{{ $t('create.media_placeholder') }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer Actions -->
    <footer class="bg-white border-t border-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-[1440px] mx-auto flex items-center justify-between">
        <button class="flex items-center gap-3 text-[14px] font-black text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-[0.1em]">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
          {{ $t('create.back') }}
        </button>
        <button class="px-10 py-5 bg-[#1e5c43] text-white rounded-3xl font-black flex items-center gap-3 hover:bg-[#144230] shadow-xl shadow-green-900/10 transition-all active:scale-95">
          {{ $t('create.next') }}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </button>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentStep = ref(1)

const setLocale = (lang: string) => {
  locale.value = lang
}
</script>

<style scoped>
/* Matching the exact aesthetic of the provided screenshot */
h1 {
  letter-spacing: -0.04em;
}
input::placeholder {
  color: #cbcbcb;
}
</style>
