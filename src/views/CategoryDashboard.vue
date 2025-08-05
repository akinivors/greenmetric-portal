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

// ** NEW COMPUTED PROPERTY for Profile Data **
const profileData = computed(() => {
    if (props.categoryName !== 'setting-infrastructure' || !responseData.value?.staticData) return null;
    const siData = responseData.value.staticData.settingAndInfrastructure;
    return {
        institutionType: siData?.institutionType || 'N/A',
        climateZone: siData?.climateZone || 'N/A',
        campusSetting: siData?.campusSetting || 'N/A',
        numOfCampusSites: siData?.numOfCampusSites || 0
    };
});

// ** RENAME and UPDATE this computed property for the MetricDisplay grid **
const metricDisplayItems = computed(() => {
    if (!responseData.value?.staticData) return [];
    const staticData = responseData.value.staticData;
    
    switch (props.categoryName) {
        case 'setting-infrastructure':
            const siStats = staticData.settingAndInfrastructure;
            if (!siStats) return [];
            return [
                { 
                  label: 'Campus Population', 
                  value: siStats.campusPopulation || 0, 
                  unit: 'people',
                  description: 'The total number of students and staff on campus, used as a baseline for per-capita sustainability metrics.'
                },
                { 
                  label: 'Open Space Ratio', 
                  value: siStats.openSpaceToTotalAreaRatio || 0, 
                  unit: '%',
                  description: 'The percentage of campus area that is open space, encouraging more green spaces and safeguarding the environment.'
                },
                { 
                  label: 'Forest Vegetation', 
                  value: siStats.forestVegetationToTotalAreaRatio || 0, 
                  unit: '%',
                  description: 'The percentage of campus area covered in forest vegetation, vital for biodiversity and carbon sequestration.'
                },
                { 
                  label: 'Planted Vegetation', 
                  value: siStats.plantedVegetationToTotalAreaRatio || 0, 
                  unit: '%',
                  description: 'The percentage of campus area covered in planted vegetation like lawns and gardens.'
                },
                { 
                  label: 'Water Absorption', 
                  value: siStats.waterAbsorptionToTotalAreaRatio || 0, 
                  unit: '%',
                  description: 'The percentage of campus area dedicated to water absorption, such as soil and permeable surfaces.'
                },
                { 
                  label: 'Sustainability Budget', 
                  value: siStats.sustainabilityBudgetPercentage || 0, 
                  unit: '%', 
                  decimalPlaces: 1,
                  description: 'The percentage of the total university budget allocated to sustainability efforts, reflecting institutional commitment.'
                }
            ];
        default:
            return [];
    }
});

// ** UPDATE EnrichmentData with the new 'details' field **
const enrichmentData = computed(() => {
  switch (props.categoryName) {
    case 'setting-infrastructure':
      return {
        title: 'Campus Programs & Facilities',
        items: [
          {
            title: 'Accessibility & Care Facilities',
            description: 'Ensuring an inclusive environment for all.',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>',
            details: 'Our campus is equipped with facilities for disabled persons, special needs, and maternity care, including accessible restrooms, lactation rooms, and transportation. We are committed to providing an inclusive environment that supports every member of our community.'
          },
          {
            title: 'Advanced Safety & Security',
            description: 'Comprehensive infrastructure for a secure campus.',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>',
            details: 'We ensure a secure campus with comprehensive infrastructure including CCTV, emergency hotlines, certified security personnel, and fully equipped fire safety systems, with a rapid response time for any incidents.'
          },
          {
            title: 'Biodiversity Conservation Programs',
            description: 'Actively protecting our natural environment.',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
            details: 'We actively run conservation programs for local flora and fauna, securing genetic resources and protecting our natural environment. Over 60% of our conservation plan has been implemented.'
          },
          {
            title: 'ICT for Infrastructure',
            description: 'Leveraging technology for sustainability.',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
            details: 'Our campus utilizes Information and Communication Technology (ICT) for the planning, implementation, and monitoring of our infrastructure, ensuring efficiency and sustainability.'
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
            description: 'Our university has a comprehensive program to encourage staff and students to reduce waste, reuse materials, and recycle.',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>',
            details: 'Our university has a comprehensive program to encourage staff and students to reduce waste, reuse materials, and recycle. Over 75% of our 3R initiatives have been implemented, including campus-wide recycling bins, waste reduction education programs, and partnerships with local recycling facilities.'
          },
          {
            title: 'Advanced Sewage Treatment',
            description: 'All sewage on campus is treated using a tertiary treatment system.',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>',
            details: 'All sewage on campus is treated using a tertiary treatment system, ensuring the water is purified to a high standard before being discharged, protecting our local waterways. This advanced treatment process removes over 95% of contaminants and supports our commitment to environmental stewardship.'
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
            description: `The university runs ${trStats?.initiativesToDecreasePrivateVehicles || 0} major initiatives to encourage the use of public and green transport.`,
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
            details: `The university runs ${trStats?.initiativesToDecreasePrivateVehicles || 0} major initiatives to encourage the use of public and green transport, such as car-free days, promoting bike-sharing services, electric shuttle buses, and partnerships with public transportation systems to provide discounted passes for students and staff.`
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
        profileData: profileData.value,
        metricItems: metricDisplayItems.value,
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