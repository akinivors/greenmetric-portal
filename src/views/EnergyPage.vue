<template>
  <div class="relative">
    <JourneyNavigator :items="navItems" :active-section="activeSection" />
    <JourneyLine :active-section="activeSection" />

    <div class="space-y-20 lg:pl-20">
      <section id="vision" class="relative text-center py-24 px-4 rounded-2xl overflow-hidden shadow-xl bg-gray-800 text-white">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?q=80&w=2070&auto=format&fit=crop')"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-blue-900/40"></div>
        <div class="relative z-10">
          <h1 class="text-5xl md:text-6xl font-extrabold text-white" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.7);">Powering a Brighter, Cleaner Future</h1>
          <p class="mt-6 max-w-3xl mx-auto text-lg text-gray-200" style="text-shadow: 1px 1px 4px rgba(0,0,0,0.5);">Discover how we're revolutionizing our energy landscape, from innovative smart buildings to expansive renewable sources, on our path to carbon neutrality.</p>
        </div>
      </section>

      <section id="footprint" ref="footprintSection" class="text-center py-12">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Understanding Our Footprint</h2>
        <p class="mt-2 text-lg text-gray-500 dark:text-gray-400">To build a sustainable future, we must first measure our impact.</p>
        <div class="mt-8 flex justify-center items-center gap-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
            <div>
                <span ref="footprintNumber" class="text-6xl font-extrabold text-gray-800 dark:text-gray-100">0</span>
                <span class="text-2xl font-medium text-gray-500 dark:text-gray-400">tons CO₂e</span>
            </div>
        </div>
        <p class="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto">Our total carbon footprint is our baseline. Every initiative on this page is designed to bring this number down.</p>
      </section>
      
      <section id="renewables" ref="renewablesSection" class="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Our Progress in Renewable Energy</h2>
          <div class="mt-8 flex justify-center">
              <div class="relative w-48 h-48">
                  <svg class="w-full h-full" viewBox="0 0 36 36"><path class="stroke-current text-gray-200 dark:text-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-width="3"></path><path ref="radialBar" class="stroke-current text-green-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-width="3" stroke-linecap="round"></path></svg>
                  <div class="absolute inset-0 flex flex-col items-center justify-center">
                      <span ref="renewableNumber" class="text-4xl font-bold text-gray-800 dark:text-gray-100">0%</span>
                  </div>
              </div>
          </div>
          <p class="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto">This represents the percentage of our total campus energy that is generated from clean, renewable sources like solar and biomass.</p>
      </section>

      <section id="solutions" class="space-y-20">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="relative rounded-2xl overflow-hidden shadow-lg h-96 group">
                <img :src="renewableEnergyImage" alt="Solar Panels on Campus Roof" class="w-full h-full object-cover">
                <!-- Sun glow effect with radial gradient -->
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div class="absolute top-6 right-6 w-32 h-32 bg-gradient-radial from-yellow-300/60 via-orange-400/40 to-transparent rounded-full animate-pulse"></div>
                  <div class="absolute top-8 right-8 w-24 h-24 bg-gradient-radial from-yellow-200/80 via-yellow-400/30 to-transparent rounded-full animate-ping"></div>
                  <div class="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-orange-300/5"></div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <ImpactCard value="15.8" unit="%" label="Renewable Energy Ratio" analogy="Powering our entire library complex year-round." />
                </div>
            </div>
            <div class="space-y-6">
                <h3 class="text-3xl font-bold text-green-600 dark:text-green-400">Harnessing Renewable Energy</h3>
                <FeaturePane 
                  icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>'
                  title="Solar Power"
                  description="High-efficiency photovoltaic panels installed on over 15 campus rooftops and parking structures."
                />
                <FeaturePane 
                  icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>'
                  title="Biomass Energy"
                  description="Converting organic campus waste from landscaping and dining halls into a clean energy source."
                />
            </div>
        </div>
        <div class="grid md:grid-cols-2 gap-12 items-center">
             <div class="relative md:order-2 rounded-2xl overflow-hidden shadow-lg h-96 group">
                <img :src="smartCampusImage" alt="Smart Campus Technology Grid" class="w-full h-full object-cover">
                <!-- Electric nodes glowing effect -->
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <!-- Connection lines first (behind nodes) -->
                  <svg class="absolute inset-0 w-full h-full">
                    <line x1="64" y1="48" x2="320" y2="96" stroke="cyan" stroke-width="2" opacity="0.6" class="animate-pulse" />
                    <line x1="320" y1="96" x2="48" y2="128" stroke="cyan" stroke-width="1.5" opacity="0.5" class="animate-pulse" />
                    <line x1="48" y1="128" x2="192" y2="128" stroke="cyan" stroke-width="2" opacity="0.6" class="animate-pulse" />
                    <line x1="192" y1="128" x2="320" y2="256" stroke="cyan" stroke-width="1.5" opacity="0.5" class="animate-pulse" />
                    <line x1="320" y1="256" x2="128" y2="288" stroke="cyan" stroke-width="2" opacity="0.6" class="animate-pulse" />
                  </svg>
                  
                  <!-- Network nodes (on top of lines) -->
                  <div class="absolute top-12 left-16 w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-xl shadow-cyan-400/80 border-2 border-cyan-200"></div>
                  <div class="absolute top-24 right-20 w-3 h-3 bg-blue-400 rounded-full animate-ping shadow-xl shadow-blue-400/80 border-2 border-blue-200"></div>
                  <div class="absolute bottom-32 left-12 w-5 h-5 bg-cyan-300 rounded-full animate-pulse shadow-xl shadow-cyan-300/90 border-2 border-cyan-100"></div>
                  <div class="absolute bottom-16 right-16 w-3 h-3 bg-blue-500 rounded-full animate-ping shadow-xl shadow-blue-500/80 border-2 border-blue-300"></div>
                  <div class="absolute top-32 left-1/2 w-4 h-4 bg-cyan-500 rounded-full animate-pulse shadow-xl shadow-cyan-500/90 border-2 border-cyan-200"></div>
                  <div class="absolute bottom-24 left-1/3 w-3 h-3 bg-blue-300 rounded-full animate-ping shadow-xl shadow-blue-300/80 border-2 border-blue-100"></div>
                  
                  <!-- Overall network glow -->
                  <div class="absolute inset-0 bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-cyan-300/15"></div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <ImpactCard value="26.7" unit="%" label="Smart Building Ratio" analogy="Over a quarter of our buildings actively manage their own energy." />
                </div>
            </div>
            <div class="md:order-1 space-y-6">
                <h3 class="text-3xl font-bold text-green-600 dark:text-green-400">Building a Smarter Campus</h3>
                <FeaturePane 
                  icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>'
                  title="Smart Systems"
                  description="AI-powered building management systems that automatically optimize heating, cooling, and lighting based on occupancy."
                />
                <FeaturePane 
                  icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>'
                  title="Green Certification"
                  description="All new construction meets LEED Gold standards, with existing buildings being retrofitted to similar specifications."
                />
            </div>
        </div>
      </section>

      <section id="pledge">
        <PledgeSection 
          title="Join Our Mission: Make Your Pledge" 
          :pledges="energyPledges" 
        />
      </section>

      <section id="data-hub" class="relative p-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <!-- Background pattern -->
        <div class="absolute inset-0 opacity-5">
          <svg class="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div class="relative text-center max-w-4xl mx-auto">
          <h3 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Explore the Complete Data Journey</h3>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Dive deeper into our comprehensive energy and climate metrics and discover the full scope of our renewable initiatives.
          </p>
          <router-link 
            to="/dashboard/energy-climate-change" 
            class="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span class="text-lg">Go to Data Hub</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import ImpactCard from '../components/ImpactCard.vue';
import JourneyNavigator from '../components/JourneyNavigator.vue';
import JourneyLine from '../components/JourneyLine.vue';
import FeaturePane from '../components/FeaturePane.vue';
import PledgeSection from '../components/PledgeSection.vue';
import renewableEnergyImage from '../assets/renewableenergy.jpg';
import smartCampusImage from '../assets/smartcampus.jpeg';

// --- CORRECTED PLEDGE DATA ---
const energyPledges = ref([
  { id: 1, text: "I'll switch to energy-saving mode", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>`, pledged: false },
  { id: 2, text: "I'll take the stairs more often", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h7.5v7.5h-7.5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 1.5v21" /></svg>`, pledged: false },
  { id: 3, text: "I'll unplug unused chargers", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5" /><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l7.5 7.5-7.5 7.5" /></svg>`, pledged: false },
]);

// State for Journey Navigator
const navItems = [
  { id: 'vision', title: 'Our Vision' },
  { id: 'footprint', title: 'Our Footprint' },
  { id: 'renewables', title: 'Renewable Progress' },
  { id: 'solutions', title: 'Our Solutions' },
  { id: 'pledge', title: 'Join Our Mission' },
  { id: 'data-hub', title: 'Data Hub' },
];
const activeSection = ref<string | null>('vision');

// Template refs for animation targets
const footprintSection = ref<HTMLElement | null>(null);
const footprintNumber = ref<HTMLElement | null>(null);
const renewablesSection = ref<HTMLElement | null>(null);
const radialBar = ref<SVGPathElement | null>(null);
const renewableNumber = ref<HTMLElement | null>(null);

let scrollObserver: IntersectionObserver;

onMounted(() => {
  // --- GSAP Animations ---
  gsap.fromTo(footprintNumber.value, { innerText: 0 }, {
    innerText: 5000,
    duration: 2,
    ease: 'power2.out',
    snap: { innerText: 100 },
    formatter: (value: number) => `${(value / 1000).toFixed(1)}k`,
    scrollTrigger: { trigger: footprintSection.value, start: 'top center' }
  });

  const radialBarValue = { value: 0 };
  const renewableNumberValue = { value: 0 };
  const pathLength = radialBar.value?.getTotalLength() || 0;
  gsap.set(radialBar.value, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
  gsap.to(radialBarValue, {
    value: 15.8,
    duration: 2,
    ease: 'power2.out',
    onUpdate: () => {
      if (radialBar.value) {
        radialBar.value.style.strokeDashoffset = `${pathLength * (1 - radialBarValue.value / 100)}`;
      }
    },
    scrollTrigger: { trigger: renewablesSection.value, start: 'top center' }
  });
  gsap.to(renewableNumberValue, {
    value: 15.8,
    duration: 2,
    ease: 'power2.out',
    onUpdate: () => {
      if (renewableNumber.value) {
        renewableNumber.value.textContent = `${renewableNumberValue.value.toFixed(1)}%`;
      }
    },
    scrollTrigger: { trigger: renewablesSection.value, start: 'top center' }
  });

  // --- Intersection Observer for Journey Navigator ---
  const sections = navItems.map(item => document.getElementById(item.id));
  scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' });
  sections.forEach(sec => { if (sec) scrollObserver.observe(sec); });
});

onUnmounted(() => {
  if (scrollObserver) scrollObserver.disconnect();
});
</script>
