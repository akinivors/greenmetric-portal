// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import StoryPageLayout from '../layouts/StoryPageLayout.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/HomePage.vue'),
  },
  {
    // Parent Route for ALL storytelling pages
    path: '/story',
    component: StoryPageLayout,
    children: [
      { path: 'waste', name: 'WastePage', component: () => import('../views/WastePage.vue') },
      { path: 'energy', name: 'EnergyPage', component: () => import('../views/EnergyPage.vue') },
      { path: 'water', name: 'WaterPage', component: () => import('../views/WaterPage.vue') },
      { path: 'transportation', name: 'TransportationPage', component: () => import('../views/TransportationPage.vue') },
      { path: 'infrastructure', name: 'InfrastructurePage', component: () => import('../views/InfrastructurePage.vue') },
      { path: 'education', name: 'EducationPage', component: () => import('../views/EducationPage.vue') },
    ]
  },
  {
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