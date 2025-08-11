import { API_BASE_URL } from '../config/environment';

// Add types for the dynamic data
interface GraphDataPoint {
  date?: string;
  month?: string;
  [key: string]: any;
}

interface TransformedGraphData {
  labels: string[];
  series: { [key: string]: number[] };
}

const transformGraphData = (rawGraphData: GraphDataPoint[]): TransformedGraphData => {
    if (!rawGraphData || rawGraphData.length === 0) {
        return { labels: [], series: {} };
    }
    const transformed: TransformedGraphData = { labels: [], series: {} };
    const seriesKeys = Object.keys(rawGraphData[0]).filter(key => key !== 'date' && key !== 'month');
    seriesKeys.forEach(key => { transformed.series[key] = []; });

    for (const dataPoint of rawGraphData) {
        transformed.labels.push(dataPoint.date || dataPoint.month || '');
        seriesKeys.forEach(key => {
            transformed.series[key].push(dataPoint[key] || 0);
        });
    }
    return transformed;
};

export const api = {
  // New function for dynamic stats (waste, vehicles, consumption)
  getStats: async (category: string, period: string): Promise<any> => {
    const url = `${API_BASE_URL}/statistics?category=${category}&period=${period}`;
    console.log(`Fetching statistics from ${url}`);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
      const rawData = await response.json();
      const transformedGraph = transformGraphData(rawData.graphData);
      return {
        summary: rawData.summary,
        graphData: transformedGraph,
      };
    } catch (error) {
      console.error(`API Fetch Error for ${category}:`, error);
      throw error;
    }
  },
  
  // Existing function for static metrics
  getGreenMetricStats: async (): Promise<any> => {
    const url = `${API_BASE_URL}/green-metric`;
    console.log(`Fetching all GreenMetric stats from ${url}`);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
      return await response.json();
    } catch (error) {
      console.error("API Fetch Error for GreenMetric stats:", error);
      throw error;
    }
  }
};