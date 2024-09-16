<template>
  <DialogRoot>
    <div class="lg:h-screen flex flex-col items-center justify-center lg:gap-8">
      <Summary v-if="data?.total && data.total > 0" />
      <EmptyGoals v-else />
      <DialogOverlay class="fixed inset-0 z-[99] bg-black lg:bg-opacity-10 backdrop-blur-sm" />
      <CreateGoal />
    </div>
  </DialogRoot>
</template>

<script setup lang="ts">

import { useQuery } from "@tanstack/vue-query"
import { getSummary } from "../http/GetSummary"
import CreateGoal from "./components/ui/CreateGoal/CreateGoal.vue";
import EmptyGoals from "./components/EmptyGoals.vue";
import Summary from "./components/Summary.vue";
import { DialogOverlay, DialogRoot } from "radix-vue";

const { data } = useQuery({
  queryKey: ['summary'],
  queryFn: getSummary,
  staleTime: 1000 * 60,
})
</script>