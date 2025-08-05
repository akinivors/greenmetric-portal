<template>
  <div class="space-y-8">
    <CampusProfile v-if="profileData" :profile="profileData" />
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <MetricDisplay 
        v-for="item in metricItems" 
        :key="item.label" 
        :item="item" 
      />
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
import CampusProfile from '../CampusProfile.vue';
import MetricDisplay from '../MetricDisplay.vue';
import EnrichmentSection from '../EnrichmentSection.vue';
import Modal from '../Modal.vue';

interface MetricItem {
  label: string;
  value: number;
  unit: string;
  description: string;
  decimalPlaces?: number;
}
interface EnrichmentItem {
  title: string;
  description: string;
  icon: string;
  details: string;
}
interface EnrichmentData {
  title: string;
  items: EnrichmentItem[];
}
interface ProfileData {
  institutionType: string;
  climateZone: string;
  campusSetting: string;
  numOfCampusSites: number;
}

defineProps<{
  profileData: ProfileData | null;
  metricItems: MetricItem[];
  enrichmentData: EnrichmentData | null;
}>();

const isModalVisible = ref(false);
const modalContent = ref({ title: '', content: '' });

const handleEnrichmentClick = (item: EnrichmentItem) => {
  modalContent.value.title = item.title;
  modalContent.value.content = item.details;
  isModalVisible.value = true;
};
</script>