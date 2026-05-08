<template>
  <div class="pt-24 lg:pt-32 pb-20 bg-[#f8f6f5] min-h-screen">
    <div class="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header Section -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
        <div>
          <h1 class="text-[32px] lg:text-[42px] font-black text-gray-900 tracking-tight leading-none mb-3">
            {{ $t('notifications.title') }}
          </h1>
          <p class="text-[15px] lg:text-[16px] font-medium text-gray-500">
            {{ $t('notifications.subtitle') }}
          </p>
        </div>
        <button 
          v-if="notifications.some(n => !n.isRead)"
          @click="markAllAsRead"
          class="flex items-center gap-2 text-[14px] font-bold text-[#1a946b] hover:bg-[#1a946b]/5 px-5 py-2.5 rounded-xl transition-all self-start sm:self-center bg-white border border-[#1a946b]/20 shadow-sm"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
          {{ $t('notifications.mark_all') }}
        </button>
      </div>

      <!-- Filters/Tabs -->
      <div class="flex border-b border-gray-100 mb-8 overflow-x-auto no-scrollbar">
        <button 
          @click="activeFilter = 'all'"
          class="px-6 sm:px-8 py-4 font-bold text-[15px] border-b-[3px] transition-colors relative whitespace-nowrap"
          :class="activeFilter === 'all' ? 'text-[#1a946b] border-[#1a946b]' : 'text-gray-500 border-transparent hover:text-gray-600'"
        >
          {{ $t('notifications.tabs.all') }}
          <span class="ml-1.5 text-[13px] opacity-60">{{ notifications.length }}</span>
        </button>
        <button 
          @click="activeFilter = 'unread'"
          class="px-6 sm:px-8 py-4 font-bold text-[15px] border-b-[3px] transition-colors relative whitespace-nowrap"
          :class="activeFilter === 'unread' ? 'text-[#1a946b] border-[#1a946b]' : 'text-gray-500 border-transparent hover:text-gray-600'"
        >
          {{ $t('notifications.tabs.unread') }}
          <span v-if="unreadCount > 0" class="ml-1.5 px-2 py-0.5 bg-[#1a946b] text-white rounded-full text-[11px] align-middle">
            {{ unreadCount }}
          </span>
        </button>
      </div>

      <!-- Notifications List -->
      <TransitionGroup 
        name="list" 
        tag="div" 
        class="space-y-4"
      >
        <div 
          v-for="note in filteredNotifications" 
          :key="note.id"
          @click="markAsRead(note.id)"
          class="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex gap-5 transition-all hover:shadow-md group relative overflow-hidden cursor-pointer"
          :class="{'border-l-[6px] border-l-[#1a946b]': !note.isRead}"
        >
          <!-- Icon Container -->
          <div 
            class="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center transition-transform group-hover:scale-105"
            :class="getIconClass(note.type)"
          >
            <svg v-if="note.type === 'payment'" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <svg v-else-if="note.type === 'goal'" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            <svg v-else-if="note.type === 'alert'" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
          </div>

          <!-- Content -->
          <div class="flex-grow">
            <div class="flex justify-between items-start mb-1">
              <h3 class="font-bold text-[17px] text-gray-900 group-hover:text-[#1a946b] transition-colors">
                {{ $t(`notifications.types.${note.type}.title`) }}
              </h3>
              <div class="flex items-center gap-3">
                <span class="text-[11px] font-black text-gray-500 whitespace-nowrap uppercase tracking-wider">
                  {{ formatTime(note) }}
                </span>
                <button 
                  @click.stop="deleteNote(note.id)"
                  class="p-1.5 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
              </div>
            </div>
            <p class="text-[14px] text-gray-500 leading-relaxed font-medium pr-8">
              {{ $t(`notifications.types.${note.type}.message`, note.params || {}) }}
            </p>
          </div>

          <!-- Unread Indicator -->
          <div v-if="!note.isRead" class="absolute top-4 right-4 w-2 h-2 bg-[#1a946b] rounded-full"></div>
        </div>
      </TransitionGroup>

      <!-- Empty State -->
      <div v-if="filteredNotifications.length === 0" class="bg-white rounded-[32px] p-20 text-center shadow-sm border border-gray-100 animate-fade-in">
        <div class="w-24 h-24 bg-[#f0f9f6] rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <svg class="w-12 h-12 text-[#1a946b]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        </div>
        <h2 class="text-[24px] font-bold text-gray-900 mb-3">{{ $t('notifications.empty_title') }}</h2>
        <p class="text-gray-500 text-[16px] max-w-[320px] mx-auto leading-relaxed">{{ $t('notifications.empty_desc') }}</p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const activeFilter = ref('all');

interface NotificationItem {
  id: number;
  type: string;
  params?: Record<string, string>;
  isRead: boolean;
  timestamp: number;
}

const notifications = ref<NotificationItem[]>([
  {
    id: 1,
    type: 'payment',
    params: { project: 'Yashil Maktab', amount: '100,000' },
    isRead: false,
    timestamp: Date.now() - 1000 * 60 * 15 // 15 mins ago
  },
  {
    id: 2,
    type: 'update',
    params: { project: 'Najot Ta\'lim' },
    isRead: false,
    timestamp: Date.now() - 1000 * 60 * 60 * 3 // 3 hours ago
  },
  {
    id: 3,
    type: 'goal',
    params: { project: 'EcoBox' },
    isRead: true,
    timestamp: Date.now() - 1000 * 60 * 60 * 24 // 1 day ago
  },
  {
    id: 4,
    type: 'alert',
    params: { project: 'Solar Cooker' },
    isRead: true,
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 3 // 3 days ago
  }
]);

const unreadCount = computed(() => notifications.value.filter(n => !n.isRead).length);

const filteredNotifications = computed(() => {
  if (activeFilter.value === 'unread') {
    return notifications.value.filter(n => !n.isRead);
  }
  return notifications.value;
});

const getIconClass = (type: string) => {
  switch (type) {
    case 'payment': return 'bg-green-50 text-green-600';
    case 'goal': return 'bg-[#f0f9f6] text-[#1a946b]';
    case 'alert': return 'bg-orange-50 text-orange-600';
    case 'update': return 'bg-blue-50 text-blue-600';
    default: return 'bg-gray-50 text-gray-600';
  }
};

const formatTime = (note: NotificationItem) => {
  const diff = Date.now() - note.timestamp;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);

  if (hours < 1) return t('notifications.times.now');
  if (days < 1) return t('notifications.times.hour', { n: hours });
  return t('notifications.times.day', { n: days });
};

const markAsRead = (id: number) => {
  const note = notifications.value.find(n => n.id === id);
  if (note) note.isRead = true;
};

const markAllAsRead = () => {
  notifications.value.forEach(n => n.isRead = true);
};

const deleteNote = (id: number) => {
  notifications.value = notifications.value.filter(n => n.id !== id);
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* List Transitions */
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-move {
  transition: transform 0.4s ease;
}
</style>
