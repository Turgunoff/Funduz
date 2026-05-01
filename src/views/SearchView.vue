<template>
  <div class="pt-24 lg:pt-32 bg-[#fcfaf9] min-h-screen">
    
    <!-- Hero Section (No redundant search bar) -->
    <div class="pb-12 lg:pb-20">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="max-w-4xl">
          <!-- Overline -->
          <div class="flex items-center gap-3 mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div class="w-8 h-[2px] bg-[#1a946b]"></div>
            <p class="text-[11px] font-black tracking-[0.2em] text-[#1a946b] uppercase">
              {{ $t('search.results_overline') }}
            </p>
          </div>
          
          <!-- Main Title -->
          <h1 class="text-[40px] md:text-[56px] lg:text-[72px] font-bold text-gray-900 leading-[1.05] mb-4 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span v-if="projectStore.searchQuery" class="flex flex-wrap items-center gap-x-4">
              <span>{{ projectStore.filteredItems.length }} {{ $t('search.results_count') }}</span>
              <span class="text-gray-400 font-light italic text-[32px] md:text-[48px] lg:text-[64px]">{{ $t('search.for_query') }}</span>
              <span class="text-[#1a946b] underline decoration-4 decoration-green-100 underline-offset-8">"{{ projectStore.searchQuery }}"</span>
            </span>
            <span v-else>{{ $t('explore.title') }}</span>
          </h1>
          <p class="text-gray-500 text-lg font-medium animate-in fade-in slide-in-from-bottom-6 duration-1000">
            {{ $t('search.hero_subtitle') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Filters & Sort Bar -->
    <div class="sticky top-16 lg:top-20 z-30 bg-[#fcfaf9]/80 backdrop-blur-xl border-y border-gray-100/50 py-4 mb-12">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        <!-- Category Filter Chips -->
        <div class="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
          <button 
            @click="projectStore.setFilter('all')"
            :class="projectStore.filterCategory === 'all' ? 'bg-[#1a946b] text-white shadow-lg shadow-green-900/10' : 'bg-white border-gray-100 text-gray-500 hover:bg-gray-50'"
            class="px-6 py-2.5 rounded-full text-[13px] font-black uppercase tracking-wider border transition-all whitespace-nowrap"
          >
            {{ $t('search.cat_all') }}
          </button>
          <button 
            v-for="cat in ['tech', 'art', 'eco', 'social', 'edu']" 
            :key="cat"
            @click="projectStore.setFilter(cat)"
            :class="projectStore.filterCategory === cat ? 'bg-[#1a946b] text-white shadow-lg shadow-green-900/10' : 'bg-white border-gray-100 text-gray-500 hover:bg-gray-50'"
            class="px-6 py-2.5 rounded-full text-[13px] font-black uppercase tracking-wider border transition-all whitespace-nowrap"
          >
            {{ $t(`explore.categories.${cat}`) }}
          </button>
        </div>

        <!-- Sort & Count -->
        <div class="flex items-center gap-6">
          <div class="h-8 w-px bg-gray-100 hidden md:block"></div>
          <div class="flex items-center gap-3">
            <span class="text-[12px] font-black text-gray-500 uppercase tracking-widest">{{ $t('search.sort_by') }}</span>
            <div class="relative group">
              <select 
                v-model="projectStore.sortBy" 
                class="appearance-none bg-white border border-gray-100 rounded-2xl px-5 py-2.5 pr-10 text-[14px] font-bold text-gray-900 focus:outline-none focus:border-[#1a946b] cursor-pointer shadow-sm transition-all"
              >
                <option value="relevant">{{ $t('search.sort.relevant') }}</option>
                <option value="newest">{{ $t('search.sort.newest') }}</option>
                <option value="popular">{{ $t('search.sort.popular') }}</option>
              </select>
              <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500 group-hover:text-[#1a946b]">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Results Area -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      
      <!-- Skeleton Loading State -->
      <div v-if="projectStore.isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="i in 6" :key="i" class="animate-pulse">
          <div class="aspect-[4/3] bg-gray-100 rounded-[40px] mb-6"></div>
          <div class="h-4 bg-gray-100 rounded w-1/4 mb-4"></div>
          <div class="h-8 bg-gray-100 rounded w-3/4 mb-6"></div>
          <div class="h-2 bg-gray-100 rounded w-full mb-2"></div>
          <div class="h-2 bg-gray-100 rounded w-full"></div>
        </div>
      </div>

      <!-- Real Results -->
      <div v-else-if="projectStore.paginatedItems.length > 0">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          <div 
            v-for="(project, idx) in projectStore.paginatedItems" 
            :key="project.id"
          class="group flex flex-col h-full animate-in fade-in slide-in-from-bottom-8"
          :style="{ animationDelay: (idx * 50) + 'ms' }"
        >
          <!-- Project Card Media -->
          <router-link :to="`/project/${project.id}`" class="block relative rounded-[40px] overflow-hidden aspect-[4/3] mb-8 bg-white border border-gray-100/50 shadow-sm group-hover:shadow-2xl group-hover:shadow-green-900/10 transition-all duration-700">
            <img loading="lazy" 
              :src="project.mainImage" 
              :alt="project.title" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Category Tag Overlay -->
            <div class="absolute top-6 left-6 px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-[11px] font-black uppercase tracking-widest text-gray-900 shadow-sm border border-white/20">
              {{ $t('explore.categories.' + project.categoryKey) }}
            </div>

            <!-- View Action Overlay -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
               <span class="px-8 py-3 bg-white text-[#1a946b] font-black text-[14px] rounded-full shadow-2xl uppercase tracking-widest">
                 {{ $t('projects.more') }}
               </span>
            </div>
          </router-link>

          <!-- Card Content -->
          <div class="flex-grow flex flex-col">
            <!-- Author -->
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[11px] font-bold text-gray-500 group-hover:border-[#1a946b]/30 transition-colors">
                {{ project.authorName ? project.authorName[0] : 'U' }}
              </div>
              <span class="text-[12px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-gray-900 transition-colors">
                 {{ project.authorName || `User #${project.authorId}` }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-[22px] lg:text-[24px] font-bold text-gray-900 leading-[1.25] mb-6 min-h-[60px] group-hover:text-[#1a946b] transition-colors">
              <router-link :to="`/project/${project.id}`">
                <span v-html="highlightText(project.title)"></span>
              </router-link>
            </h3>

            <!-- Progress Block -->
            <div class="mt-auto pt-6 border-t border-gray-100/50">
              <div class="flex justify-between items-end mb-4">
                <div class="text-[20px] font-bold text-gray-900">
                  {{ formatCurrency(project.raised) }} <span class="text-[12px] font-medium text-gray-500">UZS</span>
                </div>
                <div class="text-[14px] font-black text-[#1a946b] bg-green-50 px-3 py-1 rounded-full">
                  {{ getProgress(project) }}%
                </div>
              </div>
              
              <!-- Refined Progress Bar -->
              <div class="w-full h-1.5 bg-gray-100 rounded-full mb-4 relative overflow-hidden">
                <div class="absolute h-full bg-[#1a946b] rounded-full transition-all duration-1000 ease-out" :style="{ width: getProgress(project) + '%' }"></div>
              </div>

              <div class="flex justify-between items-center text-[11px] font-black uppercase tracking-widest text-gray-400">
                <span>{{ $t('projects.goal') }}: {{ formatCurrency(project.goal) }}</span>
                <span>{{ project.donorsCount }} {{ $t('search.stats.backers') }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div v-if="projectStore.hasMore" class="mt-20 flex justify-center">
          <button 
            @click="projectStore.loadMore"
            class="group relative px-12 py-4 bg-white border-2 border-[#1a946b] text-[#1a946b] font-black text-[15px] rounded-2xl hover:bg-[#1a946b] hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-green-900/10 active:scale-95 overflow-hidden"
          >
            <span class="relative z-10 uppercase tracking-widest">{{ $t('explore.load_more') }}</span>
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-600 to-[#1a946b] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
      </div>

      <!-- High-End Empty State -->
      <div v-else class="max-w-2xl mx-auto py-32 text-center animate-in fade-in zoom-in duration-700">
        <div class="relative w-32 h-32 mx-auto mb-10">
          <div class="absolute inset-0 bg-green-50 rounded-full animate-ping opacity-20"></div>
          <div class="relative w-32 h-32 bg-white rounded-full border border-gray-50 shadow-xl flex items-center justify-center text-gray-200">
             <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>
        
        <h2 class="text-[32px] font-bold text-gray-900 mb-4 tracking-tight">{{ $t('search.empty_filter_title') }}</h2>
        <p class="text-gray-500 text-lg mb-12 font-medium leading-relaxed">{{ $t('search.empty_filter_desc') }}</p>

        <!-- Elegant Suggestions -->
        <div class="space-y-6">
           <p class="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">{{ $t('search.popular_tags') }}</p>
           <div class="flex flex-wrap justify-center gap-3">
              <button 
                v-for="cat in ['tech', 'eco', 'social']" 
                :key="cat"
                @click="projectStore.setFilter(cat); projectStore.searchQuery = ''"
                class="px-8 py-3 bg-white border border-gray-100 text-gray-900 font-bold text-[14px] rounded-full hover:border-[#1a946b] hover:text-[#1a946b] hover:shadow-xl hover:shadow-green-900/5 transition-all"
              >
                {{ $t(`explore.categories.${cat}`) }}
              </button>
              <button 
                @click="projectStore.setFilter('all'); projectStore.searchQuery = ''"
                class="px-8 py-3 bg-[#1a946b] text-white font-bold text-[14px] rounded-full hover:bg-[#147a58] transition-all shadow-xl shadow-green-900/10"
              >
                {{ $t('search.cat_all') }}
              </button>
           </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProjectStore } from '../stores/projects'
import type { Project } from '../types/Project';

const route = useRoute()
const router = useRouter()
const projectStore = useProjectStore()

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('uz-UZ').format(val);
};

const getProgress = (p: Project) => {
  return Math.min(Math.round((p.raised / p.goal) * 100), 100);
};

onMounted(async () => {
  await projectStore.fetchAll();
  
  // Sync from URL to Store
  if (route.query.q) {
    projectStore.searchQuery = route.query.q as string;
  }
  if (route.query.cat) {
    projectStore.filterCategory = route.query.cat as string;
  }
  if (route.query.sort) {
    projectStore.sortBy = route.query.sort as string;
  }
})

// Sync store state to URL query params
watch([() => projectStore.searchQuery, () => projectStore.filterCategory, () => projectStore.sortBy], () => {
  router.replace({ 
    query: { 
      ...route.query, 
      q: projectStore.searchQuery || undefined,
      cat: projectStore.filterCategory !== 'all' ? projectStore.filterCategory : undefined,
      sort: projectStore.sortBy !== 'newest' ? projectStore.sortBy : undefined
    } 
  });
});

// Watch URL changes to update store (for back/forward navigation)
watch(() => route.query, (newQuery) => {
  if (newQuery.q !== projectStore.searchQuery) {
    projectStore.searchQuery = (newQuery.q as string) || '';
  }
  if (newQuery.cat !== projectStore.filterCategory) {
    projectStore.filterCategory = (newQuery.cat as string) || 'all';
  }
  if (newQuery.sort !== projectStore.sortBy) {
    projectStore.sortBy = (newQuery.sort as string) || 'newest';
  }
}, { deep: true });

const highlightText = (text: string) => {
  const q = projectStore.searchQuery
  if (!q) return text
  
  const safeQ = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${safeQ})`, 'gi')
  return text.replace(regex, '<span class="text-[#1a946b] font-black underline decoration-2 decoration-green-100 underline-offset-4">$1</span>')
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes slide-in-from-bottom-2 { from { transform: translateY(0.5rem); } to { transform: translateY(0); } }
@keyframes slide-in-from-bottom-4 { from { transform: translateY(1rem); } to { transform: translateY(0); } }
@keyframes slide-in-from-bottom-6 { from { transform: translateY(1.5rem); } to { transform: translateY(0); } }
@keyframes slide-in-from-bottom-8 { from { transform: translateY(2rem); } to { transform: translateY(0); } }
@keyframes zoom-in { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }

.animate-in {
  animation-fill-mode: both;
}

.fade-in { animation-name: fade-in; }
.zoom-in { animation-name: zoom-in; }
.slide-in-from-bottom-2 { animation-name: slide-in-from-bottom-2; }
.slide-in-from-bottom-4 { animation-name: slide-in-from-bottom-4; }
.slide-in-from-bottom-6 { animation-name: slide-in-from-bottom-6; }
.slide-in-from-bottom-8 { animation-name: slide-in-from-bottom-8; }

h1 {
  letter-spacing: -0.04em;
}
</style>
