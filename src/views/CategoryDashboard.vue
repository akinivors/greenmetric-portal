<template>
  <div v-if="isLoading" class="text-center p-10">Loading...</div>
  <div v-else-if="error" class="text-center p-10 text-red-500">Error: {{ error }}</div>
  
  <div v-else class="space-y-8">
    <div class="flex justify-between items-center">
      <router-link to="/" class="text-green-500 hover:underline">&larr; Back to Categories</router-link>
      <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">
        {{ categoryConfig?.title || 'Dashboard' }}
      </h1>
      <div class="w-24"></div>
    </div>
    
    <DashboardControls 
      v-if="categoryConfig?.allowedPeriods?.length" 
      v-model:selectedPeriod="selectedPeriod" 
      :allowed-periods="categoryConfig.allowedPeriods" 
    />

    <component 
      :is="dashboardComponent"
      v-bind="dashboardProps"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, shallowRef } from 'vue';
import { useRoute } from 'vue-router';
import { api } from '../api/greenMetricService';
import { DashboardService } from '../services/dashboardService';
import { ChartService } from '../services/chartService';
import { DASHBOARD_CONFIG } from '../config/dashboardConfig';
import DashboardControls from '../components/DashboardControls.vue';
import type { CategoryConfig } from '../types/dashboard';
import type { GreenMetricData } from '../types/greenMetric';

// Import dashboard components
import StaticDashboard from '../components/dashboards/StaticDashboard.vue';
import ChartDashboard from '../components/dashboards/ChartDashboard.vue';
import ConsumptionDashboard from '../components/dashboards/ConsumptionDashboard.vue';
import WasteDashboard from '../components/dashboards/WasteDashboard.vue';
import TransportationDashboard from '../components/dashboards/TransportationDashboard.vue';

const props = defineProps<{ categoryName: string }>();
const route = useRoute();

// Reactive state
const responseData = ref<{ dynamicData: any; staticData: GreenMetricData } | null>(null);
const isLoading = ref(true);
const error = ref<string | null>(null);
const selectedPeriod = ref<string>('last_year');
const dashboardComponent = shallowRef<any>(null);

// Computed properties
const categoryConfig = computed((): CategoryConfig | null => {
  return DASHBOARD_CONFIG[props.categoryName] || null;
});

const summaryItems = computed(() => {
  if (!responseData.value || !categoryConfig.value) return [];
  return DashboardService.getSummaryItems(
    categoryConfig.value.id,
    responseData.value.dynamicData,
    responseData.value.staticData
  );
});

const chartOptions = computed(() => {
  if (!responseData.value?.dynamicData || !categoryConfig.value) return {};
  
  const yAxisUnit = ChartService.getYAxisUnit(categoryConfig.value.id);
  const labels = responseData.value.dynamicData?.graphData?.labels || [];
  
  return ChartService.createChartOptions(categoryConfig.value.id, yAxisUnit, labels);
});

const chartSeries = computed(() => {
  if (!responseData.value?.dynamicData || !categoryConfig.value) return [];
  return ChartService.createChartSeries(
    categoryConfig.value.id,
    responseData.value.dynamicData?.graphData?.series
  );
});

const pieChartOptions = computed(() => {
  return ChartService.createPieChartOptions();
});

const pieChartSeries = computed(() => {
  if (!responseData.value?.dynamicData) return [];
  return ChartService.createPieChartSeries(responseData.value.dynamicData.summary);
});

// ** NEW COMPUTED PROPERTY **
const parkingRatioItem = computed(() => {
    if (props.categoryName === 'transportation' && responseData.value?.staticData) {
        const trStats = responseData.value.staticData.transportation;
        return {
            label: 'Parking Area Ratio',
            value: trStats?.groundParkingToTotalAreaRatio || 0,
            unit: '%',
            description: 'The percentage of the total campus area allocated to ground parking. A lower ratio is desirable as it indicates more space for green areas and facilities.'
        };
    }
    return null;
});

// ** NEW COMPUTED PROPERTY **
const enrichmentData = computed(() => {
  switch (props.categoryName) {
    case 'setting-infrastructure':
      return {
        title: 'Campus Programs & Facilities',
        items: [
          {
            title: 'Accessibility & Care Facilities',
            description: 'Our campus is equipped with facilities for disabled persons, special needs, and maternity care, including accessible restrooms, lactation rooms, and transportation, ensuring an inclusive environment for all.'
          },
          {
            title: 'Advanced Safety & Security',
            description: 'We ensure a secure campus with comprehensive infrastructure including CCTV, emergency hotlines, certified security personnel, and fully equipped fire safety systems, with a rapid response time for any incidents.'
          },
          {
            title: 'Comprehensive Health Services',
            description: 'Student and staff well-being is supported by on-campus health infrastructure, including a clinic, emergency services, and certified medical personnel available to all.'
          },
          {
            title: 'Biodiversity Conservation Programs',
            description: 'We actively run conservation programs for local flora and fauna, securing genetic resources and protecting our natural environment. Over 60% of our conservation plan has been implemented.'
          }
        ]
      };
    
    // ** NEW CASE ADDED **
    case 'waste':
      return {
        title: 'Waste Management Programs',
        items: [
          {
            title: 'Reduce, Reuse, Recycle (3R) Program',
            description: 'Our university has a comprehensive program to encourage staff and students to reduce waste, reuse materials, and recycle. Over 75% of our 3R initiatives have been implemented.'
          },
          {
            title: 'Advanced Sewage Treatment',
            description: 'All sewage on campus is treated using a tertiary treatment system, ensuring the water is purified to a high standard before being discharged, protecting our local waterways.'
          }
        ]
      };
    
    // ** NEW CASE ADDED **
    case 'transportation':
      const trStats = responseData.value?.staticData?.transportation;
      return {
        title: 'Green Transportation Initiatives',
        items: [
          {
            title: 'Programs to Decrease Private Vehicles',
            description: `The university runs ${trStats?.initiativesToDecreasePrivateVehicles || 0} major initiatives to encourage the use of public and green transport, such as car-free days and promoting bike-sharing services.`
          }
        ]
      };
    
    case 'education-research':
      return {
        title: 'Sustainability Education & Research Excellence',
        items: [
          {
            title: 'Comprehensive Sustainability Curriculum',
            description: 'Our academic programs integrate sustainability principles across all disciplines, with dedicated courses in environmental science, renewable energy, and sustainable development practices.'
          },
          {
            title: 'Research Innovation Programs',
            description: 'We maintain active research initiatives in sustainability technologies, climate change adaptation, and environmental conservation, with dedicated funding and state-of-the-art facilities.'
          },
          {
            title: 'Community Engagement & Outreach',
            description: 'Our sustainability programs extend beyond campus through community workshops, public lectures, and collaborative projects with local organizations to promote environmental awareness.'
          },
          {
            title: 'Professional Development & Certification',
            description: 'We offer specialized training programs and certifications in green technologies, sustainable business practices, and environmental management for students and professionals.'
          }
        ]
      };
    
    // We will add cases for other categories here in the future
    default:
      return null;
  }
});

const dashboardProps = computed(() => {
  const baseProps = { summaryItems: summaryItems.value };
  
  if (!categoryConfig.value) return baseProps;
  
  switch (categoryConfig.value.component) {
    case 'StaticDashboard':
      return {
        ...baseProps,
        enrichmentData: enrichmentData.value
      };
    case 'ConsumptionDashboard':
      return {
        ...baseProps,
        chartOptions: chartOptions.value,
        chartSeries: chartSeries.value
      };
    case 'WasteDashboard':
      return {
        ...baseProps,
        chartOptions: chartOptions.value,
        chartSeries: chartSeries.value,
        enrichmentData: enrichmentData.value
      };
    case 'ChartDashboard':
      return {
        ...baseProps,
        chartOptions: chartOptions.value,
        chartSeries: chartSeries.value
      };
    case 'TransportationDashboard':
      return {
        ...baseProps,
        pieChartOptions: pieChartOptions.value,
        pieChartSeries: pieChartSeries.value,
        parkingRatioItem: parkingRatioItem.value,
        enrichmentData: enrichmentData.value
      };
    default:
      return baseProps;
  }
});

// Component selection logic
watch(() => props.categoryName, (newCategory) => {
  const config = DASHBOARD_CONFIG[newCategory];
  if (!config) {
    dashboardComponent.value = null;
    return;
  }

  switch (config.component) {
    case 'StaticDashboard':
      dashboardComponent.value = StaticDashboard;
      break;
    case 'ConsumptionDashboard':
      dashboardComponent.value = ConsumptionDashboard;
      break;
    case 'WasteDashboard':
      dashboardComponent.value = WasteDashboard;
      break;
    case 'ChartDashboard':
      dashboardComponent.value = ChartDashboard;
      break;
    case 'TransportationDashboard':
      dashboardComponent.value = TransportationDashboard;
      break;
    default:
      dashboardComponent.value = null;
  }
}, { immediate: true });

// Data fetching
const fetchData = async () => {
  if (!categoryConfig.value) return;
  
  isLoading.value = true;
  error.value = null;
  responseData.value = null;
  
  try {
    const promises: Promise<any>[] = [];
    
    // Fetch dynamic data if needed
    if (categoryConfig.value.hasDynamicData && categoryConfig.value.apiCategory) {
      promises.push(api.getStats(categoryConfig.value.apiCategory, selectedPeriod.value));
    } else {
      promises.push(Promise.resolve(null));
    }
    
    // Fetch static data if needed
    if (categoryConfig.value.hasStaticData) {
      promises.push(api.getGreenMetricStats());
    } else {
      promises.push(Promise.resolve(null));
    }
    
    const [dynamicResult, staticResult] = await Promise.all(promises);
    responseData.value = { 
      dynamicData: dynamicResult, 
      staticData: staticResult 
    };
    
  } catch (e: any) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

// Watchers
watch(selectedPeriod, fetchData);

watch(() => route.params.categoryName, () => {
  if (route.params.categoryName && categoryConfig.value) {
    // Reset period if it's not allowed in the new category  
    if (!categoryConfig.value.allowedPeriods.includes(selectedPeriod.value)) {
      selectedPeriod.value = categoryConfig.value.allowedPeriods[0] || 'last_year';
    }
    fetchData();
  }
}, { immediate: true });
</script>