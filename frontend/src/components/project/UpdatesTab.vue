<script setup lang="ts">
const updates = [
  {
    id: 1,
    date: '20.04.2024',
    title: 'Первый этап завершен!',
    content: 'Мы успешно закупили оборудование и начали монтаж. Спасибо всем за поддержку!',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600'
  }
];
</script>

<template>
  <div class="space-y-12">
    <div v-for="update in updates" :key="update.id" class="relative pl-8 lg:pl-12 border-l-2 border-gray-100">
      <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1a946b] border-4 border-white ring-1 ring-gray-100"></div>
      
      <div class="mb-2 flex items-center gap-3">
        <span class="text-[14px] font-bold text-[#1a946b]">{{ update.date }}</span>
      </div>
      
      <h3 class="text-[20px] lg:text-[24px] font-bold text-gray-900 mb-4">{{ update.title }}</h3>
      
      <div class="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm mb-6 max-w-2xl">
        <img loading="lazy" :src="update.image" class="w-full h-auto" :alt="update.title" />
      </div>
      
      <p class="text-gray-600 leading-relaxed text-[15px] lg:text-[16px] max-w-2xl font-medium">
        {{ update.content }}
      </p>
    </div>
    
    <div v-if="updates.length === 0" class="py-20 text-center bg-gray-50 rounded-[40px] border border-dashed border-gray-200">
        <p class="text-gray-500 font-bold">Пока новостей нет</p>
    </div>
  </div>
</template>
