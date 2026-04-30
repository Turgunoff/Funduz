<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const projectId = route.params.id as string;

const comments = ref([
  {
    id: 1,
    author: 'Азиз Каримов',
    date: '2 дня назад',
    text: 'Отличная идея! Надеюсь, проект наберет нужную сумму. Желаю удачи авторам!',
    avatar: 'https://i.pravatar.cc/150?u=1'
  },
  {
    id: 2,
    author: 'Мадина Саидова',
    date: '5 дней назад',
    text: 'Поддержала проект. Очень жду реализации, такие инициативы важны для нашего города.',
    avatar: 'https://i.pravatar.cc/150?u=2'
  }
]);

// Load from localStorage
onMounted(() => {
  const saved = localStorage.getItem(`project_comments_${projectId}`);
  if (saved) {
    comments.value = JSON.parse(saved);
  }
});

// Save to localStorage
watch(comments, (newVal) => {
  localStorage.setItem(`project_comments_${projectId}`, JSON.stringify(newVal));
}, { deep: true });

const newComment = ref('');

const addComment = () => {
    if(!newComment.value.trim()) return;
    comments.value.unshift({
        id: Date.now(),
        author: 'Вы',
        date: 'Только что',
        text: newComment.value,
        avatar: 'https://i.pravatar.cc/150?u=me'
    });
    newComment.value = '';
}
</script>

<template>
  <div class="max-w-2xl">
    <!-- Comment Form -->
    <div class="mb-12 bg-gray-50 rounded-[32px] p-6 lg:p-8">
      <h3 class="text-[18px] font-bold text-gray-900 mb-6">Оставить комментарий</h3>
      <div class="relative">
        <textarea 
          v-model="newComment"
          placeholder="Ваши мысли о проекте..." 
          class="w-full bg-white border border-gray-100 rounded-2xl p-5 text-[15px] min-h-[140px] focus:ring-2 focus:ring-[#1a946b]/20 focus:border-[#1a946b] transition-all outline-none"
        ></textarea>
        <button 
          @click="addComment"
          class="mt-4 px-8 py-3.5 bg-[#1a946b] text-white font-bold rounded-xl hover:bg-[#147a55] transition-all shadow-md shadow-green-900/10"
        >
          Отправить
        </button>
      </div>
    </div>

    <!-- Comments List -->
    <div class="space-y-8">
      <div v-for="comment in comments" :key="comment.id" class="flex gap-4 lg:gap-6">
        <div class="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
          <img :src="comment.avatar" class="w-full h-full object-cover" :alt="comment.author" />
        </div>
        <div class="flex-grow">
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-[16px] lg:text-[17px] font-bold text-gray-900">{{ comment.author }}</h4>
            <span class="text-[13px] font-medium text-gray-400">{{ comment.date }}</span>
          </div>
          <p class="text-gray-600 leading-relaxed text-[15px] lg:text-[16px] font-medium">
            {{ comment.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
