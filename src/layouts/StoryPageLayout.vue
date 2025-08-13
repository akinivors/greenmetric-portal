<template>
  <div class="relative">
    <JourneyNavigator :items="navItems" :active-section="activeSection" />
    <JourneyLine :active-section="activeSection" />

    <div class="space-y-20 lg:pl-20">
      <router-view :nav-items="navItems" @update-active-section="updateActiveSection" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import JourneyNavigator from '../components/JourneyNavigator.vue';
import JourneyLine from '../components/JourneyLine.vue';

// This layout now owns the navigation data and state
const navItems = ref<{ id: string; title: string }[]>([]);
const activeSection = ref<string | null>(null);

const updateActiveSection = (id: string, items: { id: string; title: string }[]) => {
  activeSection.value = id;
  if (items && items.length) {
    navItems.value = items;
  }
};
</script>
