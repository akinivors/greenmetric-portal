<template>
  <div>
    <section id="map" ref="mapSection" class="h-screen w-full relative">
      <div class="sticky top-0 h-screen w-full overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center transition-transform duration-1000" :style="{ backgroundImage: `url(${campusImage})` }"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>

        <div class="absolute top-8 left-8 bg-white/10 backdrop-blur-md text-white p-6 rounded-2xl border border-white/20 shadow-2xl max-w-md">
          <h1 class="text-4xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent mb-2">Interactive Green Campus</h1>
          <p class="text-white/90 text-lg leading-relaxed">Discover our sustainable infrastructure through interactive exploration. Click the glowing hotspots or scroll to dive deeper into each area.</p>
        </div>

        <div v-for="hotspot in hotspots" :key="hotspot.id">
          <button 
            @click="scrollToSection(hotspot.id)"
            :class="[
              'absolute group transition-all duration-500 transform hover:scale-110',
              activeSection === hotspot.id ? 'scale-125' : ''
            ]"
            :style="{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }"
          >
            <div :class="['absolute inset-0 w-12 h-12 -m-3 rounded-full border-2 animate-ping', activeSection === hotspot.id ? 'border-white/80' : 'border-white/50']"></div>
            <div :class="['relative w-6 h-6 rounded-full border-3 border-white shadow-2xl transition-all duration-300', activeSection === hotspot.id ? 'bg-white shadow-white/50 scale-110' : 'bg-white/80 hover:bg-white hover:shadow-white/50']">
              <div :class="['absolute inset-0.5 rounded-full transition-all duration-300', activeSection === hotspot.id ? 'bg-white animate-hotspot-pulse' : 'bg-white/60 group-hover:bg-white/80']"></div>
            </div>
          </button>
        </div>

        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 text-center">
          <div class="animate-bounce">
            <svg class="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </div>
          <p class="text-sm font-medium">Scroll to explore</p>
        </div>
      </div>
    </section>

    <div class="relative z-10 bg-white dark:bg-gray-900">
      <SectionBreak :icon="'<svg xmlns=`http://www.w3.org/2000/svg` fill=`none` viewBox=`0 0 24 24` stroke-width=`1.5` stroke=`currentColor`><path stroke-linecap=`round` stroke-linejoin=`round` d=`M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z` /></svg>'" />

      <section id="green-spaces" class="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center animate-subtle-pan" :style="{ backgroundImage: `url(${campusNatureImage})` }"></div>
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="relative z-10 p-8 text-center max-w-4xl mx-auto">
          <div class="mb-12">
            <h2 class="text-6xl md:text-7xl font-black mb-4 text-white" style="text-shadow: 2px 2px 20px rgba(0,0,0,0.8);">The Lungs of Our Campus</h2>
            <div class="w-24 h-1 bg-white mx-auto rounded-full shadow-lg"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="transform hover:scale-105 transition-transform duration-300"><ImpactCard value="35" unit="%" label="Open Space Ratio" analogy="Over a third of our campus is dedicated to nature." /></div>
            <div class="transform hover:scale-105 transition-transform duration-300"><ImpactCard value="50k" unit="m²" label="Forest Vegetation Area" analogy="Providing a vibrant natural ecosystem for students and wildlife." /></div>
          </div>
        </div>
      </section>

      <SectionBreak :icon="'<svg xmlns=`http://www.w3.org/2000/svg` fill=`none` viewBox=`0 0 24 24` stroke-width=`1.5` stroke=`currentColor`><path stroke-linecap=`round` stroke-linejoin=`round` d=`M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21` /></svg>'" />

      <section id="smart-buildings" class="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-white dark:bg-gray-900">
        <div class="absolute inset-0 bg-cover bg-center animate-subtle-pan" :style="{ backgroundImage: `url(${smartBuildingImage})` }"></div>
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="relative z-10 p-8 text-center max-w-4xl mx-auto">
          <div class="mb-12">
            <h2 class="text-6xl md:text-7xl font-black mb-4 text-white" style="text-shadow: 2px 2px 20px rgba(0,0,0,0.8);">Buildings for the Future</h2>
            <div class="w-24 h-1 bg-white mx-auto rounded-full shadow-lg"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="transform hover:scale-105 transition-transform duration-300"><ImpactCard value="26.7" unit="%" label="Smart Building Ratio" analogy="Actively managing their own energy consumption." /></div>
            <div class="transform hover:scale-105 transition-transform duration-300"><ImpactCard value="85" unit="%" label="Energy Efficient Appliances" analogy="The vast majority of our campus appliances are certified energy-efficient." /></div>
          </div>
        </div>
      </section>

      <SectionBreak :icon="'<svg xmlns=`http://www.w3.org/2000/svg` fill=`none` viewBox=`0 0 24 24` stroke-width=`1.5` stroke=`currentColor`><path stroke-linecap=`round` stroke-linejoin=`round` d=`M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25` /></svg>'" />

      <section id="admin-building" class="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-white dark:bg-gray-900">
        <div class="absolute inset-0 bg-cover bg-center animate-subtle-pan" :style="{ backgroundImage: `url(${adminBuildingImage})` }"></div>
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="relative z-10 p-8 text-center max-w-4xl mx-auto">
          <div class="mb-12">
            <h2 class="text-6xl md:text-7xl font-black mb-4 text-white" style="text-shadow: 2px 2px 20px rgba(0,0,0,0.8);">Investing in Our Vision</h2>
            <div class="w-24 h-1 bg-white mx-auto rounded-full shadow-lg"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="transform hover:scale-105 transition-transform duration-300"><ImpactCard value="1.5" unit="%" label="Sustainability Budget" analogy="A dedicated budget to ensure our green initiatives are prioritized." /></div>
            <div class="transform hover:scale-105 transition-transform duration-300"><ImpactCard value="16.7k" unit="people" label="Total Campus Population" analogy="A thriving community committed to a sustainable future." /></div>
          </div>
        </div>
      </section>

      <SectionBreak :icon="'<svg xmlns=`http://www.w3.org/2000/svg` fill=`none` viewBox=`0 0 24 24` stroke-width=`1.5` stroke=`currentColor`><path stroke-linecap=`round` stroke-linejoin=`round` d=`M4.5 12.75l6 6 9-13.5` /></svg>'" />

      <section id="water-absorption" class="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-white dark:bg-gray-900">
        <div class="absolute inset-0 bg-cover bg-center animate-subtle-pan" :style="{ backgroundImage: `url(${waterAbsorptionImage})` }"></div>
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="relative z-10 p-8 text-center max-w-4xl mx-auto">
          <div class="mb-12">
            <h2 class="text-6xl md:text-7xl font-black mb-4 text-white" style="text-shadow: 2px 2px 20px rgba(0,0,0,0.8);">
              A Campus Like a Sponge
            </h2>
            <div class="w-24 h-1 bg-white mx-auto rounded-full shadow-lg"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="transform hover:scale-105 transition-transform duration-300"><ImpactCard value="20" unit="%" label="Water Absorption Area" analogy="Designed to naturally manage rainwater and prevent runoff." /></div>
            <div class="transform hover:scale-105 transition-transform duration-300"><ImpactCard value="100k" unit="m²" label="Permeable Surfaces" analogy="Allowing rainwater to replenish groundwater and sustain our ecosystem." /></div>
          </div>
        </div>
      </section>

      <SectionBreak :icon="'<svg xmlns=`http://www.w3.org/2000/svg` fill=`none` viewBox=`0 0 24 24` stroke-width=`1.5` stroke=`currentColor`><path stroke-linecap=`round` stroke-linejoin=`round` d=`M12 21a9 9 0 100-18 9 9 0 000 18zm-3.75-8.25h7.5M8.25 12l3 3 3-3` /></svg>'" />

      <section id="biodiversity" class="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-white dark:bg-gray-900">
        <div class="absolute inset-0 bg-cover bg-center animate-soft-glow" :style="{ backgroundImage: `url(${biodiversityImage})` }"></div>
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="relative z-10 p-8 text-center max-w-4xl mx-auto">
          <div class="mb-12">
            <h2 class="text-6xl md:text-7xl font-black mb-4 text-white" style="text-shadow: 2px 2px 20px rgba(0,0,0,0.8);">
              A Thriving Ecosystem
            </h2>
            <div class="w-24 h-1 bg-white mx-auto rounded-full shadow-lg"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="transform hover:scale-105 transition-transform duration-300"><ImpactCard value="10" unit="%" label="Forest Vegetation" analogy="Dedicated zones for native flora and fauna to flourish." /></div>
            <div class="transform hover:scale-105 transition-transform duration-300"><ImpactCard value="60" unit="%" label="Conservation Program" analogy="Of our biodiversity plan has been successfully implemented." /></div>
          </div>
        </div>
      </section>
      
      <section id="data-hub" class="relative p-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div class="absolute inset-0 opacity-5">
          <svg class="w-full h-full" viewBox="0 0 100 100" fill="currentColor"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="5" cy="5" r="1" /></pattern></defs><rect width="100" height="100" fill="url(#grid)" /></svg>
        </div>
        <div class="relative text-center max-w-4xl mx-auto">
          <h3 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Explore the Complete Data Journey</h3>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">Dive deeper into our comprehensive sustainability metrics and discover the full scope of our environmental impact.</p>
          <router-link to="/dashboard/setting-infrastructure" class="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <span class="text-lg">Go to Data Hub</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import ImpactCard from '../components/ImpactCard.vue';
import SectionBreak from '../components/SectionBreak.vue';
import campusImage from '../assets/iytehd.jpeg';
import campusNatureImage from '../assets/iytepark.jpg';
import smartBuildingImage from '../assets/iytecoolbuilding.jpg';
import adminBuildingImage from '../assets/iyteadministrivebuilding.jpg';
import waterAbsorptionImage from '../assets/iytewaterabsortion.jpg';
import biodiversityImage from '../assets/iytebiodiversity.jpg';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const emit = defineEmits(['update-active-section']);
const activeSection = ref<string | null>(null);

const hotspots = ref([
  { id: 'green-spaces', x: 50, y: 50, title: 'Green Spaces' },
  { id: 'smart-buildings', x: 40, y: 75, title: 'Smart Buildings' },
  { id: 'admin-building', x: 70, y: 40, title: 'Our Vision' },
  { id: 'water-absorption', x: 80, y: 55, title: 'Water Absorption' },
  { id: 'biodiversity', x: 15, y: 92, title: 'Biodiversity' },
]);

const navItems = [
    {id: 'map', title: 'Campus Overview'},
    ...hotspots.value.map(h => ({ id: h.id, title: h.title })),
    {id: 'data-hub', title: 'Data Hub'}
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

let scrollObserver: IntersectionObserver;

onMounted(() => {
  emit('update-active-section', 'map', navItems);

  const sections = navItems.map(item => document.getElementById(item.id));
  
  scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.id;
        activeSection.value = currentId;
        emit('update-active-section', currentId, navItems);
      }
    });
  }, { threshold: 0.5 });
  
  sections.forEach(sec => { if (sec) scrollObserver.observe(sec); });

  // GSAP ScrollTriggers for hotspot activation
  hotspots.value.forEach(hotspot => {
    ScrollTrigger.create({
      trigger: `#${hotspot.id}`,
      start: 'top center',
      end: 'bottom center',
      onToggle: self => {
        if (self.isActive) {
          activeSection.value = hotspot.id;
        }
      },
    });
  });
});

onUnmounted(() => {
  if (scrollObserver) {
    scrollObserver.disconnect();
  }
});
</script>