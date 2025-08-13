<template>
  <div class="space-y-16">
    <HeroSection
      headline="Over 150"
      subheadline="Sustainability Research Papers Published"
      description="Our university is a leading contributor to global environmental knowledge, driving innovation through dedicated research."
    />
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Our Commitment to Sustainability</h2>
      <p class="mt-2 text-lg text-gray-500 dark:text-gray-400">We track our progress across six key areas to ensure a greener future.</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <DynamicCategoryCard
        v-for="category in categories"
        :key="category.name"
        :title="category.title"
        :icon="category.icon"
        :link="category.link"
        :kpiValue="category.kpiValue"
        :kpiLabel="category.kpiLabel"
      />
    </div>
     <InitiativesSection />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HeroSection from '../components/HeroSection.vue';
import DynamicCategoryCard from '../components/DynamicCategoryCard.vue';
import InitiativesSection from '../components/InitiativesSection.vue';

// NOTE: The `kpiValue` here is placeholder static data. In a future task, we will connect this to the API.
const categories = ref([
  { name: 'setting-infrastructure', title: 'Setting & Infrastructure', link: '/dashboard/setting-infrastructure', kpiValue: '35%', kpiLabel: 'Campus Area is Open Space', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>` },
  { name: 'energy-climate-change', title: 'Energy & Climate Change', link: '/energy', kpiValue: '5,000', kpiLabel: 'Tons of CO2 Footprint', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>` },
  { name: 'waste', title: 'Waste Management', link: '/waste', kpiValue: '105', kpiLabel: 'Tons of Waste Recycled (YoY)', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>` },
  { name: 'water', title: 'Water Usage', link: '/story/water', kpiValue: '15%', kpiLabel: 'Campus-Wide Water Conservation', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c1.354 0 2.653-.255 3.84-.717M12 21c-1.354 0-2.653-.255-3.84-.717M12 3c1.354 0 2.653.255 3.84.717M12 3c-1.354 0-2.653-.255-3.84-.717m6.113 13.56c-2.48.513-5.26.513-7.74 0M1.5 9.75h1.5a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75zm21 0h-1.5a.75.75 0 00-.75.75v3a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75z" /></svg>` },
  { name: 'transportation', title: 'Transportation', link: '/story/transportation', kpiValue: '4.5k', kpiLabel: 'Daily Campus Shuttle Trips', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875m-17.25 4.5L3.375 14.25M20.625 18.75L20.625 14.25m-17.25 4.5l-1.5-1.5m17.25 4.5l1.5-1.5M5.625 6h12.75a2.25 2.25 0 012.25 2.25v3.75a2.25 2.25 0 01-2.25-2.25H5.625a2.25 2.25 0 01-2.25-2.25V8.25a2.25 2.25 0 012.25-2.25z" /></svg>` },
  { name: 'education-research', title: 'Education & Research', link: '/dashboard/education-research', kpiValue: '50%', kpiLabel: 'Courses Include Sustainability', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>` }
]);
</script>
