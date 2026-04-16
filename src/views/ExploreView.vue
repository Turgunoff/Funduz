<template>
  <div class="pt-16 lg:pt-20 bg-[#fcfcfc] min-h-screen">
    
    <!-- Hero Section -->
    <div class="pt-12 pb-10 lg:pt-20 lg:pb-16 bg-white border-b border-gray-50">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-[28px] md:text-[44px] lg:text-[56px] font-black text-gray-900 leading-[1.2] lg:leading-[1.1] max-w-4xl mx-auto tracking-tight mb-10 lg:mb-12">
          {{ $t('explore.hero_title') }}
        </h1>
        
        <!-- Local Search Input -->
        <div class="relative max-w-xl mx-auto px-4 sm:px-0">
          <input 
            v-model="searchQuery"
            @keyup.enter="handleLocalSearch"
            type="text" 
            :placeholder="$t('explore.search_placeholder')"
            class="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 lg:py-5 pl-14 pr-6 text-[15px] lg:text-[16px] font-bold text-gray-900 shadow-sm focus:ring-2 focus:ring-[#1a946b]/20 focus:border-[#1a946b] transition-all outline-none"
          />
          <div class="absolute left-9 sm:left-5 top-1/2 -translate-y-1/2 text-gray-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      
      <!-- Filter & Sort Bar -->
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-10 lg:mb-12 gap-4 lg:gap-6 bg-white p-1.5 lg:p-2 rounded-[24px] lg:rounded-full border border-gray-50 shadow-sm">
        <!-- Horizontal Scrollable Categories -->
        <div class="relative flex items-center overflow-x-auto no-scrollbar px-2 py-1 lg:py-0" ref="pillContainer">
          <!-- Animated Background Pill -->
          <div 
            class="absolute bg-[#1a946b] rounded-full transition-all duration-300 ease-out shadow-md"
            :style="pillStyle"
          ></div>

          <button 
            v-for="cat in ['all', 'tech', 'art', 'social', 'edu', 'eco']" 
            :key="cat"
            ref="pillButtons"
            @click="activeCategory = cat"
            :class="[
              'relative z-10 px-5 lg:px-6 py-2.5 lg:py-3 rounded-full font-bold text-[13px] lg:text-[14px] whitespace-nowrap transition-all duration-300',
              activeCategory === cat 
                ? 'text-white' 
                : 'text-gray-500 hover:text-gray-900'
            ]"
          >
            {{ $t(`explore.categories.${cat}`) }}
          </button>
        </div>

        <!-- Sort Select -->
        <div class="px-2 lg:px-4 mb-1 lg:mb-0">
          <div class="relative w-full md:min-w-[160px]">
            <select v-model="activeSort" class="appearance-none w-full bg-gray-50 lg:bg-gray-100 border-none rounded-full px-5 lg:px-6 py-2.5 lg:py-3 pr-10 text-[13px] lg:text-[14px] font-bold text-gray-700 focus:ring-2 focus:ring-[#1a946b]/20 cursor-pointer">
              <option value="newest">{{ $t('explore.sort.newest') }}</option>
              <option value="popular">{{ $t('explore.sort.popular') }}</option>
              <option value="ending">{{ $t('explore.sort.ending') }}</option>
            </select>
            <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg class="w-3.5 h-3.5 lg:w-4 lg:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-12 lg:mb-16">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="group bg-white rounded-[32px] lg:rounded-[40px] p-5 lg:p-6 border border-gray-100/50 hover:border-[#1a946b]/30 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col h-full"
        >
          <!-- Project Image -->
          <div class="relative rounded-[24px] lg:rounded-[32px] overflow-hidden aspect-[4/3] mb-5 lg:mb-6 bg-gray-50 border border-gray-50 shadow-sm">
            <img :src="project.img" :alt="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div class="absolute top-3 left-3 lg:top-4 lg:left-4 px-3 lg:px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] lg:text-[11px] font-black uppercase tracking-wider text-gray-800">
              {{ project.category }}
            </div>
          </div>

          <!-- Content Meta -->
          <div class="flex items-center gap-2 mb-4">
            <div class="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-orange-100 flex items-center justify-center text-[10px] lg:text-[11px] font-bold text-orange-600">
              {{ project.author.charAt(0) }}
            </div>
            <span class="text-[11px] lg:text-xs font-semibold text-gray-400">{{ project.author }}</span>
          </div>

          <!-- Title -->
          <h3 class="text-[18px] lg:text-[20px] font-bold text-gray-900 leading-[1.3] mb-5 lg:mb-6 min-h-[48px] lg:min-h-[52px]">
            {{ project.title }}
          </h3>

          <!-- Progress Block -->
          <div class="mt-auto">
            <div class="flex justify-between items-end mb-2.5 lg:mb-3">
              <div class="text-[16px] lg:text-[17px] font-black text-gray-900">
                {{ project.raised }} <span class="text-[11px] lg:text-[13px] font-bold text-gray-400 uppercase">so'm</span>
              </div>
              <div class="text-[13px] lg:text-[14px] font-black text-[#1a946b]">
                {{ project.progress }}%
              </div>
            </div>
            <div class="w-full h-2 bg-gray-50 rounded-full mb-4 overflow-hidden">
              <div class="h-full bg-[#1a946b] rounded-full transition-all duration-1000" :style="{ width: project.progress + '%' }"></div>
            </div>
            <div class="flex justify-between items-center text-[11px] lg:text-[12px] font-bold text-gray-400 mb-6 lg:mb-8">
              <span>{{ $t('projects.goal') }}: {{ project.goal }}</span>
              <span>{{ project.donors }} donor</span>
            </div>
            <router-link to="/project/1" class="block w-full py-3.5 lg:py-4 bg-[#f0fdf4] text-[#1a946b] font-black text-center rounded-xl lg:rounded-2xl hover:bg-[#1a946b] hover:text-white transition-all duration-300">
              {{ $t('projects.more') }}
            </router-link>
          </div>
        </div>
      </div>

      <!-- Load More -->
      <div class="flex justify-center pt-4 pb-10 lg:pt-8 lg:pb-12">
        <button class="w-full sm:w-auto px-8 lg:px-14 py-4 bg-white border-2 border-[#0f5238] text-[#0f5238] rounded-full font-black text-[14px] lg:text-[15px] hover:bg-[#0f5238] hover:text-white transition-all duration-300 shadow-sm uppercase tracking-wide">
          {{ $t('explore.load_more') }}
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

interface ExploreProject {
  id: number
  title: string
  author: string
  category: string
  raised: string
  goal: string
  progress: number
  days: number
  donors: number
  img: string
}

const { tm, t, locale } = useI18n()
const router = useRouter()
const activeCategory = ref("all");
const activeSort = ref("newest");
const searchQuery = ref("");

const pillButtons = ref<HTMLElement[]>([]);
const pillStyle = ref({
  left: '0px',
  width: '0px',
  height: '0px'
});

const updatePill = async () => {
  await nextTick();
  const index = ['all', 'tech', 'art', 'social', 'edu', 'eco'].indexOf(activeCategory.value);
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
watch([activeCategory, locale], updatePill);

const handleLocalSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { q: searchQuery.value.trim() } });
  }
};
const allProjects = computed(() => tm('explore.projects_list') as unknown as ExploreProject[])

const projects = computed(() => {
  let result = [...allProjects.value]

  if (activeCategory.value !== 'all') {
    const targetCategoryLabel = t(`explore.categories.${activeCategory.value}`)
    result = result.filter(p => p.category === targetCategoryLabel)
  }

  if (activeSort.value === 'newest') {
    result.sort((a, b) => b.id - a.id)
  } else if (activeSort.value === 'popular') {
    result.sort((a, b) => b.donors - a.donors)
  } else if (activeSort.value === 'ending') {
    result.sort((a, b) => a.days - b.days)
  }

  return result
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
