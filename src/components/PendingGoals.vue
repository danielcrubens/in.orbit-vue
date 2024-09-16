<template>
  <div v-if="!isLoading && data" class="flex flex-wrap gap-3">
    <OutlineButton
      v-for="goal in data"
      :key="goal.id"
      :disabled="goal.completionCount >= goal.desiredWeeklyFrequency || loadingGoals.get(goal.id)"
      @click="handleCompleteGoal(goal.id)"
    >
      <template v-if="loadingGoals.get(goal.id)">
        <div class="w-4 h-4 border-2 border-t-2 border-zinc-600 border-t-transparent rounded-full animate-spin mr-2"></div>
        Carregando...
      </template>
      <template v-else>
        <Plus class="size-4 text-zinc-600" />
        {{ goal.title }}
      </template>
    </OutlineButton>
  </div>
  <div v-else>
    Carregando ou nenhum dado disponível...
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Plus } from "lucide-vue-next";
import OutlineButton from "../components/ui/OutlineButton.vue";
import { useQuery, useQueryClient } from "@tanstack/vue-query";
import { getPendingGoals } from "../../http/GetPendingGoals.ts";
import { createGoalCompletion } from "../../http/CreateGoalCompletion.ts";

const queryClient = useQueryClient();

const { data, isLoading } = useQuery({
  queryKey: ['pending-goals'],
  queryFn: getPendingGoals,
  staleTime: 1000 * 60, // 60 seconds
});

const loadingGoals = ref(new Map());

async function handleCompleteGoal(goalId: string) {
  loadingGoals.value.set(goalId, true);
  try {
    await createGoalCompletion(goalId);
    await queryClient.invalidateQueries({ queryKey: ['pending-goals'] });
    await queryClient.invalidateQueries({ queryKey: ['summary'] });
  } catch (error) {
    console.error('Erro ao completar a meta:', error);
  } finally {
    loadingGoals.value.set(goalId, false);
  }
}
</script>