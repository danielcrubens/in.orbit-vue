<template>
 <img src="../assets/logo-in-orbit.svg" alt="in.orbit" />
    <img src="../assets/lets-start-illustration.svg" alt="in.orbit" />
    <p class="text-zinc-300 leading-relaxed max-w-80 text-center">Você ainda não cadastrou nenhuma meta, que tal
      cadastrar um agora mesmo?</p>
      <DialogTrigger as-child>
        <Button>
          <Plus :size="14" />Cadastrar meta
        </Button>
      </DialogTrigger>
</template>

<script setup>
import Button from "./ui/Button.vue";
import { DialogTrigger} from "radix-vue";
</script>