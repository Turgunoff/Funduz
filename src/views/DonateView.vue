<template>
  <div class="pt-24 lg:pt-32 pb-20 bg-[#f8f6f5] min-h-screen">
    <div class="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Back Link -->
      <router-link :to="`/project/${route.params.projectId}`" class="inline-flex items-center gap-2 text-[#1a946b] font-bold text-[14px] hover:opacity-80 transition-opacity mb-8">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Вернуться к проекту
      </router-link>

      <div v-if="project" class="bg-white rounded-[32px] p-8 lg:p-12 shadow-sm border border-gray-100 mb-10 overflow-hidden relative">
        <div class="absolute top-0 right-0 w-64 h-64 bg-[#1a946b]/5 rounded-bl-[100px] pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-32 h-32 bg-[#1a946b]/5 rounded-tr-[80px] pointer-events-none"></div>
        
        <div class="flex flex-col lg:flex-row gap-10 items-start relative z-10">
          
          <!-- Project Summary -->
          <div class="w-full lg:w-1/3 flex-shrink-0">
            <div class="rounded-2xl overflow-hidden aspect-[4/3] mb-5 shadow-sm border border-gray-100">
              <img :src="project.mainImage" :alt="project.title" class="w-full h-full object-cover" />
            </div>
            <h3 class="font-bold text-[18px] text-gray-900 leading-tight mb-2">{{ project.title }}</h3>
            <p class="text-[13px] text-gray-500 line-clamp-2">{{ project.description }}</p>
          </div>

          <!-- Checkout Flow -->
          <div class="w-full lg:w-2/3 flex-grow">
            <h1 class="text-[28px] lg:text-[36px] font-black text-gray-900 mb-2">
              Поддержка проекта
            </h1>
            <p class="text-[15px] text-gray-500 mb-10">
              Ваш вклад поможет проекту быстрее достичь цели.
            </p>

            <form @submit.prevent="handleDonate" class="space-y-10">
              
              <!-- Amount Selection -->
              <div>
                <label class="block text-[14px] font-bold text-gray-900 mb-4 uppercase tracking-widest pl-1">Сумма поддержки (UZS)</label>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <button 
                    v-for="amt in [50000, 100000, 200000, 500000]" 
                    :key="amt"
                    type="button"
                    @click="amount = amt.toString()"
                    :class="amount === amt.toString() ? 'bg-[#1a946b] text-white border-[#1a946b]' : 'bg-white text-gray-700 border-gray-200 hover:border-[#1a946b]/50'"
                    class="py-3 px-2 rounded-xl font-bold text-[14px] border-2 transition-all"
                  >
                    {{ formatCurrency(amt) }}
                  </button>
                </div>
                <div class="relative">
                  <input 
                    type="number" 
                    v-model="amount"
                    placeholder="Другая сумма"
                    min="1000"
                    required
                    class="w-full h-14 bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 text-gray-900 font-bold text-lg focus:bg-white focus:ring-4 focus:ring-[#1a946b]/10 focus:border-[#1a946b] outline-none transition-all"
                  />
                  <div class="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 font-bold">UZS</div>
                </div>
              </div>

              <!-- Payment Method -->
              <div>
                <label class="block text-[14px] font-bold text-gray-900 mb-4 uppercase tracking-widest pl-1">Способ оплаты</label>
                <div class="grid grid-cols-2 gap-4">
                  <label class="relative cursor-pointer group">
                    <input type="radio" v-model="paymentMethod" value="click" class="peer sr-only" />
                    <div class="h-20 border-2 border-gray-100 rounded-2xl flex items-center justify-center p-4 bg-white peer-checked:border-[#1a946b] peer-checked:bg-[#f0f9f6] transition-all group-hover:border-gray-200">
                      <span class="font-black text-[20px] text-blue-500 tracking-tighter">CLICK</span>
                    </div>
                  </label>
                  <label class="relative cursor-pointer group">
                    <input type="radio" v-model="paymentMethod" value="payme" class="peer sr-only" />
                    <div class="h-20 border-2 border-gray-100 rounded-2xl flex items-center justify-center p-4 bg-white peer-checked:border-[#1a946b] peer-checked:bg-[#f0f9f6] transition-all group-hover:border-gray-200">
                      <span class="font-black text-[20px] text-[#3ebdbb] tracking-tighter">Payme</span>
                    </div>
                  </label>
                  <label class="relative cursor-pointer group">
                    <input type="radio" v-model="paymentMethod" value="card" class="peer sr-only" />
                    <div class="h-20 border-2 border-gray-100 rounded-2xl flex items-center justify-center gap-3 p-4 bg-white peer-checked:border-[#1a946b] peer-checked:bg-[#f0f9f6] transition-all group-hover:border-gray-200">
                      <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                      <span class="font-bold text-[14px] text-gray-700">Bank Card</span>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit" 
                :disabled="isProcessing || !amount"
                class="w-full py-5 bg-[#1a946b] text-white rounded-2xl font-black text-[16px] flex items-center justify-center gap-3 hover:bg-[#157a58] transition-all shadow-xl shadow-[#1a946b]/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isProcessing">Поддержать на {{ amount ? formatCurrency(Number(amount)) : '0' }} UZS</span>
                <span v-else>Обработка...</span>
                <div v-if="isProcessing" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </button>

              <p class="text-center text-[12px] text-gray-400 font-medium">
                Нажимая на кнопку, вы соглашаетесь с условиями пользовательского соглашения и политикой возврата средств.
              </p>
            </form>
          </div>
        </div>

      </div>

      <!-- Not Found State -->
      <div v-else class="bg-white rounded-[32px] p-12 text-center shadow-sm">
        <h2 class="text-2xl font-bold mb-4">Проект не найден</h2>
        <router-link to="/dashboard" class="text-[#1a946b] font-bold hover:underline">Вернуться к списку проектов</router-link>
      </div>

      <!-- Success Modal Overlay -->
      <div v-if="showSuccess" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-[40px] p-10 max-w-sm w-full text-center relative animate-fade-in-up">
          <div class="w-20 h-20 bg-[#f0f9f6] text-[#1a946b] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
          </div>
          <h3 class="text-[28px] font-black text-gray-900 mb-3">Спасибо!</h3>
          <p class="text-[15px] font-medium text-gray-500 mb-8 leading-relaxed">
            Ваш вклад в размере <b class="text-gray-900">{{ formatCurrency(Number(amount)) }} UZS</b> успешно переведен. Вместе мы делаем великие дела!
          </p>
          <router-link :to="`/project/${route.params.projectId}`" class="block w-full py-4 bg-[#1a946b] text-white rounded-2xl font-bold hover:bg-[#157a58] transition-all">
            Вернуться к проекту
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProjectStore } from '../stores/projects';

const route = useRoute();
const projectStore = useProjectStore();

const projectIdStr = route.params.projectId as string;
const projectId = parseInt(projectIdStr);

const project = computed(() => {
  return projectStore.allItems.find(p => p.id === projectId) || projectStore.allItems[0];
});

const amount = ref('50000');
const paymentMethod = ref('click');
const isProcessing = ref(false);
const showSuccess = ref(false);

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('uz-UZ').format(val);
};

const handleDonate = () => {
  isProcessing.value = true;
  // Mock API payment
  setTimeout(() => {
    isProcessing.value = false;
    showSuccess.value = true;
  }, 1500);
};
</script>

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

/* Hide number input spinners */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
