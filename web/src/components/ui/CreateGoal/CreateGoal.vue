<template>
  <DialogContent
    class="fixed right-0 top-4 z-[100] h-[95vh] w-auto rounded-[6px] border-[1px] border-zinc-600 p-6 shadow-lg">
    <div class="flex flex-col gap-6 h-full">
      <div class="flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <DialogTitle class="font-bold text-xl">Cadastrar meta</DialogTitle>
          <DialogClose aria-label="Close">
            <X :size="14" class="text-zinc-600" />
          </DialogClose>
        </div>
        <DialogDescription>
          Adicione atividades que te fazem bem e <br />
          que você quer continuar praticando toda semana.
        </DialogDescription>
      </div>
      <form action="" class="flex-1 flex flex-col justify-between">
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <Label for="title">Qual atividade?</Label>
            <Input id="title" placeholder="Praticar exercícios, meditar, etc.." type="text"
              class="w-full rounded-lg border border-zinc-900 px-4 py-3 outline-none" />
          </div>
          <div class="flex flex-col gap-2">
            <Label for="title">Quantas vezes na semana?</Label>
            <RadioGroup v-model="radioStateSingle">
              <RadioGroupItem id="1" value="default">
                <RadioGroupIndicator :checked="radioStateSingle === 'default'" />
                <span class="text-zinc-300 text-sm font-medium leading-none">1x na semana</span>
                <span class="text-lg leading-none">🥱</span>
              </RadioGroupItem>
              <RadioGroupItem id="2" value="2">
                <RadioGroupIndicator :checked="radioStateSingle === '2'" />
                <span class="text-zinc-300 text-sm font-medium leading-none">2x na semana</span>
                <span class="text-lg leading-none">😊</span>
              </RadioGroupItem>
              <RadioGroupItem id="3" value="3">
                <RadioGroupIndicator :checked="radioStateSingle === '3'" />
                <span class="text-zinc-300 text-sm font-medium leading-none">3x na semana</span>
                <span class="text-lg leading-none">💪</span>
              </RadioGroupItem>
            </RadioGroup>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <DialogClose class="flex-1" asChild aria-label="Close">
            <Button type="button" variant="secondary">Fechar</Button>
          </DialogClose>
          <Button class="flex-1">Salvar</Button>
        </div>
      </form>
    </div>
  </DialogContent>
</template>

<script setup>
import { Plus, X } from "lucide-vue-next";
import Label from "../Label.vue";
import Input from "../Input.vue";
import RadioGroup from "../RadioGroup/RadioGroup.vue";
import RadioGroupItem from "../RadioGroup/RadioGroupItem.vue";
import RadioGroupIndicator from "../RadioGroup/RadioGroupIndicator.vue";
import Button from "../Button.vue";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "radix-vue";
</script>
