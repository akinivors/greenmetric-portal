<template>
  <div class="space-y-12">
    <div class="relative text-center py-20 px-4 rounded-2xl overflow-hidden shadow-lg bg-gray-700 text-white">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=2070&auto=format&fit=crop')"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
      <div class="relative z-10">
        <h1 class="text-5xl font-extrabold text-white" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.6);">Waste Management</h1>
        <p class="mt-4 max-w-3xl mx-auto text-lg text-gray-200" style="text-shadow: 1px 1px 4px rgba(0,0,0,0.5);">Our goal is to minimize our environmental footprint by reducing landfill waste and maximizing recycling and composting across campus.</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ImpactCard value="105" unit="tons" label="Inorganic Waste Recycled Last Year" analogy="That's the equivalent weight of 15 adult elephants!" />
      <ImpactCard value="60" unit="tons" label="Organic Waste Composted On-Site" analogy="Creating nutrient-rich soil for our campus gardens and green spaces." />
    </div>

    <div class="py-12 px-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
      <div class="max-w-3xl mx-auto text-center">
        <div @click="triggerTrashAnimation" class="w-16 h-16 mx-auto bg-green-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6 cursor-pointer transition-transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-green-600 dark:text-green-400">
            <path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-4.5a.75.75 0 000 1.5h6a.75.75 0 00.75-.75v-6a.75.75 0 00-1.5 0v4.5l-1.903-1.903A9 9 0 003.75 10.5a.75.75 0 001.5 0c0-.343.03-.676.09-1.002zM19.245 13.941a7.5 7.5 0 01-12.548 3.364l-1.903-1.903h4.5a.75.75 0 000-1.5h-6a.75.75 0 00-.75.75v6a.75.75 0 001.5 0v-4.5l1.903 1.903A9 9 0 0020.25 13.5a.75.75 0 00-1.5 0c0 .343-.03.676-.09 1.002z" clip-rule="evenodd" />
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Our Commitment to a Circular Economy</h2>
        <blockquote class="mt-4 relative">
          <div class="absolute left-0 top-0 h-full w-1 bg-green-200 dark:bg-green-800/50 rounded-full"></div>
          <p class="pl-8 text-lg italic text-gray-600 dark:text-gray-400">"We believe in a future without waste. Our approach goes beyond simple recycling; we are committed to the principles of a circular economy. This means designing systems to prevent waste, reusing materials whenever possible, and returning biological resources to the earth through composting. Every item we divert from a landfill is a step toward a more sustainable and regenerative campus."</p>
        </blockquote>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="isAnimating" class="fixed inset-0 z-50 bg-black/80 pointer-events-none">
        <TransitionGroup name="fall">
          <div v-for="item in trashItems" :key="item.id" class="absolute" :style="item.style">
            <div :class="[item.class, 'flex items-center justify-center font-bold text-sm']" :style="{ width: item.size, height: item.size }">
              {{ item.emoji }}
            </div>
          </div>
        </TransitionGroup>

        <div class="w-96 h-80 bg-green-500 dark:bg-green-400 border-4 border-green-600 dark:border-green-500 rounded-t-2xl absolute bottom-0 left-1/2 -translate-x-1/2">
          <div :class="['w-full h-16 bg-green-700 dark:bg-green-600 border-4 border-green-800 dark:border-green-700 rounded-t-2xl absolute -top-16 left-0 origin-bottom-left transition-transform duration-1000', lidOpen ? '-rotate-90' : '']">
            <div class="w-20 h-4 bg-green-800 dark:bg-green-700 rounded-full mx-auto mt-4"></div>
          </div>
        </div>
      </div>
    </Teleport>

    <div class="bg-slate-50 dark:bg-gray-900/50 p-8 rounded-2xl">
        <EnrichmentSection title="Our Approach to Waste Reduction" :items="wasteInitiatives" @item-click="handleInitiativeClick" />
    </div>
    <div class="text-center p-8 bg-green-50 dark:bg-green-900/20 rounded-2xl">
      <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100">Want to see the full picture?</h3>
      <p class="mt-2 text-gray-600 dark:text-gray-400">Explore the detailed charts and raw data in our Waste Data Hub.</p>
      <router-link to="/dashboard/waste" class="mt-6 inline-flex items-center gap-x-2 bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-transform hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
        Go to Data Hub
      </router-link>
    </div>
    <Modal :show="isModalVisible" :title="modalContent.title" :content="modalContent.content" @close="isModalVisible = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import ImpactCard from '../components/ImpactCard.vue';
import EnrichmentSection from '../components/EnrichmentSection.vue';
import Modal from '../components/Modal.vue';
import type { EnrichmentItem } from '../types/dashboard';


const isModalVisible = ref(false);
const modalContent = ref({ title: '', content: '' });
const isAnimating = ref(false);
const lidOpen = ref(false);
const trashItems = ref<any[]>([]);

const trashTemplates = [
  { emoji: '📄', class: 'bg-white rounded', size: '24px' },
  { emoji: '🍎', class: 'text-red-500 text-2xl', size: '28px' },
  { emoji: '📦', class: 'bg-yellow-600 text-white p-1 rounded-sm', size: '22px' },
  { emoji: '🍌', class: 'text-yellow-400 text-2xl', size: '30px' },
  { emoji: '🥤', class: 'bg-gray-200 p-1 rounded-t-lg', size: '26px' }
];

const triggerTrashAnimation = async () => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  
  const screenWidth = window.innerWidth;
  const targetX = screenWidth / 2;

  trashItems.value = Array.from({ length: 15 }).map((_, i) => {
    const startXPercent = 10 + Math.random() * 80;
    return {
      id: i,
      ...trashTemplates[i % trashTemplates.length],
      style: {
        left: `${startXPercent}%`,
        top: '-50px', // Start above the screen
        transition: `transform ${1.5 + Math.random()}s cubic-bezier(0.5, 0, 0.75, 0)`,
        transitionDelay: `${Math.random() * 1.5}s`,
      }
    };
  });

  // Wait for the DOM to update with the new items
  await nextTick();

  // Open the lid and start the fall animation
  lidOpen.value = true;
  trashItems.value.forEach(item => {
    const startXPixels = (parseFloat(item.style.left) / 100) * screenWidth;
    const translateX = targetX - startXPixels;
    item.style.transform = `translate(${translateX}px, ${window.innerHeight}px) rotate(${Math.random() * 360 - 180}deg)`;
  });
  
  // Reset after animation
  setTimeout(() => {
    lidOpen.value = false;
    setTimeout(() => {
      isAnimating.value = false;
      trashItems.value = [];
    }, 500);
  }, 4000);
};

const handleInitiativeClick = (item: EnrichmentItem) => {
  modalContent.value.title = item.title;
  modalContent.value.content = item.details;
  isModalVisible.value = true;
};

const wasteInitiatives = ref([
    {
    title: 'Reduce, Reuse, Recycle (3R) Program',
    description: 'A comprehensive program to encourage staff and students to reduce waste, reuse materials, and recycle.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>`,
    details: 'Our university has a comprehensive program to encourage staff and students to reduce waste, reuse materials, and recycle. Over 75% of our 3R initiatives have been implemented, including campus-wide recycling bins, waste reduction education programs, and partnerships with local recycling facilities.'
  },
  {
    title: 'Advanced Sewage Treatment',
    description: 'All sewage on campus is treated using an advanced tertiary treatment system to protect local waterways.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>`,
    details: 'All sewage on campus is treated using a tertiary treatment system, ensuring the water is purified to a high standard before being discharged. This advanced treatment process removes over 95% of contaminants and supports our commitment to environmental stewardship.'
  }
]);
</script>

<style scoped>
/* No specific styles needed as transitions handle the movement */
</style>
