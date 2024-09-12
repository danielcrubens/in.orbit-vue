<template>
  <div v-if="data" class="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <InOrbitIcon />
        <span class="text-lg font-semibold capitalize">{{ firstDayOfWeek }} - {{ lastDayOfWeek }}</span>
      </div>
      <div class="flex items-center gap-3">
        <DialogTrigger as-child>
          <Button size="sm">
            <Plus :size="14" />Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <Progress :value="data.completed" :max="data.total">
        <ProgressBar :style="{ width: `${completedPercentage}%` }" />
      </Progress>
    </div>
    <div class="flex items-center justify-between text-xs text-zinc-400">
      <span>
        Você completou
        <span class="text-zinc-100">{{ data.completed }}</span> de
        <span class="text-zinc-100">{{ data.total }}</span> metas nessa
        semana.
      </span>
      <span>{{ completedPercentage }}%</span>
    </div>
    <Separator />
    <PendingGoals/>
    <div class="flex flex-col gap-6">
      <h2 class="text-xl font-medium">Sua semana</h2>
      <div v-for="(goals, date) in data.goalsPerDay" :key="date" class="flex flex-col gap-4">
        <h3 class="font-medium">
          <span class="capitalize"> {{ dayjs(date).format('dddd') }} </span> 
          <span class="text-zinc-400 text-xs" > ({{ dayjs(date).format('D[ de ]MMMM') }}) </span>
        </h3>

        <ul class="flex flex-col gap-3">
          <li v-for="goal in goals" :key="goal.id" class="flex items-center gap-2">
            <CheckCircle2 class="size-4 text-pink-500" />
            <span class="text-sm text-zinc-400">
              Você completou "
              <span class="text-zinc-100">{{ goal.title }}</span>" às 
              <span class="text-zinc-100">{{ dayjs(goal.completedAt).format('HH:mm') }}h</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Button from "./ui/Button.vue";
import { DialogTrigger } from "radix-vue";
import InOrbitIcon from "../components/InOrbitIcon.vue";
import { CheckCircle2, Plus } from "lucide-vue-next";
import ProgressBar from "../components/ui/ProgressBar.vue";
import Progress from "../components/ui/Progress.vue";
import Separator from "../components/ui/Separator.vue";
import { ProgressIndicator, ProgressRoot } from 'radix-vue'
import { useQuery } from "@tanstack/vue-query"
import { getSummary } from "../../http/GetSummary";
import dayjs from 'dayjs';
import ptBR from 'dayjs/locale/pt-br';
import PendingGoals from '../components/PendingGoals.vue';

dayjs.locale(ptBR);

const { data } = useQuery({
  queryKey: ['summary'],
  queryFn: getSummary,
  staleTime: 1000 * 60,
});

const firstDayOfWeek = computed(() => dayjs().startOf('week').format('D MMM'));
const lastDayOfWeek = computed(() => dayjs().endOf('week').format('D MMM'));
const completedPercentage = computed(() => data.value ? Math.round((data.value.completed * 100) / data.value.total) : 0);
const formattedToday = computed(() => dayjs().format('D [de] MMMM'));
</script>