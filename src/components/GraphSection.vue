<template>
  <div class="graph-section mt-8 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
    <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
      Detailed Breakdown
    </h2>
    <VueApexCharts type="bar" height="350" :options="chartOptions" :series="chartSeries"></VueApexCharts>
  </div>
</template>

<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts';
import type { ApexOptions } from 'apexcharts';

defineProps<{
  chartOptions: ApexOptions;
  chartSeries: { name: string; data: number[] }[];
}>();
</script>