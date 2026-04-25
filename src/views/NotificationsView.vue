<template>
  <div class="pt-24 lg:pt-32 pb-20 bg-[#f8f6f5] min-h-screen">
    <div class="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <h1 class="text-[32px] lg:text-[42px] font-black text-gray-900 tracking-tight leading-none mb-2">Уведомления</h1>
          <p class="text-[15px] font-medium text-gray-500">Следите за обновлениями ваших проектов и активности</p>
        </div>
        <button 
          @click="markAllAsRead"
          class="text-[14px] font-bold text-[#1a946b] hover:bg-[#1a946b]/5 px-4 py-2 rounded-xl transition-all self-start sm:self-center"
        >
          Прочитать все
        </button>
      </div>

      <!-- Notifications List -->
      <div class="space-y-4">
        <div 
          v-for="note in notifications" 
          :key="note.id"
          class="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex gap-5 transition-all hover:shadow-md group relative overflow-hidden"
          :class="{'border-l-[6px] border-l-[#1a946b]': !note.isRead}"
        >
          <!-- Icon Container -->
          <div 
            class="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center transition-transform group-hover:scale-105"
            :class="getIconClass(note.type)"
          >
            <!-- Inline SVGs instead of Heroicons -->
            <svg v-if="note.type === 'success'" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <svg v-else-if="note.type === 'stats'" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            <svg v-else-if="note.type === 'alert'" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>

          <!-- Content -->
          <div class="flex-grow">
            <div class="flex justify-between items-start mb-1">
              <h3 class="font-bold text-[17px] text-gray-900 group-hover:text-[#1a946b] transition-colors">
                {{ note.title }}
              </h3>
              <span class="text-[12px] font-bold text-gray-400 whitespace-nowrap ml-4 uppercase tracking-wider">
                {{ note.time }}
              </span>
            </div>
            <p class="text-[14px] text-gray-500 leading-relaxed font-medium">
              {{ note.message }}
            </p>
          </div>

          <!-- Unread Dot -->
          <div v-if="!note.isRead" class="absolute top-4 right-4 w-2 h-2 bg-[#1a946b] rounded-full"></div>
        </div>

        <!-- Empty State -->
        <div v-if="notifications.length === 0" class="bg-white rounded-[32px] p-20 text-center shadow-sm">
          <div class="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          </div>
          <h2 class="text-[22px] font-bold text-gray-900 mb-2">Уведомлений пока нет</h2>
          <p class="text-gray-500 text-[15px]">Мы сообщим вам, когда произойдет что-то важное.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const notifications = ref([
  {
    id: 1,
    type: 'success',
    title: 'Платеж успешно принят',
    message: 'Ваша поддержка проекта "EcoBox" в размере 100 000 UZS прошла успешно. Спасибо!',
    time: '2 ЧАСА НАЗАД',
    isRead: false
  },
  {
    id: 2,
    type: 'info',
    title: 'Обновление в проекте',
    message: 'Автор проекта "Najot Ta\'lim" добавил новые фотографии прогресса строительства.',
    time: '1 ДЕНЬ НАЗАД',
    isRead: false
  },
  {
    id: 3,
    type: 'stats',
    title: 'Еженедельный отчет',
    message: 'За прошедшую неделю ваши избранные проекты собрали более 50 000 000 UZS.',
    time: '3 ДНЯ НАЗАД',
    isRead: true
  },
  {
    id: 4,
    type: 'alert',
    title: 'Проект завершается',
    message: 'Осталось всего 24 часа до окончания сбора средств для "Solar Cooker".',
    time: '5 ДНЕЙ НАЗАД',
    isRead: true
  }
]);

const getIconClass = (type: string) => {
  switch (type) {
    case 'success': return 'bg-green-50 text-green-600';
    case 'stats': return 'bg-blue-50 text-blue-600';
    case 'alert': return 'bg-orange-50 text-orange-600';
    default: return 'bg-gray-50 text-gray-600';
  }
};

const markAllAsRead = () => {
  notifications.value = notifications.value.map(n => ({ ...n, isRead: true }));
};
</script>
