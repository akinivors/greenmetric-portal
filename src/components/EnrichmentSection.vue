<template>
  <div class="enrichment-section mt-12">
    <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
      {{ title }}
    </h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div v-for="item in items" :key="item.title" 
           @click="$emit('item-click', item)"
           class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex items-start space-x-4 transition-all hover:shadow-xl hover:scale-105 cursor-pointer">
        <div class="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400" v-html="item.icon">
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-50">{{ item.title }}</h3>
          <p class="mt-1 text-gray-600 dark:text-gray-400">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface EnrichmentItem {
  title: string;
  description: string;
  icon: string;
  details: string; // Add a new field for the detailed modal content
}
defineProps<{
  title: string;
  items: EnrichmentItem[];
}>();
defineEmits(['item-click']);
</script>