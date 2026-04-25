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
                to="/donate/1"
                class="hover:text-[#1a946b] transition-colors"
                :class="$route.path.startsWith('/donate') ? 'text-[#1a946b]' : ''"
              >
                Оплата
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
                <svg
                  class="w-5 h-5 lg:w-6 lg:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <div
                v-else
                class="flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 h-full w-[200px] lg:w-[240px] animate-fade-in"
              >
                <svg
                  class="w-4 h-4 text-gray-400 mr-2 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
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
            <div
              v-if="authStore.isLoggedIn"
              class="hidden lg:block relative group"
              @click="isProfileMenuOpen = !isProfileMenuOpen"
            >
              <div
                class="flex items-center gap-2 pr-2 cursor-pointer hover:opacity-80 transition-opacity lg:pr-4"
              >
                <div
                  class="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-[11px] font-black text-orange-600 border border-orange-200 overflow-hidden shadow-sm"
                >
                  <img
                    v-if="authStore.user?.avatar"
                    :src="authStore.user.avatar"
                    class="w-full h-full object-cover"
                  />
                  <span v-else>{{ authStore.user?.name?.charAt(0) || "U" }}</span>
                </div>
                <span class="hidden lg:block text-[14px] font-bold text-gray-800">{{
                  authStore.user?.name
                }}</span>
                <svg
                  class="hidden lg:block w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <!-- Dropdown Menu -->
              <transition name="dropdown">
                <div
                  v-show="isProfileMenuOpen"
                  class="absolute right-0 top-full mt-3 w-[300px] bg-white rounded-[28px] shadow-2xl shadow-gray-200/50 border border-gray-100 py-3 z-50"
                >
                  <!-- Profile Header -->
                  <div class="px-6 py-4 border-b border-gray-50 mb-3 flex items-center gap-4">
                    <div
                      class="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-[16px] font-black text-orange-600 border border-orange-200 overflow-hidden shrink-0 shadow-inner"
                    >
                      <img
                        v-if="authStore.user?.avatar"
                        :src="authStore.user.avatar"
                        class="w-full h-full object-cover"
                      />
                      <span v-else>{{ authStore.user?.name?.charAt(0) || "U" }}</span>
                    </div>
                    <div class="flex-grow min-w-0">
                      <div class="text-[16px] font-bold text-gray-900 truncate leading-tight">
                        {{ authStore.user?.name }}
                      </div>
                      <div
                        class="text-[12px] font-black text-[#1a946b] uppercase tracking-wider mt-1 truncate"
                      >
                        {{
                          authStore.user?.role === "creator"
                            ? $t("nav.role_author")
                            : $t("nav.role_sponsor")
                        }}
                      </div>
                    </div>
                  </div>

                  <!-- Menu Items -->
                  <div class="px-3 space-y-1">
                    <router-link
                      to="/profile"
                      class="flex items-center gap-4 px-4 py-3.5 text-[15px] font-bold text-gray-700 hover:bg-[#f0f9f6] hover:text-[#1a946b] rounded-2xl transition-all"
                    >
                      <svg
                        class="w-5 h-5 text-current opacity-70"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      {{ $t("nav.menu_profile") }}
                    </router-link>

                    <router-link
                      to="/my-projects"
                      class="flex items-center justify-between gap-4 px-4 py-3.5 text-[15px] font-bold text-gray-700 hover:bg-[#f0f9f6] hover:text-[#1a946b] rounded-2xl transition-all"
                    >
                      <div class="flex items-center gap-4">
                        <svg
                          class="w-5 h-5 text-current opacity-70"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          />
                        </svg>
                        {{ $t("nav.menu_dashboard") }}
                      </div>
                    </router-link>

                    <router-link
                      to="/favorites"
                      class="flex items-center justify-between gap-4 px-4 py-3.5 text-[15px] font-bold text-gray-700 hover:bg-[#f0f9f6] hover:text-[#1a946b] rounded-2xl transition-all"
                    >
                      <div class="flex items-center gap-4">
                        <svg
                          class="w-5 h-5 text-current opacity-70"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        {{ $t("nav.menu_favorites") }}
                      </div>
                    </router-link>

                    <router-link
                      to="/notifications"
                      class="flex items-center justify-between gap-4 px-4 py-3.5 text-[15px] font-bold text-gray-700 hover:bg-[#f0f9f6] hover:text-[#1a946b] rounded-2xl transition-all"
                    >
                      <div class="flex items-center gap-4">
                        <svg
                          class="w-5 h-5 text-current opacity-70"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                        Уведомления
                      </div>
                    </router-link>

                    <router-link
                      to="/settings"
                      class="flex items-center justify-between gap-4 px-4 py-3.5 text-[15px] font-bold text-gray-700 hover:bg-[#f0f9f6] hover:text-[#1a946b] rounded-2xl transition-all"
                    >
                      <div class="flex items-center gap-4">
                        <svg
                          class="w-5 h-5 text-current opacity-70"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {{ $t("nav.menu_settings") }}
                      </div>
                    </router-link>
                  </div>

                  <div class="h-px bg-gray-50 my-3 mx-4"></div>

                  <div class="px-3">
                    <button
                      @click="handleLogout"
                      class="w-full flex items-center justify-between px-4 py-3.5 text-[15px] font-bold text-red-600 hover:bg-red-50 rounded-2xl transition-all text-left group"
                    >
                      <div class="flex items-center gap-4">
                        <svg
                          class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                        {{ $t("nav.menu_logout") }}
                      </div>
                    </button>
                  </div>
                </div>
              </transition>
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

            <!-- Mobile Menu Toggle / Avatar -->
            <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden p-2 text-gray-800">
              <div
                v-if="authStore.isLoggedIn"
                class="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-[12px] font-black text-orange-600 border border-orange-200 overflow-hidden shadow-sm"
              >
                <img
                  v-if="authStore.user?.avatar"
                  :src="authStore.user.avatar"
                  class="w-full h-full object-cover"
                />
                <span v-else>{{ authStore.user?.name?.charAt(0) || "U" }}</span>
              </div>
              <svg
                v-else
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
          <button
            @click="performSearch"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1a946b]"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <nav class="flex flex-col gap-6">
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
        </nav>

        <div class="flex flex-col gap-5">
          <router-link
            v-if="!authStore.isLoggedIn"
            @click="isMenuOpen = false"
            to="/login"
            class="w-full py-4 border-2 border-gray-100 rounded-xl font-black text-gray-900 bg-white hover:bg-[#1a946b] hover:text-white hover:border-[#1a946b] transition-all shadow-sm flex justify-center"
            >{{ $t("nav.start_project") }}</router-link
          >

          <router-link
            v-else
            @click="isMenuOpen = false"
            to="/create-project"
            class="w-full py-4 border-2 border-[#1a946b] rounded-xl font-black text-white bg-[#1a946b] hover:bg-[#147a55] transition-all shadow-sm flex justify-center"
            >{{ $t("nav.start_project") }}</router-link
          >

          <router-link
            v-if="!authStore.isLoggedIn"
            @click="isMenuOpen = false"
            to="/login"
            class="w-full py-4 border-2 border-gray-100 rounded-xl font-black text-gray-900 bg-white hover:bg-[#1a946b] hover:text-white hover:border-[#1a946b] transition-all shadow-sm flex justify-center"
            >{{ $t("nav.login") }}</router-link
          >

          <!-- Authenticated Mobile Profile Menu Items -->
          <div
            v-if="authStore.isLoggedIn"
            class="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-2 mt-2"
          >
            <div class="px-2 pb-4 pt-2 border-b border-gray-200 mb-2">
              <div class="text-[16px] font-bold text-gray-900 leading-tight">
                {{ authStore.user?.name }}
              </div>
              <div class="text-[11px] font-black text-[#1a946b] uppercase tracking-wider mt-1">
                {{
                  authStore.user?.role === "creator"
                    ? $t("nav.role_author")
                    : $t("nav.role_sponsor")
                }}
              </div>
            </div>

            <router-link
              @click="isMenuOpen = false"
              to="/profile"
              class="flex items-center gap-4 px-3 py-3.5 text-[15px] font-bold text-gray-700 hover:bg-[#f0f9f6] hover:text-[#1a946b] rounded-xl transition-all"
            >
              <svg class="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {{ $t("nav.menu_profile") }}
            </router-link>

            <router-link
              @click="isMenuOpen = false"
              to="/notifications"
              class="flex items-center gap-4 px-3 py-3.5 text-[15px] font-bold text-gray-700 hover:bg-[#f0f9f6] hover:text-[#1a946b] rounded-xl transition-all"
            >
              <svg class="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              Уведомления
            </router-link>

            <router-link
              @click="isMenuOpen = false"
              to="/dashboard"
              class="flex items-center justify-between gap-4 px-3 py-3.5 text-[15px] font-bold text-gray-400 rounded-xl cursor-not-allowed"
            >
              <div class="flex items-center gap-4">
                <svg
                  class="w-5 h-5 opacity-70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"
                  /></svg
                >{{ $t("nav.menu_dashboard") }}
              </div>
              <span
                class="text-[9px] uppercase font-black tracking-widest text-[#1a946b] bg-[#f0f9f6] px-2 py-1 rounded-full"
                >{{ $t("nav.coming_soon") }}</span
              >
            </router-link>

            <button
              @click="
                handleLogout();
                isMenuOpen = false;
              "
              class="w-full flex items-center justify-between px-3 py-3.5 text-[15px] font-bold text-red-600 hover:bg-red-50 rounded-xl text-left mt-2 border-t border-gray-200"
            >
              <div class="flex items-center gap-4">
                <svg
                  class="w-5 h-5 opacity-70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                {{ $t("nav.menu_logout") }}
              </div>
            </button>
          </div>

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
  router.push("/");
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
    router.push({ path: "/search", query: { q: searchQuery.value } });
    isMenuOpen.value = false;
  }
};

const isHowItWorksPage = computed(() => route.path === "/how-it-works");
const isSuccessStoriesPage = computed(() => route.path === "/success-stories");
const isCommunityPage = computed(() => route.path === "/community");

const setLocale = (lang: "uz" | "ru") => {
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
.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: top right;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}
@keyframes fadeIn {
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: var(--final-width, 100%);
  }
}
.animate-fade-in {
  animation: fadeIn 0.2s ease-out forwards;
}
</style>
