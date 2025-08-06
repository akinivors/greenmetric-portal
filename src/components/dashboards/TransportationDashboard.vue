<template>
  <div class="space-y-8">
    <MetricDisplay v-if="vehicleRatioItem" :item="vehicleRatioItem" />
    <SummarySection :items="summaryItems" />

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-8">
      
      <div class="lg:col-span-3 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col justify-center">
        <h2 class="text-xl font-semibold text-center text-gray-700 dark:text-gray-200 mb-4">
          Vehicle Proportions
        </h2>
        <VueApexCharts type="pie" height="350" :options="pieChartOptions" :series="pieChartSeries"></VueApexCharts>
      </div>

      <div class="lg:col-span-2 space-y-8">
        <MetricDisplay v-if="parkingRatioItem" :item="parkingRatioItem" />
      </div>

    </div>
    
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
import SummarySection from '../SummarySection.vue';
import MetricDisplay from '../MetricDisplay.vue';
import EnrichmentSection from '../EnrichmentSection.vue';
import VueApexCharts from 'vue3-apexcharts';
import Modal from '../Modal.vue';
import type { SummaryItem, EnrichmentData, EnrichmentItem } from '../../types/dashboard';
import type { ApexOptions } from 'apexcharts';

defineProps<{
  vehicleRatioItem: SummaryItem | null;
  summaryItems: SummaryItem[];
  pieChartOptions: ApexOptions;
  pieChartSeries: number[];
  parkingRatioItem: SummaryItem | null;
  enrichmentData: EnrichmentData | null;
}>();

// Modal state management
const isModalVisible = ref(false);
const modalContent = ref({ title: '', content: '' });

const handleEnrichmentClick = (item: EnrichmentItem) => {
  modalContent.value.title = item.title;
  modalContent.value.content = item.details;
  isModalVisible.value = true;
};
</script>