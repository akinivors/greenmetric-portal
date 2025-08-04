<template>
  <div class="enrichment-section mt-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
    <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
      {{ title }}
    </h2>
    <div class="space-y-6">
      <div v-for="item in items" :key="item.title" class="flex items-start space-x-4">
        <div class="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ item.title }}</h3>
          <p class="mt-1 text-base text-gray-500 dark:text-gray-400">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EnrichmentItem } from '../types/dashboard';

defineProps<{
  title: string;
  items: EnrichmentItem[];
}>();
</script>