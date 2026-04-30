<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const submitted = ref(false);

const handleSubmit = () => {
  submitted.value = true;
  setTimeout(() => {
    submitted.value = false;
  }, 5000);
};
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Navbar Spacer -->
    <div class="h-20 sm:h-24"></div>

    <div class="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 lg:py-16">
      <!-- Header Section -->
      <div class="mb-12 lg:mb-16">
        <h1 class="text-[48px] sm:text-[64px] font-bold text-black leading-tight tracking-[-0.04em] mb-4">
          {{ t('contact.title') }}
        </h1>
        <p class="text-[16px] sm:text-[18px] text-gray-500 max-w-[600px] leading-relaxed font-medium">
          {{ t('contact.subtitle') }}
        </p>
      </div>

      <!-- Main Interaction Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        <!-- Left Column: Contact Form -->
        <div class="lg:col-span-7 bg-white rounded-[32px] p-8 lg:p-12 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.06)] border border-gray-50">
          <h2 class="text-[24px] font-bold text-gray-900 mb-10">{{ t('contact.form.title') }}</h2>
          
          <!-- Success Banner -->
          <transition 
            enter-active-class="transition duration-300 ease-out" 
            enter-from-class="transform -translate-y-4 opacity-0" 
            enter-to-class="transform translate-y-0 opacity-100" 
            leave-active-class="transition duration-200 ease-in" 
            leave-from-class="transform translate-y-0 opacity-100" 
            leave-to-class="transform -translate-y-4 opacity-0"
          >
            <div v-if="submitted" class="mb-8 bg-[#f0fdf4] border border-[#dcfce7] rounded-2xl p-5 flex items-center gap-4 shadow-sm">
              <div class="w-10 h-10 rounded-full bg-[#1a946b] flex items-center justify-center flex-shrink-0 text-white">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-[#14532d] text-[15px] font-bold leading-snug">
                {{ t('contact.form.success') }}
              </p>
            </div>
          </transition>

          <form @submit.prevent="handleSubmit" class="space-y-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- Full Name Field -->
              <div class="space-y-3">
                <label for="help-name" class="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">{{ t('contact.form.name') }}</label>
                <input 
                  id="help-name"
                  type="text" 
                  placeholder="John Doe"
                  class="w-full h-[56px] px-6 bg-[#f3f4f6] border-none rounded-2xl text-[15px] focus:ring-2 focus:ring-[#0b422a] outline-none transition-all placeholder:text-gray-400 font-medium"
                >
              </div>
              <!-- Email Address Field -->
              <div class="space-y-3">
                <label for="help-email" class="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">{{ t('contact.form.email') }}</label>
                <input 
                  id="help-email"
                  type="email" 
                  placeholder="john@example.com"
                  class="w-full h-[56px] px-6 bg-[#f3f4f6] border-none rounded-2xl text-[15px] focus:ring-2 focus:ring-[#0b422a] outline-none transition-all placeholder:text-gray-400 font-medium"
                >
              </div>
            </div>

            <!-- Subject Selection -->
            <div class="space-y-3">
              <label class="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">{{ t('contact.form.subject') }}</label>
              <div class="relative">
                <select 
                  class="w-full h-[56px] px-6 bg-[#f3f4f6] border-none rounded-2xl text-[15px] focus:ring-2 focus:ring-[#0b422a] outline-none transition-all appearance-none cursor-pointer font-medium"
                >
                  <option>{{ t('contact.form.subjects.general') }}</option>
                  <option>{{ t('contact.form.subjects.support') }}</option>
                  <option>{{ t('contact.form.subjects.partnership') }}</option>
                  <option>{{ t('contact.form.subjects.legal') }}</option>
                </select>
                <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <!-- Message Textarea -->
            <div class="space-y-3">
              <label for="help-message" class="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">{{ t('contact.form.message') }}</label>
              <textarea 
                id="help-message"
                rows="6"
                placeholder="..."
                class="w-full p-6 bg-[#f3f4f6] border-none rounded-2xl text-[15px] focus:ring-2 focus:ring-[#0b422a] outline-none transition-all resize-none placeholder:text-gray-400 font-medium"
              ></textarea>
            </div>

            <!-- Policy & Submit -->
            <div class="space-y-6">
              <label for="help-policy" class="flex items-center gap-3 cursor-pointer group">
                <input id="help-policy" type="checkbox" class="w-5 h-5 rounded border-gray-200 text-[#0b422a] focus:ring-[#0b422a]">
                <span class="text-[13px] text-gray-500 font-medium">{{ t('contact.form.extra.agree_policy') }} <router-link to="/privacy" class="text-[#1a946b] underline hover:text-[#0b422a]">{{ t('contact.form.extra.privacy_policy') }}</router-link></span>
              </label>

              <button 
                type="submit" 
                class="w-full py-5 border-2 border-[#1a946b] rounded-[20px] font-bold text-[16px] text-[#1a946b] bg-white hover:bg-[#1a946b] hover:text-white transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-green-900/10"
              >
                {{ t('contact.form.send') }}
              </button>
            </div>
          </form>
        </div>

        <!-- Right Column: Contact Cards -->
        <div class="lg:col-span-5 space-y-4">
          <!-- Email -->
          <div class="bg-[#f9fafb] rounded-[24px] p-6 flex items-center gap-5 group hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-300 border border-transparent hover:border-gray-100">
            <div class="w-12 h-12 shrink-0 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#1a946b]">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
            </div>
            <div>
              <div class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{{ t('contact.info.email_label') }}</div>
              <div class="text-[16px] font-bold text-gray-900">{{ t('contact.info.email_val') }}</div>
            </div>
          </div>

          <!-- Phone -->
          <div class="bg-[#f9fafb] rounded-[24px] p-6 flex items-center gap-5 group hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-300 border border-transparent hover:border-gray-100">
            <div class="w-12 h-12 shrink-0 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#1a946b]">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 004.87 4.87l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-1C7.82 18 2 12.18 2 5V3z" /></svg>
            </div>
            <div>
              <div class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{{ t('contact.info.phone_label') }}</div>
              <div class="text-[16px] font-bold text-gray-900">{{ t('contact.info.phone_val') }}</div>
            </div>
          </div>

          <!-- Office -->
          <div class="bg-[#f9fafb] rounded-[24px] p-6 flex items-center gap-5 group hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-300 border border-transparent hover:border-gray-100">
            <div class="w-12 h-12 shrink-0 rounded-full bg-[#ffedd5] flex items-center justify-center text-[#9a3412]">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" /></svg>
            </div>
            <div>
              <div class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{{ t('contact.info.address_label') }}</div>
              <div class="text-[16px] font-bold text-gray-900">{{ t('contact.info.address_val') }}</div>
            </div>
          </div>

          <!-- Telegram -->
          <div class="bg-[#f9fafb] rounded-[24px] p-6 flex items-center gap-5 group hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-300 border border-transparent hover:border-gray-100">
            <div class="w-12 h-12 shrink-0 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#1a946b]">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
            </div>
            <div>
              <div class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{{ t('contact.form.extra.telegram_label') }}</div>
              <div class="text-[16px] font-bold text-gray-900">{{ t('contact.form.extra.telegram_val') }}</div>
            </div>
          </div>

          <!-- Social Connect -->
          <div class="pt-10 flex items-center justify-between">
            <span class="text-[13px] font-bold text-gray-900 uppercase tracking-widest">{{ t('contact.form.extra.connect_with_us') }}</span>
            <div class="flex gap-3">
              <a href="#" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0b422a] hover:text-white transition-all duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0b422a] hover:text-white transition-all duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.849 0 3.205-.012 3.584-.069 4.849-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.241 1.247-3.608 1.31-1.265.057-1.645.07-4.849.07-3.205 0-3.584-.012-4.849-.07-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.849 0-3.204.012-3.584.068-4.849.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-4.717 2.232-4.717 6.075 0 3.205.012 3.584.069 4.849.191 4.218 2.087 4.602 6.075 4.602 3.205 0 3.584-.012 4.849-.069 4.218-.191 4.602-2.087 4.602-6.075 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.217-4.717-6.075-4.717zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0b422a] hover:text-white transition-all duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Answers / FAQ CTA Section -->
      <div class="mt-20 lg:mt-32">
        <div class="bg-[#1a946b] rounded-[48px] p-10 lg:p-14 flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden group shadow-2xl shadow-green-900/10">
          <!-- Decoration Circles -->
          <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div class="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

          <div class="flex items-center gap-6 relative z-10">
            <div class="w-16 h-16 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/20">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <h3 class="text-[22px] sm:text-[24px] font-bold text-white mb-2 leading-tight tracking-tight">{{ t('contact.form.extra.quick_answers') }}</h3>
              <p class="text-[15px] lg:text-[17px] text-white/70 font-medium">{{ t('contact.form.extra.quick_answers_desc') }}</p>
            </div>
          </div>
          <router-link 
            to="/faq" 
            class="relative z-10 px-10 py-5 bg-[#0d5c42] text-white font-bold rounded-2xl text-[16px] border-2 border-transparent hover:border-white hover:bg-white hover:text-[#0d5c42] transition-all duration-300 shadow-xl shadow-black/10 transform hover:-translate-y-1 active:scale-95 whitespace-nowrap"
          >
            {{ t('contact.form.extra.visit_faq') }}
          </router-link>
        </div>
      </div>

      <!-- Map Display Section -->
      <div class="mt-10 mb-10">
        <div class="relative w-full aspect-[21/9] sm:aspect-[3/1] rounded-[32px] overflow-hidden bg-[#e2e8f0] border border-gray-100 shadow-xl">
          <!-- Stylized Map Background -->
          <div class="absolute inset-0 opacity-20 pointer-events-none">
            <svg class="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
              <path d="M0 50 L800 50 M0 150 L800 150 M0 250 L800 250 M0 350 L800 350 M100 0 L100 400 M300 0 L300 400 M500 0 L500 400 M700 0 L700 400" stroke="#94a3b8" stroke-width="1" />
            </svg>
          </div>

          <!-- HQ Location Marker -->
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-[#0b422a] flex items-center justify-center shadow-2xl animate-bounce-slow">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" /></svg>
            </div>
            <div class="px-6 py-2 bg-white rounded-full shadow-xl shadow-black/10 border border-gray-50 transition-transform hover:scale-105">
              <span class="text-[13px] font-black text-gray-900 tracking-tight whitespace-nowrap">{{ t('contact.form.extra.hq') }}</span>
            </div>
          </div>

          <!-- Interface Controls -->
          <div class="absolute bottom-8 right-8 flex flex-col gap-2">
            <button class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 shadow-lg hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" /></svg>
            </button>
            <button class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 shadow-lg hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M20 12H4" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');

.min-h-screen {
  font-family: 'Outfit', sans-serif;
}

h1 {
  letter-spacing: -0.04em;
}

input::placeholder, textarea::placeholder {
  font-weight: 500;
  color: #9ca3af;
}

select {
  background-image: none;
}

/* Custom Checkbox Styling */
input[type="checkbox"] {
  accent-color: #0b422a;
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-bounce-slow {
  animation: bounce-slow 2s infinite ease-in-out;
}
</style>
