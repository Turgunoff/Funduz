<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useProjectStore } from '../stores/projects';
import { useAuthStore } from '../stores/auth';
import type { Reward } from '../types/Reward';

const route = useRoute();
const projectStore = useProjectStore();
const authStore = useAuthStore();

const projectIdStr = route.params.projectId as string;
const projectId = parseInt(projectIdStr);

const project = computed(() => {
  return projectStore.allItems.find(p => p.id === projectId);
});

const personalInfo = ref({
  name: authStore.user?.name || '',
  email: authStore.user?.email || ''
});

const amount = ref('50000');
const paymentMethod = ref('click');
const isProcessing = ref(false);
const showSuccess = ref(false);
const selectedRewardId = ref<number | null>(null);

onMounted(async () => {
  if (projectStore.allItems.length === 0) {
    await projectStore.fetchAll();
  }
});

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('uz-UZ').format(val);
};

const selectReward = (reward: Reward) => {
  selectedRewardId.value = reward.id;
  amount.value = reward.minAmount.toString();
};

const selectNoReward = () => {
    selectedRewardId.value = null;
    amount.value = '50000';
}

const handleDonate = () => {
  if (!amount.value || Number(amount.value) <= 0) return;
  
  isProcessing.value = true;
  // Mock API payment
  setTimeout(() => {
    projectStore.addDonation(projectId, Number(amount.value));
    isProcessing.value = false;
    showSuccess.value = true;
  }, 1500);
};
</script>

<template>
  <div class="pt-24 lg:pt-32 pb-20 bg-[#f8f6f5] min-h-screen">
    <div class="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Back Link -->
      <router-link :to="`/project/${projectId}`" class="inline-flex items-center gap-2 text-[#1a946b] font-bold text-[14px] hover:opacity-80 transition-opacity mb-8">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        {{ $t('donate.back') }}
      </router-link>

      <div v-if="project" class="grid lg:grid-cols-3 gap-8">
        
        <!-- Left: Checkout Form -->
        <div class="lg:col-span-2 space-y-6">
          <div class="bg-white rounded-[32px] p-8 lg:p-10 shadow-sm border border-gray-100">
            <h1 class="text-[28px] lg:text-[32px] font-black text-gray-900 mb-2">
              {{ $t('donate.title') }}
            </h1>
            <p class="text-[15px] text-gray-500 mb-8 font-medium">
              {{ $t('donate.subtitle') }}
            </p>

            <form @submit.prevent="handleDonate" class="space-y-10">
              
              <!-- Personal Info -->
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="don-name" class="block text-[14px] font-bold text-gray-900 mb-4 uppercase tracking-widest">{{ $t('login.label_name') }}</label>
                  <input 
                    id="don-name"
                    type="text" 
                    v-model="personalInfo.name"
                    required
                    class="w-full h-14 bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 text-gray-900 font-bold focus:bg-white focus:ring-4 focus:ring-[#1a946b]/10 focus:border-[#1a946b] outline-none transition-all"
                  />
                </div>
                <div>
                  <label for="don-email" class="block text-[14px] font-bold text-gray-900 mb-4 uppercase tracking-widest">{{ $t('login.label_email') }}</label>
                  <input 
                    id="don-email"
                    type="email" 
                    v-model="personalInfo.email"
                    required
                    class="w-full h-14 bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 text-gray-900 font-bold focus:bg-white focus:ring-4 focus:ring-[#1a946b]/10 focus:border-[#1a946b] outline-none transition-all"
                  />
                </div>
              </div>

              <!-- Amount Selection -->
              <div>
                <label for="don-amount" class="block text-[14px] font-bold text-gray-900 mb-4 uppercase tracking-widest">{{ $t('donate.amount_label') }}</label>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <button 
                    v-for="amt in [50000, 100000, 250000, 500000]" 
                    :key="amt"
                    type="button"
                    @click="amount = amt.toString(); selectedRewardId = null"
                    :class="amount === amt.toString() && !selectedRewardId ? 'bg-[#1a946b] text-white border-[#1a946b]' : 'bg-white text-gray-700 border-gray-200 hover:border-[#1a946b]/50'"
                    class="py-3.5 px-2 rounded-xl font-bold text-[14px] border-2 transition-all"
                  >
                    {{ formatCurrency(amt) }}
                  </button>
                </div>
                <div class="relative">
                  <input 
                    id="don-amount"
                    type="number" 
                    v-model="amount"
                    :placeholder="$t('donate.other_amount')"
                    min="1000"
                    required
                    class="w-full h-14 bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 text-gray-900 font-bold text-lg focus:bg-white focus:ring-4 focus:ring-[#1a946b]/10 focus:border-[#1a946b] outline-none transition-all"
                  />
                  <div class="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 font-bold">UZS</div>
                </div>
              </div>

              <!-- Payment Method -->
              <div>
                <label class="block text-[14px] font-bold text-gray-900 mb-4 uppercase tracking-widest">{{ $t('donate.method_label') }}</label>
                <div class="grid grid-cols-3 gap-4">
                  <label class="relative cursor-pointer group">
                    <input type="radio" v-model="paymentMethod" value="click" class="peer sr-only" />
                    <div class="h-20 border-2 border-gray-100 rounded-2xl flex items-center justify-center p-4 bg-white peer-checked:border-[#1a946b] peer-checked:bg-[#f0f9f6] transition-all group-hover:border-gray-200 shadow-sm">
                      <span class="font-black text-[20px] text-blue-500 tracking-tighter">CLICK</span>
                    </div>
                  </label>
                  <label class="relative cursor-pointer group">
                    <input type="radio" v-model="paymentMethod" value="payme" class="peer sr-only" />
                    <div class="h-20 border-2 border-gray-100 rounded-2xl flex items-center justify-center p-4 bg-white peer-checked:border-[#1a946b] peer-checked:bg-[#f0f9f6] transition-all group-hover:border-gray-200 shadow-sm">
                      <span class="font-black text-[20px] text-[#3ebdbb] tracking-tighter">Payme</span>
                    </div>
                  </label>
                  <label class="relative cursor-pointer group">
                    <input type="radio" v-model="paymentMethod" value="card" class="peer sr-only" />
                    <div class="h-20 border-2 border-gray-100 rounded-2xl flex items-center justify-center gap-3 p-4 bg-white peer-checked:border-[#1a946b] peer-checked:bg-[#f0f9f6] transition-all group-hover:border-gray-200 shadow-sm">
                      <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit" 
                :disabled="isProcessing || !amount"
                class="w-full py-5 bg-[#1a946b] text-white rounded-2xl font-black text-[17px] flex items-center justify-center gap-3 hover:bg-[#157a58] transition-all shadow-xl shadow-[#1a946b]/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isProcessing">{{ $t('donate.submit_btn', { amount: formatCurrency(Number(amount)) }) }}</span>
                <span v-else>{{ $t('donate.processing') }}</span>
                <div v-if="isProcessing" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </button>

              <p class="text-center text-[12px] text-gray-500 font-medium leading-relaxed">
                {{ $t('donate.footer_notice') }}
              </p>
            </form>
          </div>
        </div>

        <!-- Right: Rewards & Summary -->
        <div class="space-y-6">
          <!-- Project Mini Card -->
          <div class="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100">
             <div class="rounded-2xl overflow-hidden aspect-video mb-4">
                <img loading="lazy" :src="project.mainImage" class="w-full h-full object-cover" :alt="project.title" />
             </div>
             <h3 class="font-bold text-[16px] text-gray-900 leading-tight mb-2">{{ project.title }}</h3>
             <div class="flex items-center gap-2 text-gray-500 text-[13px] font-bold">
                <span>{{ project.donorsCount }} {{ $t('projects.donors') }}</span>
                <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>{{ Math.round((project.raised / project.goal) * 100) }}%</span>
             </div>
          </div>

          <!-- Rewards List -->
          <div class="space-y-4">
            <h3 class="text-[14px] font-bold text-gray-900 uppercase tracking-widest pl-2">{{ $t('donate.rewards.title') }}</h3>
            
            <button 
              type="button"
              @click="selectNoReward"
              :class="!selectedRewardId ? 'border-[#1a946b] bg-[#f0f9f6]' : 'border-gray-100 bg-white'"
              class="w-full text-left p-5 rounded-[24px] border-2 cursor-pointer transition-all hover:border-[#1a946b]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a946b] focus-visible:ring-offset-2"
            >
              <h4 class="font-bold text-[15px] text-gray-900">{{ $t('donate.rewards.no_reward') }}</h4>
            </button>

            <button 
              v-for="reward in project.rewards" 
              :key="reward.id"
              type="button"
              @click="selectReward(reward)"
              :class="selectedRewardId === reward.id ? 'border-[#1a946b] bg-[#f0f9f6]' : 'border-gray-100 bg-white'"
              class="w-full text-left p-5 rounded-[24px] border-2 cursor-pointer transition-all hover:border-[#1a946b]/30 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a946b] focus-visible:ring-offset-2"
            >
              <div class="flex justify-between items-start mb-2">
                <span class="text-[#1a946b] font-black text-[16px]">{{ formatCurrency(reward.minAmount) }} UZS</span>
              </div>
              <h4 class="font-bold text-[15px] text-gray-900 mb-2 group-hover:text-[#1a946b] transition-colors">{{ reward.title }}</h4>
              <p class="text-[13px] text-gray-500 leading-relaxed line-clamp-2">{{ reward.description }}</p>
            </button>
          </div>
        </div>

      </div>

      <!-- Success Modal -->
      <div v-if="showSuccess" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
        <div class="bg-white rounded-[40px] p-10 max-w-sm w-full text-center relative animate-fade-in-up">
          <div class="w-20 h-20 bg-[#f0f9f6] text-[#1a946b] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
          </div>
          <h3 class="text-[28px] font-black text-gray-900 mb-3">{{ $t('donate.success.title') }}</h3>
          <p class="text-[15px] font-medium text-gray-500 mb-8 leading-relaxed">
            {{ $t('donate.success.desc', { amount: formatCurrency(Number(amount)) }) }}
          </p>
          <router-link :to="`/project/${projectId}`" class="block w-full py-4 bg-[#1a946b] text-white rounded-2xl font-bold hover:bg-[#157a58] transition-all shadow-lg shadow-green-900/10">
            {{ $t('donate.success.back_btn') }}
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
