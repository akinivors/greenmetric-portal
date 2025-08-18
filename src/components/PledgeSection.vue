<template>
  <div class="text-center py-12">
    <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">{{ title }}</h2>
    <p class="mt-2 text-lg text-gray-500 dark:text-gray-400">Small actions, when done together, create massive change.</p>

    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <button 
        v-for="pledge in localPledges" 
        :key="pledge.id"
        @click="makePledge(pledge.id)"
        :class="[
          'p-6 rounded-xl border-2 transition-all duration-200 ease-in-out flex flex-col items-center text-center',
          pledge.pledged 
            ? pledgeClasses.pledged 
            : `bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 ${pledgeClasses.hover} hover:scale-105`
        ]"
      >
        <div class="w-12 h-12 mb-4" v-html="pledge.icon"></div>
        <span class="font-semibold" :class="pledge.pledged ? 'text-white' : ''">{{ pledge.text }}</span>
      </button>
    </div>

    <div class="mt-12">
      <p class="text-2xl font-bold text-gray-800 dark:text-gray-100">
        <span :class="pledgeClasses.text">{{ totalPledges.toLocaleString() }}</span> Pledges Made by Our Community!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';

interface Pledge { id: number; text: string; icon: string; pledged: boolean; }

const props = withDefaults(defineProps<{
  title: string;
  pledges: Pledge[];
  themeColor?: 'green' | 'amber' | 'blue' | 'teal' | 'slate' | 'indigo';
}>(), {
  themeColor: 'green'
});

// Explicit class mappings to ensure Tailwind can detect them
const pledgeClasses = computed(() => {
  const themeMap = {
    green: {
      text: 'text-green-500',
      pledged: 'bg-green-500 border-green-600 text-white shadow-lg scale-105',
      hover: 'hover:border-green-400 dark:hover:border-green-500',
    },
    amber: {
      text: 'text-amber-500',
      pledged: 'bg-amber-500 border-amber-600 text-white shadow-lg scale-105',
      hover: 'hover:border-amber-400 dark:hover:border-amber-500',
    },
    blue: {
      text: 'text-blue-500',
      pledged: 'bg-blue-500 border-blue-600 text-white shadow-lg scale-105',
      hover: 'hover:border-blue-400 dark:hover:border-blue-500',
    },
    teal: {
      text: 'text-teal-500',
      pledged: 'bg-teal-500 border-teal-600 text-white shadow-lg scale-105',
      hover: 'hover:border-teal-400 dark:hover:border-teal-500',
    },
    slate: {
      text: 'text-slate-500',
      pledged: 'bg-slate-500 border-slate-600 text-white shadow-lg scale-105',
      hover: 'hover:border-slate-400 dark:hover:border-slate-500',
    },
    indigo: {
      text: 'text-indigo-500',
      pledged: 'bg-indigo-500 border-indigo-600 text-white shadow-lg scale-105',
      hover: 'hover:border-indigo-400 dark:hover:border-indigo-500',
    },
  };
  
  return themeMap[props.themeColor] || themeMap.green;
});

const localPledges = ref<Pledge[]>([]);
watch(() => props.pledges, (newPledges) => {
  localPledges.value = JSON.parse(JSON.stringify(newPledges));
}, { immediate: true, deep: true });

const totalPledges = ref(1247);

const makePledge = (id: number) => {
  const pledge = localPledges.value.find(p => p.id === id);
  if (pledge && !pledge.pledged) {
    pledge.pledged = true;
    totalPledges.value++;
  }
};
</script>
