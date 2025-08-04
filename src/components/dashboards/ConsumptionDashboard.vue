<template>
  <div class="space-y-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <MetricDisplay 
        v-for="item in summaryItems" 
        :key="item.label" 
        :item="item" 
      />
    </div>

    <GraphSection :chart-options="chartOptions" :chart-series="chartSeries" />
  </div>
</template>

<script setup lang="ts">
import MetricDisplay from '../MetricDisplay.vue';
import GraphSection from '../GraphSection.vue';
import type { SummaryItem } from '../../types/dashboard';
import type { ApexOptions } from 'apexcharts';

// Define all props the component will receive
defineProps<{
  summaryItems: SummaryItem[];
  chartOptions: ApexOptions;
  chartSeries: any[];
}>();
</script>