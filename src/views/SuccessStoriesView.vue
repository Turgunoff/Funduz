<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, tm, locale } = useI18n();

const activeFilter = ref('all');

// Pill animation logic (identical to ExploreView)
const pillButtons = ref<HTMLElement[]>([]);
const pillStyle = ref({
  left: '0px',
  width: '0px',
  height: '0px'
});

const updatePill = async () => {
  await nextTick();
  const index = ['all', 'tech', 'eco', 'art', 'social'].indexOf(activeFilter.value);
  const activeBtn = pillButtons.value[index];
  if (activeBtn) {
    pillStyle.value = {
      left: `${activeBtn.offsetLeft}px`,
      width: `${activeBtn.offsetWidth}px`,
      height: `${activeBtn.offsetHeight}px`
    };
  }
};

onMounted(updatePill);
watch([activeFilter, locale], updatePill);

interface Story {
  id: number;
  title: string;
  quote: string;
  author: string;
  raised: string;
  cat: string;
}

const storiesData = computed(() => tm('success_stories.items') as unknown as Story[]);
const filteredStories = computed(() => {
  if (activeFilter.value === 'all') return storiesData.value;
  return storiesData.value.filter(s => s.cat === activeFilter.value);
});

// Stats data mapped from i18n
const stats = computed(() => [
  { value: "250+", label: t('success_stories.stats.projects') },
  { value: "15B UZS", label: t('success_stories.stats.raised') },
  { value: "12,500+", label: t('success_stories.stats.backers') }
]);

</script>

<template>
  <div class="min-h-screen bg-white pt-24 lg:pt-32">
    <!-- Section 1: Hero -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
      <div class="max-w-4xl">
        <h1 class="text-[52px] md:text-[72px] lg:text-[88px] font-bold text-gray-900 leading-[1.05] tracking-[-0.04em] mb-10">
          {{ t('success_stories.title') }}
        </h1>
        <p class="text-[18px] lg:text-[22px] text-gray-500 leading-relaxed font-medium max-w-2xl mb-16 lg:mb-24">
          {{ t('success_stories.subtitle') }}
        </p>
      </div>

      <!-- Divider -->
      <div class="w-full h-[1px] bg-gray-100 mb-12"></div>

      <!-- Stats Grid -->
      <div class="flex flex-col sm:flex-row gap-12 lg:gap-20">
        <div 
          v-for="(stat, idx) in stats" 
          :key="idx"
          class="relative flex flex-col gap-2"
        >
          <div v-if="idx > 0" class="hidden sm:block absolute left-[-40px] lg:left-[-50px] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gray-100"></div>
          <div class="text-[36px] lg:text-[44px] font-bold text-[#1a946b] leading-none tracking-tight">
            {{ stat.value }}
          </div>
          <div class="text-[12px] lg:text-[13px] font-black text-gray-400 uppercase tracking-[0.15em]">
            {{ stat.label }}
          </div>
        </div>
      </div>

      <!-- Section 2: Featured Story -->
      <div class="mt-20 lg:mt-32">
        <div class="bg-[#f8f7f6] rounded-[48px] overflow-hidden lg:flex items-stretch min-h-[600px] border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl">
          <div class="lg:w-1/2 relative min-h-[400px] lg:min-h-0">
            <img 
              src="/artisan_success.png" 
              class="absolute inset-0 w-full h-full object-cover rounded-t-[48px] lg:rounded-l-[48px] lg:rounded-tr-none" 
              alt="Artisan Story"
            >
          </div>
          <div class="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center">
            <div class="mb-8 lg:mb-10">
              <span class="px-5 py-2.5 bg-[#dcfce7] text-[#166534] text-[13px] font-bold rounded-full uppercase tracking-wide">
                {{ t('success_stories.featured.badge') }}
              </span>
            </div>
            <h2 class="text-[32px] md:text-[44px] lg:text-[56px] font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
              {{ t('success_stories.featured.title') }}
            </h2>
            <div class="mb-10 flex">
              <div class="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#ffedd5] text-[#9a3412] rounded-2xl font-bold text-[15px] shadow-sm">
                <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {{ t('success_stories.featured.metrics') }}
              </div>
            </div>
            <p class="text-[18px] lg:text-[20px] text-gray-500 leading-relaxed font-normal mb-12">
              {{ t('success_stories.featured.desc') }}
            </p>
            <router-link to="/story/1" class="inline-flex items-center gap-4 text-[18px] font-bold text-[#1a946b] hover:gap-6 transition-all duration-300 group">
              {{ t('success_stories.featured.cta') }}
              <svg class="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Section 3: More Milestones (Grid) -->
      <div class="mt-24 lg:mt-32">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-8">
          <div class="max-w-2xl">
            <h2 class="text-[32px] lg:text-[40px] font-bold text-gray-900 mb-4 tracking-tight">
              {{ t('success_stories.milestones_title') }}
            </h2>
            <p class="text-[16px] lg:text-[18px] text-gray-500 font-medium">
              {{ t('success_stories.milestones_desc') }}
            </p>
          </div>

          <!-- Premium Selector (logic from ExploreView) -->
          <div class="inline-flex bg-gray-50 p-1.5 rounded-full border border-gray-100 relative items-center">
            <div 
              class="absolute bg-[#1a946b] rounded-full transition-all duration-300 ease-out shadow-lg"
              :style="pillStyle"
            ></div>
            <button 
              v-for="cat in ['all', 'tech', 'eco', 'art', 'social']" 
              :key="cat"
              ref="pillButtons"
              @click="activeFilter = cat"
              :class="[
                'relative z-10 px-6 py-2.5 rounded-full font-bold text-[14px] whitespace-nowrap transition-all duration-300',
                activeFilter === cat ? 'text-white' : 'text-gray-400 hover:text-gray-600'
              ]"
            >
              {{ t(`success_stories.filters.${cat}`) }}
            </button>
          </div>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-24">
          <div 
            v-for="story in filteredStories" 
            :key="story.id"
            class="bg-white rounded-[40px] overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-gray-50 flex flex-col h-full animate-fadeIn"
          >
            <!-- Image with Success Badge -->
            <div class="relative h-[240px] lg:h-[280px] overflow-hidden">
              <img 
                :src="story.cat === 'eco' ? '/eco_story.png' : (story.cat === 'tech' ? 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800' : 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800')" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Story"
              >
              <!-- Success Badge (Brown) -->
              <div class="absolute top-5 left-5 px-4 py-2 bg-[#78350f] text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-lg">
                100% {{ t('success_stories.read_more').toUpperCase().split(' ')[0] }}...
              </div>
            </div>
            <div class="p-8 lg:p-10 flex flex-col flex-grow">
              <h3 class="text-[22px] lg:text-[26px] font-bold text-[#064e3b] mb-6 group-hover:text-[#1a946b] transition-colors leading-tight">
                {{ story.title }}
              </h3>
              <p class="text-[14px] lg:text-[15px] text-gray-400 leading-relaxed italic mb-10 flex-grow font-medium">
                "{{ story.quote }}"
              </p>
              
              <!-- Read Story Link -->
              <div class="mt-auto">
                <router-link to="/story/1" class="inline-flex items-center gap-2 text-[#059669] font-bold text-[14px] hover:gap-3 transition-all duration-300">
                  {{ t('success_stories.read_more') }}
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 4: National Reach (Premium CTA) -->
      <div class="mt-20 lg:mt-32 pb-24 lg:pb-32">
        <div class="bg-[#0f4a35] rounded-[48px] p-8 lg:p-20 relative overflow-hidden group shadow-2xl flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <!-- Background Decoration (Map-like Pattern) -->
          <div class="absolute inset-0 opacity-10 pointer-events-none">
            <svg class="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M150 100 L250 80 L350 120 L450 100 L550 140 L650 120 L750 160" stroke="white" stroke-width="2" stroke-dasharray="10 10" />
              <circle cx="200" cy="150" r="30" stroke="white" stroke-width="1" />
              <circle cx="400" cy="250" r="50" stroke="white" stroke-width="1" />
              <circle cx="600" cy="150" r="40" stroke="white" stroke-width="1" />
            </svg>
          </div>
          
          <!-- Left side: Content -->
          <div class="relative z-10 lg:w-1/2">
            <h2 class="text-[40px] lg:text-[64px] font-bold text-white mb-8 tracking-[-0.03em] leading-[1.1]">
              {{ t('success_stories.reach_section.title') }}
            </h2>
            <p class="text-[18px] lg:text-[20px] text-green-100/80 mb-12 font-medium max-w-xl leading-relaxed">
              {{ t('success_stories.reach_section.desc') }}
            </p>
            <router-link to="/community" class="inline-flex items-center px-10 py-4 bg-white text-[#0f4a35] font-bold rounded-full text-[16px] hover:bg-[#1a946b] hover:text-white transition-all duration-300 shadow-xl hover:shadow-green-500/20">
              {{ t('success_stories.reach_section.btn') }}
            </router-link>
          </div>

          <!-- Right side: Stats Grid -->
          <div class="relative z-10 lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 w-full">
            <!-- Card 1 -->
            <div class="bg-white rounded-[32px] p-8 lg:p-10 shadow-lg transform transition-transform hover:-translate-y-2 duration-300">
              <div class="text-[32px] lg:text-[40px] font-bold text-[#0f4a35] mb-2">12</div>
              <div class="text-[12px] font-black text-gray-400 uppercase tracking-widest">
                {{ t('success_stories.reach_section.stats.regions') }}
              </div>
            </div>
            <!-- Card 2 -->
            <div class="bg-white rounded-[32px] p-8 lg:p-10 shadow-lg transform transition-transform hover:-translate-y-2 duration-300">
              <div class="text-[32px] lg:text-[40px] font-bold text-[#0f4a35] mb-2">94%</div>
              <div class="text-[12px] font-black text-gray-400 uppercase tracking-widest">
                {{ t('success_stories.reach_section.stats.success') }}
              </div>
            </div>
            <!-- Card 3 -->
            <div class="bg-white rounded-[32px] p-8 lg:p-10 shadow-lg transform transition-transform hover:-translate-y-2 duration-300">
              <div class="text-[32px] lg:text-[40px] font-bold text-[#0f4a35] mb-2">4.2M</div>
              <div class="text-[12px] font-black text-gray-400 uppercase tracking-widest">
                {{ t('success_stories.reach_section.stats.visitors') }}
              </div>
            </div>
            <!-- Card 4 -->
            <div class="bg-white rounded-[32px] p-8 lg:p-10 shadow-lg transform transition-transform hover:-translate-y-2 duration-300">
              <div class="text-[32px] lg:text-[40px] font-bold text-[#0f4a35] mb-2">3.5k</div>
              <div class="text-[12px] font-black text-gray-400 uppercase tracking-widest">
                {{ t('success_stories.reach_section.stats.creators') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');

.min-h-screen {
  font-family: 'Outfit', sans-serif;
}

h1 {
  letter-spacing: -0.05em;
}

.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.6s ease-out forwards;
}
</style>
