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
            ? 'bg-green-500 border-green-600 text-white shadow-lg scale-105' 
            : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500 hover:scale-105'
        ]"
      >
        <div class="w-12 h-12 mb-4" v-html="pledge.icon"></div>
        <span class="font-semibold">{{ pledge.text }}</span>
      </button>
    </div>

    <div class="mt-12">
      <p class="text-2xl font-bold text-gray-800 dark:text-gray-100">
        <span class="text-green-500">{{ totalPledges.toLocaleString() }}</span> Pledges Made by Our Community!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

// Define the shape of a pledge object
interface Pledge {
  id: number;
  text: string;
  icon: string;
  pledged: boolean;
}

// The component now accepts its data as props
const props = defineProps<{
  title: string;
  pledges: Pledge[];
}>();

// Create a local, mutable copy of the pledges prop for state management
const localPledges = ref<Pledge[]>([]);

// Watch for changes in the incoming pledges prop and update the local state
watch(() => props.pledges, (newPledges) => {
  localPledges.value = JSON.parse(JSON.stringify(newPledges));
}, { immediate: true, deep: true });

const totalPledges = ref(1247); // This can remain as a simulation

const makePledge = (id: number) => {
  const pledge = localPledges.value.find(p => p.id === id);
  if (pledge && !pledge.pledged) {
    pledge.pledged = true;
    totalPledges.value++;
  }
};
</script>
