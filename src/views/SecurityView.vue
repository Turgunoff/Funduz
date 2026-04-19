<template>
  <div class="min-h-screen bg-[#fafaf9] pt-20">
    <!-- Hero Section -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-32">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        
        <!-- Left Content -->
        <div class="flex-1 max-w-[700px] z-10">
          <div class="mb-8">
            <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-[#dcfce7] text-[#166534] text-[11px] font-black tracking-[0.05em] uppercase">
              {{ t('security.badge') }}
            </span>
          </div>

          <h1 class="text-[44px] sm:text-[60px] lg:text-[84px] font-bold text-gray-900 leading-[1.05] tracking-tight mb-8">
            {{ t('security.hero_title') }}
          </h1>

          <p class="text-gray-500 text-[18px] lg:text-[22px] leading-relaxed max-w-[600px] mb-12 font-medium">
            {{ t('security.hero_desc') }}
          </p>

          <!-- Feature Tags -->
          <div class="flex flex-wrap gap-4">
            <div 
              v-for="(feature, i) in features" 
              :key="i"
              class="flex items-center gap-2.5 px-5 py-3 bg-[#f3f2f1] rounded-full border border-gray-100/50 hover:bg-white hover:shadow-md transition-all duration-300 group"
            >
              <div class="text-[#0f5238] group-hover:scale-110 transition-transform">
                <svg v-if="feature.icon === 'shield'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                <svg v-else-if="feature.icon === 'user'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                <svg v-else-if="feature.icon === 'refund'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg>
              </div>
              <span class="text-[14px] lg:text-[15px] font-bold text-gray-800 tracking-tight">{{ t(`security.features.${feature.key}.label`) }}</span>
            </div>
          </div>
        </div>

        <!-- Right Illustration -->
        <div class="relative flex-1 flex justify-center lg:justify-end z-0">
          <div 
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] blur-[100px] pointer-events-none opacity-80"
            style="background: radial-gradient(circle, rgba(167, 243, 208, 0.7) 0%, rgba(167, 243, 208, 0.2) 50%, transparent 80%);"
          ></div>
          
          <div class="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] bg-white rounded-[64px] lg:rounded-[100px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] flex items-center justify-center p-12 lg:p-20 group hover:scale-[1.02] transition-all duration-700">
            <div class="relative w-full h-full flex items-center justify-center bg-[#0f4a36] rounded-[48px] lg:rounded-[70px] shadow-2xl">
              <div class="relative text-white w-2/3 h-2/3 flex items-center justify-center">
                 <svg class="w-full h-full opacity-95" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12 2L4 5V11C4 16.19 7.41 21.05 12 22.5C16.59 21.05 20 16.19 20 11V5L12 2Z"/>
                   <path d="M12 16.35L11.3 15.65C8.8 13.36 7 11.83 7 10C7 8.5 8.12 7.37 9.62 7.37C10.45 7.37 11.23 7.75 11.77 8.35L12 8.6L12.23 8.35C12.77 7.75 13.55 7.37 14.38 7.37C15.88 7.37 17 8.5 17 10C17 11.83 15.2 13.36 12.7 15.65L12 16.35Z" fill="#fff" />
                 </svg>
              </div>
            </div>
          </div>
          <div class="absolute -top-24 -right-24 w-64 h-64 bg-[#dcfce7]/30 rounded-full blur-[100px] pointer-events-none"></div>
        </div>
      </div>
    </div>

    <!-- Info Cards Section -->
    <div class="bg-[#f6f3f2] py-24 lg:py-32 relative z-10">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(card, i) in infoCards" 
            :key="i"
            class="bg-white p-8 lg:p-10 rounded-[40px] shadow-sm hover:shadow-xl hover:translate-y-[-8px] transition-all duration-500 group"
          >
            <div class="w-14 h-14 bg-[#eef7f4] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#0f4a36] transition-colors duration-500">
              <svg v-if="card.icon === 'bank'" class="w-7 h-7 text-[#0f4a36] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m4 0h1m-5 4h1m4 0h1m-5 14h1m4 0h1m-5 4h1m4 0h1m-5 4h1m4 0h1"/></svg>
              <svg v-else-if="card.icon === 'id'" class="w-7 h-7 text-[#0f4a36] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"/></svg>
              <svg v-else-if="card.icon === 'sync'" class="w-7 h-7 text-[#0f4a36] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              <svg v-else-if="card.icon === 'shield-check'" class="w-7 h-7 text-[#0f4a36] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <h3 class="text-[20px] lg:text-[24px] font-bold text-gray-900 mb-5 tracking-tight group-hover:text-[#0f4a36] transition-colors">
              {{ t(`security.info_cards.${card.key}.title`) }}
            </h3>
            <p class="text-[15px] lg:text-[16px] text-gray-500 leading-relaxed font-medium">
              {{ t(`security.info_cards.${card.key}.desc`) }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Escrow Process Section -->
    <div class="bg-white py-24 lg:py-32">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <h2 class="text-[32px] lg:text-[48px] font-bold text-gray-900 text-center mb-24 tracking-tight">
          {{ t('security.escrow_process.title') }}
        </h2>

        <div class="relative">
          <!-- Connector Line -->
          <div class="absolute top-7 left-[10%] right-[10%] h-[1px] bg-gray-200 hidden md:block"></div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            <div 
              v-for="(step, i) in escrowSteps" 
              :key="i"
              class="flex flex-col items-center text-center"
            >
              <div class="w-14 h-14 bg-[#0f4a36] text-white rounded-full flex items-center justify-center text-[18px] font-bold mb-8 shadow-lg">
                {{ i + 1 }}
              </div>
              <h3 class="text-[20px] font-bold text-gray-900 mb-4 tracking-tight">
                {{ t(step.titleKey) }}
              </h3>
              <p class="text-[15px] text-gray-500 leading-relaxed max-w-[240px]">
                {{ t(step.descKey) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Compliance Box -->
        <div class="mt-24 bg-[#f6f3f2] p-8 lg:p-10 rounded-[32px] flex items-start gap-6">
          <div class="w-8 h-8 rounded-full bg-[#0f4a36] flex items-center justify-center flex-shrink-0 mt-1">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <p class="text-[14px] lg:text-[16px] text-gray-600 leading-relaxed font-medium">
            {{ t('security.escrow_process.note') }}
          </p>
        </div>
      </div>
    </div>
    <!-- All-or-Nothing Section -->
    <div class="bg-[#f6f3f2] py-24 lg:py-32 overflow-hidden">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <!-- Left: Content -->
          <div class="flex-1 max-w-[640px]">
            <h2 class="text-[32px] lg:text-[48px] font-bold text-gray-900 mb-8 tracking-tight">
              {{ t('security.all_or_nothing.title') }}
            </h2>
            <p class="text-[16px] lg:text-[18px] text-gray-500 leading-relaxed mb-10 font-medium">
              {{ t('security.all_or_nothing.desc') }}
            </p>
            
            <div class="space-y-5">
              <div 
                v-for="(feat, i) in aonFeatures" 
                :key="i"
                class="flex items-center gap-4"
              >
                <div class="w-6 h-6 rounded-full bg-[#0f4a36] flex items-center justify-center flex-shrink-0">
                  <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span class="text-[16px] text-gray-700 font-semibold">{{ t(`security.all_or_nothing.features[${i}]`) }}</span>
              </div>
            </div>
          </div>

          <!-- Right: Visual Card -->
          <div class="flex-1 w-full lg:w-auto">
            <div class="bg-white rounded-[40px] p-8 lg:p-16 shadow-xl relative">
              <div class="grid grid-cols-2 gap-8 lg:gap-12">
                <!-- Success -->
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-[2/1] overflow-hidden mb-8">
                    <div class="absolute inset-0 bg-[#eef7f4] rounded-t-full flex items-center justify-center pt-8">
                      <svg class="w-10 h-10 text-[#0f4a36]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21l-3-3h6l-3 3zm0-18l3 3h-6l3-3zM5 8l14 0m-14 4l14 0m-14 4l14 0"/></svg>
                    </div>
                  </div>
                  <h3 class="text-[18px] font-bold text-gray-900 mb-3">{{ t('security.all_or_nothing.goal_reached.title') }}</h3>
                  <p class="text-[12px] lg:text-[14px] text-gray-400 leading-tight">{{ t('security.all_or_nothing.goal_reached.desc') }}</p>
                </div>

                <!-- Not Reached -->
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-[2/1] overflow-hidden mb-8">
                    <div class="absolute inset-0 bg-[#fff1ec] rounded-t-full flex items-center justify-center pt-8">
                      <svg class="w-10 h-10 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                    </div>
                  </div>
                  <h3 class="text-[18px] font-bold text-gray-900 mb-3">{{ t('security.all_or_nothing.not_reached.title') }}</h3>
                  <p class="text-[12px] lg:text-[14px] text-gray-400 leading-tight">{{ t('security.all_or_nothing.not_reached.desc') }}</p>
                </div>
              </div>

              <!-- Decorative Divider -->
              <div class="mt-12 pt-12 border-t border-gray-100 flex justify-center">
                <div class="w-1/2 h-1 bg-[#fafaf9] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();

const features = [
  { key: 'feat1', icon: 'shield' },
  { key: 'feat2', icon: 'user' },
  { key: 'feat3', icon: 'refund' }
];

const infoCards = [
  { key: 'card1', icon: 'bank' },
  { key: 'card2', icon: 'id' },
  { key: 'card3', icon: 'sync' },
  { key: 'card4', icon: 'shield-check' }
];

const escrowSteps = [
  { titleKey: 'security.escrow_process.step1_title', descKey: 'security.escrow_process.step1_desc' },
  { titleKey: 'security.escrow_process.step2_title', descKey: 'security.escrow_process.step2_desc' },
  { titleKey: 'security.escrow_process.step3_title', descKey: 'security.escrow_process.step3_desc' },
  { titleKey: 'security.escrow_process.step4_title', descKey: 'security.escrow_process.step4_desc' }
];

const aonFeatures = computed(() => {
  const f = tm('security.all_or_nothing.features');
  return Array.isArray(f) ? f : Object.values(f || {});
});
</script>

<style scoped>
h1 {
  letter-spacing: -0.04em;
}
</style>
