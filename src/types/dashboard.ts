// Shared dashboard types
export interface SummaryItem {
  label: string;
  value: number;
  unit: string;
  description?: string;
  decimalPlaces?: number;
}

export interface ChartSeries {
  name: string;
  data: (number | { x: any; y: any })[];
}

export interface DashboardData {
  summaryItems: SummaryItem[];
  chartOptions?: any;
  chartSeries?: ChartSeries[];
  pieChartOptions?: any;
  pieChartSeries?: number[];
}

export interface EnrichmentItem {
  title: string;
  description: string;
  icon: string;
  details: string;
}

export interface EnrichmentData {
  title: string;
  items: EnrichmentItem[];
}

export interface CategoryConfig {
  id: string;
  title: string;
  component: string;
  allowedPeriods: string[];
  hasStaticData: boolean;
  hasDynamicData: boolean;
  apiCategory?: string;
}