import { createRouter, createWebHistory } from 'vue-router';
import StoryPageLayout from '../layouts/StoryPageLayout.vue'; // Import the new layout

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/HomePage.vue'),
  },
  {
    // New Storytelling Page for Waste
    path: '/waste',
    name: 'WastePage',
    component: () => import('../views/WastePage.vue'),
  },
  {
    // New Storytelling Page for Energy & Climate Change
    path: '/energy',
    name: 'EnergyPage',
    component: () => import('../views/EnergyPage.vue'),
  },
  {
    // Parent Route for all storytelling pages
    path: '/story',
    component: StoryPageLayout,
    children: [
      {
        path: 'water', // corresponds to /story/water
        name: 'WaterPage',
        component: () => import('../views/WaterPage.vue'),
      },
      {
        path: 'transportation', // corresponds to /story/transportation
        name: 'TransportationPage',
        component: () => import('../views/TransportationPage.vue'),
      },
      // We will add future pages (Energy, Waste, etc.) here
    ]
  },
  {
    // Existing Data Hub Route
    path: '/dashboard/:categoryName',
    name: 'CategoryDashboard',
    component: () => import('../views/CategoryDashboard.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;