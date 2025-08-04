import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router'; // <-- Import the router
import VueApexCharts from 'vue3-apexcharts';

const app = createApp(App);

app.use(router); // <-- Use the router
app.component('VueApexCharts', VueApexCharts); // <-- Register ApexCharts globally
app.mount('#app');