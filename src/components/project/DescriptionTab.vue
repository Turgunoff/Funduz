<script setup lang="ts">
import type { Project } from '../../types/Project';

defineProps<{
  project: Project;
  benefits: string[];
}>();
</script>

<template>
  <div>
    <h2 class="text-[24px] lg:text-[32px] font-bold text-gray-900 mb-6 lg:mb-8 leading-snug">
      {{ $t("project_view.detail_title") }}
    </h2>
    <div class="prose prose-sm md:prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
      <p>{{ project.description }}</p>
      
      <p v-if="project.categoryKey === 'eco'">{{ $t('project_view.dynamic_eco_text') }}</p>
      <p v-else-if="project.categoryKey === 'edu'">{{ $t('project_view.dynamic_edu_text') }}</p>
      <p v-else>{{ $t("project_view.detail_text_1") }}</p>

      <figure class="my-8 lg:my-12">
        <div class="rounded-[24px] lg:rounded-[32px] overflow-hidden bg-gray-50 aspect-video flex items-center justify-center shadow-lg shadow-gray-200/50">
          <img :src="project.mainImage" class="w-full h-full object-cover" alt="Project environment" />
        </div>
        <figcaption class="text-center text-[12px] lg:text-sm text-gray-400 mt-4 italic font-medium">
          {{ $t("project_view.image_caption") }}
        </figcaption>
      </figure>

      <h3 class="text-[22px] lg:text-[28px] font-bold text-gray-900">
        {{ $t("project_view.benefits_title") }}
      </h3>
      <ul class="space-y-4">
        <li v-for="(benefit, bidx) in benefits" :key="bidx" class="flex items-start gap-4">
          <div class="w-6 h-6 rounded-full bg-[#f0fdf4] flex items-center justify-center flex-shrink-0 mt-1">
            <svg class="w-3.5 h-3.5 text-[#14532d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span class="text-[15px] lg:text-[16px] text-gray-600 leading-relaxed font-medium">{{ benefit }}</span>
        </li>
      </ul>

      <p>{{ $t("project_view.detail_text_2") }}</p>
    </div>
  </div>
</template>
