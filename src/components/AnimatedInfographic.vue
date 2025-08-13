<template>
  <div ref="infographicContainer" class="w-full max-w-4xl mx-auto">
    <div class="relative w-full h-24 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div ref="greenBar" class="absolute top-0 left-0 h-full bg-green-500 rounded-l-full flex items-center pr-8 justify-end">
        <div ref="greenText" class="text-white text-2xl font-bold opacity-0">
          <span class="block text-3xl">4,500+</span>
          <span class="text-sm font-normal">Green Trips</span>
        </div>
      </div>
      <div ref="grayBar" class="absolute top-0 right-0 h-full bg-gray-400 dark:bg-gray-500 rounded-r-full flex items-center pl-8 justify-start">
        <div ref="grayText" class="text-white text-2xl font-bold opacity-0">
          <span class="block text-3xl">1,200</span>
          <span class="text-sm font-normal">Private Trips</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const infographicContainer = ref<HTMLElement | null>(null);
const greenBar = ref<HTMLElement | null>(null);
const grayBar = ref<HTMLElement | null>(null);
const greenText = ref<HTMLElement | null>(null);
const grayText = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!infographicContainer.value) return;

  const greenPercent = (4500 / (4500 + 1200)) * 100;
  const grayPercent = 100 - greenPercent;

  gsap.from(greenBar.value, {
    width: '0%',
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: infographicContainer.value,
      start: 'top 80%',
    }
  });

  gsap.from(grayBar.value, {
    width: '0%',
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: infographicContainer.value,
      start: 'top 80%',
    }
  });
  
  gsap.to(greenText.value, {
      opacity: 1,
      duration: 0.5,
      delay: 1,
      scrollTrigger: {
        trigger: infographicContainer.value,
        start: 'top 80%',
      }
  });
  gsap.to(grayText.value, {
      opacity: 1,
      duration: 0.5,
      delay: 1,
      scrollTrigger: {
        trigger: infographicContainer.value,
        start: 'top 80%',
      }
  });

  // Set final widths after animation starts
  if (greenBar.value) greenBar.value.style.width = `${greenPercent}%`;
  if (grayBar.value) grayBar.value.style.width = `${grayPercent}%`;
});
</script>
