import type { ApexOptions } from 'apexcharts';
import { CHART_COLORS, DEFAULT_CHART_OPTIONS } from '../config/dashboardConfig';
import type { ChartSeries } from '../types/dashboard';

export class ChartService {
  
  static createChartOptions(
    categoryId: string, 
    yAxisUnit: string, 
    labels: string[] = []
  ): ApexOptions {
    const colors = this.getChartColors(categoryId);
    const legendShow = colors.length > 1;

    return {
      ...DEFAULT_CHART_OPTIONS,
      chart: { 
        ...DEFAULT_CHART_OPTIONS.chart,
        type: 'bar' as const
      },
      xaxis: { 
        categories: labels, 
        labels: { style: { colors: '#9ca3af' } } 
      },
      yaxis: { 
        labels: { 
          style: { colors: '#9ca3af' }, 
          formatter: (val) => `${Math.round(val).toLocaleString()} ${yAxisUnit}` 
        } 
      },
      colors: colors,
      legend: { show: legendShow, labels: { colors: '#9ca3af' } },
      tooltip: { 
        theme: 'dark', 
        y: { formatter: (val) => val.toLocaleString() } 
      }
    };
  }

  static createPieChartOptions(): ApexOptions {
    return {
      chart: { type: 'pie', height: 350, background: 'transparent' },
      labels: ['Private Vehicles', 'Public Transport', 'ZEVs', 'Motorcycles'],
      colors: CHART_COLORS.transportation,
      legend: { position: 'bottom', labels: { colors: '#9ca3af' } },
      tooltip: { theme: 'dark', y: { formatter: (val) => val.toLocaleString() } }
    };
  }

  static createChartSeries(categoryId: string, seriesData: any): ChartSeries[] {
    if (!seriesData) return [];
    
    switch (categoryId) {
      case 'waste':
        return [
          { name: 'Organic Waste (kg)', data: seriesData.organicWaste || [] },
          { name: 'Inorganic Waste (kg)', data: seriesData.inorganicWaste || [] }
        ];
      case 'energy-climate-change':
        return [{ name: 'Electricity (kWh)', data: seriesData.electricityKwh || [] }];
      case 'water':
        return [{ name: 'Water (Tons)', data: seriesData.waterTon || [] }];
      default:
        return [];
    }
  }

  static createPieChartSeries(summary: any): number[] {
    if (!summary) return [];
    return [
      summary.totalPrivateVehicle || 0,
      summary.totalPublicTransport || 0,
      summary.totalZev || 0,
      summary.totalMotorcycle || 0
    ];
  }

  private static getChartColors(categoryId: string): string[] {
    switch (categoryId) {
      case 'waste':
        return CHART_COLORS.waste;
      case 'energy-climate-change':
        return CHART_COLORS.energy;
      case 'water':
        return CHART_COLORS.water;
      default:
        return CHART_COLORS.waste;
    }
  }

  static getYAxisUnit(categoryId: string): string {
    switch (categoryId) {
      case 'waste':
        return 'kg';
      case 'energy-climate-change':
        return 'kWh';
      case 'water':
        return 'Tons';
      default:
        return '';
    }
  }
}