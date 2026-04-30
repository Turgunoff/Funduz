<template>
  <div v-if="project" class="bg-white min-h-screen">
    <!-- Section 1: Main Project Info (Top) -->
    <div class="py-8 lg:py-16 border-b border-gray-100">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <!-- Left: Image Section -->
          <div
            class="relative rounded-[24px] lg:rounded-[32px] overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[540px] shadow-sm"
          >
            <img :src="project.mainImage" class="w-full h-full object-cover" :alt="project.title" />
            <div
              class="absolute top-4 left-4 lg:top-6 lg:left-6 px-3 py-1 lg:px-4 lg:py-1.5 bg-[#14532d] text-white text-[11px] lg:text-[13px] font-bold rounded-full uppercase"
            >
              {{ $t(`explore.categories.${project.categoryKey}`) }}
            </div>
          </div>

          <!-- Right: Content Section -->
          <div class="flex flex-col h-full">
            <h1
              class="text-[26px] md:text-[32px] lg:text-[44px] font-bold text-gray-900 leading-[1.2] lg:leading-[1.1] mb-6 lg:mb-8"
            >
              {{ project.title }}
            </h1>

            <!-- Author Info -->
            <div class="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
              <div
                class="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100"
              >
                <img
                  :src="author?.avatar || 'https://ui-avatars.com/api/?name=User'"
                  :alt="author?.name"
                />
              </div>
              <div>
                <div class="flex items-center gap-1">
                  <span class="text-gray-500 text-[13px] lg:text-sm font-medium"
                    >{{ $t("project_view.author_label") }}:</span
                  >
                  <span class="text-[#326b4d] font-bold text-[13px] lg:text-sm">{{
                    author?.name
                  }}</span>
                </div>
                <p class="text-gray-400 text-[11px] lg:text-xs font-medium">
                  {{ author?.deliveredCount || 0 }} {{ $t("project_view.author_success") }}
                </p>
              </div>
            </div>

            <!-- Stats Card -->
            <div
              class="bg-[#f0fdf4] border border-[#dcfce7] rounded-[32px] lg:rounded-[40px] p-6 lg:p-10 mb-8 shadow-sm"
            >
              <div
                class="flex flex-col sm:flex-row justify-between items-start lg:items-center mb-6 gap-2"
              >
                <h2 class="text-[24px] lg:text-[32px] font-extrabold text-[#14532d]">
                  {{ formatNumber(project.raised) }} UZS
                </h2>
                <span
                  class="text-gray-400 text-[10px] lg:text-xs font-bold uppercase tracking-wider"
                  >{{ $t("project_view.goal") }}: {{ formatNumber(project.goal) }} UZS</span
                >
              </div>

              <!-- Progress Bar -->
              <div
                class="w-full h-2.5 lg:h-3 bg-white rounded-full mb-4 overflow-hidden border border-[#dcfce7]"
              >
                <div
                  class="h-full bg-[#326b4d] rounded-full transition-all duration-1000"
                  :style="{ width: `${progress}%` }"
                ></div>
              </div>

              <div class="flex justify-between text-[13px] lg:text-sm font-bold mb-8 lg:mb-10">
                <span class="text-[#326b4d]">{{ progress }}% {{ $t("project_view.raised") }}</span>
                <span class="text-gray-400"
                  >{{ project.donorsCount }} {{ $t("project_view.donors_count") }}</span
                >
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
                    {{ project.donorsCount }}
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
                    {{ daysLeft }}
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
                    {{ progress }}%
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
                :to="`/donate/${project.id}`"
                class="flex-grow py-4 lg:py-5 bg-[#326b4d] text-white font-bold rounded-2xl hover:bg-[#25523a] transition-all cursor-pointer shadow-lg shadow-green-900/10 flex items-center justify-center order-1 text-lg"
              >
                {{ $t("project_view.btn_support") }}
              </router-link>
              <div class="flex gap-3 order-2 sm:order-2">
                <button
                  class="flex-1 sm:w-16 sm:h-16 h-14 flex items-center justify-center border border-gray-100 rounded-2xl text-gray-400 hover:text-gray-900 transition-all cursor-pointer bg-gray-50/50"
                  @click="copyLink"
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
                  class="flex-1 sm:w-16 sm:h-16 h-14 flex items-center justify-center border border-gray-100 rounded-2xl transition-all cursor-pointer bg-gray-50/50"
                  :class="favoriteStore.isFavorite(project.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'"
                  @click="favoriteStore.toggleFavorite(project.id)"
                >
                  <svg
                    class="w-5 h-5 lg:w-6 lg:h-6"
                    :class="{ 'fill-current': favoriteStore.isFavorite(project.id) }"
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
                >{{ project.rewards?.length || 0 }}</span
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
        <div class="grid lg:grid-cols-3 gap-12 lg:gap-20">
          <!-- Left Content Area -->
          <div class="lg:col-span-2">
            <div v-if="activeTab === 0">
              <DescriptionTab :project="project" :benefits="projectBenefits" />
            </div>
            <div v-else-if="activeTab === 1">
              <UpdatesTab />
            </div>
            <div v-else-if="activeTab === 2">
              <CommentsTab />
            </div>
          </div>

          <!-- Right Sidebar: Rewards -->
          <div class="space-y-6 lg:space-y-8 mt-12 lg:mt-0">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-[20px] lg:text-[22px] font-bold text-gray-900">
                {{ $t("project_view.reward_title") }}
              </h3>
              <span
                class="text-[10px] lg:text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full uppercase tracking-wider"
                >{{ project.rewards?.length || 0 }} {{ $t("project_view.reward_count") }}</span
              >
            </div>

            <!-- Rewards Loop -->
            <div v-if="project.rewards && project.rewards.length > 0" class="space-y-6">
              <div
                v-for="reward in project.rewards"
                :key="reward.id"
                class="group bg-white border border-gray-100 rounded-[24px] lg:rounded-[32px] p-6 lg:p-8 hover:border-[#0f5238] hover:shadow-xl hover:shadow-gray-200/50 transition-all cursor-pointer relative overflow-hidden"
              >
                <div class="flex justify-between items-start mb-4 lg:mb-6">
                  <div class="text-[#0f5238] font-black text-xl lg:text-2xl">
                    {{ formatNumber(reward.minAmount) }} UZS
                  </div>
                  <div class="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded">
                    {{ Math.floor(Math.random() * 20) + 5 }} ta olindi
                  </div>
                </div>
                <h4 class="text-gray-900 font-bold text-lg lg:text-xl mb-3 lg:mb-4">
                  {{ reward.title }}
                </h4>
                <p
                  class="text-gray-500 text-[14px] lg:text-[15px] leading-relaxed mb-6 lg:mb-8 font-medium"
                >
                  {{ reward.description }}
                </p>

                <div
                  class="flex items-center gap-3 mb-6 lg:mb-8 bg-gray-50 p-3 lg:p-4 rounded-xl border border-gray-100/50"
                >
                  <img
                    v-if="project.authorAvatar"
                    :src="project.authorAvatar"
                    :alt="project.authorName || 'Project creator avatar'"
                    class="w-full h-full object-cover"
                  />
                  <svg
                    class="w-4 h-4 text-gray-400"
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
                  <span class="text-[11px] lg:text-xs font-bold text-gray-500">
                    {{ $t("project_view.delivery_label") }}: {{ $t("month.september") }} 2024
                  </span>
                </div>

                <div
                  class="flex items-center justify-between text-[#0f5238] font-black text-[14px] lg:text-[15px]"
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

            <!-- Partial help/donation box if no rewards or general -->
            <div
              class="bg-[#f0fdf4] rounded-[24px] lg:rounded-[32px] p-6 lg:p-8 border border-[#dcfce7] shadow-sm relative group cursor-pointer overflow-hidden transition-all hover:shadow-md"
            >
              <div class="relative z-10">
                <h4 class="text-[#14532d] font-black text-lg lg:text-xl mb-3 lg:mb-4">
                  {{ $t("project_view.special_title") }}
                </h4>
                <p
                  class="text-[#065f46] text-[13px] lg:text-sm leading-relaxed mb-6 font-medium opacity-80"
                >
                  {{ $t("project_view.special_desc") }}
                </p>
                <router-link
                  :to="`/donate/${project.id}`"
                  class="block w-full py-4 text-center bg-[#326b4d] text-white font-bold rounded-2xl hover:bg-[#25523a] transition-all cursor-pointer shadow-lg shadow-green-900/10"
                >
                  {{ $t("project_view.btn_support") }}
                </router-link>
              </div>
              <div
                class="absolute -right-4 -bottom-4 w-32 h-32 bg-green-200/20 rounded-full blur-2xl group-hover:scale-150 transition-transform"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="min-h-screen flex items-center justify-center bg-gray-50 p-6">
    <div class="text-center max-w-md">
      <div
        class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400"
      >
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h2 class="text-2xl font-black text-gray-900 mb-4">Loyiha topilmadi</h2>
      <p class="text-gray-500 mb-8 font-medium">
        Kechirasiz, siz qidirayotgan loyiha topilmadi yoki u o'chirib tashlangan bo'lishi mumkin.
      </p>
      <router-link
        to="/explore"
        class="inline-flex items-center gap-2 px-8 py-4 bg-[#326b4d] text-white font-bold rounded-2xl hover:bg-[#25523a] transition-all"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Loyihalarni ko'rish
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { useProjectStore } from "../stores/projects";
import { useFavoriteStore } from "../stores/favorites";
import { users } from "../mocks/users.mock";
import DescriptionTab from '../components/project/DescriptionTab.vue';
import UpdatesTab from '../components/project/UpdatesTab.vue';
import CommentsTab from '../components/project/CommentsTab.vue';

const { tm } = useI18n();
const route = useRoute();
const projectStore = useProjectStore();
const favoriteStore = useFavoriteStore();
const activeTab = ref(0);

onMounted(() => {
  projectStore.fetchAll();
});

// Find project by ID
const project = computed(() => {
  const idNum = parseInt(route.params.id as string);
  return projectStore.allItems.find((p) => p.id === idNum) || null;
});

// Find author
const author = computed(() => {
  if (!project.value) return null;
  return users.find((u) => u.id === project.value?.authorId) || null;
});

// Calculate progress and days left
const progress = computed(() => {
  if (!project.value) return 0;
  return Math.min(100, Math.round((project.value.raised / project.value.goal) * 100));
});

const daysLeft = computed(() => {
  if (!project.value || !project.value.endsAt) return 0;
  const end = new Date(project.value.endsAt);
  const now = new Date();
  const diff = end.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 3600 * 24)));
});

const projectTabs = computed(() => tm("project_view.tabs") as string[]);
const projectBenefits = computed(() => tm("project_view.benefits") as string[]);

const formatNumber = (num: number) => {
  return new Intl.NumberFormat("uz-UZ").format(num);
};

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href);
  alert("Havola nusxalandi!");
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
.prose p {
  margin-bottom: 1.5rem;
}
</style>
