<template>
  <div class="relative">
    <header
      class="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-gray-50 h-16 lg:h-20 flex items-center shadow-sm"
    >
      <div class="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center w-full">
          <!-- Logo & Links -->
          <div class="flex items-center gap-4 lg:gap-10">
            <router-link
              to="/"
              class="text-[22px] lg:text-[26px] font-bold text-[#1a946b] tracking-wide"
              >FUNDUZ</router-link
            >

            <nav class="hidden lg:flex items-center space-x-6 text-[16px] font-bold text-gray-800">
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
                to="/success-stories"
                :class="isSuccessStoriesPage ? 'text-[#1a946b]' : 'hover:text-[#1a946b]'"
                class="transition-colors"
              >
                {{ $t("nav.cooperation") }}
              </router-link>
              <router-link
                to="/trends"
                :class="isTrendsPage ? 'text-[#1a946b]' : 'hover:text-[#1a946b]'"
                class="transition-colors whitespace-nowrap"
              >
                {{ $t("nav.trends") }}
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

            <!-- CTA Button -->
            <router-link
              to="/create-project"
              class="hidden sm:flex px-6 py-2.5 border border-gray-200 rounded-xl text-[14px] font-bold text-gray-800 bg-white hover:bg-[#1a946b] hover:text-white hover:border-[#1a946b] transition-all shadow-sm"
            >
              {{ $t("nav.start_project") }}
            </router-link>

            <!-- User Auth Profile -->
            <div v-if="authStore.isLoggedIn" class="relative group" @click="isProfileMenuOpen = !isProfileMenuOpen" @mouseleave="isProfileMenuOpen = false">
              <div class="flex items-center gap-2 pr-2 cursor-pointer hover:opacity-80 transition-opacity lg:pr-4">
                <div class="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-[11px] font-black text-orange-600 border border-orange-200 overflow-hidden shadow-sm">
                  <img v-if="authStore.user?.avatar" :src="authStore.user.avatar" class="w-full h-full object-cover" />
                  <span v-else>{{ authStore.user?.name?.charAt(0) || 'U' }}</span>
                </div>
                <span class="hidden lg:block text-[14px] font-bold text-gray-800">{{ authStore.user?.name }}</span>
                <svg class="hidden lg:block w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
              </div>

              <!-- Dropdown Menu -->
              <div v-show="isProfileMenuOpen" class="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-fade-in">
                <div class="px-4 py-3 border-b border-gray-50 mb-2">
                  <div class="text-[13px] font-bold text-gray-900 truncate">{{ authStore.user?.name }}</div>
                  <div class="text-[11px] text-gray-400 font-medium truncate">{{ authStore.user?.role === 'creator' ? 'Muallif' : 'Homiy' }}</div>
                </div>
                <router-link to="/profile" class="flex items-center gap-3 px-4 py-2.5 text-[14px] font-bold text-gray-700 hover:bg-[#f0f9f6] hover:text-[#1a946b] transition-colors">
                  <svg class="w-5 h-5 text-current opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  Mening profilim
                </router-link>
                <!-- the other links will be added here later -->
                <div class="h-px bg-gray-50 my-2"></div>
                <button @click="handleLogout" class="w-full flex items-center gap-3 px-4 py-2.5 text-[14px] font-bold text-red-600 hover:bg-red-50 transition-colors text-left">
                  <svg class="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                  Tizimdan chiqish
                </button>
              </div>
            </div>

            <!-- Auth/Login Button -->
            <router-link
              v-if="!authStore.isLoggedIn"
              to="/login"
              class="hidden md:flex px-6 py-2.5 border border-gray-200 rounded-xl text-[14px] font-bold text-gray-800 bg-white hover:bg-[#1a946b] hover:text-white hover:border-[#1a946b] transition-all shadow-sm"
            >
              {{ $t("nav.login") }}
            </router-link>

            <!-- Language Switcher -->
            <div class="hidden lg:flex items-center pl-4 border-l border-gray-100 h-6 gap-3">
              <button
                @click="setLocale('uz')"
                :class="localeStore.currentLocale === 'uz' ? 'text-[#1a946b]' : 'text-gray-400'"
                class="text-[13px] font-bold uppercase transition-colors cursor-pointer"
              >
                Uz
              </button>
              <span class="text-gray-200">|</span>
              <button
                @click="setLocale('ru')"
                :class="localeStore.currentLocale === 'ru' ? 'text-[#1a946b]' : 'text-gray-400'"
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
            to="/success-stories"
            class="text-[20px] font-black border-b border-gray-50 pb-5 flex justify-between items-center"
            :class="isSuccessStoriesPage ? 'text-[#1a946b]' : 'text-gray-900'"
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
          <router-link
            @click="isMenuOpen = false"
            to="/trends"
            class="text-[20px] font-black border-b border-gray-50 pb-5 flex justify-between items-center"
            :class="isTrendsPage ? 'text-[#1a946b]' : 'text-gray-900'"
          >
            {{ $t("nav.trends") }}
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
              {{ localeStore.currentLocale === "uz" ? "TILNI TANLASH" : "ВЫБОР ЯЗЫКА" }}
            </p>
            <div class="grid grid-cols-2 gap-3">
              <button
                @click="setLocale('uz')"
                :class="
                  localeStore.currentLocale === 'uz'
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
                  localeStore.currentLocale === 'ru'
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
import { useLocaleStore } from "../stores/locale";
import { useAuthStore } from "../stores/auth";

const route = useRoute();
const router = useRouter();
const localeStore = useLocaleStore();
const authStore = useAuthStore();
// i18n is used in template via global $t, mutations go through localeStore

const isMenuOpen = ref(false);
const isProfileMenuOpen = ref(false);

const handleLogout = () => {
  authStore.logout();
  router.push('/');
};

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
const isSuccessStoriesPage = computed(() => route.path === "/success-stories");
const isTrendsPage = computed(() => route.path === "/trends");

const setLocale = (lang: 'uz' | 'ru') => {
  localeStore.setLocale(lang);
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
