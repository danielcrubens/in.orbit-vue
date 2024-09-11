<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Definindo os estilos usando tailwind-variants
const button = tv({
  base: 'flex items-center justify-center gap-2 rounded-lg text-sm font-medium tracking-tight outline-none ring-offset-2 ring-offset-black focus-visible:ring-2',

  variants: {
    variant: {
      primary:
        'bg-violet-500 text-violet-50 hover:bg-violet-600 ring-violet-500',
      secondary: 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 ring-zinc-900',
    },

    size: {
      default: 'px-4 py-2.5',
      sm: 'px-3 py-1.5',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

// Definindo as props do componente
const props = defineProps<{
  variant?: VariantProps<typeof button>['variant'],
  size?: VariantProps<typeof button>['size'],
  class?: string
}>()

// Criação de uma referência para o botão
const buttonRef = ref<HTMLButtonElement | null>(null)
</script>

<template>
  <button
    ref="buttonRef"
    :class="button({ variant: props.variant, size: props.size, className: props.class })"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
