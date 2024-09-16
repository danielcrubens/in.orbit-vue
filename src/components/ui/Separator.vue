<template>
  <div :class="mergedClasses"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { twMerge } from 'tailwind-merge';

interface Props {
  class?: string;
}

const props = defineProps<Props>();

const mergedClasses = computed(() => twMerge('h-px bg-zinc-900', props.class));
</script>