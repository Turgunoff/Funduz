<template>
  <div class="min-h-screen bg-[#fafaf9] pt-28 lg:pt-32 relative overflow-hidden">
    <!-- Secondary Sub-Navbar (Page Specific) -->
    <div class="fixed top-16 lg:top-20 left-0 right-0 z-[90] bg-[#f0f9f6] border-b border-[#e1ece8] w-full shadow-sm overflow-x-auto no-scrollbar">
      <div class="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 h-12 flex items-center">
        <nav class="flex items-center space-x-8 text-[14px] font-bold text-gray-800 shrink-0">
          <router-link
            to="/dashboard"
            class="transition-colors h-12 flex items-center border-b-2 border-transparent hover:text-[#1a946b] whitespace-nowrap"
          >
            {{ $t("nav.projects") }}
          </router-link>
          <router-link
            to="/trends"
            class="transition-colors h-12 flex items-center border-b-2 border-transparent hover:text-[#1a946b] whitespace-nowrap"
          >
            {{ $t("nav.technologies") }}
          </router-link>
          <router-link
            to="/security"
            class="transition-colors h-12 flex items-center border-b-2 border-[#1a946b] text-[#1a946b] whitespace-nowrap"
          >
            {{ $t("nav.security") }}
          </router-link>
        </nav>
      </div>
    </div>
    
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
                <span class="text-[16px] text-gray-700 font-semibold">{{ feat }}</span>
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

    <!-- Creator Verification Section -->
    <div class="bg-white py-24 lg:py-32 overflow-hidden">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          <!-- Left: Content -->
          <div class="flex-1 max-w-[640px]">
            <h2 class="text-[32px] lg:text-[48px] font-bold text-gray-900 mb-8 tracking-tight">
              {{ t('security.creator_verification.title') }}
            </h2>
            <p class="text-[16px] lg:text-[18px] text-gray-500 leading-relaxed mb-12 font-medium">
              {{ t('security.creator_verification.desc') }}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                v-for="(check, i) in verificationChecks" 
                :key="i"
                class="flex items-center gap-4 p-4 bg-[#f6f3f2] rounded-2xl border border-transparent hover:border-[#0f4a36]/20 transition-all duration-300"
              >
                <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#0f4a36] shadow-sm">
                  <svg v-if="check.icon === 'id'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2"/></svg>
                  <svg v-else-if="check.icon === 'bank'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m4 0h1m-5 4h1m4 0h1m-5 14z"/></svg>
                  <svg v-else-if="check.icon === 'phone'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <svg v-else-if="check.icon === 'search'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <span class="text-[14px] lg:text-[15px] font-bold text-gray-800 tracking-tight">{{ check.label }}</span>
              </div>
            </div>
          </div>

          <!-- Right: Profile Card -->
          <div class="flex-1 w-full lg:w-auto">
            <div class="bg-[#f6f3f2] rounded-[40px] p-8 lg:p-14 relative">
              <!-- Verified Badge Indicator -->
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-[#0f4a36] text-white rounded-full text-[12px] font-bold mb-8 shadow-md">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                {{ t('security.creator_verification.badge_search') }}
              </div>

              <!-- Profile Box -->
              <div class="bg-white rounded-3xl p-6 shadow-xl flex items-center gap-6 mb-10 group hover:scale-[1.02] transition-all duration-500">
                <div class="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                   <img src="https://ui-avatars.com/api/?name=Artur+Rahim&background=0f4a36&color=fff" alt="Artur Rahim" class="w-full h-full object-cover" />
                </div>
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <h4 class="text-[18px] font-bold text-gray-900">Artur Rahim</h4>
                    <svg class="w-5 h-5 text-[#0f4a36]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  </div>
                  <p class="text-[14px] text-gray-400 font-medium">{{ t('security.creator_verification.delivered_count') }}</p>
                </div>
              </div>

              <p class="text-[14px] lg:text-[15px] text-gray-500 leading-relaxed font-medium">
                {{ t('security.creator_verification.disclaimer') }}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Refund Scenarios Section -->
    <div class="bg-[#111827] py-24 lg:py-32 overflow-hidden">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <h2 class="text-[32px] lg:text-[48px] font-bold text-white text-center mb-24 tracking-tight">
          {{ t('security.refund_scenarios.title') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(card, i) in refundCards" 
            :key="i"
            class="bg-[#1f2937] p-10 lg:p-12 rounded-[40px] border border-gray-800 hover:border-[#10b981]/30 transition-all duration-500 group"
          >
            <h3 class="text-[22px] lg:text-[26px] font-bold text-white mb-6 tracking-tight group-hover:text-[#10b981] transition-colors">
              {{ t(card.titleKey) }}
            </h3>
            <p class="text-[15px] lg:text-[16px] text-gray-400 leading-relaxed mb-10 font-medium h-24">
              {{ t(card.descKey) }}
            </p>
            <div class="pt-8 border-t border-gray-800">
              <span class="text-[15px] lg:text-[16px] text-[#10b981] font-bold tracking-tight">
                {{ t(card.timeKey) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Suspicious Activity Section -->
    <div class="bg-white py-24 lg:py-32 relative overflow-hidden">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div class="bg-white rounded-[40px] p-8 lg:p-14 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] border border-gray-50 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div class="flex-1 max-w-[700px]">
            <h2 class="text-[28px] lg:text-[36px] font-bold text-gray-900 mb-4 tracking-tight">
              {{ t('security.suspicious.title') }}
            </h2>
            <p class="text-[15px] lg:text-[17px] text-gray-500 leading-relaxed font-medium">
              {{ t('security.suspicious.desc') }}
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <button class="px-8 py-4 bg-white border-2 border-gray-100 text-gray-900 rounded-2xl text-[15px] font-bold hover:bg-[#b91c1c] hover:text-white hover:border-[#b91c1c] hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-gray-200/50">
              {{ t('security.suspicious.report_btn') }}
            </button>
            <router-link to="/contact" class="px-8 py-4 bg-white border-2 border-gray-100 text-gray-900 rounded-2xl text-[15px] font-bold hover:bg-[#1a946b] hover:text-white hover:border-[#1a946b] hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-gray-200/50">
              {{ t('security.suspicious.contact_btn') }}
            </router-link>
          </div>

        </div>
      </div>
      
      <!-- Decorative Elements -->
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#dcfce7]/40 rounded-full blur-[120px] pointer-events-none"></div>
    </div>

    <!-- Enterprise Security Section -->
    <div class="bg-[#f6f3f2] py-24 lg:py-32">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <h2 class="text-[32px] lg:text-[48px] font-bold text-gray-900 text-center mb-24 tracking-tight">
          {{ t('security.enterprise.title') }}
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          <div 
            v-for="(item, i) in enterpriseItems" 
            :key="i"
            class="bg-white p-6 lg:p-10 rounded-[32px] flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
          >
            <div class="w-12 h-12 bg-[#eef7f4] rounded-xl flex items-center justify-center text-[#1a946b] mb-8 group-hover:bg-[#1a946b] group-hover:text-white transition-colors duration-500">
              <svg v-if="item.icon === 'ssl'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              <svg v-else-if="item.icon === 'pci'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
              <svg v-else-if="item.icon === '2fa'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
              <svg v-else-if="item.icon === 'ai'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.811 11.21A2 2 0 0110 21h4a2 2 0 012-2M12 3a9 9 0 00-9 9 9 9 0 005.12 8.174l-.067-.134c.15.063.303.116.46.158A4.981 4.981 0 0012 21a4.981 4.981 0 003.487-1.428c.157-.042.311-.095.46-.158l-.067.134A9 9 0 0012 3z"/></svg>
              <svg v-else-if="item.icon === 'audit'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <svg v-else-if="item.icon === 'hosting'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>
            </div>
            <span class="text-[12px] lg:text-[13px] font-black text-gray-900 tracking-wider leading-tight">
              {{ item.label }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="bg-white py-24 lg:py-32">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <h2 class="text-[32px] lg:text-[48px] font-bold text-gray-900 text-center mb-16 lg:mb-24 tracking-tight">
          {{ t('security.faq.title') }}
        </h2>

        <div class="max-w-[900px] mx-auto space-y-4">
          <div 
            v-for="(item, i) in faqItems" 
            :key="i"
            class="bg-[#f6f3f2] rounded-[32px] overflow-hidden border border-gray-100/50 shadow-sm transition-all duration-300"
          >
            <button 
              @click="activeFaq = activeFaq === i ? null : i"
              class="w-full flex items-center justify-between px-8 lg:px-10 py-7 lg:py-8 text-left group"
            >
              <span class="text-[18px] lg:text-[20px] font-bold text-gray-900 group-hover:text-[#1a946b] transition-colors pr-8">
                {{ item.q }}
              </span>
              <div 
                class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 shadow-sm"
                :class="activeFaq === i ? 'bg-[#1a946b] text-white rotate-180' : 'bg-white text-gray-400'"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </button>
            
            <div 
              v-show="activeFaq === i"
              class="px-8 lg:px-10 pb-8 text-[15px] lg:text-[16px] text-gray-500 leading-relaxed font-medium animate-fade-in-down"
            >
              {{ item.a }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Final Contact Section -->
    <div class="bg-white pb-24 lg:pb-32">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div class="bg-[#1a946b] rounded-[48px] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-green-900/10">
          <!-- Decoration Circles -->
          <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-10 group-hover:translate-y-0 transition-transform duration-700"></div>
          <div class="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-10 group-hover:translate-y-0 transition-transform duration-700"></div>
          
          <div class="relative z-10 max-w-[800px] mx-auto">
            <h2 class="text-white text-[32px] lg:text-[48px] font-bold mb-6 tracking-tight">
              {{ t('security.final_contact.title') }}
            </h2>
            <p class="text-white/80 text-[16px] lg:text-[18px] leading-relaxed font-bold mb-12">
              {{ t('security.final_contact.desc') }}
            </p>
            
            <router-link to="/contact" class="inline-flex items-center px-12 py-5 bg-[#0d5c42] text-white rounded-2xl text-[16px] font-bold border-2 border-transparent hover:border-white hover:bg-white hover:text-[#0d5c42] transition-all duration-300 shadow-xl shadow-black/10 transform hover:-translate-y-1">
              {{ t('security.final_contact.btn') }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();
const activeFaq = ref<number | null>(null);

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

const aonFeatures = computed(() => tm('security.all_or_nothing.features') as string[]);
const verificationChecks = computed(() => {
  const labels = tm('security.creator_verification.checks') as string[];
  const icons = ['id', 'bank', 'phone', 'search'];
  return labels.map((label, i) => ({ label, icon: icons[i] || 'search' }));
});

const refundCards = [
  { titleKey: 'security.refund_scenarios.card1.title', descKey: 'security.refund_scenarios.card1.desc', timeKey: 'security.refund_scenarios.card1.time' },
  { titleKey: 'security.refund_scenarios.card2.title', descKey: 'security.refund_scenarios.card2.desc', timeKey: 'security.refund_scenarios.card2.time' },
  { titleKey: 'security.refund_scenarios.card3.title', descKey: 'security.refund_scenarios.card3.desc', timeKey: 'security.refund_scenarios.card3.time' }
];

const enterpriseItems = computed(() => {
  const labels = tm('security.enterprise.items') as string[];
  const icons = ['ssl', 'pci', '2fa', 'ai', 'audit', 'hosting'];
  return labels.map((label, i) => ({ label, icon: icons[i] || 'shield' }));
});

const faqItems = computed(() => tm('security.faq.items') as Array<{ q: string; a: string }>);
</script>

<style scoped>
h1 {
  letter-spacing: -0.04em;
}
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-down {
  animation: fadeInDown 0.4s ease-out forwards;
}
</style>
