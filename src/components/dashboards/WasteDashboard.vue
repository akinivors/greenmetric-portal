<template>
  <div class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
        Summary ({{ period }})
      </h2>
      <SummarySection :items="summaryItems" @item-click="handleSummaryClick" />
    </div>

    <GraphSection 
      :title="`Detailed Breakdown (${period})`"
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
import SummarySection from '../SummarySection.vue';
import GraphSection from '../GraphSection.vue';
import EnrichmentSection from '../EnrichmentSection.vue';
import Modal from '../Modal.vue';
import type { ApexOptions } from 'apexcharts';
import type { SummaryItem, EnrichmentData, EnrichmentItem } from '../../types/dashboard';

const props = defineProps<{
  summaryItems: SummaryItem[];
  chartOptions: ApexOptions;
  chartSeries: any[];
  enrichmentData: EnrichmentData | null;
  period: string; // New prop to display the selected period
  detailedSummary: any; // New prop for detailed summary data
}>();

defineEmits(['item-click']);

// Modal state management
const isModalVisible = ref(false);
const modalContent = ref({ title: '', content: '' });

const handleSummaryClick = (item: SummaryItem) => {
  const details = props.detailedSummary;
  let content = 'No detailed data available.';

  if (item.label.includes('Organic')) {
    content = `Total Produced: ${details.totalOrganicProductionKg?.toFixed(2) || 0} kg\n` +
              `Total Consumed: ${details.totalOrganicConsumptionKg?.toFixed(2) || 0} kg\n` +
              `Total Treated: ${details.totalOrganicTreatedKg?.toFixed(2) || 0} kg`;
  } else if (item.label.includes('Inorganic')) {
    content = `Total Produced: ${details.totalInorganicProductionKg?.toFixed(2) || 0} kg\n` +
              `Total Consumed: ${details.totalInorganicConsumptionKg?.toFixed(2) || 0} kg\n` +
              `Total Recycled: ${details.totalInorganicRecycledKg?.toFixed(2) || 0} kg`;
  } else if (item.label.includes('Toxic')) {
    content = `Total Produced: ${details.totalToxicWasteKg?.toFixed(2) || 0} kg\n` +
              `Total Treated: ${details.totalTreatedToxicWasteKg?.toFixed(2) || 0} kg`;
  } else if (item.label.includes('Sewage')) {
    content = `Total Sewage Disposed: ${details.totalSewageDisposalLiters?.toFixed(2) || 0} L\n` +
              `Treatment Status: Professional sewage management system`;
  }

  modalContent.value = {
    title: `Detailed Summary for ${item.label}`,
    content: content
  };
  isModalVisible.value = true;
};

const handleEnrichmentClick = (item: EnrichmentItem) => {
  modalContent.value = {
    title: item.title,
    content: item.details
  };
  isModalVisible.value = true;
};
</script>