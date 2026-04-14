<template>
  <div class="min-h-screen bg-white pt-20">
    <!-- Header Section -->
    <div class="max-w-[1240px] mx-auto px-4 sm:px-6 pt-16 lg:pt-24 pb-12">
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <div class="max-w-[600px]">
          <h1 class="text-[48px] lg:text-[72px] font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
            {{ t('privacy.title') }}
          </h1>
          <p class="text-gray-500 text-[18px] lg:text-[20px] leading-relaxed">
            {{ t('privacy.desc') }}
          </p>
        </div>
        <div class="bg-gray-100 px-4 py-2 rounded-lg text-[13px] font-bold text-gray-500 uppercase tracking-wider">
          {{ t('privacy.last_updated') }}: {{ t('privacy.last_updated_date') }}
        </div>
      </div>

      <!-- Quick Info Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          v-for="(card, i) in privacyCards" 
          :key="i"
          class="bg-[#fafaf9] p-6 rounded-[24px] flex items-center gap-4 border border-transparent hover:border-green-100 transition-all"
        >
          <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#1e5c43] shadow-sm">
            <svg v-if="card.icon === 'shield'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            <svg v-else-if="card.icon === 'lock'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            <svg v-else-if="card.icon === 'user'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            <svg v-else-if="card.icon === 'globe'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
          </div>
          <div class="text-[14px] font-bold text-gray-900 leading-tight">
            {{ card.title }}
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="max-w-[1240px] mx-auto px-4 sm:px-6 py-16 lg:py-24 border-t border-gray-100">
      <div class="flex flex-col lg:flex-row gap-20 items-start">
        
        <!-- Sidebar Navigation (Minimal version as per screenshot) -->
        <div class="lg:w-[240px] lg:sticky lg:top-32 hidden lg:block">
          <div class="text-[11px] font-black text-gray-300 uppercase tracking-[0.2em] mb-6">
            {{ t('privacy.toc') }}
          </div>
          <nav class="flex flex-col gap-4">
            <button 
              v-for="(section, idx) in privacySections" 
              :key="idx"
              @click="scrollToSection(idx)"
              :class="[
                'text-left text-[14px] font-bold transition-all duration-300 hover:text-gray-900',
                activeIdx === idx ? 'text-[#1e5c43]' : 'text-gray-400'
              ]"
            >
              {{ section.title }}
            </button>
          </nav>
        </div>

        <!-- Main Content -->
        <div class="flex-1 max-w-[800px]">
          <div class="prose prose-lg max-w-none">
            <div 
              v-for="(section, idx) in privacySections" 
              :key="idx" 
              :id="'privacy-section-' + idx"
              class="mb-24 scroll-mt-32 section-target"
            >
              <h2 class="text-[32px] lg:text-[40px] font-bold text-gray-900 mb-8 leading-tight">
                {{ idx + 1 }}. {{ section.title }}
              </h2>
              
              <!-- Special "Your Rights" box style (if it's the rights section) -->
              <div 
                v-if="section.title.toLowerCase().includes('huquq') || section.title.toLowerCase().includes('права')"
                class="mb-12 p-8 lg:p-10 bg-[#f0f9f4] rounded-[32px] border border-green-100"
              >
                <h4 class="text-[20px] font-bold text-[#1e5c43] mb-6 flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-[#1e5c43]"></div>
                  {{ section.title }} (GDPR & CCPA)
                </h4>
                <p class="text-[#1e5c43]/80 text-[16px] mb-8 leading-relaxed">
                  {{ section.summary }}
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    v-for="(p, pIdx) in section.content.slice(1)" 
                    :key="pIdx"
                    class="flex items-start gap-3 text-[14px] font-bold text-[#1e5c43]"
                  >
                    <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                    {{ p.replace('• ', '') }}
                  </div>
                </div>
              </div>

              <div v-else class="text-gray-600 leading-relaxed text-[17px] lg:text-[19px] space-y-6">
                <p v-for="(p, pIdx) in section.content" :key="pIdx">
                  {{ p }}
                </p>
              </div>
            </div>
          </div>

          <!-- Bottom CTA (Dark Version as per screenshot) -->
          <div class="mt-20 p-10 lg:p-16 bg-[#171c1a] rounded-[48px] relative overflow-hidden text-white shadow-2xl">
            <!-- Decoration -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[100px]"></div>
            
            <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div class="max-w-[450px]">
                <h3 class="text-[28px] lg:text-[36px] font-bold mb-4 tracking-tight leading-tight">
                  {{ t('privacy.footer_title') }}
                </h3>
                <p class="text-gray-400 text-[16px] lg:text-[18px]">
                  {{ t('privacy.footer_desc') }}
                </p>
              </div>
              <div class="flex flex-col gap-6">
                <div class="text-[20px] font-medium text-gray-300 italic opacity-80">
                  privacy@funduz.com
                </div>
                <button class="bg-[#9df3c4] hover:bg-[#86e0b1] text-[#0f1412] px-10 py-5 rounded-2xl font-bold transition-all text-[17px] shadow-lg shadow-green-400/10">
                  {{ t('privacy.footer_link') }}
                </button>
              </div>
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

interface PrivacySection {
  title: string;
  summary: string;
  content: string[];
}

interface FeatureCard {
  title: string;
  icon: string;
}

const activeIdx = ref(0);

const privacySections = computed<PrivacySection[]>(() => {
  const sections = tm('privacy.sections') as unknown[];
  return sections.map(s => {
    const item = s as Record<string, unknown>;
    return {
      title: rt(item.title as string),
      summary: rt(item.summary as string),
      content: (item.content as unknown[]).map(p => rt(p as string))
    };
  });
});

const privacyCards = computed<FeatureCard[]>(() => {
  return tm('privacy.cards') as FeatureCard[];
});

const scrollToSection = (idx: number) => {
  const el = document.getElementById('privacy-section-' + idx);
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
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
