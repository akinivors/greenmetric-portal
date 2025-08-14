<template>
  <div class="h-32 -mb-16 relative z-30 flex justify-center items-center">
    <div class="relative">
      <!-- Outer glow ring -->
      <div class="absolute inset-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-xl"></div>
      <!-- Main circle -->
      <div class="relative w-28 h-28 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-full shadow-2xl border-4 border-white dark:border-gray-700 flex items-center justify-center backdrop-blur-sm">
        <!-- Inner shadow circle -->
        <div class="absolute inset-2 bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-gray-900/50 dark:to-gray-800/50 rounded-full"></div>
        <!-- Icon container -->
        <div class="relative w-14 h-14 text-green-600 dark:text-green-400 drop-shadow-sm" v-html="icon"></div>
      </div>
      <!-- Bottom shadow -->
      <div class="absolute top-2 left-2 w-28 h-28 bg-black/10 dark:bg-black/30 rounded-full blur-lg -z-10"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
}>();
</script>
