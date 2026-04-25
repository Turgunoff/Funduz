<template>
  <div class="bg-white min-h-screen">
    <!-- Section 1: Main Project Info (Top) -->
    <div class="py-8 lg:py-16 border-b border-gray-100">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <!-- Left: Image Section -->
          <div
            class="relative rounded-[24px] lg:rounded-[32px] overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[540px] shadow-sm"
          >
            <img src="/project_trees.png" class="w-full h-full object-cover" alt="Project Image" />
            <div
              class="absolute top-4 left-4 lg:top-6 lg:left-6 px-3 py-1 lg:px-4 lg:py-1.5 bg-[#14532d] text-white text-[11px] lg:text-[13px] font-bold rounded-full uppercase"
            >
              {{ $t("projects.cat_ecology") }}
            </div>
          </div>

          <!-- Right: Content Section -->
          <div class="flex flex-col h-full">
            <h1
              class="text-[26px] md:text-[32px] lg:text-[44px] font-bold text-gray-900 leading-[1.2] lg:leading-[1.1] mb-6 lg:mb-8"
            >
              {{ $t("project_view.title") }}
            </h1>

            <!-- Author Info -->
            <div class="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
              <div
                class="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100"
              >
                <img
                  src="https://ui-avatars.com/api/?name=Alisher+Usmonov&background=random"
                  alt="Author"
                />
              </div>
              <div>
                <div class="flex items-center gap-1">
                  <span class="text-gray-500 text-[13px] lg:text-sm font-medium"
                    >{{ $t("project_view.author_label") }}:</span
                  >
                  <span class="text-[#326b4d] font-bold text-[13px] lg:text-sm"
                    >Alisher Usmonov</span
                  >
                </div>
                <p class="text-gray-400 text-[11px] lg:text-xs font-medium">
                  {{ $t("project_view.author_success") }}
                </p>
              </div>
            </div>

            <!-- Stats Card -->
            <div
              class="bg-[#f0fdf4] border border-[#dcfce7] rounded-[32px] lg:rounded-[40px] p-6 lg:p-10 mb-8"
            >
              <div
                class="flex flex-col sm:flex-row justify-between items-start lg:items-center mb-6 gap-2"
              >
                <h2 class="text-[24px] lg:text-[32px] font-black text-[#14532d]">25,000,000 UZS</h2>
                <span
                  class="text-gray-400 text-[10px] lg:text-xs font-bold uppercase tracking-wider"
                  >{{ $t("project_view.goal") }}: 100,000,000 UZS</span
                >
              </div>

              <!-- Progress Bar -->
              <div
                class="w-full h-2.5 lg:h-3 bg-white rounded-full mb-4 overflow-hidden border border-[#dcfce7]"
              >
                <div
                  class="h-full bg-[#326b4d] rounded-full transition-all duration-1000"
                  style="width: 25%"
                ></div>
              </div>

              <div class="flex justify-between text-[13px] lg:text-sm font-bold mb-8 lg:mb-10">
                <span class="text-[#326b4d]">25% {{ $t("project_view.raised") }}</span>
                <span class="text-gray-400">124 {{ $t("project_view.donors_count") }}</span>
              </div>

              <!-- Stats Row -->
              <div class="grid grid-cols-3 gap-2 lg:gap-4 pt-8 lg:pt-10 border-t border-[#dcfce7]">
                <div class="text-center">
                  <div class="flex justify-center mb-1.5 lg:mb-2 text-orange-500">
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
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div class="text-[15px] lg:text-[18px] font-bold text-gray-900 leading-none mb-1">
                    124
                  </div>
                  <div
                    class="text-[9px] lg:text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none"
                  >
                    {{ $t("project_view.stat_donors") }}
                  </div>
                </div>
                <div class="text-center border-x border-[#dcfce7]">
                  <div class="flex justify-center mb-1.5 lg:mb-2 text-orange-500">
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 00-2 2z"
                      />
                    </svg>
                  </div>
                  <div class="text-[15px] lg:text-[18px] font-bold text-gray-900 leading-none mb-1">
                    15
                  </div>
                  <div
                    class="text-[9px] lg:text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none"
                  >
                    {{ $t("project_view.stat_days") }}
                  </div>
                </div>
                <div class="text-center">
                  <div class="flex justify-center mb-1.5 lg:mb-2 text-orange-500">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div class="text-[15px] lg:text-[18px] font-bold text-gray-900 leading-none mb-1">
                    25%
                  </div>
                  <div
                    class="text-[9px] lg:text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none"
                  >
                    {{ $t("project_view.stat_done") }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <router-link
                :to="`/donate/${route.params.id}`"
                class="flex-grow py-4 lg:py-5 bg-[#326b4d] text-white font-bold rounded-2xl hover:bg-[#25523a] transition-all cursor-pointer shadow-lg shadow-green-900/10 flex items-center justify-center order-1"
              >
                {{ $t("project_view.btn_support") }}
              </router-link>
              <div class="flex gap-3 order-2 sm:order-2">
                <button
                  class="flex-1 sm:w-16 sm:h-16 h-14 flex items-center justify-center border border-gray-100 rounded-2xl text-gray-400 hover:text-gray-900 transition-all cursor-pointer"
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
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
                <button
                  class="flex-1 sm:w-16 sm:h-16 h-14 flex items-center justify-center border border-gray-100 rounded-2xl text-gray-400 hover:text-red-500 transition-all cursor-pointer"
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 2: Detailed Tabs and Rewards -->
    <div class="py-10 lg:py-20 bg-white">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Tabs Header -->
        <div
          class="flex items-center gap-6 lg:gap-12 border-b border-gray-100 mb-8 lg:mb-12 overflow-x-auto no-scrollbar"
        >
          <button
            v-for="(tab, idx) in projectTabs"
            :key="idx"
            @click="activeTab = idx"
            :class="
              activeTab === idx
                ? 'border-[#326b4d] text-gray-900 font-bold'
                : 'border-transparent text-gray-400 font-medium'
            "
            class="pb-4 border-b-2 text-[15px] lg:text-[17px] transition-all cursor-pointer flex items-center gap-2.5 whitespace-nowrap"
          >
            <span v-if="idx === 0">
              <svg
                class="w-4 h-4 lg:w-5 lg:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span v-if="idx === 1" class="flex items-center gap-2">
              <svg
                class="w-4 h-4 lg:w-5 lg:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
              <span
                class="bg-[#0f5238] text-white text-[9px] lg:text-[10px] px-1.5 py-0.5 rounded-full"
                >3</span
              >
            </span>
            <span v-if="idx === 2">
              <svg
                class="w-4 h-4 lg:w-5 lg:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 00-2-2h14a2 2 0 00-2 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </span>
            {{ tab }}
          </button>
        </div>

        <!-- Content Grid -->
        <div class="grid lg:grid-cols-3 gap-12 lg:gap-24">
          <!-- Left Content Area -->
          <div class="lg:col-span-2">
            <h2
              class="text-[24px] lg:text-[32px] font-bold text-gray-900 mb-6 lg:mb-8 leading-snug"
            >
              {{ $t("project_view.detail_title") }}
            </h2>
            <div
              class="prose prose-sm md:prose-lg max-w-none text-gray-500 leading-relaxed space-y-6"
            >
              <p>{{ $t("project_view.detail_text_1") }}</p>

              <figure class="my-8 lg:my-12">
                <div
                  class="rounded-[24px] lg:rounded-[32px] overflow-hidden bg-gray-50 aspect-video flex items-center justify-center shadow-sm"
                >
                  <img
                    src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80&w=1200"
                    class="w-full h-full object-cover"
                    alt="Eco package"
                  />
                </div>
                <figcaption class="text-center text-[12px] lg:text-sm text-gray-400 mt-4 italic">
                  {{ $t("project_view.image_caption") }}
                </figcaption>
              </figure>

              <h3 class="text-[20px] lg:text-[24px] font-bold text-gray-900">
                {{ $t("project_view.benefits_title") }}
              </h3>
              <ul class="space-y-4">
                <li
                  v-for="(benefit, bidx) in projectBenefits"
                  :key="bidx"
                  class="flex items-start gap-4"
                >
                  <div
                    class="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <svg
                      class="w-3.5 h-3.5 lg:w-4 lg:h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span class="text-[14px] lg:text-gray-600 leading-relaxed">{{ benefit }}</span>
                </li>
              </ul>

              <p>{{ $t("project_view.detail_text_2") }}</p>
            </div>
          </div>

          <!-- Right Sidebar: Rewards -->
          <div class="space-y-6 lg:space-y-8 mt-12 lg:mt-0">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-[20px] lg:text-[22px] font-bold text-gray-900">
                {{ $t("project_view.reward_title") }}
              </h3>
              <span
                class="text-[10px] lg:text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full uppercase"
                >{{ $t("project_view.reward_count") }}</span
              >
            </div>

            <!-- Rewards Loop -->
            <div class="space-y-6">
              <!-- Reward Card Generator (using first as template, in logic same as before) -->
              <div
                v-for="rIdx in [1, 2, 3]"
                :key="rIdx"
                class="group bg-white border border-gray-100 rounded-[24px] lg:rounded-[32px] p-6 lg:p-8 hover:border-[#0f5238] hover:shadow-xl transition-all cursor-pointer"
              >
                <div class="flex justify-between items-start mb-4 lg:mb-6">
                  <div class="text-[#0f5238] font-black text-lg lg:text-xl">
                    {{ getRewardText(rIdx, 'price') }}
                  </div>
                  <div class="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded">
                    {{ rIdx === 1 ? "45" : rIdx === 2 ? "28" : "5" }} ta olindi
                  </div>
                </div>
                <h4 class="text-gray-900 font-bold text-base lg:text-lg mb-3 lg:mb-4">
                  {{ getRewardText(rIdx, 'title') }}
                </h4>
                <p class="text-gray-400 text-[13px] lg:text-sm leading-relaxed mb-6 lg:mb-8">
                  {{ getRewardText(rIdx, 'desc') }}
                </p>

                <div
                  class="flex items-center gap-3 mb-6 lg:mb-8 bg-gray-50 p-2.5 lg:p-3 rounded-xl border border-gray-100/50"
                >
                  <svg
                    class="w-3.5 h-3.5 lg:w-4 lg:h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 00-2 2z"
                    />
                  </svg>
                  <span class="text-[10px] lg:text-[11px] font-bold text-gray-500">
                    {{ $t("project_view.delivery_label") }}
                    {{ $t(`project_view.reward_${rIdx}_delivery`) }}
                  </span>
                </div>

                <div
                  class="flex items-center justify-between text-[#0f5238] font-bold text-[13px] lg:text-sm"
                >
                  {{ $t("project_view.reward_select") }}
                  <svg
                    class="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                </div>
              </div>
            </div>

            <!-- Special Help Box -->
            <div
              class="bg-[#fdf2f2] rounded-[24px] lg:rounded-[32px] p-6 lg:p-8 border border-[#feeded] shadow-sm"
            >
              <h4 class="text-gray-900 font-bold text-base lg:text-lg mb-3 lg:mb-4">
                {{ $t("project_view.special_title") }}
              </h4>
              <p class="text-gray-500 text-[13px] lg:text-sm leading-relaxed mb-6">
                {{ $t("project_view.special_desc") }}
              </p>
              <router-link
                :to="`/donate/${route.params.id}`"
                class="block w-full py-4 text-center bg-[#e67e22] text-white font-bold rounded-2xl hover:bg-[#d35400] transition-all cursor-pointer shadow-md"
              >
                {{ $t("project_view.special_btn") }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const { t, tm } = useI18n();
const route = useRoute();
const activeTab = ref(0);

const projectTabs = computed(() => tm('project_view.tabs') as string[]);
const projectBenefits = computed(() => tm('project_view.benefits') as string[]);

const getRewardText = (idx: number, type: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return t(`project_view.reward_${idx}_${type}` as any);
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Custom transitions */
.transition-all {
  transition: all 0.3s ease;
}
</style>
