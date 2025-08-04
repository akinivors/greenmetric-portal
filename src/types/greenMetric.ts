// Based on the GreenMetricDTO from the backend

export interface SettingAndInfrastructureStats {
  openSpaceToTotalAreaRatio: number | null;
  forestVegetationToTotalAreaRatio: number | null;
  plantedVegetationToTotalAreaRatio: number | null;
  waterAbsorptionToTotalAreaRatio: number | null;
  campusPopulation: number | null;
  sustainabilityBudgetPercentage: number | null;
}

export interface EnergyAndClimateChangeStats {
  energyEfficientAppliancesUsage: number | null;
  renewableEnergyProductionRatio: number | null;
  carbonFootprintPerPerson: number | null;
}

export interface TransportationStats {
  groundParkingToTotalAreaRatio: number | null;
  initiativesToDecreasePrivateVehicles: number | null;
}

export interface EducationAndResearchStats {
  sustainabilityCoursesRatio: number | null;
  sustainabilityResearchFundingRatio: number | null;
  sustainabilityPublications: number | null;
  sustainabilityEvents: number | null;
  studentSustainabilityActivities: number | null;
  culturalActivities: number | null;
  internationalCollaborationPrograms: number | null;
  communityServicePrograms: number | null;
  sustainabilityStartups: number | null;
  greenJobsGraduatesRatio: number | null;
}

// Main DTO Structure
export interface GreenMetricData {
  settingAndInfrastructure: SettingAndInfrastructureStats;
  energyAndClimateChange: EnergyAndClimateChangeStats;
  transportation: TransportationStats;
  educationAndResearch: EducationAndResearchStats;
  // Note: Waste and Water are handled by a different API endpoint in the demo backend,
  // but for our new portal, let's assume they will be added here later.
}