<template>
  <div class="pt-[144px] lg:pt-[176px] pb-20 bg-white min-h-screen relative overflow-hidden">
    
    <!-- Secondary Sub-Navbar (Page Specific) -->
    <div class="fixed top-16 lg:top-20 left-0 right-0 z-[90] bg-[#f0f9f6] border-b border-[#e1ece8] w-full shadow-sm overflow-x-auto no-scrollbar">
      <div class="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 h-12 flex items-center">
        <nav class="flex items-center space-x-8 text-[14px] font-bold text-gray-800 shrink-0">
          <router-link
            to="/explore"
            class="transition-colors h-12 flex items-center border-b-2 border-transparent hover:text-[#1a946b] whitespace-nowrap"
          >
            {{ $t("nav.projects") }}
          </router-link>
          <router-link
            to="/trends"
            class="transition-colors h-12 flex items-center border-b-2 border-[#1a946b] text-[#1a946b] whitespace-nowrap"
          >
            {{ $t("nav.technologies") }}
          </router-link>
          <router-link
            to="/security"
            class="transition-colors h-12 flex items-center border-b-2 border-transparent hover:text-[#1a946b] whitespace-nowrap"
          >
            {{ $t("nav.security") }}
          </router-link>
        </nav>
      </div>
    </div>
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section 1: Hero -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
        
        <!-- Left Column: Content -->
        <div class="order-2 lg:order-1">
          <h1 class="text-[36px] md:text-[48px] lg:text-[84px] font-black text-gray-900 leading-[0.95] mb-8 lg:mb-10 tracking-tight">
            {{ $t('trends.title') }}
          </h1>
          
          <p class="text-[16px] lg:text-[20px] text-gray-500 font-medium leading-relaxed mb-12 lg:mb-16 max-w-[540px]">
            {{ $t('trends.desc') }}
          </p>
          
          <!-- Statistics Row -->
          <div class="flex flex-wrap gap-x-10 gap-y-8 lg:gap-16 mb-12 lg:mb-20">
            <div class="flex flex-col">
              <span class="text-[28px] lg:text-[36px] font-black text-[#1a946b] leading-none mb-2">48</span>
              <span class="text-[10px] lg:text-[11px] font-black text-gray-900 uppercase tracking-widest">{{ $t('trends.stats.active') }}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-[28px] lg:text-[36px] font-black text-[#1a946b] leading-none mb-2">12.5k</span>
              <span class="text-[10px] lg:text-[11px] font-black text-gray-900 uppercase tracking-widest">{{ $t('trends.stats.backers') }}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-[28px] lg:text-[36px] font-black text-[#1a946b] leading-none mb-2">3.2B UZS</span>
              <span class="text-[10px] lg:text-[11px] font-black text-gray-900 uppercase tracking-widest">{{ $t('trends.stats.funded') }}</span>
            </div>
          </div>
          
          <!-- Chips Area -->
          <div class="flex flex-wrap gap-3 lg:gap-4">
            <div 
              v-for="(chip, i) in trendChips" 
              :key="i"
              class="px-5 py-2.5 bg-[#f0f0f0] rounded-full text-[13px] lg:text-[14px] font-bold text-gray-900 transition-colors hover:bg-gray-200 cursor-default"
            >
              {{ chip }}
            </div>
          </div>
        </div>
        
        <!-- Right Column: Image/Avatar -->
        <div class="order-1 lg:order-2 relative">
          <!-- Main Image Component with Offset Background -->
          <div class="relative z-10 w-full aspect-[16/10] overflow-hidden rounded-[40px] lg:rounded-[60px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
            <img 
              src="/C:/Users/danii/.gemini/antigravity/brain/9ea4e46a-c996-4d4c-8cae-7710ad6a21be/tech_hero_cyber_avatar_1776363061846.png" 
              alt="Cyber Hero Avatar" 
              class="w-full h-full object-cover"
            />
          </div>
          
          <!-- Abstract Background Shape -->
          <div class="absolute -top-6 -left-6 lg:-top-10 lg:-left-10 w-full h-full bg-[#f5f5f5] rounded-[40px] lg:rounded-[60px] -z-10"></div>
        </div>
        
      </div>

      <!-- Filters Section -->
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
        <div class="relative flex items-center p-1 bg-gray-50 rounded-full w-fit overflow-x-auto no-scrollbar" ref="filterContainer">
          <!-- Animated Background Pill -->
          <div 
            class="absolute bg-[#1a946b] rounded-full transition-all duration-300 ease-out shadow-lg"
            :style="pillStyle"
          ></div>

          <button 
            v-for="(filter, i) in filters" 
            :key="i"
            ref="filterButtons"
            @click="activeFilter = Number(i)"
            :class="activeFilter === i ? 'text-white' : 'text-gray-500 hover:text-gray-900'"
            class="relative z-10 px-6 py-2.5 rounded-full text-[14px] font-bold transition-all whitespace-nowrap"
          >
            {{ filter }}
          </button>
        </div>
        
        <div class="flex items-center gap-5">
          <div class="hidden sm:flex items-center gap-3 bg-gray-50 p-1 rounded-full">
            <span class="pl-5 text-[14px] font-bold text-gray-500">{{ $t('trends.sort_label') }}</span>
            <select class="bg-transparent border-none text-[14px] font-black text-gray-900 focus:ring-0 cursor-pointer pr-10">
              <option>{{ $t('trends.sort_recent') }}</option>
            </select>
          </div>
          <div class="flex items-center gap-1.5 p-1 bg-gray-50 rounded-lg">
            <button class="p-2 bg-white rounded shadow-sm text-gray-900">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            </button>
            <button class="p-2 text-gray-400 hover:text-gray-900">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Featured Project Card -->
      <div class="bg-[#fcfcfc] rounded-[40px] lg:rounded-[60px] overflow-hidden border border-gray-100 mb-20 lg:mb-32">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <!-- Image Side -->
          <div class="aspect-[4/3] lg:aspect-auto relative bg-[#0a0a0a] group overflow-hidden">
            <img 
              src="/C:/Users/danii/.gemini/antigravity/brain/9ea4e46a-c996-4d4c-8cae-7710ad6a21be/trends_featured_neural_link_1776363877127.png" 
              alt="NeuralLink Project" 
              class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div class="absolute bottom-8 left-8 text-white/40 text-[11px] font-black tracking-[0.3em] uppercase">
              EDITOR'S PICK &nbsp; SAFE SAFE FOR WORK
            </div>
          </div>
          
          <!-- Content Side -->
          <div class="p-8 lg:p-16 flex flex-col justify-center">
            <div class="flex items-center gap-3 mb-8">
              <span class="px-4 py-1.5 bg-[#78350f] text-white text-[10px] font-black rounded-full tracking-wider">
                {{ $t('trends.featured.editors_pick') }}
              </span>
              <span class="text-[11px] lg:text-[12px] font-black text-[#1a946b] tracking-wider">
                {{ $t('trends.featured.category') }}
              </span>
            </div>
            
            <h2 class="text-[32px] lg:text-[48px] font-black text-gray-900 leading-[1.1] mb-6 lg:mb-8 tracking-tight">
              {{ $t('trends.featured.title') }}
            </h2>
            
            <p class="text-[15px] lg:text-[17px] text-gray-500 font-medium leading-relaxed mb-10 lg:mb-12">
              {{ $t('trends.featured.desc') }}
            </p>
            
            <!-- Progress Block -->
            <div class="mb-10 lg:mb-12">
              <div class="flex justify-between items-center mb-4 text-[14px] lg:text-[15px] font-black">
                <span class="text-gray-900">82% {{ fundingLabel }}</span>
                <span class="text-[#1a946b]">450,000,000 UZS {{ raisedLabel }}</span>
              </div>
              <div class="w-full h-4 bg-[#f1f1f1] rounded-full overflow-hidden">
                <div class="h-full bg-[#78350f] rounded-full" style="width: 82%"></div>
              </div>
            </div>
            
            <button class="w-full py-5 lg:py-6 bg-[#1a946b] text-white font-black rounded-2xl lg:rounded-3xl hover:bg-white hover:text-[#1a946b] border-2 border-transparent hover:border-[#1a946b] transition-all transform hover:-translate-y-1 shadow-xl shadow-green-900/10">
              {{ $t('trends.featured.back_btn') }}
            </button>
          </div>
        </div>
      </div>

    <!-- Projects Grid Section -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-32">
      <div class="flex items-center justify-between mb-8 lg:mb-10">
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900">{{ $t('trends.upcoming_title') }}</h2>
        <router-link to="/dashboard" class="text-[#1a946b] font-black text-sm lg:text-base hover:underline">{{ $t('error404.view_all') }}</router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        <div 
          v-for="project in trendProjects" 
          :key="project.id"
          class="group bg-white rounded-[32px] lg:rounded-[40px] p-5 lg:p-6 border border-gray-100/50 hover:border-[#1a946b]/30 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col h-full"
        >
          <!-- Project Image -->
          <div class="relative rounded-[24px] lg:rounded-[32px] overflow-hidden aspect-[4/3] mb-5 lg:mb-6 bg-gray-50 border border-gray-50 shadow-sm">
            <img :src="project.mainImage" :alt="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div class="absolute top-3 left-3 lg:top-4 lg:left-4 px-3 lg:px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] lg:text-[11px] font-black uppercase tracking-wider text-gray-800">
              {{ $t(`explore.categories.${project.categoryKey}`) }}
            </div>
          </div>

          <!-- Content Meta -->
          <div class="flex items-center gap-2 mb-4">
            <div class="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-600">
              U
            </div>
            <span class="text-[11px] lg:text-xs font-semibold text-gray-400">User #{{ project.authorId }}</span>
          </div>

          <!-- Title -->
          <h3 class="text-[18px] lg:text-[20px] font-bold text-gray-900 leading-[1.3] mb-5 lg:mb-6 min-h-[48px] lg:min-h-[52px]">
            {{ project.title }}
          </h3>

          <!-- Progress Block (Copying Explore style) -->
          <div class="mt-auto">
            <div class="flex justify-between items-end mb-2.5 lg:mb-3">
              <div class="text-[16px] lg:text-[17px] font-black text-gray-900">
                {{ formatCurrency(project.raised) }} <span class="text-[11px] lg:text-[13px] font-bold text-gray-400 uppercase">so'm</span>
              </div>
              <div class="text-[13px] lg:text-[14px] font-black text-[#1a946b]">
                {{ getProgress(project) }}%
              </div>
            </div>
            <div class="w-full h-2 bg-gray-50 rounded-full mb-4 overflow-hidden">
              <div class="h-full bg-[#1a946b] rounded-full transition-all duration-1000" :style="{ width: getProgress(project) + '%' }"></div>
            </div>
            <div class="flex justify-between items-center text-[11px] lg:text-[12px] font-bold text-gray-400 mb-6 lg:mb-8">
              <span>{{ $t('projects.goal') }}: {{ formatCurrency(project.goal) }}</span>
              <span>{{ project.donorsCount }} {{ $t('projects.donors') }}</span>
            </div>
            <router-link :to="`/project/${project.id}`" class="block w-full py-3.5 lg:py-4 bg-[#f0fdf4] text-[#1a946b] font-black text-center rounded-xl lg:rounded-2xl hover:bg-[#1a946b] hover:text-white transition-all duration-300">
              {{ $t('projects.more') }}
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Explore Other Worlds Section -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-32 lg:pb-48">
      <h2 class="text-2xl lg:text-3xl font-black text-gray-900 mb-8 lg:mb-12 tracking-tight">
        {{ $t('trends.explore_worlds') }}
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <div 
          v-for="world in otherWorlds" 
          :key="world.id"
          class="group bg-gray-50/80 rounded-[32px] lg:rounded-[40px] p-8 lg:p-10 hover:bg-white hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.06)] border border-transparent hover:border-gray-100 transition-all duration-500 cursor-pointer text-center sm:text-left"
        >
          <div class="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 lg:mb-8 mx-auto sm:mx-0 group-hover:scale-110 transition-transform">
            <span class="text-2xl lg:text-3xl">{{ world.icon }}</span>
          </div>
          
          <h4 class="text-[18px] lg:text-[20px] font-black text-gray-900 mb-2 tracking-tight">
            {{ $t(`projects.cat_${world.key}`) }}
          </h4>
          <p class="text-[13px] lg:text-[14px] font-bold text-gray-400">
            {{ $t('projects.project_count', { count: world.count }) }}
          </p>
        </div>
      </div>
    </div>

    <!-- Final CTA Section -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <div 
        class="bg-[#1a946b] rounded-[48px] p-10 lg:p-24 text-center relative overflow-hidden shadow-2xl shadow-green-900/10 group"
      >
        <!-- Decoration Circles -->
        <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
        <h2 class="relative z-10 text-[28px] md:text-[40px] lg:text-[56px] font-black text-white leading-tight mb-6 lg:mb-8 tracking-tight">
          {{ $t('trends.cta.title') }}
        </h2>
        
        <p class="relative z-10 text-[15px] lg:text-[18px] text-white/80 font-medium max-w-[700px] mx-auto mb-10 lg:mb-16 leading-relaxed">
          {{ $t('trends.cta.desc') }}
        </p>
        
        <button 
          class="relative z-10 px-12 py-5 bg-[#0d5c42] text-white font-black rounded-2xl text-[16px] border-2 border-transparent hover:border-white hover:bg-white hover:text-[#0d5c42] transition-all duration-300 shadow-xl shadow-black/10 transform hover:-translate-y-1"
        >
          {{ $t('trends.cta.btn') }}
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import { useProjectStore } from '../stores/projects';
import type { Project } from '../types/Project';

const { locale, tm, t } = useI18n();
const projectStore = useProjectStore();

const activeFilter = ref(0);
const filterButtons = ref<HTMLElement[]>([]);
const pillStyle = ref({
  left: '4px',
  width: '0px',
  height: '0px'
});

const filters = computed(() => tm('trends.filters') as string[]);
const trendChips = computed(() => tm('trends.chips') as string[]);
const raisedLabel = computed(() => (t('search.stats.raised') as string).toLowerCase());
const fundingLabel = computed(() => t('error404.view_all').toLowerCase().includes('все') ? 'собрано' : 'to\'plandi');

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('uz-UZ').format(val);
};

const getProgress = (p: Project) => {
  return Math.min(Math.round((p.raised / p.goal) * 100), 100);
};

const updatePill = async () => {
  await nextTick();
  const activeBtn = filterButtons.value[activeFilter.value];
  if (activeBtn) {
    pillStyle.value = {
      left: `${activeBtn.offsetLeft}px`,
      width: `${activeBtn.offsetWidth}px`,
      height: `${activeBtn.offsetHeight}px`
    };
  }
};

onMounted(() => {
  projectStore.fetchAll();
  updatePill();
});

watch([activeFilter, locale], updatePill);

const trendProjects = computed(() => {
  return projectStore.allItems.slice(0, 3);
});

const otherWorlds = ref([
  { id: 1, key: 'art', icon: '🎨', count: 124 },
  { id: 2, key: 'education', icon: '🎓', count: 86 },
  { id: 3, key: 'ecology', icon: '🌿', count: 52 },
  { id: 4, key: 'music', icon: '🎵', count: 210 }
]);
</script>

<style scoped>
/* Page-specific refinements */
h1 {
  font-family: 'Outfit', sans-serif;
}
</style>
