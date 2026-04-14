<template>
  <div class="min-h-screen bg-[#fafaf9] pt-20">
    <!-- Header Section -->
    <div class="bg-white border-b border-gray-100 py-16 lg:py-24">
      <div class="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
        <div class="text-[12px] font-black text-[#1e5c43] uppercase tracking-[0.2em] mb-4">
          {{ t('terms.badge') }}
        </div>
        <h1 class="text-[40px] lg:text-[56px] font-bold text-gray-900 leading-tight tracking-tight">
          {{ t('terms.title') }}
        </h1>
        <p class="mt-6 text-gray-500 text-[16px] lg:text-[18px]">
          {{ t('terms.last_updated') }}: 14.04.2024
        </p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="max-w-[1240px] mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <div class="flex flex-col lg:flex-row gap-16 items-start">
        
        <!-- Sidebar Navigation -->
        <div class="lg:w-[320px] lg:sticky lg:top-32 space-y-6">
          <div class="bg-gray-50 rounded-[32px] p-8 border border-gray-100">
            <div class="text-[11px] font-black text-[#1e5c43] uppercase tracking-[0.2em] mb-8">
              {{ t('terms.toc') }}
            </div>
            <nav class="space-y-4">
              <div 
                v-for="(section, idx) in termsSections" 
                :key="idx"
                class="space-y-2"
              >
                <button 
                  @click="scrollToSection(idx)"
                  :class="[
                    'w-full text-left text-[14px] font-bold transition-all duration-300 pl-4 border-l-2',
                    activeIdx === idx 
                      ? 'text-[#1e5c43] border-[#1e5c43]' 
                      : 'text-gray-400 border-transparent hover:text-gray-600'
                  ]"
                >
                  {{ String(idx + 1).padStart(2, '0') }}. {{ section.title }}
                </button>
                
                <!-- Hint/Summary under the item -->
                <div 
                  v-if="activeIdx === idx"
                  class="pl-4 text-[12px] text-gray-500 font-medium leading-snug animate-fadeIn pb-2"
                >
                  {{ section.summary }}
                </div>
              </div>
            </nav>
          </div>

          <!-- Download PDF Button -->
          <button class="w-full bg-[#e8e8e6] hover:bg-[#dfdfdd] text-gray-900 font-bold py-5 rounded-full text-[15px] transition-all flex items-center justify-center gap-3">
            <svg class="w-5 h-5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            {{ t('terms.download_pdf') }}
          </button>
        </div>

        <!-- Main Content -->
        <div class="flex-1 max-w-[800px]">
          <div class="prose prose-lg max-w-none">
            <div 
              v-for="(section, idx) in termsSections" 
              :key="idx" 
              :id="'section-' + idx"
              class="mb-20 scroll-mt-32 section-target"
            >
              <h2 class="text-[26px] lg:text-[32px] font-bold text-gray-900 mb-8 flex items-baseline gap-4">
                <span class="text-[#1e5c43] opacity-20 text-[32px] lg:text-[40px] leading-none font-black">
                  {{ String(idx + 1).padStart(2, '0') }}.
                </span>
                {{ section.title }}
              </h2>
              <!-- Important Alert Box (for first section as per screenshot) -->
              <div 
                v-if="idx === 0"
                class="mb-10 p-6 lg:p-8 bg-[#f0f9f4] border-l-4 border-l-[#1e5c43] rounded-r-[24px] text-[#1e5c43] text-[15px] lg:text-[16px] leading-relaxed font-semibold italic"
              >
                {{ t('terms.important_note') }}
              </div>

              <div class="text-gray-600 leading-relaxed text-[17px] lg:text-[18px] space-y-5 font-medium">
                <p v-for="(p, pIdx) in section.content" :key="pIdx">
                  {{ p }}
                </p>
              </div>
            </div>
          </div>

          <!-- Accept Section/CTA -->
          <div class="mt-20 p-10 lg:p-14 bg-[#1e5c43] rounded-[48px] text-center shadow-2xl shadow-green-900/20 relative overflow-hidden">
            <!-- Decoration Circles -->
            <div class="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"></div>

            <div class="relative z-10">
              <h3 class="text-[28px] lg:text-[32px] font-bold text-white mb-4">{{ t('terms.footer_title') }}</h3>
              <p class="text-white/70 mb-10 max-w-[500px] mx-auto text-[17px] lg:text-[18px] leading-relaxed">
                {{ t('terms.footer_desc') }}
              </p>
              <router-link to="/contact" class="inline-flex items-center gap-3 bg-white text-[#1e5c43] px-10 py-5 rounded-2xl font-bold hover:gap-5 transition-all text-[17px] shadow-xl">
                {{ t('terms.footer_link') }}
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </router-link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, tm, rt } = useI18n();

interface TermSection {
  title: string;
  summary: string;
  content: string[];
}

const activeIdx = ref(0);

const termsSections = computed<TermSection[]>(() => {
  const sections = tm('terms.sections') as unknown[];
  return sections.map(s => {
    const item = s as Record<string, unknown>;
    return {
      title: rt(item.title as string),
      summary: rt(item.summary as string),
      content: (item.content as unknown[]).map(p => rt(p as string))
    };
  });
});

const scrollToSection = (idx: number) => {
  const el = document.getElementById('section-' + idx);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const parts = id.split('-');
        const lastPart = parts[parts.length - 1];
        if (lastPart) {
          activeIdx.value = parseInt(lastPart);
        }
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  document.querySelectorAll('.section-target').forEach(el => {
    observer?.observe(el);
  });
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<style scoped>
h1, h2, h3 {
  letter-spacing: -0.04em;
}
</style>
