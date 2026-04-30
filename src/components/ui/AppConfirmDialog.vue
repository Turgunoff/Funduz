<template>
  <AppModal
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :title="title"
    :max-width="maxWidth"
  >
    <div
      class="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left"
    >
      <!-- Warning/Info Icon -->
      <div
        class="w-16 h-16 rounded-full flex items-center justify-center shrink-0 shadow-inner"
        :class="type === 'danger' ? 'bg-red-50 text-red-500' : 'bg-[#e0f2fe] text-[#0ea5e9]'"
      >
        <svg
          v-if="type === 'danger'"
          class="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <svg v-else class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <!-- Message -->
      <div class="pt-2">
        <p class="text-[16px] text-gray-600 font-medium leading-relaxed">
          {{ message }}
        </p>
      </div>
    </div>

    <!-- Actions -->
    <template #footer>
      <div class="flex w-full sm:w-auto flex-col-reverse sm:flex-row gap-3">
        <button
          @click="$emit('update:modelValue', false)"
          class="w-full sm:w-auto px-6 py-3.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-[16px] hover:bg-gray-50 hover:text-gray-900 transition-colors focus:ring-2 focus:ring-gray-200 outline-none"
        >
          {{ cancelText }}
        </button>
        <button
          @click="$emit('confirm')"
          class="w-full sm:w-auto px-8 py-3.5 text-white font-bold rounded-[16px] shadow-lg transition-transform active:scale-95 focus:ring-2 outline-none"
          :class="
            type === 'danger'
              ? 'bg-red-500 hover:bg-red-600 shadow-red-500/20 focus:ring-red-500/50'
              : 'bg-[#1a946b] hover:bg-[#147a57] shadow-green-900/20 focus:ring-[#1a946b]/50'
          "
        >
          {{ confirmText }}
        </button>
      </div>
    </template>
  </AppModal>
</template>

<script setup lang="ts">
import AppModal from "./AppModal.vue";

defineProps({
  modelValue: { type: Boolean, required: true },
  title: { type: String, default: "Подтвердите действие" },
  message: { type: String, required: true },
  type: { type: String as () => "danger" | "info", default: "info" },
  confirmText: { type: String, default: "Подтвердить" },
  cancelText: { type: String, default: "Отмена" },
  maxWidth: { type: String, default: "500px" },
});

defineEmits(["update:modelValue", "confirm"]);
</script>
