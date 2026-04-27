<template>
  <div class="min-h-screen bg-[#fcfaf9] flex flex-col">
    <!-- Header -->
    <header class="bg-white border-b border-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div class="max-w-[1440px] mx-auto flex items-center justify-between">
        <div class="flex items-center gap-6">
          <router-link to="/" class="text-[22px] lg:text-[26px] font-bold text-[#1a946b] tracking-wide">FUNDUZ</router-link>
          <div class="h-6 w-[1px] bg-gray-200"></div>
          <span class="text-[15px] font-bold text-gray-500">{{ $t('create.header_title') }}</span>
        </div>
        
        <div class="flex items-center gap-8">
          <!-- Language Switcher -->
          <div class="hidden sm:flex items-center gap-3 pr-8 border-r border-gray-100">
            <button @click="setLocale('uz')" :class="locale === 'uz' ? 'text-[#1a946b]' : 'text-gray-400'" class="text-[13px] font-bold uppercase transition-colors">Uz</button>
            <div class="w-[1px] h-3 bg-gray-200"></div>
            <button @click="setLocale('ru')" :class="locale === 'ru' ? 'text-[#1a946b]' : 'text-gray-400'" class="text-[13px] font-bold uppercase transition-colors">Ru</button>
          </div>

          <router-link to="/" class="text-[14px] font-bold text-gray-400 hover:text-red-500 transition-colors">
            {{ $t('create.cancel') }}
          </router-link>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow py-12 lg:py-20">
      <div class="max-w-[800px] mx-auto px-4">
        
        <!-- Step Info (Hidden on Preview) -->
        <div v-if="currentStep < 4" class="mb-12">
          <div class="text-[11px] font-black text-[#1a946b] uppercase tracking-[0.2em] mb-4">
            {{ $t('create.step_prefix') }} {{ currentStep }}/3
          </div>
          <h1 class="text-[32px] lg:text-[40px] font-bold text-gray-900 mb-8 tracking-tight">
            {{ $t(`create.step${currentStep}_title`) }}
          </h1>
          
          <!-- Progress Bar -->
          <div class="relative h-1.5 w-full bg-gray-200 rounded-full mb-6">
            <div 
              class="absolute h-full bg-[#1a946b] rounded-full transition-all duration-500 shadow-sm shadow-green-600/20"
              :style="{ width: (currentStep / 3 * 100) + '%' }"
            ></div>
          </div>

          <!-- Step Tabs -->
          <div class="flex items-center gap-12 border-b border-gray-100 pb-4">
             <span :class="currentStep === 1 ? 'text-[#1a946b] border-[#1a946b]' : 'text-gray-300 border-transparent'" class="text-[11px] font-black uppercase tracking-widest border-b-2 py-4 -mb-5 transition-all">{{ $t('create.tab_info') }}</span>
             <span :class="currentStep === 2 ? 'text-[#1a946b] border-[#1a946b]' : 'text-gray-300 border-transparent'" class="text-[11px] font-black uppercase tracking-widest border-b-2 py-4 -mb-5 transition-all">{{ $t('create.tab_media') }}</span>
             <span :class="currentStep === 3 ? 'text-[#1a946b] border-[#1a946b]' : 'text-gray-300 border-transparent'" class="text-[11px] font-black uppercase tracking-widest border-b-2 py-4 -mb-5 transition-all">{{ $t('create.tab_rewards') }}</span>
          </div>
        </div>

        <!-- Form Step 1: Basic Info -->
        <div v-if="currentStep === 1" class="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div class="group">
            <label class="block text-[14px] font-bold text-gray-900 mb-2">{{ $t('create.name_label') }}</label>
            <p class="text-[13px] text-gray-400 mb-4">{{ $t('create.name_help') }}</p>
            <input 
              v-model="formData.title"
              type="text" 
              :placeholder="$t('create.name_placeholder')"
              class="w-full px-6 py-5 bg-white border border-gray-200 rounded-[24px] focus:border-[#1a946b] focus:ring-4 focus:ring-green-500/5 outline-none transition-all text-lg font-medium"
              :class="{'border-red-200 bg-red-50/10': formData.title && formData.title.length < 5}"
            >
            <p v-if="formData.title && formData.title.length < 5" class="mt-3 text-[12px] text-red-400 flex items-center gap-1.5 px-2">
               <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
               {{ $t('create.validate_title') }}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label class="block text-[14px] font-bold text-gray-900 mb-4">{{ $t('create.category_label') }}</label>
              <div class="relative">
                <select 
                  v-model="formData.category"
                  class="w-full px-6 py-5 bg-white border border-gray-200 rounded-[24px] focus:border-[#1a946b] outline-none transition-all text-gray-700 font-medium appearance-none"
                >
                  <option value="tech">{{ $t('explore.categories.tech') }}</option>
                  <option value="art">{{ $t('explore.categories.art') }}</option>
                  <option value="social">{{ $t('explore.categories.social') }}</option>
                  <option value="edu">{{ $t('explore.categories.edu') }}</option>
                  <option value="eco">{{ $t('explore.categories.eco') }}</option>
                </select>
                <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <div>
              <label class="block text-[14px] font-bold text-gray-900 mb-4">{{ $t('create.duration_label') }}</label>
              <input 
                v-model="formData.duration"
                type="number" 
                class="w-full px-6 py-5 bg-white border border-gray-200 rounded-[24px] focus:border-[#1a946b] outline-none transition-all font-medium"
              >
            </div>
          </div>

          <div>
            <label class="block text-[14px] font-bold text-gray-900 mb-4">{{ $t('create.goal_label') }}</label>
            <div class="relative">
              <input 
                v-model="formData.goal"
                type="number" 
                class="w-full px-6 py-5 bg-white border border-gray-200 rounded-[24px] focus:border-[#1a946b] outline-none transition-all font-medium pr-16"
                :class="{'border-red-200 bg-red-50/10': formData.goal <= 0}"
              >
              <span class="absolute right-6 top-1/2 -translate-y-1/2 font-bold text-gray-400">UZS</span>
            </div>
            <p v-if="formData.goal <= 0" class="mt-3 text-[12px] text-red-400 flex items-center gap-1.5 px-2">
               <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
               {{ $t('create.validate_goal') }}
            </p>
            <div class="flex items-center gap-2 mt-4 text-[#94654c]">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>
              <p class="text-[12px] font-medium">{{ $t('create.tax_info') }}</p>
            </div>
          </div>
        </div>

        <!-- Form Step 2: Media & Story -->
        <div v-if="currentStep === 2" class="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div>
            <label class="block text-[14px] font-bold text-gray-900 mb-2">{{ $t('create.media_label') }}</label>
            <p class="text-[13px] text-gray-400 mb-6">{{ $t('create.media_help') }}</p>
            
            <div 
              @click="fileInput?.click()"
              class="relative w-full aspect-video border-2 border-dashed border-gray-200 rounded-[40px] flex flex-col items-center justify-center bg-white hover:border-[#1a946b] transition-all cursor-pointer overflow-hidden group"
              :class="{'border-red-200 bg-red-50/5': !formData.mainImage && !formData.videoUrl}"
            >
              <img v-if="imagePreview" :src="imagePreview" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
              <div v-if="!imagePreview" class="flex flex-col items-center">
                <div class="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors">
                  <svg class="w-8 h-8 text-gray-400 group-hover:text-[#1a946b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <p class="text-[15px] font-bold text-gray-400 group-hover:text-gray-900 transition-colors">{{ $t('create.media_placeholder') }}</p>
              </div>

              <!-- Overlay for change -->
              <div v-else class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span class="px-6 py-3 bg-white rounded-full text-[13px] font-bold text-gray-900 shadow-xl">{{ $t('create.tab_media') }}</span>
              </div>
            </div>
            <p v-if="!formData.mainImage && !formData.videoUrl" class="mt-3 text-[12px] text-red-400 flex items-center gap-1.5 px-2">
               <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
               {{ $t('create.validate_media') }}
            </p>
            <input type="file" ref="fileInput" class="hidden" accept="image/*" @change="handleImageUpload">
          </div>

          <div>
            <label class="block text-[14px] font-bold text-gray-900 mb-4">{{ $t('create.video_label') }}</label>
            <input 
              v-model="formData.videoUrl"
              type="text" 
              :placeholder="$t('create.video_placeholder')"
              class="w-full px-6 py-5 bg-white border border-gray-200 rounded-[24px] focus:border-[#1a946b] outline-none transition-all font-medium"
            >
          </div>

          <div>
            <label class="block text-[14px] font-bold text-gray-900 mb-4">{{ $t('create.story_label') }}</label>
            <textarea 
              v-model="formData.story"
              rows="6"
              :placeholder="$t('create.story_placeholder')"
              class="w-full px-6 py-5 bg-white border border-gray-200 rounded-[32px] focus:border-[#1a946b] outline-none transition-all font-medium resize-none"
              :class="{'border-red-200 bg-red-50/10': formData.story && formData.story.length < 20}"
            ></textarea>
            <p v-if="formData.story && formData.story.length < 20" class="mt-3 text-[12px] text-red-400 flex items-center gap-1.5 px-2">
               <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
               {{ $t('create.validate_story') }}
            </p>
          </div>
        </div>

        <!-- Form Step 3: Rewards -->
        <div v-if="currentStep === 3" class="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div class="flex items-center justify-between mb-8">
            <h3 class="text-[20px] font-bold text-gray-900">{{ $t('create.tab_rewards') }}</h3>
            <button 
              @click="addReward"
              class="flex items-center gap-2 px-6 py-3 bg-[#f0fdf4] text-[#1a946b] rounded-full text-[13px] font-black hover:bg-green-100 transition-colors uppercase tracking-wider"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" /></svg>
              {{ $t('create.add_reward') }}
            </button>
          </div>

          <div class="space-y-6">
            <div 
              v-for="(reward, index) in formData.rewards" 
              :key="index"
              class="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm hover:shadow-md transition-shadow relative group"
            >
              <!-- Delete Button -->
              <button 
                @click="removeReward(index)"
                class="absolute -top-3 -right-3 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-300 hover:text-red-500 hover:border-red-100 shadow-sm transition-all"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-6">
                  <div>
                    <label class="block text-[12px] font-black text-gray-400 uppercase tracking-widest mb-3">{{ $t('create.reward_name') }}</label>
                    <input 
                      v-model="reward.title"
                      type="text" 
                      placeholder="..."
                      class="w-full px-5 py-4 bg-gray-50 border-transparent rounded-[20px] focus:bg-white focus:border-[#1a946b] outline-none transition-all font-medium"
                      :class="{'border-red-100': !reward.title && formData.rewards.length > 0}"
                    >
                  </div>
                  <div>
                    <label class="block text-[12px] font-black text-gray-400 uppercase tracking-widest mb-3">{{ $t('create.reward_price') }}</label>
                    <div class="relative">
                      <input 
                        v-model="reward.minAmount"
                        type="number" 
                        class="w-full px-5 py-4 bg-gray-50 border-transparent rounded-[20px] focus:bg-white focus:border-[#1a946b] outline-none transition-all font-medium pr-12"
                      >
                      <span class="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-gray-300 text-sm">UZS</span>
                    </div>
                  </div>
                </div>

                <div class="space-y-6">
                  <div>
                    <label class="block text-[12px] font-black text-gray-400 uppercase tracking-widest mb-3">{{ $t('create.reward_desc') }}</label>
                    <textarea 
                      v-model="reward.description"
                      rows="4"
                      class="w-full px-5 py-4 bg-gray-50 border-transparent rounded-[20px] focus:bg-white focus:border-[#1a946b] outline-none transition-all font-medium resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <!-- Empty State -->
            <div v-if="formData.rewards.length === 0" class="py-20 border-2 border-dashed border-gray-100 rounded-[40px] flex flex-col items-center justify-center text-center">
               <div class="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mb-6">
                  <svg class="w-10 h-10 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
               </div>
               <p class="text-gray-400 font-medium">{{ $t('create.reward_empty') }}</p>
               <p class="mt-4 text-[12px] text-red-400 flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  {{ $t('create.validate_rewards') }}
               </p>
            </div>
          </div>
        </div>

        <!-- Step 4: Preview -->
        <div v-if="currentStep === 4" class="animate-in fade-in slide-in-from-bottom-4 duration-500">
           <div class="mb-10 flex items-center justify-between">
              <div>
                <h2 class="text-[28px] font-bold text-gray-900 mb-2">Предпросмотр</h2>
                <p class="text-gray-400">Проверьте, как ваша страница будет выглядеть для спонсоров.</p>
              </div>
              <div class="px-4 py-2 bg-yellow-50 text-yellow-700 text-[12px] font-bold rounded-full uppercase tracking-wider">Черновик</div>
           </div>

           <!-- Mock Project Page -->
           <div class="bg-white rounded-[48px] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100">
              <div class="aspect-video w-full bg-gray-100 relative">
                 <img v-if="imagePreview" :src="imagePreview" class="w-full h-full object-cover" />
                 <div v-else class="w-full h-full flex items-center justify-center text-gray-300">
                    <svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                 </div>
              </div>
              
              <div class="p-10 lg:p-14">
                 <div class="flex items-center gap-3 mb-6">
                    <span class="px-4 py-1.5 bg-green-50 text-[#1a946b] text-[12px] font-black rounded-full uppercase tracking-wider">{{ $t(`explore.categories.${formData.category}`) }}</span>
                    <span class="text-gray-300">•</span>
                    <span class="text-[13px] font-bold text-gray-500">{{ formData.duration }} дней осталось</span>
                 </div>

                 <h1 class="text-[36px] font-bold text-gray-900 mb-8 leading-tight">{{ formData.title || 'Название вашего проекта' }}</h1>

                 <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div class="lg:col-span-2">
                       <h3 class="text-[18px] font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">О проекте</h3>
                       <p class="text-gray-600 leading-relaxed whitespace-pre-wrap text-lg">{{ formData.story || 'Здесь будет ваша история...' }}</p>
                    </div>

                    <div class="space-y-8">
                       <div class="bg-gray-50 rounded-[32px] p-8">
                          <div class="text-[32px] font-bold text-gray-900 mb-2">0 UZS</div>
                          <div class="text-gray-400 text-sm mb-6">собрано из {{ formData.goal.toLocaleString() }} UZS</div>
                          <div class="h-2 w-full bg-gray-200 rounded-full mb-6">
                             <div class="h-full bg-[#1a946b] rounded-full" style="width: 0%"></div>
                          </div>
                          <div class="flex justify-between text-sm font-bold">
                             <span class="text-gray-900">0%</span>
                             <span class="text-gray-400">0 спонсоров</span>
                          </div>
                       </div>

                       <div class="space-y-4">
                          <h4 class="font-bold text-gray-900 px-2">Вознаграждения</h4>
                          <div v-for="reward in formData.rewards" :key="reward.title" class="p-6 border border-gray-100 rounded-[24px] bg-white">
                             <div class="font-bold text-[#1a946b] mb-1">{{ reward.minAmount.toLocaleString() }} UZS</div>
                             <div class="font-bold text-gray-900 mb-2">{{ reward.title }}</div>
                             <p class="text-[13px] text-gray-500 leading-relaxed">{{ reward.description }}</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </main>

    <!-- Footer Actions -->
    <footer class="bg-white border-t border-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-[1440px] mx-auto flex items-center justify-between">
        <button 
          v-if="currentStep > 1"
          @click="currentStep--"
          class="flex items-center gap-3 text-[14px] font-black text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-[0.1em]"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
          {{ $t('create.back') }}
        </button>
        <div v-else></div>

        <button 
          @click="nextStep"
          class="px-10 py-5 bg-[#1a946b] text-white rounded-3xl font-black flex items-center gap-3 hover:bg-[#147a58] shadow-xl shadow-green-900/10 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="!isStepValid"
        >
          {{ currentStep === 4 ? 'Опубликовать проект' : (currentStep === 3 ? 'Перейти к предпросмотру' : $t('create.next')) }}
          <svg v-if="currentStep < 4" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
        </button>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useProjectStore } from '../stores/projects'
import { useAuthStore } from '../stores/auth'
import type { Project } from '../types/Project'

const { locale } = useI18n()
const router = useRouter()
const projectStore = useProjectStore()
const authStore = useAuthStore()

const currentStep = ref(1)

interface RewardEntry {
  title: string;
  minAmount: number;
  description: string;
}

const formData = reactive({
  title: '',
  category: 'tech',
  duration: 30,
  goal: 1000000,
  mainImage: null as File | null,
  videoUrl: '',
  story: '',
  rewards: [] as RewardEntry[]
})

const imagePreview = ref('')
const fileInput = ref<HTMLInputElement | null>(null)

const isStepValid = computed(() => {
  if (currentStep.value === 1) {
    return formData.title.length >= 5 && formData.goal > 0;
  }
  if (currentStep.value === 2) {
    return formData.story.length >= 20 && (formData.mainImage || formData.videoUrl);
  }
  if (currentStep.value === 3) {
    return formData.rewards.length > 0 && formData.rewards.every(r => r.title.length > 0 && r.minAmount > 0);
  }
  return true;
})

const setLocale = (lang: string) => {
  locale.value = lang
}

const handleImageUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    formData.mainImage = file
    imagePreview.value = URL.createObjectURL(file)
  }
}

const addReward = () => {
  formData.rewards.push({
    title: '',
    minAmount: 50000,
    description: ''
  })
}

const removeReward = (index: number) => {
  formData.rewards.splice(index, 1)
}

const nextStep = async () => {
  if (currentStep.value < 4) {
    currentStep.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    // Construct new project object
    const newProject: Project = {
      id: Date.now(), // Mock ID
      title: formData.title,
      description: formData.story,
      categoryKey: formData.category,
      authorId: authStore.user?.id || 999, // Fallback to a mock ID
      mainImage: imagePreview.value || 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80',
      goal: formData.goal,
      raised: 0,
      donorsCount: 0,
      createdAt: new Date().toISOString(),
      endsAt: new Date(Date.now() + formData.duration * 24 * 60 * 60 * 1000).toISOString(),
      rewards: formData.rewards.map((r, idx) => ({
        id: Date.now() + idx,
        title: r.title,
        description: r.description,
        minAmount: r.minAmount
      })),
      status: 'active'
    };

    // Add to store
    projectStore.addProject(newProject);

    // Finish - Simulation
    alert('Loyiha muvaffaqiyatli yaratildi! / Проект успешно создан!');
    router.push('/');
  }
}
</script>

<style scoped>
h1 {
  letter-spacing: -0.04em;
}
input::placeholder, textarea::placeholder {
  color: #cbcbcb;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-in-from-bottom-4 {
  from { transform: translateY(1rem); }
  to { transform: translateY(0); }
}

.animate-in {
  animation-fill-mode: both;
}

.fade-in {
  animation-name: fade-in;
}

.slide-in-from-bottom-4 {
  animation-name: slide-in-from-bottom-4;
}
</style>
