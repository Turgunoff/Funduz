<template>
  <div class="pt-16 lg:pt-20 bg-[#fcfcfc] min-h-screen">
    
    <!-- Hero Search Stats Section -->
    <div class="pt-8 pb-6 lg:pt-12 lg:pb-8 bg-[#fcfcfc] border-b border-gray-100">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Overline -->
        <p class="text-[12px] lg:text-[13px] font-black tracking-widest text-[#1a946b] uppercase mb-4">
          {{ $t('search.results_overline') }}
        </p>
        
        <!-- Main Title -->
        <h1 class="text-[36px] md:text-[48px] lg:text-[56px] font-black text-gray-900 leading-[1.1] mb-8 lg:mb-10">
          <span class="tracking-tight">{{ filteredProjects.length }} {{ $t('search.results_count') }} {{ $t('search.for_query') }}</span> 
          <span class="text-[#21815f] italic tracking-tight relative pr-2">"{{ route.query.q }}"</span>
        </h1>

        <!-- Local Search Input -->
        <div class="relative max-w-xl mb-12">
          <input 
            v-model="searchQuery"
            @keyup.enter="handleLocalSearch"
            type="text" 
            :placeholder="$t('explore.search_placeholder')"
            class="w-full bg-white border border-gray-100 rounded-2xl py-4 lg:py-5 pl-14 pr-6 text-[15px] lg:text-[16px] font-bold text-gray-900 shadow-sm focus:ring-2 focus:ring-[#1a946b]/20 focus:border-[#1a946b] transition-all outline-none"
          />
          <div class="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>
        
        <!-- Filter Tabs & Sort Row -->
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
          <!-- Main Group Tabs -->
          <div class="relative flex items-center bg-[#f5f5f5] p-1.5 rounded-[20px] overflow-x-auto no-scrollbar" ref="pillContainer">
            <!-- Animated Background Pill -->
            <div 
              class="absolute bg-[#1a946b] rounded-full transition-all duration-300 ease-out shadow-md"
              :style="pillStyle"
            ></div>

            <button 
              v-for="tab in ['all', 'projects', 'creators', 'categories']"
              :key="tab"
              @click="activeTab = tab"
              ref="pillButtons"
              :class="activeTab === tab ? 'text-white' : 'text-gray-600 hover:text-gray-900'"
              class="relative z-10 px-5 lg:px-6 py-2 lg:py-2.5 rounded-full font-bold text-[13px] lg:text-[14px] transition-colors whitespace-nowrap">
              {{ $t(`search.tabs.${tab}`) }} {{ tab === 'all' || tab === 'projects' ? `(${filteredProjects.length})` : '(0)' }}
            </button>
          </div>
          
          <!-- Sort Dropdown -->
          <div class="flex items-center gap-3 self-start lg:self-auto">
            <span class="text-gray-600 font-medium text-[13px] lg:text-[14px]">{{ $t('search.sort_by') }}</span>
            <div class="relative">
              <select v-model="activeSort" class="appearance-none bg-white border border-gray-100 rounded-full px-5 lg:px-6 py-2.5 pr-10 text-[13px] lg:text-[14px] font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#21815f]/20 cursor-pointer shadow-sm">
                <option value="relevant">{{ $t('search.sort.relevant') }}</option>
                <option value="newest">{{ $t('search.sort.newest') }}</option>
                <option value="popular">{{ $t('search.sort.popular') }}</option>
              </select>
              <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Extra Categories Row -->
        <div class="flex items-center gap-2 lg:gap-3 overflow-x-auto no-scrollbar pb-2">
          <button 
            @click="activeCat = 'all'"
            :class="activeCat === 'all' ? 'bg-[#0f5238] text-white shadow-sm shadow-[#0f5238]/10' : 'bg-[#f0f0f0] text-[#444] hover:bg-[#e4e4e4]'"
            class="flex items-center justify-center gap-2 px-5 lg:px-6 py-2.5 rounded-full font-bold text-[13px] lg:text-[14px] whitespace-nowrap transition-colors"
          >
            <svg v-if="activeCat === 'all'" class="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
            {{ $t('search.cat_all') }}
          </button>
          <button 
            v-for="cat in ['tech', 'art', 'eco', 'innovation', 'urbanism', 'education']" 
            :key="cat"
            @click="activeCat = cat"
            :class="activeCat === cat ? 'bg-[#0f5238] text-white shadow-sm shadow-[#0f5238]/10' : 'bg-[#f0f0f0] text-[#444] hover:bg-[#e4e4e4]'"
            class="flex items-center justify-center gap-2 px-5 lg:px-6 py-2.5 rounded-full font-bold text-[13px] lg:text-[14px] transition-colors whitespace-nowrap"
          >
            <svg v-if="activeCat === cat" class="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
            {{ $t(`search.cats.${cat}`) }}
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      
      <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        
        <!-- Left Column: Featured Projects -->
        <div class="lg:col-span-2">
          <!-- Section Title -->
          <div class="flex items-center gap-4 mb-8">
            <h2 class="text-[22px] lg:text-[24px] font-bold text-[#1a1a1a] whitespace-nowrap">{{ $t('search.featured_projects', 'Featured Projects') }}</h2>
            <div class="h-px bg-gray-100 flex-grow mt-1"></div>
          </div>
          
          <!-- Projects Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              v-for="project in filteredProjects" 
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
                <span v-html="highlightText(project.title)"></span>
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

          <!-- Matched Categories -->
          <div class="mt-12 lg:mt-16">
            <div class="flex items-center gap-4 mb-8">
              <h2 class="text-[22px] lg:text-[24px] font-bold text-[#1a1a1a] whitespace-nowrap">{{ $t('search.matched_categories') }}</h2>
              <div class="h-px bg-gray-100 flex-grow mt-1"></div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              <div v-for="(cat, idx) in matchedCategories" :key="idx" class="bg-[#f7f7f7] rounded-[24px] p-6 lg:p-7 hover:bg-[#f0f0f0] transition-colors cursor-pointer group flex flex-col justify-center min-h-[140px] shadow-sm shadow-gray-100/50 border border-transparent hover:border-[#21815f]/10">
                <div class="w-10 h-10 mb-4 bg-white rounded-full flex items-center justify-center text-[#0f5238] shadow-sm transform group-hover:-translate-y-1 transition-transform">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" :d="cat.icon" /></svg>
                </div>
                <h4 class="text-[16px] lg:text-[17px] font-bold text-gray-900 mb-1 leading-tight"><span v-html="highlightText(cat.title)"></span></h4>
                <p class="text-[13px] font-medium text-gray-500">{{ cat.count }} {{ $t('search.projects_found') }}</p>
              </div>
            </div>
          </div>

          <!-- Influential Creators -->
          <div class="mt-12 lg:mt-16 mb-4 lg:mb-8">
            <div class="flex items-center gap-4 mb-8">
              <h2 class="text-[22px] lg:text-[24px] font-bold text-[#1a1a1a] whitespace-nowrap">{{ $t('search.influential_creators') }}</h2>
              <div class="h-px bg-gray-100 flex-grow mt-1"></div>
            </div>

            <div class="flex flex-col gap-4 lg:gap-5">
              <div v-for="(creator, i) in influentialCreators" :key="i" class="bg-white border border-gray-100 rounded-[28px] p-6 lg:p-7 flex flex-col sm:flex-row sm:items-center gap-5 lg:gap-8 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.04)] hover:border-[#1a946b]/20 transition-all">
                
                <!-- Avatar -->
                <div class="w-[72px] h-[72px] lg:w-[84px] lg:h-[84px] rounded-full overflow-hidden bg-gray-100 flex-shrink-0 shadow-sm border border-gray-50">
                  <img :src="creator.avatar" :alt="creator.name" class="w-full h-full object-cover" />
                </div>

                <!-- Info -->
                <div class="flex-grow">
                  <div class="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 class="text-[17px] lg:text-[19px] font-bold text-gray-900 leading-tight mb-1">
                        <span v-html="highlightText(creator.name)"></span>
                      </h4>
                      <p class="text-[13px] text-gray-500 font-medium leading-relaxed max-w-xl pr-4">
                        <span v-html="highlightText(creator.bio)"></span>
                      </p>
                    </div>
                    <!-- Tag -->
                    <div v-if="creator.isTop" class="hidden sm:block bg-[#bbf7d0] text-[#0f5238] font-bold text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-full flex-shrink-0 mt-1">
                      {{ $t('search.top_creator') }}
                    </div>
                  </div>

                  <!-- Bottom Stats & Button -->
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:mt-5 mt-6">
                    <!-- Stats Grid -->
                    <div class="flex items-center gap-8 lg:gap-10">
                      <div class="flex flex-col gap-1">
                        <span class="text-[9px] lg:text-[10px] font-black tracking-widest text-[#1a1a1a] uppercase">{{ $t('search.stats.projects') }}</span>
                        <span class="text-[15px] lg:text-[16px] font-black text-gray-900">{{ creator.stats.projects }}</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-[9px] lg:text-[10px] font-black tracking-widest text-[#1a1a1a] uppercase">{{ $t('search.stats.raised') }}</span>
                        <span class="text-[15px] lg:text-[16px] font-black text-gray-900">{{ creator.stats.raised }}</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-[9px] lg:text-[10px] font-black tracking-widest text-[#1a1a1a] uppercase">{{ $t('search.stats.backers') }}</span>
                        <span class="text-[15px] lg:text-[16px] font-black text-gray-900">{{ creator.stats.backers }}</span>
                      </div>
                    </div>
                    
                    <!-- Button -->
                    <button class="px-6 py-2.5 bg-white border-2 border-[#0f5238] text-[#0f5238] hover:bg-[#0f5238] hover:text-white rounded-full font-bold text-[13px] transition-colors w-full sm:w-auto shadow-sm tracking-wide whitespace-nowrap">
                      {{ $t('search.view_profile') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- End of Results Marker -->
          <div class="text-center py-12 lg:py-16 bg-[#fafafa] border-2 border-dashed border-gray-200 rounded-[32px] px-6 mt-12 mb-4 flex flex-col items-center justify-center">
            
            <!-- Custom Search Icon with Cross -->
            <div class="relative w-12 h-12 lg:w-14 lg:h-14 mb-5 text-[#bdc3c7]">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <div class="absolute bottom-0.5 lg:bottom-1 left-0.5 lg:left-1 w-5 h-5 lg:w-6 lg:h-6 bg-[#bdc3c7] rounded-full flex items-center justify-center border-4 border-[#fafafa]">
                <svg class="w-2.5 h-2.5 text-[#fafafa]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
            </div>
            
            <h2 class="text-[20px] lg:text-[22px] font-bold text-[#1a1a1a] mb-3">{{ $t('search.empty_filter_title') }}</h2>
            <p class="text-gray-500 font-medium max-w-lg mx-auto mb-6 lg:mb-8 text-[13.5px] lg:text-[14.5px] leading-relaxed">{{ $t('search.empty_filter_desc') }}</p>

            <!-- Fallback Category Chips -->
            <div class="flex flex-wrap justify-center gap-2.5">
              <button @click="updateSearchQuery($t('search.empty_chips.ai'))" class="px-5 py-2 bg-gray-200/80 text-[#1a1a1a] font-bold text-[13px] rounded-full hover:bg-gray-300 cursor-pointer transition-colors shadow-sm shadow-gray-200/20">
                {{ $t('search.empty_chips.ai') }}
              </button>
              <button @click="updateSearchQuery($t('search.empty_chips.digital_art'))" class="px-5 py-2 bg-gray-200/80 text-[#1a1a1a] font-bold text-[13px] rounded-full hover:bg-gray-300 cursor-pointer transition-colors shadow-sm shadow-gray-200/20">
                {{ $t('search.empty_chips.digital_art') }}
              </button>
              <button @click="updateSearchQuery($t('search.empty_chips.micro_finance'))" class="px-5 py-2 bg-gray-200/80 text-[#1a1a1a] font-bold text-[13px] rounded-full hover:bg-gray-300 cursor-pointer transition-colors shadow-sm shadow-gray-200/20">
                {{ $t('search.empty_chips.micro_finance') }}
              </button>
            </div>
          </div>

        </div>

        <!-- Right Column: Sidebar -->
        <div class="space-y-6">
          <!-- Recent Searches -->
          <div class="bg-[#f5f5f5] rounded-[24px] p-6 lg:p-8">
            <h3 class="text-[17px] font-bold text-[#1a1a1a] mb-6">{{ $t('search.recent_searches', 'Recent Searches') }}</h3>
            <ul class="space-y-5">
              <li class="flex items-center gap-3 text-gray-600 hover:text-[#0f5238] cursor-pointer transition-colors group">
                <svg class="w-4 h-4 text-gray-400 group-hover:text-[#0f5238]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span class="text-[14.5px] font-medium">wind turbine design</span>
              </li>
              <li class="flex items-center gap-3 text-gray-600 hover:text-[#0f5238] cursor-pointer transition-colors group">
                <svg class="w-4 h-4 text-gray-400 group-hover:text-[#0f5238]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span class="text-[14.5px] font-medium">water purification</span>
              </li>
              <li class="flex items-center gap-3 text-gray-600 hover:text-[#0f5238] cursor-pointer transition-colors group">
                <svg class="w-4 h-4 text-gray-400 group-hover:text-[#0f5238]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span class="text-[14.5px] font-medium">tashkent eco startup</span>
              </li>
            </ul>
          </div>

          <!-- Popular Tags -->
          <div class="bg-[#b3ecd1] rounded-[24px] p-6 lg:p-8 relative overflow-hidden">
            <!-- Background Icon -->
            <svg class="absolute -bottom-6 -right-6 w-40 h-40 text-[#8ed8b7]/40 -rotate-12" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" /></svg>
            
            <h3 class="text-[17px] font-bold text-[#022c22] mb-6 relative z-10">{{ $t('search.popular_tags', 'Popular Tags') }}</h3>
            <div class="flex flex-wrap gap-2.5 relative z-10">
              <span class="px-3.5 py-1.5 bg-[#8de1b9] text-[#064e3b] font-bold text-[12px] rounded-full hover:bg-[#6dd3a2] cursor-pointer transition-colors shadow-sm shadow-[#064e3b]/5">#sustainable</span>
              <span class="px-3.5 py-1.5 bg-[#8de1b9] text-[#064e3b] font-bold text-[12px] rounded-full hover:bg-[#6dd3a2] cursor-pointer transition-colors shadow-sm shadow-[#064e3b]/5">#solar2024</span>
              <span class="px-3.5 py-1.5 bg-[#8de1b9] text-[#064e3b] font-bold text-[12px] rounded-full hover:bg-[#6dd3a2] cursor-pointer transition-colors shadow-sm shadow-[#064e3b]/5">#cleantech</span>
              <span class="px-3.5 py-1.5 bg-[#8de1b9] text-[#064e3b] font-bold text-[12px] rounded-full hover:bg-[#6dd3a2] cursor-pointer transition-colors shadow-sm shadow-[#064e3b]/5">#impact</span>
              <span class="px-3.5 py-1.5 bg-[#8de1b9] text-[#064e3b] font-bold text-[12px] rounded-full hover:bg-[#6dd3a2] cursor-pointer transition-colors shadow-sm shadow-[#064e3b]/5">#zerowaste</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-16 lg:py-24 bg-[#fafafa] border-2 border-dashed border-gray-200 rounded-[32px] lg:rounded-[48px] px-6 mt-8 flex flex-col items-center justify-center min-h-[400px]">
        
        <!-- Custom Search Icon with Cross -->
        <div class="relative w-14 h-14 lg:w-16 lg:h-16 mb-6 text-[#bdc3c7]">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <div class="absolute bottom-1 lg:bottom-1.5 left-1 lg:left-1.5 w-6 h-6 lg:w-7 lg:h-7 bg-[#bdc3c7] rounded-full flex items-center justify-center border-4 border-[#fafafa]">
            <svg class="w-3 h-3 text-[#fafafa]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </div>
        </div>
        
        <h2 class="text-[22px] lg:text-[24px] font-bold text-[#1a1a1a] mb-4">{{ $t('search.empty_filter_title') }}</h2>
        <p class="text-gray-500 font-medium max-w-lg mx-auto mb-8 lg:mb-10 text-[14px] lg:text-[15px] leading-relaxed">{{ $t('search.empty_filter_desc') }}</p>

        <!-- Fallback Category Chips -->
        <div class="flex flex-wrap justify-center gap-3">
          <button @click="updateSearchQuery($t('search.empty_chips.ai'))" class="px-5 py-2.5 bg-gray-200/80 text-[#1a1a1a] font-bold text-[13.5px] rounded-full hover:bg-gray-300 cursor-pointer transition-colors shadow-sm shadow-gray-200/20">
            {{ $t('search.empty_chips.ai') }}
          </button>
          <button @click="updateSearchQuery($t('search.empty_chips.digital_art'))" class="px-5 py-2.5 bg-gray-200/80 text-[#1a1a1a] font-bold text-[13.5px] rounded-full hover:bg-gray-300 cursor-pointer transition-colors shadow-sm shadow-gray-200/20">
            {{ $t('search.empty_chips.digital_art') }}
          </button>
          <button @click="updateSearchQuery($t('search.empty_chips.micro_finance'))" class="px-5 py-2.5 bg-gray-200/80 text-[#1a1a1a] font-bold text-[13.5px] rounded-full hover:bg-gray-300 cursor-pointer transition-colors shadow-sm shadow-gray-200/20">
            {{ $t('search.empty_chips.micro_finance') }}
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
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

const route = useRoute()
const router = useRouter()
const { tm, t, locale } = useI18n()

const allProjects = computed(() => tm('explore.projects_list') as unknown as ExploreProject[])

const activeTab = ref('all')
const activeCat = ref('all')
const activeSort = ref("relevant");
const searchQuery = ref(route.query.q as string || "");

const pillButtons = ref<HTMLElement[]>([]);
const pillStyle = ref({
  left: '0px',
  width: '0px',
  height: '0px'
});

const updatePill = async () => {
  await nextTick();
  const index = ['all', 'projects', 'creators', 'categories'].indexOf(activeTab.value);
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
watch([activeTab, locale], updatePill);

const handleLocalSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { q: searchQuery.value.trim() } });
  }
};

watch(() => route.query.q, (newQ) => {
  searchQuery.value = newQ as string || "";
});

const matchedCategories = ref([
  { title: 'Renewable Energy', count: 42, icon: 'M5 13l4 4L19 7' },
  { title: 'Green Tech', count: 38, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'Urban Ecology', count: 18, icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' }
])

const influentialCreators = ref([
  {
    name: 'Jasur Energiya-zoda',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256',
    isTop: true,
    bio: 'Expert in yashil architectural solutions and vertical gardening for urban communities.',
    stats: { projects: 12, raised: '$2.4M', backers: '15.4k' }
  },
  {
    name: 'Malika Yashil Labs',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256',
    isTop: false,
    bio: 'Pioneering clean energiya storage technologies for remote villages across the region.',
    stats: { projects: 4, raised: '$840k', backers: '4.2k' }
  }
])

const filteredProjects = computed(() => {
  let result = [...allProjects.value]

  const q = (route.query.q as string || '').toLowerCase()
  if (q) {
    result = result.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.author.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    )
  }

  if (activeCat.value !== 'all') {
    const targetCat = t(`search.cats.${activeCat.value}`)
    result = result.filter(p => p.category === targetCat)
  }

  if (activeSort.value === 'newest') result.sort((a, b) => b.id - a.id)
  else if (activeSort.value === 'popular') result.sort((a, b) => b.donors - a.donors)

  return result
})

const updateSearchQuery = (query: string) => {
  router.push({ path: '/search', query: { q: query } })
}

const highlightText = (text: string) => {
  const q = route.query.q as string || ''
  if (!q) return text
  
  const safeQ = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${safeQ})`, 'gi')
  return text.replace(regex, '<span class="bg-[#bbf7d0] px-1 rounded-sm">$1</span>')
}
</script>
