<template>
  <div class="enrichment-section mt-12">
    <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
      {{ title }}
    </h2>
    <div :class="getGridClasses(items.length)" class="gap-6">
      <div v-for="item in items" :key="item.title" 
           @click="handleItemClick(item)"
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
import type { EnrichmentItem } from '../types/dashboard';

defineProps<{
  title: string;
  items: EnrichmentItem[];
}>();

const emit = defineEmits(['item-click']);

const handleItemClick = (item: EnrichmentItem) => {
  emit('item-click', item);
};

// Smart grid layout based on number of items
const getGridClasses = (itemCount: number): string => {
  if (itemCount <= 2) {
    // 1-2 items: 2 columns max (perfect for water dashboard)
    return 'grid grid-cols-1 md:grid-cols-2';
  } else if (itemCount <= 4) {
    // 3-4 items: 2 columns (comfortable for most content)
    return 'grid grid-cols-1 md:grid-cols-2';
  } else {
    // 5+ items: 3 columns on large screens (perfect for energy dashboard's 6 items)
    return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  }
};
</script>