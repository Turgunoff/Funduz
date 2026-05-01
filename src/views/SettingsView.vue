<template>
  <div class="pt-24 lg:pt-32 pb-20 bg-[#f8f6f5] min-h-screen">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header Section -->
      <div class="bg-white rounded-[32px] p-8 lg:p-12 shadow-sm border border-gray-100 mb-10">
        <h1 class="text-[32px] lg:text-[40px] font-black text-gray-900 mb-2">
          {{ $t('nav.menu_settings') }}
        </h1>
        <p class="text-[15px] lg:text-[16px] font-medium text-gray-500">
          {{ $t('settings.header_desc') || 'Управляйте вашим профилем, безопасностью и уведомлениями.' }}
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <!-- Sidebar Navigation -->
        <aside class="w-full lg:w-72 flex-shrink-0">
          <nav class="bg-white rounded-[24px] border border-gray-100 p-4 space-y-2 sticky top-28 shadow-sm">
            <button 
              v-for="tab in settingsTabs" 
              :key="tab.id"
              @click="activeTab = tab.id"
              class="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold text-[14px] transition-all text-left"
              :class="activeTab === tab.id ? 'bg-[#f0f9f6] text-[#1a946b]' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'"
            >
              <svg class="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="tab.icon" />
              </svg>
              {{ tab.name }}
            </button>
          </nav>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-grow bg-white rounded-[32px] border border-gray-100 p-8 lg:p-12 shadow-sm">
          
          <!-- Tab 1: Profile -->
          <div v-if="activeTab === 'profile'" class="animate-fade-in">
            <h2 class="text-[24px] lg:text-[28px] font-bold text-gray-900 mb-8">{{ $t('settings.profile_title') || 'Личные данные' }}</h2>
            
            <div class="flex items-center gap-6 mb-10">
              <div class="relative w-24 h-24 rounded-full bg-gray-100 overflow-hidden group border border-gray-200 shadow-inner">
                <img loading="lazy" v-if="authStore.user?.avatar" :src="authStore.user.avatar" :alt="authStore.user?.name || 'User avatar'" class="w-full h-full object-cover" />
                <div v-else class="w-full h-full flex items-center justify-center bg-orange-100 text-orange-600 font-black text-3xl">
                  {{ authStore.user?.name?.charAt(0) || 'U' }}
                </div>
                <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
              </div>
              <div>
                <button class="px-5 py-2.5 bg-gray-50 text-gray-700 font-bold text-[13px] rounded-xl hover:bg-gray-100 transition-colors mb-2">Изменить фото</button>
                <p class="text-[12px] text-gray-500">JPG, GIF или PNG. Макс размер: 5МБ</p>
              </div>
            </div>

            <form @submit.prevent="saveProfile">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label for="set-name" class="block text-[13px] font-bold text-gray-700 mb-2">{{ $t('settings.name_label') || 'Имя и фамилия' }}</label>
                  <input id="set-name" v-model="editForm.name" type="text" class="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 text-gray-900 font-medium focus:ring-2 focus:ring-[#1a946b] focus:border-transparent outline-none transition-all" required />
                </div>
                <div>
                  <label for="set-phone" class="block text-[13px] font-bold text-gray-700 mb-2">{{ $t('settings.phone_label') || 'Номер телефона' }}</label>
                  <input id="set-phone" v-model="editForm.phone" type="tel" class="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 text-gray-900 font-medium focus:ring-2 focus:ring-[#1a946b] focus:border-transparent outline-none transition-all" />
                </div>
                <div class="md:col-span-2">
                  <label for="set-email" class="block text-[13px] font-bold text-gray-700 mb-2">E-mail</label>
                  <input id="set-email" v-model="editForm.email" type="email" class="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 text-gray-900 font-medium focus:ring-2 focus:ring-[#1a946b] focus:border-transparent outline-none transition-all" />
                </div>
                <div class="md:col-span-2">
                  <label for="set-bio" class="block text-[13px] font-bold text-gray-700 mb-2">{{ $t('profile.edit.bio_label') }}</label>
                  <textarea 
                    id="set-bio"
                    v-model="editForm.bio" 
                    rows="4" 
                    class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 font-medium focus:ring-2 focus:ring-[#1a946b] focus:border-transparent outline-none transition-all resize-none"
                    :placeholder="$t('profile.edit.bio_placeholder')"
                  ></textarea>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <button type="submit" :disabled="isSaving" class="px-8 py-3.5 bg-[#1a946b] text-white rounded-xl font-bold text-[15px] hover:bg-[#147a57] transition-all shadow-md shadow-[#1a946b]/20 disabled:opacity-50 disabled:cursor-not-allowed">
                  {{ isSaving ? $t('settings.saving') : $t('settings.save_btn') }}
                </button>
                <span v-if="saveSuccess" class="text-[13px] font-bold text-[#1a946b] animate-fade-in">
                  {{ $t('settings.save_success') }}
                </span>
              </div>
            </form>
          </div>

          <!-- Tab 2: Security -->
          <div v-if="activeTab === 'security'" class="animate-fade-in">
            <h2 class="text-[24px] lg:text-[28px] font-bold text-gray-900 mb-8">Безопасность</h2>
            
            <div class="space-y-6 max-w-lg mb-10">
              <div>
                <label class="block text-[13px] font-bold text-gray-700 mb-2">Текущий пароль</label>
                <input type="password" class="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 text-gray-900 font-medium focus:ring-2 focus:ring-[#1a946b] focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label class="block text-[13px] font-bold text-gray-700 mb-2">Новый пароль</label>
                <input type="password" class="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 text-gray-900 font-medium focus:ring-2 focus:ring-[#1a946b] focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label class="block text-[13px] font-bold text-gray-700 mb-2">Подтвердите пароль</label>
                <input type="password" class="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 text-gray-900 font-medium focus:ring-2 focus:ring-[#1a946b] focus:border-transparent outline-none transition-all" />
              </div>
            </div>

            <button class="px-8 py-3.5 bg-gray-900 text-white rounded-xl font-bold text-[15px] hover:bg-black transition-all">Обновить пароль</button>
          </div>

          <!-- Tab 3: Notifications -->
          <div v-if="activeTab === 'notifications'" class="animate-fade-in">
            <h2 class="text-[24px] lg:text-[28px] font-bold text-gray-900 mb-8">{{ $t('settings.notifications_title') }}</h2>
            
            <div class="space-y-4">
              <div class="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <div>
                  <h4 class="font-bold text-gray-900 text-[15px]">{{ $t('settings.notif_new_projects') }}</h4>
                  <p class="text-gray-500 text-[13px] mt-1">{{ $t('settings.notif_new_projects_desc') }}</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked class="sr-only peer">
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1a946b]"></div>
                </label>
              </div>

              <div class="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <div>
                  <h4 class="font-bold text-gray-900 text-[15px]">{{ $t('settings.notif_success_fund') }}</h4>
                  <p class="text-gray-500 text-[13px] mt-1">{{ $t('settings.notif_success_fund_desc') }}</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked class="sr-only peer">
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1a946b]"></div>
                </label>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const activeTab = ref('profile');

const isSaving = ref(false);
const saveSuccess = ref(false);

const editForm = ref({
  name: '',
  phone: '',
  email: '',
  bio: ''
});

const { t } = useI18n();

watch(() => authStore.user, (user) => {
  if (user) {
    editForm.value = {
      name: user.name || '',
      phone: user.phone || '',
      email: user.email || '',
      bio: user.bio || ''
    };
  }
}, { immediate: true });

const saveProfile = async () => {
  isSaving.value = true;
  saveSuccess.value = false;
  
  await authStore.updateProfile({
    name: editForm.value.name,
    phone: editForm.value.phone,
    email: editForm.value.email,
    bio: editForm.value.bio
  });
  
  isSaving.value = false;
  saveSuccess.value = true;
  
  setTimeout(() => {
    saveSuccess.value = false;
  }, 3000);
};

const settingsTabs = computed(() => [
  { id: 'profile', name: t('settings.tabs.profile'), icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { id: 'security', name: t('settings.tabs.security'), icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { id: 'notifications', name: t('settings.tabs.notifications'), icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' }
]);

</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
