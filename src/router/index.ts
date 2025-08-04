import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: () => import('../views/MainPage.vue'),
  },
  {
    path: '/dashboard/:categoryName', // Dynamic route for categories
    name: 'CategoryDashboard',
    component: () => import('../views/CategoryDashboard.vue'),
    props: true, // Pass route params as component props
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;