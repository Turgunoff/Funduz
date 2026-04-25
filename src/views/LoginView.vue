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
          <div class="text-white text-[40px] font-black tracking-tight flex flex-col items-center">
            FUNDUZ
            <div class="w-12 h-1 bg-[#f0fdf4]/30 mt-1 rounded-full"></div>
          </div>
        </div>
        
        <h1 class="text-[44px] lg:text-[56px] font-bold text-white leading-[1.1] mb-8 tracking-tight">
          {{ $t('login.hero_title') }}
        </h1>
        
        <p class="text-white/70 text-lg leading-relaxed mb-16">
          {{ $t('login.hero_subtitle') }}
        </p>

        <!-- Bottom Graphic Card -->
        <div class="bg-black/20 backdrop-blur-xl rounded-[40px] p-8 border border-white/10 shadow-2xl overflow-hidden relative group">
          <div class="h-48 flex items-center justify-center">
             <div class="relative">
                <div class="text-[20px] font-black text-white/40 tracking-[0.2em] mb-4">CROWDFUNDING</div>
                <div class="text-[14px] font-bold text-white/20 uppercase tracking-widest">Global hamjamiyat</div>
             </div>
          </div>
          <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>

    <!-- Right Side: Login Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-20 bg-gray-50 lg:bg-white">
      <div class="w-full max-w-[480px]">
        
        <!-- Mobile Logo -->
        <div class="lg:hidden text-center mb-8">
          <div class="text-[#1e5c43] text-3xl font-black tracking-tight">FUNDUZ</div>
        </div>

        <div class="text-center mb-10">
          <h2 class="text-[32px] font-bold text-gray-900 mb-3">{{ $t('login.title') }}</h2>
          <p class="text-gray-500 font-medium">{{ $t('login.subtitle') }}</p>
        </div>



        <!-- Main Form Card -->
        <div class="bg-white rounded-[40px] p-8 lg:p-10 shadow-xl shadow-gray-200/50 border border-gray-100">
          
          <!-- Social Login Buttons -->
          <div class="grid grid-cols-2 gap-4 mb-8">
            <button class="flex items-center justify-center gap-3 py-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all group">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-5 h-5" alt="Google">
              <span class="text-[14px] font-bold text-gray-700">{{ $t('login.social_google') }}</span>
            </button>
            <button class="flex items-center justify-center gap-3 py-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all">
              <svg class="w-5 h-5 text-[#24A1DE]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0C5.347 0 0 5.347 0 11.944c0 6.594 5.347 11.944 11.944 11.944 6.594 0 11.944-5.35 11.944-11.944C23.888 5.347 18.538 0 11.944 0zm5.54 8.017l-1.92 9.043c-.144.643-.523.801-.1.066l-2.924-2.155-1.41 1.358c-.156.156-.287.287-.588.287l.21-2.977 5.418-4.895c.235-.21-.052-.326-.364-.12l-6.696 4.215-2.883-.9c-.626-.196-.64-.626.13-.923l11.266-4.346c.523-.196.98.117.784.793z"/>
              </svg>
              <span class="text-[14px] font-bold text-gray-700">Telegram</span>
            </button>
          </div>

          <!-- Divider -->
          <div class="relative flex items-center justify-center mb-8">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-100"></div>
            </div>
            <span class="relative bg-white px-4 text-[11px] font-black text-gray-300 uppercase tracking-[0.2em]">{{ $t('login.or') }}</span>
          </div>

          <!-- Login/Register Form Items -->
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div v-if="errorMessage" class="p-4 bg-red-50 text-red-600 rounded-2xl text-[14px] font-bold text-center border border-red-100">
              {{ errorMessage }}
            </div>


            <div>
              <label class="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1">{{ $t('login.label_email') }}</label>
              <input 
                type="email" 
                v-model="email"
                placeholder="example@mail.com"
                class="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-[#1e5c43] focus:ring-4 focus:ring-green-500/5 outline-none transition-all font-medium"
                :class="{'border-red-400 bg-red-50/30': errors.email}"
              >
              <p v-if="errors.email" class="mt-2 ml-1 text-[12px] font-bold text-red-500 flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
                {{ errors.email }}
              </p>
            </div>

            <div>
              <div class="flex justify-between items-center mb-3 px-1">
                <label class="block text-[11px] font-black text-gray-400 uppercase tracking-widest">{{ $t('login.label_password') }}</label>
                <router-link to="/forgot-password" class="text-[11px] font-black text-[#1e5c43] hover:underline">{{ $t('login.forgot_password') }}</router-link>
              </div>
              <div class="relative">
                <input 
                  :type="showPassword ? 'text' : 'password'" 
                  v-model="password"
                  placeholder="••••••••"
                  class="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-[#1e5c43] focus:ring-4 focus:ring-green-500/5 outline-none transition-all font-medium"
                  :class="{'border-red-400 bg-red-50/30': errors.password}"
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
              <p v-if="errors.password" class="mt-2 ml-1 text-[12px] font-bold text-red-500 flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
                {{ errors.password }}
              </p>
            </div>

            <button :disabled="isLoading" class="w-full py-5 bg-white text-[#1a946b] border-2 border-[#1a946b] rounded-3xl font-black flex items-center justify-center gap-3 hover:bg-[#1a946b] hover:text-white hover:translate-y-[-4px] transition-all shadow-xl shadow-[#1a946b]/20 disabled:opacity-70 disabled:hover:translate-y-0 text-lg">
              <span v-if="!isLoading">{{ $t('login.btn_submit') || 'Войти' }}</span>
              <span v-else>Yuklanmoqda...</span>
              <svg v-if="!isLoading" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              <div v-else class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </button>
            
            <div class="mt-6 text-center text-[14px] font-medium text-gray-500">
              Нет аккаунта? 
              <router-link to="/register" class="text-[#1e5c43] font-bold hover:underline">Зарегистрироваться</router-link>
            </div>
          </form>
        </div>

        <!-- Extra Info Footer -->
        <p class="mt-8 text-center text-[12px] text-gray-400 leading-relaxed px-4">
          {{ $t('login.footer_text_start') }}
          <a href="#" class="font-bold text-gray-500 hover:text-[#1e5c43]">Foydalanish shartlari</a>
          {{ $t('login.footer_text_and') }}
          <a href="#" class="font-bold text-gray-500 hover:text-[#1e5c43]">Maxfiylik siyosati</a>
          {{ $t('login.footer_text_end') }}
        </p>

        <!-- Help Links -->
        <div class="mt-12 flex justify-center gap-8">
           <a href="#" class="flex items-center gap-2 text-[12px] font-bold text-gray-400 hover:text-gray-900 transition-colors">
             <div class="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
             Yordam markazi
           </a>
           <a href="#" class="flex items-center gap-2 text-[12px] font-bold text-gray-400 hover:text-gray-900 transition-colors">
             <div class="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
             Xavfsiz to'lovlar
           </a>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const { locale } = useI18n()
const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const showPassword = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')

const email = ref('')
const password = ref('')
const errors = ref({
  email: '',
  password: ''
})

const setLocale = (lang: string) => {
  locale.value = lang
}

const validate = () => {
  let isValid = true
  errors.value = { email: '', password: '' }

  if (!email.value) {
    errors.value.email = 'Email manzilini kiriting'
    isValid = false
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    errors.value.email = 'Email formati noto\'g\'ri'
    isValid = false
  }

  if (!password.value) {
    errors.value.password = 'Parolni kiriting'
    isValid = false
  } else if (password.value.length < 6) {
    errors.value.password = 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  errorMessage.value = ''
  
  if (!validate()) return

  isLoading.value = true
  const success = await authStore.login(email.value, password.value)
  
  isLoading.value = false
  
  if (success) {
    const redirectPath = route.query.redirect as string || '/'
    router.push(redirectPath)
  } else {
    errorMessage.value = 'Xato login yoki parol.'
  }
}
</script>

<style scoped>
/* Perfect alignment and spacing */
input::placeholder {
  color: #d1d5db;
  font-weight: 500;
}
</style>
