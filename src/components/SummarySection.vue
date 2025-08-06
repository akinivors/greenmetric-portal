<template>
  <div class="summary-section">
    <div v-if="items && items.length" class="flex flex-wrap justify-center gap-6 sm:gap-12">
      <div v-for="item in items" :key="item.label" 
           @click="$emit('item-click', item)"
           class="bg-white dark:bg-gray-800 w-40 h-40 sm:w-44 sm:h-44 rounded-full shadow-lg border-4 border-green-400 dark:border-green-500 flex flex-col items-center justify-center text-center p-4 transition-transform transform hover:scale-105 overflow-hidden cursor-pointer">
        <p class="text-sm text-gray-500 dark:text-gray-400 truncate w-full">{{ item.label }}</p>
        <div class="flex flex-col items-center mt-2">
          <p class="text-3xl font-bold text-green-600 dark:text-green-400 leading-tight">
            <AnimatedNumber :value="item.value" :decimal-places="item.decimalPlaces" />
          </p>
          <p v-if="item.unit" class="text-lg font-normal text-gray-500 dark:text-gray-500 truncate">
            {{ item.unit }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AnimatedNumber from './AnimatedNumber.vue';
import type { SummaryItem } from '../types/dashboard';

defineProps<{ items: SummaryItem[] }>();
defineEmits(['item-click']);
</script>