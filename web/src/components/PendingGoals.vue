<template>
  <div v-if="!isLoading && data" class="flex flex-wrap gap-3">
    <OutlineButton
      v-for="goal in data"
      :key="goal.id"
      :disabled="goal.completionCount === 0 || goal.completionCount >= goal.desiredWeeklyFrequency"

      @click="handleCompleteGoal(goal.id)"
    >
      <Plus class="size-4 text-zinc-600" />
      {{ goal.title }}
    </OutlineButton>
  </div>
  <div v-else>
    Carregando ou nenhum dado disponível...
  </div>
</template>

<script setup>
import { Plus } from "lucide-vue-next";
import OutlineButton from "../components/ui/OutlineButton.vue";
import { useQuery } from "@tanstack/vue-query";
import { getPendingGoals } from "../../http/GetPendingGoals.ts";

// Fetch pending goals
const { data, isLoading } = useQuery({
  queryKey: ['pending-goals'],
  queryFn: getPendingGoals,
  staleTime: 1000 * 60, // 60 seconds
});

// Handle goal completion
async function handleCompleteGoal(goalId) {
  // Logic to handle goal completion
}
</script>
