<template>
  <div class="min-h-screen bg-[#fcfaf9] pt-24 lg:pt-32 pb-20">
    
    <!-- Breadcrumb -->
    <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <router-link to="/community" class="inline-flex items-center gap-2 text-[13px] font-bold text-gray-500 hover:text-[#1e5c43] transition-colors uppercase tracking-widest">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" /></svg>
        {{ t('story.back') }}
      </router-link>
    </div>

    <!-- First Section: Responsive Hero Image Banner -->
    <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative w-full min-h-[400px] lg:min-h-[500px] rounded-[32px] lg:rounded-[48px] overflow-hidden shadow-2xl flex flex-col justify-end">
        
        <!-- Main Cover Background -->
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600" 
          alt="Cover" 
          class="absolute inset-0 w-full h-full object-cover object-center"
        >
        
        <!-- Sophisticated Gradient Overlays for Readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>

        <!-- Content Overlay -->
        <div class="relative z-10 p-8 lg:p-14 lg:pb-16 w-full max-w-4xl">
          
          <!-- Badge -->
          <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-[#fde1d3] text-[#8b3d1b] text-[10px] lg:text-[11px] font-black tracking-[0.1em] uppercase mb-6 shadow-sm">
            {{ t('story.badge') }}
          </div>
          
          <!-- Title -->
          <h1 class="text-[32px] md:text-[44px] lg:text-[56px] font-bold text-white leading-[1.15] tracking-tight mb-10">
            {{ t('story.title') }}
          </h1>

          <!-- Author Info -->
          <div class="flex items-center gap-4">
            <img 
              src="https://i.pravatar.cc/150?u=12" 
              alt="Азиз Каримов" 
              class="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-white/10 shadow-lg"
            >
            <div>
              <div class="text-[15px] lg:text-[16px] font-bold text-white leading-tight mb-1">
                {{ t('story.author') }}
              </div>
              <div class="text-[10px] lg:text-[11px] font-black text-white/50 uppercase tracking-widest">
                {{ t('story.date') }}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    
    <!-- Main Content Section -->
    <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16">
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        <!-- Left Column: Story Details -->
        <div class="w-full lg:w-[65%] space-y-12">
          
          <!-- History of the project -->
          <div class="bg-[#f0f2f0] rounded-[48px] p-8 lg:p-12">
            <h2 class="text-[24px] lg:text-[28px] font-bold text-[#1e5c43] mb-6 tracking-tight">{{ t('story.history_title') }}</h2>
            <div class="space-y-6 text-gray-600 text-[15px] lg:text-[16px] leading-relaxed font-medium">
              <p>
                {{ t('story.history_p1') }}
              </p>
              <p>
                {{ t('story.history_p2') }}
              </p>
              <p>
                {{ t('story.history_p3') }}
              </p>
            </div>
          </div>

          <!-- Where the funds went -->
          <div>
            <h2 class="text-[24px] lg:text-[28px] font-bold text-[#1e5c43] mb-8 tracking-tight">{{ t('story.funds_title') }}</h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              <!-- Fund Card 1 -->
              <div class="bg-white rounded-[32px] p-8 flex flex-col items-center text-center shadow-lg shadow-gray-200/40 border border-gray-100">
                <div class="w-14 h-14 rounded-full bg-[#d7f1e6] flex items-center justify-center text-[#1e5c43] mb-5">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 class="font-bold text-gray-900 mb-2 leading-tight">{{ t('story.funds_equip') }}</h3>
                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-relaxed">{{ t('story.funds_equip_desc') }}</p>
              </div>

              <!-- Fund Card 2 -->
              <div class="bg-white rounded-[32px] p-8 flex flex-col items-center text-center shadow-lg shadow-gray-200/40 border border-gray-100">
                <div class="w-14 h-14 rounded-full bg-[#d7f1e6] flex items-center justify-center text-[#1e5c43] mb-5">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 class="font-bold text-gray-900 mb-2 leading-tight">{{ t('story.funds_seeds') }}</h3>
                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-relaxed">{{ t('story.funds_seeds_desc') }}</p>
              </div>

              <!-- Fund Card 3 -->
              <div class="bg-white rounded-[32px] p-8 flex flex-col items-center text-center shadow-lg shadow-gray-200/40 border border-gray-100">
                <div class="w-14 h-14 rounded-full bg-[#d7f1e6] flex items-center justify-center text-[#1e5c43] mb-5">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 class="font-bold text-gray-900 mb-2 leading-tight">{{ t('story.funds_water') }}</h3>
                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-relaxed">{{ t('story.funds_water_desc') }}</p>
              </div>

            </div>
          </div>

          <!-- Gallery -->
          <div>
            <h2 class="text-[24px] lg:text-[28px] font-bold text-[#1e5c43] mb-8 tracking-tight">{{ t('story.gallery') }}</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="aspect-square rounded-[32px] overflow-hidden group shadow-md">
                <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery">
              </div>
              <div class="aspect-square rounded-[32px] overflow-hidden group shadow-md">
                <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery">
              </div>
              <div class="aspect-square rounded-[32px] overflow-hidden group shadow-md">
                <img src="https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery">
              </div>
              <div class="aspect-square rounded-[32px] overflow-hidden group shadow-md">
                <img src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery">
              </div>
            </div>
          </div>
          
        </div>

        <!-- Right Column: Sidebar -->
        <div class="w-full lg:w-[35%] space-y-8">
          
          <!-- Funding Stats -->
          <div class="bg-[#e9e6e4] rounded-[40px] p-8 lg:p-10 shadow-sm border border-white">
            <div class="flex items-center gap-3 mb-8">
              <svg class="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3v18H3V3h2zm16 11V5h-2v9h2zM15 7v14h-2V7h2zm-6 4v10H7V11h2z"/></svg>
              <span class="text-[16px] font-bold text-gray-900 tracking-tight">{{ t('story.stats_title') }}</span>
            </div>
            
            <div class="mb-6">
              <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{{ t('story.stats_collected') }}</div>
              <div class="text-[32px] font-bold text-[#1e5c43] leading-none tracking-tight">150 000 000 сум</div>
            </div>

            <!-- Progress Bar -->
            <div class="w-full h-3.5 bg-[#d4cbc7] rounded-full mb-4 overflow-hidden shadow-inner">
              <div class="h-full bg-[#8b3d1b] rounded-full" style="width: 100%;"></div>
            </div>

            <div class="flex justify-between items-center mb-10 pb-10 border-b border-[#d4cbc7]">
              <div>
                <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">{{ t('story.stats_goal') }}</div>
                <div class="text-[15px] font-bold text-gray-900">120 000 000 сум</div>
              </div>
              <div class="text-right">
                <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">{{ t('story.stats_percent') }}</div>
                <div class="text-[15px] font-bold text-[#8b3d1b]">125%</div>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-[#1e5c43] rounded-full flex items-center justify-center shadow-lg text-white">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <div class="leading-tight">
                <div class="text-[20px] font-bold text-gray-900">450</div>
                <div class="text-[10px] font-black text-gray-500 uppercase tracking-widest">{{ t('story.stats_sponsors') }}</div>
              </div>
            </div>
          </div>

          <!-- Quote -->
          <div class="bg-[#144230] rounded-[40px] p-8 lg:p-10 relative overflow-hidden shadow-xl shadow-green-900/10">
            <!-- Large Quote SVG Background -->
            <svg class="absolute top-4 right-4 w-28 h-28 text-green-900/40 transform rotate-180 pointer-events-none" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
            
            <p class="relative z-10 text-[16px] lg:text-[18px] text-[#e0f1e7] italic font-medium leading-relaxed mb-8">
              {{ t('story.quote') }}
            </p>
            <div class="relative z-10 text-[14px] font-bold text-[#8ec8a6] flex items-center gap-2">
              <div class="w-4 h-[2px] bg-[#8ec8a6]"></div>
              {{ t('story.author') }}
            </div>
          </div>

          <!-- Similar Stories -->
          <div class="pt-4">
            <h3 class="text-[18px] font-bold text-gray-900 mb-6">{{ t('story.similar_title') }}</h3>
            <div class="space-y-6">
              
              <!-- Story Link 1 -->
              <a href="#" class="flex items-center gap-4 group">
                <div class="w-20 h-20 rounded-[20px] overflow-hidden flex-shrink-0 shadow-sm border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=200" alt="Чистая вода Памира" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                </div>
                <div>
                  <h4 class="text-[14px] font-bold text-gray-900 mb-1 leading-tight group-hover:text-[#1e5c43] transition-colors">Чистая вода Памира</h4>
                  <div class="text-[12px] font-medium text-gray-500 mb-2">Собрано 85 000 000 сум</div>
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded bg-[#e0f8ee] text-[#1a946b] text-[9px] font-black uppercase tracking-widest">
                    Экология
                  </span>
                </div>
              </a>

              <!-- Story Link 2 -->
              <a href="#" class="flex items-center gap-4 group">
                <div class="w-20 h-20 rounded-[20px] overflow-hidden flex-shrink-0 shadow-sm border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=200" alt="Арт-пространство Куб" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                </div>
                <div>
                  <h4 class="text-[14px] font-bold text-gray-900 mb-1 leading-tight group-hover:text-[#1e5c43] transition-colors">Арт-пространство "Куб"</h4>
                  <div class="text-[12px] font-medium text-gray-500 mb-2">Собрано 42 000 000 сум</div>
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded bg-[#e8f4fd] text-[#2a85cf] text-[9px] font-black uppercase tracking-widest">
                    Культура
                  </span>
                </div>
              </a>

            </div>
          </div>

        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
h1 {
  letter-spacing: -0.03em;
}
</style>
