<template>
  <router-link :to="link" custom v-slot="{ navigate }">
    <div @click="navigate" class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl cursor-pointer flex flex-col justify-between h-full">
      <div>
        <div class="text-green-500 w-12 h-12 mx-auto mb-4" v-html="icon"></div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-50">{{ title }}</h3>
      </div>
      <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p class="text-3xl font-bold text-green-600 dark:text-green-400">{{ kpiValue }}</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ kpiLabel }}</p>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  icon: string;
  link: string;
  kpiValue: string;
  kpiLabel: string;
}>();
</script>
