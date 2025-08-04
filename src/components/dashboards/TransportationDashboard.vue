<template>
  <div class="space-y-8">
    <SummarySection :items="summaryItems" />

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      
      <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <h2 class="text-xl font-semibold text-center text-gray-700 dark:text-gray-200 mb-4">
          Vehicle Proportions
        </h2>
        <VueApexCharts type="pie" height="350" :options="pieChartOptions" :series="pieChartSeries"></VueApexCharts>
      </div>

      <div class="space-y-8">
        <MetricDisplay v-if="parkingRatioItem" :item="parkingRatioItem" />
        <EnrichmentSection v-if="enrichmentData" :title="enrichmentData.title" :items="enrichmentData.items" />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import SummarySection from '../SummarySection.vue';
import MetricDisplay from '../MetricDisplay.vue';
import EnrichmentSection from '../EnrichmentSection.vue';
import VueApexCharts from 'vue3-apexcharts';
import type { SummaryItem, EnrichmentData } from '../../types/dashboard';
import type { ApexOptions } from 'apexcharts';

// Define all props the component will receive from the parent
defineProps<{
  summaryItems: SummaryItem[];
  pieChartOptions: ApexOptions;
  pieChartSeries: number[];
  parkingRatioItem: SummaryItem | null;
  enrichmentData: EnrichmentData | null;
}>();
</script>