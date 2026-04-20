import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useFavoriteStore = defineStore('favorites', () => {
  // State: load from localStorage on init
  const projectIds = ref<number[]>(JSON.parse(localStorage.getItem('favorites_ids') || '[]'));

  // Getters (Methods in Setup Store)
  const isFavorite = (id: number) => projectIds.value.includes(id);

  // Actions
  const toggleFavorite = (id: number) => {
    const index = projectIds.value.indexOf(id);
    if (index === -1) {
      projectIds.value.push(id);
    } else {
      projectIds.value.splice(index, 1);
    }
  };

  const removeFavorite = (id: number) => {
    projectIds.value = projectIds.value.filter(favId => favId !== id);
  };

  const clearAll = () => {
    projectIds.value = [];
  };

  // Persistence
  watch(projectIds, (newIds) => {
    localStorage.setItem('favorites_ids', JSON.stringify(newIds));
  }, { deep: true });

  return {
    projectIds,
    isFavorite,
    toggleFavorite,
    removeFavorite,
    clearAll
  };
});
