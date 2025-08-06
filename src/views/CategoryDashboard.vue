<template>
  <div v-if="isLoading" class="text-center p-10">Loading...</div>
  <div v-else-if="error" class="text-center p-10 text-red-500">Error: {{ error }}</div>
  
  <div v-else class="space-y-8">
    <div class="flex justify-between items-center">
      <router-link to="/" class="text-green-500 hover:underline">&larr; Back to Categories</router-link>
      <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">
        {{ categoryTitle }}
      </h1>
      <div class="w-24"></div>
    </div>
    
    <DashboardControls 
      v-if="allowedPeriods.length" 
      v-model:selectedPeriod="selectedPeriod" 
      :allowed-periods="allowedPeriods" 
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
import { DASHBOARD_CONFIG } from '../config/dashboardConfig';
import type { CategoryConfig, SummaryItem, EnrichmentData } from '../types/dashboard';
import StaticDashboard from '../components/dashboards/StaticDashboard.vue';
import WasteDashboard from '../components/dashboards/WasteDashboard.vue';
import TransportationDashboard from '../components/dashboards/TransportationDashboard.vue';
import ConsumptionDashboard from '../components/dashboards/ConsumptionDashboard.vue';
import DashboardControls from '../components/DashboardControls.vue';
import { DashboardService } from '../services/dashboardService';
import { ChartService } from '../services/chartService';
import type { ApexOptions } from 'apexcharts';

const props = defineProps<{ categoryName: string }>();
const route = useRoute();

const responseData = ref<any>({
    dynamicData: null,
    monthlySummary: null,
    yearlyTrend: null,
    staticData: null
});
const isLoading = ref(true);
const error = ref<string | null>(null);
const selectedPeriod = ref('last_month');
const dashboardComponent = shallowRef<any>(null);

const categoryConfig = computed((): CategoryConfig | null => DASHBOARD_CONFIG[props.categoryName] || null);
const categoryTitle = computed(() => categoryConfig.value?.title || 'Dashboard');
const allowedPeriods = computed(() => categoryConfig.value?.allowedPeriods || []);

watch(() => props.categoryName, (newCategory) => {
    const config = DASHBOARD_CONFIG[newCategory];
    if (!config) { dashboardComponent.value = null; return; }
    switch (config.component) {
        case 'StaticDashboard': dashboardComponent.value = StaticDashboard; break;
        case 'WasteDashboard': dashboardComponent.value = WasteDashboard; break;
        case 'TransportationDashboard': dashboardComponent.value = TransportationDashboard; break;
        case 'ConsumptionDashboard': dashboardComponent.value = ConsumptionDashboard; break;
        default: dashboardComponent.value = null;
    }
}, { immediate: true });

const summaryCircleItems = computed((): SummaryItem[] => {
    if (!categoryConfig.value) return [];
    return DashboardService.getSummaryCircleItems(
        categoryConfig.value.id,
        responseData.value.dynamicData,
        responseData.value.monthlySummary,
        responseData.value.staticData
    );
});

const metricDisplayItems = computed((): SummaryItem[] => {
    if (!categoryConfig.value) return [];
    return DashboardService.getMetricDisplayItems(
        categoryConfig.value.id,
        responseData.value.staticData
    );
});

const enrichmentData = computed((): EnrichmentData | null => {
    if (!categoryConfig.value) return null;
    return DashboardService.getEnrichmentData(
        categoryConfig.value.id,
        responseData.value.staticData // Pass static data for dynamic text
    );
});

const chartSeries = computed(() => {
    if (!categoryConfig.value) return [];
    const data = ['energy-climate-change', 'water'].includes(categoryConfig.value.id)
        ? responseData.value.yearlyTrend
        : responseData.value.dynamicData;
    return ChartService.createChartSeries(categoryConfig.value.id, data?.graphData?.series);
});

const pieChartSeries = computed(() => {
    return ChartService.createPieChartSeries(responseData.value?.dynamicData?.summary);
});

const chartOptions = computed(() => {
    if (!categoryConfig.value) return {};
    const data = ['energy-climate-change', 'water'].includes(categoryConfig.value.id)
        ? responseData.value.yearlyTrend
        : responseData.value.dynamicData;
    const yAxisUnit = ChartService.getYAxisUnit(categoryConfig.value.id);
    return ChartService.createChartOptions(categoryConfig.value.id, yAxisUnit, data?.graphData?.labels);
});

const pieChartOptions = computed((): ApexOptions => ChartService.createPieChartOptions());

const parkingRatioItem = computed(() => {
    return DashboardService.getParkingRatioItem(responseData.value?.staticData);
});

const vehicleRatioItem = computed(() => {
    if (props.categoryName === 'transportation') {
        return DashboardService.getVehicleRatioItem(
            responseData.value?.staticData,
            responseData.value?.dynamicData
        );
    }
    return null;
});

const dashboardProps = computed(() => {
    if (!categoryConfig.value) return {};
    switch (categoryConfig.value.component) {
        case 'StaticDashboard':
            return {
                profileData: DashboardService.getProfileData(responseData.value.staticData),
                metricItems: metricDisplayItems.value,
                enrichmentData: enrichmentData.value
            };
        case 'WasteDashboard':
            return {
                summaryItems: summaryCircleItems.value,
                chartOptions: chartOptions.value,
                chartSeries: chartSeries.value,
                enrichmentData: enrichmentData.value,
                period: selectedPeriod.value.replace('_', ' '),
                detailedSummary: responseData.value?.dynamicData?.summary
            };
        case 'TransportationDashboard':
            return {
                vehicleRatioItem: vehicleRatioItem.value,
                summaryItems: summaryCircleItems.value,
                pieChartOptions: pieChartOptions.value,
                pieChartSeries: pieChartSeries.value,
                parkingRatioItem: parkingRatioItem.value,
                enrichmentData: enrichmentData.value
            };
        case 'ConsumptionDashboard':
            return {
                summaryCircleItems: summaryCircleItems.value,
                metricDisplayItems: metricDisplayItems.value,
                chartOptions: chartOptions.value,
                chartSeries: chartSeries.value,
                enrichmentData: enrichmentData.value
            };
        default: return {};
    }
});

const fetchData = async () => {
    if (!categoryConfig.value) return;
    isLoading.value = true;
    error.value = null;
    responseData.value = {};
    try {
        const promises: Promise<any>[] = [];
        const isConsumption = ['energy-climate-change', 'water'].includes(categoryConfig.value.id);

        if (categoryConfig.value.hasDynamicData) {
            if (isConsumption) {
                promises.push(api.getStats(categoryConfig.value.apiCategory!, 'last_month'));
                promises.push(api.getStats(categoryConfig.value.apiCategory!, 'last_year'));
            } else {
                promises.push(api.getStats(categoryConfig.value.apiCategory!, selectedPeriod.value));
                promises.push(Promise.resolve(null));
            }
        } else {
            promises.push(Promise.resolve(null), Promise.resolve(null));
        }

        if (categoryConfig.value.hasStaticData) {
            promises.push(api.getGreenMetricStats());
        } else {
            promises.push(Promise.resolve(null));
        }

        const [dynamicOrMonthly, yearly, staticData] = await Promise.all(promises);

        if (isConsumption) {
            console.log(`[DEBUG] Consumption data for ${categoryConfig.value.id}:`, {
                monthly: dynamicOrMonthly,
                yearly: yearly,
                categoryName: categoryConfig.value.id,
                apiCategory: categoryConfig.value.apiCategory
            });
            responseData.value = { monthlySummary: dynamicOrMonthly, yearlyTrend: yearly, staticData };
        } else {
            responseData.value = { dynamicData: dynamicOrMonthly, staticData };
        }
    } catch (e: any) {
        error.value = e.message;
    } finally {
        isLoading.value = false;
    }
};

watch(() => route.params.categoryName, (newName) => {
    if (newName) {
        const config = DASHBOARD_CONFIG[newName as string];
        if (config && !config.allowedPeriods.includes(selectedPeriod.value)) {
            selectedPeriod.value = config.allowedPeriods[0] || 'last_year';
        }
        fetchData();
    }
}, { immediate: true });

watch(selectedPeriod, fetchData);
</script>