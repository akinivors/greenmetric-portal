import type { SummaryItem } from '../types/dashboard';
import type { GreenMetricData } from '../types/greenMetric';

export class DashboardService {
  
  static createWasteSummary(dynamicData: any): SummaryItem[] {
    return [
      { 
        label: 'Total Organic Waste', 
        value: dynamicData?.summary?.totalOrganicProductionKg || 0, 
        unit: 'kg' 
      },
      { 
        label: 'Total Inorganic Waste', 
        value: dynamicData?.summary?.totalInorganicProductionKg || 0, 
        unit: 'kg' 
      },
      { 
        label: 'Total Toxic Waste', 
        value: dynamicData?.summary?.totalToxicWasteKg || 0, 
        unit: 'kg' 
      },
      { 
        label: 'Total Sewage Disposal', 
        value: dynamicData?.summary?.totalSewageDisposalLiters || 0, 
        unit: 'L' 
      }
    ];
  }

  static createTransportationSummary(dynamicData: any): SummaryItem[] {
    return [
      { 
        label: 'Private Vehicles', 
        value: dynamicData?.summary?.totalPrivateVehicle || 0, 
        unit: 'entries' 
      },
      { 
        label: 'Public Transport', 
        value: dynamicData?.summary?.totalPublicTransport || 0, 
        unit: 'entries' 
      },
      { 
        label: 'Motorcycles', 
        value: dynamicData?.summary?.totalMotorcycle || 0, 
        unit: 'entries' 
      },
      { 
        label: 'ZEVs', 
        value: dynamicData?.summary?.totalZev || 0, 
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
        label: 'Energy Efficient Appliances', 
        value: ecStats?.energyEfficientAppliancesUsage || 0, 
        unit: '%',
        description: 'The percentage of campus appliances that are certified as energy-efficient.'
      },
      { 
        label: 'Smart Building Ratio', 
        value: ecStats?.smartBuildingRatio || 0, 
        unit: '%', 
        decimalPlaces: 1,
        description: 'The percentage of campus buildings equipped with smart energy management systems.'
      }
    ];
  }

  static createWaterSummary(staticData: GreenMetricData): SummaryItem[] {
    const waterStats = staticData?.water;
    return [
      { 
        label: 'Water Conservation', 
        value: waterStats?.waterConservationPercentage || 0, 
        unit: '%',
        description: 'The percentage of water saved through campus-wide conservation programs and initiatives.'
      },
      { 
        label: 'Water Efficient Appliances', 
        value: waterStats?.waterEfficientAppliancePercentage || 0, 
        unit: '%',
        description: 'The percentage of campus water fixtures that are rated as water-efficient and eco-friendly.'
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
        label: 'Courses Ratio', 
        value: erStats?.sustainabilityCoursesRatio || 0, 
        unit: '%',
        description: 'The percentage of courses that include sustainability topics, ensuring students receive comprehensive environmental education.'
      },
      { 
        label: 'Funding Ratio', 
        value: erStats?.sustainabilityResearchFundingRatio || 0, 
        unit: '%',
        description: 'The percentage of total research funding dedicated to sustainability projects, supporting innovation in environmental solutions.'
      },
      { 
        label: 'Publications', 
        value: erStats?.sustainabilityPublications || 0, 
        unit: 'papers',
        description: 'The number of research publications focused on sustainability topics, contributing to global environmental knowledge.'
      },
      { 
        label: 'Events', 
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
        label: 'Green Jobs Ratio', 
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
        return this.createWaterSummary(staticData);
      case 'setting-infrastructure':
        return this.createInfrastructureSummary(staticData);
      case 'education-research':
        return this.createEducationSummary(staticData);
      default:
        return [];
    }
  }

  // New methods for the final implementation
  static getSummaryCircleItems(categoryId: string, dynamicData: any, monthlySummary: any, staticData?: any): SummaryItem[] {
    // Debug: Log summary data (can be removed after testing)
    if (['energy-climate-change', 'water'].includes(categoryId)) {
      console.log(`[DEBUG] ${categoryId} summary data:`, monthlySummary?.summary || dynamicData?.summary);
    }
    
    // For consumption dashboards, since the API seems to return the same data for monthly/yearly,
    // let's use the available data and try all possible field names
    if (categoryId === 'energy-climate-change') {
      // Use whichever data source has actual values
      const dataSource = monthlySummary || dynamicData || {};
      const summary = dataSource.summary || {};
      
      // Try all possible energy-related field names (based on actual API response)
      const possibleValues = [
        summary.totalElectricityKwh,  // THIS IS THE CORRECT FIELD NAME!
        summary.totalEnergyMJ,
        summary.totalEnergy,
        summary.energyConsumption,
        summary.energy,
        summary.totalEnergyConsumed,
        summary.energyUsage,
        summary.totalEnergyUsage,
        summary.total_electricity_kwh,
        summary.total_energy_mj,
        summary.total_energy,
        summary.energy_consumption,
        summary.energy_usage
      ];
      
      let value = possibleValues.find(v => v != null && v > 0) || 0;
      
      // If dynamic data has no value, try static data as fallback
      if (value === 0 && staticData?.energyAndClimateChange) {
        const ecStats = staticData.energyAndClimateChange;
        value = ecStats.carbonFootprintPerPerson || ecStats.renewableEnergyProductionRatio || 0;
        console.log(`[DEBUG] Energy - Using static data fallback:`, value);
      }
      
      console.log(`[DEBUG] Energy - totalElectricityKwh found:`, summary.totalElectricityKwh, `Final value:`, value);
      
      return [{
        label: value === 0 ? 'Energy Data' : 'Electricity Consumption',
        value: value,
        unit: 'kWh',
        description: 'Total electricity consumed across campus.'
      }];
    }
    
    if (categoryId === 'water') {
      // Use whichever data source has actual values
      const dataSource = monthlySummary || dynamicData || {};
      const summary = dataSource.summary || {};
      
      // Try all possible water-related field names
      const possibleValues = [
        summary.totalWaterTon,
        summary.totalWater,
        summary.waterConsumption,
        summary.water,
        summary.totalWaterConsumed,
        summary.waterUsage,
        summary.totalWaterUsage,
        summary.total_water_ton,
        summary.total_water,
        summary.water_consumption,
        summary.water_usage
      ];
      
      let value = possibleValues.find(v => v != null && v > 0) || 0;
      
      // If dynamic data has no value, try static data as fallback
      if (value === 0 && staticData?.water) {
        const waterStats = staticData.water;
        value = waterStats.waterConservationPercentage || waterStats.waterEfficientAppliancePercentage || 0;
        console.log(`[DEBUG] Water - Using static data fallback:`, value);
      }
      
      console.log(`[DEBUG] Water - totalWaterTon found:`, summary.totalWaterTon, `Final value:`, value);
      
      return [{
        label: value === 0 ? 'Water Data' : 'Water Consumption',
        value: value,
        unit: value > 0 ? 'Tons' : 'Tons',
        description: 'Water consumption data from campus systems.'
      }];
    }
    
    // For other dashboards, use dynamic data (multiple circles)
    return this.getSummaryItems(categoryId, dynamicData, null as any);
  }

  static getMetricDisplayItems(categoryId: string, staticData: any): SummaryItem[] {
    if (!staticData) return [];
    switch (categoryId) {
      case 'setting-infrastructure':
        return this.createInfrastructureSummary(staticData);
      case 'energy-climate-change':
        return this.createEnergySummary(staticData);
      case 'water':
        return this.createWaterSummary(staticData);
      case 'education-research':
        return this.createEducationSummary(staticData);
      default:
        return [];
    }
  }

  static getEnrichmentData(categoryId: string, staticData?: any): any {
    switch (categoryId) {
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
      case 'energy-climate-change':
        return {
          title: 'Energy & Climate Programs',
          items: [
            {
              title: 'GHG Reduction Program',
              description: 'Programs to reduce all three scopes of greenhouse gas emissions.',
              icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>',
              details: 'Our university has a formal, comprehensive program that aims to reduce emissions across all three scopes: Scope 1 (direct emissions from sources like boilers), Scope 2 (indirect emissions from purchased electricity), and Scope 3 (other indirect emissions like commuting and waste disposal).'
            },
            {
              title: 'Climate Change Action',
              description: 'Impactful programs for climate change mitigation and adaptation.',
              icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
              details: 'We provide training, educational materials, and conferences on climate change risks, impacts, and adaptation. Our initiatives are implemented in partnership with communities at a national level to ensure wide-reaching impact.'
            },
            {
              title: 'Innovation in Energy',
              description: 'Highlighting university-developed solutions for energy and climate challenges.',
              icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>',
              details: 'The university has developed multiple innovative programs in-house, including a Smart Indoor Health and Comfort System and new approaches to climate change mitigation, demonstrating our commitment to research and development.'
            },
            {
              title: 'Green Building Features',
              description: 'Implementation of sustainable building elements across campus.',
              icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>',
              details: 'Many of our buildings incorporate key green building elements, such as natural ventilation, full natural daylighting, and the use of Green Building Index certified designs to reduce energy consumption and improve indoor environmental quality.'
            },
            {
              title: 'Renewable Energy Sources',
              description: 'The number and types of renewable energy sources on campus.',
              icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
              details: 'Our campus utilizes multiple renewable energy sources, including solar power, clean biomass, and geothermal systems, to power our facilities and reduce our reliance on fossil fuels.'
            },
            {
              title: 'ICT for Energy Management',
              description: 'Using technology to monitor and improve energy efficiency.',
              icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
              details: 'All programs related to energy and climate change are planned, implemented, and evaluated using Information and Communication Technology (ICT), including a central dashboard for monitoring consumption data.'
            }
          ]
        };
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
      case 'water':
        return {
          title: 'Water Conservation Programs',
          items: [
            {
              title: 'Water Pollution Control',
              description: 'Policies and programs to prevent water pollution are fully implemented.',
              icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
              details: 'Our campus water pollution control programs are fully implemented and are monitored regularly to prevent contaminated water from entering the local water system. This includes managing stormwater runoff and treating wastewater from laboratories before discharge.'
            },
            {
              title: 'ICT for Water Management',
              description: 'Using technology to manage water resources efficiently.',
              icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
              details: 'All programs related to water management on campus are planned, implemented, monitored, and evaluated through the utilization of Information and Communication Technology (ICT), allowing for real-time tracking and efficient resource allocation.'
            }
          ]
        };
      case 'transportation':
        const trStats = staticData?.transportation;
        return {
          title: 'Transportation Programs & Policies',
          items: [
            {
              title: 'Campus Shuttle Service',
              description: 'Free, regular shuttle services are provided for on-campus travel.',
              details: 'The university provides regular, free shuttle services for all students and staff. Our fleet consists of 15 shuttles, with an average of 30 passengers per trip, running over 150 trips daily to ensure convenient on-campus travel.',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`
            },
            {
              title: 'Parking Reduction Program',
              description: 'Ongoing programs to limit and decrease parking area on campus.',
              details: 'To encourage greener travel, the university has a formal program to reduce the total parking area on campus. Over the last three years, we have successfully decreased parking space by more than 10%, converting these areas into green spaces and pedestrian walkways.',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>`
            },
            {
              title: 'Pedestrian-Friendly Campus',
              description: 'Safe and convenient pedestrian paths are available throughout campus.',
              details: 'Our campus features an extensive network of pedestrian paths designed for safety with ample lighting, convenience with covered walkways, and full accessibility with disabled-friendly ramps and guiding blocks.',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`
            },
            {
              title: 'Initiatives to Decrease Private Vehicles',
              description: `The university runs ${trStats?.initiativesToDecreasePrivateVehicles || 0} major initiatives to encourage green transport.`,
              details: `We actively promote greener travel through multiple initiatives, including designated car-free days, a campus-wide bike-sharing program, and partnerships for subsidized public transport fares for students and staff.`,
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
            },
            {
              title: 'ICT for Transportation',
              description: 'Using technology to create a smart and efficient campus transit system.',
              details: 'Our transportation programs are planned, monitored, and evaluated using Information and Communication Technology (ICT), including a real-time shuttle tracking app and smart parking solutions.',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`
            }
          ]
        };
      case 'education-research':
        return {
          title: 'Sustainability Education & Research Excellence',
          items: [
            {
              title: 'Comprehensive Sustainability Curriculum',
              description: 'Our academic programs integrate sustainability principles across all disciplines.',
              details: 'Our academic programs integrate sustainability principles across all disciplines, with dedicated courses in environmental science, renewable energy, and sustainable development practices.',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>`
            },
            {
              title: 'Research Innovation Programs',
              description: 'We maintain active research initiatives in sustainability technologies.',
              details: 'We maintain active research initiatives in sustainability technologies, climate change adaptation, and environmental conservation, with dedicated funding and state-of-the-art facilities.',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>`
            },
            {
              title: 'Community Engagement & Outreach',
              description: 'Our sustainability programs extend beyond campus through community workshops.',
              details: 'Our sustainability programs extend beyond campus through community workshops, public lectures, and collaborative projects with local organizations to promote environmental awareness.',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`
            },
            {
              title: 'Professional Development & Certification',
              description: 'We offer specialized training programs in green technologies.',
              details: 'We offer specialized training programs and certifications in green technologies, sustainable business practices, and environmental management for students and professionals.',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>`
            }
          ]
        };
      default:
        return null;
    }
  }

  static getProfileData(staticData: any): any {
    if (!staticData?.settingAndInfrastructure) return null;
    const siData = staticData.settingAndInfrastructure;
    return {
      institutionType: siData.institutionType || 'N/A',
      climateZone: siData.climateZone || 'N/A', 
      campusSetting: siData.campusSetting || 'N/A',
      numOfCampusSites: siData.numOfCampusSites || 0
    };
  }

  static getParkingRatioItem(staticData: any): any {
    if (!staticData?.transportation) return null;
    const trStats = staticData.transportation;
    return {
      label: 'Parking Area Ratio',
      value: trStats.groundParkingToTotalAreaRatio || 0,
      unit: '%',
      description: 'The percentage of the total campus area allocated to ground parking. A lower ratio is desirable as it indicates more space for green areas and facilities.'
    };
  }

  static getVehicleRatioItem(staticData: any, dynamicData: any): any {
    if (!staticData?.settingAndInfrastructure || !dynamicData?.summary) return null;
    
    const population = staticData.settingAndInfrastructure.campusPopulation || 1;
    const totalVehicles = (dynamicData.summary.totalPrivateVehicle || 0) + 
                          (dynamicData.summary.totalMotorcycle || 0);
    const ratio = totalVehicles / population;

    return {
      label: 'Vehicle to Population Ratio',
      value: ratio,
      unit: 'vehicles/person',
      decimalPlaces: 2,
      description: 'The ratio of total cars and motorcycles on campus to the total campus population. A lower number indicates less reliance on private vehicles.'
    };
  }
}