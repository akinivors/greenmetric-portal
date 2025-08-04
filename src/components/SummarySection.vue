<template>
  <div class="summary-section">
    <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-6 text-center">
      Summary
    </h2>
    <div v-if="items && items.length" class="flex flex-wrap justify-center gap-6 sm:gap-12">
      <div v-for="item in items" :key="item.label" 
           class="bg-white dark:bg-gray-800 w-40 h-40 sm:w-44 sm:h-44 rounded-full shadow-lg border-4 border-green-400 dark:border-green-500 flex flex-col items-center justify-center text-center p-4 transition-transform transform hover:scale-105">
        <p class="text-sm text-gray-500 dark:text-gray-400">{{ item.label }}</p>
        <p class="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">
          <AnimatedNumber :value="item.value" :decimal-places="item.decimalPlaces" />
          <span v-if="item.unit" class="text-lg font-normal text-gray-500 dark:text-gray-500">{{ item.unit }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AnimatedNumber from './AnimatedNumber.vue';
// ** UPDATED PROP DEFINITION **
interface SummaryItem {
  label: string;
  value: number;
  unit: string;
  decimalPlaces?: number; // <-- NEW OPTIONAL PROPERTY
}
defineProps<{ items: SummaryItem[] }>();
</script>