<template>
  <div class="relative w-4 h-4 flex items-center justify-center">
    <Circle v-show="!checked" class="size-4 text-zinc-600" />
    <CheckCircle2 v-show="checked" class="size-4 text-pink-500" />
  </div>
</template>

<script setup lang="ts">
import { Circle, CheckCircle2 } from 'lucide-vue-next';

const props = defineProps<{
  checked: boolean
}>();
</script>

<style scoped>
.size-4 {
  width: 1rem;
  height: 1rem;
}
</style>
