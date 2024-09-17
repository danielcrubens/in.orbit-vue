<template>
  <DialogContent
    class="lg:fixed absolute top-8 right-0 lg:top-1 z-[100] lg:h-[99vh] w-auto rounded-[6px] border-[1px] border-zinc-600 lg:p-6 p-3 shadow-lg">
    <div class="flex flex-col gap-6 h-full">
      <div class="flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <DialogTitle class="font-bold text-lg">Cadastrar meta</DialogTitle>
          <DialogClose aria-label="Close">
            <X :size="14" class="text-zinc-600" />
          </DialogClose>
        </div>
        <DialogDescription>
         <p class="text-md"> Adicione atividades que te fazem bem e 
          que você<br class="hidden lg:block" /> quer continuar praticando toda semana.</p>
        </DialogDescription>
      </div>
      <form @submit.prevent="handleCreateGoal" class="flex-1 flex flex-col justify-between">
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <Label for="title">Qual atividade?</Label>
            <Input id="title" placeholder="Praticar exercícios, meditar, etc.." v-model="form.title" autocomplete="off"
              type="text" class="w-full rounded-lg border border-zinc-900 px-4 py-3 outline-none" />
            <p v-if="errors.title" class="text-red-400 text-sm">
              {{ errors.title }}
            </p>
          </div>
          <div class="flex flex-col gap-2 overflow-auto ">
            <Label for="frequency">Quantas vezes na semana?</Label>
            <RadioGroup class="overflow-y-auto  h-[40vh] lg:h-auto" v-model="form.desiredWeeklyFrequency">
              <RadioGroupItem v-for="option in weeklyFrequencyOptions" :key="option.value.toString()" :value="option.value">
                <RadioGroupIndicator :checked="form.desiredWeeklyFrequency === option.value"  />
                <span class="text-zinc-300 text-sm font-medium leading-none">
                  {{ option.label }}
                </span>
                <span class="text-lg leading-none">
                  <span class="text-lg leading-none">{{ option.emoji }}</span>
                </span>
              </RadioGroupItem>
            </RadioGroup>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <DialogClose class="flex-1" asChild aria-label="Close">
            <Button type="button" variant="secondary">Fechar</Button>
          </DialogClose>
          <Button class="flex-1 btn-primary">Salvar</Button>
        </div>
      </form>
    </div>
  </DialogContent>
</template>

<script setup lang="ts">
import { useToast } from "vue-toastification";
import { reactive } from 'vue';
import { X } from "lucide-vue-next";
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
  DialogTitle,
} from "radix-vue";
import { useQueryClient } from "@tanstack/vue-query";
import { createGoal } from "/http/CreateGoal";

const toast = useToast();
const queryClient = useQueryClient();

const form = reactive({
  title: '',
  desiredWeeklyFrequency: 1,
});

const errors = reactive({});

const weeklyFrequencyOptions = [
  { value: 1, label: '1x na semana', emoji: '🥱' },
  { value: 2, label: '2x na semana', emoji: '🙂' },
  { value: 3, label: '3x na semana', emoji: '😎' },
  { value: 4, label: '4x na semana', emoji: '😜' },
  { value: 5, label: '5x na semana', emoji: '🤨' },
  { value: 6, label: '6x na semana', emoji: '🤯' },
  { value: 7, label: 'Todos dias da semana', emoji: '🔥' },
];

const validateForm = () => {
  if (form.title.trim() === '') {
    toast.error('Informe a atividade que deseja realizar', {
      position: "top-left",
      timeout: 3400,
      pauseOnFocusLoss: false,
      pauseOnHover: false,
      closeButton: false,
    });
    return false;
  }
  return true;
};

const showToastSuccess = () => {
  toast.success('Meta cadastrada com sucesso!', {
    position: "top-left",
    timeout: 3400,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    closeButton: false,
  });
};

const showToastError = (message: string) => {
  toast.error(message, {
    position: "top-left",
    timeout: 3400,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    closeButton: false,
  });
};

const handleCreateGoal = async () => {
  if (!validateForm()) {
    return;
  }

  try {
    await createGoal({
      title: form.title,
      desiredWeeklyFrequency: form.desiredWeeklyFrequency,
    });

    queryClient.invalidateQueries({ queryKey: ['summary'] });
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] });

    showToastSuccess(); 
    
    form.title = '';
    form.desiredWeeklyFrequency = 1;
  } catch (error) {
    showToastError('Erro ao cadastrar meta. Tente novamente.');
  }
};
</script>