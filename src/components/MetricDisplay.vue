<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
    <div class="grid md:grid-cols-2 gap-6 items-center">
      
      <div class="text-center md:text-left">
        <p class="text-base font-semibold text-gray-600 dark:text-gray-300">{{ item.label }}</p>
        <div class="flex items-baseline justify-center md:justify-start gap-x-2 mt-1">
          <p class="text-4xl font-bold text-green-600 dark:text-green-400">
            <AnimatedNumber :value="item.value" :decimal-places="item.decimalPlaces" />
          </p>
          <p v-if="item.unit" class="text-xl font-medium text-gray-500 dark:text-gray-400">
            {{ item.unit }}
          </p>
        </div>
      </div>

      <div class="text-center md:text-left">
        <p class="text-base text-gray-500 dark:text-gray-400">
          {{ item.description }}
        </p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import AnimatedNumber from './AnimatedNumber.vue';
import type { SummaryItem } from '../types/dashboard';

defineProps<{ item: SummaryItem }>();
</script>