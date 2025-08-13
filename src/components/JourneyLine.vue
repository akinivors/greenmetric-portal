<template>
  <div class="fixed top-0 left-10 h-full w-0.5 bg-gray-200 dark:bg-gray-700 hidden lg:block z-30">
    <div ref="lineProgress" class="w-full bg-green-500" style="height: 0;"></div>
    <div 
      v-if="activeDotPosition !== null"
      class="absolute w-4 h-4 rounded-full bg-green-500 border-4 border-white dark:border-gray-900 -ml-[7px]"
      :style="{ top: `${activeDotPosition}px`, transition: 'top 0.3s ease-out' }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { gsap } from 'gsap';

const props = defineProps<{
  activeSection: string | null;
}>();

const lineProgress = ref<HTMLElement | null>(null);
const activeDotPosition = ref<number | null>(null);

onMounted(() => {
  gsap.to(lineProgress.value, {
    height: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    }
  });

  // Watch for active section changes to update the dot
  watch(() => props.activeSection, (newId) => {
    const el = newId ? document.getElementById(newId) : null;
    if (el) {
      activeDotPosition.value = el.offsetTop + el.offsetHeight / 2;
    }
  }, { immediate: true });
});
</script>
