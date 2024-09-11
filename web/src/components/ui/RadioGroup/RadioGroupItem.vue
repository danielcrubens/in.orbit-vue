<template>
  <RadioGroupItem v-bind="$attrs" :value="value" :class="[
    'group bg-black border border-zinc-900 rounded-lg px-4 py-2.5 flex items-center justify-between outline-none',
    'hover:border-zinc-800',
    'focus-visible:border-pink-500 focus-visible:ring-4 ring-pink-500/10',
    'data-[state=checked]:bg-pink-500/5 data-[state=checked]:border-pink-500']">
    <slot></slot>
  </RadioGroupItem>
</template>

<script setup lang="ts">
import { RadioGroupItem } from "radix-vue";

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
});
</script>
