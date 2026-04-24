<template>
  <div class="pt-24 lg:pt-32 pb-20 bg-[#f8f9fa] min-h-screen">
    <!-- Hero Section -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-32 lg:mb-56">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Left Side: Content -->
        <div class="order-2 lg:order-1">
          <h1 class="text-[36px] md:text-[48px] lg:text-[72px] font-black text-gray-900 leading-[1] mb-8 lg:mb-10 tracking-tight">
            {{ $t('about.hero_title_start') }} <br class="hidden lg:block" />
            <span class="text-[#1a946b]">{{ $t('about.hero_title_highlight') }}</span>
          </h1>
          <p class="text-[16px] lg:text-[20px] text-gray-500 font-medium leading-relaxed max-w-[540px]">
            {{ $t('about.hero_desc') }}
          </p>
        </div>

        <!-- Right Side: Image -->
        <div class="order-1 lg:order-2">
          <div class="relative aspect-[4/3] lg:aspect-square rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
              alt="Building the future"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Mission Section -->
    <div class="bg-[#f6f3f2] py-24 lg:py-32 mb-0">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 class="text-[28px] lg:text-[40px] font-black text-gray-900 tracking-tight">
              {{ $t('about.mission_label') }}
            </h2>
          </div>
          <div>
            <p class="text-[16px] lg:text-[19px] text-gray-500 font-medium leading-relaxed mb-12">
              {{ $t('about.mission_text') }}
            </p>
            <div class="border-l-4 border-[#1a946b] pl-8 py-2">
              <p class="text-[18px] lg:text-[24px] font-black text-gray-900 italic tracking-tight leading-tight">
                "{{ $t('about.mission_quote') }}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Bar Section -->
    <div class="bg-[#0f4634] py-16 lg:py-24">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          <div v-for="(stat, i) in aboutStats" :key="i" class="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span class="text-[32px] md:text-[44px] lg:text-[56px] font-black text-white leading-none mb-4">
              {{ stat.value }}
            </span>
            <span class="text-[10px] lg:text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">
              {{ stat.label }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Our Story Section -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-32 lg:mb-56 mt-32 lg:mt-56">
      <h2 class="text-[32px] lg:text-[48px] font-black text-gray-900 text-center mb-16 lg:mb-24 tracking-tight">
        {{ $t('about.story_title') }}
      </h2>

      <div class="relative">
        <!-- Central Line -->
        <div class="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2 hidden lg:block"></div>

        <div class="space-y-16 lg:space-y-32">
          <div
            v-for="(event, i) in timelineEvents"
            :key="i"
            class="relative flex flex-col lg:flex-row items-center"
            :class="i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
          >
            <!-- Content -->
            <div class="w-full lg:w-1/2 px-4 lg:px-16 text-center" :class="i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'">
              <span class="text-[14px] lg:text-[16px] font-black text-[#1a946b] uppercase tracking-wider mb-2 block">
                {{ event.date }}
              </span>
              <h4 class="text-[24px] lg:text-[32px] font-black text-gray-900 mb-4 tracking-tight leading-tight">
                {{ event.title }}
              </h4>
              <p class="text-[15px] lg:text-[17px] text-gray-500 font-medium leading-relaxed max-w-[480px] mx-auto" :class="i % 2 === 0 ? 'lg:ml-auto lg:mr-0' : 'lg:mr-auto lg:ml-0'">
                {{ event.desc }}
              </p>
            </div>

            <!-- Icon (The Circle on the line) -->
            <div class="absolute left-1/2 -translate-x-1/2 w-12 h-12 lg:w-16 lg:h-16 bg-[#0f4634] rounded-full border-4 border-white shadow-xl flex items-center justify-center z-10 hidden lg:flex">
              <span class="text-white text-xl lg:text-2xl">
                {{ i === 0 ? '🚀' : (i === 1 ? '🗺️' : '🌍') }}
              </span>
            </div>

            <!-- Mobile Icon spacer (simple circle) -->
             <div class="w-10 h-10 bg-[#0f4634] rounded-full border-4 border-white shadow-md flex items-center justify-center mt-6 lg:hidden">
                <span class="text-white text-sm">
                  {{ i === 0 ? '🚀' : (i === 1 ? '🗺️' : '🌍') }}
                </span>
             </div>

            <!-- Empty space for the other side on desktop -->
            <div class="hidden lg:block lg:w-1/2"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- What We Believe In Section -->
    <div class="bg-[#f6f3f2] py-24 lg:py-32">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-[32px] lg:text-[48px] font-black text-gray-900 text-center mb-16 lg:mb-24 tracking-tight">
          {{ $t('about.believes_title') }}
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div
            v-for="(belief, i) in believeList"
            :key="i"
            class="bg-white rounded-[40px] p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
          >
            <div class="w-14 h-14 rounded-full bg-[#f0fdf4] text-[#1a946b] flex items-center justify-center mb-8 group-hover:bg-[#1a946b] group-hover:text-white transition-colors duration-500">
              <span class="text-2xl">{{ belief.icon }}</span>
            </div>
            <h4 class="text-[20px] lg:text-[22px] font-black text-gray-900 mb-4 tracking-tight">
              {{ belief.title }}
            </h4>
            <p class="text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed">
              {{ belief.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
      <h2 class="text-[32px] lg:text-[48px] font-black text-gray-900 text-center mb-16 lg:mb-24 tracking-tight">
        {{ $t('about.team_title') }}
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        <div
          v-for="(member, i) in teamMembers"
          :key="i"
          class="text-center group"
        >
          <div class="relative w-48 h-48 lg:w-56 lg:h-56 mx-auto mb-8">
            <!-- Avatar background graphic -->
            <div
              class="absolute inset-0 rounded-full bg-gradient-to-tr transition-transform duration-700 group-hover:rotate-12"
              :class="[
                i === 0 ? 'from-[#0f4634] to-[#1a946b]' : '',
                i === 1 ? 'from-[#1a946b] to-[#0f4634]' : '',
                i === 2 ? 'from-gray-100 to-gray-200' : '',
                i === 3 ? 'from-orange-500 to-red-600' : ''
              ]"
            ></div>
            <!-- Identity image (placeholder/avatar) -->
            <div class="relative w-full h-full rounded-full border-4 border-white shadow-lg overflow-hidden flex items-end justify-center">
               <img
                :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}&backgroundColor=transparent`"
                :alt="member.name"
                class="w-4/5 h-4/5 object-contain"
               />
            </div>
          </div>
          <h4 class="text-[20px] lg:text-[22px] font-black text-gray-900 mb-2 tracking-tight">
            {{ member.name }}
          </h4>
          <p class="text-[14px] lg:text-[15px] text-gray-400 font-bold uppercase tracking-widest">
            {{ member.role }}
          </p>
        </div>
      </div>
    </div>

    <!-- Partners Section -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <h2 class="text-[32px] lg:text-[48px] font-black text-gray-900 text-center mb-16 lg:mb-24 tracking-tight">
        {{ $t('about.partners_title') }}
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center opacity-70">
        <div
          v-for="(partner, i) in partners"
          :key="i"
          class="grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer flex justify-center p-4 lg:p-8 rounded-[32px] hover:bg-white hover:shadow-xl group"
        >
          <img
            :src="partner.logo"
            :alt="partner.name"
            class="h-10 lg:h-14 object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <div class="bg-[#1a946b] rounded-[48px] p-12 lg:p-24 text-center shadow-2xl relative overflow-hidden group">
        <!-- Decorative background circles -->
        <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

        <h2 class="relative z-10 text-[32px] md:text-[44px] lg:text-[64px] font-black text-white leading-tight mb-12 tracking-tight max-w-[900px] mx-auto">
          {{ $t('about.cta_title') }}
        </h2>

        <div class="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <router-link 
            to="/login" 
            class="px-12 py-5 bg-[#0d5c42] text-white rounded-2xl font-black text-[18px] transition-all duration-300 shadow-xl border-2 border-transparent hover:border-white hover:bg-white hover:text-[#0d5c42] hover:-translate-y-1 transform active:scale-95"
          >
            {{ $t('about.cta_btn_start') }}
          </router-link>
          <router-link 
            to="/dashboard" 
            class="px-12 py-5 bg-[#0d5c42] border-2 border-transparent text-white rounded-2xl font-black text-[18px] transition-all duration-300 shadow-xl hover:border-white hover:bg-white hover:text-[#0d5c42] hover:-translate-y-1 transform active:scale-95"
          >
            {{ $t('about.cta_btn_explore') }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

interface TimelineEvent {
  date: string;
  title: string;
  desc: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface BelieveItem {
  title: string;
  desc: string;
  icon: string;
}

interface TeamMember {
  name: string;
  role: string;
}

const { tm } = useI18n();

const timelineEvents = computed(() => {
  return tm('about.timeline') as TimelineEvent[];
});

const aboutStats = computed(() => {
  return tm('about.stats') as StatItem[];
});

const believeList = computed(() => {
  return tm('about.believes') as BelieveItem[];
});

const teamMembers = computed(() => {
  return tm('about.team') as TeamMember[];
});

const partners = [
  { name: 'TBC Bank', logo: 'https://www.google.com/s2/favicons?domain=tbcbank.ge&sz=128' },
  { name: 'IT Park', logo: 'https://www.google.com/s2/favicons?domain=it-park.uz&sz=128' },
  { name: 'Payme', logo: 'https://cdn.payme.uz/logo/payme_color.svg' },
  { name: 'Click', logo: 'https://www.google.com/s2/favicons?domain=click.uz&sz=128' },
  { name: 'AloqaBank', logo: 'https://www.google.com/s2/favicons?domain=aloqabank.uz&sz=128' }
];
</script>

<style scoped>
h1 {
  font-family: 'Outfit', sans-serif;
}
</style>
