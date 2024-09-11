<template>
  <ProgressRoot v-bind="$props" class="bg-zinc-900 rounded-full h-2">
    <slot></slot>
  </ProgressRoot>
</template>

<script setup lang="ts">
import { ProgressRoot } from 'radix-vue'
</script>
