<template>
  <Transition name="modal">
    <div v-if="modelValue" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" @click="close"></div>
      
      <!-- Modal Content -->
      <div 
        class="relative bg-white rounded-[32px] shadow-2xl w-full max-h-[90vh] flex flex-col overflow-hidden transition-all duration-300"
        :style="{ maxWidth: maxWidth }"
      >
        <!-- Header -->
        <div class="px-8 py-6 flex items-center justify-between border-b border-gray-100 shrink-0 bg-white">
          <h3 class="text-[22px] sm:text-[24px] font-bold text-gray-900 tracking-tight">
            <slot name="title">{{ title }}</slot>
          </h3>
          <button 
            @click="close"
            class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors shrink-0 outline-none focus:ring-2 focus:ring-red-500/20"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Body -->
        <div class="p-8 overflow-y-auto no-scrollbar relative flex-1">
          <slot></slot>
        </div>

        <!-- Footer -->
        <div v-if="$slots.footer" class="px-8 py-6 bg-gray-50 border-t border-gray-100 flex flex-wrap sm:flex-nowrap items-center justify-end gap-4 shrink-0">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { watch, onUnmounted } from 'vue';

const props = defineProps({
  modelValue: { type: Boolean, required: true },
  title: { type: String, default: '' },
  maxWidth: { type: String, default: '600px' }
});

const emit = defineEmits(['update:modelValue', 'close']);

const close = () => {
  emit('update:modelValue', false);
  emit('close');
};

// Prevent body scroll when modal is open
watch(() => props.modelValue, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-leave-active .relative {
  transition: all 0.2s ease-in;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.9) translateY(20px);
  opacity: 0;
}
</style>
