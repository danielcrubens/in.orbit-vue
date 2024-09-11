<template>
  <DialogRoot>
    <div class="h-screen flex flex-col items-center justify-center gap-8">
      <EmptyGoals />
      <DialogOverlay class="fixed inset-0 z-[99] bg-black bg-opacity-10 backdrop-blur-sm" />
      <CreateGoal />
    </div>
  </DialogRoot>
</template>

<script setup>
import CreateGoal from "./components/ui/CreateGoal/CreateGoal.vue";
import Button from "./components/ui/Button.vue";
import EmptyGoals from "./components/EmptyGoals.vue";
import { DialogOverlay, DialogRoot } from "radix-vue";
import { ref } from 'vue';
const radioStateSingle = ref('default');
</script>