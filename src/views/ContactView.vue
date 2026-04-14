<template>
  <div class="min-h-screen bg-white">
    <!-- Navbar Spacer -->
    <div class="h-20"></div>

    <!-- Hero Section -->
    <div class="relative py-20 lg:py-32 overflow-hidden">
      <!-- Ambient Background Elements -->
      <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-green-50 rounded-full blur-[120px] opacity-60"></div>
      <div class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] opacity-60"></div>

      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-[800px] mx-auto text-center mb-20 lg:mb-24">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-[#1a946b] text-[13px] font-bold tracking-wider uppercase mb-6 animate-fade-in-down">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
            {{ t('contact.badge') }}
          </div>
          <h1 class="text-[40px] sm:text-[56px] lg:text-[72px] font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
            {{ t('contact.title') }}
          </h1>
          <p class="text-gray-500 text-[18px] lg:text-[20px] leading-relaxed max-w-[600px] mx-auto">
            {{ t('contact.form.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <!-- Left Side: Contact Info -->
          <div class="lg:col-span-5 space-y-10">
            <div>
              <h2 class="text-[28px] font-bold text-gray-900 mb-8">{{ t('contact.info.title') }}</h2>
              <div class="space-y-6">
                <!-- Email -->
                <div class="flex gap-6 group">
                  <div class="w-14 h-14 shrink-0 rounded-2xl bg-[#fafaf9] border border-gray-100 flex items-center justify-center text-[#1a946b] group-hover:bg-[#1a946b] group-hover:text-white transition-all duration-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div class="text-[13px] font-bold text-gray-400 uppercase tracking-widest mb-1">{{ t('contact.info.email_label') }}</div>
                    <a :href="'mailto:' + t('contact.info.email_val')" class="text-[18px] font-bold text-gray-900 hover:text-[#1a946b] transition-colors">{{ t('contact.info.email_val') }}</a>
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex gap-6 group">
                  <div class="w-14 h-14 shrink-0 rounded-2xl bg-[#fafaf9] border border-gray-100 flex items-center justify-center text-[#1a946b] group-hover:bg-[#1a946b] group-hover:text-white transition-all duration-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <div class="text-[13px] font-bold text-gray-400 uppercase tracking-widest mb-1">{{ t('contact.info.phone_label') }}</div>
                    <a :href="'tel:' + t('contact.info.phone_val')" class="text-[18px] font-bold text-gray-900 hover:text-[#1a946b] transition-colors">{{ t('contact.info.phone_val') }}</a>
                  </div>
                </div>

                <!-- Address -->
                <div class="flex gap-6 group">
                  <div class="w-14 h-14 shrink-0 rounded-2xl bg-[#fafaf9] border border-gray-100 flex items-center justify-center text-[#1a946b] group-hover:bg-[#1a946b] group-hover:text-white transition-all duration-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <div class="text-[13px] font-bold text-gray-400 uppercase tracking-widest mb-1">{{ t('contact.info.address_label') }}</div>
                    <div class="text-[18px] font-bold text-gray-900 leading-tight">{{ t('contact.info.address_val') }}</div>
                    <div class="mt-2 text-[14px] text-gray-500 font-medium">{{ t('contact.info.hours_val') }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Map Placeholder -->
            <div class="relative w-full aspect-[16/9] rounded-[32px] overflow-hidden border border-gray-100 shadow-2xl shadow-black/5 bg-gray-50 group">
               <div class="absolute inset-0 bg-[#f1f5f9] flex items-center justify-center">
                  <div class="text-center group-hover:scale-105 transition-transform duration-500">
                    <div class="text-4xl mb-4">📍</div>
                    <div class="text-[14px] font-bold text-gray-400 uppercase tracking-widest">Tashkent, Uzbekistan</div>
                  </div>
               </div>
               <!-- Real map would go here -->
               <div class="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <!-- Right Side: Contact Form -->
          <div class="lg:col-span-7 relative">
            <div class="bg-white rounded-[40px] p-8 lg:p-12 border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] relative z-10">
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <!-- Name -->
                  <div class="space-y-2">
                    <label class="text-[14px] font-bold text-gray-900 ml-1">{{ t('contact.form.name') }}</label>
                    <input 
                      type="text" 
                      required
                      class="w-full h-14 px-6 bg-[#fafaf9] border border-gray-100 rounded-2xl text-[16px] focus:bg-white focus:border-[#1a946b] focus:ring-4 focus:ring-[#1a946b]/5 outline-none transition-all"
                      :placeholder="t('contact.form.name')"
                    >
                  </div>
                  <!-- Email -->
                  <div class="space-y-2">
                    <label class="text-[14px] font-bold text-gray-900 ml-1">{{ t('contact.form.email') }}</label>
                    <input 
                      type="email" 
                      required
                      class="w-full h-14 px-6 bg-[#fafaf9] border border-gray-100 rounded-2xl text-[16px] focus:bg-white focus:border-[#1a946b] focus:ring-4 focus:ring-[#1a946b]/5 outline-none transition-all"
                      :placeholder="t('contact.form.email')"
                    >
                  </div>
                </div>

                <!-- Subject -->
                <div class="space-y-2">
                  <label class="text-[14px] font-bold text-gray-900 ml-1">{{ t('contact.form.subject') }}</label>
                  <select 
                    class="w-full h-14 px-6 bg-[#fafaf9] border border-gray-100 rounded-2xl text-[16px] focus:bg-white focus:border-[#1a946b] outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="general">{{ t('contact.form.subjects.general') }}</option>
                    <option value="support">{{ t('contact.form.subjects.support') }}</option>
                    <option value="partnership">{{ t('contact.form.subjects.partnership') }}</option>
                    <option value="legal">{{ t('contact.form.subjects.legal') }}</option>
                  </select>
                </div>

                <!-- Message -->
                <div class="space-y-2">
                  <label class="text-[14px] font-bold text-gray-900 ml-1">{{ t('contact.form.message') }}</label>
                  <textarea 
                    rows="6"
                    required
                    class="w-full p-6 bg-[#fafaf9] border border-gray-100 rounded-2xl text-[16px] focus:bg-white focus:border-[#1a946b] focus:ring-4 focus:ring-[#1a946b]/5 outline-none transition-all resize-none"
                    :placeholder="t('contact.form.message')"
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button 
                  type="submit" 
                  class="w-full py-5 bg-[#1a946b] hover:bg-[#157a58] text-white font-bold rounded-2xl text-[17px] shadow-xl shadow-green-900/10 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
                >
                  <span>{{ t('contact.form.send') }}</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </button>

                <!-- Success Message (hidden) -->
                <p v-if="submitted" class="text-center text-[#1a946b] font-bold animate-fade-in">
                  {{ t('contact.form.success') }}
                </p>
              </form>
            </div>

            <!-- Background Decoration for Form -->
            <div class="absolute -bottom-8 -right-8 w-64 h-64 bg-yellow-100 rounded-full blur-[80px] opacity-30 -z-0"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom FAQ Link -->
    <div class="bg-[#fafaf9] py-24 border-t border-gray-100">
      <div class="max-w-[1440px] mx-auto px-4 text-center">
        <h3 class="text-[24px] font-bold text-gray-900 mb-6">Still have questions?</h3>
        <p class="text-gray-500 mb-10 max-w-[500px] mx-auto">Check out our frequently asked questions to find answers to common queries about starting or supporting projects.</p>
        <router-link to="/faq" class="inline-flex items-center gap-2 text-[#1a946b] font-bold hover:gap-3 transition-all">
          Visit FAQ Center
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

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

<style scoped>
h1, h2 {
  letter-spacing: -0.04em;
}
@keyframes fade-in-down {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out forwards;
}
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}
</style>
