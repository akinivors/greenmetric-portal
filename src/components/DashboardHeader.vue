<template>
  <div class="pb-4 mb-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
    <div class="flex items-center space-x-4">
      <router-link v-if="showBackButton" to="/" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </router-link>
      <div>
        <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100">GreenMetric</h1>
        <p class="text-base text-gray-500 dark:text-gray-400 mt-1">University Sustainability Portal</p>
      </div>
    </div>
    <button 
      @click="$emit('toggle-dark-mode')" 
      class="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-900 transition-all duration-200 ease-in-out transform hover:scale-105"
      :title="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

defineProps<{ isDarkMode: boolean }>();
defineEmits(['toggle-dark-mode']);

const route = useRoute();
const showBackButton = computed(() => route.name !== 'MainPage');
</script>