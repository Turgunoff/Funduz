<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppToast from './components/ui/AppToast.vue'

const route = useRoute()
const isAuthPage = computed(() => ['/login', '/register', '/forgot-password', '/reset-password', '/create-project'].includes(route.path))
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col font-sans">
    <AppHeader v-if="!isAuthPage" />
    <main :class="!isAuthPage ? 'pt-16 lg:pt-20' : ''" class="flex-grow">
      <RouterView />
    </main>
    <AppFooter v-if="!isAuthPage" />
    <AppToast />
  </div>
</template>

<style>
/* Any global resets could go here if not in main.css */
</style>
