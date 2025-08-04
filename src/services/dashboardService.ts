import type { SummaryItem } from '../types/dashboard';
import type { GreenMetricData } from '../types/greenMetric';

export class DashboardService {
  
  static createWasteSummary(dynamicData: any): SummaryItem[] {
    return [
      { 
        label: 'Total Organic Waste', 
        value: dynamicData?.summary?.totalOrganicWasteKg || 0, 
        unit: 'kg' 
      },
      { 
        label: 'Total Inorganic Waste', 
        value: dynamicData?.summary?.totalInorganicWasteKg || 0, 
        unit: 'kg' 
      },
      { 
        label: 'Total Toxic Waste', 
        value: dynamicData?.summary?.totalToxicWasteKg || 0, 
        unit: 'kg' 
      }
    ];
  }

  static createTransportationSummary(dynamicData: any): SummaryItem[] {
    return [
      { 
        label: 'Total Private Vehicles', 
        value: dynamicData?.summary?.totalPrivateVehicle || 0, 
        unit: 'entries' 
      },
      { 
        label: 'Total Public Transport', 
        value: dynamicData?.summary?.totalPublicTransport || 0, 
        unit: 'entries' 
      },
      { 
        label: 'Total Motorcycles', 
        value: dynamicData?.summary?.totalMotorcycle || 0, 
        unit: 'entries' 
      }
    ];
  }

  static createEnergySummary(staticData: GreenMetricData): SummaryItem[] {
    const ecStats = staticData?.energyAndClimateChange;
    return [
      { 
        label: 'Renewable Energy Ratio', 
        value: ecStats?.renewableEnergyProductionRatio || 0, 
        unit: '%', 
        decimalPlaces: 1,
        description: 'The percentage of total campus energy usage that is produced from renewable sources.'
      },
      { 
        label: 'Carbon Footprint', 
        value: ecStats?.carbonFootprintPerPerson || 0, 
        unit: 'tons/p', 
        decimalPlaces: 2,
        description: 'The total carbon footprint of the university divided by the total campus population.'
      },
      { 
        label: 'Efficient Appliances', 
        value: ecStats?.energyEfficientAppliancesUsage || 0, 
        unit: '%',
        description: 'The percentage of campus appliances that are certified as energy-efficient.'
      }
    ];
  }

  static createWaterSummary(dynamicData: any, staticData: GreenMetricData): SummaryItem[] {
    const waterStats = staticData?.water;
    return [
      { 
        label: 'Total Water Consumed', 
        value: dynamicData?.summary?.totalWaterTon || 0, 
        unit: 'Tons',
        description: 'The total amount of water consumed across campus during the selected period.'
      },
      { 
        label: 'Water Conservation', 
        value: waterStats?.waterConservationPercentage || 0, 
        unit: '%',
        description: 'The percentage of water saved through campus-wide conservation programs.'
      },
      { 
        label: 'Efficient Appliances', 
        value: waterStats?.waterEfficientAppliancePercentage || 0, 
        unit: '%',
        description: 'The percentage of campus water fixtures that are rated as water-efficient.'
      }
    ];
  }

  static createInfrastructureSummary(staticData: GreenMetricData): SummaryItem[] {
    const siStats = staticData?.settingAndInfrastructure;
    return [
        { 
          label: 'Campus Population', 
          value: siStats?.campusPopulation || 0, 
          unit: 'people',
          description: 'The total number of students and staff. This is used as a baseline for many per-capita sustainability metrics.'
        },
        { 
          label: 'Open Space Ratio', 
          value: siStats?.openSpaceToTotalAreaRatio || 0, 
          unit: '%',
          description: 'The percentage of campus area that is open space, encouraging more green spaces and safeguarding the environment.'
        },
        { 
          label: 'Forest Vegetation', 
          value: siStats?.forestVegetationToTotalAreaRatio || 0, 
          unit: '%',
          description: 'The percentage of campus area covered in forest vegetation, which is vital for biodiversity and carbon sequestration.'
        },
        { 
          label: 'Planted Vegetation', 
          value: siStats?.plantedVegetationToTotalAreaRatio || 0, 
          unit: '%',
          description: 'The percentage of campus area covered in planted vegetation, contributing to air quality and campus aesthetics.'
        },
        { 
          label: 'Water Absorption', 
          value: siStats?.waterAbsorptionToTotalAreaRatio || 0, 
          unit: '%',
          description: 'The percentage of campus area that absorbs water instead of creating runoff, improving drainage and reducing flood risks.'
        },
        { 
          label: 'Sustainability Budget', 
          value: siStats?.sustainabilityBudgetPercentage || 0, 
          unit: '%', 
          decimalPlaces: 1,
          description: 'The percentage of the total university budget allocated to sustainability efforts, reflecting institutional commitment.'
        }
    ];
  }

  static createEducationSummary(staticData: GreenMetricData): SummaryItem[] {
    const erStats = staticData?.educationAndResearch;
    return [
      { 
        label: 'Sustainability Courses Ratio', 
        value: erStats?.sustainabilityCoursesRatio || 0, 
        unit: '%',
        description: 'The percentage of courses that include sustainability topics, ensuring students receive comprehensive environmental education.'
      },
      { 
        label: 'Research Funding Ratio', 
        value: erStats?.sustainabilityResearchFundingRatio || 0, 
        unit: '%',
        description: 'The percentage of total research funding dedicated to sustainability projects, supporting innovation in environmental solutions.'
      },
      { 
        label: 'Sustainability Publications', 
        value: erStats?.sustainabilityPublications || 0, 
        unit: 'papers',
        description: 'The number of research publications focused on sustainability topics, contributing to global environmental knowledge.'
      },
      { 
        label: 'Sustainability Events', 
        value: erStats?.sustainabilityEvents || 0, 
        unit: 'events',
        description: 'The total number of sustainability-focused events organized annually, promoting environmental awareness in the community.'
      },
      { 
        label: 'Student Activities', 
        value: erStats?.studentSustainabilityActivities || 0, 
        unit: 'activities',
        description: 'The number of student-led sustainability activities and organizations, fostering environmental leadership among students.'
      },
      { 
        label: 'Green Jobs Graduates Ratio', 
        value: erStats?.greenJobsGraduatesRatio || 0, 
        unit: '%', 
        decimalPlaces: 1,
        description: 'The percentage of graduates who find employment in sustainability-related fields, measuring our impact on the green economy.'
      }
    ];
  }

  static getSummaryItems(
    categoryId: string, 
    dynamicData: any, 
    staticData: GreenMetricData
  ): SummaryItem[] {
    switch (categoryId) {
      case 'waste':
        return this.createWasteSummary(dynamicData);
      case 'transportation':
        return this.createTransportationSummary(dynamicData);
      case 'energy-climate-change':
        return this.createEnergySummary(staticData);
      case 'water':
        return this.createWaterSummary(dynamicData, staticData);
      case 'setting-infrastructure':
        return this.createInfrastructureSummary(staticData);
      case 'education-research':
        return this.createEducationSummary(staticData);
      default:
        return [];
    }
  }
}