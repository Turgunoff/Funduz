<script setup lang="ts">
import StatsSection from '@/components/StatsSection.vue';
import FeaturedProjects from '@/components/FeaturedProjects.vue';
import CTASection from '@/components/CTASection.vue';
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="bg-white overflow-hidden">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <!-- Left Content -->
          <div class="order-2 lg:order-1 text-center lg:text-left">
            <!-- Label -->
            <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f0f9ff] mb-6 lg:mb-8">
              <span class="text-[#1a946b] text-[13px] sm:text-[15px] font-bold">
                {{ $t('hero.badge') }}
              </span>
            </div>

            <!-- Heading -->
            <h1 class="text-[36px] sm:text-[52px] lg:text-[76px] font-bold text-gray-900 leading-[1.1] tracking-tight mb-6 lg:mb-8">
              {{ $t('hero.title_1') }} <br class="hidden sm:block" />
              {{ $t('hero.title_2') }} <br class="hidden sm:block" />
              <span class="text-[#1a946b] italic">{{ $t('hero.title_3') }}</span>
            </h1>

            <!-- Description -->
            <p class="text-[16px] sm:text-[19px] text-gray-500 leading-relaxed mb-10 max-w-[500px] mx-auto lg:mx-0">
              {{ $t('hero.description') }}
            </p>

            <!-- Buttons -->
            <div class="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-5">
              <router-link to="/explore" class="w-full sm:w-auto px-11 py-5 border border-gray-100 rounded-[20px] font-bold text-[15px] text-gray-900 bg-white hover:!bg-[#1a946b] hover:!text-white hover:!border-[#1a946b] transition-all shadow-sm cursor-pointer flex items-center justify-center">
                {{ $t('hero.btn_contribute') }}
              </router-link>
              <router-link to="/explore" class="w-full sm:w-auto px-11 py-5 border border-gray-100 rounded-[20px] font-bold text-[15px] text-gray-900 bg-white hover:!bg-[#1a946b] hover:!text-white hover:!border-[#1a946b] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group">
                {{ $t('hero.btn_create') }}
                <svg class="w-4 h-4 stroke-current group-hover:!text-white transition-colors" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
                </svg>
              </router-link>
            </div>
          </div>

          <!-- Right Image Section -->
          <div class="order-1 lg:order-2 relative">
            <div class="rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
              <img 
                src="/celebration_hero.png" 
                alt="Crowdfunding success celebration" 
                class="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <!-- Bottom Overlay Message -->
              <div class="absolute bottom-0 left-0 right-0 p-8 lg:p-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <h3 class="text-white text-[24px] lg:text-[28px] font-bold leading-tight mb-3">
                  {{ $t('hero.success_title') }}
                </h3>
                <p class="text-white/90 text-[16px] lg:text-[18px] font-medium font-sans">
                  {{ $t('hero.success_donors') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <StatsSection />

    <!-- Featured Projects Section -->
    <FeaturedProjects />

    <!-- Call to Action Section -->
    <CTASection />
  </div>
</template>

<style scoped>
h1 {
  letter-spacing: -0.02em;
}

.italic {
  display: inline-block;
  font-style: italic;
}
</style>
