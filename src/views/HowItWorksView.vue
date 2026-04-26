<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Secondary Sub-Navbar (Page Specific) -->
    <div
      class="fixed top-16 lg:top-20 left-0 right-0 z-[90] bg-[#f0f9f6] border-b border-[#e1ece8] w-full shadow-sm overflow-x-auto no-scrollbar"
    >
      <div class="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 h-12 flex items-center">
        <nav class="flex items-center space-x-8 text-[14px] font-bold text-gray-800 shrink-0">
          <router-link
            to="/dashboard"
            class="transition-colors h-12 flex items-center border-b-2 border-transparent hover:text-[#1a946b] whitespace-nowrap"
          >
            {{ $t("nav.projects") }}
          </router-link>
          <router-link
            to="/trends"
            class="transition-colors h-12 flex items-center border-b-2 border-transparent hover:text-[#1a946b] whitespace-nowrap"
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

    <!-- TOP SECTION: Hero & Steps -->
    <div class="bg-[#f8f6f5] pb-[100px] lg:pb-[180px]">
      <!-- Hero Section -->
      <div class="relative z-10 pt-32 lg:pt-36">
        <div
          class="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 flex flex-col items-center text-center"
        >
          <div class="mb-10 lg:mb-12">
            <span
              class="inline-flex items-center px-4 py-1.5 rounded-full bg-[#d7f1e6] text-[#2d6a4f] text-[10px] lg:text-[11px] font-black tracking-[0.1em] uppercase"
            >
              {{ $t("how_it_works.badge") }}
            </span>
          </div>

          <h1
            class="text-[40px] md:text-[60px] lg:text-[88px] font-bold text-[#1a1a1a] leading-[1.1] mb-8 lg:mb-10 tracking-tight"
          >
            {{ $t("how_it_works.title_start") }}
            <span class="text-[#0f4a36]">{{ $t("how_it_works.title_end") }}</span>
          </h1>

          <p
            class="text-sm md:text-base lg:text-[18px] text-[#717171] max-w-2xl lg:max-w-3xl mx-auto leading-relaxed mb-12 lg:mb-16 font-medium px-4"
          >
            {{ $t("how_it_works.subtitle") }}
          </p>

          <div
            class="relative bg-gray-200/50 backdrop-blur-sm p-1 rounded-full flex items-center shadow-inner"
          >
            <!-- Animated Background Pill -->
            <div
              class="absolute bg-[#1a946b] rounded-full transition-all duration-300 ease-out shadow-lg"
              :style="pillStyle"
            ></div>

            <button
              v-for="type in ['author', 'sponsor']"
              :key="type"
              @click="userType = type"
              ref="pillButtons"
              :class="userType === type ? 'text-white' : 'text-[#4b4b4b] hover:text-black'"
              class="relative z-10 px-8 lg:px-12 py-3 lg:py-4 rounded-full text-[14px] lg:text-[16px] font-black transition-all duration-300"
            >
              {{ $t(type === "author" ? "how_it_works.btn_authors" : "how_it_works.btn_sponsors") }}
            </button>
          </div>
        </div>
      </div>

      <!-- Steps Section -->
      <div class="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <!-- Force idx to number using Number() -->
          <div
            v-for="(step, idx) in steps"
            :key="idx"
            class="bg-white rounded-[40px] p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:translate-y-[-8px] transition-all duration-500 group"
          >
            <div
              class="w-14 h-14 bg-[#eef7f4] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0f4a36] transition-colors duration-500"
            >
              <!-- Icon 1 -->
              <template v-if="Number(idx) === 0">
                <svg
                  v-if="userType === 'author'"
                  class="w-7 h-7 text-[#0f4a36] group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                <svg
                  v-else
                  class="w-7 h-7 text-[#0f4a36] group-hover:text-white transition-colors"
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
              </template>

              <!-- Icon 2 -->
              <template v-else-if="Number(idx) === 1">
                <svg
                  v-if="userType === 'author'"
                  class="w-7 h-7 text-[#0f4a36] group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                <svg
                  v-else
                  class="w-7 h-7 text-[#0f4a36] group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </template>

              <!-- Icon 3 -->
              <template v-else-if="Number(idx) === 2">
                <svg
                  v-if="userType === 'author'"
                  class="w-7 h-7 text-[#0f4a36] group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <svg
                  v-else
                  class="w-7 h-7 text-[#0f4a36] group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </template>

              <!-- Icon 4 -->
              <template v-else-if="Number(idx) === 3">
                <svg
                  v-if="userType === 'author'"
                  class="w-7 h-7 text-[#0f4a36] group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <svg
                  v-else
                  class="w-7 h-7 text-[#0f4a36] group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </template>
            </div>
            <div
              class="text-[10px] lg:text-[11px] font-black text-[#94654c] uppercase tracking-[0.2em] mb-4"
            >
              {{ $t("how_it_works.steps_prefix") }} 0{{ Number(idx) + 1 }}
            </div>
            <h3 class="text-[18px] lg:text-[22px] font-bold text-gray-900 mb-5 leading-tight">
              {{ step.title }}
            </h3>
            <p class="text-[13px] lg:text-[14px] text-gray-500 leading-relaxed font-medium">
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Features SECTION -->
    <div class="bg-[#f8f6f5] pt-10 pb-20 relative z-20">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative py-12">
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              class="lg:col-span-2 relative bg-[#0f4a36] rounded-[40px] p-8 lg:p-14 overflow-hidden min-h-[400px] lg:min-h-[500px] flex flex-col justify-end group shadow-2xl shadow-green-900/10"
            >
              <div
                class="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                  alt="Collaboration"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#0f4a36] via-[#0f4a36]/40 to-transparent"
              ></div>
              <div class="relative z-10 w-full lg:w-3/4">
                <h2 class="text-[28px] lg:text-[44px] font-bold text-white mb-6 leading-tight">
                  {{ $t("how_it_works.features.transparency.title") }}
                </h2>
                <p class="text-[14px] lg:text-[17px] text-green-50/80 leading-relaxed font-medium">
                  {{ $t("how_it_works.features.transparency.desc") }}
                </p>
              </div>
            </div>

            <div class="flex flex-col gap-6 lg:gap-8">
              <div
                class="bg-[#e9e7e6]/60 backdrop-blur-sm rounded-[40px] p-8 lg:p-10 flex flex-col h-[48%] group hover:bg-[#e9e7e6] transition-all duration-500"
              >
                <div
                  class="w-12 h-12 bg-[#94654c] rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-orange-900/10"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 class="text-[20px] lg:text-[26px] font-bold text-gray-900 mb-4">
                  {{ $t("how_it_works.features.security.title") }}
                </h3>
                <p class="text-[13px] lg:text-[15px] text-gray-600 leading-relaxed font-medium">
                  {{ $t("how_it_works.features.security.desc") }}
                </p>
              </div>
              <div
                class="bg-[#d2ede0]/60 backdrop-blur-sm rounded-[40px] p-8 lg:p-10 flex flex-col h-[48%] group hover:bg-[#d2ede0] transition-all duration-500"
              >
                <div
                  class="w-12 h-12 bg-[#0f4a36] rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-green-900/10"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 class="text-[20px] lg:text-[26px] font-bold text-gray-900 mb-4">
                  {{ $t("how_it_works.features.community.title") }}
                </h3>
                <p class="text-[13px] lg:text-[15px] text-gray-600 leading-relaxed font-medium">
                  {{ $t("how_it_works.features.community.desc") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ SECTION -->
    <div
      class="bg-[#f6f3f2] pt-24 pb-24 relative z-30 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.01)]"
    >
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 lg:mb-20">
          <h2 class="text-[32px] md:text-[48px] font-bold text-gray-900 mb-6 tracking-tight">
            {{ $t("how_it_works.faq.title") }}
          </h2>
          <p class="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            {{ $t("how_it_works.faq.subtitle") }}
          </p>
        </div>
        <div class="max-w-4xl mx-auto space-y-4">
          <div
            v-for="(item, idx) in faqItems"
            :key="idx"
            class="bg-white rounded-[32px] overflow-hidden border border-gray-100/50 shadow-sm transition-all duration-300"
          >
            <button
              @click="toggleFaq(Number(idx))"
              class="w-full px-8 lg:px-10 py-7 lg:py-8 flex items-center justify-between text-left group"
            >
              <span
                class="text-[18px] lg:text-[20px] font-bold text-gray-900 group-hover:text-[#0f4a36] transition-colors"
                >{{ item.q }}</span
              >
              <div
                :class="
                  activeFaq === Number(idx)
                    ? 'rotate-180 bg-[#0f4a36] text-white'
                    : 'bg-gray-100 text-gray-400'
                "
                class="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            <div
              v-show="activeFaq === Number(idx)"
              class="px-8 lg:px-10 pb-8 transition-all duration-300"
            >
              <p class="text-[15px] lg:text-[16px] text-gray-500 leading-relaxed max-w-3xl">
                {{ item.a }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA SECTION -->
    <div class="bg-[#f6f3f2] pb-32 pt-10">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="relative bg-[#1a946b] rounded-[48px] p-12 lg:p-24 overflow-hidden text-center shadow-2xl shadow-green-900/20"
        >
          <!-- Decoration Circles -->
          <div
            class="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          ></div>
          <div class="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

          <div class="relative z-10">
            <h2
              class="text-[32px] md:text-[48px] lg:text-[60px] font-bold text-white mb-12 tracking-tight"
            >
              {{ $t("how_it_works.cta.title") }}
            </h2>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                @click="$router.push('/login')"
                class="px-10 py-5 bg-[#0d5c42] text-white font-bold rounded-2xl text-[16px] border-2 border-transparent hover:border-white hover:bg-white hover:text-[#0d5c42] transition-all duration-300 shadow-xl shadow-black/10 transform hover:-translate-y-1"
              >
                {{ $t("how_it_works.cta.btn_create") }}
              </button>
              <button
                @click="$router.push('/dashboard')"
                class="px-10 py-5 bg-[#0d5c42] text-white font-bold rounded-2xl text-[16px] border-2 border-transparent hover:border-white hover:bg-white hover:text-[#0d5c42] transition-all duration-300 shadow-xl shadow-black/10 transform hover:-translate-y-1"
              >
                {{ $t("how_it_works.cta.btn_projects") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick, computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale, tm } = useI18n();
const userType = ref("author");

const pillButtons = ref<HTMLElement[]>([]);
const pillStyle = ref({
  left: "0px",
  width: "0px",
  height: "0px",
});

const updatePill = async () => {
  await nextTick();
  const index = userType.value === "author" ? 0 : 1;
  const activeBtn = pillButtons.value[index];
  if (activeBtn) {
    pillStyle.value = {
      left: `${activeBtn.offsetLeft}px`,
      width: `${activeBtn.offsetWidth}px`,
      height: `${activeBtn.offsetHeight}px`,
    };
  }
};

onMounted(updatePill);
watch([userType, locale], updatePill);

// Defined interfaces to satisfy the linter without changing logic
interface Step {
  title: string;
  desc: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const activeFaq = ref<number | null>(0);

const steps = computed(() => {
  const key = userType.value === "author" ? "how_it_works.steps" : "how_it_works.steps_sponsors";
  return tm(key) as unknown as Step[];
});
const faqItems = computed(() => tm("how_it_works.faq.items") as unknown as FaqItem[]);

const toggleFaq = (idx: number) => {
  activeFaq.value = activeFaq.value === idx ? null : idx;
};
</script>

<style scoped>
h1 {
  letter-spacing: -0.03em;
}
.shadow-inner {
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}
</style>
