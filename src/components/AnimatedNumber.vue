<template>
  <span>{{ formattedValue }}</span>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue';

const props = withDefaults(defineProps<{
  value: number;
  decimalPlaces?: number; // <-- NEW PROP
}>(), {
  decimalPlaces: 0 // <-- Default to 0 decimal places
});

const animatedValue = ref(0);

const formattedValue = computed(() => {
  // Use toFixed for decimals, and toLocaleString for whole numbers
  return animatedValue.value.toFixed(props.decimalPlaces);
});

const animateValue = (start: number, end: number, duration: number) => {
  const startTime = performance.now();
  const step = (currentTime: number) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    animatedValue.value = start + (end - start) * progress;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      animatedValue.value = end; // Ensure it ends on the exact value
    }
  };
  requestAnimationFrame(step);
};

watch(() => props.value, (newValue, oldValue) => {
  animateValue(oldValue || 0, newValue, 500);
});

onMounted(() => {
  animateValue(0, props.value, 500);
});
</script>