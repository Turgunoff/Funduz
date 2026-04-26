import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { projectService } from '../services/projectService';
import type { Project } from '../types/Project';

export const useProjectStore = defineStore('projects', () => {
  // State
  const allItems = ref<Project[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  
  const filterCategory = ref('all');
  const sortBy = ref('newest');
  const searchQuery = ref('');
  
  const itemsPerPage = ref(9);
  const currentPage = ref(1);

  // Getters
  const filteredItems = computed(() => {
    let result = [...allItems.value];
    
    // Search within state (local search)
    if (searchQuery.value) {
      const q = searchQuery.value.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }
    
    // Category Filter
    if (filterCategory.value !== 'all') {
      result = result.filter(p => p.categoryKey === filterCategory.value);
    }
    
    // Sorting
    if (sortBy.value === 'newest') {
      result.sort((a, b) => b.id - a.id);
    } else if (sortBy.value === 'popular') {
      result.sort((a, b) => b.donorsCount - a.donorsCount);
    } else if (sortBy.value === 'ending') {
      result.sort((a, b) => new Date(a.endsAt).getTime() - new Date(b.endsAt).getTime());
    }
    
    return result;
  });

  const paginatedItems = computed(() => {
    return filteredItems.value.slice(0, currentPage.value * itemsPerPage.value);
  });

  const hasMore = computed(() => {
    return paginatedItems.value.length < filteredItems.value.length;
  });

  // Actions
  const fetchAll = async () => {
    if (allItems.value.length > 0) return; // Optional: cache or always re-fetch?
    
    isLoading.value = true;
    error.value = null;
    try {
      allItems.value = await projectService.getAll();
    } catch (e) {
      error.value = 'Failed to fetch projects';
      console.error(e);
    } finally {
      isLoading.value = false;
    }
  };

  const setFilter = (category: string) => {
    filterCategory.value = category;
    currentPage.value = 1;
  };

  const setSort = (sort: string) => {
    sortBy.value = sort;
    currentPage.value = 1;
  };

  const loadMore = () => {
    currentPage.value++;
  };

  const addDonation = (projectId: number, amount: number) => {
    const project = allItems.value.find(p => p.id === projectId);
    if (project) {
      project.raised += amount;
      project.donorsCount += 1;
    }
  };

  // Reset pagination when filter/sort/search changes
  watch([filterCategory, sortBy, searchQuery], () => {
    currentPage.value = 1;
  });

  return {
    allItems,
    isLoading,
    error,
    filterCategory,
    sortBy,
    searchQuery,
    filteredItems,
    paginatedItems,
    hasMore,
    fetchAll,
    setFilter,
    setSort,
    loadMore,
    addDonation
  };
});
