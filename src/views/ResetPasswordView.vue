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
          Обновление пароля
        </h1>
        
        <p class="text-white/70 text-lg leading-relaxed mb-16">
          Создайте новый надежный пароль для вашей учетной записи, состоящий как минимум из 8 символов.
        </p>

        <!-- Bottom Graphic Card -->
        <div class="bg-black/20 backdrop-blur-xl rounded-[40px] p-8 border border-white/10 shadow-2xl overflow-hidden relative group">
          <div class="h-48 flex items-center justify-center">
             <div class="relative">
                <div class="text-[20px] font-black text-white/40 tracking-[0.2em] mb-4">RECOVERY</div>
                <div class="text-[14px] font-bold text-white/20 uppercase tracking-widest">Yangi parol</div>
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

        <div class="text-left mb-10">
          <h2 class="text-[32px] font-bold text-gray-900 mb-3">Придумайте пароль</h2>
          <p class="text-gray-500 font-medium">Пожалуйста, введите и подтвердите новый пароль.</p>
        </div>

        <!-- Main Form Card -->
        <div class="bg-white rounded-[40px] p-8 lg:p-10 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
          
          <div v-if="success" class="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center px-10">
            <div class="w-16 h-16 bg-[#f0f9f6] text-[#1e5c43] rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 class="text-[24px] font-bold text-gray-900 mb-3">Пароль обновлен!</h3>
            <p class="text-[15px] font-medium text-gray-500 mb-8">
              Ваш пароль был успешно изменен. Теперь вы можете войти в свой аккаунт.
            </p>
            <router-link to="/login" class="w-full py-4 bg-[#1e5c43] text-white rounded-2xl font-black hover:bg-[#144230] transition-all flex items-center justify-center">
              Войти в аккаунт
            </router-link>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6 relative z-0">
            <div>
              <label class="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1">Новый пароль</label>
              <div class="relative">
                <input 
                  :type="showPassword ? 'text' : 'password'" 
                  v-model="password"
                  placeholder="••••••••"
                  class="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-[#1e5c43] focus:ring-4 focus:ring-green-500/5 outline-none transition-all font-medium"
                  required
                >
                <button 
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900"
                >
                  <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7 1.274-4.057 5.064-7 9.542-7 1.274 0 2.457.228 3.558.641M9 9l6 6M21 21L3 3" /></svg>
                </button>
              </div>
            </div>

            <div>
              <label class="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1">Подтвердите пароль</label>
              <div class="relative">
                <input 
                  :type="showPasswordConfirm ? 'text' : 'password'" 
                  v-model="passwordConfirm"
                  placeholder="••••••••"
                  class="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-[#1e5c43] focus:ring-4 focus:ring-green-500/5 outline-none transition-all font-medium"
                  required
                >
                <button 
                  type="button"
                  @click="showPasswordConfirm = !showPasswordConfirm"
                  class="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900"
                >
                  <svg v-if="!showPasswordConfirm" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7 1.274-4.057 5.064-7 9.542-7 1.274 0 2.457.228 3.558.641M9 9l6 6M21 21L3 3" /></svg>
                </button>
              </div>
              <p v-if="errorMsg" class="text-red-500 text-[12px] font-bold mt-2 ml-2">{{ errorMsg }}</p>
            </div>

            <button :disabled="isLoading" class="w-full py-5 bg-white text-[#1a946b] border-2 border-[#1a946b] rounded-3xl font-black flex items-center justify-center gap-3 hover:bg-[#1a946b] hover:text-white hover:translate-y-[-4px] transition-all shadow-xl shadow-[#1a946b]/20 disabled:opacity-70 disabled:hover:translate-y-0">
              <span v-if="!isLoading">Сохранить новый пароль</span>
              <span v-else>Сохранение...</span>
              <svg v-if="!isLoading" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
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

const password = ref('')
const passwordConfirm = ref('')
const showPassword = ref(false)
const showPasswordConfirm = ref(false)
const isLoading = ref(false)
const success = ref(false)
const errorMsg = ref('')

const setLocale = (lang: string) => {
  locale.value = lang
}

const handleSubmit = () => {
  errorMsg.value = ''
  
  if (password.value !== passwordConfirm.value) {
    errorMsg.value = 'Пароли не совпадают!'
    return
  }

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
