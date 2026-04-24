<template>
  <div class="min-h-screen bg-[#f8f6f5] pt-24 lg:pt-32 pb-20">
    <div class="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Profile Header Card -->
      <div class="bg-white rounded-[40px] p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 relative overflow-hidden">
        
        <!-- Decoration -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-[#f0f9f6] rounded-full blur-3xl -mr-20 -mt-20 opacity-60 pointer-events-none"></div>

        <!-- Avatar -->
        <div class="relative group shrink-0">
          <div class="w-32 h-32 lg:w-40 lg:h-40 rounded-[32px] overflow-hidden border-4 border-[#f0f9f6] shadow-md bg-orange-100 flex items-center justify-center text-4xl font-black text-orange-600">
            <img v-if="authStore.user?.avatar" :src="authStore.user.avatar" alt="Profile" class="w-full h-full object-cover">
            <span v-else>{{ authStore.user?.name?.charAt(0) || 'U' }}</span>
          </div>
          <!-- Update Avatar Button -->
          <button class="absolute -bottom-2 -right-2 w-12 h-12 bg-[#1a946b] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-900/20 hover:-translate-y-1 transition-all duration-300 z-20 hover:scale-105 active:scale-95 cursor-not-allowed">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>

        <!-- User Info -->
        <div class="flex-grow text-center md:text-left relative z-10 w-full">
          <div class="flex justify-between items-start mb-4">
            <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f0f9f6] text-[#1a946b] text-[11px] font-black tracking-widest uppercase shadow-sm">
              {{ authStore.user?.role === 'creator' ? $t('nav.role_author') : $t('nav.role_sponsor') }}
            </div>
            
            <button @click="openEditModal" class="p-2 text-gray-300 hover:text-[#1a946b] hover:bg-[#f0f9f6] rounded-full transition-all group" :title="$t('profile.edit.title')">
              <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </div>
          
          <h1 class="text-[32px] lg:text-[40px] font-bold text-gray-900 mb-2 leading-tight">{{ authStore.user?.name || $t('profile.default_name') }}</h1>
          
          <div class="flex flex-col gap-2 mb-8 text-[15px] font-medium text-gray-500">
            <!-- Location -->
            <div class="flex items-center justify-center md:justify-start gap-2">
               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {{ $t('profile.location') }}
            </div>
            <!-- Email -->
            <div class="flex items-center justify-center md:justify-start gap-2" v-if="authStore.user?.email">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              {{ authStore.user.email }}
            </div>
            <!-- Phone -->
            <div class="flex items-center justify-center md:justify-start gap-2" v-if="authStore.user?.phone">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              {{ authStore.user.phone }}
            </div>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            <div class="bg-gray-50 rounded-[20px] p-5 text-center border border-gray-100 hover:border-[#1a946b]/30 transition-colors">
              <div class="text-[24px] lg:text-[28px] font-bold text-[#1a946b] mb-1 leading-none">12</div>
              <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">{{ $t('profile.stats.supported') }}</div>
            </div>
            <div class="bg-gray-50 rounded-[20px] p-5 text-center border border-gray-100 hover:border-[#1a946b]/30 transition-colors">
              <div class="text-[24px] lg:text-[28px] font-bold text-[#1a946b] mb-1 leading-none">3</div>
              <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">{{ $t('profile.stats.my_projects') }}</div>
            </div>
            <div class="bg-gray-50 rounded-[20px] p-5 text-center border border-gray-100 hover:border-[#1a946b]/30 transition-colors">
              <div class="text-[24px] lg:text-[28px] font-bold text-[#1a946b] mb-1 leading-none">8</div>
              <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">{{ $t('profile.stats.comments') }}</div>
            </div>
            <div class="bg-gray-50 rounded-[20px] p-5 text-center border border-gray-100 hover:border-[#1a946b]/30 transition-colors">
              <div class="text-[24px] lg:text-[28px] font-bold text-[#1a946b] mb-1 leading-none">1.2M</div>
              <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">{{ $t('profile.stats.points') }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Area Placeholder -->
      <div class="mt-12 text-center py-20 bg-white rounded-[40px] border border-gray-100 border-dashed border-2">
        <div class="w-16 h-16 bg-[#f0f9f6] rounded-full flex items-center justify-center text-[#1a946b] mx-auto mb-6">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h2 class="text-[24px] font-bold text-gray-900 mb-2">{{ $t('profile.empty.title') }}</h2>
        <p class="text-gray-500 font-medium">{{ $t('profile.empty.desc') }}</p>
        <router-link to="/dashboard" class="inline-flex items-center px-8 py-4 mt-8 bg-[#1a946b] text-white font-bold rounded-2xl hover:bg-[#157a58] transition-all shadow-xl shadow-green-900/10">
          {{ $t('nav.view_projects') }}
        </router-link>
      </div>

      <!-- Edit Profile Modal -->
      <transition name="modal">
        <div v-if="isEditModalOpen" class="fixed inset-0 z-[200] flex items-center justify-center px-4">
          <div class="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" @click="isEditModalOpen = false"></div>
          
          <div class="relative bg-white w-full max-w-[500px] rounded-[32px] shadow-2xl p-8 lg:p-10 transition-transform duration-300">
            <h2 class="text-[28px] font-black text-gray-900 mb-8">{{ $t('profile.edit.title') }}</h2>
            
            <form @submit.prevent="saveProfile" class="space-y-6">
              <div>
                <label class="block text-[14px] font-bold text-gray-700 mb-2">{{ $t('profile.edit.name') }}</label>
                <input v-model="editForm.name" type="text" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[16px] font-medium text-gray-900 outline-none focus:border-[#1a946b] focus:ring-1 focus:ring-[#1a946b] transition-all" required />
              </div>
              
              <div>
                <label class="block text-[14px] font-bold text-gray-700 mb-2">{{ $t('profile.edit.phone') }}</label>
                <input v-model="editForm.phone" type="tel" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[16px] font-medium text-gray-900 outline-none focus:border-[#1a946b] focus:ring-1 focus:ring-[#1a946b] transition-all" />
              </div>

              <div>
                <label class="block text-[14px] font-bold text-gray-700 mb-2">{{ $t('profile.edit.email') }}</label>
                <input v-model="editForm.email" type="email" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[16px] font-medium text-gray-900 outline-none focus:border-[#1a946b] focus:ring-1 focus:ring-[#1a946b] transition-all" />
              </div>

              <div class="flex gap-4 pt-4">
                <button type="button" @click="isEditModalOpen = false" class="flex-1 py-4 bg-gray-100 text-gray-700 rounded-2xl font-black hover:bg-gray-200 transition-all">
                  {{ $t('profile.edit.cancel') }}
                </button>
                <button type="submit" :disabled="isSaving" class="flex-1 py-4 bg-[#1a946b] text-white rounded-2xl font-black hover:bg-[#157a58] transition-all shadow-lg shadow-green-900/20 disabled:opacity-50 disabled:cursor-not-allowed">
                  {{ isSaving ? '...' : $t('profile.edit.save') }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </transition>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();

const isEditModalOpen = ref(false);
const isSaving = ref(false);

const editForm = ref({
  name: '',
  phone: '',
  email: ''
});

const openEditModal = () => {
  if (authStore.user) {
    editForm.value = {
      name: authStore.user.name || '',
      phone: authStore.user.phone || '',
      email: authStore.user.email || ''
    };
  }
  isEditModalOpen.value = true;
};

const saveProfile = async () => {
  isSaving.value = true;
  await authStore.updateProfile({
    name: editForm.value.name,
    phone: editForm.value.phone,
    email: editForm.value.email
  });
  isSaving.value = false;
  isEditModalOpen.value = false;
};
</script>

<style scoped>
h1 {
  letter-spacing: -0.03em;
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-active .relative.bg-white,
.modal-leave-active .relative.bg-white {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .relative.bg-white,
.modal-leave-to .relative.bg-white {
  transform: scale(0.95) translateY(10px);
  opacity: 0;
}
</style>
