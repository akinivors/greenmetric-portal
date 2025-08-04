<template>
  <div v-if="isLoading" class="text-center p-10">Loading...</div>
  <div v-else-if="error" class="text-center p-10 text-red-500">Error: {{ error }}</div>
  
  <div v-else-if="summaryItems.length" class="space-y-8">
    <div class="flex justify-between items-center">
      <router-link to="/" class="text-green-500 hover:underline">&larr; Back to Categories</router-link>
      <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100">{{ categoryTitle }}</h1>
      <div class="w-24"></div>
    </div>
    
    <DashboardControls v-model:selectedPeriod="selectedPeriod" :allowed-periods="allowedPeriods" />

    <SummarySection :items="summaryItems" />

    <GraphSection v-if="props.categoryName !== 'transportation'" :chart-options="chartOptions" :chart-series="chartSeries" />

    <div v-if="props.categoryName === 'transportation'" class="graph-section mt-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 class="text-xl font-semibold text-center text-gray-700 dark:text-gray-200 mb-4">
          Vehicle Proportions
        </h2>
        <VueApexCharts type="pie" height="350" :options="pieChartOptions" :series="pieChartSeries"></VueApexCharts>
    </div>
  </div>

  <div v-else class="text-center p-10 text-gray-500">This dashboard is not yet implemented.</div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { api } from '../api/greenMetricService';
import SummarySection from '../components/SummarySection.vue';
import GraphSection from '../components/GraphSection.vue';
import DashboardControls from '../components/DashboardControls.vue';
import VueApexCharts from 'vue3-apexcharts';
import type { ApexOptions } from 'apexcharts';

const props = defineProps<{ categoryName: string }>();
const route = useRoute();

const responseData = ref<any>(null);
const isLoading = ref(true);
const error = ref<string | null>(null);
const selectedPeriod = ref('last_year');

const categoryTitle = computed(() => {
    if (props.categoryName === 'energy-climate-change') return 'Energy & Climate Change';
    if (props.categoryName === 'water') return 'Water Usage';
    return props.categoryName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
});

const allowedPeriods = computed(() => {
  switch (props.categoryName) {
    case 'energy-climate-change':
    case 'water':
      return ['last_year'];
    case 'waste':
    case 'transportation':
      return ['last_week', 'last_month', 'last_year'];
    default:
      return ['last_year'];
  }
});

const summaryItems = computed(() => {
    if (!responseData.value) return [];
    const { dynamicData, staticData } = responseData.value;
    
    switch (props.categoryName) {
        case 'waste':
            return [
                { label: 'Total Organic Waste', value: dynamicData?.summary?.totalOrganicWasteKg || 0, unit: 'kg' },
                { label: 'Total Inorganic Waste', value: dynamicData?.summary?.totalInorganicWasteKg || 0, unit: 'kg' },
                { label: 'Total Toxic Waste', value: dynamicData?.summary?.totalToxicWasteKg || 0, unit: 'kg' }
            ];
        case 'transportation':
            return [
                { label: 'Total Private Vehicles', value: dynamicData?.summary?.totalPrivateVehicle || 0, unit: 'entries' },
                { label: 'Total Public Transport', value: dynamicData?.summary?.totalPublicTransport || 0, unit: 'entries' },
                { label: 'Total Motorcycles', value: dynamicData?.summary?.totalMotorcycle || 0, unit: 'entries' },
                { label: 'Parking Area Ratio', value: staticData?.transportation?.groundParkingToTotalAreaRatio || 0, unit: '%' }
            ];
        case 'energy-climate-change':
            const ecStats = staticData?.energyAndClimateChange;
            return [
                { label: 'Renewable Energy Ratio', value: ecStats?.renewableEnergyProductionRatio || 0, unit: '%' },
                { label: 'Carbon Footprint', value: ecStats?.carbonFootprintPerPerson || 0, unit: 'tons/person', decimalPlaces: 2 },
                { label: 'Energy Efficient Appliances', value: ecStats?.energyEfficientAppliancesUsage || 0, unit: '%' }
            ];
        case 'water':
            const waterStats = staticData?.water;
            return [
                { label: 'Total Water Consumed', value: dynamicData?.summary?.totalWaterTon || 0, unit: 'Tons' },
                { label: 'Water Conservation', value: waterStats?.waterConservationPercentage || 0, unit: '%' },
                { label: 'Efficient Appliances', value: waterStats?.waterEfficientAppliancePercentage || 0, unit: '%' }
            ];
        default:
            return [];
    }
});

const chartSeries = computed(() => {
    const series = responseData.value?.dynamicData?.graphData?.series;
    if (!series) return [];
    switch (props.categoryName) {
        case 'waste':
            return [
                { name: 'Organic Waste (kg)', data: series.organicWaste || [] },
                { name: 'Inorganic Waste (kg)', data: series.inorganicWaste || [] }
            ];
        case 'energy-climate-change':
            return [{ name: 'Electricity (kWh)', data: series.electricityKwh || [] }];
        case 'water':
            return [{ name: 'Water (Tons)', data: series.waterTon || [] }];
        default:
            return [];
    }
});

const pieChartSeries = computed(() => {
    const summary = responseData.value?.dynamicData?.summary;
    if (props.categoryName === 'transportation' && summary) {
        return [
            summary.totalPrivateVehicle || 0,
            summary.totalPublicTransport || 0,
            summary.totalZev || 0,
            summary.totalMotorcycle || 0
        ];
    }
    return [];
});

const chartOptions = computed((): ApexOptions => {
  let yAxisUnit = '';
  let colors: string[] = [];
  let legendShow = true;

  switch(props.categoryName) {
    case 'waste':
        yAxisUnit = 'kg';
        colors = ['#10B981', '#3B82F6'];
        break;
    case 'energy-climate-change':
        yAxisUnit = 'kWh';
        colors = ['#F59E0B']; // Amber
        legendShow = false;
        break;
    case 'water':
        yAxisUnit = 'Tons';
        colors = ['#3B82F6']; // Blue
        legendShow = false;
        break;
  }

  return {
    chart: { type: 'bar', height: 350, toolbar: { show: false }, background: 'transparent' },
    plotOptions: { bar: { horizontal: false, columnWidth: '60%', borderRadius: 8 } },
    dataLabels: { enabled: false },
    xaxis: { categories: responseData.value?.dynamicData?.graphData?.labels || [], labels: { style: { colors: '#9ca3af' } } },
    yaxis: { labels: { style: { colors: '#9ca3af' }, formatter: (val) => `${Math.round(val).toLocaleString()} ${yAxisUnit}` } },
    colors: colors,
    legend: { show: legendShow, labels: { colors: '#9ca3af' } },
    grid: { borderColor: '#4b5563' },
    tooltip: { theme: 'dark', y: { formatter: (val) => val.toLocaleString() } }
  };
});

const pieChartOptions = computed((): ApexOptions => {
  return {
    chart: { type: 'pie', height: 350, background: 'transparent' },
    labels: ['Private Vehicles', 'Public Transport', 'ZEVs', 'Motorcycles'],
    colors: ['#3B82F6', '#10B981', '#F59E0B', '#6366F1'],
    legend: { position: 'bottom', labels: { colors: '#9ca3af' } },
    tooltip: { theme: 'dark', y: { formatter: (val) => val.toLocaleString() } }
  };
});

const fetchData = async () => {
    isLoading.value = true;
    error.value = null;
    try {
        const dynamicCategories = {
            'waste': 'waste',
            'transportation': 'vehicles',
            'energy-climate-change': 'consumption',
            'water': 'consumption'
        } as Record<string, string>;
        
        const staticCategories = ['transportation', 'energy-climate-change', 'water'];
        const apiCategory = dynamicCategories[props.categoryName];

        let dynamicData = null;
        let staticData = null;

        if (apiCategory) {
            dynamicData = await api.getStats(apiCategory, selectedPeriod.value);
        }
        if (staticCategories.includes(props.categoryName)) {
            staticData = await api.getGreenMetricStats();
        }

        responseData.value = { dynamicData, staticData };
    } catch (e: any) {
        error.value = e.message;
    } finally {
        isLoading.value = false;
    }
};

watch(selectedPeriod, fetchData);

watch(() => route.params.categoryName, () => {
    if (route.params.categoryName) {
        fetchData();
    }
}, { immediate: true });

onMounted(fetchData);

</script>