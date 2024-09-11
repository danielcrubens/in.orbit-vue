<template>
  <div class="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <InOrbitIcon />
        <span class="text-lg font-semibold capitalize">5 a 10 de Agosto </span>
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
      <Progress :value="8" :max="15">
        <ProgressBar :style="{ width: '50%' }" />
      </Progress>
    </div>
    <div class="flex items-center justify-between text-xs text-zinc-400">
      <span>
        Você completou{' '}
        <span class="text-zinc-100">8</span> de{' '}
        <span class="text-zinc-100">15</span> metas nessa
        semana.
      </span>
      <span>{completedPercentage}%</span>
    </div>
    <Separator/>
    <div class="flex flex-wrap gap-3">
      <OutlineButton>
        <Plus size="14" class="text-zinc-600"/>
        Meditar
      </OutlineButton>
      <OutlineButton>
        <Plus size="14" class="text-zinc-600"/>
        Nadar
      </OutlineButton>
      <OutlineButton>
        <Plus size="14" class="text-zinc-600"/>
        Praticar exercício
      </OutlineButton>
    </div>
    <div class="flex flex-col gap-6">
      <h2 class="text-xl font-medium">Sua semana</h2>
        <div class="flex flex-col gap-4">
          <h3 class="font-medium">Domingo <span class="text-zinc-400 text-xs">{ 10 de Agosto }</span></h3>
          <ul class="flex flex-col gap-3"> 
            <li class="flex items-center gap-2">
              <CheckCircle2 :size="14" class="text-pink-400"/>
              <span class="text-sm text-zinc-400">Você completou "<span class="text-zinc-100 font-bold">Acordar cedo </span>" <span class="text-zinc-100 font-bold">às 08:13h</span></span>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script setup>
import Button from "./ui/Button.vue";
import { DialogTrigger } from "radix-vue";
import InOrbitIcon from "../components/InOrbitIcon.vue";
import { CheckCircle2, Plus } from "lucide-vue-next";
import ProgressBar from "../components/ui/ProgressBar.vue";
import Progress from "../components/ui/Progress.vue";
import Separator from "../components/ui/Separator.vue";
import OutlineButton from "../components/ui/OutlineButton.vue";
import { ProgressIndicator, ProgressRoot } from 'radix-vue'
</script>