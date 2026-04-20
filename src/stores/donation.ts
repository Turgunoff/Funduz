import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Reward } from '../types/Reward';

export const useDonationStore = defineStore('donation', () => {
  // State
  const projectId = ref<number | null>(null);
  const rewardId = ref<number | null>(null);
  const selectedReward = ref<Reward | null>(null);
  const amount = ref<number>(0);

  // Actions
  const setProject = (id: number) => {
    // Reset if switching to a different project
    if (projectId.value !== id) {
      projectId.value = id;
      rewardId.value = null;
      selectedReward.value = null;
      amount.value = 0;
    }
  };

  const setReward = (reward: Reward) => {
    rewardId.value = reward.id;
    selectedReward.value = reward;
    // Set amount to minAmount of reward if current amount is lower
    if (amount.value < reward.minAmount) {
      amount.value = reward.minAmount;
    }
  };

  const removeReward = () => {
    rewardId.value = null;
    selectedReward.value = null;
  };

  const setAmount = (val: number) => {
    amount.value = val;
  };

  const reset = () => {
    projectId.value = null;
    rewardId.value = null;
    selectedReward.value = null;
    amount.value = 0;
  };

  return {
    projectId,
    rewardId,
    selectedReward,
    amount,
    setProject,
    setReward,
    removeReward,
    setAmount,
    reset
  };
});
