<template>
  <div v-if="!isLoading && data" class="flex flex-wrap gap-3">
    <OutlineButton
      v-for="goal in data"
      :key="goal.id"
      :disabled="goal.completionCount >= goal.desiredWeeklyFrequency"
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

<script setup lang="ts">
import { Plus } from "lucide-vue-next";
import OutlineButton from "../components/ui/OutlineButton.vue";
import { useQuery,useQueryClient  } from "@tanstack/vue-query";
import { getPendingGoals } from "../../http/GetPendingGoals.ts";
import { createGoalCompletion } from "../../http/CreateGoalCompletion.ts";

const queryClient = useQueryClient();

const { data, isLoading } = useQuery({
  queryKey: ['pending-goals'],
  queryFn: getPendingGoals,
  staleTime: 1000 * 60, // 60 seconds
});

async function handleCompleteGoal(goalId: string) {
await createGoalCompletion ( goalId )
queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
queryClient.invalidateQueries({ queryKey: ['summary'] })
}
</script>
