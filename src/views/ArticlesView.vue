<template>
  <div class="pt-24 lg:pt-32 pb-20 bg-[#f8f9fa] min-h-screen">
    <!-- Hero Header -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 lg:mb-24">
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
        <div class="max-w-3xl">
          <h1
            class="text-[32px] md:text-[52px] lg:text-[68px] font-black text-gray-900 mb-6 tracking-tight leading-[1.1]"
          >
            {{ $t("articles.title") }}
          </h1>
          <p class="text-[16px] lg:text-[20px] text-gray-500 font-medium leading-relaxed">
            {{ $t("articles.subtitle") }}
          </p>
        </div>

        <!-- Search Bar -->
        <div class="relative w-full lg:w-[400px]">
          <input
            type="text"
            :placeholder="$t('articles.search_placeholder')"
            class="w-full bg-white rounded-full py-5 px-8 pl-14 text-[15px] font-medium border-none shadow-[0_15px_40px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-[#1a946b] transition-all outline-none"
          />
          <svg
            class="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Featured Article Section -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 lg:mb-32">
      <div
        class="bg-[#f3f1f0] rounded-[60px] overflow-hidden flex flex-col lg:flex-row min-h-[500px] lg:min-h-[600px] shadow-sm"
      >
        <!-- Left: Image -->
        <div class="lg:w-1/2 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
            alt="Featured Story"
            class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        <!-- Right: Content -->
        <div class="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-between">
          <div>
            <div class="flex flex-wrap items-center gap-4 mb-8">
              <span
                class="px-4 py-1.5 bg-[#f5e6e0] text-[#8e4a32] text-[12px] font-black uppercase tracking-widest rounded-full"
              >
                {{ $t("articles.featured.badge1") }}
              </span>
              <span class="text-[#1a946b] text-[12px] font-black uppercase tracking-widest">
                {{ $t("articles.featured.badge2") }}
              </span>
            </div>

            <h2
              class="text-[28px] md:text-[36px] lg:text-[44px] font-black text-gray-900 leading-tight mb-6 tracking-tight"
            >
              {{ $t("articles.featured.title") }}
            </h2>

            <p
              class="text-[16px] lg:text-[18px] text-gray-500 leading-relaxed font-medium line-clamp-3"
            >
              {{ $t("articles.featured.desc") }}
            </p>
          </div>

          <div class="mt-12 flex items-center justify-between border-t border-gray-200/50 pt-8">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
                  alt="Author"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <div class="text-gray-900 font-bold text-[15px]">
                  {{ $t("articles.featured.author") }}
                </div>
                <div class="text-gray-400 text-[13px] font-medium">
                  {{ $t("articles.featured.read_time") }}
                </div>
              </div>
            </div>

            <router-link
              to="/article/campaign_story"
              class="inline-flex items-center gap-2 text-[#0f4634] font-black text-[15px] hover:gap-4 transition-all group"
            >
              <span class="border-b-2 border-transparent group-hover:border-[#0f4634] pb-1">{{
                $t("articles.featured.btn")
              }}</span>
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Categories Filter -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <!-- Desktop Selector (Pill Style) -->
      <div class="hidden md:block w-full overflow-x-auto scrollbar-hide">
        <div
          class="flex relative bg-gray-200/50 backdrop-blur-sm p-1.5 rounded-full items-center shadow-inner min-w-max"
        >
          <!-- Animated Background Pill -->
          <div
            class="absolute bg-[#1a946b] rounded-full transition-all duration-300 ease-out shadow-lg"
            :style="pillStyle"
          ></div>

          <button
            v-for="(label, key) in categories"
            :key="key"
            @click="activeCategory = key"
            ref="categoryButtons"
            class="relative z-10 px-6 py-3 lg:px-8 lg:py-4 rounded-full text-[13px] lg:text-[15px] font-black transition-all duration-300 whitespace-nowrap"
            :class="activeCategory === key ? 'text-white' : 'text-gray-500 hover:text-gray-900'"
          >
            {{ label }}
          </button>
        </div>
      </div>

      <!-- Mobile Selector (Dropdown/Burger Style) -->
      <div class="md:hidden relative">
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="w-full bg-white border border-gray-100 rounded-[24px] p-5 flex items-center justify-between shadow-sm active:scale-[0.98] transition-all"
        >
          <div class="flex items-center gap-3">
            <div class="w-2 h-2 rounded-full bg-[#1a946b]"></div>
            <span class="text-[16px] font-black text-gray-900 uppercase tracking-wide">
              {{ categories[activeCategory] }}
            </span>
          </div>
          <svg
            class="w-6 h-6 text-gray-400 transition-transform duration-300"
            :class="{ 'rotate-180': isMobileMenuOpen }"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <!-- Dropdown Menu -->
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <div
            v-if="isMobileMenuOpen"
            class="absolute top-full left-0 right-0 mt-3 bg-white rounded-[32px] shadow-2xl border border-gray-50 p-3 z-[100]"
          >
            <button
              v-for="(label, key) in categories"
              :key="key"
              @click="selectMobileCategory(key)"
              class="w-full text-left px-6 py-4 rounded-[20px] text-[15px] font-bold transition-all mb-1 last:mb-0"
              :class="
                activeCategory === key
                  ? 'bg-[#f0fdf4] text-[#1a946b]'
                  : 'text-gray-500 active:bg-gray-50'
              "
            >
              {{ label }}
            </button>
          </div>
        </transition>
      </div>
    </div>

    <!-- Articles Grid -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        <router-link
          v-for="article in filteredArticles"
          :key="article.id"
          :to="`/article/${article.slug || article.id}`"
          class="bg-white rounded-[50px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group block"
        >
          <!-- Card Image -->
          <div class="h-64 overflow-hidden">
            <img
              :src="article.image"
              :alt="article.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <!-- Card Content -->
          <div class="p-8 lg:p-10">
            <div class="text-[#1a946b] text-[12px] font-black uppercase tracking-widest mb-4">
              {{ article.category_label }}
            </div>

            <h3
              class="text-[22px] lg:text-[24px] font-black text-gray-900 mb-4 leading-tight group-hover:text-[#1a946b] transition-colors"
            >
              {{ article.title }}
            </h3>

            <p class="text-gray-500 text-[15px] lg:text-[16px] leading-relaxed mb-8 line-clamp-2">
              {{ article.desc }}
            </p>

            <!-- Bottom Row: Author & Date -->
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  :src="`https://ui-avatars.com/api/?name=${article.author}&background=f3f1f0&color=0f4634&bold=true`"
                  alt="Author"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <div class="text-gray-900 font-bold text-[14px]">{{ article.author }}</div>
                <div class="text-gray-400 text-[12px] font-medium">{{ article.date }}</div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Newsletter Section -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 lg:mb-32">
      <div
        class="bg-gradient-to-br from-[#0f4634] to-[#1a946b] rounded-[60px] p-10 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden group"
      >
        <!-- Decorative background circles -->
        <div
          class="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-700"
        ></div>
        <div
          class="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl group-hover:bg-black/20 transition-colors duration-700"
        ></div>

        <div class="relative z-10 max-w-2xl text-center lg:text-left">
          <h2
            class="text-[32px] md:text-[42px] lg:text-[48px] font-black text-white leading-tight mb-6 tracking-tight"
          >
            {{ $t("newsletter.title") }}
          </h2>
          <p class="text-[16px] lg:text-[18px] text-white/80 font-medium leading-relaxed">
            {{ $t("newsletter.subtitle") }}
          </p>
        </div>

        <div
          class="relative z-10 w-full lg:w-auto flex flex-col sm:flex-row items-center gap-4 bg-white/10 p-2 rounded-[40px] backdrop-blur-md border border-white/20"
        >
          <input
            type="email"
            :placeholder="$t('newsletter.placeholder')"
            class="w-full sm:w-[350px] bg-white rounded-full py-5 px-8 text-[15px] font-medium border-none shadow-sm focus:ring-2 focus:ring-white transition-all outline-none"
          />
          <button
            class="w-full sm:w-auto px-12 py-5 bg-[#1a946b] border-2 border-white text-white rounded-full font-black text-[15px] transition-all duration-300 hover:bg-white hover:text-[#0f4634] hover:-translate-y-1 shadow-xl active:scale-95"
          >
            {{ $t("newsletter.btn") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

interface ArticleItem {
  id: number;
  slug: string;
  category: string;
  category_label: string;
  title: string;
  desc: string;
  author: string;
  date: string;
  image: string;
}

const { tm } = useI18n();
const activeCategory = ref("all");
const isMobileMenuOpen = ref(false);
const categoryButtons = ref<HTMLButtonElement[]>([]);
const windowWidth = ref(window.innerWidth);

const selectMobileCategory = (key: string) => {
  activeCategory.value = key;
  isMobileMenuOpen.value = false;
};

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});

const categories = computed(() => {
  return tm("articles.categories") as Record<string, string>;
});

const pillStyle = computed(() => {
  const keys = Object.keys(categories.value);
  const index = keys.indexOf(activeCategory.value);
  const btn = categoryButtons.value[index];

  if (!btn) return {};

  return {
    width: `${btn.offsetWidth}px`,
    height: `${btn.offsetHeight}px`,
    left: `${btn.offsetLeft}px`,
    top: `${btn.offsetTop}px`,
  };
});

const allArticles = computed(() => {
  return tm("articles.list") as ArticleItem[];
});

const filteredArticles = computed(() => {
  if (activeCategory.value === "all") return allArticles.value;
  return allArticles.value.filter((article) => article.category === activeCategory.value);
});
</script>

<style scoped>
h1 {
  font-family: "Outfit", sans-serif;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
