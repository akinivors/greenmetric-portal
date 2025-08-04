<template>
  <div class="space-y-8">
    <SummarySection :items="summaryItems" />

    <GraphSection :chart-options="chartOptions" :chart-series="chartSeries" />

    <EnrichmentSection 
      v-if="enrichmentData"
      :title="enrichmentData.title" 
      :items="enrichmentData.items" 
    />
  </div>
</template>

<script setup lang="ts">
import SummarySection from '../SummarySection.vue';
import GraphSection from '../GraphSection.vue';
import EnrichmentSection from '../EnrichmentSection.vue';
import type { SummaryItem, EnrichmentData } from '../../types/dashboard';
import type { ApexOptions } from 'apexcharts';

// Define all props the component will receive from the parent
defineProps<{
  summaryItems: SummaryItem[];
  chartOptions: ApexOptions;
  chartSeries: any[];
  enrichmentData: EnrichmentData | null;
}>();
</script>