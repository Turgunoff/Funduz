<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const route = useRoute()
const isAuthPage = computed(() => route.path === '/login' || route.path === '/create-project')
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col font-sans">
    <AppHeader v-if="!isAuthPage" />
    <main class="flex-grow">
      <RouterView />
    </main>
    <AppFooter v-if="!isAuthPage" />
  </div>
</template>

<style>
/* Any global resets could go here if not in main.css */
</style>
