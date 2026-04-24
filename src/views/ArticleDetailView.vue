<template>
  <div class="pt-24 lg:pt-32 pb-20 bg-white min-h-screen">
    <!-- Main Content wrapper (Matched to ArticlesView.vue max-w) -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Content Container for Article Text (Narrower for readability) -->
      <div class="max-w-[1240px] mx-auto">
        <!-- First Section: Strategy Header -->
        <div class="mb-20">
          <!-- Strategy Badge -->
          <span class="inline-block px-4 py-1.5 bg-[#cfeedb] text-[#1a946b] text-[12px] font-black uppercase tracking-widest rounded-full mb-8">
            {{ $t(`${slug}.badge`) }}
          </span>

          <!-- Main Title -->
          <h1 class="text-[40px] md:text-[60px] lg:text-[84px] font-bold text-gray-900 leading-[1.05] tracking-tight mb-8">
            {{ $t(`${slug}.title`) }}
          </h1>

          <!-- Subtitle Intro -->
          <p class="text-[18px] lg:text-[24px] text-gray-500 font-medium leading-relaxed max-w-4xl">
            {{ $t(`${slug}.subtitle`) }}
          </p>
        </div>

        <!-- Second Section: Author & Actions -->
        <div class="flex items-center justify-between mb-12">
          <div class="flex items-center gap-4">
            <!-- Initials Avatar -->
            <div class="w-12 h-12 rounded-full border border-gray-100 bg-[#f0fdf4] flex items-center justify-center text-[#1a946b] font-black text-[14px] uppercase">
               {{ t(`${slug}.author.name`).split(' ').map(n => n[0]).join('') }}
            </div>
            <!-- Info -->
            <div>
              <div class="text-[16px] font-black text-gray-900 leading-tight">
                {{ $t(`${slug}.author.name`) }}
              </div>
              <div class="text-[14px] text-gray-400 font-medium">
                {{ $t(`${slug}.author.role`) }} • {{ $t(`${slug}.author.read_time`) }} • {{ $t(`${slug}.author.date`) }}
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center gap-3">
            <button class="w-11 h-11 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#cfeedb] hover:text-[#1a946b] transition-all active:scale-95 shadow-sm">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
            <button class="w-11 h-11 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#cfeedb] hover:text-[#1a946b] transition-all active:scale-95 shadow-sm">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Main Image (Full Grid Width) -->
      <div class="relative w-full aspect-[16/9] md:aspect-[21/10] rounded-[40px] lg:rounded-[60px] overflow-hidden mb-20 shadow-2xl group">
        <div class="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
        <img 
          :src="slug === 'pitch_video' ? 'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?auto=format&fit=crop&q=80&w=1600' : 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600'" 
          :alt="$t(`${slug}.title`)"
          class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>

      <!-- Third Section: Article Content & Sidebar Grid -->
      <div class="max-w-[1240px] mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          
          <!-- Left Column: Main Article Body -->
          <div class="lg:col-span-8">
            <p class="text-[18px] lg:text-[20px] text-gray-700 leading-[1.8] font-medium mb-12">
              {{ $t(`${slug}.content_p1`) }}
            </p>

            <h2 class="text-[32px] lg:text-[42px] font-black text-[#0f4634] mb-8 leading-tight">
              {{ $t(`${slug}.h1`) }}
            </h2>

            <p class="text-[18px] lg:text-[20px] text-gray-700 leading-[1.8] font-medium mb-12">
              {{ $t(`${slug}.p2`) }}
            </p>

            <!-- Pro Tip Box -->
            <div class="bg-gray-50 border border-gray-100 rounded-[32px] p-8 lg:p-10 mb-12 flex gap-6 items-start">
              <div class="w-12 h-12 rounded-full bg-[#1a946b] flex items-center justify-center flex-shrink-0 text-white">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0h2zM4.582 5.03L3.465 6.147a1 1 0 001.414 1.414L6 6.414V11a1 1 0 002 0V5a1 1 0 00-2 0H4.582zM15 11l-3-3m0 0l-3 3m3-3v8" />
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-5-8a1 1 0 112 0 1 1 0 01-2 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="text-[#1a946b] font-black text-[18px] mb-3">{{ $t(`${slug}.pro_tip.title`) }}</h3>
                <p class="text-gray-600 leading-relaxed font-medium italic">
                  {{ $t(`${slug}.pro_tip.text`) }}
                </p>
              </div>
            </div>

            <h2 class="text-[32px] lg:text-[42px] font-black text-[#0f4634] mb-8 leading-tight">
              {{ $t(`${slug}.h2`) }}
            </h2>

            <p class="text-[18px] lg:text-[20px] text-gray-700 leading-[1.8] font-medium mb-12">
              {{ $t(`${slug}.p3`) }}
            </p>

            <!-- Stylish Quote -->
            <div class="relative py-12 px-10 mb-16 border-l-4 border-[#1a946b]">
              <p class="text-[26px] lg:text-[34px] font-black text-gray-900 leading-tight italic">
                "{{ $t(`${slug}.quote`) }}"
              </p>
            </div>

            <!-- Secondary Image -->
            <div class="rounded-[40px] overflow-hidden shadow-xl mb-12">
              <img :src="slug === 'pitch_video' ? 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200' : 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1200'" alt="Article Context" class="w-full h-auto" />
            </div>

            <h2 class="text-[32px] lg:text-[42px] font-black text-[#0f4634] mb-8 leading-tight">
              {{ $t(`${slug}.h3`) }}
            </h2>

            <p class="text-[18px] lg:text-[20px] text-gray-700 leading-[1.8] font-medium mb-8">
              {{ $t(`${slug}.p4`) }}
            </p>

            <ul class="space-y-4 mb-12">
              <li v-for="(item, idx) in list1" :key="idx" class="flex gap-4 items-start">
                <div class="w-2 h-2 rounded-full bg-[#1a946b] mt-3 flex-shrink-0"></div>
                <p class="text-[18px] lg:text-[20px] text-gray-700 leading-[1.6] font-medium">
                  <span class="font-black text-gray-900">{{ item.bold }}:</span> {{ item.text }}
                </p>
              </li>
            </ul>

            <!-- Discussion Section -->
            <div class="mt-20 pt-12 border-t border-gray-100">
              <h2 class="text-[32px] font-black text-[#0f4634] mb-12">
                {{ $t(`${slug}.discussion.title`) }}
              </h2>

              <!-- Join Conversation Card -->
              <div class="bg-gray-50/50 border border-gray-100/50 rounded-[40px] p-10 lg:p-16 text-center shadow-sm mb-16 relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-1 bg-[#1a946b]"></div>
                
                <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-8 shadow-md">
                  <svg class="w-7 h-7 text-[#0f4634]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>

                <h3 class="text-[24px] lg:text-[28px] font-black text-gray-900 mb-4">
                  {{ $t(`${slug}.discussion.join_title`) }}
                </h3>
                <p class="text-[16px] lg:text-[18px] text-gray-500 font-medium mb-10 max-w-xl mx-auto leading-relaxed">
                  {{ $t(`${slug}.discussion.join_subtitle`) }}
                </p>

                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <router-link 
                    to="/login"
                    class="px-12 py-4 bg-white border border-gray-200 text-gray-900 rounded-full font-black text-[16px] hover:bg-[#1a946b] hover:text-white hover:border-[#1a946b] transition-all shadow-sm hover:shadow-lg active:scale-95"
                  >
                    {{ $t(`${slug}.discussion.sign_in`) }}
                  </router-link>
                </div>
              </div>

              <!-- Comments List -->
              <div class="space-y-12">
                <div 
                  v-for="(comment, idx) in comments" 
                  :key="idx"
                  class="flex gap-6 items-start"
                >
                  <!-- Avatar -->
                  <div class="w-12 h-12 rounded-full overflow-hidden shadow-md flex-shrink-0">
                    <img 
                      :src="`https://i.pravatar.cc/150?u=${comment.author}`" 
                      :alt="comment.author" 
                      class="w-full h-full object-cover"
                    />
                  </div>
                  
                  <!-- Content -->
                  <div class="flex-1">
                    <div class="flex items-center gap-3 mb-2">
                      <span class="font-black text-gray-900 text-[16px]">{{ comment.author }}</span>
                      <span class="text-gray-400 text-[14px] font-bold">{{ comment.date }}</span>
                    </div>
                    <p class="text-gray-600 font-medium leading-[1.6] mb-4 text-[16px]">
                      {{ comment.text }}
                    </p>
                    <button class="flex items-center gap-2 text-[#1a946b] font-black text-[14px] hover:scale-105 transition-transform">
                      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                      </svg>
                      {{ $t(`${slug}.discussion.reply`) }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Sidebar -->
          <div class="lg:col-span-4 space-y-12">
            <!-- About Author Card -->
            <div class="bg-gray-50/50 border border-gray-100/50 rounded-[40px] p-8 lg:p-10 shadow-sm">
              <div class="text-[12px] font-black text-gray-400 uppercase tracking-widest mb-8">
                {{ $t(`${slug}.sidebar.about`) }}
              </div>
              <div class="w-20 h-20 rounded-[24px] overflow-hidden mb-6 shadow-lg rotate-3 border border-gray-100 bg-[#f0fdf4] flex items-center justify-center text-[#1a946b] font-black text-[24px] uppercase">
                {{ t(`${slug}.author.name`).split(' ').map(n => n[0]).join('') }}
              </div>
              <h4 class="text-[20px] font-black text-gray-900 mb-4">{{ $t(`${slug}.author.name`) }}</h4>
              <p class="text-gray-500 font-medium leading-relaxed mb-10 text-[15px]">
                {{ $t(`${slug}.sidebar.bio`) }}
              </p>
              <button class="w-full py-4 bg-[#0f4634] text-white rounded-full font-black text-[15px] hover:bg-[#1a946b] transition-all shadow-lg active:scale-95">
                {{ $t(`${slug}.sidebar.follow`) }}
              </button>
            </div>

            <!-- In this Article -->
            <div class="px-4">
              <div class="text-[12px] font-black text-gray-400 uppercase tracking-widest mb-8">
                {{ $t(`${slug}.sidebar.in_article`) }}
              </div>
              <ul class="space-y-6">
                <li 
                  v-for="(section, idx) in sidebarSections" 
                  :key="idx"
                  class="flex items-center gap-4 group cursor-pointer"
                >
                  <div class="w-1 h-6 bg-transparent group-hover:bg-[#1a946b] transition-all" :class="{ 'bg-[#1a946b]': idx === 0 }"></div>
                  <span class="text-[16px] font-bold text-gray-500 group-hover:text-gray-900 transition-colors" :class="{ 'text-gray-900': idx === 0 }">
                    {{ section }}
                  </span>
                </li>
              </ul>
            </div>

            <!-- Sidebar Newsletter Card -->
            <div class="bg-[#9c4d12] rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden group">
              <div class="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
              
              <div class="w-12 h-12 bg-white/20 rounded-[15px] flex items-center justify-center mb-8 backdrop-blur-sm shadow-inner">
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h4 class="text-[24px] font-black leading-tight mb-4">
                {{ $t(`${slug}.sidebar.newsletter_title`) }}
              </h4>
              <p class="text-white/80 font-medium text-[15px] mb-10 leading-relaxed">
                {{ $t(`${slug}.sidebar.newsletter_desc`) }}
              </p>

              <div class="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email"
                  class="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white outline-none transition-all font-medium"
                />
                <button class="w-full py-4 bg-[#fdecd5] text-[#9c4d12] rounded-full font-black text-[15px] hover:bg-white transition-all active:scale-95 shadow-lg">
                  {{ $t(`${slug}.sidebar.newsletter_btn`) }}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    <!-- Keep Reading Section -->
    <div class="bg-gray-50/30 border-t border-gray-100 mt-32 py-24">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header (Centered with ArticlesView.vue logic) -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 mx-auto">
          <div>
            <h2 class="text-[32px] md:text-[42px] font-black text-[#0f4634] mb-4">
              {{ $t(`${slug}.keep_reading.title`) }}
            </h2>
            <p class="text-gray-500 font-medium text-[16px] md:text-[18px]">
              {{ $t(`${slug}.keep_reading.subtitle`) }}
            </p>
          </div>
          <router-link 
            to="/articles" 
            class="inline-flex items-center gap-2 text-[#1a946b] font-black text-[15px] hover:gap-4 transition-all group"
          >
            <span>{{ $t(`${slug}.keep_reading.view_all`) }}</span>
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>

        <!-- Articles Grid (Matched to ArticlesView.vue) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div 
            v-for="(article, idx) in keepReading" 
            :key="idx"
            class="group bg-white rounded-[60px] overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
          >
            <!-- Image -->
            <div class="relative aspect-[1.1/0.8] overflow-hidden">
              <img 
                :src="article.image" 
                :alt="article.title" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <!-- Content (Matched Padding & Typography) -->
            <div class="p-10 lg:p-12 flex flex-col flex-1">
              <div class="text-[14px] font-black text-[#1a946b] uppercase tracking-widest mb-6">
                {{ article.category }}
              </div>
              <h3 class="text-[24px] lg:text-[28px] font-black text-[#1a946b] leading-tight mb-6 line-clamp-2">
                {{ article.title }}
              </h3>
              
              <p v-if="article.desc" class="text-gray-400 font-medium text-[16px] leading-relaxed mb-10 line-clamp-3">
                {{ article.desc }}
              </p>
              
              <div class="mt-auto pt-8 border-t border-gray-50 flex items-center gap-4">
                <!-- Initials Avatar -->
                <div class="w-14 h-14 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#1a946b] font-black text-[16px] border border-[#dcfce7] uppercase">
                  {{ article.author.split(' ').map((n: string) => n[0]).join('') }}
                </div>
                <div>
                  <div class="text-[17px] font-black text-gray-900 leading-tight mb-1">{{ article.author }}</div>
                  <div class="text-[14px] text-gray-400 font-bold">12 Октября, 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const { tm, t } = useI18n();
const route = useRoute();

interface List1Item {
  bold: string;
  text: string;
}

interface CommentItem {
  author: string;
  date: string;
  text: string;
}

interface KeepReadingArticle {
  title: string;
  category: string;
  image: string;
  desc?: string;
  author: string;
}

// Get the slug from route which corresponds to the i18n key (e.g., 'campaign_story', 'pitch_video')
const slug = computed(() => {
  const s = route.params.slug as string;
  if (!s) return 'campaign_story';
  // Ensure we match the keys in i18n.ts (they use underscores)
  return s.replace(/-/g, '_'); 
});

const list1 = computed(() => tm(`${slug.value}.list1`) as List1Item[]);
const comments = computed(() => tm(`${slug.value}.discussion.comments`) as CommentItem[]);
const sidebarSections = computed(() => tm(`${slug.value}.sidebar.sections`) as string[]);
const keepReading = computed(() => tm(`${slug.value}.keep_reading.articles`) as KeepReadingArticle[]);
</script>

<style scoped>
h1 {
  font-family: 'Outfit', sans-serif;
  letter-spacing: -0.02em;
}
</style>
