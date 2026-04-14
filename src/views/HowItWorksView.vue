<template>
  <div class="min-h-screen relative overflow-hidden">
    
    <!-- TOP SECTION: Hero & Steps (Background #f8f6f5) -->
    <div class="bg-[#f8f6f5] pb-[100px] lg:pb-[180px]">
      <!-- Hero Section -->
      <div class="relative z-10 pt-16 lg:pt-20">
        <div class="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 flex flex-col items-center text-center">
          <div class="mb-10 lg:mb-12">
            <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-[#d7f1e6] text-[#2d6a4f] text-[10px] lg:text-[11px] font-black tracking-[0.1em] uppercase">
              {{ $t('how_it_works.badge') }}
            </span>
          </div>

          <h1 class="text-[40px] md:text-[60px] lg:text-[88px] font-bold text-[#1a1a1a] leading-[1.1] mb-8 lg:mb-10 tracking-tight">
            {{ $t('how_it_works.title_start') }} 
            <span class="text-[#0f4a36]">{{ $t('how_it_works.title_end') }}</span>
          </h1>

          <p class="text-sm md:text-base lg:text-[18px] text-[#717171] max-w-2xl lg:max-w-3xl mx-auto leading-relaxed mb-12 lg:mb-16 font-medium px-4">
            {{ $t('how_it_works.subtitle') }}
          </p>

          <div class="bg-gray-200/50 backdrop-blur-sm p-1 rounded-full flex items-center shadow-inner group">
            <button @click="userType = 'author'" :class="userType === 'author' ? 'bg-[#0f4a36] text-white shadow-xl shadow-green-900/20' : 'text-[#4b4b4b] hover:text-black'" class="px-8 lg:px-12 py-3 lg:py-4 rounded-full text-[14px] lg:text-[16px] font-black transition-all duration-300">{{ $t('how_it_works.btn_authors') }}</button>
            <button @click="userType = 'sponsor'" :class="userType === 'sponsor' ? 'bg-[#0f4a36] text-white shadow-xl shadow-green-900/20' : 'text-[#4b4b4b] hover:text-black'" class="px-8 lg:px-12 py-3 lg:py-4 rounded-full text-[14px] lg:text-[16px] font-black transition-all duration-300">{{ $t('how_it_works.btn_sponsors') }}</button>
          </div>
        </div>
      </div>

      <!-- Steps Section -->
      <div class="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div v-for="(step, idx) in $tm('how_it_works.steps')" :key="idx" class="bg-white rounded-[40px] p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:translate-y-[-8px] transition-all duration-500 group">
            <div class="w-14 h-14 bg-[#eef7f4] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0f4a36] transition-colors duration-500">
              <template v-if="idx === 0"><svg class="w-7 h-7 text-[#0f4a36] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></template>
              <template v-else-if="idx === 1"><svg class="w-7 h-7 text-[#0f4a36] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg></template>
              <template v-else-if="idx === 2"><svg class="w-7 h-7 text-[#0f4a36] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg></template>
              <template v-else-if="idx === 3"><svg class="w-7 h-7 text-[#0f4a36] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></template>
            </div>
            <div class="text-[10px] lg:text-[11px] font-black text-[#94654c] uppercase tracking-[0.2em] mb-4">{{ $t('how_it_works.steps_prefix') }} 0{{ idx + 1 }}</div>
            <h3 class="text-[18px] lg:text-[22px] font-bold text-gray-900 mb-5 leading-tight">{{ step.title }}</h3>
            <p class="text-[13px] lg:text-[14px] text-gray-500 leading-relaxed font-medium">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Features SECTION (Background restored to #f8f6f5) -->
    <div class="bg-[#f8f6f5] pt-10 pb-20 relative z-20">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative py-12">
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <!-- Big Card Left (Restored Image) -->
            <div class="lg:col-span-2 relative bg-[#0f4a36] rounded-[40px] p-8 lg:p-14 overflow-hidden min-h-[400px] lg:min-h-[500px] flex flex-col justify-end group shadow-2xl shadow-green-900/10 transition-all duration-500">
              <div class="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" alt="Collaboration" class="w-full h-full object-cover">
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-[#0f4a36] via-[#0f4a36]/40 to-transparent"></div>
              
              <div class="relative z-10 w-full lg:w-3/4">
                <h2 class="text-[28px] lg:text-[44px] font-bold text-white mb-6 leading-tight">{{ $t('how_it_works.features.transparency.title') }}</h2>
                <p class="text-[14px] lg:text-[17px] text-green-50/80 leading-relaxed font-medium">{{ $t('how_it_works.features.transparency.desc') }}</p>
              </div>
            </div>

            <!-- Small Cards Right -->
            <div class="flex flex-col gap-6 lg:gap-8">
              <div class="bg-[#e9e7e6]/60 backdrop-blur-sm rounded-[40px] p-8 lg:p-10 flex flex-col h-[48%] group hover:bg-[#e9e7e6] transition-all duration-500">
                <div class="w-12 h-12 bg-[#94654c] rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-orange-900/10">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 class="text-[20px] lg:text-[26px] font-bold text-gray-900 mb-4">{{ $t('how_it_works.features.security.title') }}</h3>
                <p class="text-[13px] lg:text-[15px] text-gray-600 leading-relaxed font-medium">{{ $t('how_it_works.features.security.desc') }}</p>
              </div>

              <div class="bg-[#d2ede0]/60 backdrop-blur-sm rounded-[40px] p-8 lg:p-10 flex flex-col h-[48%] group hover:bg-[#d2ede0] transition-all duration-500">
                <div class="w-12 h-12 bg-[#0f4a36] rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-green-900/10">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <h3 class="text-[20px] lg:text-[26px] font-bold text-gray-900 mb-4">{{ $t('how_it_works.features.community.title') }}</h3>
                <p class="text-[13px] lg:text-[15px] text-gray-600 leading-relaxed font-medium">{{ $t('how_it_works.features.community.desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ SECTION (Background #f6f3f2) -->
    <div class="bg-[#f6f3f2] pt-24 pb-32 relative z-30 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.01)]">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 lg:mb-20">
          <h2 class="text-[32px] md:text-[48px] font-bold text-gray-900 mb-6 tracking-tight">{{ $t('how_it_works.faq.title') }}</h2>
          <p class="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">{{ $t('how_it_works.faq.subtitle') }}</p>
        </div>
        <div class="max-w-4xl mx-auto space-y-4">
          <div v-for="(item, idx) in $tm('how_it_works.faq.items')" :key="idx" class="bg-white rounded-[32px] overflow-hidden border border-gray-100/50 shadow-sm transition-all duration-300">
            <button @click="toggleFaq(idx)" class="w-full px-8 lg:px-10 py-7 lg:py-8 flex items-center justify-between text-left group">
              <span class="text-[18px] lg:text-[20px] font-bold text-gray-900 group-hover:text-[#0f4a36] transition-colors">{{ item.q }}</span>
              <div :class="activeFaq === idx ? 'rotate-180 bg-[#0f4a36] text-white' : 'bg-gray-100 text-gray-400'" class="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </button>
            <div v-show="activeFaq === idx" class="px-8 lg:px-10 pb-8 transition-all duration-300"><p class="text-[15px] lg:text-[16px] text-gray-500 leading-relaxed max-w-3xl">{{ item.a }}</p></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const userType = ref("author");
const activeFaq = ref<number | null>(0);
const toggleFaq = (idx: number) => { activeFaq.value = activeFaq.value === idx ? null : idx; };
</script>

<style scoped>
h1 { letter-spacing: -0.03em; }
.shadow-inner { box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05); }
</style>
