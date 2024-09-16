<template>
  <RadioGroupRoot   v-bind="props" class="flex flex-col gap-2 ">
    <slot></slot>
  </RadioGroupRoot>
</template>

<script setup lang="ts">
import { RadioGroupRoot  } from 'radix-vue'

const props = defineProps<{
  disabled?: boolean
}>()
</script>