<template>
  <div class="min-h-screen bg-[#fafaf9] pt-20">
    <!-- Hero Section / Search Bar -->
    <div class="relative w-full h-[500px] lg:h-[600px] flex flex-col items-center justify-center overflow-hidden bg-white">
      <!-- Decorative Blurred Blobs for the ambient gradient background -->
      <div class="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#eef8f3] rounded-full mix-blend-multiply filter blur-[80px] opacity-70 pointer-events-none"></div>
      <div class="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#f9f1e8] rounded-full mix-blend-multiply filter blur-[80px] opacity-70 pointer-events-none"></div>
      
      <div class="relative z-10 w-full max-w-[800px] mx-auto px-4 sm:px-6 text-center">
        <!-- Subtitle -->
        <div class="text-[11px] sm:text-[12px] font-black text-[#1e5c43] uppercase tracking-[0.2em] mb-4">
          {{ $t('contact.badge') }}
        </div>
        
        <!-- Main Title -->
        <h1 class="text-[36px] sm:text-[48px] lg:text-[56px] font-bold text-gray-900 leading-[1.1] tracking-tight mb-10 lg:mb-12">
          {{ $t('contact.title') }}
        </h1>

        <!-- Search Input -->
        <div class="relative w-full max-w-[700px] mx-auto">
          <!-- Interactive Shadow -->
          <div class="absolute inset-0 bg-black/5 rounded-full blur-xl transform translate-y-3 pointer-events-none"></div>
          
          <div class="relative bg-white rounded-full flex items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
            <div class="pl-6 pr-3 text-gray-500">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input 
              type="text" 
              :aria-label="$t('contact.search_placeholder')"
              :placeholder="$t('contact.search_placeholder')" 
              class="w-full py-5 pr-8 bg-transparent text-[16px] text-gray-900 placeholder:text-gray-500 outline-none rounded-r-full"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
      
      <!-- Category Filters -->
      <div class="flex flex-wrap justify-center gap-2 mb-16">
        <button 
          v-for="(label, key) in categories" 
          :key="key"
          @click="activeCategory = key"
          :class="[
            'px-5 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300',
            activeCategory === key 
              ? 'bg-[#1e5c43] text-white shadow-lg shadow-green-900/10' 
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          ]"
        >
          {{ label }}
        </button>
      </div>

      <!-- FAQ Items (Accordions) -->
      <div class="space-y-4">
        <div 
          v-for="(item, idx) in filteredFaq" 
          :key="idx"
          class="group"
        >
          <div 
            @click="toggleItem(idx)"
            :class="[
              'relative bg-white rounded-[24px] p-6 lg:p-8 cursor-pointer transition-all duration-300 border border-gray-100',
              expandedIdx === idx 
                ? 'shadow-[0_20px_40px_rgba(0,0,0,0.04)] border-l-[6px] border-l-[#1e5c43]' 
                : 'hover:shadow-[0_10px_30px_rgba(0,0,0,0.02)]'
            ]"
          >
            <div class="flex items-center justify-between">
              <h3 
                :class="[
                  'text-[16px] lg:text-[18px] font-bold transition-colors duration-300',
                  expandedIdx === idx ? 'text-[#1e5c43]' : 'text-gray-900'
                ]"
              >
                {{ item.q }}
              </h3>
              <div 
                :class="[
                  'transition-transform duration-300',
                  expandedIdx === idx ? 'rotate-180 text-[#1e5c43]' : 'text-gray-500'
                ]"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <!-- Answer Content -->
            <div 
              v-show="expandedIdx === idx"
              class="mt-6 text-gray-600 text-[15px] lg:text-[16px] leading-relaxed font-medium animate-fadeIn"
            >
              <div class="h-[1px] w-full bg-gray-50 mb-6"></div>
              {{ item.a }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { tm, rt } = useI18n();

const activeCategory = ref('all');
const expandedIdx = ref<number | null>(2); // Start with third item open as per screenshot

// Define categories correctly
const categories = computed(() => {
  const obj = tm('contact.cats') as Record<string, string>;
  const resolved: Record<string, string> = {};
  if (obj) {
    for (const key in obj) {
      if (obj[key]) {
        resolved[key] = rt(obj[key]);
      }
    }
  }
  return resolved;
});

// Accessing the FAQ array from i18n
const faqItems = computed(() => {
  const items = tm('contact.faq') as unknown[];
  return items.map(item => {
    const faq = item as Record<string, unknown>;
    return {
      q: rt(faq.q as string),
      a: rt(faq.a as string),
      cat: rt(faq.cat as string)
    };
  });
});

const filteredFaq = computed(() => {
  if (activeCategory.value === 'all') return faqItems.value;
  return faqItems.value.filter(item => item.cat === activeCategory.value);
});

const toggleItem = (idx: number) => {
  expandedIdx.value = expandedIdx.value === idx ? null : idx;
};
</script>

<style scoped>
h1 {
  letter-spacing: -0.04em;
}
input::placeholder {
  font-weight: 500;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
</style>
