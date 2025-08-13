<template>
  <nav class="fixed top-1/2 -translate-y-1/2 left-4 z-40 hidden lg:block">
    <ul class="space-y-2">
      <li v-for="item in items" :key="item.id">
        <a 
          :href="`#${item.id}`" 
          @click.prevent="scrollTo(item.id)"
          :class="[
            'block w-3 h-3 rounded-full transition-all duration-300',
            activeSection === item.id ? 'bg-green-500 scale-150' : 'bg-gray-300 dark:bg-gray-600 hover:bg-green-400'
          ]"
          :title="item.title"
        ></a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  items: { id: string; title: string }[];
  activeSection: string | null;
}>();

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
