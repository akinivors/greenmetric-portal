<template>
  <div class="space-y-8">
    <SummarySection :items="summaryItems" />
    <GraphSection :chart-options="chartOptions" :chart-series="chartSeries" />
  </div>
</template>

<script setup lang="ts">
import SummarySection from '../SummarySection.vue';
import GraphSection from '../GraphSection.vue';
import type { SummaryItem } from '../../types/dashboard';
import type { ApexOptions } from 'apexcharts';

defineProps<{
  summaryItems: SummaryItem[];
  chartOptions: ApexOptions;
  chartSeries: any[];
}>();
</script>