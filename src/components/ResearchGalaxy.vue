<template>
  <div class="relative w-full h-[600px] bg-gray-900 dark:bg-black rounded-2xl overflow-hidden shadow-2xl">
    <div class="absolute inset-0 bg-[url('/src/assets/stars-far.svg')] opacity-50"></div>
    <div class="absolute inset-0 bg-[url('/src/assets/stars-near.svg')] opacity-80 animate-starfield-pan"></div>

    <svg class="absolute inset-0 w-full h-full z-10 pointer-events-none">
      <g v-for="constellation in constellations" :key="constellation.name">
        <path
          :d="constellation.path"
          fill="none"
          stroke="rgba(107, 114, 128, 0.3)"
          stroke-width="1"
          stroke-dasharray="5"
          class="transition-opacity duration-500"
          :class="activeConstellation === constellation.name ? 'opacity-100' : 'opacity-0'"
        />
      </g>
    </svg>

    <div class="absolute inset-0">
      <button
        v-for="publication in publications"
        :key="publication.id"
        @mouseenter="setActive(publication.constellation)"
        @mouseleave="setActive(null)"
        @click="selectPublication(publication)"
        class="absolute w-4 h-4 rounded-full bg-white/80 shadow-[0_0_12px_3px_rgba(255,255,255,0.6)] transition-all duration-300 hover:!scale-150 hover:!bg-cyan-300"
        :class="activeConstellation === publication.constellation ? 'scale-125 bg-cyan-400/80' : 'scale-100'"
        :style="{ left: `${publication.x}%`, top: `${publication.y}%` }"
      ></button>
    </div>

    <div class="relative z-10 h-full flex flex-col items-center justify-center text-center p-8 pointer-events-none">
      <h2 class="text-5xl font-extrabold text-white" style="text-shadow: 2px 2px 10px rgba(0,0,0,0.5);">
        An Interactive Universe of Knowledge
      </h2>
      <p class="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
        Hover to discover thematic clusters and click on prominent stars to learn more about key publications.
      </p>
    </div>

    <transition name="fade">
        <div v-if="selectedPublication" @click="selectedPublication = null" class="absolute inset-0 z-50 bg-black/70 flex items-center justify-center p-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-lg w-full text-left" @click.stop>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ selectedPublication.title }}</h3>
                <p class="mt-2 text-gray-600 dark:text-gray-400"><strong>Cluster:</strong> {{ selectedPublication.constellation }}</p>
                <p class="mt-4 text-gray-700 dark:text-gray-300">{{ selectedPublication.abstract }}</p>
                <button @click="selectedPublication = null" class="mt-6 bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700">Close</button>
            </div>
        </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Publication {
  id: number;
  title: string;
  constellation: string;
  abstract: string;
  x: number;
  y: number;
}

const props = defineProps<{
  publications: Publication[];
}>();

const activeConstellation = ref<string | null>(null);
const selectedPublication = ref<Publication | null>(null);

const setActive = (constellation: string | null) => {
  activeConstellation.value = constellation;
};

const selectPublication = (publication: Publication) => {
  selectedPublication.value = publication;
};

// Generate SVG paths for constellation lines
const constellations = ref(
    Object.values(props.publications.reduce((acc, pub) => {
        if (!acc[pub.constellation]) {
            acc[pub.constellation] = { name: pub.constellation, points: [] };
        }
        acc[pub.constellation].points.push({ x: pub.x, y: pub.y });
        return acc;
    }, {} as Record<string, { name: string, points: {x: number, y: number}[] }>))
    .map(c => {
        const path = c.points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x}% ${p.y}%`).join(' ');
        return { name: c.name, path };
    })
);
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
