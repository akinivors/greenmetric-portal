<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center transition-transform transform hover:-translate-y-1">
    <div class="flex items-baseline justify-center gap-x-2">
      <span class="text-6xl font-extrabold text-green-600 dark:text-green-400">{{ value }}</span>
      <span class="text-2xl font-medium text-gray-400 dark:text-gray-500">{{ unit }}</span>
    </div>
    <p class="mt-2 text-xl font-semibold text-gray-800 dark:text-gray-100">{{ label }}</p>
    <p v-if="analogy" class="mt-2 text-base text-gray-500 dark:text-gray-400">{{ analogy }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string;
  unit: string;
  label: string;
  analogy?: string;
}>();
</script>
