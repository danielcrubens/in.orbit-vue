<template>
  <button :class="buttonClasses" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'

const props = defineProps<{
  class?: string
}>()

const buttonClasses = computed(() => {
  return twMerge(
    'flex items-center px-3 py-2 gap-2 leading-none rounded-full border border-dashed border-zinc-800 text-sm text-zinc-300 hover:border-zinc-700 disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:border-pink-500 ring-pink-500/10 focus-visible:ring-4',
    props.class
  )
})
</script>