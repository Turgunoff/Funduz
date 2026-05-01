<template>
  <div class="min-h-screen flex flex-col lg:flex-row bg-white">
    
    <!-- Left Side: Branding & Info -->
    <div class="hidden lg:flex lg:w-1/2 bg-[#1e5c43] relative overflow-hidden flex-col items-center justify-center p-12 text-center">
      <!-- Language Switcher at the top -->
      <div class="absolute top-8 left-12 z-20 flex items-center gap-4 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10">
        <button @click="setLocale('uz')" :class="locale === 'uz' ? 'text-white' : 'text-white/40'" class="text-[13px] font-black uppercase transition-colors">Uz</button>
        <div class="w-[1px] h-3 bg-white/20"></div>
        <button @click="setLocale('ru')" :class="locale === 'ru' ? 'text-white' : 'text-white/40'" class="text-[13px] font-black uppercase transition-colors">Ru</button>
      </div>

      <!-- Grid Pattern -->
      <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 40px 40px;"></div>
      
      <div class="relative z-10 max-w-lg">
        <div class="mb-12">
          <router-link to="/">
            <div class="text-white text-[40px] font-black tracking-tight flex flex-col items-center hover:opacity-90 transition-opacity">
              FUNDUZ
              <div class="w-12 h-1 bg-[#f0fdf4]/30 mt-1 rounded-full"></div>
            </div>
          </router-link>
        </div>
        
        <h1 class="text-[44px] lg:text-[56px] font-bold text-white leading-[1.1] mb-8 tracking-tight">
          Восстановление доступа
        </h1>
        
        <p class="text-white/70 text-lg leading-relaxed mb-16">
          Забыли пароль? Не беда. Введите ваш email, и мы отправим вам инструкции по сбросу.
        </p>

        <!-- Bottom Graphic Card -->
        <div class="bg-black/20 backdrop-blur-xl rounded-[40px] p-8 border border-white/10 shadow-2xl overflow-hidden relative group">
          <div class="h-48 flex items-center justify-center">
             <div class="relative">
                <div class="text-[20px] font-black text-white/40 tracking-[0.2em] mb-4">SECURITY</div>
                <div class="text-[14px] font-bold text-white/20 uppercase tracking-widest">Shaxsiy hisob himoyasi</div>
             </div>
          </div>
          <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>

    <!-- Right Side: Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-20 bg-gray-50 lg:bg-white relative">
      <div class="w-full max-w-[480px]">
        
        <!-- Mobile Logo -->
        <div class="lg:hidden text-center mb-8">
          <router-link to="/" class="text-[#1e5c43] text-3xl font-black tracking-tight">FUNDUZ</router-link>
        </div>

        <router-link to="/login" class="inline-flex items-center gap-2 text-[14px] font-bold text-[#1e5c43] hover:opacity-80 transition-opacity mb-10">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Назад ко входу
        </router-link>

        <div class="text-left mb-10">
          <h2 class="text-[32px] font-bold text-gray-900 mb-3">Забыли пароль?</h2>
          <p class="text-gray-500 font-medium">Введите свой E-mail, и мы отправим на него письмо со ссылкой для восстановления пароля.</p>
        </div>

        <!-- Main Form Card -->
        <div class="bg-white rounded-[40px] p-8 lg:p-10 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
          
          <div v-if="success" class="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center px-10">
            <div class="w-16 h-16 bg-[#f0f9f6] text-[#1e5c43] rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 class="text-[24px] font-bold text-gray-900 mb-3">Письмо отправлено</h3>
            <p class="text-[15px] font-medium text-gray-500 mb-8">
              Мы отправили инструкции по восстановлению на <b>{{ email }}</b>
            </p>
            <router-link to="/login" class="w-full py-4 bg-gray-100 text-gray-900 rounded-2xl font-black hover:bg-gray-200 transition-all mb-4">
              Вернуться ко входу
            </router-link>
            <!-- Dev only link to test reset flow -->
            <router-link to="/reset-password" class="text-[12px] font-bold text-[#1e5c43] hover:underline opacity-60">
              (Для теста: Перейти к сбросу пароля)
            </router-link>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6 relative z-0">
            <div>
              <label for="forgot-email" class="block text-[11px] font-black text-gray-500 uppercase tracking-widest mb-3 ml-1">{{ $t('login.label_email') || 'E-mail' }}</label>
              <input 
                id="forgot-email"
                type="email" 
                v-model="email"
                placeholder="example@mail.com"
                class="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-[#1e5c43] focus:ring-4 focus:ring-green-500/5 outline-none transition-all font-medium"
                required
              >
            </div>

            <button :disabled="isLoading" class="w-full py-5 bg-white text-[#1a946b] border-2 border-[#1a946b] rounded-3xl font-black flex items-center justify-center gap-3 hover:bg-[#1a946b] hover:text-white hover:translate-y-[-4px] transition-all shadow-xl shadow-[#1a946b]/20 disabled:opacity-70 disabled:hover:translate-y-0">
              <span v-if="!isLoading">Отправить ссылку</span>
              <span v-else>Отправка...</span>
              <svg v-if="!isLoading" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              <div v-else class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </button>
          </form>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const email = ref('')
const isLoading = ref(false)
const success = ref(false)

const setLocale = (lang: string) => {
  locale.value = lang
}

const handleSubmit = () => {
  isLoading.value = true
  // Mock API call
  setTimeout(() => {
    isLoading.value = false
    success.value = true
  }, 1000)
}
</script>

<style scoped>
input::placeholder {
  color: #d1d5db;
  font-weight: 500;
}
</style>
