<template>
  <div v-if="show" @click.self="$emit('close')" class="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 transition-opacity duration-300">
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col">
      <div class="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100">{{ title }}</h2>
        <button @click="$emit('close')" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <div class="p-6 overflow-y-auto">
        <p class="text-base text-gray-600 dark:text-gray-300 whitespace-pre-wrap">{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean;
  title: string;
  content: string;
}>();
defineEmits(['close']);
</script>