<template>
  <div ref="infographicContainer" class="w-full max-w-4xl mx-auto space-y-4">
    <div class="flex justify-between text-lg font-semibold text-gray-800 dark:text-gray-100 px-2">
      <div class="text-left">
        <span class="block text-3xl font-bold text-green-600 dark:text-green-400">4,500+</span>
        <span class="text-sm">Green Transit Trips</span>
      </div>
      <div class="text-right">
        <span class="block text-3xl font-bold text-gray-500 dark:text-gray-400">1,200</span>
        <span class="text-sm">Private Vehicle Trips</span>
      </div>
    </div>
    <div class="relative w-full h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div ref="greenBar" class="absolute top-0 left-0 h-full bg-green-500 rounded-l-full"></div>
    </div>
     <p class="text-center text-gray-600 dark:text-gray-400 pt-2">
      Over <span class="font-bold text-gray-800 dark:text-gray-200">78% of daily trips</span> to campus are now made using green transportation!
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const infographicContainer = ref<HTMLElement | null>(null);
const greenBar = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!infographicContainer.value || !greenBar.value) return;

  const greenPercent = (4500 / (4500 + 1200)) * 100;

  // Set initial width to 0
  greenBar.value.style.width = '0%';

  // Animate to final width
  gsap.to(greenBar.value, {
    width: `${greenPercent}%`,
    duration: 2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: infographicContainer.value,
      start: 'top 85%',
      once: true
    }
  });
});
</script>
