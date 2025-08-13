<template>
  <div>
    <section id="vision" class="relative text-center py-24 px-4 rounded-2xl overflow-hidden shadow-xl bg-gray-800 text-white">
      <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${heroImage})` }"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-teal-900/40"></div>
      <div class="relative z-10">
        <h1 class="text-5xl md:text-6xl font-extrabold text-white" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.7);">
          Moving Forward, Sustainably
        </h1>
        <p class="mt-6 max-w-3xl mx-auto text-lg text-gray-200" style="text-shadow: 1px 1px 4px rgba(0,0,0,0.5);">
          We are creating a more accessible, pedestrian-friendly, and eco-conscious campus by promoting green transportation alternatives.
        </p>
      </div>
    </section>

    <section id="challenge" class="text-center py-12">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Rethinking Our Daily Commute</h2>
        <p class="mt-2 text-lg text-gray-500 dark:text-gray-400">Our goal is to reduce single-occupancy vehicles on campus.</p>
        <div class="mt-8">
            <HorizontalBarInfographic />
        </div>
    </section>

    <section id="solutions" class="space-y-20">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="relative rounded-2xl overflow-hidden shadow-lg h-96 group">
          <img :src="transitImage" alt="Campus shuttle bus" class="w-full h-full object-cover">
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
             <div class="absolute top-1/2 w-full h-0.5 bg-white/20 animate-motion-lines"></div>
          </div>
        </div>
        <div class="space-y-6">
          <h3 class="text-3xl font-bold text-teal-600 dark:text-teal-400">Promoting Green Transit</h3>
          <FeaturePane icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25" /></svg>' title="Campus Shuttle Service" description="Our free, regular shuttle service provides convenient on-campus travel for thousands of students and staff daily." />
          <FeaturePane icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>' title="Zero-Emission Vehicles (ZEVs)" description="We are expanding our fleet of electric vehicles for campus operations and providing more charging stations." />
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="relative md:order-2 rounded-2xl overflow-hidden shadow-lg h-96 group">
          <img :src="campusBikingImage" alt="Bike sharing on campus" class="w-full h-full object-cover">
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
            <div class="absolute top-1/3 w-full h-1 bg-white/20 animate-swoosh" style="animation-delay: 0s"></div>
            <div class="absolute top-2/3 w-full h-1 bg-white/20 animate-swoosh" style="animation-delay: 1s"></div>
          </div>
        </div>
        <div class="md:order-1 space-y-6">
            <h3 class="text-3xl font-bold text-teal-600 dark:text-teal-400">Rethinking Personal Mobility</h3>
            <FeaturePane icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>' title="Pedestrian-Friendly Campus" description="Safe and convenient pedestrian paths with ample lighting and disabled-friendly access are available throughout campus." />
            <FeaturePane icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.311-.06m0 0a5.996 5.996 0 013.681-2.325 8.39 8.39 0 00-3.681 2.325z" /></svg>' title="Bike Sharing Program" description="Our campus-wide bike-sharing program provides a healthy and green alternative for getting around." />
        </div>
      </div>
    </section>
    
    <section id="pledge">
      <PledgeSection 
        title="Join the Movement: Travel Smarter" 
        :pledges="transportPledges" 
      />
    </section>

    <section id="data-hub" class="text-center p-8 bg-teal-50 dark:bg-teal-900/20 rounded-2xl">
      <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100">Explore the Full Data</h3>
      <router-link to="/dashboard/transportation" class="mt-6 inline-flex items-center gap-x-2 bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition-transform hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
        Go to Data Hub
      </router-link>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import HorizontalBarInfographic from '../components/HorizontalBarInfographic.vue';
import FeaturePane from '../components/FeaturePane.vue';
import PledgeSection from '../components/PledgeSection.vue';
import campusBikingImage from '../assets/campusbiking.png';
import heroImage from '../assets/transportation-hero.jpg';

const transitImage = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1974&auto=format&fit=crop';

const emit = defineEmits(['update-active-section']);

const navItems = [
  { id: 'vision', title: 'Our Vision' },
  { id: 'challenge', title: 'The Challenge' },
  { id: 'solutions', title: 'Our Solutions' },
  { id: 'pledge', title: 'Make a Pledge' },
  { id: 'data-hub', title: 'Data Hub' },
];

const transportPledges = ref([
  { id: 1, text: "I'll try the campus shuttle", icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25" /></svg>', pledged: false },
  { id: 2, text: "I'll try biking to campus", icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.311-.06m0 0a5.996 5.996 0 013.681-2.325 8.39 8.39 0 00-3.681 2.325z" /></svg>', pledged: false },
  { id: 3, text: "I'll carpool with a friend", icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>', pledged: false },
]);

let scrollObserver: IntersectionObserver;

onMounted(() => {
  emit('update-active-section', 'vision', navItems);
  const sections = navItems.map(item => document.getElementById(item.id));
  scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        emit('update-active-section', entry.target.id, navItems);
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' });
  sections.forEach(sec => { if (sec) scrollObserver.observe(sec); });
});

onUnmounted(() => {
  if (scrollObserver) scrollObserver.disconnect();
});
</script>
