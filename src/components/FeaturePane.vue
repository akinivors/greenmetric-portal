<template>
  <div class="flex items-start space-x-4">
    <div class="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
      <div class="w-7 h-7 text-green-600 dark:text-green-400" v-html="icon"></div>
    </div>
    <div>
      <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ title }}</h4>
      <p class="mt-1 text-gray-600 dark:text-gray-400">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>
