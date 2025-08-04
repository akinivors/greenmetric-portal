<template>
  <div class="space-y-6">
    <MetricDisplay 
      v-for="item in summaryItems" 
      :key="item.label" 
      :item="item" 
    />
    
    <EnrichmentSection 
      v-if="enrichmentData && enrichmentData.items.length"
      :title="enrichmentData.title"
      :items="enrichmentData.items"
    />
  </div>
</template>

<script setup lang="ts">
import MetricDisplay from '../MetricDisplay.vue';
import EnrichmentSection from '../EnrichmentSection.vue';
import type { SummaryItem, EnrichmentData } from '../../types/dashboard';

defineProps<{
  summaryItems: SummaryItem[];
  enrichmentData?: EnrichmentData;
}>();
</script>