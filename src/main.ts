import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router'; // <-- Import the router
import VueApexCharts from 'vue3-apexcharts';
import { MotionPlugin } from '@vueuse/motion';
import gsap from 'gsap'; // <-- ADD THIS
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // <-- ADD THIS

gsap.registerPlugin(ScrollTrigger); // <-- ADD THIS

const app = createApp(App);

app.use(router); // <-- Use the router
app.use(MotionPlugin); // <-- Use the motion plugin
app.component('VueApexCharts', VueApexCharts); // <-- Register ApexCharts globally
app.mount('#app');