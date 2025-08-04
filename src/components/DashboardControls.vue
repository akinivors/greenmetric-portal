<template>
  <div class="flex justify-center items-center space-x-4 mb-6">
    <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Time Period:</label>
    <select 
      :value="selectedPeriod" 
      @change="$emit('update:selectedPeriod', ($event.target as HTMLSelectElement).value)"
      class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      <option v-for="period in allowedPeriods" :key="period" :value="period">
        {{ formatPeriodLabel(period) }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  selectedPeriod: string;
  allowedPeriods: string[];
}>();

defineEmits<{
  'update:selectedPeriod': [value: string];
}>();

const formatPeriodLabel = (period: string): string => {
  const labels: Record<string, string> = {
    'last_week': 'Last Week',
    'last_month': 'Last Month',
    'last_3_months': 'Last 3 Months',
    'last_year': 'Last Year'
  };
  return labels[period] || period;
};
</script>