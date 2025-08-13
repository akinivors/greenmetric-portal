<template>
  <div class="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
    <h1 class="text-6xl font-extrabold text-green-600 dark:text-green-400">{{ headline }}</h1>
    <h2 class="mt-2 text-3xl font-bold text-gray-800 dark:text-gray-100">{{ subheadline }}</h2>
    <p class="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  headline: string;
  subheadline: string;
  description: string;
}>();
</script>
