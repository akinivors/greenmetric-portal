<template>
  <div :class="{ 'dark': isDarkMode }" class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300">
    <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <DashboardHeader :is-dark-mode="isDarkMode" @toggle-dark-mode="isDarkMode = !isDarkMode" />
      <main class="mt-8">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DashboardHeader from './components/DashboardHeader.vue';
const isDarkMode = ref(false);
</script>