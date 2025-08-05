<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
    <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4 text-center">Campus Profile</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">Institution Type</p>
        <p class="text-lg font-bold text-green-600 dark:text-green-400">{{ profile.institutionType }}</p>
      </div>
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">Climate Zone</p>
        <p class="text-lg font-bold text-green-600 dark:text-green-400">{{ profile.climateZone }}</p>
      </div>
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">Campus Setting</p>
        <p class="text-lg font-bold text-green-600 dark:text-green-400">{{ profile.campusSetting }}</p>
      </div>
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">Number of Sites</p>
        <p class="text-lg font-bold text-green-600 dark:text-green-400">{{ profile.numOfCampusSites }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ProfileData {
  institutionType: string;
  climateZone: string;
  campusSetting: string;
  numOfCampusSites: number;
}
defineProps<{ profile: ProfileData }>();
</script>