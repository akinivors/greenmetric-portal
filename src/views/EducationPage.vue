<template>
  <div>
    <div class="space-y-12 pt-12">
      <section id="vision" class="relative text-center py-24 px-4 rounded-2xl overflow-hidden shadow-xl bg-gray-800 text-white">
        <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${heroImage})` }"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-gray-900/40"></div>
        <div class="relative z-10">
          <h1 class="text-5xl md:text-6xl font-extrabold text-white" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.7);">
            Shaping a Sustainable Future
          </h1>
          <p class="mt-6 max-w-3xl mx-auto text-lg text-gray-200" style="text-shadow: 1px 1px 4px rgba(0,0,0,0.5);">
            Education and research are the cornerstones of progress. Discover how we are empowering the next generation of leaders and pioneering the solutions for a greener world.
          </p>
        </div>
      </section>

      <section id="curriculum" class="text-center py-12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Integrating Sustainability into Our Curriculum</h2>
          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ImpactCard value="50" unit="%" label="Courses Include Sustainability" analogy="Half of all courses offered provide students with critical environmental education." />
              <ImpactCard value="20" unit="%" label="Research Funding for Sustainability" analogy="A significant portion of our research budget is dedicated to solving environmental challenges." />
          </div>
      </section>

      <section id="research" class="grid md:grid-cols-2 gap-12 items-center">
        <div class="relative rounded-2xl overflow-hidden shadow-lg h-96">
          <img :src="labImage" alt="Student in a research lab" class="w-full h-full object-cover">
        </div>
        <div class="space-y-6">
          <h3 class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Spotlight on Research</h3>
          <FeaturePane 
            icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>' 
            title="Pioneering Publications" 
            description="Our faculty and students have contributed over 150 publications to global sustainability research." 
          />
          <FeaturePane 
            icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>' 
            title="Innovative Startups" 
            description="We foster a culture of innovation, launching 5+ student-led sustainability startups." 
          />
        </div>
      </section>

      <section id="solutions" class="grid md:grid-cols-2 gap-12 items-center">
        <div class="relative md:order-2 rounded-2xl overflow-hidden shadow-lg h-96">
          <img :src="studentLifeImage" alt="Students engaging on campus" class="w-full h-full object-cover">
        </div>
        <div class="md:order-1 space-y-6">
            <h3 class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Beyond the Classroom</h3>
            <FeaturePane 
              icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>' 
              title="Community Events" 
              description="Hosting over 25 sustainability-focused events, workshops, and conferences annually." 
            />
            <FeaturePane 
              icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>' 
              title="Student-Led Activities" 
              description="Supporting more than 40 student-led sustainability activities and organizations on campus." 
            />
        </div>
      </section>
    </div>

    <section id="research-galaxy" class="py-20 my-20 bg-gray-900 dark:bg-black">
      <ResearchGalaxy :publications="samplePublications" />
    </section>

    <div class="space-y-12 pb-12">
      <section id="pledge">
        <PledgeSection 
          title="Join the Movement: Be a Sustainability Leader" 
          :pledges="educationPledges" 
        />
      </section>

      <section id="data-hub" class="text-center p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl">
        <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100">Explore Our Academic Impact</h3>
        <router-link to="/dashboard/education-research" class="mt-6 inline-flex items-center gap-x-2 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-transform hover:scale-105">
          Go to Data Hub
        </router-link>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import ImpactCard from '../components/ImpactCard.vue';
import FeaturePane from '../components/FeaturePane.vue';
import PledgeSection from '../components/PledgeSection.vue';
import ResearchGalaxy from '../components/ResearchGalaxy.vue';
import heroImage from '../assets/iytelibary.jpg';
import labImage from '../assets/iytelab.jpg';
import studentLifeImage from '../assets/iytestudents.jpg';

const emit = defineEmits(['update-active-section']);

// --- UPDATED Nav Items to reflect new order ---
const navItems = [
  { id: 'vision', title: 'Our Vision' },
  { id: 'curriculum', title: 'Our Curriculum' },
  { id: 'research', title: 'Research Spotlight' },
  { id: 'solutions', title: 'Our Impact' },
  { id: 'research-galaxy', title: 'Research Galaxy' },
  { id: 'pledge', title: 'Make a Pledge' },
  { id: 'data-hub', title: 'Data Hub' },
];

// --- UPDATED: Detailed Data for the Research Galaxy ---
const samplePublications = ref([
  // Constellation: Renewable Energy
  { id: 1, title: 'Advancements in Photovoltaic Cell Efficiency', constellation: 'Renewable Energy', abstract: 'This paper explores novel materials and manufacturing techniques that have resulted in a 15% increase in photovoltaic cell efficiency under lab conditions.', x: 20, y: 30 },
  { id: 2, title: 'Biomass Conversion for Sustainable Biofuels', constellation: 'Renewable Energy', abstract: 'Our research details a new catalytic process for converting campus organic waste into a stable, energy-dense biofuel, contributing to a circular economy.', x: 25, y: 35 },
  { id: 3, title: 'Geothermal Energy Storage Solutions', constellation: 'Renewable Energy', abstract: 'Investigating the feasibility of underground thermal energy storage systems to capture and reuse geothermal heat, significantly reducing seasonal energy demands.', x: 18, y: 40 },
  
  // Constellation: Water Conservation
  { id: 4, title: 'AI-Powered Smart Irrigation for Arid Climates', constellation: 'Water Conservation', abstract: 'Development of an AI model that uses predictive weather data and soil moisture sensors to reduce irrigation water usage by up to 40% compared to traditional systems.', x: 70, y: 60 },
  { id: 5, title: 'Greywater Recycling and Advanced Filtration', constellation: 'Water Conservation', abstract: 'This study presents a multi-stage filtration system capable of safely recycling greywater from campus dormitories for use in landscape irrigation.', x: 75, y: 55 },

  // Constellation: Sustainable Urban Planning
  { id: 6, title: 'The Impact of Green Roofs on Urban Heat Islands', constellation: 'Sustainable Urban Planning', abstract: 'A multi-year study quantifying the cooling effect of green roofs, demonstrating an average surface temperature reduction of 5°C on campus buildings.', x: 45, y: 75 },
]);

const educationPledges = ref([
  { 
    id: 1, 
    text: "I'll join a sustainability club", 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>', 
    pledged: false 
  },
  { 
    id: 2, 
    text: "I'll attend a green workshop", 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>', 
    pledged: false 
  },
  { 
    id: 3, 
    text: "I'll take a sustainability course", 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>', 
    pledged: false 
  },
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
