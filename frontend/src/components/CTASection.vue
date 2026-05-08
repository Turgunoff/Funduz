<template>
  <section class="bg-white py-20">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-[#1a946b] rounded-[48px] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden relative">
        <!-- Decoration Circles -->
        <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute -top-20 -right-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>

        <!-- Left Column: Content -->
        <div class="relative z-10 w-full lg:w-1/2">
          <h2 class="text-white text-[44px] lg:text-[54px] font-bold leading-[1.1] mb-8">
            {{ $t('cta.title') }}
          </h2>
          <p class="text-white/80 text-[18px] lg:text-[20px] leading-relaxed mb-12 max-w-[500px]">
            {{ $t('cta.subtitle') }}
          </p>

          <!-- Buttons as links with specific hover behavior -->
          <div class="flex flex-wrap gap-5">
            <router-link to="/login" class="px-10 py-[18px] bg-[#0d5c42] text-white font-bold rounded-2xl text-[16px] border-2 border-transparent hover:border-white hover:bg-white hover:text-[#0d5c42] transition-all duration-300 cursor-pointer shadow-xl shadow-black/10 flex items-center justify-center transform hover:-translate-y-1">
              {{ $t('cta.btn_start') }}
            </router-link>
            <router-link to="/contact" class="px-10 py-[18px] bg-[#0d5c42] text-white font-bold rounded-2xl text-[16px] border-2 border-transparent hover:border-white hover:bg-white hover:text-[#0d5c42] transition-all duration-300 cursor-pointer shadow-xl shadow-black/10 flex items-center justify-center transform hover:-translate-y-1">
              {{ $t('cta.btn_expert') }}
            </router-link>
          </div>
        </div>

        <!-- Right Column: Features Card -->
        <div class="relative z-10 w-full lg:w-auto">
          <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-[32px] p-8 sm:p-10 w-full lg:w-[460px]">
            <!-- Feature 1 -->
            <div class="flex items-center gap-6 mb-10">
              <div class="w-16 h-16 rounded-full bg-orange-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <div>
                <h4 class="text-white text-[20px] font-bold mb-1">{{ $t('cta.feature1') }}</h4>
                <p class="text-white/60 text-[15px]">{{ $t('cta.feature1_desc') }}</p>
              </div>
            </div>

            <!-- Divider -->
            <div class="h-[1px] w-full bg-white/10 mb-10 ml-4"></div>

            <!-- Feature 2 -->
            <div class="flex items-center gap-6">
              <div class="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-600/30">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h4 class="text-white text-[20px] font-bold mb-1">{{ $t('cta.feature2') }}</h4>
                <p class="text-white/60 text-[15px]">{{ $t('cta.feature2_desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
