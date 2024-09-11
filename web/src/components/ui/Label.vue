<template>
  <label :class="labelClasses" v-bind="$attrs">
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";

const attrs = useAttrs();

const labelClasses = computed(() => {
  const defaultClasses = "font-medium text-sm tracking-tight leading-normal";
  const customClasses = (attrs.class as string) || "";
  return `${defaultClasses} ${customClasses}`.trim();
});
</script>