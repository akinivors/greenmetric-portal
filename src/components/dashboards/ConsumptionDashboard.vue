<template>
  <div class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
        Key Performance Indicators
      </h2>
      <div :class="getGridClasses(metricDisplayItems.length)" class="gap-6">
        <MetricDisplay 
          v-for="item in metricDisplayItems" 
          :key="item.label" 
          :item="item" 
        />
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
        Last Month's Summary
      </h2>
      <div class="flex justify-center">
        <div v-if="summaryCircleItems.length === 1" 
             class="bg-white dark:bg-gray-800 w-48 h-48 rounded-full shadow-lg border-4 border-green-400 dark:border-green-500 flex flex-col items-center justify-center text-center p-6 transition-transform transform hover:scale-105">
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">{{ summaryCircleItems[0].label }}</p>
          <div class="flex flex-col items-center">
            <p class="text-4xl font-bold text-green-600 dark:text-green-400 leading-tight">
              <AnimatedNumber :value="summaryCircleItems[0].value" :decimal-places="summaryCircleItems[0].decimalPlaces" />
            </p>
            <p v-if="summaryCircleItems[0].unit" class="text-lg font-normal text-gray-500 dark:text-gray-500 mt-1">
              {{ summaryCircleItems[0].unit }}
            </p>
          </div>
        </div>
        <SummarySection v-else :items="summaryCircleItems" />
      </div>
    </div>

    <GraphSection 
      title="Consumption Trend (Last Year)"
      :chart-options="chartOptions" 
      :chart-series="chartSeries" 
    />

    <EnrichmentSection 
      v-if="enrichmentData"
      :title="enrichmentData.title"
      :items="enrichmentData.items"
      @item-click="handleEnrichmentClick"
    />


    <Modal 
      :show="isModalVisible" 
      :title="modalContent.title"
      :content="modalContent.content"
      @close="isModalVisible = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MetricDisplay from '../MetricDisplay.vue';
import SummarySection from '../SummarySection.vue';
import GraphSection from '../GraphSection.vue';
import EnrichmentSection from '../EnrichmentSection.vue';
import AnimatedNumber from '../AnimatedNumber.vue';
import Modal from '../Modal.vue';
import type { ApexOptions } from 'apexcharts';
import type { SummaryItem, EnrichmentData, EnrichmentItem } from '../../types/dashboard';

// Define all props the component will receive
defineProps<{
  metricDisplayItems: SummaryItem[];
  summaryCircleItems: SummaryItem[];
  chartOptions: ApexOptions;
  chartSeries: any[];
  enrichmentData: EnrichmentData | null;
}>();

// Modal state management
const isModalVisible = ref(false);
const modalContent = ref({ title: '', content: '' });

const handleEnrichmentClick = (item: EnrichmentItem) => {
  modalContent.value = {
    title: item.title,
    content: item.details
  };
  isModalVisible.value = true;
};

// Smart grid layout based on number of KPIs
const getGridClasses = (itemCount: number): string => {
  if (itemCount === 2) {
    // Water dashboard: 2 KPIs - center them with reasonable width
    return 'grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto';
  } else if (itemCount === 4) {
    // Energy dashboard: 4 KPIs - always 2x2 grid (2 top, 2 bottom) for better readability
    return 'grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto';
  } else {
    // Fallback for other counts
    return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  }
};
</script>