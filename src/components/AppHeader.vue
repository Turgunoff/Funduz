<template>
  <div class="relative">
    <header
      class="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-gray-50 h-16 lg:h-20 flex items-center shadow-sm"
    >
      <div class="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center w-full">
          <!-- Logo & Links -->
          <div class="flex items-center gap-8 lg:gap-12">
            <router-link
              to="/"
              class="text-[22px] lg:text-[26px] font-bold text-[#1a946b] tracking-wide"
              >FUNDUZ</router-link
            >

            <nav class="hidden lg:flex items-center space-x-8 text-[16px] font-bold text-gray-800">
              <router-link
                to="/explore"
                :class="isExplorePage ? 'text-[#1a946b]' : 'hover:text-[#1a946b]'"
                class="transition-colors"
              >
                {{ $t("nav.projects") }}
              </router-link>
              <router-link
                to="/how-it-works"
                :class="isHowItWorksPage ? 'text-[#1a946b]' : 'hover:text-[#1a946b]'"
                class="transition-colors"
              >
                {{ $t("nav.about") }}
              </router-link>
              <router-link
                to="/community"
                :class="isCommunityPage ? 'text-[#1a946b]' : 'hover:text-[#1a946b]'"
                class="transition-colors"
              >
                {{ $t("nav.cooperation") }}
              </router-link>
            </nav>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-4 lg:gap-5 ml-auto">
            <!-- Search Area -->
            <div class="hidden sm:flex items-center relative h-10">
              <button
                v-if="!isSearchExpanded"
                @click="expandSearch"
                class="text-gray-500 hover:text-[#1a946b] transition-colors p-2"
              >
                <svg class="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
              
              <div 
                v-else
                class="flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 h-full w-[200px] lg:w-[240px] animate-fade-in"
              >
                <svg class="w-4 h-4 text-gray-400 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input 
                  ref="searchInput"
                  v-model="searchQuery" 
                  @keyup.enter="performSearch"
                  @blur="collapseSearch"
                  type="text" 
                  :placeholder="$t('explore.search_placeholder')" 
                  class="bg-transparent border-none outline-none w-full text-[14px] text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>

            <!-- Auth & CTA Buttons -->
            <router-link
              to="/login"
              class="hidden md:flex px-6 py-2.5 border border-gray-200 rounded-xl text-[14px] font-bold text-gray-800 bg-white hover:bg-[#1a946b] hover:text-white hover:border-[#1a946b] transition-all shadow-sm"
            >
              {{ $t("nav.login") }}
            </router-link>
            <router-link
              to="/login"
              class="hidden sm:flex px-6 py-2.5 border border-gray-200 rounded-xl text-[14px] font-bold text-gray-800 bg-white hover:bg-[#1a946b] hover:text-white hover:border-[#1a946b] transition-all shadow-sm"
            >
              {{ $t("nav.start_project") }}
            </router-link>

            <!-- Language Switcher -->
            <div class="hidden lg:flex items-center pl-4 border-l border-gray-100 h-6 gap-3">
              <button
                @click="setLocale('uz')"
                :class="locale === 'uz' ? 'text-[#1a946b]' : 'text-gray-400'"
                class="text-[13px] font-bold uppercase transition-colors cursor-pointer"
              >
                Uz
              </button>
              <span class="text-gray-200">|</span>
              <button
                @click="setLocale('ru')"
                :class="locale === 'ru' ? 'text-[#1a946b]' : 'text-gray-400'"
                class="text-[13px] font-bold uppercase transition-colors cursor-pointer"
              >
                Ru
              </button>
            </div>

            <!-- Mobile Menu Toggle -->
            <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden text-gray-800 p-2">
              <svg
                class="w-6 h-6 sm:w-7 sm:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  v-if="!isMenuOpen"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer -->
    <div
      v-show="isMenuOpen"
      class="fixed inset-0 top-16 lg:top-20 bg-white z-[90] lg:hidden overflow-y-auto"
    >
      <div class="p-6 pt-10 flex flex-col gap-10">
        <!-- Mobile Search Field -->
        <div class="relative">
          <input
            v-model="searchQuery"
            @keyup.enter="performSearch"
            type="text"
            :placeholder="$t('explore.search_placeholder')"
            class="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 text-[15px] font-medium text-gray-800 outline-none focus:border-[#1a946b] focus:ring-1 focus:ring-[#1a946b] transition-all"
          />
          <button @click="performSearch" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1a946b]">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>
        </div>

        <nav class="flex flex-col gap-6">
          <router-link
            @click="isMenuOpen = false"
            to="/explore"
            class="text-[20px] font-black border-b border-gray-50 pb-5 flex justify-between items-center"
            :class="isExplorePage ? 'text-[#1a946b]' : 'text-gray-900'"
          >
            {{ $t("nav.projects") }}
            <svg
              class="w-4 h-4 text-[#1a946b]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </router-link>
          <router-link
            @click="isMenuOpen = false"
            to="/how-it-works"
            class="text-[20px] font-black border-b border-gray-50 pb-5 flex justify-between items-center"
            :class="isHowItWorksPage ? 'text-[#1a946b]' : 'text-gray-900'"
          >
            {{ $t("nav.about") }}
            <svg
              class="w-4 h-4 text-[#1a946b]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </router-link>
          <router-link
            @click="isMenuOpen = false"
            to="/community"
            class="text-[20px] font-black border-b border-gray-50 pb-5 flex justify-between items-center"
            :class="isCommunityPage ? 'text-[#1a946b]' : 'text-gray-900'"
          >
            {{ $t("nav.cooperation") }}
            <svg
              class="w-4 h-4 text-[#1a946b]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </router-link>
        </nav>

        <div class="flex flex-col gap-5">
          <router-link
            @click="isMenuOpen = false"
            to="/login"
            class="w-full py-4 border-2 border-gray-100 rounded-xl font-black text-gray-900 bg-white hover:bg-[#1a946b] hover:text-white hover:border-[#1a946b] transition-all shadow-sm flex justify-center"
            >{{ $t("nav.start_project") }}</router-link>
          <router-link
            @click="isMenuOpen = false"
            to="/login"
            class="w-full py-4 border-2 border-gray-100 rounded-xl font-black text-gray-900 bg-white hover:bg-[#1a946b] hover:text-white hover:border-[#1a946b] transition-all shadow-sm flex justify-center"
            >{{ $t("nav.login") }}</router-link>

          <div class="bg-gray-50 p-6 rounded-[24px] border border-gray-100 text-center mt-2">
            <p class="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-4">
              {{ locale === "uz" ? "TILNI TANLASH" : "ВЫБОР ЯЗЫКА" }}
            </p>
            <div class="grid grid-cols-2 gap-3">
              <button
                @click="setLocale('uz')"
                :class="
                  locale === 'uz'
                    ? 'bg-[#1a946b] text-white shadow-lg shadow-green-900/10'
                    : 'bg-white text-gray-400'
                "
                class="py-3.5 rounded-xl font-black transition-all"
              >
                UZ
              </button>
              <button
                @click="setLocale('ru')"
                :class="
                  locale === 'ru'
                    ? 'bg-[#1a946b] text-white shadow-lg shadow-green-900/10'
                    : 'bg-white text-gray-400'
                "
                class="py-3.5 rounded-xl font-black transition-all"
              >
                RU
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const route = useRoute();
const router = useRouter();
const { locale } = useI18n();
const isMenuOpen = ref(false);

const isSearchExpanded = ref(false);
const searchQuery = ref("");
const searchInput = ref<HTMLInputElement | null>(null);

const expandSearch = async () => {
  isSearchExpanded.value = true;
  await nextTick();
  searchInput.value?.focus();
};

const collapseSearch = () => {
  if (!searchQuery.value) {
    isSearchExpanded.value = false;
  }
};

const performSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { q: searchQuery.value } });
    isMenuOpen.value = false;
  }
};

const isExplorePage = computed(() => route.path === "/explore");
const isHowItWorksPage = computed(() => route.path === "/how-it-works");
const isCommunityPage = computed(() => route.path === "/community");

const setLocale = (lang: string) => {
  locale.value = lang;
};

watch(
  () => route.path,
  () => {
    isMenuOpen.value = false;
  },
);

watch(isMenuOpen, (val) => {
  if (val) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "";
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
@keyframes fadeIn {
  from { opacity: 0; width: 0; }
  to { opacity: 1; width: var(--final-width, 100%); }
}
.animate-fade-in {
  animation: fadeIn 0.2s ease-out forwards;
}
</style>
