import type { CategoryConfig } from '../types/dashboard';

// Centralized dashboard configuration
export const DASHBOARD_CONFIG: Record<string, CategoryConfig> = {
  'waste': {
    id: 'waste',
    title: 'Waste Management',
    component: 'WasteDashboard',
    allowedPeriods: ['last_week', 'last_month', 'last_year'],
    hasStaticData: false,
    hasDynamicData: true,
    apiCategory: 'waste'
  },
  'transportation': {
    id: 'transportation',
    title: 'Transportation',
    component: 'TransportationDashboard',
    allowedPeriods: ['last_week', 'last_month', 'last_year'],
    hasStaticData: true,
    hasDynamicData: true,
    apiCategory: 'vehicles'
  },
  'energy-climate-change': {
    id: 'energy-climate-change',
    title: 'Energy & Climate Change',
    component: 'ConsumptionDashboard',
    allowedPeriods: ['last_year'],
    hasStaticData: true,
    hasDynamicData: true,
    apiCategory: 'consumption'
  },
  'water': {
    id: 'water',
    title: 'Water Usage',
    component: 'ConsumptionDashboard',
    allowedPeriods: ['last_year'],
    hasStaticData: true,
    hasDynamicData: true,
    apiCategory: 'consumption'
  },
  'setting-infrastructure': {
    id: 'setting-infrastructure',
    title: 'Setting & Infrastructure',
    component: 'StaticDashboard',
    allowedPeriods: [],
    hasStaticData: true,
    hasDynamicData: false
  },
  'education-research': {
    id: 'education-research',
    title: 'Education & Research',
    component: 'StaticDashboard',
    allowedPeriods: [],
    hasStaticData: true,
    hasDynamicData: false
  }
};

export const CHART_COLORS = {
  waste: ['#10B981', '#3B82F6'],
  energy: ['#F59E0B'],
  water: ['#3B82F6'],
  transportation: ['#3B82F6', '#10B981', '#F59E0B', '#6366F1']
};

export const DEFAULT_CHART_OPTIONS = {
  chart: { 
    type: 'bar', 
    height: 350, 
    toolbar: { show: false }, 
    background: 'transparent' 
  },
  plotOptions: { 
    bar: { 
      horizontal: false, 
      columnWidth: '60%', 
      borderRadius: 8 
    } 
  },
  dataLabels: { enabled: false },
  grid: { borderColor: '#4b5563' },
  tooltip: { theme: 'dark' }
};