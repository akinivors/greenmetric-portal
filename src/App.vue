<template>
  <div :class="{ 'dark': isDarkMode }" class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300">
    <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <DashboardHeader :is-dark-mode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
      <main class="mt-8">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import DashboardHeader from './components/DashboardHeader.vue';

// Initialize dark mode from localStorage or system preference
const getInitialDarkMode = (): boolean => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    // Fallback to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
};

const isDarkMode = ref(getInitialDarkMode());

// Save dark mode preference to localStorage
watch(isDarkMode, (newValue) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('darkMode', JSON.stringify(newValue));
  }
}, { immediate: true });

// Apply dark mode class to document on mount
onMounted(() => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

// Watch for changes and apply to document
watch(isDarkMode, (newValue) => {
  if (newValue) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

// Toggle function
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};
</script>