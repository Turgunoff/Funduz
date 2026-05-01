<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppToast from './components/ui/AppToast.vue'
import ErrorBoundary from './components/ui/ErrorBoundary.vue'

const route = useRoute()
const isAuthPage = computed(() => ['/login', '/register', '/forgot-password', '/reset-password', '/create-project'].includes(route.path))

useHead({
  titleTemplate: (title) => title ? `${title} | Funduz` : 'Funduz - Crowdfunding Platform',
  meta: [
    { name: 'description', content: 'Funduz — инновационная краудфандинговая платформа для реализации творческих, социальных и технологических проектов.' },
    { property: 'og:site_name', content: 'Funduz' },
    { property: 'og:type', content: 'website' },
    { name: 'theme-color', content: '#1a946b' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col font-sans">
    <AppHeader v-if="!isAuthPage" />
    <main :class="!isAuthPage ? 'pt-16 lg:pt-20' : ''" class="flex-grow">
      <ErrorBoundary>
        <RouterView />
      </ErrorBoundary>
    </main>
    <AppFooter v-if="!isAuthPage" />
    <AppToast />
  </div>
</template>

<style>
/* Any global resets could go here if not in main.css */
</style>
